import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { QuestPanel, questContent } from "../assets/quests.mjs";
import { QUEST_COURSE } from "../assets/quest-course.mjs";
import { allConcepts } from "../assets/data.mjs";
import { questPdfSections, openQuestShare } from "../assets/quest-pdf.mjs";

const root = new URL("../", import.meta.url);
const quizQuestion = (...args) => QuestPanel.prototype.quizQuestion.call({ choices: QuestPanel.prototype.choices }, ...args);
const fetchImpl = async (path) => ({ ok: true, json: async () => JSON.parse(readFileSync(new URL(path, root))) });

test("every course PDF contains the entire lesson, checkpoints, problems, vocabulary, review and answer key", async () => {
  for (const mission of QUEST_COURSE.missions) {
    const content = questContent(mission.concept.id);
    const blocks = await questPdfSections({ content, language: "both", includeAnswers: true, quizQuestion, fetchImpl });
    const html = blocks.join("");
    for (const title of ["Lesson", "Checkpoints", "AMC practice", "Vocabulary", "Vocabulary checks", "Review &amp; reflection", "Answer key &amp; review notes"]) {
      assert.ok(html.includes(title), `${mission.concept.id}: ${title}`);
    }
    assert.equal(blocks.filter((b) => b.startsWith("<h3>C")).length, content.concept.formulas.length * 2);
    assert.equal(blocks.filter((b) => b.startsWith("<h3>V")).length, content.terms.length * 2);
    for (const p of content.problems) assert.ok(html.includes(`${p.year} ${p.exam} #${p.problemNumber}`));
    assert.ok(html.includes('lang="zh"'));
    assert.ok(html.includes('lang="en"'));
    assert.ok(!html.includes(">undefined<"));
  }
});

test("worksheet export omits the answer key and does not fetch answers", async () => {
  const paths = [];
  const html = (await questPdfSections({
    content: questContent("course-v1-polynomials-1"), language: "zh", includeAnswers: false, quizQuestion,
    fetchImpl: (path) => { paths.push(path); return fetchImpl(path); }
  })).join("");
  assert.equal(paths.includes("assets/answer-key.json"), false);
  assert.equal(html.includes("Answer key"), false);
  assert.equal(html.includes('lang="en"'), false);
  assert.ok(html.includes("复习与反思"));
  assert.ok(html.includes("<img"));
});

test("legacy review quests and focused factoring quests also export complete packets", async () => {
  const ids = [...allConcepts().map((concept) => concept.id), "skill-factoring",
    "skill-common-factors", "skill-difference-squares", "skill-quadratic-factoring",
    "skill-triangle-area", "skill-remainders", "skill-equally-likely"];
  for (const id of ids) {
    const blocks = await questPdfSections({ content: questContent(id), language: "en", includeAnswers: true, quizQuestion, fetchImpl });
    assert.ok(blocks.join("").includes("Answer key &amp; review notes"), id);
  }
});

test("lesson text preserves inequalities and cannot become HTML markup", async () => {
  const content = structuredClone(questContent("course-v1-polynomials-1"));
  content.concept.explanationEn = String.raw`When \(x<y\), use \(x+y<2y\). <img src=x onerror=alert(1)>`;
  const html = (await questPdfSections({ content, language: "en", includeAnswers: false, quizQuestion, fetchImpl })).join("");
  assert.ok(html.includes(String.raw`\(x&lt;y\)`));
  assert.ok(html.includes("&lt;img src=x onerror=alert(1)&gt;"));
  assert.equal(html.includes("<img src=x"), false);
});

test("failed downloads and invalid answer keys fail explicitly", async () => {
  const options = { content: questContent("course-v1-polynomials-1"), language: "en", includeAnswers: true, quizQuestion };
  await assert.rejects(questPdfSections({ ...options, fetchImpl: async () => ({ ok: false }) }), /Unable to load exam/);
  await assert.rejects(questPdfSections({
    ...options, fetchImpl: (path) => path.includes("answer-key") ? Promise.resolve({ ok: true, json: async () => ({ answers: {} }) }) : fetchImpl(path)
  }), /Missing answer/);
});

test("share dialog offers language and answer options without changing progress", () => {
  const dom = new JSDOM("<body></body>");
  const { document, HTMLDialogElement } = dom.window;
  HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  try {
    openQuestShare({ document, content: questContent("course-v1-polynomials-1"), language: "zh", fetchImpl, quizQuestion });
    const dialog = document.querySelector("dialog");
    assert.equal(dialog.open, true);
    assert.equal(dialog.querySelector("select").value, "zh");
    assert.equal(dialog.querySelector('input[type="checkbox"]').checked, true);
    assert.equal(dialog.querySelector(".quest-share-actions").hidden, true);
    assert.match(dialog.textContent, /不包含个人进度/);
    openQuestShare({ document, content: questContent("polynomials"), language: "en", fetchImpl, quizQuestion });
    assert.equal(document.querySelectorAll("dialog").length, 1);
    dialog.dispatchEvent(new dom.window.Event("close"));
    assert.equal(document.querySelector("dialog"), null);
  } finally { dom.window.close(); }
});

test("generated PDF is shared as a file, with download/email fallbacks and URL cleanup", async () => {
  for (const native of [true, false]) {
    const dom = new JSDOM("<body></body>");
    const { document, HTMLDialogElement } = dom.window;
    HTMLDialogElement.prototype.showModal = function () { this.open = true; };
    const file = new dom.window.File(["%PDF-1.3"], "quest.pdf", { type: "application/pdf" });
    const revoked = [], shared = [];
    dom.window.URL.createObjectURL = (item) => { assert.equal(item, file); return "blob:test"; };
    dom.window.URL.revokeObjectURL = (url) => revoked.push(url);
    if (native) {
      dom.window.navigator.canShare = ({ files }) => files[0] === file;
      dom.window.navigator.share = async (data) => shared.push(data);
    }
    try {
      openQuestShare({
        document, content: questContent("course-v1-polynomials-1"), language: "en", fetchImpl, quizQuestion,
        createPdf: async (options) => { assert.equal(options.language, "en"); assert.equal(options.includeAnswers, true); return file; }
      });
      document.querySelector("#questPdfGenerate").click();
      await new Promise((resolve) => setTimeout(resolve, 0));
      const download = document.querySelector("#questPdfDownload");
      assert.equal(download.href, "blob:test");
      assert.equal(download.download, "quest.pdf");
      assert.match(document.querySelector("#questPdfEmail").href, /^mailto:/);
      assert.match(document.querySelector(".quest-share-actions").textContent, /attach it/);
      const share = document.querySelector("#questPdfShare");
      assert.equal(share.hidden, !native);
      if (native) {
        share.click();
        await new Promise((resolve) => setTimeout(resolve, 0));
        assert.equal(shared[0].files[0], file);
      }
      document.querySelector("#questPdfAnswers").dispatchEvent(new dom.window.Event("change"));
      assert.deepEqual(revoked, ["blob:test"]);
      assert.equal(document.querySelector(".quest-share-actions").hidden, true);
    } finally { dom.window.close(); }
  }
});

test("PDF errors remain visible and allow retry without exposing share actions", async () => {
  const dom = new JSDOM("<body></body>");
  dom.window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  try {
    openQuestShare({
      document: dom.window.document, content: questContent("polynomials"), language: "en", fetchImpl, quizQuestion,
      createPdf: async () => { throw new Error("Diagram unavailable"); }
    });
    const document = dom.window.document;
    document.querySelector("#questPdfGenerate").click();
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.equal(document.querySelector("#questPdfStatus").getAttribute("role"), "alert");
    assert.match(document.querySelector("#questPdfStatus").textContent, /Unable to create/);
    assert.equal(document.querySelector("#questPdfGenerate").disabled, false);
    assert.equal(document.querySelector(".quest-share-actions").hidden, true);
  } finally { dom.window.close(); }
});
