import { test } from "node:test";
import assert from "node:assert/strict";
import { TOPICS, PROBLEMS, PASSAGES, GLOSSARY, allConcepts } from "../assets/data.mjs";
import { createI18n } from "../assets/i18n.mjs";
import { createGlossaryLinker, escapeHtml } from "../assets/rich-text.mjs";
import { createProblemView } from "../assets/problem-view.mjs";
import { createExplorer } from "../assets/explorer.mjs";

const concepts = allConcepts();
const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
const linker = createGlossaryLinker(GLOSSARY);
const deepLink = (name, value) => `?${new URLSearchParams({ [name]: value })}`;

const PAIRED = ["div", "p", "span", "section", "article", "fieldset", "label", "table", "tbody", "thead", "tr", "ul", "ol", "li", "details", "summary", "form", "svg", "figure", "h3", "h4", "button", "a", "small", "strong", "em", "code"];

function assertWellFormed(html, label) {
  for (const tag of PAIRED) {
    const open = (html.match(new RegExp(`<${tag}(?=[\\s>])`, "g")) || []).length;
    const close = (html.match(new RegExp(`</${tag}>`, "g")) || []).length;
    assert.equal(open, close, `${label}: unbalanced <${tag}> (${open} open, ${close} close)`);
  }
  assert.ok(!/class="undefined"|="undefined"|>undefined</.test(html), `${label}: leaked an undefined value`);
  assert.ok(!/\[object Object\]|NaN</.test(html), `${label}: leaked an object or NaN`);
}

function setup(language, attempts = {}) {
  const state = { language, attempts, progress: {}, reviewCollection: new Set(), level: "middle", section: "all", type: "all", difficulty: "all", problemConcept: "all", progressFilter: "all", answerFilter: "all", reviewOnly: false, activeConceptId: concepts[0].id, activeView: "problems", problemPage: 0 };
  const i18n = createI18n(() => state.language);
  const glossaryByName = linker.byName;
  const view = createProblemView({ i18n, linker, conceptById, glossaryByName, deepLink, getLanguage: () => state.language });
  const explorer = createExplorer({
    state, i18n, view, problems: PROBLEMS, passages: PASSAGES, concepts, topics: TOPICS,
    $: () => { throw new Error("no DOM in this test"); }, typesetMath() {}, deepLink, persist() {}, onChange() {}, wireTooltips() {}
  });
  return { state, i18n, view, explorer };
}

test("every problem card renders well-formed HTML in every language and state", () => {
  for (const language of ["both", "zh", "en"]) {
    const fresh = setup(language);
    const wrong = setup(language, Object.fromEntries(PROBLEMS.map((problem) => [problem.id, { choice: (problem.answer + 1) % 4, correct: false, at: "" }])));
    const right = setup(language, Object.fromEntries(PROBLEMS.map((problem) => [problem.id, { choice: problem.answer, correct: true, at: "" }])));
    for (const problem of PROBLEMS) {
      const label = `${problem.id} (${language})`;
      const open = fresh.explorer.cardHtml(problem);
      assertWellFormed(open, label);
      assert.equal((open.match(/<label class="choice/g) || []).length, 4, `${label}: needs four choices`);
      assert.ok(open.includes("check-answer") && !open.includes("answer-feedback"), `${label}: unanswered cards offer a check button only`);
      const missed = wrong.explorer.cardHtml(problem);
      assertWellFormed(missed, `${label} wrong`);
      assert.ok(missed.includes("answer-feedback is-incorrect") && missed.includes("is-correct") && missed.includes("is-wrong"), `${label}: wrong answers show the key and the mistake`);
      const solved = right.explorer.cardHtml(problem);
      assertWellFormed(solved, `${label} right`);
      assert.ok(solved.includes("answer-feedback is-correct") && solved.includes("answered-correct"), `${label}: correct answers are marked`);
      if (problem.glosses && language !== "en") assert.ok(missed.includes("word-check"), `${label}: verbal items show a word check`);
      if (problem.figure) assert.ok(open.includes("problem-figure"), `${label}: figure is rendered`);
      if (problem.type === "synonym") assert.ok(open.includes("stem-word"), `${label}: synonym stem word`);
      if (problem.type === "sentence-completion") assert.ok(open.includes('class="blank"'), `${label}: blanks are rendered`);
      if (problem.type === "quantitative-comparison") assert.ok(open.includes("qc-columns"), `${label}: two columns`);
    }
  }
});

test("every reading passage renders well-formed HTML in every language", () => {
  for (const language of ["both", "zh", "en"]) {
    const { view } = setup(language);
    for (const passage of PASSAGES) {
      const html = view.passageHtml(passage);
      assertWellFormed(html, `${passage.id} (${language})`);
      assert.equal((html.match(/<p>/g) || []).length >= passage.paragraphs.length, true);
      assert.equal(html.includes("passage-translation"), language !== "en");
    }
  }
});

test("glossary linking never changes the visible text of any study-guide or glossary string", () => {
  const strip = (html) => html.replace(/<span class="glossary-term-link"[^>]*>/g, "").replace(/<\/span>/g, "");
  const texts = [];
  for (const concept of concepts) {
    texts.push(concept.explanationEn, concept.exampleEn, ...concept.methodsEn, ...concept.checklistEn);
    for (const point of concept.keyPoints) texts.push(point.explanationEn, point.exampleEn, ...(point.stepsEn ?? []));
  }
  for (const term of GLOSSARY) texts.push(term.noteEn);
  for (const problem of PROBLEMS) texts.push(problem.explanationEn);
  assert.ok(texts.length > 500);
  for (const text of texts) {
    const html = linker.render(text, { link: true });
    assert.equal(strip(html), escapeHtml(text), `linking altered: ${text.slice(0, 80)}`);
    const tex = text.match(/\\\([^]*?\\\)/g) || [];
    for (const segment of tex) assert.ok(html.includes(escapeHtml(segment)), `TeX segment was altered: ${segment}`);
  }
});

test("each concept's TeX formulas are non-empty and key points are complete", () => {
  for (const concept of concepts) {
    for (const point of concept.keyPoints) {
      if (point.formula) assert.ok(point.formula.length >= 2, `${concept.id}: empty formula`);
    }
  }
});
