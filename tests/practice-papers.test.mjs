import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync, existsSync } from "node:fs";
import { PRACTICE_PAPER, PRACTICE_PROBLEMS, practiceStatement, isPracticeKey } from "../assets/practice-papers.mjs";
import { GLOSSARY, PROBLEM_REFERENCES, allConcepts } from "../assets/data.mjs";
import { QUEST_COURSE } from "../assets/quest-course.mjs";
import { problemKey, exportProgress, progressScope } from "../assets/progress.mjs";

const root = new URL("../", import.meta.url);
test("2026-practice-1 supplies 25 independent problems with intact original assets", () => {
  assert.equal(PRACTICE_PAPER.id, "2026-practice-1");
  assert.equal(PRACTICE_PROBLEMS.length, 25);
  assert.equal(new Set([...PROBLEM_REFERENCES, ...PRACTICE_PROBLEMS].map(problemKey)).size, 525);
  for (const [i, problem] of PRACTICE_PROBLEMS.entries()) {
    assert.equal(problemKey(problem), `2026-practice-1-${i + 1}`);
    assert.ok(isPracticeKey(problemKey(problem)));
    assert.equal(problem.bookletPage >= 2 && problem.bookletPage <= 6, true);
    assert.ok(problem.conceptIds.every((id) => allConcepts().some((c) => c.id === id)));
    assert.ok(problem.vocabulary.every((name) => GLOSSARY.some((term) => term.en === name)));
    const bytes = readFileSync(new URL(problem.imageUrl, root));
    assert.equal(bytes.subarray(1, 4).toString(), "PNG");
    assert.ok(bytes.length > 1000);
    assert.ok(existsSync(new URL(problem.sourceUrl, root)));
  }
  assert.equal(readFileSync(new URL(PRACTICE_PAPER.sourceUrl, root)).subarray(0, 5).toString(), "%PDF-");
  assert.equal(QUEST_COURSE.missions.length, 153);
  assert.equal(QUEST_COURSE.missions.flatMap((m) => m.problems).some((p) => p.practice), false);
  assert.equal(PROBLEM_REFERENCES.length, 500);
});

test("practice statements preserve the English original without fabricated solutions or translations", () => {
  for (const language of ["en", "zh", "both"]) {
    const html = practiceStatement(PRACTICE_PROBLEMS[16], language);
    assert.match(html, /problem-17\.png/);
    assert.match(html, /booklet\.pdf#page=4/);
    assert.equal(html.includes("live.poshenloh.com"), false);
    assert.match(html, /practice-image-link/);
  }
  assert.equal(isPracticeKey("2026-practice-1-26"), false);
  assert.equal(isPracticeKey("2025-AMC10A-1"), false);
});

test("practice filtering and progress exports distinguish supplemental papers", () => {
  const problems = [...PROBLEM_REFERENCES, ...PRACTICE_PROBLEMS];
  assert.equal(progressScope(problems, 2026, "practice-1").length, 25);
  assert.equal(progressScope(problems, 2026, "AMC 10A").length, 0);
  const exported = exportProgress(problems, { "2026-practice-1-17": "haveApproach" }, allConcepts());
  assert.match(exported.scope, /supplemental practice/);
  assert.equal(exported.summary.total, 525);
  assert.equal(exported.summary.marked, 1);
});

test("practice answer key preserves the supplied PDF's 25 matched answers and provenance", () => {
  const key = JSON.parse(readFileSync(new URL(PRACTICE_PAPER.answerKeyUrl, root)));
  assert.equal(key.paperId, "2026-practice-1");
  assert.equal(Object.keys(key.answers).length, 25);
  assert.equal(PRACTICE_PROBLEMS.map((p) => key.answers[problemKey(p)]).join(""), "BADACAACDCDDCBBDCDCCCADDB");
  assert.match(key.sourceName, /AMC10A_2026_/);
  assert.equal(key.sourceSha256, "469c4675bc2f68ba6ec55a8019fcdd9c656a9042c7563c9d23d80261f0d3748a");
});
