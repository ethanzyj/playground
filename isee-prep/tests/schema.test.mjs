import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validateProblem,
  validateGlossaryEntry,
  validateFigure,
  validatePassage,
  validateEssayPrompt,
  validateConcept,
  checkText
} from "./lib/schema.mjs";

const synonym = {
  id: "vr-syn-m00", level: "middle", section: "verbal", type: "synonym", difficulty: "medium",
  conceptIds: ["synonyms", "vocabulary-building"],
  stem: "MEAGER",
  choices: ["abundant", "ample", "scanty", "vivid"],
  answer: 2,
  glosses: [["meager", "贫乏的"], ["abundant", "丰富的"], ["ample", "充足的"], ["scanty", "不足的"], ["vivid", "生动的"]],
  explanationEn: "Meager means too small in amount, so scanty is the closest match. Abundant and ample mean plentiful.",
  explanationZh: "meager 的意思是“数量少得可怜”，所以最接近的是 scanty。abundant 和 ample 都表示充足，意思相反。"
};

const sentence = {
  id: "vr-sc-u00", level: "upper", section: "verbal", type: "sentence-completion", difficulty: "medium",
  conceptIds: ["sentence-completion"],
  stem: "Visitors praise the museum for its _____ exhibits and often leave _____ reviews online.",
  choices: ["cramped . . . scathing", "engaging . . . glowing", "outdated . . . admiring", "tedious . . . lukewarm"], answer: 1,
  glosses: [["cramped", "狭小的"], ["scathing", "严厉的"], ["engaging", "引人入胜的"], ["glowing", "热情的"], ["outdated", "过时的"], ["admiring", "钦佩的"], ["tedious", "乏味的"], ["lukewarm", "冷淡的"]],
  explanationEn: "Praise tells us both blanks must be positive and make sense together. Only engaging . . . glowing fits.",
  explanationZh: "praise 说明两个空都应是正面含义且彼此搭配，只有 engaging . . . glowing 符合题意。"
};

const comparison = {
  id: "qr-qc-m00", level: "middle", section: "quantitative", type: "quantitative-comparison", difficulty: "medium",
  conceptIds: ["quantitative-comparisons", "fractions-decimals"],
  stem: "", quantityA: String.raw`\(\frac{3}{8}\)`, quantityB: String.raw`\(0.4\)`, answer: 1,
  explanationEn: String.raw`Convert to decimals: \(\frac{3}{8}=0.375\), which is less than \(0.4\), so Column B is greater.`,
  explanationZh: String.raw`化成小数：\(\frac{3}{8}=0.375\)，小于 \(0.4\)，所以 B 列更大。`
};

const wordProblem = {
  id: "qr-wp-l00", level: "lower", section: "quantitative", type: "word-problem", difficulty: "easy",
  conceptIds: ["graphs-tables", "word-problem-reasoning"],
  stem: "A pen costs $4.50 and a pad costs $2.25. What is the total cost of both items?",
  stemZh: "一支笔 4.50 美元，一本便签本 2.25 美元，两样一共多少钱？",
  choices: ["$5.75", "$6.25", "$6.75", "$7.25"], answer: 2,
  explanationEn: "Add the two prices: 4.50 + 2.25 = 6.75, so the total is $6.75.",
  explanationZh: "把两个价格相加：4.50 + 2.25 = 6.75，所以总价是 6.75 美元。"
};

const bad = (problem, pattern, context) => {
  const errors = validateProblem(problem, context);
  assert.ok(errors.some((error) => pattern.test(error)), `expected ${pattern} in ${JSON.stringify(errors)}`);
};

test("valid problems of every verbal/quantitative type pass", () => {
  for (const problem of [synonym, sentence, comparison, wordProblem]) assert.deepEqual(validateProblem(problem), [], problem.id);
});

test("answer keys, levels and concept applicability are enforced", () => {
  bad({ ...wordProblem, answer: 4 }, /answer/);
  bad({ ...comparison, level: "lower" }, /no quantitative comparisons/);
  bad({ ...wordProblem, conceptIds: ["inequalities-absolute-value"] }, /does not apply to the lower level/);
  bad({ ...wordProblem, conceptIds: ["synonyms"] }, /not tested in section/);
  bad({ ...wordProblem, choices: ["5", "5", "7", "19"] }, /distinct/);
  bad({ ...wordProblem, stemZh: undefined }, /stemZh/);
});

test("verbal items follow the real test conventions", () => {
  bad({ ...synonym, choices: ["scanty", "abundant", "ample", "vivid"] }, /alphabetically/);
  bad({ ...synonym, stem: "Meager" }, /UPPERCASE/);
  bad({ ...synonym, glosses: synonym.glosses.slice(0, 4) }, /glosses/);
  bad({ ...sentence, choices: ["apathetic", "cautious", "ecstatic", "skeptical"] }, /word \. \. \. word/);
  bad({ ...sentence, stem: "Only one _____ here but _____ and _____." }, /one or two blanks/);
  bad({ ...sentence, glosses: sentence.glosses.slice(1) }, /missing a gloss/);
});

test("text rules catch the classic authoring mistakes", () => {
  const errors = [];
  checkText(errors, "a", "\frac{1}{2} is broken", { lang: "en" });
  checkText(errors, "b", String.raw`Half is \frac{1}{2} without delimiters`, { lang: "en" });
  checkText(errors, "c", String.raw`Unbalanced \(x+1 math`, { lang: "en" });
  checkText(errors, "d", "Costs $x$ dollars", { lang: "en" });
  checkText(errors, "e", "No Chinese here 你好", { lang: "en" });
  checkText(errors, "f", "没有汉字 is mixed", { lang: "en" });
  checkText(errors, "g", "only English", { lang: "zh" });
  checkText(errors, "h", "Use <b>bold</b> tags", { lang: "en" });
  checkText(errors, "i", "TODO fix this later please", { lang: "en" });
  const labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  for (const label of labels) assert.ok(errors.some((error) => error.startsWith(`${label}:`)), `${label} should be flagged: ${errors.join(" | ")}`);
  const ok = [];
  checkText(ok, "ok", "Costs $4.50 and \\(x<5\\) holds, 比 ratio", { lang: "any" });
  assert.deepEqual(ok, []);
});

test("figures: unsafe svg and malformed data are rejected", () => {
  const base = { altEn: "A figure described in enough words.", altZh: "一个用足够文字描述的图形。" };
  assert.deepEqual(validateFigure({ ...base, kind: "svg", svg: '<svg viewBox="0 0 100 80"><circle cx="5" cy="5" r="2"/></svg>' }, "f"), []);
  assert.ok(validateFigure({ ...base, kind: "svg", svg: '<svg viewBox="0 0 10 10"><script>x()</script></svg>' }, "f").length);
  assert.ok(validateFigure({ ...base, kind: "svg", svg: '<svg viewBox="0 0 10 10" onload="x()"></svg>' }, "f").length);
  assert.ok(validateFigure({ ...base, kind: "svg", svg: '<svg width="10" viewBox="0 0 10 10"></svg>' }, "f").length);
  assert.ok(validateFigure({ ...base, kind: "bar", labels: ["a", "b"], series: [{ values: [1] }] }, "f").length);
  assert.ok(validateFigure({ ...base, kind: "table", headers: ["a", "b"], rows: [["1"]] }, "f").length);
  assert.ok(validateFigure({ ...base, kind: "pie", slices: [{ label: "a", value: 0 }, { label: "b", value: 1 }] }, "f").length);
  assert.ok(validateFigure({ ...base, kind: "radar" }, "f").length);
  assert.deepEqual(validateFigure({ ...base, kind: "pie", slices: [{ label: "a", value: 60 }, { label: "b", value: 40 }] }, "f"), []);
});

test("glossary entries: vocabulary needs part of speech, level and an example using the word", () => {
  const vocab = {
    kind: "vocab", level: "middle", categoryEn: "Character & Personality", categoryZh: "品格与性格",
    en: "meticulous", zh: "一丝不苟的", pos: "adj.",
    noteEn: "Showing great attention to detail; very careful and precise.", noteZh: "对细节非常用心。",
    exampleEn: "The meticulous editor caught every typo.", exampleZh: "那位编辑一丝不苟。",
    synonyms: ["careful", "thorough"], conceptIds: ["synonyms", "vocabulary-building"]
  };
  assert.deepEqual(validateGlossaryEntry(vocab), []);
  assert.ok(validateGlossaryEntry({ ...vocab, pos: "adjective" }).length);
  assert.ok(validateGlossaryEntry({ ...vocab, level: "high" }).length);
  assert.ok(validateGlossaryEntry({ ...vocab, exampleEn: "The editor caught every typo." }).length);
  assert.ok(validateGlossaryEntry({ ...vocab, conceptIds: ["not-a-concept"] }).length);
  assert.ok(validateGlossaryEntry({ ...vocab, en: "Meticulous" }).length);
  const math = { kind: "math", categoryEn: "Number & Operations", categoryZh: "数与运算", en: "Numerator", zh: "分子", noteEn: "The top number of a fraction; it counts the parts.", noteZh: "分数线上方的数。", conceptIds: ["fractions-decimals"] };
  assert.deepEqual(validateGlossaryEntry(math), []);
  assert.ok(validateGlossaryEntry({ ...math, level: "middle" }).length);
});

test("passages and essay prompts enforce their shapes", () => {
  const words = (count) => Array(count).fill("word").join(" ");
  const passage = { id: "rc-m1", level: "middle", genre: "expository", titleEn: "Quiet Bees", titleZh: "安静的蜜蜂", paragraphs: [words(90), words(90), words(90)], paragraphsZh: ["段落一".repeat(12), "段落二".repeat(12), "段落三".repeat(12)] };
  assert.deepEqual(validatePassage(passage), []);
  assert.ok(validatePassage({ ...passage, paragraphs: [words(20), words(20), words(20)] }).some((error) => /words/.test(error)));
  assert.ok(validatePassage({ ...passage, id: "rc-u1" }).length);
  assert.ok(validatePassage({ ...passage, paragraphsZh: ["段落一".repeat(12)] }).length);
  const prompt = { id: "es-m1", level: "middle", promptEn: "Describe a place where you feel most comfortable, and explain why.", promptZh: "描述一个让你感觉最自在的地方，并解释原因。", ideasEn: ["Name the place", "Use two senses", "Say what you do"], ideasZh: ["点明地点", "用两种感官", "说说你做什么"] };
  assert.deepEqual(validateEssayPrompt(prompt), []);
  assert.ok(validateEssayPrompt({ ...prompt, ideasZh: ["点明地点"] }).length);
  assert.ok(validateEssayPrompt({ ...prompt, id: "es-u1" }).length);
});

test("concept validation requires taxonomy-matching names and a step-by-step key point", () => {
  const point = {
    titleEn: "Percent of a number", titleZh: "求一个数的百分之几", formula: String.raw`\text{part}=\frac{p}{100}\times\text{whole}`,
    explanationEn: "To find p percent of a number, convert p percent to a fraction out of 100 and multiply it by the whole.",
    explanationZh: "求某数的 p%，先把 p% 写成分母为 100 的分数，再与整体相乘。",
    stepsEn: ["Write 15% as 15/100.", "Multiply by the whole: 15/100 × 80."], stepsZh: ["把 15% 写成 15/100。", "与整体相乘：15/100 × 80。"],
    exampleEn: String.raw`\(25\%\) of \(60\) is \(15\).`, exampleZh: String.raw`\(60\) 的 \(25\%\) 是 \(15\)。`
  };
  const concept = {
    id: "ratios-percents", zh: "比、比例与百分数", en: "Ratios, Proportions & Percents",
    detailEn: "Ratios, rates, proportions, percent of a number, percent change.", detailZh: "比、比率、比例，求一个数的百分之几，百分数的增减。",
    explanationEn: "A ratio compares two quantities by division. A proportion says two ratios are equal, and a percent is a ratio out of 100. Most problems reduce to setting up the right equivalent ratio.",
    explanationZh: "比是用除法比较两个量；比例表示两个比相等；百分数是分母为 100 的比。大多数题目本质上都是列出正确的等比关系。",
    keyPoints: [point, { ...point, titleEn: "Second point", stepsEn: undefined, stepsZh: undefined }, { ...point, titleEn: "Third point", stepsEn: undefined, stepsZh: undefined }],
    methodsEn: ["Convert percents to fractions first", "Set up a proportion", "Use ten percent as a building block"], methodsZh: ["先把百分数化成分数", "列出比例并交叉相乘", "用百分之十作为心算基础"],
    exampleEn: String.raw`A recipe uses \(2\) cups of flour for \(3\) cups of water; for \(9\) cups of water it needs \(6\) cups.`, exampleZh: String.raw`配方中 \(2\) 杯面粉对应 \(3\) 杯水；用 \(9\) 杯水需要 \(6\) 杯面粉。`,
    checklistEn: ["Convert between fractions and percents", "Solve a proportion", "Find a percent change"], checklistZh: ["能在分数与百分数之间互化", "能解比例", "能计算百分数的增减"]
  };
  assert.deepEqual(validateConcept(concept, "numbers-operations"), []);
  assert.ok(validateConcept({ ...concept, en: "Ratios" }, "numbers-operations").length);
  assert.ok(validateConcept(concept, "geometry").length);
  assert.ok(validateConcept({ ...concept, keyPoints: concept.keyPoints.map((entry) => ({ ...entry, stepsEn: undefined, stepsZh: undefined })) }, "numbers-operations").some((error) => /step-by-step/.test(error)));
  assert.ok(validateConcept({ ...concept, keyPoints: concept.keyPoints.map((entry) => ({ ...entry, formula: undefined })) }, "numbers-operations").some((error) => /TeX formula/.test(error)));
});
