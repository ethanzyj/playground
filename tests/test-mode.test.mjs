import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { TestMode, TEST_DURATION, testTime, validateTestSession, scoreTestSession } from "../assets/test-mode.mjs";
import { PRACTICE_PROBLEMS } from "../assets/practice-papers.mjs";
import { PROBLEM_REFERENCES } from "../assets/data.mjs";

const root = new URL("../", import.meta.url);
const answerKey = JSON.parse(readFileSync(new URL("assets/answer-key.json", root))).answers;
const practiceKey = JSON.parse(readFileSync(new URL("assets/practice/2026-practice-1/answer-key.json", root))).answers;
const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
function fixture({ storage, fetchImpl } = {}) {
  const dom = new JSDOM('<section id="problemsPanel"><div id="testModePanel"></div><div id="problemList"></div></section>', { url: "https://example.test/" });
  let time = 100000, user = "a", language = "en";
  const mount = dom.window.document.querySelector("#testModePanel");
  const problems = [...PROBLEM_REFERENCES, ...PRACTICE_PROBLEMS];
  const panel = new TestMode({
    mount, problems, storage: storage || dom.window.localStorage,
    getUserId: () => user, getLanguage: () => language, now: () => time, typeset() {},
    fetchImpl: fetchImpl || (async (path) => ({ ok: true, json: async () => JSON.parse(readFileSync(new URL(path, root))) }))
  });
  panel.update(PRACTICE_PROBLEMS.slice(0, 3));
  const click = (action) => mount.querySelector(`[data-test-action="${action}"]`).click();
  const select = (name, value) => {
    const input = mount.querySelector(`[data-test-${name}]`);
    input.value = String(value);
    input.dispatchEvent(new dom.window.Event("change"));
  };
  return { dom, panel, mount, click, select, setTime: (t) => { time = t; }, setUser: (u) => { user = u; },
    setLanguage: (l) => { language = l; }, close: () => { panel.dispose(); dom.window.close(); } };
}

test("year and paper selection starts a complete ordered paper for exactly 75 minutes", () => {
  const p = fixture();
  try {
    p.click("setup");
    assert.equal(p.panel.session, null);
    assert.equal(p.mount.querySelectorAll('input[type="checkbox"]').length, 0);
    assert.equal(p.mount.querySelector("[data-test-year]").value, "2026");
    assert.equal(p.mount.querySelector("[data-test-exam]").value, "practice-1");
    assert.match(p.mount.querySelector("[data-test-selection-count]").textContent, /25 questions/);
    p.click("start");
    assert.deepEqual(p.panel.session.keys, Array.from({ length: 25 }, (_, i) => `2026-practice-1-${i + 1}`));
    assert.equal(p.panel.session.deadline - p.panel.session.startedAt, TEST_DURATION);
    assert.equal(p.mount.querySelector("[data-test-clock]").textContent, "75:00");
    assert.equal(p.mount.closest("#problemsPanel").classList.contains("test-mode-active"), true);
    p.panel.update(PRACTICE_PROBLEMS.slice(20));
    assert.equal(p.mount.querySelectorAll(".test-question").length, 25);
    assert.equal(p.mount.querySelector(".problem-progress"), null);
    assert.equal(p.mount.querySelector(".card-actions"), null);
  } finally { p.close(); }
});

test("A/B papers use all questions regardless of Explorer filters and reset unavailable paper choices", () => {
  const p = fixture();
  try {
    p.click("setup");
    p.select("year", 2025);
    assert.deepEqual([...p.mount.querySelector("[data-test-exam]").options].map((o) => o.textContent), ["A", "B"]);
    p.select("exam", "AMC 10B");
    p.select("year", 2024);
    assert.equal(p.mount.querySelector("[data-test-exam]").value, "AMC 10B");
    p.panel.update([]);
    p.click("start");
    assert.deepEqual(p.panel.session.keys, Array.from({ length: 25 }, (_, i) => `2024-AMC10B-${i + 1}`));
    p.click("finish"); p.click("clear"); p.click("setup");
    p.select("year", 2025); p.select("exam", "AMC 10B");
    p.select("year", 2026);
    assert.equal(p.mount.querySelector("[data-test-exam]").value, "practice-1");
    assert.equal(p.mount.querySelector("[data-test-exam]").options.length, 1);
    p.select("year", 2025);
    assert.equal(p.mount.querySelector("[data-test-exam]").value, "AMC 10A");
  } finally { p.close(); }
});

test("answers persist, refresh uses the same deadline, and exact expiration locks input", () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
    p.setLanguage("both"); p.panel.render();
    assert.equal(p.mount.querySelectorAll(".practice-chinese").length, 25);
    assert.equal(p.mount.querySelector(".practice-solution-link"), null);
    const deadline = p.panel.session.deadline;
    p.panel.answer("2026-practice-1-1", "C");
    const saved = JSON.parse(p.dom.window.localStorage.getItem("amc10-test:a"));
    assert.equal(saved.answers["2026-practice-1-1"], "C");
    p.setTime(deadline - 1500);
    p.panel.restore(); p.panel.render();
    assert.equal(p.mount.querySelector("[data-test-clock]").textContent, "00:02");
    assert.equal(p.mount.querySelector('[data-test-answer="2026-practice-1-1"][value="C"]').checked, true);
    p.setTime(deadline);
    p.panel.tick();
    assert.equal(p.panel.session.status, "expired");
    assert.match(p.mount.textContent, /Time is up/);
    assert.match(p.mount.textContent, /Automatically submitted/);
    assert.equal([...p.mount.querySelectorAll("fieldset")].every((f) => f.disabled), true);
    p.panel.answer("2026-practice-1-2", "A");
    assert.equal(p.panel.session.answers["2026-practice-1-2"], undefined);
    assert.equal(p.panel.session.deadline, deadline);
    assert.equal(JSON.parse(p.dom.window.localStorage.getItem("amc10-test:a")).status, "expired");
  } finally { p.close(); }
});

test("background time and account changes never reset or leak a test", () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
    p.panel.answer("2026-practice-1-1", "E");
    const deadline = p.panel.session.deadline;
    p.setUser("b"); p.panel.tick();
    assert.equal(p.panel.session, null);
    assert.equal(p.mount.querySelector("[data-test-answer]"), null);
    p.click("setup"); p.click("start");
    p.panel.answer("2026-practice-1-2", "B");
    p.setUser("a"); p.setTime(deadline + 100000); p.panel.tick();
    assert.equal(p.panel.session.status, "expired");
    assert.deepEqual(p.panel.session.answers, { "2026-practice-1-1": "E" });
    p.setUser(null); p.panel.tick();
    assert.equal(p.panel.session, null);
  } finally { p.close(); }
});

test("finish locks saved choices without touching mastery", () => {
  const p = fixture();
  try {
    p.dom.window.localStorage.setItem("amc10-quests:a", '{"keep":true}');
    p.click("setup"); p.click("start");
    p.panel.answer("2026-practice-1-2", "D");
    p.click("finish");
    assert.equal(p.panel.session.status, "submitted");
    assert.match(p.mount.textContent, /Answers are locked/);
    assert.equal(p.mount.querySelector('[data-test-answer="2026-practice-1-2"][value="D"]').checked, true);
    p.panel.answer("2026-practice-1-2", "A");
    assert.equal(p.panel.session.answers["2026-practice-1-2"], "D");
    assert.equal(p.dom.window.localStorage.getItem("amc10-quests:a"), '{"keep":true}');
    p.click("clear");
    assert.equal(p.dom.window.localStorage.getItem("amc10-test:a"), null);
    assert.equal(p.panel.session, null);
    assert.equal(p.mount.closest("#problemsPanel").classList.contains("test-mode-active"), false);
  } finally { p.close(); }
});

test("corrupt caches stay intact and failed persistence cannot start or credit an answer", () => {
  const values = new Map([["amc10-test:a", "{bad"]]);
  let fail = false;
  const storage = {
    getItem: (key) => values.get(key) || null,
    setItem: (key, value) => { if (fail) throw new Error("Quota exceeded"); values.set(key, value); },
    removeItem: (key) => values.delete(key)
  };
  const p = fixture({ storage });
  try {
    assert.ok(p.mount.querySelector('[role="alert"]'));
    assert.equal(values.get("amc10-test:a"), "{bad");
    p.click("clear");
    p.click("setup");
    fail = true;
    p.click("start");
    assert.equal(p.panel.session, null);
    assert.match(p.mount.textContent, /Unable to save/);
    fail = false;
    p.click("retry-save");
    p.click("start");
    fail = true;
    p.panel.answer("2026-practice-1-1", "B");
    assert.equal(p.panel.session.answers["2026-practice-1-1"], undefined);
    p.setTime(p.panel.session.deadline);
    p.panel.tick();
    assert.equal(p.panel.session.status, "expired");
    assert.equal(p.mount.querySelector("fieldset").disabled, true);
  } finally { p.close(); }
});

test("official questions load without answers, retry failures, and ignore stale account responses", async () => {
  let fail = true, release;
  const paths = [];
  const p = fixture({ fetchImpl: async (path) => {
    paths.push(path);
    if (fail) return { ok: false };
    await new Promise((resolve) => { release = resolve; });
    return { ok: true, json: async () => JSON.parse(readFileSync(new URL(path, root))) };
  } });
  try {
    p.panel.update([PROBLEM_REFERENCES[0]]);
    p.click("setup"); p.click("start");
    await new Promise((r) => setTimeout(r, 0));
    assert.ok(p.mount.querySelector('[data-test-action="retry-load"]'));
    assert.equal(paths.some((path) => path.includes("answer-key")), false);
    fail = false; p.click("retry-load");
    const originalDeadline = p.panel.session.deadline;
    p.setUser("b"); p.panel.update(PRACTICE_PROBLEMS.slice(0, 1));
    release();
    await new Promise((r) => setTimeout(r, 0));
    assert.equal(p.panel.session, null);
    assert.equal(p.panel.papers.size, 0);
    p.setUser("a"); p.panel.update([PROBLEM_REFERENCES[0]]);
    release();
    await new Promise((r) => setTimeout(r, 0));
    assert.equal(p.panel.session.deadline, originalDeadline);
    assert.ok(p.mount.querySelector(".test-question ol li"));
    assert.equal(p.mount.querySelector("fieldset").disabled, false);
  } finally { p.close(); }
});

test("another tab's submission and answers cannot be overwritten by stale local answers", () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
    const other = { ...p.panel.session, answers: { "2026-practice-1-1": "A" } };
    p.dom.window.localStorage.setItem("amc10-test:a", JSON.stringify(other));
    p.panel.answer("2026-practice-1-2", "B");
    assert.deepEqual(p.panel.session.answers, { "2026-practice-1-1": "A", "2026-practice-1-2": "B" });
    const submitted = { ...p.panel.session, status: "submitted" };
    p.dom.window.localStorage.setItem("amc10-test:a", JSON.stringify(submitted));
    p.panel.answer("2026-practice-1-1", "C");
    assert.equal(p.panel.session.status, "submitted");
    assert.equal(p.panel.session.answers["2026-practice-1-1"], "A");
  } finally { p.close(); }
});

test("expiration merges the latest answers saved in another tab", () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
    const latest = { ...p.panel.session, answers: { "2026-practice-1-3": "E" } };
    p.dom.window.localStorage.setItem("amc10-test:a", JSON.stringify(latest));
    p.setTime(latest.deadline);
    p.panel.tick();
    assert.equal(p.panel.session.status, "expired");
    assert.deepEqual(p.panel.session.answers, latest.answers);
    assert.equal(p.mount.querySelector('[data-test-answer="2026-practice-1-3"][value="E"]').checked, true);
  } finally { p.close(); }
});

test("stale setup or account actions cannot overwrite an existing attempt", () => {
  const p = fixture();
  try {
    p.click("setup");
    const other = { version: 1, id: "another-tab", startedAt: 100000, deadline: 100000 + TEST_DURATION,
      keys: ["2026-practice-1-2"], answers: { "2026-practice-1-2": "A" }, status: "running" };
    p.dom.window.localStorage.setItem("amc10-test:a", JSON.stringify(other));
    p.panel.start();
    assert.equal(p.panel.session.id, "another-tab");
    p.setUser("b");
    p.dom.window.localStorage.setItem("amc10-test:b", JSON.stringify(other));
    p.panel.finish();
    assert.equal(p.panel.session.status, "running");
    p.setUser("a");
    p.panel.clear();
    assert.ok(p.dom.window.localStorage.getItem("amc10-test:a"));
  } finally { p.close(); }
});

test("timer formatting, persisted session validation, and localization", () => {
  assert.equal(TEST_DURATION, 4500000);
  assert.equal(testTime(TEST_DURATION), "75:00");
  assert.equal(testTime(1), "00:01");
  assert.equal(testTime(-1), "00:00");
  const p = fixture();
  try {
    p.setLanguage("zh"); p.panel.render();
    assert.match(p.mount.textContent, /测试模式/);
    p.click("setup"); p.click("start");
    p.setTime(200000); p.panel.tick();
    const valid = p.panel.session;
    assert.equal(validateTestSession(valid, p.panel.validKeys), valid);
    assert.throws(() => validateTestSession({ ...valid, deadline: valid.deadline + 1 }, p.panel.validKeys));
    assert.throws(() => validateTestSession({ ...valid, keys: ["unknown"] }, p.panel.validKeys));
    assert.throws(() => validateTestSession({ ...valid, answers: { [valid.keys[0]]: "F" } }, p.panel.validKeys));
    assert.throws(() => validateTestSession({ ...valid, answers: { [valid.keys[0]]: ["A"] } }, p.panel.validKeys));
    assert.ok(p.mount.querySelector("[data-test-clock]").classList.contains("test-clock-urgent") === false);
    p.setTime(valid.deadline - 1000); p.panel.tick();
    assert.ok(p.mount.querySelector("[data-test-clock]").classList.contains("test-clock-urgent"));
  } finally { p.close(); }
});

test("all 525 problems have keys and AMC scoring covers correct, wrong and blank answers", () => {
  const keys = { ...answerKey, ...practiceKey };
  assert.equal(Object.keys(keys).length, 525);
  for (const p of [...PROBLEM_REFERENCES, ...PRACTICE_PROBLEMS]) {
    const key = `${p.year}-${p.exam.replace(" ", "")}-${p.problemNumber}`;
    assert.match(keys[key], /^[A-E]$/);
  }
  const selected = Array.from({ length: 25 }, (_, i) => `2025-AMC10A-${i + 1}`);
  const session = { keys: selected, answers: {}, status: "submitted" };
  assert.equal(scoreTestSession(session, keys).score, 37.5);
  session.answers = Object.fromEntries(selected.map((key) => [key, keys[key]]));
  assert.equal(scoreTestSession(session, keys).score, 150);
  session.answers = Object.fromEntries(selected.map((key) => [key, keys[key] === "A" ? "B" : "A"]));
  assert.equal(scoreTestSession(session, keys).score, 0);
  session.answers = { [selected[0]]: keys[selected[0]], [selected[1]]: keys[selected[1]] === "A" ? "B" : "A" };
  const result = scoreTestSession(session, keys);
  assert.deepEqual([result.correct, result.wrong, result.blank, result.score, result.maximum], [1, 1, 23, 40.5, 150]);
  assert.deepEqual(result.questions.slice(0, 3).map((q) => q.status), ["correct", "wrong", "blank"]);
  assert.throws(() => scoreTestSession({ ...session, status: "running" }, keys), /running/);
  assert.throws(() => scoreTestSession(session, {}), /incomplete/);
});

test("submission reveals the key and score only after answers are locked; refresh restores results", async () => {
  const paths = [];
  const p = fixture({ fetchImpl: async (path) => {
    paths.push(path);
    return { ok: true, json: async () => JSON.parse(readFileSync(new URL(path, root))) };
  } });
  try {
    p.click("setup"); p.select("year", 2025); p.select("exam", "AMC 10B"); p.click("start");
    await settle();
    assert.equal(paths.some((path) => path.includes("answer-key")), false);
    assert.equal(p.mount.querySelector("[data-test-score]"), null);
    p.panel.answer("2025-AMC10B-1", answerKey["2025-AMC10B-1"]);
    p.panel.answer("2025-AMC10B-2", answerKey["2025-AMC10B-2"] === "A" ? "B" : "A");
    p.click("finish"); await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "40.5 / 150");
    assert.match(p.mount.querySelector("[data-test-result-count]").textContent, /Correct: 1.*Wrong: 1.*Blank: 23/);
    assert.equal(p.mount.querySelectorAll("[data-test-result]").length, 25);
    assert.match(p.mount.querySelector('[data-test-result="2025-AMC10B-1"]').textContent, /Correct answer:/);
    assert.ok([...p.mount.querySelectorAll("fieldset")].every((field) => field.disabled));
    p.panel.restore(); p.panel.render(); await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "40.5 / 150");
    p.setLanguage("zh"); p.panel.render();
    assert.match(p.mount.querySelector("[data-test-result-count]").textContent, /正确: 1/);
  } finally { p.close(); }
});

test("practice expiration uses the supplied PDF's key and next official attempt loads a different key", async () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
    p.panel.answer("2026-practice-1-1", "B");
    p.setTime(p.panel.session.deadline); p.panel.tick(); await settle();
    assert.equal(p.panel.session.status, "expired");
    assert.match(p.mount.textContent, /Automatically submitted/);
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "42 / 150");
    assert.equal(p.mount.querySelectorAll(".practice-solution-link").length, 25);
    assert.match(p.mount.querySelector('[data-test-result="2026-practice-1-25"]').textContent, /Correct answer: B/);
    p.click("clear"); p.click("setup"); p.select("year", 2025); p.click("start");
    assert.equal(p.mount.querySelector("[data-test-score]"), null);
    p.click("finish"); await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "37.5 / 150");
  } finally { p.close(); }
});

test("returning after the deadline automatically submits and scores without a Finish click", async () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
    p.panel.answer("2026-practice-1-2", "A");
    const deadline = p.panel.session.deadline;
    p.setTime(deadline + 100000);
    p.panel.restore(); p.panel.render(); await settle();
    assert.equal(p.panel.session.deadline, deadline);
    assert.equal(p.panel.session.status, "expired");
    assert.match(p.mount.textContent, /Automatically submitted/);
    assert.equal(p.mount.querySelector('[data-test-action="finish"]'), null);
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "42 / 150");
    assert.equal(p.mount.querySelectorAll("fieldset:disabled").length, 25);
    assert.equal(JSON.parse(p.dom.window.localStorage.getItem("amc10-test:a")).status, "expired");
  } finally { p.close(); }
});

test("failed, malformed and incomplete answer keys never produce false scores and retry keeps choices", async () => {
  let mode = "failed";
  const p = fixture({ fetchImpl: async () => ({
    ok: mode !== "failed",
    json: async () => mode === "malformed" ? { answers: { bad: "Z" } }
      : mode === "incomplete" ? { answers: { "2026-practice-1-1": "B" } } : { answers: practiceKey }
  }) });
  try {
    p.click("setup"); p.click("start"); p.panel.answer("2026-practice-1-1", "B");
    p.click("finish"); await settle();
    assert.ok(p.mount.querySelector('[data-test-action="retry-score"]'));
    assert.equal(p.mount.querySelector("[data-test-score]"), null);
    mode = "malformed"; p.click("retry-score"); await settle();
    assert.match(p.mount.textContent, /Unable to load the answer key/);
    mode = "incomplete"; p.click("retry-score"); await settle();
    assert.ok(p.mount.querySelector("[data-test-missing-key]"));
    assert.equal(p.mount.querySelector("[data-test-score]"), null);
    mode = "valid"; p.click("retry-score"); await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "42 / 150");
    assert.equal(p.panel.session.answers["2026-practice-1-1"], "B");
  } finally { p.close(); }
});

test("a stale scoring response cannot replace another account's results", async () => {
  const releases = [];
  const p = fixture({ fetchImpl: async () => {
    await new Promise((resolve) => releases.push(resolve));
    return { ok: true, json: async () => ({ answers: practiceKey }) };
  } });
  try {
    p.click("setup"); p.click("start"); p.click("finish");
    p.setUser("b"); p.panel.tick();
    releases.shift()(); await settle();
    assert.equal(p.panel.session, null);
    assert.equal(p.panel.answerKey, null);
    assert.equal(p.mount.querySelector("[data-test-score]"), null);
    p.click("setup"); p.click("start"); p.click("finish");
    releases.shift()(); await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "37.5 / 150");
  } finally { p.close(); }
});

test("a completed attempt restored from another tab reloads its own paper's key", async () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start"); p.click("finish"); await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "37.5 / 150");
    const saved = { ...p.panel.session, id: "official-in-another-tab",
      keys: Array.from({ length: 25 }, (_, i) => `2025-AMC10A-${i + 1}`),
      answers: { "2025-AMC10A-1": answerKey["2025-AMC10A-1"] }, status: "submitted" };
    p.dom.window.localStorage.setItem("amc10-test:a", JSON.stringify(saved));
    p.dom.window.dispatchEvent(new p.dom.window.StorageEvent("storage", { key: "amc10-test:a" }));
    await settle();
    assert.equal(p.mount.querySelector("[data-test-score]").textContent, "42 / 150");
    assert.equal(p.mount.querySelector("[data-test-missing-key]"), null);
  } finally { p.close(); }
});
