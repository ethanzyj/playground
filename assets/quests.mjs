import { allConcepts, GLOSSARY, PROBLEM_REFERENCES } from "./data.mjs?v=20261026-6";
import { problemKey } from "./progress.mjs?v=20261024-11";
import { QUEST_COURSE, courseCoverage } from "./quest-course.mjs?v=20261030-1";
import { CloudQuests, mergeQuestProgress } from "./cloud-quests.mjs?v=20261030-1";

const concepts = allConcepts();
const stages = ["learn", "checkpoint", "practice", "vocabulary", "finish"];
const html = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

const factoring = {
  id: "skill-factoring",
  studyConceptId: "polynomials",
  zh: "因式分解",
  en: "Factoring",
  explanationZh: "本关目标：提取公因式、识别平方差、分解首一二次式。每一步都要能通过展开检查，而不只是记住公式。",
  explanationEn: "Your mission: pull out a common factor, spot a difference of squares, and factor a monic quadratic. Check each result by expanding—not just memorizing.",
  formulas: [
    String.raw`ab+ac=a(b+c)`,
    String.raw`a^2-b^2=(a-b)(a+b)`,
    String.raw`x^2+(r+s)x+rs=(x+r)(x+s)`
  ],
  formulaNotes: [
    {
      explanationZh: "先找每一项共有的因式，再把它提到括号外。",
      explanationEn: "Find a factor shared by every term and move it outside the parentheses.",
      exampleZh: String.raw`\(6x^2+9x=3x(2x+3)\)。展开右边即可检查。`,
      exampleEn: String.raw`\(6x^2+9x=3x(2x+3)\). Expand the right side to check.`
    },
    {
      explanationZh: "两个平方相减时，分解为和与差的乘积。平方和不能直接使用这个公式。",
      explanationEn: "A subtraction of two squares factors into a sum times a difference. A sum of squares does not use this identity.",
      exampleZh: String.raw`\(x^2-25=(x-5)(x+5)\)。`,
      exampleEn: String.raw`\(x^2-25=(x-5)(x+5)\).`
    },
    {
      explanationZh: "首一二次式中，找两个数，使它们的和等于一次项系数、积等于常数项。",
      explanationEn: "For a monic quadratic, find two numbers whose sum is the linear coefficient and whose product is the constant term.",
      exampleZh: String.raw`\(x^2+7x+12=(x+3)(x+4)\)，因为 \(3+4=7\)，\(3\cdot4=12\)。`,
      exampleEn: String.raw`\(x^2+7x+12=(x+3)(x+4)\), since \(3+4=7\) and \(3\cdot4=12\).`
    }
  ]
};
const factoringChallenges = [
  { question: String.raw`6x^2+9x`, options: [String.raw`3x(2x+3)`, String.raw`3x(2x+9)`, String.raw`3(2x^2+3)`, String.raw`x(6x+3)`] },
  { question: String.raw`x^2-25`, options: [String.raw`(x-5)(x+5)`, String.raw`(x-5)^2`, String.raw`(x+5)^2`, String.raw`(x-25)(x+1)`] },
  { question: String.raw`x^2+7x+12`, options: [String.raw`(x+3)(x+4)`, String.raw`(x+2)(x+6)`, String.raw`(x-3)(x-4)`, String.raw`(x+1)(x+12)`] }
];
const focusedMissions = [
  {
    id: "skill-common-factors", zh: "提取公因式", en: "Common Factors", technique: 0,
    terms: ["Factor", "Coefficient"], problem: "2024-AMC10A-1",
    bridgeZh: String.raw`真题提示：先把 \(10101\) 写成 \(100\cdot101+1\)，再合并含公因数 \(101\) 的项。`,
    bridgeEn: String.raw`AMC bridge: rewrite \(10101=100\cdot101+1\), then combine terms with the common factor \(101\).`
  },
  {
    id: "skill-difference-squares", zh: "平方差", en: "Difference of Squares", technique: 1,
    terms: ["Factor", "Difference of Squares"], problem: "2018-AMC10A-10",
    bridgeZh: String.raw`真题提示：把两个根式记作 \(u,v\)。题目给出 \(u-v=3\)，而 \(u^2-v^2=49-25\)。利用平方差求 \(u+v\)，无需先求 \(x\)。`,
    bridgeEn: String.raw`AMC bridge: name the two radicals \(u,v\). The problem gives \(u-v=3\), while \(u^2-v^2=49-25\). Use the identity to find \(u+v\) without solving for \(x\).`
  },
  {
    id: "skill-quadratic-factoring", zh: "二次式因式分解", en: "Quadratic Factoring", technique: 2,
    terms: ["Quadratic", "Factor", "Zero (Root)"], problem: "2022-AMC10B-7",
    bridgeZh: String.raw`真题提示：写成 \((x-r)(x-s)\)，则 \(rs=36\)，\(k=-(r+s)\)。同时考虑正负整数根，排除相等的根；交换根的顺序不产生新的 \(k\)。`,
    bridgeEn: String.raw`AMC bridge: write \((x-r)(x-s)\), so \(rs=36\) and \(k=-(r+s)\). Consider positive and negative integer roots, exclude equal roots, and do not double-count swapped roots.`
  }
].map((mission) => ({
  ...mission, studyConceptId: "polynomials",
  explanationZh: factoring.formulaNotes[mission.technique].explanationZh,
  explanationEn: factoring.formulaNotes[mission.technique].explanationEn,
  formulas: [factoring.formulas[mission.technique]],
  formulaNotes: [factoring.formulaNotes[mission.technique]]
}));
const newMissions = [
  {
    id: "skill-triangle-area", zh: "三角形面积", en: "Triangle Area", world: "geometry",
    studyConceptId: "triangles", formulaIndex: 0,
    terms: ["Altitude", "Coordinate Plane"],
    problems: ["2016-AMC10B-9", "2019-AMC10A-7"],
    challenges: [
      { question: String.raw`\text{Base }10,\ \text{height }6:\quad A=?`, options: ["30", "60", "16", "15"] },
      { question: String.raw`\text{Base }8,\ \text{height }5:\quad A=?`, options: ["20", "40", "13", "10"] }
    ],
    bridgeZh: "先找到底边所在直线，再计算对面顶点到这条直线的垂直距离。坐标题先求交点；斜边长不一定是高。",
    bridgeEn: "Find the line containing the base and the perpendicular distance to the opposite vertex. For coordinate problems, find the intersections first; a slanted side is not necessarily the height."
  },
  {
    id: "skill-remainders", zh: "余数与循环", en: "Remainders and Cycles", world: "number-theory",
    studyConceptId: "numbers-operations", formulaIndex: 0,
    terms: ["Congruence Modulo n", "Units Digit", "Exponent"],
    problems: ["2025-AMC10B-2", "2024-AMC10B-7"],
    challenges: [
      { question: String.raw`23\bmod 5=?`, options: ["3", "4", "5", "0"] },
      { question: String.raw`2^{10}\bmod 3=?`, options: ["1", "2", "0", "3"] }
    ],
    bridgeZh: String.raw`个位数题按模 \(10\) 列出平方的循环，再分成完整周期与剩余项。幂的余数题可先提取公因式，再按模数化简。`,
    bridgeEn: String.raw`For units digits, list the square cycle modulo \(10\), then count full cycles and leftover terms. For the sum of powers, factor out the common power before reducing modulo the divisor.`
  },
  {
    id: "skill-equally-likely", zh: "等可能概率", en: "Equally Likely Probability", world: "probability",
    studyConceptId: "permutations-combinations-probability", formulaIndex: 3,
    terms: ["Sample Space", "Independent Events"],
    problems: ["2017-AMC10B-9", "2023-AMC10A-7"],
    challenges: [
      { question: String.raw`\Pr(\text{even on a fair six-sided die})=?`, options: [String.raw`\frac12`, String.raw`\frac16`, String.raw`\frac23`, "1"] },
      { question: String.raw`\Pr(\text{two heads in two independent fair coin tosses})=?`, options: [String.raw`\frac14`, String.raw`\frac12`, String.raw`\frac34`, "1"] }
    ],
    bridgeZh: "把完整的等可能结果作为样本空间。选择题可枚举三个答案的序列；骰子题按首次达到总和 3 的位置分类，避免重复计算。",
    bridgeEn: "Use complete equally likely outcomes as your sample space. Enumerate three-answer sequences for the quiz; for the die, split cases by when the running total first reaches 3, avoiding double counting."
  }
].map((mission) => {
  const source = concepts.find((concept) => concept.id === mission.studyConceptId);
  return {
    ...mission,
    explanationZh: source.formulaNotes[mission.formulaIndex].explanationZh,
    explanationEn: source.formulaNotes[mission.formulaIndex].explanationEn,
    formulas: mission.challenges.map(() => source.formulas[mission.formulaIndex]),
    formulaNotes: mission.challenges.map(() => source.formulaNotes[mission.formulaIndex])
  };
});
const badgeMissions = QUEST_COURSE.missions.map((mission) => mission.concept);
const reviewMissions = [...focusedMissions, ...newMissions, factoring, ...concepts];
const questConcepts = [...badgeMissions, ...reviewMissions];
const missionWorlds = QUEST_COURSE.worlds;

export function questContent(id) {
  const session = QUEST_COURSE.missions.find((mission) => mission.concept.id === id);
  if (session) return session;
  const added = newMissions.find((mission) => mission.id === id);
  if (added) {
    return {
      concept: added,
      terms: added.terms.map((name) => GLOSSARY.find((term) => term.en === name)),
      problems: added.problems.map((key) => PROBLEM_REFERENCES.find((problem) => problemKey(problem) === key))
    };
  }
  const focused = focusedMissions.find((mission) => mission.id === id);
  if (focused) {
    return {
      concept: focused,
      terms: focused.terms.map((name) => GLOSSARY.find((term) => term.en === name)),
      problems: [PROBLEM_REFERENCES.find((problem) => problemKey(problem) === focused.problem)]
    };
  }
  if (id === factoring.id) {
    const keys = ["2020-AMC10A-5", "2022-AMC10B-7", "2021-AMC10A-10"];
    return {
      concept: factoring,
      terms: ["Factor", "Coefficient", "Difference of Squares", "Quadratic", "Zero (Root)"]
        .map((name) => GLOSSARY.find((term) => term.en === name)),
      problems: keys.map((key) => PROBLEM_REFERENCES.find((problem) => problemKey(problem) === key))
    };
  }
  const concept = concepts.find((item) => item.id === id);
  if (!concept) throw new Error("Unknown quest concept.");
  return {
    concept,
    terms: GLOSSARY.filter((term) => term.conceptIds.includes(id)),
    problems: PROBLEM_REFERENCES.filter((problem) => problem.conceptIds.includes(id))
      .sort((a, b) => a.problemNumber - b.problemNumber || b.year - a.year || a.exam.localeCompare(b.exam))
      .slice(0, 3)
  };
}

const emptyProgress = () => ({ learned: false, formulas: [], problems: [], terms: [] });

export function questStage(content, progress) {
  if (!progress.learned) return "learn";
  if (progress.formulas.length < content.concept.formulas.length) return "checkpoint";
  if (progress.problems.length < content.problems.length) return "practice";
  if (progress.terms.length < content.terms.length) return "vocabulary";
  return "finish";
}

export function validateQuestProgress(data) {
  if (!data || data.version !== 1 || !data.quests || typeof data.quests !== "object"
    || Array.isArray(data.quests)) throw new Error("Invalid quest progress.");
  for (const [id, progress] of Object.entries(data.quests)) {
    const content = questContent(id);
    if (!progress || typeof progress.learned !== "boolean") throw new Error("Invalid quest lesson progress.");
    const allowed = {
      formulas: content.concept.formulas.map((_, index) => index),
      problems: content.problems.map(problemKey),
      terms: content.terms.map((term) => term.en)
    };
    for (const [key, values] of Object.entries(allowed)) {
      if (!Array.isArray(progress[key]) || new Set(progress[key]).size !== progress[key].length
        || !progress[key].every((value) => values.includes(value))) throw new Error("Invalid quest task progress.");
    }
    if ((!progress.learned && (progress.formulas.length || progress.problems.length || progress.terms.length))
      || (progress.formulas.length < allowed.formulas.length && (progress.problems.length || progress.terms.length))
      || (progress.problems.length < allowed.problems.length && progress.terms.length)) {
      throw new Error("Quest stages are out of order.");
    }
  }
  return data;
}

export class QuestPanel {
  constructor({ mount, storage, getUserId, getClient = () => null, getLanguage, typeset, onAchievements = () => {}, syncEnabled = true, fetchImpl = (...args) => fetch(...args) }) {
    this.mount = mount;
    this.storage = storage;
    this.getUserId = getUserId;
    this.getClient = getClient;
    this.onAchievements = onAchievements;
    this.syncEnabled = syncEnabled;
    this.getLanguage = getLanguage;
    this.typeset = typeset;
    this.fetch = fetchImpl;
    this.active = badgeMissions[0].id;
    this.identity = null;
    this.data = { version: 1, quests: {} };
    this.error = "";
    this.blocked = false;
    this.feedback = null;
    this.papers = new Map();
    this.answers = null;
    this.loading = null;
    this.practiceError = "";
    this.grading = null;
    this.gradingError = "";
    this.syncError = "";
    this.syncPending = 0;
    this.cloud = new CloudQuests({
      getClient, storage, validate: validateQuestProgress,
      onStatus: (count) => {
        this.syncPending = count;
        const status = this.mount.querySelector("[data-quest-sync-status]");
        if (status) {
          status.hidden = !count;
          status.textContent = this.text(`待同步任务：${count}`, `Missions pending sync: ${count}`);
        }
      },
      onError: (error) => {
        console.error("Unable to sync quest progress.", error);
        this.syncError = this.text("任务同步失败；进度仍在本浏览器。请运行 supabase/add-quest-progress.sql 并重试。", "Quest sync failed; progress remains in this browser. Apply supabase/add-quest-progress.sql and retry.");
        this.render();
      },
      onChange: (incoming, userId) => {
        if (this.identity !== userId) return;
        const next = { version: 1, quests: { ...this.data.quests } };
        for (const [id, progress] of Object.entries(incoming.quests)) next.quests[id] = mergeQuestProgress(next.quests[id], progress);
        validateQuestProgress(next);
        storage.setItem(this.key, JSON.stringify(next));
        this.data = next;
        this.syncError = "";
        this.onAchievements(next, userId);
        this.render();
      }
    });
  }

  pair(zh, en) {
    const language = this.getLanguage();
    if (language === "zh") return `<span lang="zh">${html(zh)}</span>`;
    if (language === "en") return `<span lang="en">${html(en)}</span>`;
    return `<span class="bilingual-pair"><span lang="en">${html(en)}</span><span lang="zh">${html(zh)}</span></span>`;
  }

  text(zh, en) {
    const language = this.getLanguage();
    return language === "zh" ? zh : language === "en" ? en : `${en} / ${zh}`;
  }

  load() {
    const identity = this.getUserId() || "guest";
    if (identity === this.identity) return;
    this.identity = identity;
    this.key = `amc10-quests:${identity}`;
    this.data = { version: 1, quests: {} };
    this.error = "";
    this.blocked = false;
    this.feedback = null;
    this.grading = null;
    this.gradingError = "";
    this.syncError = "";
    try {
      const raw = this.storage.getItem(this.key);
      if (raw) this.data = validateQuestProgress(JSON.parse(raw));
    } catch (error) {
      console.error("Unable to read quest progress.", error);
      this.error = this.text("无法读取任务进度。为保护数据已暂停任务，请先备份浏览器数据。", "Quest progress could not be read. Tasks are paused to protect your data; back up browser data before recovery.");
      this.blocked = true;
    }
    if (!this.blocked) {
      this.onAchievements(this.data, this.getUserId() || null);
      if (this.syncEnabled) this.cloud.activate(this.getUserId() || null, this.data);
    }
  }

  progress() {
    return this.data.quests[this.active] || emptyProgress();
  }

  selectMission(id) {
    questContent(id);
    this.active = id;
    this.feedback = null;
    this.practiceError = "";
    this.grading = null;
    this.gradingError = "";
    this.render();
  }

  save(update) {
    const identity = this.identity;
    this.load();
    if (identity !== this.identity) {
      this.render();
      return;
    }
    if (this.blocked) return;
    const progress = update(structuredClone(this.progress()));
    const next = { ...this.data, quests: { ...this.data.quests, [this.active]: progress } };
    try {
      validateQuestProgress(next);
      this.storage.setItem(this.key, JSON.stringify(next));
      this.data = next;
      this.error = "";
      this.onAchievements(next, this.getUserId() || null);
      if (this.syncEnabled) this.cloud.queue(this.active, progress);
    } catch (error) {
      console.error("Unable to save quest progress.", error);
      this.error = this.text("未保存任务进度，请检查浏览器存储并重试。", "Quest progress was not saved. Check browser storage and retry.");
    }
    this.render();
  }

  async loadPractice(problem) {
    const paper = `${problem.year}${problem.exam.slice(-1)}`;
    const remote = Boolean(this.getUserId());
    if (this.loading || (this.papers.has(paper) && (remote || this.answers))) return;
    const identity = this.identity;
    const active = this.active;
    this.loading = paper;
    this.practiceError = "";
    try {
      const responses = await Promise.all([
        this.fetch(`assets/exams/${paper}.json`),
        remote || this.answers ? Promise.resolve(null) : this.fetch("assets/answer-key.json")
      ]);
      if (!responses[0].ok || (responses[1] && !responses[1].ok)) throw new Error("Unable to load quest problem or answer key.");
      const exam = await responses[0].json();
      const key = responses[1] ? await responses[1].json() : { answers: this.answers };
      if (exam.year !== problem.year || exam.exam !== problem.exam || !Array.isArray(exam.problems)
        || exam.problems.length !== 25 || !exam.problems.every((item, index) =>
          item.problemNumber === index + 1 && typeof item.statementHtml === "string"
          && Array.isArray(item.choices) && item.choices.length === 5 && item.choices.every((choice) => typeof choice === "string"))) {
        throw new Error("Invalid quest exam data.");
      }
      if (!remote && (!key.answers || Object.keys(key.answers).length !== PROBLEM_REFERENCES.length
        || !PROBLEM_REFERENCES.every((item) => /^[A-E]$/.test(key.answers[problemKey(item)])))) {
        throw new Error("Invalid quest answer key.");
      }
      this.papers.set(paper, exam);
      if (!remote) this.answers = key.answers;
    } catch (error) {
      console.error("Unable to load quest practice.", error);
      this.practiceError = this.text("无法加载真题或答案，请重试。", "Unable to load the problem or answer key. Please retry.");
    } finally {
      this.loading = null;
      if (this.identity !== identity || this.active !== active) this.practiceError = "";
      this.render();
    }
  }

  async gradePractice(problem, answer) {
    if (this.grading || this.blocked) return;
    const identity = this.identity;
    const active = this.active;
    const userId = this.getUserId();
    const token = {};
    this.grading = token;
    this.gradingError = "";
    this.render();
    try {
      let correct;
      if (userId) {
        const client = this.getClient();
        if (!client) throw new Error("The signed-in grading client is unavailable.");
        const { data, error } = await client.rpc("check_quiz_answer", {
          p_expected_user: userId, p_problem_key: problemKey(problem), p_answer: answer
        });
        if (error) throw error;
        if (!data || data.problem_key !== problemKey(problem) || typeof data.correct !== "boolean") {
          throw new Error("Invalid database grading response.");
        }
        correct = data.correct;
      } else {
        if (!this.answers) throw new Error("The answer key has not loaded.");
        correct = answer === this.answers[problemKey(problem)];
      }
      if (this.grading !== token || this.identity !== identity || this.active !== active
        || this.getUserId() !== userId) return;
      if (!correct) {
        this.feedback = { zh: "答案不正确。检查计算与思路后重试。", en: "Incorrect answer. Check your calculation and approach, then retry." };
        return;
      }
      this.feedback = null;
      this.save((value) => ({ ...value, problems: [...value.problems, problemKey(problem)] }));
    } catch (error) {
      console.error("Unable to grade quest practice.", error);
      if (this.grading !== token) return;
      this.gradingError = this.text(
        "无法评分，进度未推进。请确认已运行 supabase/add-quest-answers.sql 并联网后重试。",
        "Grading failed; progress was not advanced. Check that supabase/add-quest-answers.sql has been applied and retry when connected."
      );
    } finally {
      if (this.grading === token) {
        this.grading = null;
        this.render();
      }
    }
  }

  choices(correct, alternatives, seed) {
    const values = [correct];
    for (const item of alternatives) {
      if (!values.some((other) => other.id === item.id ||
        (item.math ? other.math === item.math : other.en === item.en || other.zh === item.zh))) {
        values.push(item);
      }
      if (values.length === 4) break;
    }
    const offset = seed % values.length;
    return [...values.slice(offset), ...values.slice(0, offset)];
  }

  quiz(content, progress, vocabulary) {
    const index = vocabulary ? content.terms.findIndex((term) => !progress.terms.includes(term.en))
      : content.concept.formulas.findIndex((_, i) => !progress.formulas.includes(i));
    const term = content.terms[index];
    const note = content.concept.formulaNotes[index];
    const correct = vocabulary
      ? { id: term.en, zh: term.noteZh, en: term.noteEn }
      : { id: `${content.concept.id}:${index}`, zh: note.explanationZh, en: note.explanationEn };
    const alternatives = vocabulary
      ? GLOSSARY.filter((item) => item.categoryEn === term.categoryEn).concat(GLOSSARY)
        .filter((item, i, items) => items.findIndex((other) => other.en === item.en) === i)
        .map((item) => ({ id: item.en, zh: item.noteZh, en: item.noteEn }))
      : concepts.filter((item) => item.id !== content.concept.id).flatMap((item) =>
        item.formulaNotes.map((entry, i) => ({ id: `${item.id}:${i}`, zh: entry.explanationZh, en: entry.explanationEn })));
    const challenge = !vocabulary
      ? content.concept.id === factoring.id ? factoringChallenges[index]
        : content.concept.technique !== undefined ? factoringChallenges[content.concept.technique]
          : content.concept.challenges?.[index] || null
      : null;
    const options = this.choices(challenge ? { ...correct, math: challenge.options[0] } : correct,
      challenge ? challenge.options.slice(1).map((math, i) => ({ id: `distractor:${i}`, math })) : alternatives,
      index + content.concept.id.length);
    return `<p>${challenge ? content.concept.challenges ? this.pair("运用本关知识，选择正确答案。", "Apply this skill and choose the correct answer.") : this.pair("选择正确的因式分解。", "Choose the correct factorization.") : this.pair("选择正确的含义。", "Choose the correct meaning.")}</p>
      <p class="quest-question">${vocabulary ? this.pair(term.zh, term.en) : `\\(${html(challenge?.question || content.concept.formulas[index])}\\)`}</p>
      <p class="muted">${index + 1} / ${vocabulary ? content.terms.length : content.concept.formulas.length}</p>
      <form id="questQuiz"><fieldset><legend>${this.pair("含义", "Meaning")}</legend>
        ${options.map((option, i) => `<label class="quest-choice"><input type="radio" name="questAnswer" value="${i}" required ${this.blocked ? "disabled" : ""}>${option.math ? `\\(${html(option.math)}\\)` : this.pair(option.zh, option.en)}</label>`).join("")}
      </fieldset><button class="mastery" ${this.blocked ? "disabled" : ""}>${this.pair("检查答案", "Check answer")}</button></form>
      ${this.feedback ? `<p role="status" class="quest-feedback">${this.pair(this.feedback.zh, this.feedback.en)}</p>` : ""}`;
  }

  render() {
    this.load();
    const content = questContent(this.active);
    const coverage = courseCoverage(this.data);
    const budget = content.concept.budget;
    const earnsBadge = badgeMissions.some((mission) => mission.id === this.active);
    const progress = this.progress();
    const stage = questStage(content, progress);
    const labels = {
      learn: ["学习", "Learn"], checkpoint: ["概念测验", "Checkpoint"],
      practice: ["真题练习", "Practice"], vocabulary: ["词汇挑战", "Vocabulary"],
      finish: ["任务完成", "Quest complete"]
    };
    const stageIndex = stages.indexOf(stage);
    const total = 1 + content.concept.formulas.length + content.problems.length + content.terms.length;
    const done = Number(progress.learned) + progress.formulas.length + progress.problems.length + progress.terms.length;
    let body;
    if (stage === "learn") {
      body = `<p>${this.pair(content.concept.explanationZh, content.concept.explanationEn)}</p>
        ${content.concept.formulas.map((formula, index) => {
          if (content.concept.formulas.indexOf(formula) !== index) return "";
          const note = content.concept.formulaNotes[index];
          return `<section class="quest-lesson"><p>\\(${html(formula)}\\)</p>
            <p>${this.pair(note.explanationZh, note.explanationEn)}</p>
            <details><summary>${this.pair("示例", "Example")}</summary><p>${this.pair(note.exampleZh, note.exampleEn)}</p></details></section>`;
        }).join("")}
        <p class="muted">${this.pair("阅读公式及其条件，再进入测验。", "Read each formula and its conditions, then take the checkpoint.")}</p>
        <button id="questLearned" class="mastery" ${this.blocked ? "disabled" : ""}>${this.pair("开始测验", "Start checkpoint")}</button>`;
    } else if (stage === "checkpoint" || stage === "vocabulary") {
      body = this.quiz(content, progress, stage === "vocabulary");
    } else if (stage === "practice") {
      const problem = content.problems.find((item) => !progress.problems.includes(problemKey(item)));
      const exam = this.papers.get(`${problem.year}${problem.exam.slice(-1)}`);
      const question = exam?.problems[problem.problemNumber - 1];
      body = `<p class="notice">${this.pair("请先在纸上解题，再选择答案。答案来源：LIVE by Po-Shen Loh；不显示解析。题目版权归 MAA 所有。", "Solve on paper before choosing an answer. Answer key: LIVE by Po-Shen Loh; solutions are not shown. AMC problems © MAA.")}</p>
        ${content.concept.bridgeEn ? `<details class="quest-lesson"><summary>${this.pair("需要一点提示？", "Need a bridge to the AMC problem?")}</summary><p>${this.pair(content.concept.bridgeZh, content.concept.bridgeEn)}</p></details>` : ""}
        <h4>${html(`${problem.year} ${problem.exam} #${problem.problemNumber}`)}</h4>
        <p>${progress.problems.length + 1} / ${content.problems.length}</p>
        ${this.practiceError ? `<p role="alert">${html(this.practiceError)}</p><button id="questRetry" class="mastery">${this.pair("重试", "Retry")}</button>`
          : question && (this.getUserId() || this.answers) ? `<div class="quest-statement">${question.statementHtml}</div>
            <form id="questPractice"><fieldset><legend>${this.pair("选择答案", "Choose your answer")}</legend>
              ${question.choices.map((choice, index) => `<label class="quest-choice"><input name="questPracticeAnswer" type="radio" required value="${"ABCDE"[index]}" ${this.blocked || this.grading ? "disabled" : ""}><span>${"ABCDE"[index]}. ${choice}</span></label>`).join("")}
            </fieldset><button class="mastery" ${this.blocked || this.grading ? "disabled" : ""}>${this.grading ? this.pair("评分中……", "Checking…") : this.pair("检查答案", "Check answer")}</button></form>`
            : `<p role="status">${this.pair("加载题目中……", "Loading problem…")}</p>`}
        ${this.feedback ? `<p role="status" class="quest-feedback">${this.pair(this.feedback.zh, this.feedback.en)}</p>
          <a href="https://live.poshenloh.com/past-contests/amc10/${problem.year}${problem.exam.slice(-1)}/problem/${problem.problemNumber}" target="_blank" rel="noopener">${this.pair("查看来源解析（含答案）", "Review source solution (reveals answer)")}</a>` : ""}
        ${this.gradingError ? `<p role="alert">${html(this.gradingError)}</p>` : ""}
        <a href="?problem=${problemKey(problem)}" target="_blank" rel="noopener">${this.pair("在真题索引中查看", "Open in Problem Explorer")}</a>`;
    } else {
      body = `<div class="quest-conquest" role="status">${earnsBadge ? '<span class="quest-badge" aria-hidden="true">&#9733;</span>' : ""}
        <h4>${earnsBadge ? this.pair("任务完成徽章", "Mission completion badge") : this.pair("综合复习完成", "Review complete")}: ${this.pair(content.concept.zh, content.concept.en)}</h4>
        <p>${this.pair("已通过本关挑战、所选真题及全部相关词汇测验。", "You cleared the checkpoints, selected AMC problems, and every vocabulary challenge in this mission.")}</p></div>
        <p class="muted">${earnsBadge ? this.pair("完成记录与其他页面联动：真题正确作答、词汇检查，以及整个知识点的全部任务完成后更新掌握标记。", "Completion is linked to the other tabs: correct AMC answers, glossary checks, and concept mastery after every session for that concept is complete.") : this.pair("这不是完整的数学能力认证，也不会自动修改掌握标记。", "This is not a complete assessment of mathematical mastery and does not automatically change your mastery marks.")}</p>
        <a href="?concept=${content.concept.studyConceptId || content.concept.id}" target="_blank" rel="noopener">${this.pair("回到学习指南", "Return to Study Guide")}</a>`;
    }
    const conquered = badgeMissions.filter((concept) => {
      const saved = this.data.quests[concept.id];
      return saved && questStage(questContent(concept.id), saved) === "finish";
    });
    const missionIndex = questConcepts.findIndex((concept) => concept.id === this.active);
    const navigation = `<div class="quest-navigation"><label>${this.pair("选择任务", "Choose a mission")}<select id="questConcept">${[
      ...missionWorlds,
      { zh: "综合复习 · 无徽章", en: "Review quests · No badges", missions: reviewMissions }
    ].map((group) => `<optgroup label="${html(this.text(group.zh, group.en))}">${group.missions.map((concept) =>
      `<option value="${concept.id}" ${this.active === concept.id ? "selected" : ""}>${html(this.text(concept.zh, concept.en))}${conquered.some((item) => item.id === concept.id) ? " ★" : ""}</option>`).join("")}</optgroup>`).join("")}</select></label>
      </div>`;
    const missionHeading = `<div class="quest-mission-title">
        <button id="questPrevious" type="button" class="quest-nav-icon" aria-label="${html(this.text("上一任务", "Previous mission"))}" title="${html(this.text("上一任务", "Previous mission"))}" ${missionIndex === 0 ? "disabled" : ""}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg>
        </button>
        <h3>${this.pair(content.concept.zh, content.concept.en)}</h3>
        <button id="questNext" type="button" class="quest-nav-icon" aria-label="${html(this.text("下一任务", "Next mission"))}" title="${html(this.text("下一任务", "Next mission"))}" ${missionIndex === questConcepts.length - 1 ? "disabled" : ""}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg>
        </button>
      </div>`;
    this.mount.innerHTML = `<div class="quest-hero"><div><p class="quest-eyebrow">${this.pair("一次征服一个知识点", "One concept. One conquest.")}</p>
      <h2>${this.pair("知识点冒险", "Concept adventure")}</h2>
      <p>${this.pair("学习招式，闯过挑战，在真题中运用，赢得徽章。答错可以无限重试，没有倒计时。", "Learn the moves, clear the challenges, put them to work on real AMC problems, and earn a badge. Unlimited retries. No timer.")}</p></div>
      <div class="quest-trophy"><span aria-hidden="true">&#9733;</span><strong>${conquered.length} / ${badgeMissions.length}</strong>${this.pair("已获徽章 / 全部徽章", "badges earned / total")}</div></div>
      <div class="quest-coverage" aria-label="${html(this.text("课程覆盖进度", "Course coverage"))}">
        <span>${this.pair("已学习知识点", "Concepts studied")} <strong>${coverage.concepts} / ${coverage.conceptTotal}</strong></span>
        <span>${this.pair("已正确作答真题", "AMC problems answered correctly")} <strong>${coverage.problems} / ${coverage.problemTotal}</strong></span>
        <span>${this.pair("已通过词汇", "Glossary checks passed")} <strong>${coverage.terms} / ${coverage.termTotal}</strong></span>
      </div>
      ${coverage.complete ? `<p class="quest-conquest" role="status">${this.pair("全课程完成：全部知识点已学习、500 道真题已正确作答、144 个词汇已通过测验。", "Course complete: all concepts studied, all 500 AMC problems answered correctly, and all 144 glossary checks passed.")}</p>` : ""}
      <nav class="quest-worlds" aria-label="${html(this.text("任务世界", "Mission worlds"))}">${missionWorlds.map((world) => {
        const completed = world.missions.filter((mission) => conquered.some((item) => item.id === mission.id)).length;
        return `<button class="mastery" type="button" data-quest-world="${world.id}" aria-pressed="${world.missions.some((mission) => mission.id === this.active)}">${this.pair(world.zh, world.en)} <span>${completed} / ${world.missions.length}</span></button>`;
      }).join("")}<button class="mastery" type="button" data-quest-world="review" aria-pressed="${!earnsBadge}">${this.pair("综合复习", "Review quests")}</button></nav>
      ${!earnsBadge ? `<p class="muted">${this.pair("综合复习保留原有进度，不计入知识点徽章。", "Broad reviews keep your original progress and do not count toward skill badges.")}</p>` : ""}
      ${navigation}<div class="section-heading"><div>${missionHeading}
      <p class="muted">${this.getUserId() ? this.pair("任务进度按账户保存并同步至数据库；未同步的更改仍保留在本浏览器。", "Quest progress syncs to the database per account; unsynced changes remain in this browser.") : this.pair("访客任务进度仅保存在本浏览器。", "Guest quest progress is saved in this browser only.")}</p></div></div>
      ${budget ? `<details class="quest-budget" open><summary>${this.pair("本关学习预算", "Session study budget")}: ${budget.total} ${this.pair("分钟（估计）", "minutes (estimated)")}</summary>
        <p class="quest-metrics">${[
          ["学习", "Lesson", budget.lesson], ["小测", "Checkpoint", budget.checkpoint],
          ["真题", "AMC practice", budget.practice], ["词汇", "Vocabulary", budget.vocabulary],
          ["复盘", "Review", budget.review]
        ].map(([zh, en, value]) => `<span class="quest-metric">${this.pair(zh, en)}<strong>${value}</strong></span>`).join("")}</p>
        <p class="muted">${this.pair("目标是一次 45–60 分钟的学习。难题或重试可能更久；没有倒计时，进度可保存。徽章要求通过所有任务，不要求等待一小时。", "Designed for a 45–60 minute sitting. Hard problems and retries may take longer; there is no timer and progress is saved. Earn the badge by passing every task, not by waiting an hour.")}</p></details>` : ""}
      ${earnsBadge ? `<div class="quest-session-collection"><strong>${this.pair("本徽章已收集", "Collected for this badge")}</strong>
        <p class="quest-metrics">${[
          ["小测", "Checkpoints", progress.formulas.length, content.concept.formulas.length],
          ["真题", "AMC problems", progress.problems.length, content.problems.length],
          ["词汇", "Glossary", progress.terms.length, content.terms.length]
        ].map(([zh, en, value, total]) => `<span class="quest-metric">${this.pair(zh, en)}<strong>${value}/${total}</strong></span>`).join("")}</p></div>
        <a href="?glossary-concept=${content.concept.studyConceptId}" target="_blank" rel="noopener">${this.pair("查看相关词汇", "Open related Glossary")}</a>` : ""}
      ${this.error ? `<p class="notice" role="alert">${html(this.error)}</p>` : ""}
      ${this.syncError ? `<p class="notice" role="alert">${html(this.syncError)}</p><button id="questSyncRetry" type="button" class="mastery">${this.pair("重试同步", "Retry sync")}</button>` : ""}
      <p role="status" data-quest-sync-status ${this.syncPending ? "" : "hidden"}>${this.pair("待同步任务", "Missions pending sync")}: ${this.syncPending}</p>
      <ol class="quest-stages">${stages.map((item, index) => `<li class="${index < stageIndex ? "complete" : index === stageIndex ? "current" : ""}" ${index === stageIndex ? 'aria-current="step"' : ""}>${this.pair(...labels[item])}</li>`).join("")}</ol>
      <progress max="${total}" value="${done}" aria-label="${html(this.text("任务进度", "Quest progress"))}"></progress>
      <p>${done} / ${total} · ${this.pair("挑战完成", "challenges cleared")}</p><section class="card quest-task"><h3>${this.pair(...labels[stage])}</h3>${body}</section>`;
    this.mount.querySelector("#questConcept").addEventListener("change", (event) => {
      this.selectMission(event.target.value);
    });
    this.mount.querySelector("#questSyncRetry")?.addEventListener("click", () => this.cloud.retry(this.data));
    this.mount.querySelectorAll("[data-quest-world]").forEach((button) => {
      button.addEventListener("click", () => {
        const world = missionWorlds.find((item) => item.id === button.dataset.questWorld);
        this.selectMission(world ? world.missions[0].id : reviewMissions[0].id);
        this.mount.querySelector(`[data-quest-world="${button.dataset.questWorld}"]`).focus();
      });
    });
    this.mount.querySelector("#questPrevious").addEventListener("click", () => {
      if (missionIndex > 0) {
        this.selectMission(questConcepts[missionIndex - 1].id);
        this.mount.querySelector(missionIndex === 1 ? "#questConcept" : "#questPrevious").focus();
      }
    });
    this.mount.querySelector("#questNext").addEventListener("click", () => {
      if (missionIndex < questConcepts.length - 1) {
        this.selectMission(questConcepts[missionIndex + 1].id);
        this.mount.querySelector(missionIndex === questConcepts.length - 2 ? "#questConcept" : "#questNext").focus();
      }
    });
    this.mount.querySelector("#questLearned")?.addEventListener("click", () => {
      if (questStage(questContent(this.active), this.progress()) !== "learn") return;
      this.save((value) => ({ ...value, learned: true }));
    });
    if (stage === "practice") {
      const problem = content.problems.find((item) => !progress.problems.includes(problemKey(item)));
      this.mount.querySelector("#questRetry")?.addEventListener("click", () => {
        this.practiceError = "";
        this.render();
      });
      this.mount.querySelector("#questPractice")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const selected = this.mount.querySelector('input[name="questPracticeAnswer"]:checked');
        if (!selected || this.blocked) return;
        this.gradePractice(problem, selected.value);
      });
      if (!this.practiceError) this.loadPractice(problem);
    }
    this.mount.querySelector("#questQuiz")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = this.mount.querySelector('input[name="questAnswer"]:checked');
      if (!selected || this.blocked) return;
      const vocabulary = stage === "vocabulary";
      const index = vocabulary ? content.terms.findIndex((term) => !progress.terms.includes(term.en))
        : content.concept.formulas.findIndex((_, i) => !progress.formulas.includes(i));
      const count = this.mount.querySelectorAll('input[name="questAnswer"]').length;
      const correctIndex = (count - (index + content.concept.id.length) % count) % count;
      if (Number(selected.value) !== correctIndex) {
        const explanation = vocabulary ? content.terms[index] : content.concept.formulaNotes[index];
        this.feedback = {
          zh: `还不正确。请回顾：${vocabulary ? explanation.noteZh : explanation.explanationZh}`,
          en: `Not quite. Review: ${vocabulary ? explanation.noteEn : explanation.explanationEn}`
        };
        this.render();
        return;
      }
      this.feedback = null;
      this.save((value) => vocabulary
        ? { ...value, terms: [...value.terms, content.terms[index].en] }
        : { ...value, formulas: [...value.formulas, index] });
    });
    this.typeset(this.mount);
  }
}
