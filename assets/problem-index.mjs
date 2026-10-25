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
  "2016A": "AL+NU,AL,AL,FU+NU+AL,SP+IE,NU+CM,AL+NU,AL+NU,NU+PB,SE+DI,CO+DI,NU+PB,NU+PB,IE+AL+CM,CI+DI,CO+FU+DI,IN+NU+PB,CM+SO+DI,TR+CO+DI,PO+CM+AL,CI+CO+DI,NU+PR,AL+FU+NU,CI+TR+DI,NU+IE",
  "2016B": "AL,AL,AL,SE+NU,AL,NU+PR,AL,NU,FU+TR+DI,TR+DI,AL+DI,NU+CM+PB,AL+NU+CM,CO+CM+DI,NU+CM+DI,IN+SE+NU,IN+CM+SO,SE+NU,CO+TR+DI,CO+CI+DI,AL+CI+DI,CM+PB,TR+PG+DI,NU+SE+CM,FU+NU",
  "2017A": "AL,IN+NU,AL+DI,SE+AL,AL+NU,PR,PG+DI,CM,AL,IN+DI,SP+DI,CM+TR+DI,SE+NU,AL,PB+NU+CO,NU,CO+AL+DI,PB+SE+NU,CM,NU,TR+AL+DI,CI+TR+DI,CO+CM+DI,PO+AL,CM+NU",
  "2017B": "NU+AL,AL,IN+AL+NU,AL+NU,AL,SP+NU+DI,AL,CO+TR+DI,PB+CM+NU,CO+AL+DI,PB+AL,AL,CM+PR,NU+PR+PB,TR+CO+DI,NU+CM,SE+CM+NU,CM+PG+DI,TR+AL+DI,NU+PB,TR+CI+DI,TR+CI+DI,NU+PR,CO+TR+DI,NU+AL",
  "2018A": "AL,AL,AL+NU,CM,IN,AL,NU+IE,AL+PB,AL+TR+DI,AL,PB+CM+NU,AL+CM+NU,TR+DI,AL+NU,CI+TR+DI,TR+IE+DI,NU+CM,CM,NU+PB,CM+NU+DI,FU+CO+AL,NU+AL,AL+TR+DI,TR+AL+DI,NU+SE",
  "2018B": "NU,AL,CM+AL+NU,AL+SP,CM+NU,PB+NU,CI+AL+DI,SE+CM,PB+CM+NU,SP+DI,NU+AL,TR+CI+DI,SE+NU,CM+NU+PR,SP+PG+DI,NU+PO+SE,PG+TR+DI,PB+CM,NU,SE+FU,NU,PB+TR+DI,NU+IE,PG+TR+DI,AL",
  "2019A": "AL,NU,AL,PR+CM+IN,NU+SE,CI+DI,CO+TR+DI,PG+DI,NU,CO+NU+DI,NU+PR,AL+NU,TR+CI+DI,CM+PL+DI,SE+NU,TR+CI+DI,PO+CM,SE+NU+AL,PO+AL+IN,PB+CM,TR+PL+SP,PB+CM+NU,CM+SE+NU,PO+AL+NU,NU+PR",
  "2019B": "NU+AL,PR+CM+NU,AL,SE+CO+AL,CO+TR+DI,NU+AL,NU,TR+PG+DI,FU+CM+NU,TR+CO+DI,AL+NU,NU,AL+CM+NU,NU,AL+TR+DI,AL+TR+DI,PB+SE+NU,FU+AL,NU+CM,CI+TR+DI,PB+SE,PB+CM,CI+PL+DI,SE+FU,SE+CM",
  "2020A": "AL,AL+NU,AL,AL,PO+IN+AL,NU+CM,NU+CM,SE+CM,NU,SP+DI,NU+CM,TR+DI,PB+CO+SE,PO+AL,NU+PB+PR,PB+CO+DI,PO+CM,NU+CM,SO+CM+DI,TR+DI,SE+AL,FU+NU,CO+CM+TR,NU+IE,PB+CM+AL",
  "2020B": "AL,SP,AL,NU+TR,PB+CM,AL+NU,NU,TR+CO+DI,IE+PO,CI+SP+DI,PB+CM,NU,SE+CO+DI,CI+TR+DI,NU+SE,CM+IN,CM+CI+DI,PB+CM,NU+CM,SP+DI,PG+TR+DI,PO+NU,CO+CM+DI,PO+IN+FU,CM+IE+NU",
  "2021A": "AL,AL,NU+AL,SE,AL,AL,PR,NU+AL,PO+IN+AL,PO+AL,NU,SP+AL+DI,SP+TR+DI,PO,FU+CM,NU+CM,TR+AL+DI,AL+NU+FU,CO+IN+AL,PB+CM,PG+TR+DI,AL+NU+SE,PB+SE+DI,CO+AL+DI,CM+DI",
  "2021B": "IN+NU,IN,AL+NU,CM,NU+IE+CM,AL+NU,CI+IN+DI,SE+CO+DI,CO+PL+DI,SP+DI,CM+IE,NU+PR,NU+PO,CI+TR+DI,PO+AL+NU,CM+NU,PR+NU+CM,NU+PB,AL+NU,TR+DI,TR+DI,CM+PB+NU,PB+PG+DI,CM+PR,FU+CO+DI",
  "2022A": "AL,AL,AL+NU,AL+NU,PG+TR+DI,IN+AL,NU,AL+CM+NU,CM+DI+PB,TR+DI+AL,AL+PO+NU,AL+CM,TR+CI+DI,PR+CM+NU,TR+CI+DI,PO+SP+DI,NU+IE+CM,CO+SE+DI,NU+AL+PO,AL+CM+SE,PG+TR+DI,CM+PB+NU,CO+PL+DI,CM+NU+IE,NU+CO+CM",
  "2022B": "AL+NU,TR+PG+DI,NU+CM,SE+NU,NU+AL,NU+SE+CM,PO+NU,NU+CM,SE+NU,AL+NU+IE,PR,PB+SE+NU,PO+NU,CM+PR+IN,SE+NU,TR+AL+DI,NU+CI+DI,AL+CM+PR,CM+DI,PG+DI,PO+PR+NU,CM+CI+DI,PB+CO+AL,IN+FU+AL,NU+SE+PR",
  "2023A": "AL,AL,NU+IE,IN+TR+DI,NU+CM,SO+CM+DI,PB+CM+NU,FU,CM+NU,AL,TR+PO+DI,NU,IN+TR+DI,PB+NU,SE+AL+DI,AL+NU+CM,TR+IE+DI,NU+CM+DI,CO+DI+AL,CM+DI+PB,PO+PR+NU,CI+PR+DI,NU+IE,PG+DI+AL,SO+PB+DI",
  "2023B": "FU+AL,AL+NU,AL+TR+DI,NU+AL,AL+NU,SE+NU,TR+PG+DI,NU+AL,NU+SE,CM+DI,CM,PO+FU,IN+CO+DI,IE+NU,NU+PR,CM+NU,SP+PO+DI,NU,PB+PG+DI,CI+SP+DI,NU+SE+PB,FU+AL,SE,CO+AL+DI,AL+PG+DI",
  "2024A": "AL,AL,NU,IN+NU,NU,CM+PB,IE+NU+IN,AL,PB+CM,NU+AL,IE+NU+AL,SE+NU,CO+FU+DI,CI+TR+DI,NU+IE+AL,AL+DI,PB+CM,NU+CM,SE+AL+NU,SE+NU+IN,SE+AL+NU,TR+DI,PO+AL+IE,CM+SO+PB,CM+DI",
  "2024B": "NU+AL,AL+NU,IN,SE+NU,NU+AL,NU+IE+IN,NU+PR,NU,PO+AL+NU,TR+DI+AL,CO+TR+DI,CM+PR,IN+AL,PB+CI+DI,FU+AL+CM,PR+NU+IN,PB+CM,NU+PO,CO+IE,PB+CM,CI+PR+DI,PB+CM+NU,SE+NU,NU+CM,SP+IE+AL",
  "2025A": "AL,AL,TR+IE,AL+NU,SE,TR+PG+DI,PO+NU,PR,PO+FU,CI+DI,SE,NU+CM,PG+DI,PB+CM,TR+DI,PB+CM,NU+PR,PO+AL,SE+AL,SP+CO+DI,PR+CM,CI+TR+DI,TR+DI,CM+NU,PB+TR+DI",
  "2025B": "AL,NU+SE,SE+AL,NU+AL,TR+CI+DI,CO+AL,AL+CO+DI,NU+AL,IN+IE+CM,PO+IE,PB+CM,PG+TR+DI,AL+TR+DI,PB+CM,SE+PO,CM+PB,SE+IN,SE+FU,SP+DI,CI+PG+DI,CM+PB,PB+NU,NU+AL,PB+SE,PG+TR+DI"
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
        sourceUrl: `https://artofproblemsolving.com/wiki/index.php/${year}_AMC_10${variant}_Problems/Problem_${problemNumber}`
      };
    });
  });
}
