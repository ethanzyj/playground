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
  exam: "practice-1",
  answerKeyUrl: "assets/practice/2026-practice-1/answer-key.json",
  sourceUrl: "assets/practice/2026-practice-1/booklet.pdf"
};
export const PRACTICE_PROBLEMS = tags.map((conceptIds, i) => ({
  ...PRACTICE_PAPER,
  paperId: PRACTICE_PAPER.id,
  problemNumber: i + 1,
  difficulty: i < 8 ? "early" : i < 15 ? "medium" : i < 20 ? "medium-hard" : i < 23 ? "hard" : "challenge",
  conceptIds,
  vocabulary: vocabulary[i],
  bookletPage: i < 7 ? 2 : i < 14 ? 3 : i < 17 ? 4 : i < 21 ? 5 : 6,
  imageUrl: `assets/practice/2026-practice-1/problem-${i + 1}.png`,
  practice: true
}));

export const isPracticeKey = (key) => /^2026-practice-1-([1-9]|1[0-9]|2[0-5])$/.test(key);

export function practiceStatement(problem, language) {
  const label = language === "zh" ? `打开原卷，第 ${problem.problemNumber} 题`
    : `Open original booklet, problem ${problem.problemNumber}`;
  return `<a class="practice-image-link" href="${problem.sourceUrl}#page=${problem.bookletPage}" target="_blank" rel="noopener" aria-label="${label}">
      <img class="practice-problem-image" src="${problem.imageUrl}" alt="2026-practice-1, problem ${problem.problemNumber}: original question, diagram and answer choices. Open the booklet for selectable text." loading="lazy">
    </a>`;
}
