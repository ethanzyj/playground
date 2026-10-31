import assert from "node:assert/strict";
import { test } from "node:test";
import { QUEST_COURSE, buildQuestCourse, courseCoverage } from "../assets/quest-course.mjs";
import { allConcepts, GLOSSARY, PROBLEM_REFERENCES } from "../assets/data.mjs";
import { problemKey } from "../assets/progress.mjs";
import { validateQuestProgress } from "../assets/quests.mjs";

const completed = (mission) => ({
  learned: true, formulas: mission.concept.formulas.map((_, i) => i),
  problems: mission.problems.map(problemKey), terms: mission.terms.map((term) => term.en)
});

test("the hour-budgeted course covers every concept, all 500 problems, and all 144 glossary entries exactly", () => {
  assert.deepEqual(buildQuestCourse(), QUEST_COURSE);
  const keys = QUEST_COURSE.missions.flatMap((mission) => mission.problems.map(problemKey));
  const terms = QUEST_COURSE.missions.flatMap((mission) => mission.terms.map((term) => term.en));
  const concepts = QUEST_COURSE.missions.map((mission) => mission.concept.studyConceptId);
  assert.equal(keys.length, 500);
  assert.equal(new Set(keys).size, 500);
  assert.deepEqual(new Set(keys), new Set(PROBLEM_REFERENCES.map(problemKey)));
  assert.equal(terms.length, 144);
  assert.deepEqual(new Set(terms), new Set(GLOSSARY.map((term) => term.en)));
  assert.deepEqual(new Set(concepts), new Set(allConcepts().map((concept) => concept.id)));
  for (const mission of QUEST_COURSE.missions) {
    const budget = mission.concept.budget;
    assert.ok(budget.total >= 45 && budget.total <= 60);
    assert.equal(budget.total, budget.lesson + budget.checkpoint + budget.practice + budget.vocabulary + budget.review);
    for (const problem of mission.problems) assert.ok(problem.conceptIds.includes(mission.concept.studyConceptId));
    for (const term of mission.terms) assert.ok(term.conceptIds.includes(mission.concept.studyConceptId));
  }
});

test("all badges require complete course evidence and a missing problem or vocabulary check prevents completion", () => {
  const data = { version: 1, quests: Object.fromEntries(QUEST_COURSE.missions.map((mission) => [mission.concept.id, completed(mission)])) };
  validateQuestProgress(data);
  const coverage = courseCoverage(data);
  assert.equal(coverage.complete, true);
  assert.equal(coverage.problems, 500);
  assert.equal(coverage.terms, 144);
  assert.equal(coverage.concepts, 18);
  assert.equal(coverage.badges, QUEST_COURSE.missions.length);
  const problemMission = QUEST_COURSE.missions.find((mission) => mission.problems.length && !mission.terms.length);
  const missingProblem = structuredClone(data);
  missingProblem.quests[problemMission.concept.id].problems.pop();
  assert.equal(courseCoverage(missingProblem).complete, false);
  assert.equal(courseCoverage(missingProblem).problems, 499);
  const termMission = QUEST_COURSE.missions.find((mission) => mission.terms.length);
  const missingTerm = structuredClone(data);
  missingTerm.quests[termMission.concept.id].terms.pop();
  assert.equal(courseCoverage(missingTerm).terms, 143);
  assert.equal(courseCoverage(missingTerm).complete, false);
  const recognitionOnly = { version: 1, quests: {} };
  assert.equal(courseCoverage(recognitionOnly).badges, 0);
});
