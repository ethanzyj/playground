// Supplemental papers stay outside the fixed 2016–2025 quest course.
const tags = [
  ["algebraic-techniques"], ["algebraic-techniques"], ["triangles", "diagram-skills"],
  ["regular-polygons"], ["sequences"], ["triangles", "circles-quadrilaterals"],
  ["integer-equations"], ["inequalities"], ["triangles"], ["sequences"],
  ["numbers-operations"], ["permutations-combinations-probability"],
  ["combinatorics-methods"], ["inequalities", "triangles"], ["sequences", "numbers-operations"],
  ["permutations-combinations-probability"], ["regular-polygons", "diagram-skills"],
  ["sequences"], ["special-solids", "diagram-skills"], ["numbers-operations", "combinatorics-methods"],
  ["combinatorics-methods", "diagram-skills"], ["coordinate-geometry", "diagram-skills"],
  ["numbers-operations"], ["polynomials"], ["combinatorics-methods"]
];
const vocabulary = [
  ["Ratio"], ["Ratio"], ["Midpoint", "Altitude"],
  ["Exterior Angle"], ["Arithmetic Mean", "Sequence"],
  ["Radius", "Hypotenuse"], ["System of Linear Equations"], ["Interval", "Average Speed"],
  ["Similarity"], ["Arithmetic Mean", "Median (Statistics)"],
  ["Least Common Multiple"], ["Sample Space", "Combination"],
  ["Combination"], ["Triangle Inequality"], ["Sequence", "Recursive Counting"],
  ["Combination"], ["Regular Polygon", "Symmetry"], ["Recurrence Relation"],
  ["Hemisphere", "Radius"], ["Divisor", "Fundamental Theorem of Arithmetic"],
  ["Casework"], ["Coordinate Plane"], ["Consecutive Integers"], ["Polynomial"], ["Invariant"]
];

export const PRACTICE_PAPER = {
  id: "2026-practice-1",
  year: 2026,
  exam: "AMC 10A",
  answerKeyUrl: "assets/practice/2026-practice-1/answer-key.json",
  solutionPdfUrl: "assets/practice/2026-practice-1/solutions.pdf",
  sourceUrl: "assets/practice/2026-practice-1/booklet.pdf"
};
export const PRACTICE_PROBLEMS = tags.map((conceptIds, i) => ({
  ...PRACTICE_PAPER,
  paperId: "2026 AMC 10A",
  progressKey: `2026-practice-1-${i + 1}`,
  problemNumber: i + 1,
  difficulty: i < 8 ? "early" : i < 15 ? "medium" : i < 20 ? "medium-hard" : i < 23 ? "hard" : "challenge",
  conceptIds,
  vocabulary: vocabulary[i],
  bookletPage: i < 7 ? 2 : i < 14 ? 3 : i < 17 ? 4 : i < 21 ? 5 : 6,
  imageUrl: `assets/practice/2026-practice-1/problem-${i + 1}.png`,
  chineseImageUrl: `assets/practice/2026-practice-1/chinese-${i + 1}.png`,
  solutionImageUrl: `assets/practice/2026-practice-1/solution-${i + 1}.png`,
  solutionPage: i + 2,
  practice: true
}));

const secondTags = [
  ["numbers-operations"], ["special-solids"], ["special-solids"], ["algebraic-techniques"], ["combinatorics-methods", "circles-quadrilaterals"],
  ["integer-equations"], ["coordinate-geometry", "circles-quadrilaterals"], ["sequences"], ["combinatorics-methods"], ["coordinate-geometry", "inequalities"],
  ["triangles"], ["permutations-combinations-probability"], ["permutations-combinations-probability", "circles-quadrilaterals"], ["algebraic-techniques"], ["permutations-combinations-probability", "polynomials"],
  ["combinatorics-methods"], ["combinatorics-methods"], ["numbers-operations"], ["permutations-combinations-probability"], ["numbers-operations", "combinatorics-methods"],
  ["circles-quadrilaterals"], ["combinatorics-methods"], ["permutations-combinations-probability", "solids-polyhedra"], ["sequences"], ["triangles", "combinatorics-methods"]
];
export const PRACTICE_2_PROBLEMS = secondTags.map((conceptIds, i) => ({
  id: "2026-practice-2", paperId: "2026 AMC 10B", year: 2026, exam: "AMC 10B",
  progressKey: `2026-practice-2-${i + 1}`,
  problemNumber: i + 1,
  difficulty: i < 8 ? "early" : i < 15 ? "medium" : i < 20 ? "medium-hard" : i < 23 ? "hard" : "challenge",
  conceptIds, vocabulary: [],
  bookletPage: i < 5 ? 2 : i < 12 ? 3 : i < 20 ? 4 : i < 23 ? 5 : 6,
  sourceUrl: "assets/practice/2026-practice-2/booklet.pdf",
  imageUrl: `assets/practice/2026-practice-2/problem-${i + 1}.png`,
  chineseImageUrl: `assets/practice/2026-practice-2/chinese-${i + 1}.png`,
  chineseSourceUrl: "assets/practice/2026-practice-2/chinese-booklet.pdf",
  chineseBookletPage: i < 5 ? 2 : i < 11 ? 3 : i < 18 ? 4 : i < 21 ? 5 : i < 24 ? 6 : 7,
  answerKeyUrl: "assets/practice/2026-practice-2/answer-key.json",
  solutionImageUrl: `assets/practice/2026-practice-2/solution-${i + 1}.png`,
  individualSolutionPdfUrl: `assets/practice/2026-practice-2/solution-${i + 1}.pdf`,
  solutionLanguage: "both",
  practice: true
}));
export const ALL_PRACTICE_PROBLEMS = [...PRACTICE_PROBLEMS, ...PRACTICE_2_PROBLEMS];
const practiceKeys = new Set(ALL_PRACTICE_PROBLEMS.map((p) => p.progressKey));
export const isPracticeKey = (key) => practiceKeys.has(key);

export function practiceStatement(problem, language) {
  const label = language === "zh" ? `打开原卷，第 ${problem.problemNumber} 题`
    : `Open original booklet, problem ${problem.problemNumber}`;
  const original = `<a class="practice-image-link" href="${problem.sourceUrl}#page=${problem.bookletPage}" target="_blank" rel="noopener" aria-label="${label}">
      <img class="practice-problem-image" src="${problem.imageUrl}" alt="${problem.paperId}, problem ${problem.problemNumber}: original question, diagram and answer choices. Open the booklet for selectable text." loading="lazy">
    </a>`;
  if (!problem.chineseImageUrl) return language === "en" ? original
    : `${original}<p class="muted">${language === "both" ? "Chinese translation not supplied. / " : ""}<span lang="zh">此题暂未提供中文翻译。</span></p>`;
  const chineseImage = `<img class="practice-problem-image" src="${problem.chineseImageUrl}" alt="第 ${problem.problemNumber} 题：用户提供的中文译题（不含答案）" loading="lazy">`;
  const chinese = `<div class="practice-chinese" lang="zh">${problem.chineseSourceUrl
    ? `<a class="practice-image-link" href="${problem.chineseSourceUrl}#page=${problem.chineseBookletPage}" target="_blank" rel="noopener" aria-label="打开中文原卷，第 ${problem.problemNumber} 题">${chineseImage}</a>`
    : chineseImage}</div>`;
  if (language === "en") return original;
  if (language === "zh") return `${chinese}<p class="muted" lang="zh">原题图示与选项：</p>${original}`;
  return `${original}${chinese}`;
}

export function practiceSolution(problem, language) {
  const bilingual = problem.solutionLanguage === "both";
  const zh = bilingual ? "查看本题双语解析（含答案）" : "查看本题中文解析（含答案）";
  const en = bilingual ? "Show this problem's bilingual solution (reveals answer)" : "Show this problem's Chinese solution (reveals answer)";
  const label = language === "zh" ? zh : language === "en" ? en : `${en} / ${zh}`;
  return `<details class="practice-solution">
    <summary class="practice-solution-link">${label}</summary>
    <div class="practice-solution-content"${bilingual ? "" : ' lang="zh"'}>
      <img class="practice-problem-image" src="${problem.solutionImageUrl}" alt="第 ${problem.problemNumber} 题的${bilingual ? "双语" : "中文"}解析与答案" loading="lazy">
      ${problem.individualSolutionPdfUrl ? `<p><a href="${problem.individualSolutionPdfUrl}" target="_blank" rel="noopener">${language === "zh" ? "打开本题解析 PDF" : language === "en" ? "Open this problem's solution PDF" : "Open this problem's solution PDF / 打开本题解析 PDF"}</a></p>` : ""}
    </div>
  </details>`;
}
