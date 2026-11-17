import { test } from "node:test";
import assert from "node:assert/strict";
import {
  TEST_PACE_SECONDS,
  TEST_COUNTS,
  mulberry32,
  buildTest,
  testSeconds,
  formatClock,
  createSession,
  validateTestSession,
  remainingMs,
  finishSession,
  scoreSession
} from "../assets/test-mode.mjs";

// A synthetic bank with every type at every level.
function makeBank() {
  const problems = [];
  const add = (id, level, section, type, extra = {}) => problems.push({ id, level, section, type, answer: 1, conceptIds: [`c-${section}`], choices: ["a", "b", "c", "d"], ...extra });
  for (const level of ["lower", "middle", "upper"]) {
    for (let index = 0; index < 20; index += 1) add(`syn-${level}-${index}`, level, "verbal", "synonym");
    for (let index = 0; index < 20; index += 1) add(`sc-${level}-${index}`, level, "verbal", "sentence-completion");
    for (let index = 0; index < 20; index += 1) add(`wp-${level}-${index}`, level, "quantitative", "word-problem");
    if (level !== "lower") for (let index = 0; index < 20; index += 1) add(`qc-${level}-${index}`, level, "quantitative", "quantitative-comparison");
    for (let index = 0; index < 30; index += 1) add(`ma-${level}-${index}`, level, "mathematics", "math-achievement");
    for (let passage = 1; passage <= 3; passage += 1) {
      for (let question = 1; question <= 5; question += 1) add(`rc-${level}-${passage}-q${question}`, level, "reading", "reading-comprehension", { passageId: `rc-${level[0]}${passage}` });
    }
  }
  return problems;
}

const bank = makeBank();
const byId = new Map(bank.map((problem) => [problem.id, problem]));

test("mulberry32 is deterministic", () => {
  const a = mulberry32(42);
  const b = mulberry32(42);
  assert.deepEqual([a(), a(), a()], [b(), b(), b()]);
  assert.notEqual(mulberry32(1)(), mulberry32(2)());
});

test("buildTest honours level, section and count and is repeatable for a seed", () => {
  const keys = buildTest({ problems: bank, level: "middle", section: "mathematics", count: 10, seed: 7 });
  assert.equal(keys.length, 10);
  assert.ok(keys.every((key) => byId.get(key).level === "middle" && byId.get(key).section === "mathematics"));
  assert.deepEqual(buildTest({ problems: bank, level: "middle", section: "mathematics", count: 10, seed: 7 }), keys);
  assert.notDeepEqual(buildTest({ problems: bank, level: "middle", section: "mathematics", count: 10, seed: 8 }), keys);
  assert.equal(new Set(keys).size, keys.length);
});

test("verbal tests split synonyms and sentence completion and list synonyms first", () => {
  const keys = buildTest({ problems: bank, level: "upper", section: "verbal", count: 10, seed: 3 });
  const types = keys.map((key) => byId.get(key).type);
  assert.equal(types.filter((type) => type === "synonym").length, 5);
  assert.ok(types.slice(0, 5).every((type) => type === "synonym"));
  assert.ok(types.slice(5).every((type) => type === "sentence-completion"));
});

test("quantitative tests include comparisons at Middle/Upper but not Lower", () => {
  const middle = buildTest({ problems: bank, level: "middle", section: "quantitative", count: 20, seed: 1 }).map((key) => byId.get(key).type);
  assert.equal(middle.filter((type) => type === "quantitative-comparison").length, 9);
  const lower = buildTest({ problems: bank, level: "lower", section: "quantitative", count: 20, seed: 1 }).map((key) => byId.get(key).type);
  assert.ok(lower.every((type) => type === "word-problem"));
});

test("reading tests take whole passages", () => {
  const keys = buildTest({ problems: bank, level: "lower", section: "reading", count: 2, seed: 5 });
  assert.equal(keys.length, 10);
  const passages = new Set(keys.map((key) => byId.get(key).passageId));
  assert.equal(passages.size, 2);
});

test("mixed tests cover every section", () => {
  const keys = buildTest({ problems: bank, level: "middle", section: "mixed", count: 1, seed: 9 });
  const sections = new Set(keys.map((key) => byId.get(key).section));
  assert.deepEqual([...sections].sort(), ["mathematics", "quantitative", "reading", "verbal"]);
  assert.equal(keys.length, 8 + 8 + 5 + 10);
  const order = keys.map((key) => ["verbal", "quantitative", "reading", "mathematics"].indexOf(byId.get(key).section));
  assert.deepEqual(order, [...order].sort((a, b) => a - b));
});

test("prioritizing puts unanswered problems before answered ones", () => {
  const attempts = {};
  for (const problem of bank.filter((item) => item.level === "middle" && item.section === "mathematics").slice(0, 25)) attempts[problem.id] = { choice: 1, correct: true };
  const keys = buildTest({ problems: bank, level: "middle", section: "mathematics", count: 5, seed: 2, attempts });
  assert.ok(keys.every((key) => !attempts[key]), "only the 5 unattempted problems should be chosen");
  const mixedUp = buildTest({ problems: bank, level: "middle", section: "mathematics", count: 30, seed: 2, attempts });
  assert.equal(mixedUp.length, 30);
});

test("a wrong answer is prioritized over a correct one", () => {
  const pool = bank.filter((item) => item.level === "upper" && item.section === "mathematics");
  const attempts = {};
  pool.forEach((problem, index) => { attempts[problem.id] = { choice: 1, correct: index !== 3 }; });
  const keys = buildTest({ problems: bank, level: "upper", section: "mathematics", count: 1, seed: 4, attempts });
  assert.equal(keys[0], pool[3].id);
});

test("test length follows the official pace and rounds up to whole minutes", () => {
  const keys = buildTest({ problems: bank, level: "middle", section: "verbal", count: 20, seed: 1 });
  assert.equal(testSeconds(keys, byId, "middle"), 600);
  const lowerKeys = buildTest({ problems: bank, level: "lower", section: "reading", count: 1, seed: 1 });
  assert.equal(testSeconds(lowerKeys, byId, "lower"), 300);
  assert.deepEqual(Object.keys(TEST_PACE_SECONDS), ["lower", "middle", "upper"]);
  assert.deepEqual(TEST_COUNTS.reading, [1, 2, 3]);
});

test("formatClock pads and rounds up", () => {
  assert.equal(formatClock(0), "00:00");
  assert.equal(formatClock(61_000), "01:01");
  assert.equal(formatClock(59_001), "01:00");
  assert.equal(formatClock(3_725_000), "1:02:05");
  assert.equal(formatClock(-5), "00:00");
});

test("sessions have wall-clock deadlines and finish as submitted or expired", () => {
  const keys = buildTest({ problems: bank, level: "middle", section: "verbal", count: 10, seed: 1 });
  const session = createSession({ id: "t1", level: "middle", section: "verbal", keys, byId, now: 1_000_000 });
  assert.equal(session.deadline, 1_000_000 + 300_000);
  assert.equal(remainingMs(session, 1_100_000), 200_000);
  assert.equal(remainingMs(session, 9_999_999), 0);
  const early = finishSession(session, 1_100_000);
  assert.equal(early.status, "submitted");
  assert.equal(early.completedAt, 1_100_000);
  const late = finishSession(session, 2_000_000);
  assert.equal(late.status, "expired");
  assert.equal(late.completedAt, session.deadline, "time used is capped at the limit");
  assert.equal(finishSession(early, 5_000_000), early);
});

test("validateTestSession accepts good sessions and rejects tampering", () => {
  const keys = buildTest({ problems: bank, level: "upper", section: "mathematics", count: 10, seed: 1 });
  const session = createSession({ id: "t2", level: "upper", section: "mathematics", keys, byId, now: 5 });
  const valid = new Set(byId.keys());
  assert.equal(validateTestSession(session, valid), session);
  for (const bad of [
    null,
    { ...session, version: 2 },
    { ...session, level: "primary" },
    { ...session, deadline: session.deadline + 1 },
    { ...session, status: "paused" },
    { ...session, keys: [] },
    { ...session, keys: [keys[0], keys[0]] },
    { ...session, keys: ["missing"] },
    { ...session, answers: { [keys[0]]: 7 } },
    { ...session, answers: { other: 1 } }
  ]) {
    assert.throws(() => validateTestSession(bad, valid), /Invalid saved test session/);
  }
});

test("scoreSession counts correct, wrong and blank answers and ranks weak concepts", () => {
  const keys = buildTest({ problems: bank, level: "middle", section: "verbal", count: 10, seed: 1 });
  let session = createSession({ id: "t3", level: "middle", section: "verbal", keys, byId, now: 0 });
  assert.throws(() => scoreSession(session, byId), /running/);
  session = { ...session, answers: { [keys[0]]: 1, [keys[1]]: 1, [keys[2]]: 0 } };
  const done = finishSession(session, 10);
  const score = scoreSession(done, byId);
  assert.equal(score.total, 10);
  assert.equal(score.correct, 2);
  assert.equal(score.wrong, 1);
  assert.equal(score.blank, 7);
  assert.equal(score.percent, 0.2);
  assert.equal(score.bySection[0].section, "verbal");
  assert.equal(score.byConcept[0].conceptId, "c-verbal");
  assert.equal(score.questions[2].status, "wrong");
});
