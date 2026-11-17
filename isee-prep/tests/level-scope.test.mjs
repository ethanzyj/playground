import { test } from "node:test";
import assert from "node:assert/strict";
import { TOPICS, PROBLEMS, GLOSSARY, allConcepts } from "../assets/data.mjs";
import { LEVELS } from "../assets/taxonomy.mjs";
import {
  DEFAULT_LEVEL,
  isLevel,
  normalizeLevel,
  conceptInLevel,
  termInLevel,
  nearestLevel,
  createLevelScopes
} from "../assets/level-scope.mjs";

const concepts = allConcepts();
const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
const scopeFor = createLevelScopes({ topics: TOPICS, concepts, problems: PROBLEMS, glossary: GLOSSARY });

test("Middle is the default level and unknown values fall back to it", () => {
  assert.equal(DEFAULT_LEVEL, "middle");
  assert.equal(normalizeLevel(undefined), "middle");
  assert.equal(normalizeLevel("primary"), "middle");
  assert.equal(normalizeLevel("upper"), "upper");
  assert.ok(LEVELS.every((level) => isLevel(level.id)));
  assert.ok(!isLevel("all"));
});

test("nearestLevel stays put when possible and otherwise picks the closest level", () => {
  assert.equal(nearestLevel(["lower", "middle", "upper"], "lower"), "lower");
  assert.equal(nearestLevel(["middle", "upper"], "lower"), "middle");
  assert.equal(nearestLevel(["upper"], "lower"), "upper");
  assert.equal(nearestLevel(["lower", "upper"], "middle"), "upper", "ties go to the higher level");
  assert.equal(nearestLevel([], "middle"), "middle");
});

test("each level's scope only holds problems of that level and covers every concept it is tested on", () => {
  for (const level of LEVELS) {
    const scope = scopeFor(level.id);
    assert.ok(scope.problems.length > 0);
    assert.ok(scope.problems.every((problem) => problem.level === level.id));
    assert.equal(scope.problems.length, PROBLEMS.filter((problem) => problem.level === level.id).length);
    for (const problem of scope.problems) {
      assert.ok(problem.conceptIds.every((id) => scope.conceptIds.has(id)), `${problem.id} uses a concept outside ${level.id}`);
    }
    assert.ok(scope.concepts.every((concept) => conceptInLevel(concept, level.id)));
    assert.equal(scope.topics.flatMap((topic) => topic.concepts).length, scope.concepts.length);
  }
});

test("Middle shows every concept; Lower hides the concepts that are not tested at that level", () => {
  assert.equal(scopeFor("middle").concepts.length, concepts.length);
  const lower = scopeFor("lower");
  assert.ok(!lower.conceptIds.has("quantitative-comparisons"), "Lower has no quantitative comparisons");
  assert.ok(lower.concepts.length < concepts.length);
});

test("vocabulary belongs to one level while shared terms follow concept applicability", () => {
  for (const level of LEVELS) {
    const scope = scopeFor(level.id);
    const vocabulary = scope.glossary.filter((term) => term.kind === "vocab");
    assert.ok(vocabulary.length > 0 && vocabulary.every((term) => term.level === level.id));
    for (const term of scope.glossary) assert.ok(termInLevel(term, level.id, conceptById));
  }
  const total = GLOSSARY.filter((term) => term.kind === "vocab").length;
  assert.equal(LEVELS.reduce((sum, level) => sum + scopeFor(level.id).glossary.filter((term) => term.kind === "vocab").length, 0), total);
  const middle = scopeFor("middle").glossary;
  assert.equal(middle.filter((term) => term.kind !== "vocab").length, GLOSSARY.filter((term) => term.kind !== "vocab").length);
});

test("scopes are cached and reject unknown levels", () => {
  assert.equal(scopeFor("upper"), scopeFor("upper"));
  assert.equal(scopeFor("nonsense").level, "middle");
});
