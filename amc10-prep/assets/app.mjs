import { TOPICS, PROBLEM_REFERENCES, GLOSSARY, allConcepts } from "./data.mjs?v=20260923-7";

const state = {
  language: localStorage.getItem("amc10-language") || "both",
  activeView: "study",
  activeConceptId: allConcepts()[0].id,
  search: "",
  problemConcept: "all",
  year: "all",
  exam: "all",
  difficulty: "all",
  glossarySearch: "",
  glossaryConcept: "all",
  mastered: new Set(JSON.parse(localStorage.getItem("amc10-mastered") || "[]"))
};

const conceptById = new Map(allConcepts().map((concept) => [concept.id, concept]));

const $ = (selector) => document.querySelector(selector);

const UI_TEXT = {
  languageLabel: { en: "Language", zh: "语言" },
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
  searchTopics: { en: "Search topics", zh: "搜索知识点" },
  topicSearchPlaceholder: { en: "topic, formula, keyword...", zh: "知识点、公式、关键词..." },
  copyrightHeading: { en: "Copyright-safe problem references.", zh: "尊重版权的真题索引。" },
  copyrightCopy: {
    en: "This guide does not reproduce AMC problem text. It stores year, version, problem metadata, concept tags, and source links so licensed or official text can be consulted separately.",
    zh: "本指南不转载 AMC 题目正文，仅保存年份、版本、题号、知识点标签和来源链接，以便另行查阅获授权或官方题目。"
  },
  problemEyebrow: { en: "Past AMC 10 references", zh: "历年 AMC 10 真题索引" },
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
  relatedProblems: { en: "Related problems", zh: "相关真题" },
  markMastered: { en: "Mark mastered", zh: "标记掌握" },
  mastered: { en: "Mastered", zh: "已掌握" },
  openReference: { en: "View problem reference", zh: "查看题目索引" },
  allConcepts: { en: "All concepts", zh: "所有知识点" },
  currentConcept: { en: "Current", zh: "当前知识点" },
  allYears: { en: "All years", zh: "所有年份" },
  allExams: { en: "All exams", zh: "所有试卷" },
  allDifficulties: { en: "All difficulties", zh: "所有难度" },
  filterByConcept: { en: "Filter by concept", zh: "按知识点筛选" },
  filterByYear: { en: "Filter by year", zh: "按年份筛选" },
  filterByExam: { en: "Filter by exam", zh: "按试卷筛选" },
  filterByDifficulty: { en: "Filter by difficulty", zh: "按难度筛选" },
  filterGlossaryByConcept: { en: "Filter vocabulary by concept", zh: "按概念筛选词汇" },
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

function renderStaticInterface() {
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
      return !query || haystack.includes(query);
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
  if (state.language === "zh") return listItems(itemsZh);
  if (state.language === "en") return listItems(itemsEn);
  return `<ul>${itemsEn.map((item, index) => `<li>${textPair(itemsZh[index], item)}</li>`).join("")}</ul>`;
}

function formulaItems(concept) {
  return `<ol class="formula-list">${concept.formulas.map((formula, index) => {
    const note = concept.formulaNotes[index];
    return `
      <li class="formula-item">
        <div class="formula-expression"><span class="math-formula">\\(${formula}\\)</span></div>
        <p class="formula-explanation">${textPair(note.explanationZh, note.explanationEn)}</p>
        ${note.stepsEn ? `
          <div class="formula-steps">
            <strong>${uiText("stepByStep")}</strong>
            <ol>
              ${note.stepsEn.map((step, stepIndex) => `<li>${textPair(note.stepsZh[stepIndex], step)}</li>`).join("")}
            </ol>
          </div>
        ` : ""}
        <div class="formula-example">
          <strong>${uiText("workedExample")}</strong>
          <div>${textPair(note.exampleZh, note.exampleEn)}</div>
        </div>
      </li>
    `;
  }).join("")}</ol>`;
}

function typesetMath() {
  if (!window.MathJax?.startup?.promise) return;
  window.MathJax.startup.promise
    .then(() => {
      window.MathJax.typesetClear?.([$("#conceptView")]);
      return window.MathJax.typesetPromise([$("#conceptView")]);
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
        <p>${textPair(concept.explanationZh, concept.explanationEn)}</p>
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
        <p>${textPair(concept.exampleZh, concept.exampleEn)}</p>
      </section>
      <section class="card wide">
        <h3>${uiText("readinessChecklist")}</h3>
        ${bilingualListItems(concept.checklistZh, concept.checklistEn)}
      </section>
      <section class="card wide">
        <h3>${uiText("relatedReferences")} (${related.length})</h3>
        <div class="inline-problems">
          ${related.length ? related.map(problemCard).join("") : `<p class="empty-state">${uiText("noRelatedReferences")}</p>`}
        </div>
      </section>
      <section class="card wide">
        <h3>${uiText("relatedGlossary")} (${relatedTerms.length})</h3>
        <div class="glossary-grid">
          ${relatedTerms.map(glossaryCard).join("")}
        </div>
      </section>
    </div>
  `;
  typesetMath();
  $("#masteryToggle").addEventListener("click", () => {
    if (state.mastered.has(concept.id)) state.mastered.delete(concept.id);
    else state.mastered.add(concept.id);
    localStorage.setItem("amc10-mastered", JSON.stringify([...state.mastered]));
    render();
  });
  wireProblemAndGlossaryLinks($("#conceptView"));
}

function problemCard(problem) {
  const tags = problem.conceptIds.map((id) => conceptById.get(id)).filter(Boolean);
  return `
    <article class="problem-card">
      <div class="problem-topline">
        <strong>${problem.year} ${problem.exam} #${problem.problemNumber}</strong>
        <span>${difficultyText(problem.difficulty)}</span>
      </div>
      <p>${textPair(problem.noteZh, problem.noteEn)}</p>
      <div class="tags">${tags.map((tag) => `<button data-concept="${tag.id}">${textPair(tag.zh, tag.en)}</button>`).join("")}</div>
      <div class="card-actions">
        <a href="${problem.sourceUrl}" target="_blank" rel="noreferrer">${uiText("openReference")}</a>
        <button class="text-button" data-glossary-concept="${problem.conceptIds[0]}">${uiText("relatedVocabulary")}</button>
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
  yearFilter.innerHTML = `<option value="all">${uiText("allYears")}</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
  examFilter.innerHTML = `<option value="all">${uiText("allExams")}</option>${exams.map((exam) => `<option value="${exam}">${exam}</option>`).join("")}`;
  difficultyFilter.innerHTML = `<option value="all">${uiText("allDifficulties")}</option>${difficulties.map((difficulty) => `<option value="${difficulty}">${difficultyText(difficulty)}</option>`).join("")}`;
  yearFilter.value = state.year;
  examFilter.value = state.exam;
  difficultyFilter.value = state.difficulty;
}

function renderProblems() {
  const selectedConceptId = state.problemConcept === "current" ? state.activeConceptId : state.problemConcept;
  const problems = PROBLEM_REFERENCES.filter((problem) => {
    return (selectedConceptId === "all" || problem.conceptIds.includes(selectedConceptId))
      && (state.year === "all" || String(problem.year) === state.year)
      && (state.exam === "all" || problem.exam === state.exam)
      && (state.difficulty === "all" || problem.difficulty === state.difficulty);
  });
  $("#problemList").innerHTML = problems.length
    ? problems.map(problemCard).join("")
    : `<p class="empty-state">${uiText("noProblems")}</p>`;
  $("#problemCount").textContent = `${problems.length} / ${PROBLEM_REFERENCES.length}`;
  wireProblemAndGlossaryLinks($("#problemList"));
}

function glossaryCard(term) {
  const concepts = term.conceptIds.map((id) => conceptById.get(id)).filter(Boolean);
  const relatedProblemCount = PROBLEM_REFERENCES.filter((problem) =>
    problem.conceptIds.some((id) => term.conceptIds.includes(id))
  ).length;
  return `
    <article class="glossary-card">
      <p class="glossary-category">${textPair(term.categoryZh, term.categoryEn)}</p>
      <h3>${textPair(term.zh, term.en)}</h3>
      <p>${textPair(term.noteZh, term.noteEn)}</p>
      <div class="tags">${concepts.map((concept) => `<button data-concept="${concept.id}">${textPair(concept.zh, concept.en)}</button>`).join("")}</div>
      <button class="text-button" data-problems-concept="${term.conceptIds[0]}">${uiText("relatedProblems")} (${relatedProblemCount})</button>
    </article>
  `;
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
      && (state.glossaryConcept === "all" || term.conceptIds.includes(state.glossaryConcept));
  });
  $("#glossaryList").innerHTML = terms.length
    ? terms.map(glossaryCard).join("")
    : `<p class="empty-state">${uiText("noGlossaryTerms")}</p>`;
  $("#glossaryCount").textContent = `${terms.length} / ${GLOSSARY.length}`;
  wireProblemAndGlossaryLinks($("#glossaryList"));
}

function wireProblemAndGlossaryLinks(container) {
  container.querySelectorAll("[data-glossary-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      state.glossaryConcept = button.dataset.glossaryConcept;
      render();
      setActiveView("glossary");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  container.querySelectorAll("[data-problems-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeConceptId = button.dataset.problemsConcept;
      state.problemConcept = "current";
      render();
      setActiveView("problems");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  container.querySelectorAll("[data-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeConceptId = button.dataset.concept;
      render();
      setActiveView("study");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
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

function wireControls() {
  document.querySelectorAll("[data-view]").forEach((tab) => {
    tab.addEventListener("click", () => setActiveView(tab.dataset.view));
  });
  $("#languageMode").value = state.language;
  $("#languageMode").addEventListener("change", (event) => {
    state.language = event.target.value;
    localStorage.setItem("amc10-language", state.language);
    render();
  });
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
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
}

function render() {
  renderStaticInterface();
  renderTopicNav();
  renderConcept();
  populateFilters();
  renderProblems();
  renderGlossary();
}

wireControls();
render();
setActiveView(state.activeView);
