const CONCEPT_CODES = {
  PO: "polynomials",
  IN: "inequalities",
  FU: "functions",
  SE: "sequences",
  AL: "algebraic-techniques",
  DI: "diagram-skills",
  TR: "triangles",
  CI: "circles-quadrilaterals",
  PG: "regular-polygons",
  CO: "coordinate-geometry",
  PL: "points-lines-planes",
  SO: "solids-polyhedra",
  SP: "special-solids",
  NU: "numbers-operations",
  IE: "integer-equations",
  PR: "principles-theorems",
  PB: "permutations-combinations-probability",
  CM: "combinatorics-methods"
};

// Topic metadata is derived from the tagged AMC archive at
// https://github.com/DragonKyro/Math-Competition (2016-2024) and reviewed
// question metadata for the 2025 AMC 10A/10B exams.
const PROBLEM_CONCEPT_INDEX = {
  "2016A": "AL+NU,AL,AL,FU+PO+NU,SP+IE+DI,NU+CM,AL+NU,PB,NU+PB,SE+PG+DI,CO+PR+DI,NU+PB,NU+PB,IE+AL+CM,PG+CI+DI,CO+TR+DI,IN+NU+PB,CM+FU+DI,TR+CO+DI,PO+CM+AL,CI+CO+DI,NU+CM,AL+FU+NU,TR+PR+DI,NU+CM",
  "2016B": "AL,AL,AL,NU,AL,NU+PR,AL,NU,FU+TR+DI,TR+DI,AL+PG+DI,NU+CM+PB,AL+NU+CM,CO+PG+DI,NU+CM+DI,IN+SE+NU,PO+IN+DI,SE+NU,CO+PG+DI,CO+CI+DI,AL+CI+DI,CM+PB,TR+PG+DI,NU+SE+CM,FU+NU",
  "2017A": "AL,IN+NU,AL+PG+DI,AL+FU,AL+NU,PR+NU,PG+DI,CM,AL,IN+PG+DI,SP+DI,CM+TR+DI,SE+NU+PO,AL,PB+NU,NU,CO+AL+DI,PB+SE+NU,CM,NU,TR+PG+DI,CI+TR+DI,CO+CM+DI,PO+NU+CM,CM+NU",
  "2017B": "NU+AL,AL,IN+AL+NU,AL+NU,AL,SP+NU+DI,AL,CO+TR+DI,PB+CM+NU,AL+PL+DI,PB+AL,AL,CM,NU+PR+PB,TR+PG+DI,NU+CM,SE+CM+NU,PB+CM+DI,TR+AL+DI,NU+PB,TR+CI+DI,TR+CI+DI,NU+PO,TR+PG+DI,NU+AL",
  "2018A": "AL,AL,AL+NU,CM+AL+NU,PR+PB,AL,IN+NU,AL+PB,AL+TR+DI,PO+PG+DI,PB+CM+NU,AL+CM+NU,TR+DI,IN,CI+TR+DI,FU+TR+DI,NU+CM,CM,NU+PB,CM+NU+DI,FU+CI+DI,NU+AL,AL+TR+DI,TR+AL+DI,NU+SE",
  "2018B": "NU,AL,CM+AL+NU,AL+PG+DI,CM+NU,PB+NU,CI+AL+DI,PO,PB+CM+NU,SP+CO+DI,NU+AL,TR+CI+DI,SE+NU,CM+NU+PR,SP+PG+DI,NU+PO+SE,PG+TR+DI,CM+FU,NU,SE+FU,NU,PB+TR+DI,NU+PO+AL,PG+TR+DI,AL",
  "2019A": "AL,NU,AL+PG+DI,PR+CM+IN,NU+SE,PG+CI+DI,CO+TR+DI,CO+PG+DI,NU,CO+NU+DI,NU+PG+DI,AL+NU,TR+CI+DI,CM+PL+DI,SE+NU,TR+CI+DI,PO+CM,SE+NU+AL,PO+CM+NU,NU+PB+DI,CI+PL+DI,PB+CM+NU,CM+SE+NU,PO+AL+NU,NU+PR",
  "2019B": "AL+SP+DI,PR+CM+NU,AL,FU+SE+AL,CO+TR+DI,PO+NU,NU,TR+PG+DI,FU+CM+NU,TR+PG+DI,AL+NU,NU,AL+CM+NU,NU,AL+TR+DI,AL+TR+DI,PB+SE+NU,FU+AL,NU+CM,CI+TR+DI,PB+SE,PB+CM,CI+PL+DI,SE+FU,SE+CM",
  "2020A": "AL,AL+NU,AL,AL,PO+CM+NU,NU+CM,SE+PG+DI,SE+CM,NU,SP+PO+DI,NU+PG+DI,AL,PB+SE+DI,PO+NU,NU+PG+DI,PB+CI+DI,PO+CM,NU+CM,SO+CM+DI,PO+TR+DI,SE,FU+NU,CO+NU+DI,NU+PO+PR,PB+CM+AL",
  "2020B": "AL,SP+DI,AL,NU+TR+DI,CM+PO+FU,AL+NU,NU+PG+DI,TR+CO+DI,PG+IE+DI,CI+SP+DI,PB+CM,NU+FU,SE+CO+DI,CI+TR+DI,NU+SE,AL+CM+NU,CM+CI+DI,PB+FU+AL,NU+CM,SP+NU+DI,PG+TR+DI,PO+NU,CO+CM+DI,PO+IN+FU,CM+IE+NU",
  "2021A": "AL,AL,NU+AL,SE,AL,AL+PB,PR,NU+AL,PO+IN+AL,PO+SE+DI,NU,SP+AL+DI,SP+TR+DI,PO,FU+CM,NU,TR+AL+DI,AL+NU+FU,CM+CI+DI,NU+CM+FU,PG+TR+DI,AL+NU+SE,PB+SE+DI,PL+PG+DI,CM+FU+DI",
  "2021B": "CM,IN,AL+NU,CM,PO+CM+NU,AL+NU,CI+IN+DI,NU+PG+DI,CO+PL+DI,SP+DI,PO+NU,NU+AL,NU+PO,CI+TR+DI,PO+AL+NU,CM+NU,PR+NU+CM,NU+PB,AL+PB,TR+PR+DI,TR+PR+DI,CM+PB+NU,PB+PG+DI,AL+CM+PB,FU+CO+DI",
  "2022A": "AL,AL,AL+NU,AL+CM,PG+TR+DI,IN+AL,NU,AL+CM+NU,CM+FU+DI,PG+AL+DI,AL+PO+NU,AL,TR+CI+DI,PR+CM+NU,TR+CI+DI,PO+SP+DI,NU+IE+CM,CO+SE+DI,NU+AL+PO,AL+CM+SE,PG+TR+DI,CM+FU+NU,CO+PL+DI,NU+PO,NU+AL+DI",
  "2022B": "AL+NU,TR+PG+DI,NU+CM,PO+AL+NU,PO+SE+DI,NU+PO+SE,PO+NU,NU+CM,SE+NU,AL+NU+IE,PR,PB+SE+NU,PO+NU,CM+PR+IN,SE+NU,TR+AL+DI,NU+CI+DI,CM+AL+PO,CO+AL+DI,PG+DI,PO+PR+NU,CM+CI+DI,PB+SP+DI,IN+FU+AL,NU+SE+PR",
  "2023A": "AL,AL,AL,IN+TR+DI,NU+CM,SO+CM+DI,PB+CM+NU,FU,CM+NU,AL,TR+PO+DI,NU,IN+TR+DI,PB+NU,PO+SE+DI,AL+NU+CM,TR+PG+DI,NU+CM+DI,CI+CO+DI,PG+CM+DI,PO+PR+NU,CI+PR+DI,PO+PG+DI,PG+FU+DI,SO+PB+DI",
  "2023B": "FU+AL,AL+CM,AL+TR+DI,AL+PG+DI,AL+NU,SE+NU,TR+PG+DI,NU+CI+DI,PO+PG+DI,CM+PG+DI,CM,PO+NU,CO+PL+DI,PO+PG+DI,NU+PG+DI,CM+NU,SP+PO+DI,NU,PB+PG+DI,CI+TR+DI,NU+SE+PB,FU+AL+CM,SE,PG+PL+DI,AL+PG+DI",
  "2024A": "AL,TR+NU+DI,NU,IN+NU,NU,CM+IN+SE,IN+PO,AL,CM+PO,NU+AL,PO+AL+DI,AL+CM,CO+FU+DI,CI+TR+DI,NU+PO+DI,AL+PG+DI,PB+CM+PO,NU+CM,SE+AL+NU,SE+NU+IN,SE+AL+NU,PG+TR+DI,PO+AL+IE,CM+SP+DI,CM+PG+DI",
  "2024B": "CM+FU,AL+NU,IN,NU,NU+AL,PG+PO+DI,PO+NU,NU,PO+AL+NU,PG+TR+DI,CO+TR+DI,CM+PO+NU,IN+AL,PB+CI+DI,FU+AL+CM,PR+NU+IN,CM+NU,NU+PO,CO+AL+DI,FU+CM,CI+PR+DI,NU+PO,SE+NU,NU+CM,AL+FU+NU",
  "2025A": "AL,AL,TR+DI,AL+NU,SE,TR+PG+DI,PO+NU,PR,PO+FU,CI+DI,SE,NU+CM,PG+DI,PB+CM,TR+PG+DI,PB+CM,NU+PR,AL,SE+AL,SP+CO+DI,PR+CM,CI+TR+DI,TR+DI,CM+NU,PB+TR+DI",
  "2025B": "AL,NU+SE,SE+AL,NU+AL,TR+CI+DI,CO+PG+DI,AL+CO+DI,NU+AL,IN+IE+CM,PO+IE,PB+CM,PG+TR+DI,AL+TR+DI,PB+CM,SE+PO,CM+CI,SE+IN,SE+FU,SP+SE+DI,CI+PG+DI,CM+PG+DI,PB+NU,CO+NU+DI,PB+SE,PG+TR+DI"
};

function difficultyFor(problemNumber) {
  if (problemNumber <= 8) return "early";
  if (problemNumber <= 15) return "medium";
  if (problemNumber <= 20) return "medium-hard";
  if (problemNumber <= 23) return "hard";
  return "challenge";
}

export function buildProblemReferences(curatedProblems = []) {
  const curatedByKey = new Map(
    curatedProblems.map((problem) => [`${problem.year}${problem.exam.at(-1)}-${problem.problemNumber}`, problem])
  );

  return Object.entries(PROBLEM_CONCEPT_INDEX).flatMap(([examKey, encodedProblems]) => {
    const year = Number(examKey.slice(0, 4));
    const variant = examKey.at(-1);
    const exam = `AMC 10${variant}`;
    const mappings = encodedProblems.split(",");
    if (mappings.length !== 25) {
      throw new Error(`${examKey} must contain exactly 25 problem mappings.`);
    }

    return mappings.map((mapping, index) => {
      const problemNumber = index + 1;
      const curated = curatedByKey.get(`${examKey}-${problemNumber}`);
      if (curated) return curated;
      const conceptIds = mapping.split("+").map((code) => CONCEPT_CODES[code]);
      return {
        year,
        exam,
        problemNumber,
        difficulty: difficultyFor(problemNumber),
        conceptIds,
        sourceUrl: `https://artofproblemsolving.com/wiki/index.php/${year}_AMC_10${variant}_Problems/Problem_${problemNumber}`,
        noteZh: "按题库主题标签归类；可用于练习下方列出的相关概念。",
        noteEn: "Classified from problem-bank topic metadata; practice the linked concepts below."
      };
    });
  });
}
