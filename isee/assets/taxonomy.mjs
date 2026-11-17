// Single source of truth for ISEE levels, sections, problem types and the
// study-guide concept map. Content files, validators and the app all read this.

export const DEFAULT_LEVEL = "middle";

// `questions` counts the official multiple-choice questions (including unscored try-out items);
// `totalMinutes` is the timed sections plus the 30-minute essay.
export const LEVELS = [
  { id: "lower", en: "Lower Level", zh: "初级", shortEn: "Lower", gradesEn: "applying to Grades 5–6", gradesZh: "申请 5–6 年级", questions: 127, totalMinutes: 140 },
  { id: "middle", en: "Middle Level", zh: "中级", shortEn: "Middle", gradesEn: "applying to Grades 7–8", gradesZh: "申请 7–8 年级", questions: 160, totalMinutes: 160 },
  { id: "upper", en: "Upper Level", zh: "高级", shortEn: "Upper", gradesEn: "applying to Grades 9–12", gradesZh: "申请 9–12 年级", questions: 160, totalMinutes: 160 }
];

export const SECTIONS = [
  { id: "verbal", code: "VR", en: "Verbal Reasoning", zh: "言语推理" },
  { id: "quantitative", code: "QR", en: "Quantitative Reasoning", zh: "数量推理" },
  { id: "reading", code: "RC", en: "Reading Comprehension", zh: "阅读理解" },
  { id: "mathematics", code: "MA", en: "Mathematics Achievement", zh: "数学能力" },
  { id: "essay", code: "ES", en: "Essay", zh: "作文" }
];

// Sections that have multiple-choice problems in the practice bank.
export const PROBLEM_SECTIONS = ["verbal", "quantitative", "reading", "mathematics"];

export const PROBLEM_TYPES = [
  { id: "synonym", section: "verbal", en: "Synonym", zh: "同义词" },
  { id: "sentence-completion", section: "verbal", en: "Sentence Completion", zh: "句子填空" },
  { id: "word-problem", section: "quantitative", en: "Word Problem", zh: "应用题" },
  { id: "quantitative-comparison", section: "quantitative", en: "Quantitative Comparison", zh: "数量比较" },
  { id: "reading-comprehension", section: "reading", en: "Reading Comprehension", zh: "阅读理解" },
  { id: "math-achievement", section: "mathematics", en: "Math Achievement", zh: "数学题" }
];

export const DIFFICULTIES = [
  { id: "easy", en: "easy", zh: "简单" },
  { id: "medium", en: "medium", zh: "中等" },
  { id: "hard", en: "hard", zh: "较难" }
];

// Official ISEE Reading Comprehension strands and the study-guide concept each maps to.
export const RC_STRANDS = [
  { id: "main-idea", conceptId: "main-idea", en: "Main Idea", zh: "主旨大意" },
  { id: "supporting-ideas", conceptId: "supporting-ideas", en: "Supporting Ideas", zh: "支持细节" },
  { id: "inference", conceptId: "inference", en: "Inference", zh: "推理判断" },
  { id: "vocabulary", conceptId: "vocabulary-in-context", en: "Vocabulary", zh: "词汇" },
  { id: "organization-logic", conceptId: "organization-logic", en: "Organization/Logic", zh: "结构逻辑" },
  { id: "tone-style-figurative", conceptId: "tone-style-figurative", en: "Tone/Style/Figurative Language", zh: "语气·风格·修辞" }
];

export const PASSAGE_GENRES = [
  { id: "narrative", en: "narrative", zh: "记叙文" },
  { id: "expository", en: "expository", zh: "说明文" },
  { id: "persuasive", en: "persuasive", zh: "议论文" },
  { id: "descriptive", en: "descriptive", zh: "描写文" }
];

export const GLOSSARY_KINDS = [
  { id: "math", en: "Math terms", zh: "数学术语" },
  { id: "vocab", en: "Vocabulary words", zh: "词汇" },
  { id: "literary", en: "Reading & writing terms", zh: "阅读与写作术语" }
];

export const QC_CHOICES = [
  "The quantity in Column A is greater.",
  "The quantity in Column B is greater.",
  "The two quantities are equal.",
  "The relationship cannot be determined from the information given."
];

export const QC_CHOICES_ZH = [
  "A 列的量更大。",
  "B 列的量更大。",
  "两个量相等。",
  "根据所给信息无法确定两者的关系。"
];

const ALL = ["lower", "middle", "upper"];
const MID_UP = ["middle", "upper"];
const MATH_SECTIONS = ["quantitative", "mathematics"];

function concept(id, zh, en, levels, sections, practice = true) {
  return { id, zh, en, levels, sections, practice };
}

// `practice: true` concepts must have at least three linked practice problems.
export const TOPIC_TAXONOMY = [
  {
    id: "isee-overview",
    zh: "考试概览",
    en: "ISEE Overview",
    concepts: [
      concept("exam-format-levels", "考试结构与级别", "ISEE Format & Levels", ALL, ["verbal", "quantitative", "reading", "mathematics", "essay"], false),
      concept("scoring-guessing", "评分、百分位与猜题", "Scoring, Percentiles & Guessing", ALL, ["verbal", "quantitative", "reading", "mathematics", "essay"], false),
      concept("pacing-strategy", "用时与应试策略", "Pacing & Test-Day Strategy", ALL, ["verbal", "quantitative", "reading", "mathematics", "essay"], false)
    ]
  },
  {
    id: "verbal-reasoning",
    zh: "言语推理",
    en: "Verbal Reasoning",
    concepts: [
      concept("synonyms", "同义词", "Synonyms", ALL, ["verbal"]),
      concept("sentence-completion", "句子填空", "Sentence Completion", ALL, ["verbal"]),
      concept("word-parts", "词根与词缀", "Prefixes, Roots & Suffixes", ALL, ["verbal", "reading"]),
      concept("vocabulary-building", "词汇积累与词义辨析", "Vocabulary Building & Word Nuance", ALL, ["verbal", "reading"])
    ]
  },
  {
    id: "reading-comprehension",
    zh: "阅读理解",
    en: "Reading Comprehension",
    concepts: [
      concept("main-idea", "主旨大意", "Main Idea", ALL, ["reading"]),
      concept("supporting-ideas", "细节与支持观点", "Supporting Ideas & Details", ALL, ["reading"]),
      concept("inference", "推理判断", "Inference", ALL, ["reading"]),
      concept("vocabulary-in-context", "语境词义", "Vocabulary in Context", ALL, ["reading", "verbal"]),
      concept("organization-logic", "结构与逻辑", "Organization & Logic", ALL, ["reading"]),
      concept("tone-style-figurative", "语气、风格与修辞", "Tone, Style & Figurative Language", ALL, ["reading"])
    ]
  },
  {
    id: "quantitative-reasoning",
    zh: "数量推理",
    en: "Quantitative Reasoning",
    concepts: [
      concept("quantitative-comparisons", "数量比较", "Quantitative Comparisons", MID_UP, ["quantitative"]),
      concept("word-problem-reasoning", "应用题推理策略", "Word-Problem Reasoning", ALL, MATH_SECTIONS),
      concept("estimation-number-sense", "估算与数感", "Estimation & Number Sense", ALL, MATH_SECTIONS)
    ]
  },
  {
    id: "numbers-operations",
    zh: "数与运算",
    en: "Numbers & Operations",
    concepts: [
      concept("integers-order-operations", "整数、有理数与运算顺序", "Integers, Rational Numbers & Order of Operations", ALL, MATH_SECTIONS),
      concept("fractions-decimals", "分数与小数", "Fractions & Decimals", ALL, MATH_SECTIONS),
      concept("ratios-percents", "比、比例与百分数", "Ratios, Proportions & Percents", ALL, MATH_SECTIONS),
      concept("exponents-roots", "指数、平方根与科学记数法", "Exponents, Roots & Scientific Notation", ALL, MATH_SECTIONS),
      concept("factors-multiples-primes", "因数、倍数与质数", "Factors, Multiples & Primes", ALL, MATH_SECTIONS)
    ]
  },
  {
    id: "algebraic-concepts",
    zh: "代数概念",
    en: "Algebraic Concepts",
    concepts: [
      concept("expressions-equations", "代数式与方程", "Expressions & Equations", ALL, MATH_SECTIONS),
      concept("inequalities-absolute-value", "不等式与绝对值", "Inequalities & Absolute Value", MID_UP, MATH_SECTIONS),
      concept("patterns-sequences-functions", "规律、数列与函数", "Patterns, Sequences & Functions", ALL, MATH_SECTIONS),
      concept("linear-quadratic", "一次函数、方程组与二次式", "Linear Equations, Systems & Quadratics", MID_UP, MATH_SECTIONS)
    ]
  },
  {
    id: "geometry",
    zh: "几何",
    en: "Geometry",
    concepts: [
      concept("angles-lines-triangles", "角、平行线与三角形", "Angles, Lines & Triangles", ALL, MATH_SECTIONS),
      concept("polygons-circles", "多边形与圆", "Polygons & Circles", ALL, MATH_SECTIONS),
      concept("pythagorean-similarity", "勾股定理与相似", "Pythagorean Theorem & Similarity", MID_UP, MATH_SECTIONS),
      concept("coordinate-transformations", "坐标平面与图形变换", "Coordinate Plane & Transformations", ALL, MATH_SECTIONS)
    ]
  },
  {
    id: "measurement",
    zh: "测量",
    en: "Measurement",
    concepts: [
      concept("perimeter-area", "周长与面积", "Perimeter & Area", ALL, MATH_SECTIONS),
      concept("volume-surface-area", "体积与表面积", "Volume & Surface Area", ALL, MATH_SECTIONS),
      concept("units-rates-time", "单位换算、速率与时间", "Units, Rates & Time", ALL, MATH_SECTIONS)
    ]
  },
  {
    id: "data-probability",
    zh: "数据分析与概率",
    en: "Data Analysis & Probability",
    concepts: [
      concept("mean-median-mode", "平均数、中位数、众数与极差", "Mean, Median, Mode & Range", ALL, MATH_SECTIONS),
      concept("graphs-tables", "图表与数据解读", "Graphs, Tables & Data Interpretation", ALL, MATH_SECTIONS),
      concept("probability-counting", "概率与计数", "Probability & Counting", ALL, MATH_SECTIONS)
    ]
  },
  {
    id: "essay",
    zh: "作文",
    en: "Essay",
    concepts: [
      concept("essay-planning", "审题与规划", "Understanding the Prompt & Planning", ALL, ["essay"], false),
      concept("essay-development", "展开与论证", "Developing Ideas & Examples", ALL, ["essay"], false),
      concept("essay-revision", "语言、修改与时间管理", "Language, Revision & Time Management", ALL, ["essay"], false)
    ]
  }
];

export const TAXONOMY_CONCEPTS = TOPIC_TAXONOMY.flatMap((topic) =>
  topic.concepts.map((entry) => ({ ...entry, topicId: topic.id, topicZh: topic.zh, topicEn: topic.en }))
);

export const CONCEPT_TAXONOMY_BY_ID = new Map(TAXONOMY_CONCEPTS.map((entry) => [entry.id, entry]));
export const LEVEL_BY_ID = new Map(LEVELS.map((entry) => [entry.id, entry]));
export const SECTION_BY_ID = new Map(SECTIONS.map((entry) => [entry.id, entry]));
export const TYPE_BY_ID = new Map(PROBLEM_TYPES.map((entry) => [entry.id, entry]));
export const DIFFICULTY_BY_ID = new Map(DIFFICULTIES.map((entry) => [entry.id, entry]));
export const STRAND_BY_ID = new Map(RC_STRANDS.map((entry) => [entry.id, entry]));
export const GENRE_BY_ID = new Map(PASSAGE_GENRES.map((entry) => [entry.id, entry]));
