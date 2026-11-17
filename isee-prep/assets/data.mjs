// Assembles the study guide, glossary and practice bank from the content files.

import {
  TOPIC_TAXONOMY,
  CONCEPT_TAXONOMY_BY_ID,
  LEVELS,
  PROBLEM_SECTIONS,
  QC_CHOICES,
  QC_CHOICES_ZH
} from "./taxonomy.mjs?v=20261116-3";

import { TOPIC as OVERVIEW_TOPIC } from "./content/topics-overview.mjs?v=20261116-3";
import { TOPIC as VERBAL_TOPIC } from "./content/topics-verbal.mjs?v=20261116-3";
import { TOPIC as READING_TOPIC } from "./content/topics-reading.mjs?v=20261116-3";
import { TOPIC as QUANTITATIVE_TOPIC } from "./content/topics-quantitative.mjs?v=20261116-3";
import { TOPIC as NUMBERS_TOPIC } from "./content/topics-numbers.mjs?v=20261116-3";
import { TOPIC as ALGEBRA_TOPIC } from "./content/topics-algebra.mjs?v=20261116-3";
import { TOPIC as GEOMETRY_TOPIC } from "./content/topics-geometry.mjs?v=20261116-3";
import { TOPIC as MEASUREMENT_TOPIC } from "./content/topics-measurement.mjs?v=20261116-3";
import { TOPIC as DATA_TOPIC } from "./content/topics-data.mjs?v=20261116-3";
import { TOPIC as ESSAY_TOPIC } from "./content/topics-essay.mjs?v=20261116-3";

import { GLOSSARY_ENTRIES as MATH_TERMS } from "./content/glossary-math.mjs?v=20261116-3";
import { GLOSSARY_ENTRIES as LITERARY_TERMS } from "./content/glossary-literary.mjs?v=20261116-3";
import { GLOSSARY_ENTRIES as LOWER_VOCABULARY } from "./content/glossary-vocab-lower.mjs?v=20261116-3";
import { GLOSSARY_ENTRIES as MIDDLE_VOCABULARY } from "./content/glossary-vocab-middle.mjs?v=20261116-3";
import { GLOSSARY_ENTRIES as UPPER_VOCABULARY } from "./content/glossary-vocab-upper.mjs?v=20261116-3";

import { ESSAY_PROMPTS as ESSAY_PROMPT_LIST } from "./content/essay-prompts.mjs?v=20261116-3";

import { PROBLEMS as SYNONYM_LOWER_PROBLEMS } from "./content/problems-verbal-synonyms-lower.mjs?v=20261116-3";
import { PROBLEMS as SYNONYM_MIDDLE_PROBLEMS } from "./content/problems-verbal-synonyms-middle.mjs?v=20261116-3";
import { PROBLEMS as SYNONYM_UPPER_PROBLEMS } from "./content/problems-verbal-synonyms-upper.mjs?v=20261116-3";
import { PROBLEMS as SENTENCE_PROBLEMS } from "./content/problems-verbal-sentence.mjs?v=20261116-3";
import { PROBLEMS as WORD_PROBLEMS } from "./content/problems-quantitative-word.mjs?v=20261116-3";
import { PROBLEMS as COMPARISON_PROBLEMS } from "./content/problems-quantitative-comparison.mjs?v=20261116-3";
import { PROBLEMS as NUMBERS_ALGEBRA_PROBLEMS } from "./content/problems-mathematics-numbers-algebra.mjs?v=20261116-3";
import { PROBLEMS as GEOMETRY_DATA_LOWER_PROBLEMS } from "./content/problems-mathematics-geometry-data-lower.mjs?v=20261116-3";
import { PROBLEMS as GEOMETRY_DATA_MIDDLE_PROBLEMS } from "./content/problems-mathematics-geometry-data-middle.mjs?v=20261116-3";
import { PROBLEMS as GEOMETRY_DATA_UPPER_PROBLEMS } from "./content/problems-mathematics-geometry-data-upper.mjs?v=20261116-3";
import { PASSAGES as READING_PASSAGES_1, PROBLEMS as READING_PROBLEMS_1 } from "./content/problems-reading-1.mjs?v=20261116-3";
import { PASSAGES as READING_PASSAGES_2, PROBLEMS as READING_PROBLEMS_2 } from "./content/problems-reading-2.mjs?v=20261116-3";
import { PROBLEMS as SYNONYM_MIDDLE_2_PROBLEMS } from "./content/problems-verbal-synonyms-middle-2.mjs?v=20261116-3";
import { PROBLEMS as SENTENCE_MIDDLE_2_PROBLEMS } from "./content/problems-verbal-sentence-middle-2.mjs?v=20261116-3";
import { PROBLEMS as WORD_MIDDLE_2_PROBLEMS } from "./content/problems-quantitative-word-middle-2.mjs?v=20261116-3";
import { PROBLEMS as COMPARISON_MIDDLE_2_PROBLEMS } from "./content/problems-quantitative-comparison-middle-2.mjs?v=20261116-3";
import { PROBLEMS as NUMBERS_ALGEBRA_MIDDLE_2_PROBLEMS } from "./content/problems-mathematics-numbers-algebra-middle-2.mjs?v=20261116-3";
import { PROBLEMS as GEOMETRY_DATA_MIDDLE_2_PROBLEMS } from "./content/problems-mathematics-geometry-data-middle-2.mjs?v=20261116-3";
import { PASSAGES as READING_PASSAGES_3, PROBLEMS as READING_PROBLEMS_3 } from "./content/problems-reading-middle-3.mjs?v=20261116-3";
import { PASSAGES as READING_PASSAGES_4, PROBLEMS as READING_PROBLEMS_4 } from "./content/problems-reading-middle-4.mjs?v=20261116-3";

export { LEVELS };

const TOPIC_CONTENT = [
  OVERVIEW_TOPIC,
  VERBAL_TOPIC,
  READING_TOPIC,
  QUANTITATIVE_TOPIC,
  NUMBERS_TOPIC,
  ALGEBRA_TOPIC,
  GEOMETRY_TOPIC,
  MEASUREMENT_TOPIC,
  DATA_TOPIC,
  ESSAY_TOPIC
];

// Topics follow the taxonomy order; each concept also carries the taxonomy's
// level/section applicability so the UI can show where it is tested.
export const TOPICS = TOPIC_TAXONOMY.map((entry) => {
  const topic = TOPIC_CONTENT.find((candidate) => candidate.id === entry.id);
  return {
    ...topic,
    concepts: topic.concepts.map((concept) => {
      const meta = CONCEPT_TAXONOMY_BY_ID.get(concept.id);
      return { ...concept, levels: meta.levels, sections: meta.sections, practice: meta.practice };
    })
  };
});

export function allConcepts() {
  return TOPICS.flatMap((topic) => topic.concepts.map((concept) => ({ ...concept, topicId: topic.id, topicZh: topic.zh, topicEn: topic.en })));
}

export const PASSAGES = [...READING_PASSAGES_1, ...READING_PASSAGES_2, ...READING_PASSAGES_3, ...READING_PASSAGES_4];

export const ESSAY_PROMPTS = [...ESSAY_PROMPT_LIST];

const LEVEL_ORDER = LEVELS.map((level) => level.id);
const SECTION_ORDER = PROBLEM_SECTIONS;
const TYPE_ORDER = ["synonym", "sentence-completion", "word-problem", "quantitative-comparison", "reading-comprehension", "math-achievement"];

const RAW_PROBLEMS = [
  ...SYNONYM_LOWER_PROBLEMS,
  ...SYNONYM_MIDDLE_PROBLEMS,
  ...SYNONYM_UPPER_PROBLEMS,
  ...SENTENCE_PROBLEMS,
  ...WORD_PROBLEMS,
  ...COMPARISON_PROBLEMS,
  ...NUMBERS_ALGEBRA_PROBLEMS,
  ...GEOMETRY_DATA_LOWER_PROBLEMS,
  ...GEOMETRY_DATA_MIDDLE_PROBLEMS,
  ...GEOMETRY_DATA_UPPER_PROBLEMS,
  ...READING_PROBLEMS_1,
  ...READING_PROBLEMS_2,
  ...SYNONYM_MIDDLE_2_PROBLEMS,
  ...SENTENCE_MIDDLE_2_PROBLEMS,
  ...WORD_MIDDLE_2_PROBLEMS,
  ...COMPARISON_MIDDLE_2_PROBLEMS,
  ...NUMBERS_ALGEBRA_MIDDLE_2_PROBLEMS,
  ...GEOMETRY_DATA_MIDDLE_2_PROBLEMS,
  ...READING_PROBLEMS_3,
  ...READING_PROBLEMS_4
];

// Sorted by level, section, type, then id; `number` counts within level + section.
export const PROBLEMS = (() => {
  const sorted = RAW_PROBLEMS.map((problem) => ({
    ...problem,
    choices: problem.type === "quantitative-comparison" ? [...QC_CHOICES] : problem.choices,
    ...(problem.type === "quantitative-comparison" ? { choicesZh: [...QC_CHOICES_ZH] } : {})
  })).sort((a, b) =>
    LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level)
    || SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section)
    || TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type)
    || a.id.localeCompare(b.id, "en", { numeric: true }));
  const counters = new Map();
  return sorted.map((problem) => {
    const key = `${problem.level}:${problem.section}`;
    const number = (counters.get(key) ?? 0) + 1;
    counters.set(key, number);
    return { ...problem, number };
  });
})();

export const GLOSSARY = [
  ...MATH_TERMS,
  ...LITERARY_TERMS,
  ...LOWER_VOCABULARY,
  ...MIDDLE_VOCABULARY,
  ...UPPER_VOCABULARY
];
