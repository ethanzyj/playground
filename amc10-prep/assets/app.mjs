import { TOPICS, PROBLEM_REFERENCES, GLOSSARY, allConcepts } from "./data.mjs?v=20261026-2";
import { PROBLEM_PROGRESS_OPTIONS, problemKey, progressScope, summarizeProgress, exportProgress } from "./progress.mjs?v=20261024-11";
import { AccountPanel } from "./account.mjs?v=20261026-2";
import { PROBLEM_VOCABULARY } from "./problem-vocab.mjs?v=20261026-2";

let problemProgressStorageError = false;

function loadProblemProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("amc10-problem-progress") || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)
      || !Object.entries(saved).every(([key, value]) =>
        PROBLEM_REFERENCES.some((problem) => problemKey(problem) === key)
        && PROBLEM_PROGRESS_OPTIONS.includes(value))) {
      throw new Error("Invalid saved problem progress.");
    }
    return saved;
  } catch (error) {
    console.error("Unable to read saved problem progress.", error);
    problemProgressStorageError = true;
    return {};
  }
}

const state = {
  problemProgress: loadProblemProgress(),
  problemProgressFilter: "all",
  language: localStorage.getItem("amc10-language") || "both",
  activeView: "study",
  activeConceptId: allConcepts()[0].id,
  search: "",
  problemMode: "filters",
  examYear: String(Math.max(...PROBLEM_REFERENCES.map((problem) => problem.year))),
  examPaper: "AMC 10A",
  problemConcept: "all",
  year: "all",
  exam: "all",
  difficulty: "all",
  glossarySearch: "",
  glossaryConcept: "all",
  conceptMastery: "all",
  glossaryMastery: "all",
  mapSearch: "",
  mapCollapsed: new Set(),
  mastered: new Set(JSON.parse(localStorage.getItem("amc10-mastered") || "[]")),
  masteredGlossary: new Set(JSON.parse(localStorage.getItem("amc10-mastered-glossary") || "[]"))
};

const conceptById = new Map(allConcepts().map((concept) => [concept.id, concept]));

const $ = (selector) => document.querySelector(selector);
let accountPanel;

// --- Inline glossary term linking -------------------------------------------------
// Wraps recognized English glossary terms (e.g. "quadratic", "difference of squares")
// inside explanations, methods, and examples with hoverable spans that reveal a small
// tooltip with the bilingual definition. TeX segments delimited by \( ... \) are left
// untouched so MathJax rendering is never disturbed.

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function slugifyTerm(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const glossaryByLowerName = new Map(GLOSSARY.map((term) => [term.en.toLowerCase(), term]));
const glossaryBySlug = new Map(GLOSSARY.map((term) => [slugifyTerm(term.en), term]));
const glossaryByName = new Map(GLOSSARY.map((term) => [term.en, term]));
const sortedGlossaryTerms = [...GLOSSARY].sort((a, b) => b.en.length - a.en.length);
const glossaryTermPattern = sortedGlossaryTerms.length
  ? new RegExp(`\\b(${sortedGlossaryTerms.map((term) => `${escapeRegExp(term.en)}(?:'s|s)?`).join("|")})\\b`, "gi")
  : null;

function resolveGlossaryTerm(matchText) {
  const lower = matchText.toLowerCase();
  if (glossaryByLowerName.has(lower)) return glossaryByLowerName.get(lower);
  if (lower.endsWith("'s") && glossaryByLowerName.has(lower.slice(0, -2))) return glossaryByLowerName.get(lower.slice(0, -2));
  if (lower.endsWith("s") && glossaryByLowerName.has(lower.slice(0, -1))) return glossaryByLowerName.get(lower.slice(0, -1));
  return null;
}

export function linkGlossaryTerms(text) {
  if (!text || !glossaryTermPattern) return text;
  return text
    .split(/(\\\([^]*?\\\))/g)
    .map((segment, index) => {
      if (index % 2 === 1) return segment; // Preserve raw TeX untouched.
      return segment.replace(glossaryTermPattern, (match) => {
        const term = resolveGlossaryTerm(match);
        if (!term) return match;
        const slug = slugifyTerm(term.en);
        return `<span class="glossary-term-link" tabindex="0" role="button" aria-describedby="glossary-tooltip" data-glossary-term-slug="${slug}">${match}</span>`;
      });
    })
    .join("");
}

function linkGlossaryList(items) {
  return items.map(linkGlossaryTerms);
}

// --- Hover/focus tooltip for inline glossary terms --------------------------------
// A single shared tooltip element is created once and repositioned/populated on
// hover or keyboard focus of any .glossary-term-link span. It never navigates the
// user away from where they are reading.

let glossaryTooltipEl = null;
let glossaryHideTimer = null;

function ensureGlossaryTooltip() {
  if (glossaryTooltipEl) return glossaryTooltipEl;
  glossaryTooltipEl = document.createElement("div");
  glossaryTooltipEl.id = "glossary-tooltip";
  glossaryTooltipEl.className = "glossary-tooltip";
  glossaryTooltipEl.setAttribute("role", "tooltip");
  glossaryTooltipEl.hidden = true;
  // Keep the tooltip open while the pointer travels from the term onto the
  // tooltip itself (e.g. to click "Open in glossary"), and only schedule a
  // hide once the pointer actually leaves the tooltip.
  glossaryTooltipEl.addEventListener("mouseenter", cancelGlossaryTooltipHide);
  glossaryTooltipEl.addEventListener("mouseleave", () => scheduleGlossaryTooltipHide());
  document.body.appendChild(glossaryTooltipEl);
  return glossaryTooltipEl;
}

function cancelGlossaryTooltipHide() {
  if (glossaryHideTimer) {
    clearTimeout(glossaryHideTimer);
    glossaryHideTimer = null;
  }
}

function scheduleGlossaryTooltipHide(delay = 180) {
  cancelGlossaryTooltipHide();
  glossaryHideTimer = setTimeout(() => {
    if (glossaryTooltipEl) glossaryTooltipEl.hidden = true;
    glossaryHideTimer = null;
  }, delay);
}

function showGlossaryTooltip(anchorEl, term) {
  cancelGlossaryTooltipHide();
  const tooltip = ensureGlossaryTooltip();
  tooltip.innerHTML = `
    <p class="glossary-tooltip-category">${textPair(term.categoryZh, term.categoryEn)}</p>
    <p class="glossary-tooltip-term">${textPair(term.zh, term.en)}</p>
    <p class="glossary-tooltip-note">${textPair(term.noteZh, term.noteEn)}</p>
    <a class="text-button glossary-tooltip-jump" href="${deepLink("term", slugifyTerm(term.en))}" target="_blank" rel="noopener">${uiText("openInGlossary")}</a>
  `;
  tooltip.hidden = false;
  const anchorRect = anchorEl.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const margin = 10;
  let left = anchorRect.left + window.scrollX;
  let top = anchorRect.bottom + window.scrollY + margin;
  const maxLeft = window.scrollX + document.documentElement.clientWidth - tooltipRect.width - margin;
  left = Math.max(window.scrollX + margin, Math.min(left, maxLeft));
  if (anchorRect.bottom + tooltipRect.height + margin > window.innerHeight) {
    top = anchorRect.top + window.scrollY - tooltipRect.height - margin;
  }
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  typesetMath(tooltip);
  tooltip.querySelector(".glossary-tooltip-jump").addEventListener("click", () => hideGlossaryTooltip());
}

function hideGlossaryTooltip() {
  cancelGlossaryTooltipHide();
  if (glossaryTooltipEl) glossaryTooltipEl.hidden = true;
}

function wireGlossaryTooltips(container) {
  container.querySelectorAll(".glossary-term-link").forEach((el) => {
    const term = glossaryBySlug.get(el.dataset.glossaryTermSlug);
    if (!term) return;
    el.addEventListener("mouseenter", () => showGlossaryTooltip(el, term));
    el.addEventListener("mouseleave", () => scheduleGlossaryTooltipHide());
    el.addEventListener("focus", () => showGlossaryTooltip(el, term));
    el.addEventListener("blur", () => scheduleGlossaryTooltipHide());
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!glossaryTooltipEl || glossaryTooltipEl.hidden) showGlossaryTooltip(el, term);
      else hideGlossaryTooltip();
    });
  });
}

document.addEventListener("scroll", hideGlossaryTooltip, true);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideGlossaryTooltip();
});

const UI_TEXT = {
  languageLabel: { en: "Language", zh: "语言" },
  darkTheme: { en: "Dark theme", zh: "深色主题" },
  switchToLight: { en: "Switch to light theme", zh: "切换至浅色主题" },
  switchToDark: { en: "Switch to dark theme", zh: "切换至深色主题" },
  themeSaveError: { en: "Theme changed, but could not be saved in this browser.", zh: "主题已更改，但无法保存在此浏览器中。" },
  heroEyebrow: { en: "AMC 10 prep", zh: "AMC 10 中英双语备考" },
  heroTitle: { en: "AMC 10 Bilingual Prep Guide", zh: "AMC 10 中英双语备考指南" },
  heroCopy: {
    en: "A data-driven study guide based on the Chinese curriculum map, organized around core AMC 10 areas: algebra, geometry, number theory, counting, and probability.",
    zh: "一份以中文课程知识图谱为基础的数据驱动学习指南，围绕 AMC 10 的核心领域组织：代数、几何、数论、计数与概率。"
  },
  examFacts: { en: "Exam facts", zh: "考试信息" },
  questionCount: { en: "25 questions", zh: "25 题" },
  timeLimit: { en: "75 minutes", zh: "75 分钟" },
  calculatorRule: { en: "No calculator", zh: "不可使用计算器" },
  guideSections: { en: "Guide sections", zh: "指南栏目" },
  topicNavigation: { en: "Topic navigation", zh: "知识点导航" },
  studyGuide: { en: "Study Guide", zh: "学习指南" },
  problemExplorer: { en: "Problem Explorer", zh: "真题索引" },
  glossary: { en: "Glossary", zh: "词汇表" },
  topicMap: { en: "Topic Map", zh: "知识图谱" },
  mapEyebrow: { en: "Topics & vocabulary", zh: "知识点与词汇" },
  searchMap: { en: "Filter map", zh: "筛选图谱" },
  mapSearchPlaceholder: { en: "topic or term...", zh: "知识点或词汇..." },
  expandAll: { en: "Expand all", zh: "全部展开" },
  collapseAll: { en: "Collapse all", zh: "全部收起" },
  mapRoot: { en: "AMC 10 knowledge map", zh: "AMC 10 知识图谱" },
  mapConcepts: { en: "concepts", zh: "个知识点" },
  mapTerms: { en: "terms", zh: "个词汇" },
  openConcept: { en: "Open in Study Guide", zh: "在学习指南中打开" },
  openTerm: { en: "Open in Glossary", zh: "在词汇表中打开" },
  noMapMatches: { en: "Nothing in the map matches your filter.", zh: "图谱中没有符合筛选条件的内容。" },
  searchTopics: { en: "Search topics", zh: "搜索知识点" },
  topicSearchPlaceholder: { en: "topic, formula, keyword...", zh: "知识点、公式、关键词..." },
  copyrightHeading: { en: "Problem sources and attribution.", zh: "题目来源与署名。" },
  copyrightCopy: {
    en: "Full exam pages include original English AMC 10 statements and diagrams, with source attribution. Reference cards link to the source problems and related concepts.",
    zh: "整卷阅读模式提供 AMC 10 英文原题与配图，并注明来源。题目索引卡片链接到原题与相关知识点。"
  },
  problemEyebrow: { en: "Past AMC 10 references", zh: "历年 AMC 10 真题索引" },
  problemMetadataNote: {
    en: "Classified from problem-bank topic metadata; practice the linked concepts below.",
    zh: "按题库主题标签归类；可用于练习下方列出的相关概念。"
  },
  browseProblems: { en: "Browse problems", zh: "浏览真题" },
  byConcept: { en: "By concept & filters", zh: "按知识点筛选" },
  byExam: { en: "By year & exam", zh: "按年份与试卷" },
  fullExam: { en: "Full exam page", zh: "整卷阅读" },
  selectYear: { en: "Year", zh: "年份" },
  selectExam: { en: "Exam", zh: "试卷" },
  problems: { en: "problems", zh: "题" },
  examOrder: { en: "Problems in exam order, matching your progress filter. Open a reference to read the problem.", zh: "按题号顺序显示符合进度筛选的题目。打开题目索引查看原题。" },
  fullExamSummary: { en: "Original English statements and answer choices on one page, matching your progress filter. Answers and solutions are not shown.", zh: "在一页中阅读符合进度筛选的英文原题及选项，不显示答案或解析。" },
  examAttribution: { en: "AMC problems © Mathematical Association of America.", zh: "AMC 题目版权归美国数学协会（MAA）所有。" },
  loadingExam: { en: "Loading exam statements…", zh: "正在加载整卷题目……" },
  examLoadError: { en: "Unable to load this exam. Please retry or open the source page.", zh: "无法加载试卷，请重试或打开来源页面。" },
  retry: { en: "Retry", zh: "重试" },
  openExamSource: { en: "Open source exam", zh: "打开原始试卷" },
  glossaryEyebrow: { en: "Vocabulary", zh: "词汇表" },
  bilingualGlossary: { en: "Bilingual Glossary", zh: "双语词汇表" },
  searchGlossary: { en: "Search glossary", zh: "搜索词汇" },
  glossarySearchPlaceholder: { en: "term or definition...", zh: "词汇或释义..." },
  conceptExplanation: { en: "Concept explanation", zh: "概念解释" },
  coreFormulas: { en: "Core formulas & facts", zh: "核心公式与结论" },
  workedExample: { en: "Example", zh: "示例" },
  stepByStep: { en: "Step by step", zh: "分步讲解" },
  methods: { en: "Methods", zh: "解题方法" },
  miniExample: { en: "Original mini-example", zh: "原创例题" },
  readinessChecklist: { en: "Readiness checklist", zh: "学习检查表" },
  relatedReferences: { en: "Related AMC 10 references", zh: "相关 AMC 10 真题索引" },
  relatedGlossary: { en: "Related vocabulary", zh: "相关词汇" },
  relatedVocabulary: { en: "Related vocabulary", zh: "相关词汇" },
  problemVocabulary: { en: "Vocabulary in this problem", zh: "本题词汇" },
  relatedProblems: { en: "Related problems", zh: "相关真题" },
  marked: { en: "Marked", zh: "已标记" },
  terms: { en: "terms", zh: "个词汇" },
  viewAllInGlossary: { en: "View all in Glossary →", zh: "在词汇表中查看全部 →" },
  year: { en: "Year", zh: "年份" },
  difficultyLegend: { en: "Difficulty legend", zh: "难度图例" },
  viewAllInExplorer: { en: "View all in Problem Explorer →", zh: "在真题索引中查看全部 →" },
  markMastered: { en: "Mark mastered", zh: "标记掌握" },
  mastered: { en: "Mastered", zh: "已掌握" },
  openReference: { en: "View problem reference", zh: "查看题目索引" },
  allConcepts: { en: "All concepts", zh: "所有知识点" },
  currentConcept: { en: "Current", zh: "当前知识点" },
  allYears: { en: "All years", zh: "所有年份" },
  allExams: { en: "All exams", zh: "所有试卷" },
  allDifficulties: { en: "All difficulties", zh: "所有难度" },
  filterByConcept: { en: "Filter by concept", zh: "按知识点筛选" },
  filterConceptLabel: { en: "Concept", zh: "知识点" },
  filterExamLabel: { en: "Exam", zh: "试卷" },
  filterDifficultyLabel: { en: "Difficulty", zh: "难度" },
  filterByYear: { en: "Filter by year", zh: "按年份筛选" },
  filterByExam: { en: "Filter by exam", zh: "按试卷筛选" },
  filterByDifficulty: { en: "Filter by difficulty", zh: "按难度筛选" },
  filterGlossaryByConcept: { en: "Filter vocabulary by concept", zh: "按概念筛选词汇" },
  filterMastery: { en: "Mastery", zh: "掌握状态" },
  filterConceptMastery: { en: "Filter concepts by mastery", zh: "按知识点掌握状态筛选" },
  filterGlossaryMastery: { en: "Filter vocabulary by mastery", zh: "按词汇掌握状态筛选" },
  allMastery: { en: "All mastery states", zh: "全部掌握状态" },
  masteredOnly: { en: "Mastered", zh: "已掌握" },
  unmasteredOnly: { en: "Not mastered", zh: "未掌握" },
  markGlossaryMastered: { en: "Mark vocabulary mastered", zh: "标记词汇已掌握" },
  masteryStatus: { en: "Learning status", zh: "学习状态" },
  problemProgress: { en: "My progress", zh: "我的进度" },
  setProblemProgress: { en: "Set my progress", zh: "标记我的进度" },
  allProgress: { en: "All statuses", zh: "全部进度" },
  unmarkedProgress: { en: "Not marked yet", zh: "尚未标记" },
  progressOverview: { en: "Progress overview", zh: "进度总览" },
  progressDetails: { en: "About these counts & export", zh: "统计说明与导出" },
  progressNeedUnderstanding: { en: "Need clarity", zh: "待理解题意" },
  progressNeedStartingPoint: { en: "Need a starting point", zh: "待寻找思路" },
  progressHaveApproach: { en: "Have an approach", zh: "已有解题思路" },
  markedProblems: { en: "Marked problems", zh: "已标记题目" },
  progressOverviewHelp: { en: "Counts follow the selected year and exam, independent of concept, difficulty, and status filters. Expand a status to see problem numbers by paper.", zh: "统计随所选年份与试卷更新，不受知识点、难度或状态筛选影响。展开状态可查看各试卷的题号。" },
  noMarkedStatus: { en: "No problems marked with this status yet.", zh: "尚无题目标记为此状态。" },
  exportProgress: { en: "Export progress (JSON)", zh: "导出进度（JSON）" },
  exportProgressHelp: { en: "Download all years and exams with your statuses and concept tags for later analysis. This does not include answers, problem text, or a history of changes.", zh: "下载全部年份与试卷的当前状态与知识点标签，以便日后分析。不包含答案、题干或变更历史。" },
  exportProgressError: { en: "Unable to export progress. Please try again.", zh: "无法导出进度，请重试。" },
  needUnderstanding: { en: "Need help understanding", zh: "需要帮助理解题意" },
  needStartingPoint: { en: "Understand, but need a starting point", zh: "理解题意，但还没有解题思路" },
  haveApproach: { en: "Understand and have a solution approach", zh: "理解题意，并有解题思路" },
  problemProgressError: { en: "Problem progress could not be read or saved in this browser. New selections may not survive a reload. Check your browser's storage settings.", zh: "无法读取或保存本浏览器中的题目进度，新选择可能在刷新后丢失。请检查浏览器的存储设置。" },
  relatedConcepts: { en: "Related concepts", zh: "相关知识点" },
  openInGlossary: { en: "Open in glossary →", zh: "打开词汇表 →" },
  noProblems: { en: "No problems match these filters.", zh: "没有符合筛选条件的题目。" },
  noRelatedReferences: { en: "No verified reference is currently linked to this concept.", zh: "此知识点目前尚未关联已核验的真题索引。" },
  noGlossaryTerms: { en: "No glossary terms match your search.", zh: "没有符合搜索条件的词汇。" }
};

function uiText(key) {
  const text = UI_TEXT[key];
  if (state.language === "zh") return text.zh;
  if (state.language === "en") return text.en;
  return `${text.en} / ${text.zh}`;
}

function difficultyText(difficulty) {
  const labels = {
    early: { en: "early", zh: "入门" },
    medium: { en: "medium", zh: "中等" },
    "medium-hard": { en: "medium-hard", zh: "中高" },
    hard: { en: "hard", zh: "困难" },
    challenge: { en: "challenge", zh: "挑战" }
  };
  const label = labels[difficulty] || { en: difficulty, zh: difficulty };
  return plainTextPair(label.zh, label.en);
}

function plainTextPair(zh, en) {
  if (state.language === "zh") return zh;
  if (state.language === "en") return en;
  return `${en} / ${zh}`;
}

function textPair(zh, en) {
  if (state.language === "zh") return `<span lang="zh">${zh}</span>`;
  if (state.language === "en") return `<span lang="en">${en}</span>`;
  return `<span class="bilingual-pair"><span lang="en">${en}</span><span lang="zh">${zh}</span></span>`;
}

function renderLanguageControl() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
  });
}

function renderStaticInterface() {
  renderThemeControl();
  renderLanguageControl();
  accountPanel?.render();
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = state.language === "zh"
    ? "AMC 10 中英双语备考指南"
    : state.language === "en"
      ? "AMC 10 Bilingual Prep Guide"
      : "AMC 10 Bilingual Prep Guide | AMC 10 中英双语备考指南";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = UI_TEXT[element.dataset.i18n];
    element.innerHTML = textPair(text.zh, text.en);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = uiText(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", uiText(element.dataset.i18nAriaLabel));
  });
}

function renderTopicNav() {
  const query = state.search.trim().toLowerCase();
  const nav = $("#topicNav");
  nav.innerHTML = TOPICS.map((topic) => {
    const concepts = topic.concepts.filter((concept) => {
      const haystack = [topic.zh, topic.en, concept.zh, concept.en, concept.detailZh, concept.detailEn, concept.explanationZh, concept.explanationEn].join(" ").toLowerCase();
      return (!query || haystack.includes(query))
        && (state.conceptMastery === "all"
          || (state.conceptMastery === "mastered" && state.mastered.has(concept.id))
          || (state.conceptMastery === "unmastered" && !state.mastered.has(concept.id)));
    });
    if (!concepts.length) return "";
    return `
      <details open class="topic-group">
        <summary>${textPair(topic.zh, topic.en)}<small>${textPair(topic.officialAlignmentZh, topic.officialAlignment)}</small></summary>
        <div class="topic-links">
          ${concepts.map((concept) => `
            <button class="topic-button ${concept.id === state.activeConceptId ? "active" : ""}" data-concept="${concept.id}">
              <span>${textPair(concept.zh, concept.en)}</span>
              ${state.mastered.has(concept.id) ? `<span class="status-dot" title="${uiText("mastered")}">✓</span>` : ""}
            </button>
          `).join("")}
        </div>
      </details>
    `;
  }).join("");

  nav.querySelectorAll("[data-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeConceptId = button.dataset.concept;
      render();
    });
  });
}

function listItems(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function bilingualListItems(itemsZh, itemsEn) {
  const linkedEn = linkGlossaryList(itemsEn);
  if (state.language === "zh") return listItems(itemsZh);
  if (state.language === "en") return listItems(linkedEn);
  return `<ul>${linkedEn.map((item, index) => `<li>${textPair(itemsZh[index], item)}</li>`).join("")}</ul>`;
}

function formulaItems(concept) {
  return `<ol class="formula-list">${concept.formulas.map((formula, index) => {
    const note = concept.formulaNotes[index];
    return `
      <li class="formula-item">
        <div class="formula-expression"><span class="math-formula">\\(${formula}\\)</span></div>
        <p class="formula-explanation">${textPair(note.explanationZh, linkGlossaryTerms(note.explanationEn))}</p>
        ${note.stepsEn ? `
          <details class="formula-steps">
            <summary>
              <strong>${uiText("stepByStep")}</strong>
              <svg class="steps-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <ol>
              ${note.stepsEn.map((step, stepIndex) => `<li>${textPair(note.stepsZh[stepIndex], linkGlossaryTerms(step))}</li>`).join("")}
            </ol>
          </details>
        ` : ""}
        <div class="formula-example">
          <strong>${uiText("workedExample")}</strong>
          <div>${textPair(note.exampleZh, linkGlossaryTerms(note.exampleEn))}</div>
        </div>
      </li>
    `;
  }).join("")}</ol>`;
}

function typesetMath(target) {
  if (!window.MathJax?.startup?.promise) return;
  const el = target || $("#conceptView");
  if (!el) return;
  window.MathJax.startup.promise
    .then(() => {
      window.MathJax.typesetClear?.([el]);
      return window.MathJax.typesetPromise([el]);
    })
    .catch((error) => {
      console.error("Unable to render formulas with MathJax.", error);
    });
}

function renderConcept() {
  const concept = conceptById.get(state.activeConceptId) || allConcepts()[0];
  const related = PROBLEM_REFERENCES.filter((problem) => problem.conceptIds.includes(concept.id));
  const relatedTerms = GLOSSARY.filter((term) => term.conceptIds.includes(concept.id));
  $("#conceptView").innerHTML = `
    <div class="concept-header">
      <div>
        <p class="eyebrow">${textPair(concept.topicZh, concept.topicEn)}</p>
        <h2>${textPair(concept.zh, concept.en)}</h2>
        <p class="detail">${textPair(concept.detailZh, concept.detailEn)}</p>
      </div>
      <button id="masteryToggle" class="mastery ${state.mastered.has(concept.id) ? "complete" : ""}">
        ${state.mastered.has(concept.id) ? `✓ ${uiText("mastered")}` : uiText("markMastered")}
      </button>
    </div>
    <div class="card-grid">
      <section class="card wide">
        <h3>${uiText("conceptExplanation")}</h3>
        <p>${textPair(concept.explanationZh, linkGlossaryTerms(concept.explanationEn))}</p>
      </section>
      <section class="card wide formula-card">
        <h3>${uiText("coreFormulas")}</h3>
        ${formulaItems(concept)}
      </section>
      <section class="card wide">
        <h3>${uiText("methods")}</h3>
        ${bilingualListItems(concept.methodsZh, concept.methodsEn)}
      </section>
      <section class="card wide example">
        <h3>${uiText("miniExample")}</h3>
        <p>${textPair(concept.exampleZh, linkGlossaryTerms(concept.exampleEn))}</p>
      </section>
      <section class="card wide">
        <h3>${uiText("readinessChecklist")}</h3>
        ${bilingualListItems(concept.checklistZh, concept.checklistEn)}
      </section>
      <section class="card wide">
        <h3>${uiText("relatedReferences")} (${related.length})</h3>
        ${related.length ? `
          ${relatedProblemTable(related)}
          <a class="text-button" href="${deepLink("problems-concept", concept.id)}" target="_blank" rel="noopener">${uiText("viewAllInExplorer")}</a>
        ` : `<p class="empty-state">${uiText("noRelatedReferences")}</p>`}
      </section>
      <section class="card wide">
        <h3>${uiText("relatedGlossary")} (${relatedTerms.length})</h3>
        ${relatedVocabularyList(relatedTerms, concept.id)}
      </section>
    </div>
  `;
  typesetMath();
  $("#masteryToggle").addEventListener("click", () => {
    const mastered = !state.mastered.has(concept.id);
    if (mastered) state.mastered.add(concept.id);
    else state.mastered.delete(concept.id);
    saveLocalMastery();
    render();
    accountPanel?.setMastery("concept", concept.id, mastered);
  });
  wireProblemAndGlossaryLinks($("#conceptView"));
}

let progressControlId = 0;

const PROGRESS_LABEL_KEYS = {
  needUnderstanding: "progressNeedUnderstanding",
  needStartingPoint: "progressNeedStartingPoint",
  haveApproach: "progressHaveApproach"
};

const PROGRESS_ICONS = {
  needUnderstanding: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2.5 2-2.5 3.5M12 17h.01"/>',
  needStartingPoint: '<path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z"/>',
  haveApproach: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>'
};

function progressSummaryText(status) {
  return status
    ? `${uiText("problemProgress")}: ${uiText(PROGRESS_LABEL_KEYS[status])}`
    : uiText("problemProgress");
}

function updateProgressControl(control, selected) {
  control.querySelector("summary").textContent = progressSummaryText(selected);
  control.dataset.progressStatus = selected || "";
  control.querySelectorAll("input").forEach((input) => {
    input.checked = input.value === selected;
  });
}

function problemProgressControl(key) {
  const selected = state.problemProgress[key];
  const groupName = `progress-${++progressControlId}`;
  return `
    <details class="problem-progress" data-progress-key="${key}" data-progress-status="${selected || ""}" open>
      <summary>${progressSummaryText(selected)}</summary>
      <fieldset>
        <legend>${uiText("problemProgress")}</legend>
        ${PROBLEM_PROGRESS_OPTIONS.map((option) => `
          <label class="progress-option" data-status="${option}">
            <input type="radio" name="${groupName}" value="${option}" aria-label="${uiText(option)}" aria-describedby="${groupName}-${option}-tip" ${selected === option ? "checked" : ""}>
            <span class="progress-option-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${PROGRESS_ICONS[option]}</svg>
            </span>
            <span class="progress-option-tooltip" id="${groupName}-${option}-tip" role="tooltip">${textPair(UI_TEXT[option].zh, UI_TEXT[option].en)}</span>
          </label>
        `).join("")}
      </fieldset>
    </details>
  `;
}

function renderProblemProgressError() {
  $("#problemProgressError").hidden = !problemProgressStorageError;
  $("#problemProgressError").textContent = uiText("problemProgressError");
}

const DIFFICULTY_ORDER = ["early", "medium", "medium-hard", "hard", "challenge"];

function problemLinkLabel(problem) {
  const progress = state.problemProgress[problemKey(problem)];
  return [`${problem.year} ${problem.exam} #${problem.problemNumber}`, difficultyText(problem.difficulty),
    progress ? uiText(progress) : ""].filter(Boolean).join(" · ");
}

function refreshProblemLinks() {
  document.querySelectorAll("[data-open-problem]").forEach((button) => {
    const problem = PROBLEM_REFERENCES.find((item) => problemKey(item) === button.dataset.openProblem);
    if (!problem) return;
    const label = problemLinkLabel(problem);
    button.setAttribute("aria-label", label);
    button.title = label;
    const progress = state.problemProgress[problemKey(problem)];
    if (progress) button.dataset.progress = progress;
    else delete button.dataset.progress;
  });
  document.querySelectorAll("[data-related-marked]").forEach((count) => {
    const keys = count.dataset.relatedMarked.split(" ");
    count.textContent = keys.filter((key) => state.problemProgress[key]).length;
  });
}

function problemLink(problem) {
  const key = problemKey(problem);
  const progress = state.problemProgress[key];
  const label = problemLinkLabel(problem);
  return `<a class="problem-chip" href="${deepLink("problem", key)}" target="_blank" rel="noopener" data-open-problem="${key}" data-difficulty="${problem.difficulty}"${progress ? ` data-progress="${progress}"` : ""} aria-label="${label}" title="${label}">${problem.problemNumber}</a>`;
}

function relatedProblemTable(problems) {
  const exams = [...new Set(problems.map((problem) => problem.exam))].sort();
  const years = [...new Set(problems.map((problem) => problem.year))].sort((a, b) => a - b);
  const keys = problems.map(problemKey);
  const difficulties = DIFFICULTY_ORDER.filter((level) => problems.some((problem) => problem.difficulty === level));
  return `
    <p class="related-summary">
      ${problems.length} ${uiText("problems")} · ${uiText("marked")}: <span data-related-marked="${keys.join(" ")}">${keys.filter((key) => state.problemProgress[key]).length}</span>
    </p>
    <div class="related-table-wrap">
      <table class="related-table">
        <thead>
          <tr><th scope="col">${uiText("year")}</th>${exams.map((exam) => `<th scope="col">${exam}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${years.map((year) => `
            <tr>
              <th scope="row">${year}</th>
              ${exams.map((exam) => {
                const cell = problems.filter((problem) => problem.year === year && problem.exam === exam)
                  .sort((a, b) => a.problemNumber - b.problemNumber);
                return `<td>${cell.length ? cell.map(problemLink).join("") : `<span class="related-empty" aria-hidden="true">–</span>`}</td>`;
              }).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <ul class="difficulty-legend" aria-label="${uiText("difficultyLegend")}">
      ${difficulties.map((level) => `<li><span class="legend-swatch" data-difficulty="${level}" aria-hidden="true"></span>${difficultyText(level)}</li>`).join("")}
      <li><span class="legend-swatch legend-marked" aria-hidden="true"></span>${uiText("marked")}</li>
    </ul>
  `;
}

async function openProblemInExplorer(key) {
  const problem = PROBLEM_REFERENCES.find((item) => problemKey(item) === key);
  if (!problem) return;
  state.problemMode = "full";
  state.examYear = String(problem.year);
  $("#examYear").value = state.examYear;
  populateExamPapers();
  state.examPaper = problem.exam;
  $("#examPaper").value = problem.exam;
  if (state.problemProgressFilter !== "all") {
    state.problemProgressFilter = "all";
    $("#problemProgressFilter").value = "all";
  }
  setActiveView("problems");
  await renderProblems();
  const target = $(`#problemList [data-problem-key="${key}"]`);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  target.classList.add("problem-highlight");
  target.focus({ preventScroll: true });
  setTimeout(() => target.classList.remove("problem-highlight"), 1600);
}

function problemCard(problem, statement = null) {
  const tags = problem.conceptIds.map((id) => conceptById.get(id)).filter(Boolean);
  return `
    <article class="problem-card" data-problem-key="${problemKey(problem)}" tabindex="-1">
      <h3 class="problem-topline">
        <strong>${problem.year} ${problem.exam} #${problem.problemNumber}</strong>
        <span>${difficultyText(problem.difficulty)}</span>
      </h3>
      ${problemProgressControl(problemKey(problem))}
      ${statement ? `
        <div class="problem-statement" lang="en">${statement.statementHtml}</div>
        <ol class="problem-choices" type="A" lang="en">
          ${statement.choices.map((choice) => `<li>${choice}</li>`).join("")}
        </ol>
      ` : problem.noteEn && problem.noteZh ? `<p>${textPair(problem.noteZh, linkGlossaryTerms(problem.noteEn))}</p>` : ""}
      <div class="tags">${tags.map((tag) => `<a class="concept-tag" href="${deepLink("concept", tag.id)}" target="_blank" rel="noopener">${textPair(tag.zh, tag.en)}</a>`).join("")}</div>
      ${problemVocabulary(problem)}
      <div class="card-actions">
        <a class="icon-action" href="${problem.sourceUrl}" target="_blank" rel="noreferrer" aria-label="${uiText("openReference")}" title="${uiText("openReference")}">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
          </svg>
        </a>
      </div>
    </article>
  `;
}

function populateFilters() {
  const conceptFilter = $("#conceptFilter");
  const yearFilter = $("#yearFilter");
  const examFilter = $("#examFilter");
  const difficultyFilter = $("#difficultyFilter");
  const glossaryConceptFilter = $("#glossaryConceptFilter");
  const conceptMasteryFilter = $("#conceptMasteryFilter");
  const glossaryMasteryFilter = $("#glossaryMasteryFilter");
  const years = [...new Set(PROBLEM_REFERENCES.map((problem) => problem.year))].sort((a, b) => b - a);
  const exams = [...new Set(PROBLEM_REFERENCES.map((problem) => problem.exam))].sort();
  const difficulties = [...new Set(PROBLEM_REFERENCES.map((problem) => problem.difficulty))].sort();
  const activeConcept = conceptById.get(state.activeConceptId);
  conceptFilter.innerHTML = `
    <option value="all">${uiText("allConcepts")}</option>
    <option value="current">${uiText("currentConcept")}: ${plainTextPair(activeConcept.zh, activeConcept.en)}</option>
    ${allConcepts().map((concept) => `<option value="${concept.id}">${plainTextPair(concept.zh, concept.en)}</option>`).join("")}
  `;
  conceptFilter.value = state.problemConcept;
  glossaryConceptFilter.innerHTML = `
    <option value="all">${uiText("allConcepts")}</option>
    ${allConcepts().map((concept) => `<option value="${concept.id}">${plainTextPair(concept.zh, concept.en)}</option>`).join("")}
  `;
  glossaryConceptFilter.value = state.glossaryConcept;
  conceptMasteryFilter.innerHTML = `
    <option value="all">${uiText("allMastery")}</option>
    <option value="mastered">${uiText("masteredOnly")}</option>
    <option value="unmastered">${uiText("unmasteredOnly")}</option>
  `;
  conceptMasteryFilter.value = state.conceptMastery;
  glossaryMasteryFilter.innerHTML = `
    <option value="all">${uiText("allMastery")}</option>
    <option value="mastered">${uiText("masteredOnly")}</option>
    <option value="unmastered">${uiText("unmasteredOnly")}</option>
  `;
  glossaryMasteryFilter.value = state.glossaryMastery;
  yearFilter.innerHTML = `<option value="all">${uiText("allYears")}</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
  examFilter.innerHTML = `<option value="all">${uiText("allExams")}</option>${exams.map((exam) => `<option value="${exam}">${exam}</option>`).join("")}`;
  difficultyFilter.innerHTML = `<option value="all">${uiText("allDifficulties")}</option>${difficulties.map((difficulty) => `<option value="${difficulty}">${difficultyText(difficulty)}</option>`).join("")}`;
  yearFilter.value = state.year;
  examFilter.value = state.exam;
  difficultyFilter.value = state.difficulty;
  $("#examYear").innerHTML = years.map((year) => `<option value="${year}">${year}</option>`).join("");
  $("#examYear").value = state.examYear;
  populateExamPapers();
}

function populateExamPapers() {
  const exams = [...new Set(PROBLEM_REFERENCES
    .filter((problem) => String(problem.year) === state.examYear)
    .map((problem) => problem.exam))].sort();
  if (!exams.includes(state.examPaper)) state.examPaper = exams[0];
  $("#examPaper").innerHTML = exams.map((exam) => `<option value="${exam}">${exam}</option>`).join("");
  $("#examPaper").value = state.examPaper;
}

function renderProgressOverview() {
  const isExam = state.problemMode !== "filters";
  const year = isExam ? state.examYear : state.year;
  const exam = isExam ? state.examPaper : state.exam;
  const summary = summarizeProgress(progressScope(PROBLEM_REFERENCES, year, exam), state.problemProgress);
  $("#progressOverviewHeading").textContent = uiText("progressOverview");
  $("#progressScope").textContent = `${year === "all" ? uiText("allYears") : year} · ${exam === "all" ? uiText("allExams") : exam}`;
  const openStatuses = new Set([...document.querySelectorAll("[data-summary-status][open]")]
    .map((element) => element.dataset.summaryStatus));
  $("#progressTotals").innerHTML = `
    <span class="progress-marked"><strong>${summary.marked} / ${summary.total}</strong><span>${textPair(UI_TEXT.markedProblems.zh, UI_TEXT.markedProblems.en)}</span></span>
    <span class="progress-unmarked">${summary.unmarked} ${uiText("unmarkedProgress")}</span>
  `;
  $("#progressMeter").max = summary.total || 1;
  $("#progressMeter").value = summary.marked;
  $("#progressBreakdown").innerHTML = summary.statuses.map((entry) => `
    <details class="progress-status-card" data-summary-status="${entry.status}" ${openStatuses.has(entry.status) ? "open" : ""}>
      <summary title="${uiText(entry.status)}">
        <span class="progress-status-label">${textPair(UI_TEXT[PROGRESS_LABEL_KEYS[entry.status]].zh, UI_TEXT[PROGRESS_LABEL_KEYS[entry.status]].en)}</span>
        <strong class="progress-status-count">${entry.count}</strong>
        <svg class="steps-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      ${entry.count ? `<ul>${entry.papers.map((paper) => `
        <li><strong>${paper.year} ${paper.exam}</strong>: ${paper.problemNumbers.map((number) => `#${number}`).join(", ")}</li>
      `).join("")}</ul>` : `<p class="muted">${uiText("noMarkedStatus")}</p>`}
    </details>
  `).join("");
  $("#problemProgressFilter").innerHTML = `
    <option value="all">${uiText("allProgress")} (${summary.total})</option>
    <option value="unmarked">${uiText("unmarkedProgress")} (${summary.unmarked})</option>
    ${summary.statuses.map((entry) => `<option value="${entry.status}">${uiText(entry.status)} (${entry.count})</option>`).join("")}
  `;
  $("#problemProgressFilter").value = state.problemProgressFilter;
}

function downloadProgress() {
  let url;
  const link = document.createElement("a");
  $("#progressExportError").hidden = true;
  try {
    const snapshot = exportProgress(PROBLEM_REFERENCES, state.problemProgress, allConcepts());
    url = URL.createObjectURL(new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" }));
    link.href = url;
    link.download = `amc10-progress-${snapshot.exportedAt.slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error("Unable to export problem progress.", error);
    $("#progressExportError").textContent = uiText("exportProgressError");
    $("#progressExportError").hidden = false;
  } finally {
    link.remove();
    if (url) setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

let problemRenderVersion = 0;
const examStatements = new Map();

async function renderExamStatements(problems, version) {
  const year = Number(state.examYear);
  const exam = state.examPaper;
  const paper = `${year}${exam.slice(-1)}`;
  const sourceUrl = `https://live.poshenloh.com/past-contests/amc10/${paper}`;
  const list = $("#problemList");
  list.setAttribute("aria-busy", "true");
  list.innerHTML = `<p class="empty-state" role="status">${uiText("loadingExam")}</p>`;
  $("#examAttribution").textContent = uiText("examAttribution");
  try {
    let data = examStatements.get(paper);
    if (!data) {
      const response = await fetch(`assets/exams/${paper}.json`);
      if (!response.ok) throw new Error(`Exam request failed: HTTP ${response.status}`);
      data = await response.json();
      if (data.year !== year || data.exam !== exam || data.problems?.length !== 25
        || !data.problems.every((problem, index) =>
          problem.problemNumber === index + 1 && typeof problem.statementHtml === "string"
          && problem.choices?.length === 5 && problem.choices.every((choice) => typeof choice === "string"))) {
        throw new Error(`Invalid exam statements for ${paper}`);
      }
      examStatements.set(paper, data);
    }
    if (version !== problemRenderVersion) return;
    list.innerHTML = problems.map((problem) => problemCard(problem, data.problems[problem.problemNumber - 1])).join("");
    wireProblemAndGlossaryLinks(list);
    typesetMath(list);
  } catch (error) {
    console.error(`Unable to load exam statements for ${paper}.`, error);
    if (version !== problemRenderVersion) return;
    list.innerHTML = `
      <div class="empty-state" role="alert">
        <p>${uiText("examLoadError")}</p>
        <button type="button" id="retryExam">${uiText("retry")}</button>
        <a href="${sourceUrl}" target="_blank" rel="noreferrer">${uiText("openExamSource")}</a>
      </div>
    `;
    $("#retryExam").addEventListener("click", renderProblems);
  } finally {
    if (version === problemRenderVersion) list.setAttribute("aria-busy", "false");
  }
}

function renderProblems() {
  renderProgressOverview();
  const version = ++problemRenderVersion;
  const isExam = state.problemMode !== "filters";
  const isFullExam = state.problemMode === "full";
  $("#problemFilters").hidden = isExam;
  $("#examControls").hidden = !isExam;
  $("#examSummary").hidden = !isExam;
  $("#examAttribution").hidden = !isFullExam;
  $("#problemList").classList.toggle("full-exam", isFullExam);
  $("#problemList").setAttribute("aria-busy", "false");
  window.MathJax?.typesetClear?.([$("#problemList")]);
  document.querySelectorAll("[data-problem-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.problemMode === state.problemMode));
  });
  const selectedConceptId = state.problemConcept === "current" ? state.activeConceptId : state.problemConcept;
  const problems = PROBLEM_REFERENCES.filter((problem) => {
    const progress = state.problemProgress[problemKey(problem)];
    if (state.problemProgressFilter !== "all"
      && (state.problemProgressFilter === "unmarked" ? Boolean(progress) : progress !== state.problemProgressFilter)) return false;
    if (isExam) return String(problem.year) === state.examYear && problem.exam === state.examPaper;
    return (selectedConceptId === "all" || problem.conceptIds.includes(selectedConceptId))
      && (state.year === "all" || String(problem.year) === state.year)
      && (state.exam === "all" || problem.exam === state.exam)
      && (state.difficulty === "all" || problem.difficulty === state.difficulty);
  });
  if (isExam) problems.sort((a, b) => a.problemNumber - b.problemNumber);
  $("#examAttribution").hidden = !isFullExam || !problems.length;
  $("#problemCount").textContent = isExam
    ? `${state.examYear} ${state.examPaper} · ${problems.length} / 25 ${uiText("problems")}`
    : `${problems.length} / ${PROBLEM_REFERENCES.length}`;
  $("#examSummary").textContent = uiText(isFullExam ? "fullExamSummary" : "examOrder");
  if (isFullExam && problems.length) {
    return renderExamStatements(problems, version);
  }
  $("#problemList").innerHTML = problems.length
    ? problems.map((problem) => problemCard(problem)).join("")
    : `<p class="empty-state">${uiText("noProblems")}</p>`;
  wireProblemAndGlossaryLinks($("#problemList"));
  typesetMath($("#problemList"));
}

function deepLink(name, value) {
  return `?${new URLSearchParams({ [name]: value })}`;
}

function problemVocabulary(problem) {
  const terms = (PROBLEM_VOCABULARY[problemKey(problem)] || []).map((name) => glossaryByName.get(name)).filter(Boolean);
  if (!terms.length) return "";
  return `
    <div class="problem-vocab">
      <span class="problem-vocab-label">${uiText("problemVocabulary")}</span>
      <ul class="vocab-chips compact" aria-label="${uiText("problemVocabulary")}">
        ${terms.map((term) => {
          const slug = slugifyTerm(term.en);
          const isMastered = state.masteredGlossary.has(term.en);
          return `<li><a class="vocab-chip${isMastered ? " mastered" : ""}" href="${deepLink("term", slug)}" target="_blank" rel="noopener" data-vocab-term="${slug}" aria-describedby="glossary-tooltip">${isMastered ? `<span class="vocab-check" aria-label="${uiText("mastered")}">✓</span>` : ""}${textPair(term.zh, term.en)}</a></li>`;
        }).join("")}
      </ul>
    </div>
  `;
}

function relatedVocabularyList(terms, conceptId) {
  if (!terms.length) return "";
  const mastered = terms.filter((term) => state.masteredGlossary.has(term.en)).length;
  return `
    <p class="related-summary">${terms.length} ${uiText("terms")} · ${uiText("mastered")}: ${mastered}</p>
    <ul class="vocab-chips">
      ${terms.map((term) => {
        const isMastered = state.masteredGlossary.has(term.en);
        return `
          <li>
            <a class="vocab-chip${isMastered ? " mastered" : ""}" href="${deepLink("term", slugifyTerm(term.en))}" target="_blank" rel="noopener" data-vocab-term="${slugifyTerm(term.en)}" aria-describedby="glossary-tooltip">
              ${isMastered ? `<span class="vocab-check" aria-label="${uiText("mastered")}">✓</span>` : ""}
              ${textPair(term.zh, term.en)}
            </a>
          </li>
        `;
      }).join("")}
    </ul>
    <a class="text-button" href="${deepLink("glossary-concept", conceptId)}" target="_blank" rel="noopener">${uiText("viewAllInGlossary")}</a>
  `;
}

function glossaryCard(term) {
  const concepts = term.conceptIds.map((id) => conceptById.get(id)).filter(Boolean);
  const relatedProblemCount = PROBLEM_REFERENCES.filter((problem) =>
    problem.conceptIds.some((id) => term.conceptIds.includes(id))
  ).length;
  return `
    <article class="glossary-card" id="glossary-${slugifyTerm(term.en)}">
      <p class="glossary-category">${textPair(term.categoryZh, term.categoryEn)}</p>
      <h3>${textPair(term.zh, term.en)}</h3>
      <p>${textPair(term.noteZh, linkGlossaryTerms(term.noteEn))}</p>
      <div class="glossary-mastery-action">
        <span class="glossary-action-label">${uiText("masteryStatus")}</span>
        <button class="mastery glossary-mastery ${state.masteredGlossary.has(term.en) ? "complete" : ""}" data-glossary-mastery="${term.en}">
          ${state.masteredGlossary.has(term.en) ? `✓ ${uiText("mastered")}` : uiText("markGlossaryMastered")}
        </button>
      </div>
      <div class="glossary-related">
        <span class="glossary-action-label">${uiText("relatedConcepts")}</span>
        <div class="tags">${concepts.map((concept) => `<a class="concept-tag" href="${deepLink("concept", concept.id)}" target="_blank" rel="noopener">${textPair(concept.zh, concept.en)}</a>`).join("")}</div>
        <a class="text-button" href="${deepLink("problems-concept", term.conceptIds[0])}" target="_blank" rel="noopener">${uiText("relatedProblems")} (${relatedProblemCount})</a>
      </div>
    </article>
  `;
}

const MAP_ICONS = {
  topic: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg>',
  concept: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" /></svg>',
  open: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" /></svg>'
};

function renderTopicMap() {
  const tree = $("#topicMapTree");
  if (!tree) return;
  const query = state.mapSearch.trim().toLowerCase();
  const matches = (...values) => !query || values.join(" ").toLowerCase().includes(query);
  let conceptCount = 0;
  const termSlugs = new Set();
  const topicsHtml = TOPICS.map((topic) => {
    const topicMatches = matches(topic.en, topic.zh);
    const concepts = topic.concepts.map((concept) => {
      const conceptMatches = topicMatches || matches(concept.en, concept.zh);
      const terms = GLOSSARY.filter((term) => term.conceptIds.includes(concept.id)
        && (conceptMatches || matches(term.en, term.zh)));
      if (!conceptMatches && !terms.length) return "";
      conceptCount += 1;
      terms.forEach((term) => termSlugs.add(slugifyTerm(term.en)));
      const nodeId = `concept:${concept.id}`;
      const open = query || !state.mapCollapsed.has(nodeId);
      const mastered = state.mastered.has(concept.id);
      return `
        <li>
          <details class="map-node map-concept"${open ? " open" : ""} data-map-node="${nodeId}">
            <summary>
              <span class="map-icon">${MAP_ICONS.concept}</span>
              <span class="map-label">${textPair(concept.zh, concept.en)}</span>
              ${mastered ? `<span class="status-dot" title="${uiText("mastered")}">✓</span>` : ""}
              <span class="map-count">${terms.length}</span>
              <a class="map-open" href="${deepLink("concept", concept.id)}" target="_blank" rel="noopener" data-map-concept="${concept.id}" title="${uiText("openConcept")}" aria-label="${uiText("openConcept")}: ${plainTextPair(concept.zh, concept.en)}">${MAP_ICONS.open}</a>
            </summary>
            <ul class="map-terms">
              ${terms.map((term) => {
                const slug = slugifyTerm(term.en);
                return `<li><a class="map-term${state.masteredGlossary.has(term.en) ? " mastered" : ""}" href="${deepLink("term", slug)}" target="_blank" rel="noopener" data-map-term="${slug}" data-vocab-term="${slug}">${textPair(term.zh, term.en)}</a></li>`;
              }).join("")}
            </ul>
          </details>
        </li>`;
    }).join("");
    if (!concepts.trim()) return "";
    const nodeId = `topic:${topic.id}`;
    const open = query || !state.mapCollapsed.has(nodeId);
    return `
      <li>
        <details class="map-node map-topic"${open ? " open" : ""} data-map-node="${nodeId}">
          <summary>
            <span class="map-icon">${MAP_ICONS.topic}</span>
            <span class="map-label">${textPair(topic.zh, topic.en)}</span>
            <span class="map-count">${topic.concepts.length}</span>
          </summary>
          <ul class="map-branch">${concepts}</ul>
        </details>
      </li>`;
  }).join("");
  $("#mapCount").textContent = plainTextPair(
    `${conceptCount} ${UI_TEXT.mapConcepts.zh} · ${termSlugs.size} ${UI_TEXT.mapTerms.zh}`,
    `${conceptCount} ${UI_TEXT.mapConcepts.en} · ${termSlugs.size} ${UI_TEXT.mapTerms.en}`
  );
  tree.innerHTML = topicsHtml.trim()
    ? `<div class="map-root">${textPair(UI_TEXT.mapRoot.zh, UI_TEXT.mapRoot.en)}</div><ul class="map-branch map-top">${topicsHtml}</ul>`
    : `<p class="empty-state">${uiText("noMapMatches")}</p>`;
  tree.querySelectorAll("[data-map-node]").forEach((node) => {
    node.addEventListener("toggle", () => {
      if (query) return;
      if (node.open) state.mapCollapsed.delete(node.dataset.mapNode);
      else state.mapCollapsed.add(node.dataset.mapNode);
    });
  });
  wireProblemAndGlossaryLinks(tree);
}

function renderGlossary() {
  const query = state.glossarySearch.trim().toLowerCase();
  const terms = GLOSSARY.filter((term) => {
    const conceptNames = term.conceptIds.flatMap((id) => {
      const concept = conceptById.get(id);
      return concept ? [concept.zh, concept.en] : [];
    });
    const haystack = [term.categoryZh, term.categoryEn, term.zh, term.en, term.noteZh, term.noteEn, ...conceptNames].join(" ").toLowerCase();
    return (!query || haystack.includes(query))
      && (state.glossaryConcept === "all" || term.conceptIds.includes(state.glossaryConcept))
      && (state.glossaryMastery === "all"
        || (state.glossaryMastery === "mastered" && state.masteredGlossary.has(term.en))
        || (state.glossaryMastery === "unmastered" && !state.masteredGlossary.has(term.en)));
  });
  $("#glossaryList").innerHTML = terms.length
    ? terms.map(glossaryCard).join("")
    : `<p class="empty-state">${uiText("noGlossaryTerms")}</p>`;
  $("#glossaryCount").textContent = `${terms.length} / ${GLOSSARY.length}`;
  wireProblemAndGlossaryLinks($("#glossaryList"));
  typesetMath($("#glossaryList"));
}

function wireProblemAndGlossaryLinks(container) {
  container.querySelectorAll(".progress-option").forEach((option) => {
    option.addEventListener("keydown", (event) => {
      if (event.key === "Escape") option.dataset.tooltipDismissed = "true";
    });
    const resetTooltip = () => delete option.dataset.tooltipDismissed;
    option.addEventListener("mouseenter", resetTooltip);
    option.addEventListener("focusin", resetTooltip);
  });
  container.querySelectorAll(".problem-progress input").forEach((input) => {
    input.disabled = accountPanel?.editingPaused || false;
    input.addEventListener("change", () => {
      const control = input.closest("[data-progress-key]");
      const key = control.dataset.progressKey;
      if (accountPanel?.signedIn) {
        accountPanel.mark(key, input.value);
        return;
      }
      const updated = { ...state.problemProgress, [key]: input.value };
      try {
        localStorage.setItem("amc10-problem-progress", JSON.stringify(updated));
        problemProgressStorageError = false;
      } catch (error) {
        console.error("Unable to save problem progress.", error);
        problemProgressStorageError = true;
      }
      state.problemProgress = updated;
      document.querySelectorAll("[data-progress-key]").forEach((instance) => {
        if (instance.dataset.progressKey !== key) return;
        updateProgressControl(instance, input.value);
      });
      renderProblemProgressError();
      renderProgressOverview();
      refreshProblemLinks();
      if (state.problemProgressFilter !== "all") {
        renderProblems();
        $("#problemProgressFilter").focus();
      }
    });
  });
  container.querySelectorAll("[data-glossary-concept]").forEach((button) => {
    button.addEventListener("click", () => showConceptGlossary(button.dataset.glossaryConcept));
  });
  container.querySelectorAll("[data-problems-concept]").forEach((button) => {
    button.addEventListener("click", () => showConceptProblems(button.dataset.problemsConcept));
  });
  container.querySelectorAll("[data-vocab-term]").forEach((button) => {
    const term = glossaryBySlug.get(button.dataset.vocabTerm);
    if (!term) return;
    button.addEventListener("mouseenter", () => showGlossaryTooltip(button, term));
    button.addEventListener("mouseleave", () => scheduleGlossaryTooltipHide());
    button.addEventListener("focus", () => showGlossaryTooltip(button, term));
    button.addEventListener("blur", () => scheduleGlossaryTooltipHide());
    button.addEventListener("click", () => hideGlossaryTooltip());
  });
  container.querySelectorAll("[data-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeConceptId = button.dataset.concept;
      render();
      setActiveView("study");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  container.querySelectorAll("[data-glossary-mastery]").forEach((button) => {
    button.addEventListener("click", () => {
      const termId = button.dataset.glossaryMastery;
      const mastered = !state.masteredGlossary.has(termId);
      if (mastered) state.masteredGlossary.add(termId);
      else state.masteredGlossary.delete(termId);
      saveLocalMastery();
      render();
      accountPanel?.setMastery("glossary", termId, mastered);
    });
  });
  wireGlossaryTooltips(container);
}

function showConceptGlossary(conceptId) {
  state.glossaryConcept = conceptId;
  render();
  setActiveView("glossary");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showConceptProblems(conceptId) {
  state.activeConceptId = conceptId;
  state.problemMode = "filters";
  state.problemConcept = "current";
  render();
  setActiveView("problems");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const problem = params.get("problem");
  const term = params.get("term");
  const problemsConcept = params.get("problems-concept");
  const glossaryConcept = params.get("glossary-concept");
  const concept = params.get("concept");
  if (problem && PROBLEM_REFERENCES.some((item) => problemKey(item) === problem)) openProblemInExplorer(problem);
  else if (term && glossaryBySlug.has(term)) jumpToGlossaryTerm(term);
  else if (problemsConcept && conceptById.has(problemsConcept)) showConceptProblems(problemsConcept);
  else if (glossaryConcept && conceptById.has(glossaryConcept)) showConceptGlossary(glossaryConcept);
  else if (concept && conceptById.has(concept)) {
    state.activeConceptId = concept;
    render();
    setActiveView("study");
  }
  else return false;
  return true;
}

function applyDeepLinkWhenVisible() {
  if (document.body.dataset.authGate !== "locked") {
    applyDeepLink();
    return;
  }
  const observer = new MutationObserver(() => {
    if (document.body.dataset.authGate === "locked") return;
    observer.disconnect();
    applyDeepLink();
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-auth-gate"] });
}

function saveLocalMastery() {
  try {
    localStorage.setItem("amc10-mastered", JSON.stringify([...state.mastered]));
    localStorage.setItem("amc10-mastered-glossary", JSON.stringify([...state.masteredGlossary]));
  } catch (error) {
    console.error("Unable to save mastery in this browser.", error);
  }
}

function jumpToGlossaryTerm(slug) {
  state.glossarySearch = "";
  state.glossaryConcept = "all";
  state.glossaryMastery = "all";
  const searchInput = $("#glossarySearch");
  if (searchInput) searchInput.value = "";
  render();
  setActiveView("glossary");
  requestAnimationFrame(() => {
    const target = document.getElementById(`glossary-${slug}`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("glossary-highlight");
    setTimeout(() => target.classList.remove("glossary-highlight"), 1600);
  });
}

function setActiveView(view) {
  state.activeView = view;
  const isStudy = view === "study";
  $("#studySidebar").hidden = !isStudy;
  $(".app-shell").classList.toggle("full-width", !isStudy);
  document.querySelectorAll("[data-view]").forEach((tab) => {
    const isActive = tab.dataset.view === view;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    $(`#${tab.getAttribute("aria-controls")}`).hidden = !isActive;
  });
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let themeSaveError = false;

function renderThemeControl() {
  const dark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : systemTheme.matches;
  $("#themeToggle").setAttribute("aria-label", uiText("darkTheme"));
  $("#themeToggle").title = uiText(dark ? "switchToLight" : "switchToDark");
  $("#themeToggle").setAttribute("aria-pressed", String(dark));
  $("#themeError").hidden = !themeSaveError;
  $("#themeError").textContent = uiText("themeSaveError");
}

function wireControls() {
  $("#exportProgress").addEventListener("click", downloadProgress);
  systemTheme.addEventListener("change", renderThemeControl);
  $("#themeToggle").addEventListener("click", () => {
    const theme = $("#themeToggle").getAttribute("aria-pressed") === "true" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("amc10-theme", theme);
      themeSaveError = false;
    } catch (error) {
      console.error("Unable to save the selected theme.", error);
      themeSaveError = true;
    }
    renderThemeControl();
  });
  $("#problemProgressFilter").addEventListener("change", (event) => {
    state.problemProgressFilter = event.target.value;
    renderProblems();
  });
  document.querySelectorAll("[data-problem-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.problemMode = button.dataset.problemMode;
      renderProblems();
    });
  });
  $("#examYear").addEventListener("change", (event) => {
    state.examYear = event.target.value;
    populateExamPapers();
    renderProblems();
  });
  $("#examPaper").addEventListener("change", (event) => {
    state.examPaper = event.target.value;
    renderProblems();
  });
  document.querySelectorAll("[data-view]").forEach((tab) => {
    tab.addEventListener("click", () => setActiveView(tab.dataset.view));
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      try {
        localStorage.setItem("amc10-language", state.language);
      } catch (error) {
        console.error("Unable to save the selected language.", error);
      }
      render();
    });
  });
  $("#mapSearch").addEventListener("input", (event) => {
    state.mapSearch = event.target.value;
    renderTopicMap();
  });
  $("#mapExpandAll").addEventListener("click", () => {
    state.mapCollapsed.clear();
    renderTopicMap();
  });
  $("#mapCollapseAll").addEventListener("click", () => {
    TOPICS.forEach((topic) => {
      state.mapCollapsed.add(`topic:${topic.id}`);
      topic.concepts.forEach((concept) => state.mapCollapsed.add(`concept:${concept.id}`));
    });
    renderTopicMap();
  });
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderTopicNav();
  });
  $("#conceptMasteryFilter").addEventListener("change", (event) => {
    state.conceptMastery = event.target.value;
    renderTopicNav();
  });
  $("#conceptFilter").addEventListener("change", (event) => {
    state.problemConcept = event.target.value;
    renderProblems();
  });
  $("#yearFilter").addEventListener("change", (event) => {
    state.year = event.target.value;
    renderProblems();
  });
  $("#examFilter").addEventListener("change", (event) => {
    state.exam = event.target.value;
    renderProblems();
  });
  $("#difficultyFilter").addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    renderProblems();
  });
  $("#glossarySearch").addEventListener("input", (event) => {
    state.glossarySearch = event.target.value;
    renderGlossary();
  });
  $("#glossaryConceptFilter").addEventListener("change", (event) => {
    state.glossaryConcept = event.target.value;
    renderGlossary();
  });
  $("#glossaryMasteryFilter").addEventListener("change", (event) => {
    state.glossaryMastery = event.target.value;
    renderGlossary();
  });
}

function render() {
  renderStaticInterface();
  renderProblemProgressError();
  renderTopicNav();
  renderConcept();
  populateFilters();
  renderProblems();
  renderGlossary();
  renderTopicMap();
  accountPanel?.render();
}

wireControls();
accountPanel = new AccountPanel({
  getLanguage: () => state.language,
  validKeys: PROBLEM_REFERENCES.map(problemKey),
  readMastery: () => ({ concept: [...state.mastered], glossary: [...state.masteredGlossary] }),
  onMastery: (sets) => {
    const same = (a, b) => a.size === b.size && [...a].every((item) => b.has(item));
    if (same(sets.concept, state.mastered) && same(sets.glossary, state.masteredGlossary)) return;
    state.mastered = sets.concept;
    state.masteredGlossary = sets.glossary;
    saveLocalMastery();
    render();
  },
  onProgress: (selections) => {
    const changed = Object.keys(state.problemProgress).length !== Object.keys(selections).length
      || Object.entries(selections).some(([key, value]) => state.problemProgress[key] !== value);
    state.problemProgress = selections;
    if (!changed) return;
    document.querySelectorAll("[data-progress-key]").forEach((control) => {
      const selected = selections[control.dataset.progressKey];
      updateProgressControl(control, selected);
    });
    renderProgressOverview();
    refreshProblemLinks();
    if (state.problemProgressFilter !== "all") renderProblems();
  }
});
accountPanel.wire();
render();
setActiveView(state.activeView);
accountPanel.start();
applyDeepLinkWhenVisible();
