import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { allConcepts, PROBLEM_REFERENCES } from "../assets/data.mjs";
import { problemKey } from "../assets/progress.mjs";
import { QuestPanel, questContent, questStage, validateQuestProgress } from "../assets/quests.mjs";
import { QUEST_COURSE } from "../assets/quest-course.mjs";

const root = new URL("../", import.meta.url);
const answerKey = JSON.parse(readFileSync(new URL("assets/answer-key.json", root)));
const empty = () => ({ learned: false, formulas: [], problems: [], terms: [] });

function page(storageOverride, fetchOverride, clientOverride) {
  const dom = new JSDOM('<section id="quest"></section>', { url: "https://example.test/" });
  let userId = "user-a";
  let language = "en";
  const mount = dom.window.document.querySelector("#quest");
  const panel = new QuestPanel({
    mount, storage: storageOverride || dom.window.localStorage,
    syncEnabled: false,
    getUserId: () => userId, getLanguage: () => language, typeset() {},
    getClient: () => clientOverride || ({ rpc: async (_name, args) => ({
      data: { problem_key: args.p_problem_key, correct: answerKey.answers[args.p_problem_key] === args.p_answer }
    }) }),
    fetchImpl: fetchOverride || (async (path) => ({
      ok: true,
      json: async () => JSON.parse(readFileSync(new URL(path, root)))
    }))
  });
  panel.active = "polynomials";
  panel.render();
  return { panel, mount, dom, setUser: (id) => { userId = id; }, setLanguage: (value) => { language = value; } };
}

test("meaning quizzes show distinct choices and radio inputs keep their intrinsic width", () => {
  const p = page();
  try {
    p.setLanguage("both");
    const content = questContent("polynomials");
    const quiz = p.panel.quiz(content, empty(), false);
    p.mount.innerHTML = quiz;
    for (const lang of ["en", "zh"]) {
      const choices = [...p.mount.querySelectorAll(`.quest-choice [lang="${lang}"]`)].map((item) => item.textContent);
      assert.equal(choices.length, 4);
      assert.equal(new Set(choices).size, choices.length);
    }
    const css = readFileSync(new URL("assets/styles.css", root), "utf8");
    const dom = new JSDOM(`<style>${css}</style>${quiz}`);
    const input = dom.window.document.querySelector(".quest-choice input");
    assert.equal(dom.window.getComputedStyle(input).width, "auto");
    assert.equal(dom.window.getComputedStyle(input.parentElement).display, "flex");
    dom.window.close();
  } finally { p.dom.window.close(); }
});

test("signed-in grading never fetches the local key and database failures remain retryable", async () => {
  const requests = [];
  let fail = true;
  const calls = [];
  const p = page(null, async (path) => {
    requests.push(path);
    return { ok: true, json: async () => JSON.parse(readFileSync(new URL(path, root))) };
  }, { rpc: async (name, args) => {
    calls.push({ name, args });
    return fail ? { error: { message: "RPC not found" } }
      : { data: { problem_key: args.p_problem_key, correct: true } };
  } });
  try {
    const content = questContent("polynomials");
    p.panel.save(() => ({ ...empty(), learned: true, formulas: content.concept.formulas.map((_, i) => i) }));
    await waitFor(() => p.mount.querySelector("#questPractice"));
    submit(p, "#questPractice", "E");
    await waitFor(() => !p.panel.grading);
    assert.equal(p.panel.progress().problems.length, 0);
    assert.match(p.mount.textContent, /add-quest-answers\.sql/);
    assert.equal(requests.includes("assets/answer-key.json"), false);
    assert.equal(calls[0].name, "check_quiz_answer");
    assert.equal(calls[0].args.p_expected_user, "user-a");
    fail = false;
    submit(p, "#questPractice", "E");
    await waitFor(() => !p.panel.grading);
    assert.equal(p.panel.progress().problems.length, 1);
  } finally { p.dom.window.close(); }
});

test("in-flight grading blocks duplicate submissions and cannot credit another account or concept", async () => {
  let resolveGrade;
  let count = 0;
  const p = page(null, null, { rpc: (_name, args) => {
    count++;
    return new Promise((resolve) => {
      resolveGrade = () => resolve({ data: { problem_key: args.p_problem_key, correct: true } });
    });
  } });
  try {
    const content = questContent("polynomials");
    const progress = { ...empty(), learned: true, formulas: content.concept.formulas.map((_, i) => i) };
    p.panel.save(() => progress);
    await waitFor(() => p.mount.querySelector("#questPractice"));
    submit(p, "#questPractice", "E");
    assert.equal(p.mount.querySelector("#questPractice button").disabled, true);
    submit(p, "#questPractice", "E");
    assert.equal(count, 1);
    p.setUser("user-b");
    p.panel.render();
    resolveGrade();
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.equal(p.panel.progress().problems.length, 0);
    p.setUser("user-a");
    p.panel.render();
    assert.equal(p.panel.progress().problems.length, 0);
    submit(p, "#questPractice", "E");
    p.mount.querySelector("#questConcept").value = "triangles";
    p.mount.querySelector("#questConcept").dispatchEvent(new p.dom.window.Event("change"));
    resolveGrade();
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.equal(p.panel.active, "triangles");
    assert.equal(p.panel.progress().problems.length, 0);
    assert.equal(p.panel.data.quests.polynomials.problems.length, 0);
  } finally { p.dom.window.close(); }
});

test("guest grading loads the validated local answer key", async () => {
  const p = page();
  try {
    p.setUser(null);
    p.panel.render();
    const content = questContent("polynomials");
    p.panel.save(() => ({ ...empty(), learned: true, formulas: content.concept.formulas.map((_, i) => i) }));
    await waitFor(() => p.panel.answers && p.mount.querySelector("#questPractice"));
    submit(p, "#questPractice", answerKey.answers[problemKey(content.problems[0])]);
    assert.equal(p.panel.progress().problems.length, 1);
  } finally { p.dom.window.close(); }
});
async function waitFor(condition) {
  for (let i = 0; i < 100; i++) {
    if (condition()) return;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  throw new Error("Quest UI did not reach the expected state.");
}

function submit(p, selector, value) {
  p.mount.querySelector(`${selector} input[value="${value}"]`).checked = true;
  p.mount.querySelector(selector).dispatchEvent(new p.dom.window.Event("submit", { bubbles: true, cancelable: true }));
}

test("every concept has a quest and all 500 answer keys have provenance and valid identities", () => {
  assert.equal(Object.keys(answerKey.answers).length, 500);
  assert.equal(Object.keys(answerKey.sources).length, 20);
  assert.equal(answerKey.answers["2025-AMC10A-1"], "E");
  for (const problem of PROBLEM_REFERENCES) assert.match(answerKey.answers[problemKey(problem)], /^[A-E]$/);
  for (const concept of allConcepts()) {
    const content = questContent(concept.id);
    assert.ok(content.terms.length > 0);
    assert.equal(content.problems.length, 3);
    assert.equal(new Set(content.problems.map(problemKey)).size, 3);
    assert.equal(questStage(content, empty()), "learn");
    for (const problem of content.problems) assert.ok(problem.conceptIds.includes(concept.id));
  }
});

test("course badges show their workload, collected items, and full-course coverage only after all tasks", async () => {
  const p = page();
  try {
    p.panel.selectMission(QUEST_COURSE.missions[0].concept.id);
    const content = QUEST_COURSE.missions[0];
    assert.match(p.mount.querySelector(".quest-budget").textContent, /45–60 minute sitting/);
    assert.match(p.mount.querySelector(".quest-session-collection").textContent, /Collected for this badge/);
    assert.equal(p.mount.querySelectorAll(".quest-budget .quest-metric").length, 5);
    assert.equal(p.mount.querySelectorAll(".quest-session-collection .quest-metric").length, 3);
    assert.equal(p.mount.querySelector(".quest-session-collection .quest-metric strong").textContent,
      `0/${content.concept.formulas.length}`);
    p.mount.querySelector("#questLearned").click();
    for (let i = 0; i < content.concept.formulas.length; i++) {
      submit(p, "#questQuiz", (4 - (i + content.concept.id.length) % 4) % 4);
    }
    for (const problem of content.problems) {
      await waitFor(() => p.mount.querySelector("#questPractice"));
      submit(p, "#questPractice", answerKey.answers[problemKey(problem)]);
      await waitFor(() => !p.panel.grading);
    }
    for (let i = 0; i < content.terms.length; i++) {
      submit(p, "#questQuiz", (4 - (i + content.concept.id.length) % 4) % 4);
    }
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `1 / ${QUEST_COURSE.missions.length}`);
    assert.doesNotMatch(p.mount.textContent, /Course complete:/);
    const complete = { version: 1, quests: Object.fromEntries(QUEST_COURSE.missions.map((mission) => [mission.concept.id, {
      learned: true, formulas: mission.concept.formulas.map((_, i) => i),
      problems: mission.problems.map(problemKey), terms: mission.terms.map((term) => term.en)
    }])) };
    p.dom.window.localStorage.setItem("amc10-quests:user-a", JSON.stringify(complete));
    p.panel.identity = null;
    p.panel.render();
    assert.match(p.mount.textContent, /Course complete: all concepts studied, all 500 AMC problems answered correctly, and all 144 glossary checks passed/);
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `${QUEST_COURSE.missions.length} / ${QUEST_COURSE.missions.length}`);
  } finally { p.dom.window.close(); }
});

test("Factoring review preserves completed work without inflating course badges", async () => {
  const p = page();
  try {
    p.setUser(null);
    p.panel.active = "skill-factoring";
    p.panel.render();
    const content = questContent("skill-factoring");
    assert.equal(content.concept.formulas.length, 3);
    assert.equal(content.terms.length, 5);
    assert.equal(content.problems.length, 3);
    assert.ok(content.terms.every(Boolean));
    assert.ok(content.problems.every(Boolean));
    assert.match(p.mount.textContent, /One concept. One conquest/);
    assert.doesNotMatch(p.mount.textContent, /Focused pilot mission|Category reference|Lessons and mini-challenges|精细知识点试点|非官方认证/);
    assert.equal(p.mount.querySelector(".quest-conquest"), null);
    p.mount.querySelector("#questLearned").click();
    for (let index = 0; index < 3; index++) {
      assert.match(p.mount.textContent, /Choose the correct factorization/);
      const correct = (4 - (index + content.concept.id.length) % 4) % 4;
      submit(p, "#questQuiz", (correct + 1) % 4);
      assert.equal(p.panel.progress().formulas.length, index);
      submit(p, "#questQuiz", correct);
    }
    for (const problem of content.problems) {
      await waitFor(() => p.mount.querySelector("#questPractice"));
      submit(p, "#questPractice", answerKey.answers[problemKey(problem)]);
      await waitFor(() => !p.panel.grading);
    }
    assert.equal(p.mount.querySelector(".quest-conquest"), null);
    for (let index = 0; index < content.terms.length; index++) {
      const correct = (4 - (index + content.concept.id.length) % 4) % 4;
      submit(p, "#questQuiz", correct);
    }
    assert.match(p.mount.querySelector(".quest-conquest").textContent, /Review complete.*Factoring/);
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
    p.panel.identity = null;
    p.panel.render();
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
    assert.ok(p.mount.querySelector('a[href="?concept=polynomials"]'));
    p.setUser("other-player");
    p.panel.render();
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
    assert.equal(p.mount.querySelectorAll("#questConcept option").length, QUEST_COURSE.missions.length + 25);
    assert.ok(p.mount.querySelector("#questLearned"));
  } finally { p.dom.window.close(); }
});

test("a quest requires correct formula answers, graded AMC practice, and every related term", async () => {
  const p = page();
  try {
    const content = questContent("polynomials");
    p.mount.querySelector("#questLearned").click();
    for (let index = 0; index < content.concept.formulas.length; index++) {
      const correct = (4 - (index + content.concept.id.length) % 4) % 4;
      submit(p, "#questQuiz", (correct + 1) % 4);
      assert.equal(p.panel.progress().formulas.length, index);
      assert.match(p.mount.textContent, /Not quite/);
      submit(p, "#questQuiz", correct);
    }
    for (const problem of content.problems) {
      await waitFor(() => p.mount.querySelector("#questPractice"));
      const answer = answerKey.answers[problemKey(problem)];
      const before = p.panel.progress().problems.length;
      submit(p, "#questPractice", answer === "A" ? "B" : "A");
      await waitFor(() => !p.panel.grading);
      assert.equal(p.panel.progress().problems.length, before);
      assert.match(p.mount.textContent, /Incorrect answer/);
      const solution = p.mount.querySelector('a[href*="live.poshenloh.com"]');
      assert.ok(solution.href.endsWith(`/problem/${problem.problemNumber}`));
      submit(p, "#questPractice", answer);
      await waitFor(() => !p.panel.grading);
    }
    for (let index = 0; index < content.terms.length; index++) {
      const correct = (4 - (index + content.concept.id.length) % 4) % 4;
      submit(p, "#questQuiz", correct);
    }
    assert.equal(questStage(content, p.panel.progress()), "finish");
    assert.equal(p.panel.progress().terms.length, content.terms.length);
    assert.match(p.mount.textContent, /does not automatically change your mastery marks/);
    assert.equal(p.dom.window.localStorage.getItem("amc10-mastered"), null);
    p.panel.identity = null;
    p.panel.render();
    assert.equal(questStage(content, p.panel.progress()), "finish");
  } finally { p.dom.window.close(); }
});

test("quest progress is isolated by account and language changes preserve task state", () => {
  const p = page();
  try {
    p.mount.querySelector("#questLearned").click();
    p.setLanguage("zh");
    p.panel.render();
    assert.match(p.mount.textContent, /概念测验/);
    assert.equal(p.panel.progress().learned, true);
    p.setUser("user-b");
    p.panel.render();
    assert.equal(p.panel.progress().learned, false);
    p.setUser("user-a");
    p.panel.render();
    assert.equal(p.panel.progress().learned, true);
    p.setUser(null);
    p.panel.render();
    assert.equal(p.panel.progress().learned, false);
  } finally { p.dom.window.close(); }
});

test("previous and next mission navigation follows the dropdown, preserves progress, and stops at boundaries", () => {
  const p = page();
  try {
    const first = QUEST_COURSE.missions[0].concept.id;
    const second = QUEST_COURSE.missions[1].concept.id;
    p.panel.selectMission(first);
    assert.equal(p.mount.querySelector(".quest-navigation").nextElementSibling.className, "section-heading");
    assert.equal(p.mount.firstElementChild.className, "quest-hero");
    const title = p.mount.querySelector(".quest-mission-title h3");
    assert.equal(title.previousElementSibling.id, "questPrevious");
    assert.equal(title.nextElementSibling.id, "questNext");
    assert.equal(p.mount.querySelector(".quest-navigation").querySelector("button"), null);
    assert.ok(p.mount.querySelector("#questPrevious svg"));
    assert.ok(p.mount.querySelector("#questNext svg"));
    assert.equal(p.mount.querySelector("#questPrevious").disabled, true);
    p.mount.querySelector("#questPrevious").click();
    assert.equal(p.panel.active, first);
    p.mount.querySelector("#questLearned").click();
    p.panel.feedback = { en: "Old feedback", zh: "旧提示" };
    p.mount.querySelector("#questNext").click();
    assert.equal(p.panel.active, second);
    assert.equal(p.mount.querySelector("#questConcept").value, second);
    assert.equal(p.panel.feedback, null);
    assert.equal(p.dom.window.document.activeElement.id, "questNext");
    p.mount.querySelector("#questPrevious").click();
    assert.equal(p.panel.active, first);
    assert.equal(p.panel.progress().learned, true);
    assert.ok(p.mount.querySelector("#questQuiz"));
    assert.equal(p.dom.window.document.activeElement.id, "questConcept");
    const select = p.mount.querySelector("#questConcept");
    select.value = select.options[select.options.length - 1].value;
    select.dispatchEvent(new p.dom.window.Event("change"));
    assert.equal(p.panel.active, "combinatorics-methods");
    assert.equal(p.mount.querySelector("#questNext").disabled, true);
    p.mount.querySelector("#questNext").click();
    assert.equal(p.panel.active, "combinatorics-methods");
    p.setLanguage("zh");
    p.panel.render();
    assert.equal(p.mount.querySelector("#questPrevious").getAttribute("aria-label"), "上一任务");
    assert.equal(p.mount.querySelector("#questNext").getAttribute("aria-label"), "下一任务");
  } finally { p.dom.window.close(); }
});

test("small Algebra missions each conquer one technique and preserve separate badges and original progress", async () => {
  const p = page();
  try {
    p.setUser(null);
    p.panel.render();
    p.mount.querySelector("#questLearned").click();
    const original = structuredClone(p.panel.progress());
    const missions = ["skill-common-factors", "skill-difference-squares", "skill-quadratic-factoring"];
    for (const id of missions) {
      p.panel.selectMission(id);
      const content = questContent(id);
      assert.equal(content.concept.formulas.length, 1);
      assert.equal(content.problems.length, 1);
      assert.ok(content.problems[0]);
      assert.ok(content.terms.every(Boolean));
      assert.ok(content.terms.length <= 3);
      assert.equal(p.panel.progress().learned, false);
      p.mount.querySelector("#questLearned").click();
      const correct = (4 - id.length % 4) % 4;
      submit(p, "#questQuiz", (correct + 1) % 4);
      assert.equal(p.panel.progress().formulas.length, 0);
      assert.match(p.mount.textContent, /Not quite/);
      submit(p, "#questQuiz", correct);
      await waitFor(() => p.mount.querySelector("#questPractice"));
      assert.ok(p.mount.querySelector(".quest-lesson summary"));
      submit(p, "#questPractice", answerKey.answers[problemKey(content.problems[0])]);
      await waitFor(() => !p.panel.grading);
      for (let index = 0; index < content.terms.length; index++) {
        submit(p, "#questQuiz", (4 - (index + id.length) % 4) % 4);
      }
      assert.equal(questStage(content, p.panel.progress()), "finish");
    }
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
    assert.equal(p.mount.querySelector("#questConcept optgroup").label, "Algebra");
    assert.equal(p.mount.querySelectorAll("#questConcept optgroup")[5].label, "Review quests · No badges");
    assert.deepEqual(p.panel.data.quests.polynomials, original);
    p.panel.identity = null;
    p.panel.render();
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
  } finally { p.dom.window.close(); }
});

test("original focused missions remain playable as reviews without awarding course badges", async () => {
  const p = page();
  try {
    p.setUser(null);
    p.panel.render();
    for (const [world, id] of [
      ["geometry", "skill-triangle-area"],
      ["number-theory", "skill-remainders"],
      ["probability", "skill-equally-likely"]
    ]) {
      p.panel.selectMission(id);
      assert.equal(p.panel.active, id);
      assert.equal(p.mount.querySelector('[data-quest-world="review"]').getAttribute("aria-pressed"), "true");
      const content = questContent(id);
      assert.equal(content.problems.length, 2);
      assert.ok(content.problems.every(Boolean));
      assert.ok(content.terms.every(Boolean));
      assert.equal(p.mount.querySelectorAll(".quest-lesson").length, 1);
      p.mount.querySelector("#questLearned").click();
      for (let index = 0; index < 2; index++) {
        const correct = (4 - (index + id.length) % 4) % 4;
        submit(p, "#questQuiz", (correct + 1) % 4);
        assert.equal(p.panel.progress().formulas.length, index);
        submit(p, "#questQuiz", correct);
      }
      for (const problem of content.problems) {
        await waitFor(() => p.mount.querySelector("#questPractice"));
        submit(p, "#questPractice", answerKey.answers[problemKey(problem)]);
        await waitFor(() => !p.panel.grading);
      }
      for (let index = 0; index < content.terms.length; index++) {
        submit(p, "#questQuiz", (4 - (index + id.length) % 4) % 4);
      }
      assert.match(p.mount.querySelector(".quest-conquest").textContent, /Review complete/);
    }
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
    p.mount.querySelector('[data-quest-world="review"]').click();
    assert.equal(p.panel.active, "skill-common-factors");
    assert.match(p.mount.textContent, /do not count toward skill badges/);
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
    p.panel.identity = null;
    p.panel.render();
    assert.equal(p.mount.querySelector(".quest-trophy strong").textContent, `0 / ${QUEST_COURSE.missions.length}`);
  } finally { p.dom.window.close(); }
});

test("corrupt caches are preserved and storage failures do not advance a task", () => {
  const store = new Map([["amc10-quests:user-a", "{bad"]]);
  const storage = { getItem: (key) => store.get(key), setItem: (key, value) => store.set(key, value) };
  const p = page(storage);
  try {
    assert.equal(p.panel.blocked, true);
    assert.ok(p.mount.querySelector("[role=alert]"));
    assert.equal(store.get("amc10-quests:user-a"), "{bad");
  } finally { p.dom.window.close(); }
  const failing = page({ getItem: () => null, setItem() { throw new Error("Storage full"); } });
  try {
    failing.mount.querySelector("#questLearned").click();
    assert.equal(failing.panel.progress().learned, false);
    assert.match(failing.mount.textContent, /was not saved/);
  } finally { failing.dom.window.close(); }
  assert.throws(() => validateQuestProgress({ version: 1, quests: {
    polynomials: { ...empty(), terms: ["Polynomial"] }
  } }), /out of order/);
});

test("practice fetch failures are visible and retryable without losing quiz progress", async () => {
  let offline = true;
  const p = page(null, async (path) => ({
    ok: !offline, json: async () => JSON.parse(readFileSync(new URL(path, root)))
  }));
  try {
    const content = questContent("polynomials");
    p.panel.save(() => ({ ...empty(), learned: true, formulas: content.concept.formulas.map((_, i) => i) }));
    await waitFor(() => p.mount.querySelector("#questRetry"));
    assert.match(p.mount.textContent, /Unable to load/);
    offline = false;
    p.mount.querySelector("#questRetry").click();
    await waitFor(() => p.mount.querySelector("#questPractice"));
    assert.equal(p.panel.progress().formulas.length, content.concept.formulas.length);
  } finally { p.dom.window.close(); }
});
