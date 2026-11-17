// Reading Comprehension study-guide topic, assembled from two concept files.

import { CONCEPTS as CORE_CONCEPTS } from "./concepts-reading-a.mjs?v=20261116-2";
import { CONCEPTS as CRAFT_CONCEPTS } from "./concepts-reading-b.mjs?v=20261116-2";

export const TOPIC = {
  id: "reading-comprehension",
  zh: "阅读理解",
  en: "Reading Comprehension",
  officialAlignment: "Reading Comprehension: passages with five or six questions each across six official strands (Lower 25 questions in 25 minutes, Middle and Upper 36 questions in 35 minutes)",
  officialAlignmentZh: "阅读理解：每篇文章配 5–6 道题，涵盖六大官方题型（初级 25 题/25 分钟，中级与高级 36 题/35 分钟）",
  concepts: [...CORE_CONCEPTS, ...CRAFT_CONCEPTS]
};
