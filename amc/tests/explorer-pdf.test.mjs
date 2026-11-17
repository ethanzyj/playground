import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { explorerPdfSections, openExplorerExport } from "../assets/explorer-pdf.mjs";
import { PRACTICE_PROBLEMS, PRACTICE_2_PROBLEMS } from "../assets/practice-papers.mjs";
import { PROBLEM_REFERENCES } from "../assets/data.mjs";

const root = new URL("../", import.meta.url);
const fetchImpl = async (path) => ({ ok: true, json: async () => JSON.parse(readFileSync(new URL(path, root))) });

test("filtered worksheet includes only selected questions and no answers or solutions", async () => {
  for (const language of ["en", "zh", "both"]) {
    const paths = [];
    const html = (await explorerPdfSections({
      problems: [PRACTICE_PROBLEMS[16], PROBLEM_REFERENCES[0]], language, includeAnswers: false,
      fetchImpl: (path) => { paths.push(path); return fetchImpl(path); }
    })).join("");
    assert.ok(html.includes("2026 AMC 10A #17"));
    assert.ok(html.includes("2016 AMC 10A #1"));
    assert.equal(html.includes("2026 AMC 10A #18"), false);
    assert.equal(html.includes("solution-"), false);
    assert.equal(html.includes("Answers &amp; solutions"), false);
    assert.equal(paths.some((p) => p.includes("answer-key")), false);
    assert.equal(html.includes("chinese-17.png"), language !== "en");
    assert.equal(html.includes("Checkpoints"), false);
  }
});

test("solution export combines practice worked solutions with official answer keys and source links", async () => {
  const html = (await explorerPdfSections({
    problems: [PRACTICE_PROBLEMS[23], PROBLEM_REFERENCES[0]], language: "both",
    includeAnswers: true, fetchImpl
  })).join("");
  assert.ok(html.includes("2026 AMC 10A #24: D"));
  assert.ok(html.includes("solution-24.png"));
  assert.equal(html.includes("solution-25.png"), false);
  assert.match(html, /live.poshenloh.com\/past-contests\/amc10\/2016A\/problem\/1/);
  assert.ok(html.indexOf("solution-24.png") > html.indexOf("Answers &amp; solutions"));
});

test("mixed export includes each supplied practice answer and its own worked solution", async () => {
  const paths = [];
  const html = (await explorerPdfSections({
    problems: [PRACTICE_2_PROBLEMS[0], PRACTICE_PROBLEMS[0]], language: "both", includeAnswers: true,
    fetchImpl: (path) => { paths.push(path); return fetchImpl(path); }
  })).join("");
  assert.equal(html.includes("No answer key or worked solution was supplied"), false);
  assert.match(html, /2026 AMC 10A #1: B/);
  assert.match(html, /solution-1\.png/);
  assert.equal(html.includes("undefined"), false);
  assert.ok(html.includes("2026 AMC 10B #1: D"));
  assert.ok(html.includes(PRACTICE_2_PROBLEMS[0].solutionImageUrl));
  assert.match(html, /Supplied bilingual worked solution/);
  assert.equal(paths.some((path) => path === "assets/answer-key.json"), false);
});

test("missing supplemental keys are explicitly reported instead of borrowing official answers", async () => {
  const html = (await explorerPdfSections({
    problems: [{ ...PRACTICE_2_PROBLEMS[0], answerKeyUrl: undefined }], language: "en", includeAnswers: true,
    fetchImpl: async () => { throw new Error("Must not request an unrelated key"); }
  })).join("");
  assert.match(html, /No answer key or worked solution was supplied/);
});

test("2026 AMC 10B worksheets export the supplied Chinese diagrams and choices in the selected language", async () => {
  for (const language of ["en", "zh", "both"]) {
    const problem = PRACTICE_2_PROBLEMS[21];
    const html = (await explorerPdfSections({
      problems: [problem], language, includeAnswers: false,
      fetchImpl: async () => { throw new Error("Image-only worksheet should not fetch answers"); }
    })).join("");
    assert.ok(html.includes(problem.imageUrl));
    assert.equal(html.includes(problem.chineseImageUrl), language !== "en");
    assert.equal(html.includes("chinese-23.png"), false);
    assert.equal(html.includes("solution-"), false);
    assert.equal(html.includes("undefined"), false);
  }
});

test("empty selections, failed exams and missing keys fail explicitly", async () => {
  await assert.rejects(explorerPdfSections({ problems: [], fetchImpl }), /No problems/);
  await assert.rejects(explorerPdfSections({ problems: [PROBLEM_REFERENCES[0]], fetchImpl: async () => ({ ok: false }) }), /Unable to load exam/);
  await assert.rejects(explorerPdfSections({
    problems: [PRACTICE_PROBLEMS[0]], includeAnswers: true,
    fetchImpl: async () => ({ ok: true, json: async () => ({ answers: {} }) })
  }), /Missing answer/);
});

test("Explorer dialog defaults to worksheet, snapshots filters and forwards language and solution choice", async () => {
  const dom = new JSDOM("<body></body>", { url: "https://example.test/playground/" });
  const win = dom.window;
  win.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  win.URL.createObjectURL = () => "blob:test";
  win.URL.revokeObjectURL = () => {};
  const selected = [PRACTICE_PROBLEMS[0]];
  let options;
  try {
    openExplorerExport({ document: win.document, problems: selected, language: "both", fetchImpl,
      createPdf: async (input) => { options = input; return new win.File(["pdf"], "problems.pdf"); } });
    selected.push(PRACTICE_PROBLEMS[1]);
    const dialog = win.document.querySelector("dialog");
    assert.match(dialog.textContent, /Export problems PDF/);
    assert.equal(dialog.querySelector("#questPdfAnswers").checked, false);
    dialog.querySelector("#questPdfLanguage").value = "zh";
    dialog.querySelector("#questPdfAnswers").checked = true;
    dialog.querySelector("#questPdfGenerate").click();
    await new Promise((r) => setTimeout(r, 0));
    assert.equal(options.content.problems.length, 1);
    assert.equal(options.language, "zh");
    assert.equal(options.includeAnswers, true);
    assert.equal(dialog.querySelector("#questPdfDownload").download, "problems.pdf");
    dialog.dispatchEvent(new win.Event("close"));
    assert.equal(win.document.querySelector("dialog"), null);
  } finally { win.close(); }
});
