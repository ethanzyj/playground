// Whole-site content and wiring validation. Run with `npm run check:content`.
// Collects every failure and reports them together.

import { readFileSync, readdirSync } from "node:fs";
import { TOPICS, PROBLEMS, PASSAGES, GLOSSARY, ESSAY_PROMPTS, allConcepts } from "../assets/data.mjs";
import { UI_TEXT } from "../assets/ui-text.mjs";
import {
  TAXONOMY_CONCEPTS,
  TOPIC_TAXONOMY,
  LEVELS,
  PROBLEM_TYPES,
  QC_CHOICES
} from "../assets/taxonomy.mjs";
import {
  validateTopic,
  validateProblem,
  validatePassage,
  validateGlossaryEntry,
  validateEssayPrompt,
  hasCjk
} from "./lib/schema.mjs";

const failures = [];
const warnings = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

const concepts = allConcepts();
const conceptIds = new Set(concepts.map((concept) => concept.id));
const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

// --- Taxonomy and study guide ----------------------------------------------------
check(TOPICS.length === TOPIC_TAXONOMY.length, `Expected ${TOPIC_TAXONOMY.length} topics.`);
check(concepts.length === TAXONOMY_CONCEPTS.length, `Expected ${TAXONOMY_CONCEPTS.length} concepts, found ${concepts.length}.`);
check(conceptIds.size === concepts.length, "Concept ids must be unique.");
for (const topic of TOPICS) failures.push(...validateTopic(topic));

// --- Schemas ------------------------------------------------------------------------
const passagesById = new Map(PASSAGES.map((passage) => [passage.id, passage]));
check(passagesById.size === PASSAGES.length, "Passage ids must be unique.");
for (const passage of PASSAGES) failures.push(...validatePassage(passage));
const problemIds = new Set();
for (const problem of PROBLEMS) {
  failures.push(...validateProblem(problem, { passagesById }));
  check(!problemIds.has(problem.id), `Duplicate problem id ${problem.id}.`);
  problemIds.add(problem.id);
}
const termNames = new Set();
for (const term of GLOSSARY) {
  failures.push(...validateGlossaryEntry(term));
  const key = term.en.toLowerCase();
  check(!termNames.has(key), `Duplicate glossary term "${term.en}".`);
  termNames.add(key);
}
const promptIds = new Set();
for (const prompt of ESSAY_PROMPTS) {
  failures.push(...validateEssayPrompt(prompt));
  check(!promptIds.has(prompt.id), `Duplicate essay prompt ${prompt.id}.`);
  promptIds.add(prompt.id);
}

// --- Practice bank coverage -----------------------------------------------------------
const count = (predicate) => PROBLEMS.filter(predicate).length;
const MINIMUMS = [
  ["synonym", "lower", 12], ["synonym", "middle", 12], ["synonym", "upper", 12],
  ["sentence-completion", "lower", 12], ["sentence-completion", "middle", 12], ["sentence-completion", "upper", 12],
  ["word-problem", "lower", 12], ["word-problem", "middle", 12], ["word-problem", "upper", 12],
  ["quantitative-comparison", "middle", 14], ["quantitative-comparison", "upper", 14],
  ["math-achievement", "lower", 20], ["math-achievement", "middle", 20], ["math-achievement", "upper", 20],
  ["reading-comprehension", "lower", 15], ["reading-comprehension", "middle", 24], ["reading-comprehension", "upper", 24]
];
for (const [type, level, minimum] of MINIMUMS) {
  const found = count((problem) => problem.type === type && problem.level === level);
  check(found >= minimum, `Expected at least ${minimum} ${level} ${type} problems, found ${found}.`);
}
for (const passage of PASSAGES) {
  const questions = count((problem) => problem.passageId === passage.id);
  const expected = passage.level === "lower" ? 5 : 6;
  check(questions === expected, `Passage ${passage.id} needs ${expected} questions, has ${questions}.`);
}
for (const concept of TAXONOMY_CONCEPTS.filter((entry) => entry.practice)) {
  const linked = count((problem) => problem.conceptIds.includes(concept.id));
  check(linked >= 3, `Concept ${concept.id} needs at least three linked practice problems (has ${linked}).`);
}
const overview = new Set(["exam-format-levels", "scoring-guessing", "pacing-strategy"]);
for (const concept of concepts) {
  if (overview.has(concept.id)) continue;
  check(GLOSSARY.some((term) => term.conceptIds.includes(concept.id)), `Concept ${concept.id} needs linked glossary terms.`);
}
for (const type of PROBLEM_TYPES) {
  const group = PROBLEMS.filter((problem) => problem.type === type.id);
  if (group.length < 12) continue;
  const shares = [0, 1, 2, 3].map((index) => group.filter((problem) => problem.answer === index).length / group.length);
  check(shares.every((share) => share >= 0.12 && share <= 0.42), `${type.id} answer positions are unbalanced: ${shares.map((share) => `${Math.round(share * 100)}%`).join("/")}.`);
  for (const difficulty of ["easy", "medium", "hard"]) {
    check(group.some((problem) => problem.difficulty === difficulty), `${type.id} has no ${difficulty} problems.`);
  }
}
const comparisons = PROBLEMS.filter((problem) => problem.type === "quantitative-comparison");
for (const level of ["middle", "upper"]) {
  const group = comparisons.filter((problem) => problem.level === level);
  const undetermined = group.filter((problem) => problem.answer === 3).length;
  check(undetermined >= 3 && undetermined <= 8, `${level} comparisons should include 3-8 "cannot be determined" answers (found ${undetermined}).`);
  check(group.every((problem) => JSON.stringify(problem.choices) === JSON.stringify(QC_CHOICES)), "Comparisons use the standard four choices.");
}
check(PROBLEMS.filter((problem) => problem.figure).length >= 20, "Expected at least 20 problems with figures.");

// Vocabulary and glossary volume.
const vocab = GLOSSARY.filter((term) => term.kind === "vocab");
for (const [level, minimum] of [["lower", 90], ["middle", 100], ["upper", 100]]) {
  check(vocab.filter((term) => term.level === level).length >= minimum, `Expected at least ${minimum} ${level} vocabulary words.`);
}
check(GLOSSARY.filter((term) => term.kind === "math").length >= 100, "Expected at least 100 math glossary terms.");
check(GLOSSARY.filter((term) => term.kind === "literary").length >= 45, "Expected at least 45 reading and writing terms.");
check(ESSAY_PROMPTS.length >= 15, "Expected at least 15 essay prompts.");
for (const level of LEVELS) check(ESSAY_PROMPTS.filter((prompt) => prompt.level === level.id).length >= 5, `Expected 5 ${level.id} essay prompts.`);

// Repeated stems waste practice time.
for (const type of ["synonym", "sentence-completion"]) {
  const seen = new Set();
  for (const problem of PROBLEMS.filter((item) => item.type === type)) {
    const key = problem.stem.toLowerCase();
    check(!seen.has(key), `${type} stem repeated: ${problem.stem}`);
    seen.add(key);
  }
}

// A Chinese translation must keep every number of the English question.
const numbersIn = (text) => (text.replace(/\\\(|\\\)/g, " ").match(/\d+(?:[.,]\d+)*/g) || []).map((value) => value.replace(/,/g, ""));
for (const problem of PROBLEMS) {
  if (!problem.stemZh) continue;
  const zhNumbers = new Set(numbersIn(problem.stemZh));
  const missing = numbersIn(problem.stem).filter((value) => !zhNumbers.has(value));
  if (missing.length) warnings.push(`${problem.id}: stemZh is missing number(s) ${[...new Set(missing)].join(", ")} found in the English stem.`);
}
for (const problem of PROBLEMS) {
  const text = `${problem.stem} ${problem.quantityA ?? ""} ${problem.quantityB ?? ""}`;
  if (/\b(figure|graph|chart|diagram|shown below|picture)\b/i.test(text) && !problem.figure && problem.type !== "synonym" && problem.type !== "sentence-completion" && problem.type !== "reading-comprehension") {
    warnings.push(`${problem.id}: the stem mentions a figure but none is provided.`);
  }
  if (problem.figure && problem.type !== "reading-comprehension" && !/\b(table|graph|chart|figure|diagram|shown|picture|plot|number line|grid|coordinate|circle|triangle|rectangle|square|angle|map|spinner|cube|prism)\b/i.test(text)) {
    warnings.push(`${problem.id}: has a figure but the stem never refers to it.`);
  }
}
check(warnings.filter((warning) => /missing number|mentions a figure/.test(warning)).length === 0, `Translation/figure issues:\n  ${warnings.join("\n  ")}`);

// --- Interface text ---------------------------------------------------------------------
for (const [key, text] of Object.entries(UI_TEXT)) {
  check(typeof text.en === "string" && text.en.length > 0 && !hasCjk(text.en), `UI text ${key} needs English without Chinese.`);
  check(typeof text.zh === "string" && hasCjk(text.zh), `UI text ${key} needs Chinese.`);
}
const html = read("../index.html");
const assetFiles = readdirSync(new URL("../assets/", import.meta.url)).filter((name) => name.endsWith(".mjs"));
const sources = Object.fromEntries(assetFiles.map((name) => [name, read(`../assets/${name}`)]));
const usedKeys = new Set();
for (const [name, source] of Object.entries(sources)) {
  if (name === "ui-text.mjs") continue;
  for (const match of source.matchAll(/(?:uiText|uiHtml|uiPair)\(\s*"([A-Za-z0-9]+)"/g)) usedKeys.add(match[1]);
  for (const match of source.matchAll(/(?:uiText|uiHtml|uiPair)\(\s*[^"')]*\?\s*"([A-Za-z0-9]+)"\s*:\s*"([A-Za-z0-9]+)"/g)) { usedKeys.add(match[1]); usedKeys.add(match[2]); }
  for (const match of source.matchAll(/UI_TEXT\.([A-Za-z0-9]+)/g)) usedKeys.add(match[1]);
  // Keys referenced indirectly (for example as a `label:` value looked up later).
  for (const match of source.matchAll(/"([A-Za-z0-9]+)"/g)) {
    if (UI_TEXT[match[1]]) usedKeys.add(match[1]);
  }
}
for (const match of html.matchAll(/data-i18n(?:-placeholder|-aria-label)?="([A-Za-z0-9]+)"/g)) usedKeys.add(match[1]);
for (const key of usedKeys) check(UI_TEXT[key], `UI text key "${key}" is used but not defined.`);
const unused = Object.keys(UI_TEXT).filter((key) => !usedKeys.has(key));
if (unused.length) warnings.push(`Unused UI text keys: ${unused.join(", ")}`);

// --- HTML, CSS and app wiring ---------------------------------------------------------------
for (const id of [
  "topicNav", "conceptView", "studyProgress", "problemList", "problemCount", "problemPagination", "previousProblemPage",
  "nextProblemPage", "problemPageRange", "testModePanel", "officialPractice", "conceptFilter", "levelSelect", "examFactsCard", "sectionFilter",
  "typeFilter", "difficultyFilter", "answerFilter", "problemProgressFilter", "reviewOnly", "reviewCollectionCount",
  "progressOverviewHeading", "progressScope", "progressTotals", "progressMeter", "progressBreakdown", "exportProgress",
  "progressExportError", "glossarySearch", "glossaryKindFilter", "glossaryConceptFilter",
  "glossaryMasteryFilter", "glossaryCount", "glossaryList", "glossaryMore", "mapSearch", "mapExpandAll", "mapCollapseAll",
  "mapCount", "topicMapTree", "themeToggle", "themeError", "storageWarning", "searchInput", "conceptMasteryFilter",
  "studyPanel", "problemsPanel", "glossaryPanel", "mapPanel", "studyTab", "problemsTab", "glossaryTab", "mapTab", "languageMode",
  "accountHeading", "accountLanding", "accountLandingTitle", "accountLandingCopy", "accountIdentity", "accountSyncStatus", "accountMessage",
  "accountLoginMethods", "accountLoginMethod", "accountLoginMethodLabel", "accountPasswordForm", "accountUsername", "accountUsernameLabel",
  "accountPassword", "accountPasswordLabel", "accountPasswordSignIn", "accountForm", "accountEmail", "accountEmailLabel", "accountSendLink",
  "accountSignOut", "accountRetry", "accountImportPanel", "accountImportHelp", "accountImport", "accountKeepSeparate", "accountConflicts"
]) {
  check(html.includes(`id="${id}"`), `index.html is missing #${id}.`);
}
check(html.includes('role="tablist"'), "index.html needs accessible tabs.");
check(html.includes("mathjax@3.2.2"), "index.html must load the pinned MathJax renderer.");
check(/type="module" src="assets\/app\.mjs\?v=/.test(html), "index.html must load a cache-versioned module app.");
check(html.includes("isee-theme"), "index.html must restore the saved theme before first paint.");
for (const language of ["both", "zh", "en"]) check(html.includes(`data-language="${language}"`), `Missing ${language} language button.`);

const stamps = new Set();
for (const [name, source] of [["index.html", html], ...Object.entries(sources)]) {
  for (const match of source.matchAll(/\?v=([A-Za-z0-9-]+)/g)) stamps.add(match[1]);
  if (name !== "index.html" && name !== "data.mjs") {
    for (const match of source.matchAll(/from "(\.\/[^"?]+\.mjs)"/g)) failures.push(`${name}: import ${match[1]} has no ?v= cache-busting suffix.`);
  }
}
check(stamps.size === 1, `All ?v= stamps must match (found ${[...stamps].join(", ")}). Run: npm run bump-version`);

const css = read("../assets/styles.css");
for (const selector of [
  ".choice", ".problem-card", ".passage-card", ".qc-columns", ".word-check", ".answer-feedback", ".test-mode-panel", ".essay-writer",
  ".fig-chart", ".figure-table", ".glossary-term-link", ".glossary-tooltip", ".problem-chip", ".map-tree", ".visually-hidden",
  ".blank", ".theme-toggle", ".language-switch", ".level-chip", ".difficulty-chip", ".official-practice", ".concept-meta"
]) {
  check(css.includes(selector), `styles.css is missing ${selector}.`);
}
check(css.includes('[data-theme="dark"]'), "styles.css must support a manual dark theme.");

const app = sources["app.mjs"];
const i18n = sources["i18n.mjs"];
check(app.includes("typesetPromise"), "Dynamic content must be typeset with MathJax.");
check(i18n.includes('<span class="bilingual-pair"><span lang="en">${en}</span><span lang="zh">${zh}</span></span>'), "Bilingual content must stack English above Chinese.");
for (const name of ["problem", "term", "concept", "problems-concept", "glossary-concept", "level"]) check(app.includes(`"${name}"`), `Deep link ?${name}= is not handled.`);
check(html.indexOf('id="levelSelect"') > html.indexOf('id="themeToggle"') && html.indexOf('id="levelSelect"') < html.indexOf('id="languageMode"'), "The level dropdown belongs in the top bar, next to the language switch.");
check(sources["store.mjs"].includes('"isee-"'), "Saved data must use the isee- key prefix.");
for (const host of ["iseelower.erblearn.org", "iseemiddle.erblearn.org", "iseeupper.erblearn.org", "www.admission.org/assessments/isee/preparation"]) {
  check(app.includes(`https://${host}`), `Official resource link ${host} is missing.`);
}
check(!/amc ?10/i.test(html.replace(/amc10-prep/g, "")), "index.html still mentions AMC 10.");
for (const [name, source] of Object.entries(sources)) {
  // Sign-in usernames deliberately share amc10-prep's account domain, so one account works on both sites.
  check(!/amc10-/i.test(source.replaceAll("@users.amc10-prep.invalid", "")), `${name} still uses an amc10- storage key.`);
}

if (warnings.length) console.warn(`Warnings:\n  ${warnings.join("\n  ")}`);
if (failures.length) {
  console.error(`\n${failures.length} validation failure(s):`);
  for (const failure of failures.slice(0, 120)) console.error(` - ${failure}`);
  if (failures.length > 120) console.error(` ... and ${failures.length - 120} more`);
  process.exit(1);
}

console.log(
  `Validated ${TOPICS.length} topics, ${concepts.length} concepts, ${PROBLEMS.length} practice problems `
  + `(${PASSAGES.length} reading passages), ${GLOSSARY.length} glossary entries (${vocab.length} vocabulary words) and ${ESSAY_PROMPTS.length} essay prompts.`
);
