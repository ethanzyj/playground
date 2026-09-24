import { readFileSync } from "node:fs";
import { TOPICS, PROBLEM_REFERENCES, GLOSSARY, allConcepts } from "../assets/data.mjs";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const concepts = allConcepts();
const conceptIds = new Set(concepts.map((concept) => concept.id));

assert(TOPICS.length === 5, "Expected the five top-level Chinese curriculum modules.");
assert(concepts.length >= 18, "Expected detailed concept coverage from the Chinese topic map.");
assert(conceptIds.size === concepts.length, "Concept IDs must be unique.");
assert(PROBLEM_REFERENCES.length === 500, "Expected all 500 AMC 10A/10B problems from 2016-2025.");

for (const concept of concepts) {
  assert(concept.zh && concept.en, `Concept ${concept.id} is missing bilingual names.`);
  assert(concept.explanationZh?.length > 30, `Concept ${concept.id} needs a Chinese explanation.`);
  assert(concept.explanationEn?.length > 30, `Concept ${concept.id} needs an English explanation.`);
  assert(concept.formulas?.length >= 1, `Concept ${concept.id} needs formulas or core facts.`);
  assert(concept.formulaNotes?.length === concept.formulas.length, `Concept ${concept.id} needs one explanation for every formula.`);
  for (const note of concept.formulaNotes) {
    assert(note.explanationZh && note.explanationEn, `Concept ${concept.id} has a formula without a bilingual explanation.`);
    assert(note.exampleZh && note.exampleEn, `Concept ${concept.id} has a formula without a bilingual example.`);
    assert(note.exampleZh.includes(String.raw`\(`) && note.exampleEn.includes(String.raw`\(`), `Concept ${concept.id} has a formula example without TeX delimiters.`);
    if (note.stepsEn || note.stepsZh) {
      assert(note.stepsEn?.length === note.stepsZh?.length && note.stepsEn.length >= 2, `Concept ${concept.id} has incomplete bilingual formula steps.`);
    }
  }
  if (concept.id === "polynomials") {
    assert(concept.formulaNotes[2].stepsEn?.length >= 5, "The remainder theorem needs a detailed derivation.");
  }
  assert(concept.methodsZh?.length >= 2 && concept.methodsEn?.length >= 2, `Concept ${concept.id} needs bilingual methods.`);
  assert(concept.exampleZh && concept.exampleEn, `Concept ${concept.id} needs an original bilingual example.`);
  for (const example of [concept.exampleZh, concept.exampleEn]) {
    if (/[\^=≥≤≡√]|sqrt\(|C\(\d/.test(example)) {
      assert(example.includes(String.raw`\(`), `Concept ${concept.id} has unformatted math in an example.`);
    }

    for (const topic of TOPICS) {
      assert(topic.officialAlignmentZh && topic.officialAlignment, `Topic ${topic.id} needs bilingual alignment text.`);
    }
  }
  assert(concept.checklistZh?.length >= 2 && concept.checklistEn?.length >= 2, `Concept ${concept.id} needs a readiness checklist.`);
}

for (const problem of PROBLEM_REFERENCES) {
  assert(problem.year >= 2016 && problem.year <= 2025, `Problem reference year out of expected range: ${problem.year}.`);
  assert(/^AMC 10[AB]$/.test(problem.exam), `Unexpected exam label: ${problem.exam}.`);
  assert(problem.problemNumber >= 1 && problem.problemNumber <= 25, `Invalid problem number: ${problem.problemNumber}.`);
  assert(problem.sourceUrl?.startsWith("https://"), `Problem ${problem.year} ${problem.exam} #${problem.problemNumber} needs a source URL.`);
  assert(problem.noteZh && problem.noteEn, `Problem ${problem.year} ${problem.exam} #${problem.problemNumber} needs bilingual notes.`);
  for (const id of problem.conceptIds) {
    assert(conceptIds.has(id), `Problem ${problem.year} ${problem.exam} #${problem.problemNumber} references unknown concept ${id}.`);
  }

  const problemKeys = new Set(PROBLEM_REFERENCES.map((problem) => `${problem.year}-${problem.exam}-${problem.problemNumber}`));
  assert(problemKeys.size === 500, "Every AMC 10 problem reference must be unique.");
  for (let year = 2016; year <= 2025; year += 1) {
    for (const exam of ["AMC 10A", "AMC 10B"]) {
      const examProblems = PROBLEM_REFERENCES.filter((problem) => problem.year === year && problem.exam === exam);
      assert(examProblems.length === 25, `${year} ${exam} must contain all 25 problems.`);
    }
  }
  for (const concept of concepts) {
    const count = PROBLEM_REFERENCES.filter((problem) => problem.conceptIds.includes(concept.id)).length;
    assert(count >= 3, `Concept ${concept.id} needs at least three linked AMC 10 problems.`);
  }
}

const verifiedProblemConcepts = new Map([
  ["2016-AMC 10A-9", ["sequences", "algebraic-techniques"]],
  ["2016-AMC 10B-18", ["integer-equations", "numbers-operations"]],
  ["2017-AMC 10A-12", ["functions", "coordinate-geometry"]],
  ["2017-AMC 10B-22", ["circles-quadrilaterals", "triangles"]],
  ["2018-AMC 10A-15", ["circles-quadrilaterals", "triangles"]],
  ["2018-AMC 10B-20", ["sequences", "algebraic-techniques"]],
  ["2019-AMC 10A-14", ["combinatorics-methods", "diagram-skills"]],
  ["2019-AMC 10B-16", ["triangles", "diagram-skills"]],
  ["2020-AMC 10A-19", ["solids-polyhedra", "combinatorics-methods"]],
  ["2020-AMC 10B-21", ["triangles", "diagram-skills"]],
  ["2021-AMC 10A-11", ["numbers-operations", "algebraic-techniques"]],
  ["2021-AMC 10B-23", ["permutations-combinations-probability", "diagram-skills"]],
  ["2022-AMC 10A-13", ["triangles", "diagram-skills"]],
  ["2022-AMC 10B-17", ["numbers-operations", "integer-equations"]],
  ["2023-AMC 10A-10", ["algebraic-techniques", "numbers-operations"]],
  ["2023-AMC 10B-19", ["permutations-combinations-probability", "coordinate-geometry"]],
  ["2024-AMC 10A-8", ["numbers-operations", "algebraic-techniques"]],
  ["2024-AMC 10B-24", ["polynomials", "numbers-operations"]],
  ["2025-AMC 10A-6", ["triangles", "diagram-skills"]],
  ["2025-AMC 10B-25", ["coordinate-geometry", "diagram-skills"]]
]);
for (const [key, expectedConceptIds] of verifiedProblemConcepts) {
  const problem = PROBLEM_REFERENCES.find((candidate) => `${candidate.year}-${candidate.exam}-${candidate.problemNumber}` === key);
  assert(problem, `Verified problem ${key} is missing.`);
  assert(
    JSON.stringify(problem.conceptIds) === JSON.stringify(expectedConceptIds),
    `Problem ${key} must retain its verified concept mapping.`
  );
}

const years = new Set(PROBLEM_REFERENCES.map((problem) => problem.year));
for (let year = 2016; year <= 2025; year += 1) {
  assert(years.has(year), `Missing a problem reference for ${year}.`);
}

assert(GLOSSARY.length >= 70, "Expected broad bilingual glossary coverage across AMC 10 content areas.");
for (const term of GLOSSARY) {
  assert(term.categoryZh && term.categoryEn, "Every glossary term needs a bilingual category.");
  assert(term.zh && term.en && term.noteZh && term.noteEn, "Every glossary term needs bilingual names and notes.");
  assert(term.noteZh.length >= 12 && term.noteEn.length >= 25, `Glossary term ${term.en} needs a useful bilingual explanation.`);
  assert(term.conceptIds?.length >= 1, `Glossary term ${term.en} needs at least one linked concept.`);
  for (const id of term.conceptIds) {
    assert(conceptIds.has(id), `Glossary term ${term.en} references unknown concept ${id}.`);
  }
}
for (const concept of concepts) {
  assert(GLOSSARY.some((term) => term.conceptIds.includes(concept.id)), `Concept ${concept.id} needs linked glossary terms.`);
}

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
assert(html.includes('id="topicNav"'), "HTML must include the topic navigation mount.");
assert(html.includes('id="conceptView"'), "HTML must include the concept viewer mount.");
assert(html.includes('id="problemList"'), "HTML must include the problem explorer mount.");
assert(html.includes('id="problemCount"'), "Problem Explorer must show filtered and total counts.");
assert(html.includes('id="problemContext"'), "Problem Explorer must explain glossary-driven filters.");
assert(html.includes('role="tablist"'), "HTML must include accessible top-level navigation tabs.");
assert(html.includes('class="global-language hero-language"'), "Language selection must be available at the top of the page.");
assert(html.includes('id="studyPanel"'), "HTML must include the study guide panel.");
assert(html.includes('id="problemsPanel"'), "HTML must include the problem explorer panel.");
assert(html.includes('id="glossaryPanel"'), "HTML must include the glossary panel.");
assert(html.includes('id="conceptFilter"'), "Problem Explorer must include a concept filter.");
assert(html.includes('id="glossarySearch"'), "Glossary must include search.");
assert(html.includes('id="glossaryCount"'), "Glossary must show filtered and total counts.");
assert(html.includes('id="glossaryConceptFilter"'), "Glossary must include a concept filter.");
assert(html.includes('type="module" src="assets/app.mjs?v='), "HTML must load a cache-versioned module app.");
assert(html.includes("mathjax@3.2.2"), "HTML must load the pinned MathJax renderer.");

const app = readFileSync(new URL("../assets/app.mjs", import.meta.url), "utf8");
const data = readFileSync(new URL("../assets/data.mjs", import.meta.url), "utf8");
assert(!data.includes("书达定理"), "The misspelling 书达定理 must not appear; use 韦达定理.");
assert(!data.includes("外切圆"), "Triangle terminology must use 外接圆 for circumcircle.");
assert(!data.includes("模意义下的小数"), "Modular arithmetic must refer to remainders, not decimals.");
assert(!data.includes("二分法"), "Binary-choice counting must not be mislabeled as bisection.");
assert(!/explanation(?:Zh|En): "[^"\n]*\\/.test(data), "Formula explanations containing TeX must use String.raw.");
assert(app.includes("formulaItems(concept)"), "Formula lists must use the explanatory math renderer.");
assert(app.includes("typesetPromise"), "Dynamic concept updates must be typeset after rendering.");
assert(
  app.includes('<span class="bilingual-pair"><span lang="en">${en}</span><span lang="zh">${zh}</span></span>'),
  "Bilingual content must stack English above Chinese."
);
assert(app.includes("bilingualListItems(concept.methodsZh, concept.methodsEn)"), "Bilingual methods must use the stacked layout.");
assert(app.includes("bilingualListItems(concept.checklistZh, concept.checklistEn)"), "Bilingual checklists must use the stacked layout.");
assert(app.includes("renderStaticInterface();"), "Language changes must update the complete static interface.");
assert(app.includes("document.title ="), "Language changes must update the browser page title.");
assert(app.includes('setActiveView("study")'), "Problem concept tags must navigate to the Study Guide.");
assert(app.includes('state.problemConcept === "current"'), "Problem Explorer must support filtering by the current concept.");
assert(app.includes("wireProblemAndGlossaryLinks"), "Study, problem, and glossary views must cross-link.");
assert(app.includes("data-problem-id"), "Problem cards must expose a visible, searchable problem ID.");
assert(app.includes("data-glossary-index"), "Glossary links must retain the selected vocabulary term.");

console.log(`Validated ${TOPICS.length} modules, ${concepts.length} concepts, ${PROBLEM_REFERENCES.length} AMC 10 references, and ${GLOSSARY.length} glossary terms.`);
