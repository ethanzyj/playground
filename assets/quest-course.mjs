import { TOPICS, allConcepts, GLOSSARY, PROBLEM_REFERENCES } from "./data.mjs?v=20261026-6";
import { problemKey } from "./progress.mjs?v=20261024-11";

const concepts = allConcepts();
const conceptIds = new Set(concepts.map((concept) => concept.id));
const problemMinutes = { early: 6, medium: 10, "medium-hard": 14, hard: 18, challenge: 24 };

export function buildQuestCourse() {
  const assignments = new Map(concepts.map((concept) => [concept.id, { problems: [], terms: [], minutes: 0 }]));
  for (const problem of PROBLEM_REFERENCES) {
    const candidates = problem.conceptIds.filter((id) => conceptIds.has(id));
    if (!candidates.length || !problemMinutes[problem.difficulty]) throw new Error("Problem has no course assignment or time estimate.");
    const owner = candidates.reduce((best, id) => assignments.get(id).minutes < assignments.get(best).minutes ? id : best);
    const assignment = assignments.get(owner);
    assignment.problems.push(problem);
    assignment.minutes += problemMinutes[problem.difficulty];
  }
  for (const term of GLOSSARY) {
    const owner = term.conceptIds.find((id) => conceptIds.has(id));
    if (!owner) throw new Error("Glossary term has no course assignment.");
    assignments.get(owner).terms.push(term);
  }
  const missions = [];
  for (const concept of concepts) {
    const assignment = assignments.get(concept.id);
    const lessonMinutes = 8;
    const checkpointMinutes = concept.formulas.length * 2;
    const baseMinutes = lessonMinutes + checkpointMinutes;
    const batches = [];
    const createBatch = () => {
      const batch = { problems: [], terms: [], minutes: baseMinutes };
      batches.push(batch);
      return batch;
    };
    for (const problem of assignment.problems.sort((a, b) =>
      a.problemNumber - b.problemNumber || b.year - a.year || a.exam.localeCompare(b.exam))) {
      const minutes = problemMinutes[problem.difficulty];
      let batch = batches[batches.length - 1];
      if (!batch || batch.minutes + minutes > 60) batch = createBatch();
      batch.problems.push(problem);
      batch.minutes += minutes;
    }
    for (const term of assignment.terms) {
      let batch = batches.find((item) => item.minutes + 1 <= 60);
      if (!batch) batch = createBatch();
      batch.terms.push(term);
      batch.minutes += 1;
    }
    if (!batches.length) createBatch();
    batches.forEach((batch, index) => {
      const reviewMinutes = Math.max(0, 45 - batch.minutes);
      const id = `course-v1-${concept.id}-${index + 1}`;
      missions.push({
        concept: {
          ...concept, id, studyConceptId: concept.id,
          zh: `${concept.zh} · 第 ${index + 1} 关`,
          en: `${concept.en} · Session ${index + 1}`,
          budget: {
            lesson: lessonMinutes, checkpoint: checkpointMinutes,
            practice: batch.problems.reduce((sum, problem) => sum + problemMinutes[problem.difficulty], 0),
            vocabulary: batch.terms.length, review: reviewMinutes,
            total: batch.minutes + reviewMinutes
          }
        },
        problems: batch.problems, terms: batch.terms
      });
    });
  }
  return {
    missions,
    worlds: TOPICS.map((topic) => ({
      id: topic.id, zh: topic.zh, en: topic.en,
      missions: missions.filter((mission) => mission.concept.topicId === topic.id).map((mission) => mission.concept)
    }))
  };
}

export const QUEST_COURSE = buildQuestCourse();

export function courseCoverage(progress) {
  const learned = new Set();
  const solved = new Set();
  const checked = new Set();
  let badges = 0;
  for (const mission of QUEST_COURSE.missions) {
    const saved = progress.quests[mission.concept.id];
    if (!saved) continue;
    if (saved.learned) learned.add(mission.concept.studyConceptId);
    const requiredProblems = mission.problems.map(problemKey);
    const requiredTerms = mission.terms.map((term) => term.en);
    saved.problems.filter((key) => requiredProblems.includes(key)).forEach((key) => solved.add(key));
    saved.terms.filter((term) => requiredTerms.includes(term)).forEach((term) => checked.add(term));
    if (saved.learned && saved.formulas.length === mission.concept.formulas.length
      && requiredProblems.every((key) => saved.problems.includes(key))
      && requiredTerms.every((term) => saved.terms.includes(term))) badges++;
  }
  return {
    concepts: learned.size, conceptTotal: concepts.length,
    problems: solved.size, problemTotal: PROBLEM_REFERENCES.length,
    terms: checked.size, termTotal: GLOSSARY.length,
    badges, badgeTotal: QUEST_COURSE.missions.length,
    complete: badges === QUEST_COURSE.missions.length && learned.size === concepts.length
      && solved.size === PROBLEM_REFERENCES.length && checked.size === GLOSSARY.length
  };
}
