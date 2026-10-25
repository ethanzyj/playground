export const PROBLEM_PROGRESS_OPTIONS = ["needUnderstanding", "needStartingPoint", "haveApproach"];

export function problemKey(problem) {
  return `${problem.year}-${problem.exam.replace(" ", "")}-${problem.problemNumber}`;
}

export function summarizeProgress(problems, selections) {
  const statuses = PROBLEM_PROGRESS_OPTIONS.map((status) => ({ status, count: 0, papers: [] }));
  let marked = 0;
  for (const problem of [...problems].sort((a, b) =>
    b.year - a.year || a.exam.localeCompare(b.exam) || a.problemNumber - b.problemNumber)) {
    const entry = statuses.find(({ status }) => status === selections[problemKey(problem)]);
    if (!entry) continue;
    marked += 1;
    entry.count += 1;
    let paper = entry.papers.find((paper) => paper.year === problem.year && paper.exam === problem.exam);
    if (!paper) {
      paper = { year: problem.year, exam: problem.exam, problemNumbers: [] };
      entry.papers.push(paper);
    }
    paper.problemNumbers.push(problem.problemNumber);
  }
  return { total: problems.length, marked, unmarked: problems.length - marked, statuses };
}

export function exportProgress(problems, selections, concepts, exportedAt = new Date().toISOString()) {
  return {
    schemaVersion: 1,
    exportedAt,
    scope: "AMC 10A/10B 2016-2025",
    statusDefinitions: {
      needUnderstanding: "Need help understanding",
      needStartingPoint: "Understand, but need a starting point",
      haveApproach: "Understand and have a solution approach"
    },
    summary: summarizeProgress(problems, selections),
    concepts: concepts.map(({ id, en, zh }) => ({ id, en, zh })),
    problems: problems.map((problem) => ({
      key: problemKey(problem),
      year: problem.year,
      exam: problem.exam,
      problemNumber: problem.problemNumber,
      difficulty: problem.difficulty,
      conceptIds: problem.conceptIds,
      status: PROBLEM_PROGRESS_OPTIONS.includes(selections[problemKey(problem)])
        ? selections[problemKey(problem)] : null
    }))
  };
}
