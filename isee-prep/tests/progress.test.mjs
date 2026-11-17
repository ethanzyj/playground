import { test } from "node:test";
import assert from "node:assert/strict";
import {
  PROBLEM_PROGRESS_OPTIONS,
  answerState,
  recordAttempt,
  clearAttempt,
  sanitizeAttempts,
  sanitizeProgress,
  sanitizeIdList,
  summarizeProgress,
  conceptAccuracy,
  exportProgress
} from "../assets/progress.mjs";
import { createStore } from "../assets/store.mjs";

const problems = [
  { id: "a", level: "lower", section: "verbal", type: "synonym", difficulty: "easy", conceptIds: ["synonyms"], number: 1 },
  { id: "b", level: "lower", section: "verbal", type: "synonym", difficulty: "hard", conceptIds: ["synonyms", "word-parts"], number: 2 },
  { id: "c", level: "middle", section: "mathematics", type: "math-achievement", difficulty: "medium", conceptIds: ["fractions-decimals"], number: 1 }
];

test("attempts record, report and clear without mutating the input", () => {
  const before = {};
  const after = recordAttempt(before, "a", 2, true, "2026-01-01T00:00:00.000Z");
  assert.deepEqual(before, {});
  assert.equal(answerState(after, "a"), "correct");
  assert.equal(answerState(recordAttempt(after, "b", 0, false), "b"), "incorrect");
  assert.equal(answerState(clearAttempt(after, "a"), "a"), "unattempted");
});

test("sanitizers drop invalid saved data", () => {
  const valid = new Set(["a", "b"]);
  assert.deepEqual(sanitizeAttempts({ a: { choice: 1, correct: true, at: "x" }, b: { choice: 9 }, z: { choice: 0 }, c: null }, valid), { a: { choice: 1, correct: true, at: "x" } });
  assert.deepEqual(sanitizeAttempts([], valid), {});
  assert.deepEqual(sanitizeAttempts("oops", valid), {});
  assert.deepEqual(sanitizeProgress({ a: "haveApproach", b: "nonsense", z: "haveApproach" }, valid), { a: "haveApproach" });
  assert.deepEqual(sanitizeIdList(["a", "q", 4], valid), ["a"]);
  assert.deepEqual(sanitizeIdList({}, valid), []);
});

test("summaries count statuses, attempts and accuracy", () => {
  const state = {
    progress: { a: "needUnderstanding", c: "haveApproach" },
    attempts: { a: { choice: 0, correct: true }, b: { choice: 1, correct: false } }
  };
  const summary = summarizeProgress(problems, state);
  assert.equal(summary.total, 3);
  assert.equal(summary.marked, 2);
  assert.equal(summary.unmarked, 1);
  assert.equal(summary.attempted, 2);
  assert.equal(summary.correct, 1);
  assert.equal(summary.incorrect, 1);
  assert.equal(summary.unattempted, 1);
  assert.equal(summary.accuracy, 0.5);
  assert.equal(summary.statuses.find((entry) => entry.status === "needUnderstanding").problems[0].id, "a");
  assert.deepEqual(PROBLEM_PROGRESS_OPTIONS, ["needUnderstanding", "needStartingPoint", "haveApproach"]);
  assert.equal(summarizeProgress([], {}).accuracy, null);
});

test("conceptAccuracy ranks the weakest concepts first", () => {
  const attempts = { a: { choice: 0, correct: true }, b: { choice: 1, correct: false } };
  const rows = conceptAccuracy(problems, attempts);
  assert.equal(rows[0].conceptId, "word-parts");
  assert.equal(rows[0].accuracy, 0);
  assert.equal(rows.find((row) => row.conceptId === "synonyms").accuracy, 0.5);
  assert.ok(!rows.some((row) => row.conceptId === "fractions-decimals"));
});

test("exportProgress produces a complete, privacy-safe snapshot", () => {
  const snapshot = exportProgress(problems, {
    progress: { a: "haveApproach" },
    attempts: { a: { choice: 3, correct: true, at: "2026-01-01T00:00:00.000Z" } }
  }, [{ id: "synonyms", en: "Synonyms", zh: "同义词" }], "2026-02-02T00:00:00.000Z");
  assert.equal(snapshot.schemaVersion, 1);
  assert.equal(snapshot.problems.length, 3);
  assert.deepEqual(snapshot.problems[0].answer, { choice: 3, correct: true, at: "2026-01-01T00:00:00.000Z" });
  assert.equal(snapshot.problems[0].status, "haveApproach");
  assert.equal(snapshot.problems[1].status, null);
  assert.equal(snapshot.problems[1].answer, null);
  assert.equal(snapshot.summary.statuses[2].count, 1);
  assert.ok(!("problems" in snapshot.summary.statuses[0]), "status entries are compacted in the export");
});

function fakeStorage(overrides = {}) {
  const data = new Map();
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => { data.set(key, String(value)); },
    removeItem: (key) => { data.delete(key); },
    data,
    ...overrides
  };
}

test("store prefixes keys, round-trips JSON and tolerates corrupt data", (t) => {
  t.mock.method(console, "error", () => {});
  const storage = fakeStorage();
  const store = createStore(storage);
  assert.equal(store.write("mastered", ["x"]), true);
  assert.ok(storage.data.has("isee-mastered"));
  assert.deepEqual(store.read("mastered", []), ["x"]);
  storage.data.set("isee-bad", "{not json");
  assert.deepEqual(store.read("bad", "fallback"), "fallback");
  assert.equal(store.readText("missing", "none"), "none");
  store.remove("mastered");
  assert.deepEqual(store.read("mastered", []), []);
});

test("store reports failed writes instead of throwing", (t) => {
  t.mock.method(console, "error", () => {});
  const store = createStore(fakeStorage({ setItem() { throw new Error("quota"); } }));
  assert.equal(store.failed, false);
  assert.equal(store.write("k", 1), false);
  assert.equal(store.writeText("k", "v"), false);
  assert.equal(store.failed, true);
});
