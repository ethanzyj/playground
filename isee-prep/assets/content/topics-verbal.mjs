// Verbal Reasoning study-guide topic, assembled from two concept files.

import { CONCEPTS as SYNONYM_AND_SENTENCE_CONCEPTS } from "./concepts-verbal-a.mjs?v=20261116-3";
import { CONCEPTS as WORD_CONCEPTS } from "./concepts-verbal-b.mjs?v=20261116-3";

export const TOPIC = {
  id: "verbal-reasoning",
  zh: "言语推理",
  en: "Verbal Reasoning",
  officialAlignment: "Verbal Reasoning: synonyms and sentence completion (Lower 34 questions, Middle and Upper 40 questions, 20 minutes)",
  officialAlignmentZh: "言语推理：同义词与句子填空（初级 34 题，中级与高级 40 题，限时 20 分钟）",
  concepts: [...SYNONYM_AND_SENTENCE_CONCEPTS, ...WORD_CONCEPTS]
};
