// Practice progress: the three self-assessment statuses (same as the AMC 10
// guide) plus answer attempts recorded when a student checks an answer.

export const PROBLEM_PROGRESS_OPTIONS = ["needUnderstanding", "needStartingPoint", "haveApproach"];

export const ANSWER_FILTERS = ["unattempted", "correct", "incorrect"];

export function problemKey(problem) {
  return problem.id;
}

export function answerState(attempts, id) {
  const attempt = attempts?.[id];
  if (!attempt) return "unattempted";
  return attempt.correct ? "correct" : "incorrect";
}

export function recordAttempt(attempts, id, choice, correct, at = new Date().toISOString()) {
  return { ...attempts, [id]: { choice, correct: Boolean(correct), at } };
}

export function clearAttempt(attempts, id) {
  const next = { ...attempts };
  delete next[id];
  return next;
}

// Drops anything that is not a valid attempt for a known problem, so corrupt
// storage can never break rendering.
export function sanitizeAttempts(raw, validIds) {
  const result = {};
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return result;
  for (const [id, attempt] of Object.entries(raw)) {
    if (!validIds.has(id) || !attempt || typeof attempt !== "object") continue;
    if (!Number.isInteger(attempt.choice) || attempt.choice < 0 || attempt.choice > 3) continue;
    result[id] = { choice: attempt.choice, correct: Boolean(attempt.correct), at: typeof attempt.at === "string" ? attempt.at : "" };
  }
  return result;
}

export function sanitizeProgress(raw, validIds) {
  const result = {};
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return result;
  for (const [id, status] of Object.entries(raw)) {
    if (validIds.has(id) && PROBLEM_PROGRESS_OPTIONS.includes(status)) result[id] = status;
  }
  return result;
}

export function sanitizeIdList(raw, validIds) {
  return Array.isArray(raw) ? raw.filter((id) => typeof id === "string" && validIds.has(id)) : [];
}

export function summarizeProgress(problems, { progress = {}, attempts = {} } = {}) {
  const statuses = PROBLEM_PROGRESS_OPTIONS.map((status) => ({ status, count: 0, problems: [] }));
  let marked = 0;
  let correct = 0;
  let incorrect = 0;
  for (const problem of problems) {
    const status = statuses.find((entry) => entry.status === progress[problem.id]);
    if (status) {
      marked += 1;
      status.count += 1;
      status.problems.push(problem);
    }
    const state = answerState(attempts, problem.id);
    if (state === "correct") correct += 1;
    else if (state === "incorrect") incorrect += 1;
  }
  const attempted = correct + incorrect;
  return {
    total: problems.length,
    marked,
    unmarked: problems.length - marked,
    statuses,
    attempted,
    correct,
    incorrect,
    unattempted: problems.length - attempted,
    accuracy: attempted ? correct / attempted : null
  };
}

// Per-concept accuracy over attempted problems, weakest first (for the test
// results and the study dashboard).
export function conceptAccuracy(problems, attempts) {
  const rows = new Map();
  for (const problem of problems) {
    const state = answerState(attempts, problem.id);
    if (state === "unattempted") continue;
    for (const id of problem.conceptIds) {
      const row = rows.get(id) ?? { conceptId: id, attempted: 0, correct: 0 };
      row.attempted += 1;
      if (state === "correct") row.correct += 1;
      rows.set(id, row);
    }
  }
  return [...rows.values()]
    .map((row) => ({ ...row, accuracy: row.correct / row.attempted }))
    .sort((a, b) => a.accuracy - b.accuracy || b.attempted - a.attempted);
}

export function exportProgress(problems, state, concepts, exportedAt = new Date().toISOString()) {
  const { progress = {}, attempts = {} } = state;
  return {
    schemaVersion: 1,
    exportedAt,
    scope: "ISEE original practice problems (Lower, Middle and Upper Level)",
    statusDefinitions: {
      needUnderstanding: "Need help understanding",
      needStartingPoint: "Understand, but need a starting point",
      haveApproach: "Understand and have a solution approach"
    },
    summary: (({ statuses, ...rest }) => ({ ...rest, statuses: statuses.map(({ status, count }) => ({ status, count })) }))(
      summarizeProgress(problems, state)
    ),
    concepts: concepts.map(({ id, en, zh }) => ({ id, en, zh })),
    problems: problems.map((problem) => ({
      key: problem.id,
      level: problem.level,
      section: problem.section,
      type: problem.type,
      difficulty: problem.difficulty,
      conceptIds: problem.conceptIds,
      status: PROBLEM_PROGRESS_OPTIONS.includes(progress[problem.id]) ? progress[problem.id] : null,
      answer: attempts[problem.id]
        ? { choice: attempts[problem.id].choice, correct: attempts[problem.id].correct, at: attempts[problem.id].at }
        : null
    }))
  };
}
