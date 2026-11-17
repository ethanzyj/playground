// The site shows one ISEE level at a time (Middle by default). These pure helpers decide
// which concepts, problems and glossary terms belong to a level and which level a link
// should switch to, so every tab applies the same rule.

import { LEVELS, DEFAULT_LEVEL } from "./taxonomy.mjs?v=20261116-2";

export { DEFAULT_LEVEL };

const ORDER = LEVELS.map((level) => level.id);

export function isLevel(value) {
  return ORDER.includes(value);
}

export function normalizeLevel(value) {
  return isLevel(value) ? value : DEFAULT_LEVEL;
}

export function conceptInLevel(concept, level) {
  return concept.levels.includes(level);
}

// Vocabulary words belong to one level. Math and reading/writing terms are shared, so
// they are in scope whenever a concept they explain is tested at the level.
export function termInLevel(term, level, conceptById) {
  if (term.kind === "vocab") return term.level === level;
  return term.conceptIds.some((id) => {
    const concept = conceptById.get(id);
    return concept ? conceptInLevel(concept, level) : false;
  });
}

// The level to show for a link: stay on `current` when the target exists there,
// otherwise move to the closest level that has it (the higher one on a tie).
export function nearestLevel(available, current) {
  if (available.includes(current)) return current;
  const from = ORDER.indexOf(current);
  const distance = (level) => Math.abs(ORDER.indexOf(level) - from);
  return [...available].sort((a, b) => distance(a) - distance(b) || ORDER.indexOf(b) - ORDER.indexOf(a))[0] ?? current;
}

// Builds a (cached) lookup from a level id to everything that is in scope for it.
export function createLevelScopes({ topics, concepts, problems, glossary }) {
  const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
  const cache = new Map();
  return function scopeFor(level) {
    const id = normalizeLevel(level);
    if (!cache.has(id)) {
      const levelConcepts = concepts.filter((concept) => conceptInLevel(concept, id));
      const conceptIds = new Set(levelConcepts.map((concept) => concept.id));
      cache.set(id, {
        level: id,
        concepts: levelConcepts,
        conceptIds,
        topics: topics
          .map((topic) => ({ ...topic, concepts: topic.concepts.filter((concept) => conceptIds.has(concept.id)) }))
          .filter((topic) => topic.concepts.length),
        problems: problems.filter((problem) => problem.level === id),
        glossary: glossary.filter((term) => termInLevel(term, id, conceptById))
      });
    }
    return cache.get(id);
  };
}
