// Shared content validators. Each validate* function returns an array of error
// strings (empty when the value is valid) so authors can fix everything at once.

import {
  LEVEL_BY_ID,
  SECTION_BY_ID,
  TYPE_BY_ID,
  DIFFICULTY_BY_ID,
  STRAND_BY_ID,
  CONCEPT_TAXONOMY_BY_ID,
  TOPIC_TAXONOMY,
  PROBLEM_SECTIONS,
  GLOSSARY_KINDS,
  QC_CHOICES
} from "../../assets/taxonomy.mjs";

const CJK = /[\u3400-\u9fff]/;
// eslint-disable-next-line no-control-regex -- deliberately detects stray control characters
const CONTROL = /[\u0000-\u001f]/;
const PLACEHOLDER = /\b(TODO|TBD|FIXME|lorem ipsum)\b|\bXXX\b/i;
const MATH_SEGMENT = /\\\([\s\S]*?\\\)/g;
const BLANK = /_{3,}/g;
const POS = /^(n|v|adj|adv|prep|conj)\.(\/(n|v|adj|adv)\.)*$/;
const WORD = /^[a-z]+(?:[-'][a-z]+)*$/;
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const hasCjk = (value) => CJK.test(value);
export const wordCount = (value) => value.trim().split(/\s+/).filter(Boolean).length;

export function stripMath(text) {
  return text.replace(MATH_SEGMENT, " ");
}

function isString(value) {
  return typeof value === "string";
}

// Validates one content string. `lang` is "en" (no CJK), "zh" (needs CJK) or "any".
export function checkText(errors, label, value, { lang = "any", min = 1, max = 4000, tex = true } = {}) {
  if (!isString(value)) {
    errors.push(`${label}: must be a string.`);
    return;
  }
  if (value.trim() !== value) errors.push(`${label}: has leading or trailing whitespace.`);
  if (value.length < min) errors.push(`${label}: too short (${value.length} < ${min} characters).`);
  if (value.length > max) errors.push(`${label}: too long (${value.length} > ${max} characters).`);
  if (CONTROL.test(value)) {
    errors.push(`${label}: contains a control character (usually a TeX backslash such as \\frac, \\times or \\neq inside a normal string; use String.raw).`);
  }
  if (PLACEHOLDER.test(value)) errors.push(`${label}: contains a placeholder.`);
  if (lang === "en" && CJK.test(value)) errors.push(`${label}: English text must not contain Chinese characters.`);
  if (lang === "zh" && !CJK.test(value)) errors.push(`${label}: Chinese text must contain Chinese characters.`);
  if (!tex) return;
  const opens = (value.match(/\\\(/g) || []).length;
  const closes = (value.match(/\\\)/g) || []).length;
  if (opens !== closes) errors.push(`${label}: unbalanced \\( \\) math delimiters.`);
  if (/\\\[|\\\]|\$\$/.test(value)) errors.push(`${label}: use only \\( ... \\) inline math.`);
  const outside = stripMath(value);
  // A dollar sign is only allowed as currency: "$4.50" in text or "\$4.50" inside math.
  if (/\$(?!\d)/.test(value.replace(/\\\$/g, ""))) errors.push(`${label}: do not use $ as a math delimiter (currency like $4.50 is fine).`);
  if (/\\[a-zA-Z]+|\^|_\{/.test(outside)) errors.push(`${label}: TeX appears outside \\( \\) delimiters.`);
  if (/<\/?[a-zA-Z!]|&[a-zA-Z#0-9]+;/.test(outside)) errors.push(`${label}: raw HTML tags or entities are not allowed; write plain text (HTML characters are escaped by the app).`);
  for (const segment of value.match(MATH_SEGMENT) || []) {
    if (segment.length <= 4) errors.push(`${label}: empty math segment.`);
  }
}

// `count` is the allowed number of items; every other option applies to each item's text.
function checkList(errors, label, value, { count = [1, 99], ...textOptions } = {}) {
  if (!Array.isArray(value)) {
    errors.push(`${label}: must be an array.`);
    return false;
  }
  const [minCount, maxCount] = count;
  if (value.length < minCount || value.length > maxCount) errors.push(`${label}: needs ${minCount}-${maxCount} items (has ${value.length}).`);
  value.forEach((item, index) => checkText(errors, `${label}[${index}]`, item, textOptions));
  return true;
}

function checkPair(errors, label, enValue, zhValue, enOptions = {}, zhOptions = {}) {
  checkText(errors, `${label}En`, enValue, { lang: "en", ...enOptions });
  checkText(errors, `${label}Zh`, zhValue, { lang: "zh", ...zhOptions });
}

// ---------------------------------------------------------------------------
// Study-guide topics and concepts
// ---------------------------------------------------------------------------

const FORMULA_TOPICS = new Set(["numbers-operations", "algebraic-concepts", "geometry", "measurement", "data-probability"]);

export function validateKeyPoint(point, label) {
  const errors = [];
  if (!point || typeof point !== "object") return [`${label}: must be an object.`];
  checkPair(errors, `${label}.title`, point.titleEn, point.titleZh, { min: 3, max: 90 }, { min: 2, max: 60 });
  checkPair(errors, `${label}.explanation`, point.explanationEn, point.explanationZh, { min: 60, max: 1500 }, { min: 25, max: 900 });
  checkPair(errors, `${label}.example`, point.exampleEn, point.exampleZh, { min: 15, max: 900 }, { min: 8, max: 600 });
  if (point.formula !== undefined) {
    if (!isString(point.formula) || !point.formula.trim()) errors.push(`${label}.formula: must be a non-empty TeX string without \\( \\) delimiters.`);
    else {
      if (/\\\(|\\\)|\$/.test(point.formula.replace(/\\\$/g, ""))) errors.push(`${label}.formula: omit \\( \\) and $ delimiters; the app adds them.`);
      if (CONTROL.test(point.formula)) errors.push(`${label}.formula: contains a control character (use String.raw).`);
      if (CJK.test(point.formula)) errors.push(`${label}.formula: keep Chinese out of formulas (use \\text{} with English only).`);
    }
  }
  if (point.stepsEn !== undefined || point.stepsZh !== undefined) {
    checkList(errors, `${label}.stepsEn`, point.stepsEn, { count: [2, 8], lang: "en", min: 10, max: 500 });
    checkList(errors, `${label}.stepsZh`, point.stepsZh, { count: [2, 8], lang: "zh", min: 5, max: 400 });
    if (Array.isArray(point.stepsEn) && Array.isArray(point.stepsZh) && point.stepsEn.length !== point.stepsZh.length) {
      errors.push(`${label}: stepsEn and stepsZh must have the same length.`);
    }
  }
  return errors;
}

export function validateConcept(concept, topicId) {
  const errors = [];
  const id = concept?.id;
  const label = `concept ${id ?? "(missing id)"}`;
  if (!concept || typeof concept !== "object") return ["concept: must be an object."];
  const tax = CONCEPT_TAXONOMY_BY_ID.get(id);
  if (!tax) return [`${label}: id is not in assets/taxonomy.mjs.`];
  if (tax.topicId !== topicId) errors.push(`${label}: belongs to topic ${tax.topicId}, not ${topicId}.`);
  if (concept.zh !== tax.zh) errors.push(`${label}: zh must be exactly "${tax.zh}".`);
  if (concept.en !== tax.en) errors.push(`${label}: en must be exactly "${tax.en}".`);
  checkPair(errors, `${label}.detail`, concept.detailEn, concept.detailZh, { min: 25, max: 300 }, { min: 10, max: 200 });
  checkPair(errors, `${label}.explanation`, concept.explanationEn, concept.explanationZh, { min: 120, max: 1400 }, { min: 50, max: 900 });
  if (!Array.isArray(concept.keyPoints) || concept.keyPoints.length < 3 || concept.keyPoints.length > 7) {
    errors.push(`${label}.keyPoints: needs 3-7 key points.`);
  } else {
    concept.keyPoints.forEach((point, index) => errors.push(...validateKeyPoint(point, `${label}.keyPoints[${index}]`)));
    if (!concept.keyPoints.some((point) => Array.isArray(point.stepsEn))) {
      errors.push(`${label}.keyPoints: at least one key point needs stepsEn/stepsZh (step-by-step).`);
    }
    if (FORMULA_TOPICS.has(tax.topicId) && !concept.keyPoints.some((point) => isString(point.formula))) {
      errors.push(`${label}.keyPoints: a math concept needs at least one key point with a TeX formula.`);
    }
  }
  checkList(errors, `${label}.methodsEn`, concept.methodsEn, { count: [3, 8], lang: "en", min: 8, max: 260 });
  checkList(errors, `${label}.methodsZh`, concept.methodsZh, { count: [3, 8], lang: "zh", min: 4, max: 180 });
  checkList(errors, `${label}.checklistEn`, concept.checklistEn, { count: [3, 8], lang: "en", min: 8, max: 220 });
  checkList(errors, `${label}.checklistZh`, concept.checklistZh, { count: [3, 8], lang: "zh", min: 4, max: 150 });
  if (Array.isArray(concept.methodsEn) && Array.isArray(concept.methodsZh) && concept.methodsEn.length !== concept.methodsZh.length) {
    errors.push(`${label}: methodsEn and methodsZh must have the same length.`);
  }
  if (Array.isArray(concept.checklistEn) && Array.isArray(concept.checklistZh) && concept.checklistEn.length !== concept.checklistZh.length) {
    errors.push(`${label}: checklistEn and checklistZh must have the same length.`);
  }
  checkPair(errors, `${label}.example`, concept.exampleEn, concept.exampleZh, { min: 30, max: 900 }, { min: 15, max: 600 });
  return errors;
}

export function validateTopic(topic) {
  const errors = [];
  if (!topic || typeof topic !== "object") return ["topic: must be an object."];
  const tax = TOPIC_TAXONOMY.find((entry) => entry.id === topic.id);
  if (!tax) return [`topic ${topic.id}: id is not in assets/taxonomy.mjs.`];
  if (topic.zh !== tax.zh) errors.push(`topic ${topic.id}: zh must be exactly "${tax.zh}".`);
  if (topic.en !== tax.en) errors.push(`topic ${topic.id}: en must be exactly "${tax.en}".`);
  checkPair(errors, `topic ${topic.id}.officialAlignment`, topic.officialAlignment, topic.officialAlignmentZh, { min: 20, max: 220 }, { min: 8, max: 160 });
  if (!Array.isArray(topic.concepts)) {
    errors.push(`topic ${topic.id}: concepts must be an array.`);
    return errors;
  }
  const seen = new Set();
  for (const concept of topic.concepts) {
    errors.push(...validateConcept(concept, topic.id));
    if (seen.has(concept?.id)) errors.push(`topic ${topic.id}: duplicate concept ${concept?.id}.`);
    seen.add(concept?.id);
  }
  for (const expected of tax.concepts) {
    if (!seen.has(expected.id)) errors.push(`topic ${topic.id}: missing concept ${expected.id}.`);
  }
  for (const id of seen) {
    if (!tax.concepts.some((entry) => entry.id === id)) errors.push(`topic ${topic.id}: unexpected concept ${id}.`);
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Glossary
// ---------------------------------------------------------------------------

export function validateGlossaryEntry(entry) {
  const errors = [];
  const label = `glossary "${entry?.en ?? "(missing en)"}"`;
  if (!entry || typeof entry !== "object") return ["glossary entry: must be an object."];
  const kind = GLOSSARY_KINDS.find((item) => item.id === entry.kind);
  if (!kind) errors.push(`${label}: kind must be one of ${GLOSSARY_KINDS.map((item) => item.id).join(", ")}.`);
  checkPair(errors, `${label}.category`, entry.categoryEn, entry.categoryZh, { min: 3, max: 60 }, { min: 2, max: 30 });
  checkText(errors, `${label}.en`, entry.en, { lang: "en", min: 2, max: 60, tex: false });
  checkText(errors, `${label}.zh`, entry.zh, { lang: "zh", min: 1, max: 40, tex: false });
  checkPair(errors, `${label}.note`, entry.noteEn, entry.noteZh, { min: 20, max: 420 }, { min: 8, max: 300 });
  if (!Array.isArray(entry.conceptIds) || entry.conceptIds.length < 1 || entry.conceptIds.length > 5) {
    errors.push(`${label}.conceptIds: needs 1-5 concept ids.`);
  } else {
    for (const id of entry.conceptIds) {
      if (!CONCEPT_TAXONOMY_BY_ID.has(id)) errors.push(`${label}.conceptIds: unknown concept ${id}.`);
    }
    if (new Set(entry.conceptIds).size !== entry.conceptIds.length) errors.push(`${label}.conceptIds: duplicates.`);
  }
  if (entry.kind === "vocab") {
    if (!WORD.test(entry.en ?? "")) errors.push(`${label}.en: vocabulary words must be lowercase letters (hyphens allowed).`);
    if (!LEVEL_BY_ID.has(entry.level)) errors.push(`${label}.level: must be lower, middle or upper.`);
    if (!POS.test(entry.pos ?? "")) errors.push(`${label}.pos: use n., v., adj., adv., prep., conj. (join with "/" for several).`);
    checkPair(errors, `${label}.example`, entry.exampleEn, entry.exampleZh, { min: 15, max: 240 }, { min: 6, max: 160 });
    if (isString(entry.exampleEn) && WORD.test(entry.en ?? "")) {
      const stem = entry.en.slice(0, Math.max(4, entry.en.length - 3)).toLowerCase();
      if (!entry.exampleEn.toLowerCase().includes(stem)) errors.push(`${label}.exampleEn: must use the word (or an inflected form).`);
    }
    if (entry.synonyms !== undefined) {
      if (!Array.isArray(entry.synonyms) || entry.synonyms.length > 6) errors.push(`${label}.synonyms: array of up to 6 lowercase English words.`);
      else entry.synonyms.forEach((word) => { if (!isString(word) || !/^[a-z]+(?:[ -][a-z]+)*$/.test(word)) errors.push(`${label}.synonyms: "${word}" must be lowercase English.`); });
    }
  } else if (entry.kind === "math" || entry.kind === "literary") {
    if (entry.pos !== undefined || entry.level !== undefined) errors.push(`${label}: pos/level are only for vocabulary entries.`);
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Figures
// ---------------------------------------------------------------------------

export const FIGURE_KINDS = ["svg", "table", "bar", "line", "pie"];

export function validateFigure(figure, label) {
  const errors = [];
  if (!figure || typeof figure !== "object") return [`${label}: must be an object.`];
  if (!FIGURE_KINDS.includes(figure.kind)) return [`${label}.kind: must be one of ${FIGURE_KINDS.join(", ")}.`];
  checkPair(errors, `${label}.alt`, figure.altEn, figure.altZh, { min: 15, max: 400 }, { min: 6, max: 260 });
  if (figure.captionEn !== undefined) checkText(errors, `${label}.captionEn`, figure.captionEn, { lang: "en", max: 160 });
  if (figure.captionZh !== undefined) checkText(errors, `${label}.captionZh`, figure.captionZh, { lang: "zh", max: 100 });
  if (figure.kind === "svg") {
    const svg = figure.svg;
    if (!isString(svg) || !svg.trim().startsWith("<svg") || !svg.trim().endsWith("</svg>")) errors.push(`${label}.svg: must be one <svg>...</svg> element.`);
    else {
      if (!/viewBox="0 0 \d+(\.\d+)? \d+(\.\d+)?"/.test(svg)) errors.push(`${label}.svg: needs viewBox="0 0 W H".`);
      if (/<script|<foreignObject|<image|<iframe|<use\b|\son[a-z]+\s*=|href\s*=|xlink:|javascript:|url\(/i.test(svg)) errors.push(`${label}.svg: contains a forbidden element or attribute.`);
      if (svg.length > 14000) errors.push(`${label}.svg: too large (${svg.length} > 14000).`);
      if (CJK.test(svg)) errors.push(`${label}.svg: figure labels must be English or symbols only.`);
      if (/\swidth\s*=|\sheight\s*=/.test(svg.slice(0, svg.indexOf(">")))) errors.push(`${label}.svg: omit width/height on <svg>; the page sizes it from the viewBox.`);
    }
  } else if (figure.kind === "table") {
    if (!Array.isArray(figure.headers) || figure.headers.length < 2) errors.push(`${label}.headers: needs at least 2 column headers.`);
    else figure.headers.forEach((cell, index) => checkText(errors, `${label}.headers[${index}]`, cell, { lang: "en", max: 60 }));
    if (!Array.isArray(figure.rows) || figure.rows.length < 1 || figure.rows.length > 14) errors.push(`${label}.rows: needs 1-14 rows.`);
    else {
      figure.rows.forEach((row, rowIndex) => {
        if (!Array.isArray(row) || row.length !== figure.headers?.length) errors.push(`${label}.rows[${rowIndex}]: must have one cell per header.`);
        else row.forEach((cell, cellIndex) => checkText(errors, `${label}.rows[${rowIndex}][${cellIndex}]`, String(cell), { lang: "en", max: 80 }));
      });
    }
  } else if (figure.kind === "bar" || figure.kind === "line") {
    if (!Array.isArray(figure.labels) || figure.labels.length < 2 || figure.labels.length > 12) errors.push(`${label}.labels: needs 2-12 labels.`);
    else figure.labels.forEach((cell, index) => checkText(errors, `${label}.labels[${index}]`, String(cell), { lang: "en", max: 30 }));
    if (!Array.isArray(figure.series) || figure.series.length < 1 || figure.series.length > 3) errors.push(`${label}.series: needs 1-3 series.`);
    else {
      figure.series.forEach((series, index) => {
        if (!Array.isArray(series.values) || series.values.length !== figure.labels?.length || series.values.some((value) => !Number.isFinite(value) || value < 0)) {
          errors.push(`${label}.series[${index}].values: needs one non-negative number per label.`);
        }
        if (figure.series.length > 1) checkText(errors, `${label}.series[${index}].nameEn`, series.nameEn, { lang: "en", max: 30 });
      });
    }
    for (const key of ["titleEn", "xLabelEn", "yLabelEn"]) {
      if (figure[key] !== undefined) checkText(errors, `${label}.${key}`, figure[key], { lang: "en", max: 80 });
    }
  } else if (figure.kind === "pie") {
    if (!Array.isArray(figure.slices) || figure.slices.length < 2 || figure.slices.length > 8) errors.push(`${label}.slices: needs 2-8 slices.`);
    else {
      figure.slices.forEach((slice, index) => {
        checkText(errors, `${label}.slices[${index}].label`, slice?.label, { lang: "en", max: 30 });
        if (!Number.isFinite(slice?.value) || slice.value <= 0) errors.push(`${label}.slices[${index}].value: must be a positive number.`);
      });
    }
    if (figure.titleEn !== undefined) checkText(errors, `${label}.titleEn`, figure.titleEn, { lang: "en", max: 80 });
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Reading passages and problems
// ---------------------------------------------------------------------------

export const PASSAGE_GENRES = ["narrative", "expository", "persuasive", "descriptive"];
const WORD_RANGE = { lower: [190, 400], middle: [250, 480], upper: [300, 560] };

export function validatePassage(passage) {
  const errors = [];
  const label = `passage ${passage?.id ?? "(missing id)"}`;
  if (!passage || typeof passage !== "object") return ["passage: must be an object."];
  if (!/^rc-[lmu]\d+$/.test(passage.id ?? "")) errors.push(`${label}: id must look like rc-l1, rc-m2 or rc-u3.`);
  if (!LEVEL_BY_ID.has(passage.level)) errors.push(`${label}: invalid level.`);
  else if (passage.id && passage.id[3] !== passage.level[0]) errors.push(`${label}: id letter must match the level (l/m/u).`);
  if (!PASSAGE_GENRES.includes(passage.genre)) errors.push(`${label}: genre must be one of ${PASSAGE_GENRES.join(", ")}.`);
  checkPair(errors, `${label}.title`, passage.titleEn, passage.titleZh, { min: 4, max: 90 }, { min: 2, max: 50 });
  if (passage.topicEn !== undefined) checkText(errors, `${label}.topicEn`, passage.topicEn, { lang: "en", max: 60 });
  const okEn = checkList(errors, `${label}.paragraphs`, passage.paragraphs, { count: [3, 9], lang: "en", min: 60, max: 1800, tex: false });
  const okZh = checkList(errors, `${label}.paragraphsZh`, passage.paragraphsZh, { count: [3, 9], lang: "zh", min: 30, max: 1400, tex: false });
  if (okEn && okZh && passage.paragraphs.length !== passage.paragraphsZh.length) errors.push(`${label}: paragraphs and paragraphsZh must have the same length.`);
  if (okEn && LEVEL_BY_ID.has(passage.level)) {
    const words = passage.paragraphs.reduce((sum, paragraph) => sum + wordCount(paragraph), 0);
    const [low, high] = WORD_RANGE[passage.level];
    if (words < low || words > high) errors.push(`${label}: ${words} words is outside the ${passage.level} range ${low}-${high}.`);
  }
  return errors;
}

const SEPARATOR = " . . . ";

function validateGlosses(errors, label, problem) {
  const { glosses } = problem;
  if (glosses === undefined) return;
  if (!Array.isArray(glosses) || glosses.length < 1 || glosses.length > 12) {
    errors.push(`${label}.glosses: array of 1-12 [english, chinese] pairs.`);
    return;
  }
  glosses.forEach((pair, index) => {
    if (!Array.isArray(pair) || pair.length !== 2) {
      errors.push(`${label}.glosses[${index}]: must be [english, chinese].`);
      return;
    }
    checkText(errors, `${label}.glosses[${index}][0]`, pair[0], { lang: "en", max: 40, tex: false });
    checkText(errors, `${label}.glosses[${index}][1]`, pair[1], { lang: "zh", max: 40, tex: false });
  });
}

export function validateProblem(problem, context = {}) {
  const errors = [];
  const label = `problem ${problem?.id ?? "(missing id)"}`;
  if (!problem || typeof problem !== "object") return ["problem: must be an object."];
  if (!ID.test(problem.id ?? "")) errors.push(`${label}: id must be kebab-case.`);
  const level = LEVEL_BY_ID.get(problem.level);
  if (!level) errors.push(`${label}: invalid level.`);
  if (!PROBLEM_SECTIONS.includes(problem.section)) errors.push(`${label}: invalid section.`);
  const type = TYPE_BY_ID.get(problem.type);
  if (!type) errors.push(`${label}: invalid type.`);
  else if (type.section !== problem.section) errors.push(`${label}: type ${problem.type} belongs to section ${type.section}.`);
  if (problem.type === "quantitative-comparison" && problem.level === "lower") errors.push(`${label}: the Lower Level has no quantitative comparisons.`);
  if (!DIFFICULTY_BY_ID.has(problem.difficulty)) errors.push(`${label}: difficulty must be easy, medium or hard.`);

  // Concept tags must exist, be unique, and be valid for the problem's section and level.
  if (!Array.isArray(problem.conceptIds) || problem.conceptIds.length < 1 || problem.conceptIds.length > 4 || new Set(problem.conceptIds).size !== problem.conceptIds.length) {
    errors.push(`${label}.conceptIds: needs 1-4 unique concept ids.`);
  } else {
    for (const id of problem.conceptIds) {
      const concept = CONCEPT_TAXONOMY_BY_ID.get(id);
      if (!concept) errors.push(`${label}.conceptIds: unknown concept ${id}.`);
      else {
        if (!concept.sections.includes(problem.section)) errors.push(`${label}.conceptIds: concept ${id} is not tested in section ${problem.section}.`);
        if (!concept.levels.includes(problem.level)) errors.push(`${label}.conceptIds: concept ${id} does not apply to the ${problem.level} level.`);
      }
    }
  }

  const isQc = problem.type === "quantitative-comparison";
  if (isQc) {
    checkText(errors, `${label}.quantityA`, problem.quantityA, { lang: "en", min: 1, max: 240 });
    checkText(errors, `${label}.quantityB`, problem.quantityB, { lang: "en", min: 1, max: 240 });
    if (problem.stem !== "" && problem.stem !== undefined) checkText(errors, `${label}.stem`, problem.stem, { lang: "en", min: 3, max: 500 });
    if (problem.stem && !problem.stemZh) errors.push(`${label}.stemZh: required when a quantitative comparison has given information.`);
    if (problem.choices !== undefined && JSON.stringify(problem.choices) !== JSON.stringify(QC_CHOICES)) {
      errors.push(`${label}.choices: omit choices for quantitative comparisons (the standard four are added automatically).`);
    }
  } else {
    checkText(errors, `${label}.stem`, problem.stem, { lang: "en", min: 1, max: 900 });
    if (problem.quantityA !== undefined || problem.quantityB !== undefined) errors.push(`${label}: quantityA/quantityB are only for quantitative comparisons.`);
    if (!Array.isArray(problem.choices) || problem.choices.length !== 4) errors.push(`${label}.choices: needs exactly 4 choices.`);
    else {
      problem.choices.forEach((choice, index) => checkText(errors, `${label}.choices[${index}]`, choice, { lang: "en", min: 1, max: 200 }));
      const keys = problem.choices.map((choice) => String(choice).trim().toLowerCase());
      if (new Set(keys).size !== 4) errors.push(`${label}.choices: choices must be distinct.`);
    }
  }
  if (!Number.isInteger(problem.answer) || problem.answer < 0 || problem.answer > 3) errors.push(`${label}.answer: must be an index 0-3.`);
  checkPair(errors, `${label}.explanation`, problem.explanationEn, problem.explanationZh, { min: 40, max: 1400 }, { min: 15, max: 900 });

  const needsStemZh = ["word-problem", "math-achievement"].includes(problem.type);
  if (needsStemZh && !problem.stemZh) errors.push(`${label}.stemZh: a Chinese translation of the question is required for ${problem.type}.`);
  if (problem.stemZh !== undefined) checkText(errors, `${label}.stemZh`, problem.stemZh, { lang: "zh", min: 3, max: 900 });

  if (problem.figure !== undefined) errors.push(...validateFigure(problem.figure, `${label}.figure`));
  validateGlosses(errors, label, problem);

  if (problem.type === "synonym") {
    if (!/^[A-Z]+(?:-[A-Z]+)*$/.test(problem.stem ?? "")) errors.push(`${label}.stem: a synonym stem is one UPPERCASE word.`);
    if (Array.isArray(problem.choices)) {
      for (const choice of problem.choices) if (!WORD.test(choice)) errors.push(`${label}.choices: "${choice}" must be one lowercase word.`);
    }
    if (!Array.isArray(problem.glosses) || problem.glosses.length < 5) errors.push(`${label}.glosses: synonym items need 5 glosses (the stem word and all four choices).`);
    else {
      const have = new Set(problem.glosses.map((pair) => String(pair[0]).toLowerCase()));
      for (const word of [String(problem.stem).toLowerCase(), ...(problem.choices ?? [])]) {
        if (!have.has(String(word).toLowerCase())) errors.push(`${label}.glosses: missing a gloss for "${word}".`);
      }
    }
  }
  if (problem.type === "sentence-completion") {
    const blanks = (problem.stem ?? "").match(BLANK) || [];
    if (blanks.length < 1 || blanks.length > 2) errors.push(`${label}.stem: use one or two blanks written as _____ (five underscores).`);
    if (blanks.some((blank) => blank.length !== 5)) errors.push(`${label}.stem: blanks must be exactly five underscores.`);
    if (Array.isArray(problem.choices)) {
      const paired = problem.choices.map((choice) => String(choice).includes(SEPARATOR));
      if (blanks.length === 2 && !paired.every(Boolean)) errors.push(`${label}.choices: two-blank items need choices written as "word . . . word".`);
      if (blanks.length === 1 && paired.some(Boolean)) errors.push(`${label}.choices: one-blank items must not use " . . . " pairs.`);
      if (blanks.length === 1 && problem.level !== "lower") {
        for (const choice of problem.choices) if (/\s/.test(choice)) errors.push(`${label}.choices: "${choice}" must be a single word at the ${problem.level} level.`);
      }
      const sorted = [...problem.choices].sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
      if (blanks.length >= 1 && problem.level !== "lower" && JSON.stringify(sorted) !== JSON.stringify(problem.choices)) {
        errors.push(`${label}.choices: list answer choices alphabetically (by the first word), like the real test.`);
      }
    }
  }
  if (problem.type === "sentence-completion" && Array.isArray(problem.choices)) {
    // Word choices (not Lower-Level phrases) need a Chinese gloss for every word shown.
    const words = problem.choices.flatMap((choice) => String(choice).split(SEPARATOR).map((part) => part.trim()));
    if (words.every((word) => /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/.test(word))) {
      const have = new Set((problem.glosses ?? []).map((pair) => String(pair?.[0]).toLowerCase()));
      for (const word of words) {
        if (!have.has(word.toLowerCase())) errors.push(`${label}.glosses: missing a gloss for "${word}".`);
      }
    }
  }
  if (problem.type === "synonym" && Array.isArray(problem.choices)) {
    const sorted = [...problem.choices].sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
    if (JSON.stringify(sorted) !== JSON.stringify(problem.choices)) errors.push(`${label}.choices: list synonym choices alphabetically, like the real test.`);
  }

  if (problem.type === "reading-comprehension") {
    const strand = STRAND_BY_ID.get(problem.strand);
    if (!strand) errors.push(`${label}.strand: must be one of the six official strands.`);
    else if (Array.isArray(problem.conceptIds) && !problem.conceptIds.includes(strand.conceptId)) errors.push(`${label}.conceptIds: must include ${strand.conceptId} for strand ${problem.strand}.`);
    const passage = context.passagesById?.get(problem.passageId);
    if (!passage) errors.push(`${label}.passageId: unknown passage ${problem.passageId}.`);
    else if (passage.level !== problem.level) errors.push(`${label}.level: must match passage ${passage.id} (${passage.level}).`);
  } else if (problem.passageId !== undefined || problem.strand !== undefined) {
    errors.push(`${label}: passageId/strand are only for reading-comprehension problems.`);
  }
  return errors;
}

export function validateEssayPrompt(prompt) {
  const errors = [];
  const label = `essay prompt ${prompt?.id ?? "(missing id)"}`;
  if (!prompt || typeof prompt !== "object") return ["essay prompt: must be an object."];
  if (!/^es-[lmu]\d+$/.test(prompt.id ?? "")) errors.push(`${label}: id must look like es-l1, es-m2 or es-u3.`);
  if (!LEVEL_BY_ID.has(prompt.level)) errors.push(`${label}: invalid level.`);
  else if (prompt.id && prompt.id[3] !== prompt.level[0]) errors.push(`${label}: id letter must match the level.`);
  checkPair(errors, `${label}.prompt`, prompt.promptEn, prompt.promptZh, { min: 30, max: 420, tex: false }, { min: 10, max: 280, tex: false });
  checkList(errors, `${label}.ideasEn`, prompt.ideasEn, { count: [3, 5], lang: "en", min: 8, max: 160, tex: false });
  checkList(errors, `${label}.ideasZh`, prompt.ideasZh, { count: [3, 5], lang: "zh", min: 4, max: 110, tex: false });
  if (Array.isArray(prompt.ideasEn) && Array.isArray(prompt.ideasZh) && prompt.ideasEn.length !== prompt.ideasZh.length) errors.push(`${label}: ideasEn and ideasZh must have the same length.`);
  return errors;
}

export { SECTION_BY_ID };
