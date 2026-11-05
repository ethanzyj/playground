import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { TestMode, TEST_DURATION, testTime, validateTestSession } from "../assets/test-mode.mjs";
import { PRACTICE_PROBLEMS } from "../assets/practice-papers.mjs";
import { PROBLEM_REFERENCES } from "../assets/data.mjs";

const root = new URL("../", import.meta.url);
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
  return { dom, panel, mount, click, setTime: (t) => { time = t; }, setUser: (u) => { user = u; },
    setLanguage: (l) => { language = l; }, close: () => { panel.dispose(); dom.window.close(); } };
}

test("selection freezes a subset and starts exactly 75 minutes only on Start", () => {
  const p = fixture();
  try {
    p.click("setup");
    assert.equal(p.panel.session, null);
    assert.equal(p.mount.querySelectorAll("[data-test-select]:checked").length, 3);
    const input = p.mount.querySelectorAll("[data-test-select]")[1];
    input.checked = false;
    input.dispatchEvent(new p.dom.window.Event("change"));
    p.click("start");
    assert.deepEqual(p.panel.session.keys, ["2026-practice-1-1", "2026-practice-1-3"]);
    assert.equal(p.panel.session.deadline - p.panel.session.startedAt, TEST_DURATION);
    assert.equal(p.mount.querySelector("[data-test-clock]").textContent, "75:00");
    assert.equal(p.mount.closest("#problemsPanel").classList.contains("test-mode-active"), true);
    p.panel.update(PRACTICE_PROBLEMS.slice(20));
    assert.equal(p.mount.querySelectorAll(".test-question").length, 2);
    assert.equal(p.mount.querySelector(".problem-progress"), null);
    assert.equal(p.mount.querySelector(".card-actions"), null);
  } finally { p.close(); }
});

test("zero selections cannot start and selection updates follow current filters", () => {
  const p = fixture();
  try {
    p.click("setup");
    p.click("none");
    assert.equal(p.mount.querySelector('[data-test-action="start"]').disabled, true);
    p.panel.start();
    assert.equal(p.panel.session, null);
    p.click("all");
    p.panel.update([PRACTICE_PROBLEMS[0]]);
    assert.equal(p.panel.selected.size, 1);
    p.click("start");
    assert.equal(p.panel.session.keys.length, 1);
  } finally { p.close(); }
});

test("answers persist, refresh uses the same deadline, and exact expiration locks input", () => {
  const p = fixture();
  try {
    p.click("setup"); p.click("start");
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

test("finish submits without grading or touching mastery and completed choices stay reviewable", () => {
  const p = fixture();
  try {
    p.dom.window.localStorage.setItem("amc10-quests:a", '{"keep":true}');
    p.click("setup"); p.click("start");
    p.panel.answer("2026-practice-1-2", "D");
    p.click("finish");
    assert.equal(p.panel.session.status, "submitted");
    assert.match(p.mount.textContent, /not automatically graded/);
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
