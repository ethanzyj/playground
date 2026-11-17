// Timed practice logic (pure, DOM-free). The deadline is a wall-clock time, so
// refreshing the page or switching tabs never resets or pauses the clock.

import { LEVELS } from "./taxonomy.mjs?v=20261116-2";

// Seconds per question implied by the official section timings
// (Lower: 20/34, 35/38, 25/25, 30/30 min; Middle & Upper: 20/40, 35/37, 35/36, 40/47 min).
export const TEST_PACE_SECONDS = {
  lower: { verbal: 35, quantitative: 55, reading: 60, mathematics: 60 },
  middle: { verbal: 30, quantitative: 57, reading: 58, mathematics: 51 },
  upper: { verbal: 30, quantitative: 57, reading: 58, mathematics: 51 }
};

// Reading tests are counted in passages; every other single-section test in questions.
export const TEST_COUNTS = {
  verbal: [10, 20, 30],
  quantitative: [10, 20, 30],
  mathematics: [10, 20, 30],
  reading: [1, 2, 3],
  mixed: [1]
};

export const MIXED_PLAN = [
  ["verbal", 8],
  ["quantitative", 8],
  ["reading", 1],
  ["mathematics", 10]
];

const SECTION_ORDER = ["verbal", "quantitative", "reading", "mathematics"];
const STORAGE_VERSION = 1;

export function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(items, random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

// Unattempted first, then previously incorrect, then previously correct.
function byPriority(items, random, attempts, prioritize) {
  if (!prioritize) return shuffled(items, random);
  const rank = (problem) => {
    const attempt = attempts[problem.id];
    return !attempt ? 0 : attempt.correct ? 2 : 1;
  };
  return [0, 1, 2].flatMap((value) => shuffled(items.filter((problem) => rank(problem) === value), random));
}

function pickPassages(pool, count, random, attempts, prioritize) {
  const groups = new Map();
  for (const problem of pool) {
    if (!groups.has(problem.passageId)) groups.set(problem.passageId, []);
    groups.get(problem.passageId).push(problem);
  }
  const ordered = byPriority(
    [...groups.values()].map((questions) => ({ id: questions[0].passageId, questions })),
    random,
    // A passage counts as "done" only when all its questions were answered correctly.
    Object.fromEntries([...groups.entries()].map(([passageId, questions]) => {
      const attempted = questions.filter((question) => attempts[question.id]);
      const allCorrect = attempted.length === questions.length && attempted.every((question) => attempts[question.id].correct);
      return [passageId, attempted.length ? { correct: allCorrect } : undefined];
    }).filter(([, value]) => value)),
    prioritize
  );
  return ordered.slice(0, count).flatMap((group) => group.questions);
}

function pickSection(pool, section, count, level, random, attempts, prioritize) {
  const items = pool.filter((problem) => problem.section === section);
  if (section === "reading") return pickPassages(items, count, random, attempts, prioritize);
  if (section === "verbal") {
    const synonyms = byPriority(items.filter((problem) => problem.type === "synonym"), random, attempts, prioritize);
    const sentences = byPriority(items.filter((problem) => problem.type === "sentence-completion"), random, attempts, prioritize);
    const first = Math.ceil(count / 2);
    return [...synonyms.slice(0, first), ...sentences.slice(0, count - first)];
  }
  if (section === "quantitative" && level !== "lower") {
    const words = byPriority(items.filter((problem) => problem.type === "word-problem"), random, attempts, prioritize);
    const comparisons = byPriority(items.filter((problem) => problem.type === "quantitative-comparison"), random, attempts, prioritize);
    const wordCount = Math.round(count * 0.55);
    return [...words.slice(0, wordCount), ...comparisons.slice(0, count - wordCount)];
  }
  return byPriority(items, random, attempts, prioritize).slice(0, count);
}

export function buildTest({ problems, level, section, count, seed = Date.now(), attempts = {}, prioritize = true }) {
  const random = mulberry32(seed);
  const pool = problems.filter((problem) => problem.level === level);
  const plan = section === "mixed" ? MIXED_PLAN : [[section, count]];
  const chosen = [];
  for (const [part, amount] of plan) {
    const picked = pickSection(pool, part, amount, level, random, attempts, prioritize);
    // Top up from the same section if a type quota could not be met.
    if (part !== "reading" && picked.length < amount) {
      const have = new Set(picked.map((problem) => problem.id));
      const extra = byPriority(pool.filter((problem) => problem.section === part && !have.has(problem.id)), random, attempts, prioritize);
      picked.push(...extra.slice(0, amount - picked.length));
    }
    chosen.push(...picked);
  }
  const rank = (problem) => SECTION_ORDER.indexOf(problem.section);
  const typeRank = (problem) => ["synonym", "sentence-completion", "word-problem", "quantitative-comparison"].indexOf(problem.type);
  const ordered = chosen
    .map((problem, index) => ({ problem, index }))
    .sort((a, b) => rank(a.problem) - rank(b.problem) || typeRank(a.problem) - typeRank(b.problem) || a.index - b.index)
    .map(({ problem }) => problem);
  return ordered.map((problem) => problem.id);
}

export function testSeconds(keys, byId, level) {
  const pace = TEST_PACE_SECONDS[level];
  const seconds = keys.reduce((sum, key) => sum + pace[byId.get(key).section], 0);
  return Math.ceil(seconds / 60) * 60;
}

export function formatClock(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = seconds % 60;
  const pair = (value) => String(value).padStart(2, "0");
  return hours ? `${hours}:${pair(minutes)}:${pair(rest)}` : `${pair(minutes)}:${pair(rest)}`;
}

export function createSession({ id, level, section, keys, byId, now = Date.now() }) {
  const durationMs = testSeconds(keys, byId, level) * 1000;
  return {
    version: STORAGE_VERSION,
    id,
    level,
    section,
    startedAt: now,
    durationMs,
    deadline: now + durationMs,
    status: "running",
    keys,
    answers: {}
  };
}

export function validateTestSession(value, validIds) {
  const fail = () => { throw new Error("Invalid saved test session."); };
  if (!value || typeof value !== "object" || value.version !== STORAGE_VERSION || typeof value.id !== "string") fail();
  if (!LEVELS.some((level) => level.id === value.level)) fail();
  if (!["verbal", "quantitative", "reading", "mathematics", "mixed"].includes(value.section)) fail();
  if (!Number.isFinite(value.startedAt) || !Number.isFinite(value.durationMs) || value.durationMs <= 0) fail();
  if (value.deadline !== value.startedAt + value.durationMs) fail();
  if (!["running", "submitted", "expired"].includes(value.status)) fail();
  if (!Array.isArray(value.keys) || !value.keys.length || new Set(value.keys).size !== value.keys.length) fail();
  if (!value.keys.every((key) => validIds.has(key))) fail();
  if (!value.answers || typeof value.answers !== "object" || Array.isArray(value.answers)) fail();
  for (const [key, answer] of Object.entries(value.answers)) {
    if (!value.keys.includes(key) || !Number.isInteger(answer) || answer < 0 || answer > 3) fail();
  }
  return value;
}

export function remainingMs(session, now = Date.now()) {
  return Math.max(0, session.deadline - now);
}

// Moves a running session to its final state; idempotent for finished sessions.
export function finishSession(session, now = Date.now()) {
  if (session.status !== "running") return session;
  const expired = now >= session.deadline;
  return { ...session, status: expired ? "expired" : "submitted", completedAt: Math.min(now, session.deadline) };
}

export function scoreSession(session, byId) {
  if (session.status === "running") throw new Error("Cannot score a running test.");
  const questions = session.keys.map((key) => {
    const problem = byId.get(key);
    const choice = Number.isInteger(session.answers[key]) ? session.answers[key] : null;
    return {
      key,
      choice,
      answer: problem.answer,
      status: choice === null ? "blank" : choice === problem.answer ? "correct" : "wrong"
    };
  });
  const correct = questions.filter((question) => question.status === "correct").length;
  const wrong = questions.filter((question) => question.status === "wrong").length;
  const blank = questions.length - correct - wrong;
  const bySection = SECTION_ORDER.map((section) => {
    const rows = questions.filter((question) => byId.get(question.key).section === section);
    return { section, total: rows.length, correct: rows.filter((row) => row.status === "correct").length };
  }).filter((row) => row.total);
  const concepts = new Map();
  for (const question of questions) {
    for (const conceptId of byId.get(question.key).conceptIds) {
      const row = concepts.get(conceptId) ?? { conceptId, total: 0, correct: 0 };
      row.total += 1;
      if (question.status === "correct") row.correct += 1;
      concepts.set(conceptId, row);
    }
  }
  const byConcept = [...concepts.values()].sort((a, b) => a.correct / a.total - b.correct / b.total || b.total - a.total);
  return { correct, wrong, blank, total: questions.length, percent: questions.length ? correct / questions.length : 0, questions, bySection, byConcept };
}
