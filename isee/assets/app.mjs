import { TOPICS, PROBLEMS, PASSAGES, GLOSSARY, ESSAY_PROMPTS, allConcepts } from "./data.mjs?v=20261116-2";
import { LEVELS, LEVEL_BY_ID, SECTION_BY_ID, GLOSSARY_KINDS } from "./taxonomy.mjs?v=20261116-2";
import { createStore } from "./store.mjs?v=20261116-2";
import { normalizeLevel, isLevel, nearestLevel, createLevelScopes } from "./level-scope.mjs?v=20261116-2";
import { AccountPanel } from "./account.mjs?v=20261116-2";
import { attemptsFromSet } from "./cloud-mastery.mjs?v=20261116-2";
import { createI18n } from "./i18n.mjs?v=20261116-2";
import { UI_TEXT } from "./ui-text.mjs?v=20261116-2";
import { escapeHtml, createGlossaryLinker, slugifyTerm } from "./rich-text.mjs?v=20261116-2";
import { createProblemView } from "./problem-view.mjs?v=20261116-2";
import { createExplorer } from "./explorer.mjs?v=20261116-2";
import { createTestPanel } from "./test-panel.mjs?v=20261116-2";
import { createEssayPractice } from "./essay-practice.mjs?v=20261116-2";
import { sanitizeAttempts, sanitizeProgress, sanitizeIdList, summarizeProgress, answerState } from "./progress.mjs?v=20261116-2";

const LANGUAGES = ["both", "zh", "en"];
const GLOSSARY_PAGE = 60;
const RELATED_VOCABULARY_LIMIT = 24;
const MAP_TERM_LIMIT = 14;

const store = createStore();
const concepts = allConcepts();
const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
const problemById = new Map(PROBLEMS.map((problem) => [problem.id, problem]));
const validProblemIds = new Set(problemById.keys());
const validConceptIds = new Set(conceptById.keys());
const validTermNames = new Set(GLOSSARY.map((term) => term.en));
const linker = createGlossaryLinker(GLOSSARY);
const glossaryBySlug = linker.bySlug;
const glossaryByName = linker.byName;
const scopeFor = createLevelScopes({ topics: TOPICS, concepts, problems: PROBLEMS, glossary: GLOSSARY });

// Data kept in this browser. When the site is not using a signed-in account this is the only copy.
function readLocalState() {
  return {
    mastered: new Set(sanitizeIdList(store.read("mastered", []), validConceptIds)),
    masteredGlossary: new Set(sanitizeIdList(store.read("mastered-glossary", []), validTermNames)),
    progress: sanitizeProgress(store.read("problem-progress", {}), validProblemIds),
    attempts: sanitizeAttempts(store.read("problem-attempts", {}), validProblemIds),
    reviewCollection: new Set(sanitizeIdList(store.read("review-collection", []), validProblemIds))
  };
}

// Same data, in the shape the cloud sync expects (used to upload local progress on first sign-in).
function readLocalMastery() {
  const local = readLocalState();
  return {
    concept: [...local.mastered],
    glossary: [...local.masteredGlossary],
    review: [...local.reviewCollection],
    attempt: Object.entries(local.attempts).map(([id, attempt]) => `${id}:${attempt.choice}`)
  };
}

let account = null;
const savedLanguage = store.readText("language");
const state = {
  language: LANGUAGES.includes(savedLanguage) ? savedLanguage : "both",
  activeView: "study",
  activeConceptId: concepts[0].id,
  search: "",
  conceptMastery: "all",
  problemConcept: "all",
  level: normalizeLevel(store.readText("level")),
  section: "all",
  type: "all",
  difficulty: "all",
  progressFilter: "all",
  answerFilter: "all",
  reviewOnly: false,
  problemPage: 0,
  glossarySearch: "",
  glossaryConcept: "all",
  glossaryKind: "all",
  glossaryMastery: "all",
  glossaryLimit: GLOSSARY_PAGE,
  mapSearch: "",
  mapCollapsed: new Set(),
  ...readLocalState()
};

// Per-account data that is only kept in this browser (a running timed test, essay drafts) is stored
// under the signed-in account's id, so two accounts on one computer never see each other's work.
const scopedStore = {
  prefix: () => (account?.userId ? `u-${account.userId}:` : ""),
  read: (name, fallback) => store.read(`${scopedStore.prefix()}${name}`, fallback),
  write: (name, value) => store.write(`${scopedStore.prefix()}${name}`, value),
  remove: (name) => store.remove(`${scopedStore.prefix()}${name}`),
  key: (name) => `isee-${scopedStore.prefix()}${name}`,
  get failed() { return store.failed; }
};

const $ = (selector) => document.querySelector(selector);
// Everything shown on every tab is limited to the level chosen in the top bar.
const scope = () => scopeFor(state.level);
const i18n = createI18n(() => state.language);
const { uiText, uiHtml, uiPair, textPair, plainTextPair } = i18n;

// Inline helpers: plain content text -> safe HTML. English text is glossary-linked
// with the kinds of terms that make sense for what is on screen (math terms in math
// concepts, literary terms in reading and writing concepts, none in vocabulary).
let linkKinds = [];
const rich = (text) => linker.render(text, { link: false });
const pairHtml = (zh, en, kinds = linkKinds) => textPair(rich(zh), linker.render(en, { link: kinds.length > 0, kinds }));
const kindsForTerm = (term) => (term.kind === "vocab" ? [] : [term.kind]);

function kindsForConcept(concept) {
  if (concept.topicId === "reading-comprehension" || concept.topicId === "essay") return ["literary"];
  if (concept.sections.includes("quantitative") || concept.sections.includes("mathematics")) return ["math"];
  return [];
}

function deepLink(name, value) {
  return `?${new URLSearchParams({ [name]: value })}`;
}

const sameSet = (a, b) => a.size === b.size && [...a].every((item) => b.has(item));
const sameMap = (a, b) => Object.keys(a).length === Object.keys(b).length && Object.keys(a).every((key) => a[key] === b[key]);
const choicesOf = (attempts) => Object.fromEntries(Object.entries(attempts).map(([id, attempt]) => [id, attempt.choice]));

// True while local edits are being pushed to the account, so the sync echo cannot overwrite them halfway.
let applyingLocal = false;

function adoptProgress(selections) {
  const next = sanitizeProgress(selections, validProblemIds);
  if (sameMap(next, state.progress)) return false;
  state.progress = next;
  return true;
}

function adoptMastery(sets) {
  const mastered = new Set([...sets.concept].filter((id) => validConceptIds.has(id)));
  const masteredGlossary = new Set([...sets.glossary].filter((name) => validTermNames.has(name)));
  const reviewCollection = new Set([...sets.review].filter((id) => validProblemIds.has(id)));
  const attempts = {};
  for (const [id, choice] of Object.entries(attemptsFromSet(sets.attempt))) {
    const problem = problemById.get(id);
    if (!problem || !Number.isInteger(choice) || choice < 0 || choice > 3) continue;
    const previous = state.attempts[id];
    attempts[id] = { choice, correct: choice === problem.answer, at: previous?.choice === choice ? previous.at : "" };
  }
  const changed = !sameSet(mastered, state.mastered) || !sameSet(masteredGlossary, state.masteredGlossary)
    || !sameSet(reviewCollection, state.reviewCollection) || !sameMap(choicesOf(attempts), choicesOf(state.attempts));
  if (changed) Object.assign(state, { mastered, masteredGlossary, reviewCollection, attempts });
  return changed;
}

// Sends whatever differs between the current state and what the account already holds.
function pushToAccount(kind) {
  const report = (promise) => promise?.catch?.((error) => console.error("Account sync failed.", error));
  applyingLocal = true;
  try {
    if (kind === "progress") {
      const known = account.controller.selections();
      for (const [id, status] of Object.entries(state.progress)) if (known[id] !== status) report(account.mark(id, status));
    } else if (kind === "attempts") {
      const known = attemptsFromSet(account.mastery.snapshot().attempt);
      for (const [id, attempt] of Object.entries(state.attempts)) if (known[id] !== attempt.choice) report(account.setAttempt(id, attempt.choice));
      for (const id of Object.keys(known)) if (!(id in state.attempts)) report(account.setAttempt(id, null));
    } else {
      const sets = account.mastery.snapshot();
      const push = (cloudKind, current) => {
        for (const id of current) if (!sets[cloudKind].has(id)) report(account.setMastery(cloudKind, id, true));
        for (const id of sets[cloudKind]) if (!current.has(id)) report(account.setMastery(cloudKind, id, false));
      };
      if (kind === "review") push("review", state.reviewCollection);
      else {
        push("concept", state.mastered);
        push("glossary", state.masteredGlossary);
      }
    }
  } finally {
    applyingLocal = false;
  }
}

function persist(kind) {
  if (account?.signedIn && account.mastery) {
    pushToAccount(kind);
    return;
  }
  const ok = {
    mastery: () => store.write("mastered", [...state.mastered]) && store.write("mastered-glossary", [...state.masteredGlossary]),
    attempts: () => store.write("problem-attempts", state.attempts),
    progress: () => store.write("problem-progress", state.progress),
    review: () => store.write("review-collection", [...state.reviewCollection])
  }[kind]();
  if (!ok) renderStorageWarning();
}

function renderStorageWarning() {
  const warning = $("#storageWarning");
  warning.hidden = !store.failed;
  warning.textContent = uiText("storageError");
}

// --- Math typesetting ---------------------------------------------------------

function typesetMath(target) {
  const element = target || $("#conceptView");
  if (!element || !window.MathJax?.startup?.promise) return;
  window.MathJax.startup.promise
    .then(() => {
      if (element.closest(".view-panel")?.hidden) return undefined;
      window.MathJax.typesetClear?.([element]);
      return window.MathJax.typesetPromise([element]);
    })
    .catch((error) => console.error("Unable to render formulas with MathJax.", error));
}

// --- Glossary tooltips ----------------------------------------------------------

let tooltipEl = null;
let tooltipHideTimer = null;

function ensureTooltip() {
  if (tooltipEl) return tooltipEl;
  tooltipEl = document.createElement("div");
  tooltipEl.id = "glossary-tooltip";
  tooltipEl.className = "glossary-tooltip";
  tooltipEl.setAttribute("role", "tooltip");
  tooltipEl.hidden = true;
  tooltipEl.addEventListener("mouseenter", cancelTooltipHide);
  tooltipEl.addEventListener("mouseleave", () => scheduleTooltipHide());
  document.body.appendChild(tooltipEl);
  return tooltipEl;
}

function cancelTooltipHide() {
  if (tooltipHideTimer) clearTimeout(tooltipHideTimer);
  tooltipHideTimer = null;
}

function scheduleTooltipHide(delay = 180) {
  cancelTooltipHide();
  tooltipHideTimer = setTimeout(() => {
    if (tooltipEl) tooltipEl.hidden = true;
    tooltipHideTimer = null;
  }, delay);
}

function hideTooltip() {
  cancelTooltipHide();
  if (tooltipEl) tooltipEl.hidden = true;
}

function showTooltip(anchor, term) {
  cancelTooltipHide();
  const tooltip = ensureTooltip();
  const isVocab = term.kind === "vocab";
  tooltip.innerHTML = `
    <p class="glossary-tooltip-category">${textPair(escapeHtml(term.categoryZh), escapeHtml(term.categoryEn))}${isVocab ? ` · ${escapeHtml(term.pos)}` : ""}</p>
    <p class="glossary-tooltip-term">${textPair(escapeHtml(term.zh), escapeHtml(term.en))}</p>
    <p class="glossary-tooltip-note">${pairHtml(term.noteZh, term.noteEn, [])}</p>
    ${isVocab ? `<p class="glossary-tooltip-note"><em>${escapeHtml(term.exampleEn)}</em></p>` : ""}
    <button type="button" class="text-button glossary-tooltip-jump">${uiHtml("openInGlossary")}</button>`;
  tooltip.hidden = false;
  const anchorRect = anchor.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const margin = 10;
  let left = anchorRect.left + window.scrollX;
  let top = anchorRect.bottom + window.scrollY + margin;
  const maxLeft = window.scrollX + document.documentElement.clientWidth - tooltipRect.width - margin;
  left = Math.max(window.scrollX + margin, Math.min(left, maxLeft));
  if (anchorRect.bottom + tooltipRect.height + margin > window.innerHeight) top = anchorRect.top + window.scrollY - tooltipRect.height - margin;
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  typesetMath(tooltip);
  tooltip.querySelector(".glossary-tooltip-jump").addEventListener("click", () => {
    hideTooltip();
    jumpToGlossaryTerm(slugifyTerm(term.en));
  });
}

function wireTooltips(container) {
  container.querySelectorAll("[data-glossary-term-slug], [data-vocab-term]").forEach((element) => {
    const term = glossaryBySlug.get(element.dataset.glossaryTermSlug || element.dataset.vocabTerm);
    if (!term) return;
    element.addEventListener("mouseenter", () => showTooltip(element, term));
    element.addEventListener("mouseleave", () => scheduleTooltipHide());
    element.addEventListener("focus", () => showTooltip(element, term));
    element.addEventListener("blur", () => scheduleTooltipHide());
    if (element.classList.contains("glossary-term-link")) {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        if (!tooltipEl || tooltipEl.hidden) showTooltip(element, term);
        else hideTooltip();
      });
    }
  });
}

document.addEventListener("scroll", hideTooltip, true);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideTooltip();
});

// --- Shared view helpers -----------------------------------------------------

const view = createProblemView({ i18n, linker, conceptById, glossaryByName, deepLink, getLanguage: () => state.language });

function renderLanguageControl() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
  });
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let themeSaveError = false;

function renderThemeControl() {
  const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : systemTheme.matches;
  $("#themeToggle").setAttribute("aria-label", uiText("darkTheme"));
  $("#themeToggle").title = uiText(dark ? "switchToLight" : "switchToDark");
  $("#themeToggle").setAttribute("aria-pressed", String(dark));
  $("#themeError").hidden = !themeSaveError;
  $("#themeError").textContent = uiText("themeSaveError");
}

const OFFICIAL_LINKS = {
  samples: [
    ["lower", "https://iseelower.erblearn.org/"],
    ["middle", "https://iseemiddle.erblearn.org/"],
    ["upper", "https://iseeupper.erblearn.org/"]
  ],
  guides: [
    ["lower", "https://cdn.erblearn.org/www/20210712_ERB_ISEE_What_To_Expect_Guide_Lower-Level.pdf"],
    ["middle", "https://cdn.erblearn.org/www/20210712_ERB_ISEE_What_to_Expect_Guide_Middle-Level.pdf"],
    ["upper", "https://cdn.erblearn.org/www/20210712_ERB_ISEE_What_to_Expect_Guide_Upper-Level.pdf"]
  ],
  preparation: "https://www.admission.org/assessments/isee/preparation"
};

function renderOfficialPractice() {
  const links = (items) => items
    .filter(([id]) => id === state.level)
    .map(([id, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${escapeHtml(i18n.levelText(id))}</a></li>`)
    .join("");
  $("#officialPractice").innerHTML = `
    <details class="official-practice">
      <summary>${uiPair("officialPracticeTitle")}</summary>
      <p>${uiPair("officialPracticeCopy")}</p>
      <div class="official-links">
        <div><strong>${uiPair("officialSampleTests")}</strong><ul>${links(OFFICIAL_LINKS.samples)}</ul></div>
        <div><strong>${uiPair("officialGuides")}</strong><ul>${links(OFFICIAL_LINKS.guides)}</ul></div>
      </div>
      <p><a href="${OFFICIAL_LINKS.preparation}" target="_blank" rel="noopener">${uiPair("officialMore")}</a></p>
      <p class="muted">${uiPair("officialNote")}</p>
    </details>`;
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return { en: rest ? `${hours} h ${rest} min` : `${hours} h`, zh: rest ? `${hours} 小时 ${rest} 分钟` : `${hours} 小时` };
}

function renderExamFacts() {
  const level = LEVEL_BY_ID.get(state.level);
  const duration = formatDuration(level.totalMinutes);
  $("#examFactsCard").innerHTML = `
    <strong>${uiHtml("examFacts")}</strong>
    <span class="hero-card-level">${textPair(escapeHtml(`${level.zh} · ${level.gradesZh}`), escapeHtml(`${level.en} · ${level.gradesEn}`))}</span>
    <span>${textPair(`${level.questions} 题 + 作文，约 ${duration.zh}`, `${level.questions} questions + essay, about ${duration.en}`)}</span>
    <span>${uiPair("factNoPenalty")}</span>
    <span>${uiPair("factNoCalculator")}</span>`;
}

function renderLevelControl() {
  const select = $("#levelSelect");
  select.innerHTML = LEVELS.map((level) => `<option value="${level.id}">${escapeHtml(i18n.levelText(level.id))}</option>`).join("");
  select.value = state.level;
  const level = LEVEL_BY_ID.get(state.level);
  const locked = testPanel.running;
  select.disabled = locked;
  select.title = locked ? uiText("levelLockedTitle") : `${i18n.levelText(state.level)} · ${plainTextPair(level.gradesZh, level.gradesEn)}`;
}

function renderStaticInterface() {
  renderThemeControl();
  renderLanguageControl();
  renderLevelControl();
  renderExamFacts();
  renderStorageWarning();
  renderOfficialPractice();
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = state.language === "zh"
    ? "ISEE 中英双语备考指南"
    : state.language === "en"
      ? "ISEE Bilingual Prep Guide"
      : "ISEE Bilingual Prep Guide | ISEE 中英双语备考指南";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = uiPair(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = uiText(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", uiText(element.dataset.i18nAriaLabel));
  });
}

// --- Study guide -------------------------------------------------------------

function renderTopicNav() {
  const query = state.search.trim().toLowerCase();
  const nav = $("#topicNav");
  nav.innerHTML = scope().topics.map((topic) => {
    const matching = topic.concepts.filter((concept) => {
      const haystack = [topic.zh, topic.en, concept.zh, concept.en, concept.detailZh, concept.detailEn, concept.explanationZh, concept.explanationEn].join(" ").toLowerCase();
      return (!query || haystack.includes(query))
        && (state.conceptMastery === "all"
          || (state.conceptMastery === "mastered" && state.mastered.has(concept.id))
          || (state.conceptMastery === "unmastered" && !state.mastered.has(concept.id)));
    });
    if (!matching.length) return "";
    return `
      <details open class="topic-group">
        <summary>${textPair(escapeHtml(topic.zh), escapeHtml(topic.en))}<small>${textPair(escapeHtml(topic.officialAlignmentZh), escapeHtml(topic.officialAlignment))}</small></summary>
        <div class="topic-links">
          ${matching.map((concept) => `
            <button class="topic-button ${concept.id === state.activeConceptId ? "active" : ""}" data-concept="${concept.id}">
              <span>${textPair(escapeHtml(concept.zh), escapeHtml(concept.en))}</span>
              ${state.mastered.has(concept.id) ? `<span class="status-dot" title="${escapeHtml(uiText("mastered"))}">✓</span>` : ""}
            </button>`).join("")}
        </div>
      </details>`;
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
  const zh = itemsZh.map((item) => rich(item));
  const en = itemsEn.map((item) => linker.render(item, { link: linkKinds.length > 0, kinds: linkKinds }));
  if (state.language === "zh") return listItems(zh);
  if (state.language === "en") return listItems(en);
  return `<ul>${en.map((item, index) => `<li>${textPair(zh[index], item)}</li>`).join("")}</ul>`;
}

function keyPointItems(concept) {
  const chevron = (name) => `<svg class="${name}" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>`;
  return `<ol class="formula-list">${concept.keyPoints.map((point) => `
    <li class="formula-item">
      <h4 class="key-point-title">${textPair(escapeHtml(point.titleZh), escapeHtml(point.titleEn))}</h4>
      ${point.formula ? `<div class="formula-expression"><span class="math-formula">\\(${escapeHtml(point.formula)}\\)</span></div>` : ""}
      <p class="formula-explanation">${pairHtml(point.explanationZh, point.explanationEn)}</p>
      <details class="formula-example">
        <summary><strong>${uiHtml("workedExample")}</strong>${chevron("example-chevron")}</summary>
        <div class="formula-example-content">${pairHtml(point.exampleZh, point.exampleEn)}</div>
      </details>
      ${point.stepsEn ? `
        <details class="formula-steps">
          <summary><strong>${uiHtml("stepByStep")}</strong>${chevron("steps-chevron")}</summary>
          <ol>${point.stepsEn.map((step, index) => `<li>${pairHtml(point.stepsZh[index], step)}</li>`).join("")}</ol>
        </details>` : ""}
    </li>`).join("")}</ol>`;
}

const DIFFICULTY_ORDER = ["easy", "medium", "hard"];

function problemChip(problem) {
  const attempt = answerState(state.attempts, problem.id);
  const label = [`${i18n.levelShort(problem.level)} · ${SECTION_BY_ID.get(problem.section).code} #${problem.number}`, i18n.typeText(problem.type), i18n.difficultyText(problem.difficulty),
    attempt === "unattempted" ? "" : uiText(attempt === "correct" ? "answerCorrect" : "answerIncorrect")].filter(Boolean).join(" · ");
  return `<a class="problem-chip" href="${deepLink("problem", problem.id)}" target="_blank" rel="noopener" data-open-problem="${problem.id}" data-difficulty="${problem.difficulty}" ${attempt === "unattempted" ? "" : `data-attempt="${attempt}"`} aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}">${problem.number}</a>`;
}

function relatedProblemTable(related) {
  const sections = ["verbal", "quantitative", "reading", "mathematics"].filter((id) => related.some((problem) => problem.section === id));
  const levels = LEVELS.filter((level) => related.some((problem) => problem.level === level.id));
  const difficulties = DIFFICULTY_ORDER.filter((id) => related.some((problem) => problem.difficulty === id));
  const attempted = related.filter((problem) => answerState(state.attempts, problem.id) !== "unattempted").length;
  return `
    <p class="related-summary">${related.length} ${uiHtml("problems")} · ${uiHtml("answered")}: <span>${attempted}</span></p>
    <div class="related-table-wrap">
      <table class="related-table">
        <thead><tr><th scope="col">${uiHtml("level")}</th>${sections.map((id) => `<th scope="col">${escapeHtml(plainTextPair(SECTION_BY_ID.get(id).zh, SECTION_BY_ID.get(id).en))}</th>`).join("")}</tr></thead>
        <tbody>
          ${levels.map((level) => `
            <tr>
              <th scope="row">${escapeHtml(plainTextPair(level.zh, level.shortEn))}</th>
              ${sections.map((id) => {
                const cell = related.filter((problem) => problem.level === level.id && problem.section === id);
                return `<td>${cell.length ? cell.map(problemChip).join("") : '<span class="related-empty" aria-hidden="true">–</span>'}</td>`;
              }).join("")}
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <ul class="difficulty-legend" aria-label="${escapeHtml(uiText("difficultyLegend"))}">
      ${difficulties.map((id) => `<li><span class="legend-swatch" data-difficulty="${id}" aria-hidden="true"></span>${escapeHtml(i18n.difficultyText(id))}</li>`).join("")}
      <li><span class="legend-swatch legend-correct" aria-hidden="true"></span>${uiHtml("answerCorrect")}</li>
      <li><span class="legend-swatch legend-incorrect" aria-hidden="true"></span>${uiHtml("answerIncorrect")}</li>
    </ul>`;
}

function vocabChip(term) {
  const slug = slugifyTerm(term.en);
  const mastered = state.masteredGlossary.has(term.en);
  return `<li><a class="vocab-chip${mastered ? " mastered" : ""}" href="${deepLink("term", slug)}" target="_blank" rel="noopener" data-vocab-term="${slug}" aria-describedby="glossary-tooltip">${mastered ? `<span class="vocab-check" aria-label="${escapeHtml(uiText("mastered"))}">✓</span>` : ""}${textPair(escapeHtml(term.zh), escapeHtml(term.en))}</a></li>`;
}

function relatedVocabularyList(terms, conceptId) {
  if (!terms.length) return `<p class="empty-state">${uiHtml("noRelatedTerms")}</p>`;
  const mastered = terms.filter((term) => state.masteredGlossary.has(term.en)).length;
  const shown = terms.slice(0, RELATED_VOCABULARY_LIMIT);
  return `
    <p class="related-summary">${terms.length} ${uiHtml("terms")} · ${uiHtml("mastered")}: ${mastered}</p>
    <ul class="vocab-chips">${shown.map(vocabChip).join("")}</ul>
    <a class="text-button" href="${deepLink("glossary-concept", conceptId)}" target="_blank" rel="noopener">${uiHtml("viewAllInGlossary")}${terms.length > shown.length ? ` (${terms.length})` : ""}</a>`;
}

function levelChips(levels) {
  return LEVELS.filter((level) => levels.includes(level.id))
    .map((level) => `<span class="level-chip${level.id === state.level ? " is-current" : ""}" data-level="${level.id}" title="${escapeHtml(plainTextPair(level.gradesZh, level.gradesEn))}">${escapeHtml(plainTextPair(level.zh, level.shortEn))}</span>`).join("");
}

function sectionChips(sections) {
  return sections.map((id) => {
    const section = SECTION_BY_ID.get(id);
    return `<span class="section-chip" data-section="${id}">${escapeHtml(plainTextPair(section.zh, section.en))}</span>`;
  }).join("");
}

function renderConcept() {
  const levelScope = scope();
  const concept = levelScope.conceptIds.has(state.activeConceptId) ? conceptById.get(state.activeConceptId) : levelScope.concepts[0];
  const related = levelScope.problems.filter((problem) => problem.conceptIds.includes(concept.id));
  const relatedTerms = levelScope.glossary.filter((term) => term.conceptIds.includes(concept.id));
  const mastered = state.mastered.has(concept.id);
  const essay = concept.topicId === "essay";
  linkKinds = kindsForConcept(concept);
  $("#conceptView").innerHTML = `
    <div class="concept-header">
      <div>
        <p class="eyebrow">${textPair(escapeHtml(concept.topicZh), escapeHtml(concept.topicEn))}</p>
        <h2>${textPair(escapeHtml(concept.zh), escapeHtml(concept.en))}</h2>
        <p class="detail">${pairHtml(concept.detailZh, concept.detailEn, [])}</p>
        <div class="concept-meta">
          <span class="concept-meta-label">${uiHtml("levels")}</span>${levelChips(concept.levels)}
          <span class="concept-meta-label">${uiHtml("testedIn")}</span>${sectionChips(concept.sections)}
        </div>
      </div>
      <button id="masteryToggle" class="mastery glossary-mastery ${mastered ? "complete" : ""}" aria-pressed="${mastered}" aria-label="${escapeHtml(uiText(mastered ? "mastered" : "markMastered"))}" title="${escapeHtml(uiText(mastered ? "mastered" : "markMastered"))}">
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7.5"/><path d="m6.8 10.1 2.1 2.1 4.5-4.5"/></svg>
      </button>
    </div>
    <div class="card-grid">
      <section class="card wide">
        <h3>${uiHtml("conceptExplanation")}</h3>
        <p>${pairHtml(concept.explanationZh, concept.explanationEn)}</p>
      </section>
      <section class="card wide formula-card">
        <h3>${uiHtml("keyPoints")}</h3>
        ${keyPointItems(concept)}
      </section>
      <section class="card">
        <h3>${uiHtml("methods")}</h3>
        ${bilingualListItems(concept.methodsZh, concept.methodsEn)}
      </section>
      <section class="card">
        <h3>${uiHtml("readinessChecklist")}</h3>
        ${bilingualListItems(concept.checklistZh, concept.checklistEn)}
      </section>
      <section class="card wide example">
        <h3>${uiHtml("miniExample")}</h3>
        <p>${pairHtml(concept.exampleZh, concept.exampleEn)}</p>
      </section>
      ${essay ? `<section class="card wide" id="essayPractice"></section>` : ""}
      <section class="card wide">
        <section id="conceptProgress" class="concept-progress" aria-labelledby="conceptProgressHeading"></section>
        <div class="study-section-heading">
          <h3>${uiHtml("relatedPractice")}</h3>
          <span class="result-count" id="relatedProblemCount">${related.length} / ${levelScope.problems.length}</span>
        </div>
        ${related.length ? `
          <p class="muted reference-count-help">${uiHtml("referenceCountHelp")}</p>
          ${relatedProblemTable(related)}
          <a class="text-button" href="${deepLink("problems-concept", concept.id)}" target="_blank" rel="noopener">${uiHtml("viewAllInExplorer")}</a>`
          : `<p class="empty-state">${uiHtml(essay ? "noPracticeEssay" : "noPracticeForConcept")}</p>`}
      </section>
      <section class="card wide">
        <div class="study-section-heading">
          <h3>${uiHtml("relatedGlossary")}</h3>
          <span class="result-count">${relatedTerms.length}</span>
        </div>
        ${relatedVocabularyList(relatedTerms, concept.id)}
      </section>
    </div>`;
  renderStudyProgress();
  if (essay) essayPractice.render($("#essayPractice"));
  typesetMath();
  $("#masteryToggle").addEventListener("click", () => {
    if (state.mastered.has(concept.id)) state.mastered.delete(concept.id);
    else state.mastered.add(concept.id);
    persist("mastery");
    render();
  });
  wireTooltips($("#conceptView"));
}

function renderStudyProgress() {
  const levelScope = scope();
  const summary = summarizeProgress(levelScope.problems, state);
  const metrics = [
    { key: "concepts", label: "conceptsMastered", value: levelScope.concepts.filter((concept) => state.mastered.has(concept.id)).length, total: levelScope.concepts.length },
    { key: "vocabulary", label: "vocabularyMastered", value: levelScope.glossary.filter((term) => state.masteredGlossary.has(term.en)).length, total: levelScope.glossary.length },
    { key: "problems", label: "answeredProblems", value: summary.attempted, total: summary.total }
  ];
  $("#studyProgress").innerHTML = `
    <div class="progress-header">
      <h2 id="studyProgressHeading">${uiHtml("studyProgress")}</h2>
      <span class="muted">${escapeHtml(i18n.levelText(state.level))}${summary.accuracy === null ? "" : ` · ${uiHtml("accuracy")} ${Math.round(summary.accuracy * 100)}%`}</span>
    </div>
    <div class="study-metrics">
      ${metrics.map((metric) => `
        <div class="study-metric" data-study-metric="${metric.key}">
          <span>${uiHtml(metric.label)}</span>
          <strong>${metric.value}<small> / ${metric.total}</small></strong>
          <progress value="${metric.value}" max="${metric.total}" aria-label="${escapeHtml(uiText(metric.label))}"></progress>
        </div>`).join("")}
    </div>`;
  const panel = $("#conceptProgress");
  if (!panel) return;
  const related = levelScope.problems.filter((problem) => problem.conceptIds.includes(state.activeConceptId));
  if (!related.length) {
    panel.innerHTML = "";
    return;
  }
  const scoped = summarizeProgress(related, state);
  const saved = related.filter((problem) => state.reviewCollection.has(problem.id)).length;
  panel.innerHTML = `
    <div class="progress-header">
      <h3 id="conceptProgressHeading">${uiHtml("conceptProgress")}</h3>
      <span class="concept-progress-total"><strong>${scoped.attempted} / ${scoped.total}</strong> ${uiHtml("answered")}</span>
    </div>
    <progress value="${scoped.attempted}" max="${scoped.total || 1}" aria-label="${escapeHtml(uiText("conceptProgress"))}"></progress>
    <dl class="concept-progress-statuses">
      <div><dt>${uiHtml("answerCorrect")}</dt><dd>${scoped.correct}</dd></div>
      <div><dt>${uiHtml("answerIncorrect")}</dt><dd>${scoped.incorrect}</dd></div>
      <div><dt>${uiHtml("answerUnattempted")}</dt><dd>${scoped.unattempted}</dd></div>
      <div><dt>${uiHtml("reviewCollection")}</dt><dd>${saved}</dd></div>
    </dl>`;
}

// --- Glossary ------------------------------------------------------------------

function glossaryCard(term) {
  const levelScope = scope();
  const termConcepts = term.conceptIds.map((id) => conceptById.get(id)).filter((concept) => concept && levelScope.conceptIds.has(concept.id));
  const mastered = state.masteredGlossary.has(term.en);
  const isVocab = term.kind === "vocab";
  const relatedCount = levelScope.problems.filter((problem) => problem.conceptIds.some((id) => term.conceptIds.includes(id))).length;
  return `
    <article class="glossary-card" id="glossary-${slugifyTerm(term.en)}">
      <p class="glossary-category">${textPair(escapeHtml(term.categoryZh), escapeHtml(term.categoryEn))}
        ${isVocab ? `<span class="level-chip" data-level="${term.level}">${escapeHtml(i18n.levelShort(term.level))}</span><span class="pos-chip">${escapeHtml(term.pos)}</span>` : ""}</p>
      <h3>${textPair(escapeHtml(term.zh), escapeHtml(term.en))}</h3>
      <p>${pairHtml(term.noteZh, term.noteEn, kindsForTerm(term))}</p>
      ${isVocab ? `
        <p class="glossary-example">${textPair(escapeHtml(term.exampleZh), `<em>${escapeHtml(term.exampleEn)}</em>`)}</p>
        ${term.synonyms?.length ? `<p class="glossary-synonyms"><span class="glossary-action-label">${uiHtml("synonymsLabel")}</span> ${term.synonyms.map((word) => `<span class="synonym-chip">${escapeHtml(word)}</span>`).join("")}</p>` : ""}` : ""}
      <div class="glossary-mastery-action">
        <a class="text-button glossary-problem-count" href="${deepLink("problems-concept", termConcepts[0]?.id ?? term.conceptIds[0])}" target="_blank" rel="noopener">${textPair(`${relatedCount} 道练习题`, `${relatedCount} problems`)}</a>
        <button class="mastery glossary-mastery ${mastered ? "complete" : ""}" data-glossary-mastery="${escapeHtml(term.en)}" aria-pressed="${mastered}" aria-label="${escapeHtml(uiText(mastered ? "mastered" : "markGlossaryMastered"))}" title="${escapeHtml(uiText(mastered ? "mastered" : "markGlossaryMastered"))}">
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7.5"/><path d="m6.8 10.1 2.1 2.1 4.5-4.5"/></svg>
        </button>
      </div>
      <div class="glossary-related" role="group" aria-label="${escapeHtml(uiText("relatedConcepts"))}">
        <div class="tags">${termConcepts.map((concept) => `<a class="concept-tag" href="${deepLink("concept", concept.id)}" target="_blank" rel="noopener">${textPair(escapeHtml(concept.zh), escapeHtml(concept.en))}</a>`).join("")}</div>
      </div>
    </article>`;
}

function filteredGlossary() {
  const query = state.glossarySearch.trim().toLowerCase();
  return scope().glossary.filter((term) => {
    const conceptNames = term.conceptIds.flatMap((id) => {
      const concept = conceptById.get(id);
      return concept ? [concept.zh, concept.en] : [];
    });
    const haystack = [term.categoryZh, term.categoryEn, term.zh, term.en, term.noteZh, term.noteEn, term.exampleEn ?? "", ...(term.synonyms ?? []), ...conceptNames].join(" ").toLowerCase();
    return (!query || haystack.includes(query))
      && (state.glossaryKind === "all" || term.kind === state.glossaryKind)
      && (state.glossaryConcept === "all" || term.conceptIds.includes(state.glossaryConcept))
      && (state.glossaryMastery === "all"
        || (state.glossaryMastery === "mastered" && state.masteredGlossary.has(term.en))
        || (state.glossaryMastery === "unmastered" && !state.masteredGlossary.has(term.en)));
  });
}

function renderGlossary() {
  if (state.activeView !== "glossary") return;
  const terms = filteredGlossary();
  const shown = terms.slice(0, state.glossaryLimit);
  $("#glossaryList").innerHTML = terms.length ? shown.map(glossaryCard).join("") : `<p class="empty-state">${uiHtml("noGlossaryTerms")}</p>`;
  $("#glossaryCount").textContent = `${terms.length} / ${scope().glossary.length}`;
  const more = $("#glossaryMore");
  more.hidden = terms.length <= shown.length;
  more.textContent = `${uiText("showMore")} (${Math.min(GLOSSARY_PAGE, terms.length - shown.length)})`;
  wireGlossaryCards($("#glossaryList"));
  typesetMath($("#glossaryList"));
}

function wireGlossaryCards(container) {
  container.querySelectorAll("[data-glossary-mastery]").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.glossaryMastery;
      if (state.masteredGlossary.has(name)) state.masteredGlossary.delete(name);
      else state.masteredGlossary.add(name);
      persist("mastery");
      renderGlossary();
      renderStudyProgress();
    });
  });
  wireTooltips(container);
}

function populateGlossaryFilters() {
  const option = (value, label) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
  $("#glossaryKindFilter").innerHTML = option("all", uiText("allKinds")) + GLOSSARY_KINDS.map((kind) => option(kind.id, i18n.kindText(kind.id))).join("");
  $("#glossaryConceptFilter").innerHTML = option("all", uiText("allConcepts")) + scope().topics.map((topic) => `<optgroup label="${escapeHtml(plainTextPair(topic.zh, topic.en))}">${topic.concepts.map((concept) => option(concept.id, plainTextPair(concept.zh, concept.en))).join("")}</optgroup>`).join("");
  $("#glossaryMasteryFilter").innerHTML = option("all", uiText("allMastery")) + option("mastered", uiText("masteredOnly")) + option("unmastered", uiText("unmasteredOnly"));
  $("#conceptMasteryFilter").innerHTML = option("all", uiText("allMastery")) + option("mastered", uiText("masteredOnly")) + option("unmastered", uiText("unmasteredOnly"));
  $("#glossaryKindFilter").value = state.glossaryKind;
  $("#glossaryConceptFilter").value = state.glossaryConcept;
  $("#glossaryMasteryFilter").value = state.glossaryMastery;
  $("#conceptMasteryFilter").value = state.conceptMastery;
}

function jumpToGlossaryTerm(slug) {
  Object.assign(state, { glossarySearch: "", glossaryConcept: "all", glossaryKind: "all", glossaryMastery: "all" });
  const term = glossaryBySlug.get(slug);
  if (term) applyLevel(nearestLevel(LEVELS.map((level) => level.id).filter((id) => scopeFor(id).glossary.includes(term)), state.level));
  const index = filteredGlossary().findIndex((entry) => entry === term);
  state.glossaryLimit = Math.max(GLOSSARY_PAGE, Math.ceil((index + 1) / GLOSSARY_PAGE) * GLOSSARY_PAGE);
  const search = $("#glossarySearch");
  if (search) search.value = "";
  state.activeView = "glossary";
  render();
  requestAnimationFrame(() => {
    const target = document.getElementById(`glossary-${slug}`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("glossary-highlight");
    setTimeout(() => target.classList.remove("glossary-highlight"), 1600);
  });
}

// --- Topic map -------------------------------------------------------------------

const MAP_ICONS = {
  topic: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg>',
  concept: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" /></svg>',
  open: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" /></svg>'
};

function renderTopicMap() {
  if (state.activeView !== "map") return;
  const tree = $("#topicMapTree");
  const query = state.mapSearch.trim().toLowerCase();
  const matches = (...values) => !query || values.join(" ").toLowerCase().includes(query);
  let conceptCount = 0;
  const termSlugs = new Set();
  const levelScope = scope();
  const topicsHtml = levelScope.topics.map((topic) => {
    const topicMatches = matches(topic.en, topic.zh);
    const conceptsHtml = topic.concepts.map((concept) => {
      const conceptMatches = topicMatches || matches(concept.en, concept.zh);
      const terms = levelScope.glossary.filter((term) => term.conceptIds.includes(concept.id) && (conceptMatches || matches(term.en, term.zh)));
      if (!conceptMatches && !terms.length) return "";
      conceptCount += 1;
      terms.forEach((term) => termSlugs.add(slugifyTerm(term.en)));
      const nodeId = `concept:${concept.id}`;
      const open = query || !state.mapCollapsed.has(nodeId);
      const mastered = state.mastered.has(concept.id);
      const shown = query ? terms : terms.slice(0, MAP_TERM_LIMIT);
      return `
        <li>
          <details class="map-node map-concept${mastered ? " mastered" : ""}"${open ? " open" : ""} data-map-node="${nodeId}">
            <summary>
              <span class="map-icon">${MAP_ICONS.concept}</span>
              <span class="map-label">${textPair(escapeHtml(concept.zh), escapeHtml(concept.en))}</span>
              ${mastered ? `<span class="status-dot" title="${escapeHtml(uiText("mastered"))}">✓</span>` : ""}
              <span class="map-count">${terms.length}</span>
              <a class="map-open" href="${deepLink("concept", concept.id)}" target="_blank" rel="noopener" title="${escapeHtml(uiText("openConcept"))}" aria-label="${escapeHtml(uiText("openConcept"))}: ${escapeHtml(plainTextPair(concept.zh, concept.en))}">${MAP_ICONS.open}</a>
            </summary>
            <ul class="map-terms">
              ${shown.map((term) => `<li><a class="map-term${state.masteredGlossary.has(term.en) ? " mastered" : ""}" href="${deepLink("term", slugifyTerm(term.en))}" target="_blank" rel="noopener" data-vocab-term="${slugifyTerm(term.en)}">${textPair(escapeHtml(term.zh), escapeHtml(term.en))}</a></li>`).join("")}
              ${terms.length > shown.length ? `<li><a class="map-term map-more" href="${deepLink("glossary-concept", concept.id)}" target="_blank" rel="noopener">+${terms.length - shown.length} ${uiHtml("mapMore")}</a></li>` : ""}
            </ul>
          </details>
        </li>`;
    }).join("");
    if (!conceptsHtml.trim()) return "";
    const nodeId = `topic:${topic.id}`;
    const open = query || !state.mapCollapsed.has(nodeId);
    return `
      <li>
        <details class="map-node map-topic"${open ? " open" : ""} data-map-node="${nodeId}">
          <summary>
            <span class="map-icon">${MAP_ICONS.topic}</span>
            <span class="map-label">${textPair(escapeHtml(topic.zh), escapeHtml(topic.en))}</span>
            <span class="map-count">${topic.concepts.length}</span>
          </summary>
          <ul class="map-branch">${conceptsHtml}</ul>
        </details>
      </li>`;
  }).join("");
  $("#mapCount").textContent = plainTextPair(
    `${conceptCount} ${UI_TEXT.mapConcepts.zh} · ${termSlugs.size} ${UI_TEXT.mapTerms.zh}`,
    `${conceptCount} ${UI_TEXT.mapConcepts.en} · ${termSlugs.size} ${UI_TEXT.mapTerms.en}`
  );
  tree.innerHTML = topicsHtml.trim()
    ? `<div class="map-root">${uiPair("mapRoot")}</div><ul class="map-branch map-top">${topicsHtml}</ul>`
    : `<p class="empty-state">${uiHtml("noMapMatches")}</p>`;
  tree.querySelectorAll("[data-map-node]").forEach((node) => {
    node.addEventListener("toggle", () => {
      if (query) return;
      if (node.open) state.mapCollapsed.delete(node.dataset.mapNode);
      else state.mapCollapsed.add(node.dataset.mapNode);
    });
  });
  wireTooltips(tree);
}

// --- Views and deep links ---------------------------------------------------------

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
  if (view === "problems") {
    explorer.populateFilters();
    explorer.renderList();
    testPanel.render();
  } else if (view === "glossary") {
    populateGlossaryFilters();
    renderGlossary();
  } else if (view === "map") {
    renderTopicMap();
  } else {
    renderTopicNav();
    renderConcept();
  }
}

// Keeps the open concept and the filters valid after the level changes.
function reconcileFilters() {
  const levelScope = scope();
  if (!levelScope.conceptIds.has(state.activeConceptId)) state.activeConceptId = levelScope.concepts[0].id;
  if (!["all", "current"].includes(state.problemConcept) && !levelScope.problems.some((problem) => problem.conceptIds.includes(state.problemConcept))) state.problemConcept = "all";
  if (state.type !== "all" && !levelScope.problems.some((problem) => problem.type === state.type)) state.type = "all";
  if (state.glossaryConcept !== "all" && !levelScope.conceptIds.has(state.glossaryConcept)) state.glossaryConcept = "all";
  state.glossaryLimit = GLOSSARY_PAGE;
  state.problemPage = 0;
}

// Switches the whole site to another level (no render). A running timed test keeps its level.
function applyLevel(next, { force = false } = {}) {
  if (!isLevel(next) || next === state.level) return false;
  if (testPanel.running && !force) return false;
  state.level = next;
  store.writeText("level", next);
  reconcileFilters();
  return true;
}

function applyDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const problem = params.get("problem");
  const term = params.get("term");
  const problemsConcept = params.get("problems-concept");
  const glossaryConcept = params.get("glossary-concept");
  const concept = params.get("concept");
  const viewName = params.get("view");
  const levelName = params.get("level");
  const levelForConcept = (id) => applyLevel(nearestLevel(conceptById.get(id).levels, state.level));
  if (isLevel(levelName)) applyLevel(levelName);
  if (problem && problemById.has(problem)) {
    applyLevel(problemById.get(problem).level);
    explorer.openProblem(problem);
    state.activeView = "problems";
    render();
    explorer.highlightProblem(problem);
  } else if (term && glossaryBySlug.has(term)) {
    jumpToGlossaryTerm(term);
  } else if (problemsConcept && conceptById.has(problemsConcept)) {
    levelForConcept(problemsConcept);
    state.activeConceptId = problemsConcept;
    Object.assign(state, { problemConcept: "current", section: "all", type: "all", difficulty: "all", progressFilter: "all", answerFilter: "all", reviewOnly: false });
    state.activeView = "problems";
    render();
  } else if (glossaryConcept && conceptById.has(glossaryConcept)) {
    levelForConcept(glossaryConcept);
    state.glossaryConcept = glossaryConcept;
    state.activeView = "glossary";
    render();
  } else if (concept && conceptById.has(concept)) {
    levelForConcept(concept);
    state.activeConceptId = concept;
    state.activeView = "study";
    render();
  } else if (["study", "problems", "glossary", "map"].includes(viewName)) {
    state.activeView = viewName;
    render();
  } else if (testPanel.running) {
    state.activeView = "problems";
    render();
  } else if (isLevel(levelName)) {
    render();
  }
}

// --- Controls ------------------------------------------------------------------------

function wireControls() {
  systemTheme.addEventListener("change", renderThemeControl);
  $("#themeToggle").addEventListener("click", () => {
    const theme = $("#themeToggle").getAttribute("aria-pressed") === "true" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    themeSaveError = !store.writeText("theme", theme);
    renderThemeControl();
  });
  document.querySelectorAll("[data-view]").forEach((tab) => {
    tab.addEventListener("click", () => setActiveView(tab.dataset.view));
  });
  $("#levelSelect").addEventListener("change", (event) => {
    if (applyLevel(event.target.value)) render();
    else event.target.value = state.level;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      store.writeText("language", state.language);
      render();
    });
  });
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderTopicNav();
  });
  $("#conceptMasteryFilter").addEventListener("change", (event) => {
    state.conceptMastery = event.target.value;
    renderTopicNav();
  });
  const glossaryBind = (selector, key) => {
    $(selector).addEventListener("change", (event) => {
      state[key] = event.target.value;
      state.glossaryLimit = GLOSSARY_PAGE;
      renderGlossary();
    });
  };
  $("#glossarySearch").addEventListener("input", (event) => {
    state.glossarySearch = event.target.value;
    state.glossaryLimit = GLOSSARY_PAGE;
    renderGlossary();
  });
  glossaryBind("#glossaryKindFilter", "glossaryKind");
  glossaryBind("#glossaryConceptFilter", "glossaryConcept");
  glossaryBind("#glossaryMasteryFilter", "glossaryMastery");
  $("#glossaryMore").addEventListener("click", () => {
    state.glossaryLimit += GLOSSARY_PAGE;
    renderGlossary();
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
}

const explorer = createExplorer({
  state,
  i18n,
  view,
  problems: PROBLEMS,
  passages: PASSAGES,
  concepts,
  topics: TOPICS,
  $,
  typesetMath,
  deepLink,
  persist,
  wireTooltips,
  onChange: () => renderStudyProgress()
});

const testPanel = createTestPanel({
  state,
  store: scopedStore,
  i18n,
  view,
  problems: PROBLEMS,
  passages: PASSAGES,
  concepts,
  $,
  typesetMath,
  deepLink,
  persist,
  onAttempts: () => {
    renderStudyProgress();
    explorer.renderProgressOverview();
  },
  onClose: () => explorer.renderList(),
  onSessionChange: () => renderLevelControl()
});

const essayPractice = createEssayPractice({ store: scopedStore, i18n, prompts: ESSAY_PROMPTS, typesetMath, getLevel: () => state.level });

function render() {
  renderStaticInterface();
  populateGlossaryFilters();
  setActiveView(state.activeView);
  renderStudyProgress();
  account?.render();
}

let sessionRestored = false;

account = new AccountPanel({
  getLanguage: () => state.language,
  validKeys: PROBLEMS.map((problem) => problem.id),
  readMastery: readLocalMastery,
  onProgress: (selections) => {
    if (!account.signedIn || applyingLocal) return;
    if (adoptProgress(selections)) render();
  },
  onMastery: (sets) => {
    if (!account.signedIn || applyingLocal) return;
    if (adoptMastery(sets)) render();
  },
  onUser: (user) => {
    // Signing out returns to this browser's own data; signing in loads the account's data through the callbacks above.
    if (!user) Object.assign(state, readLocalState());
    testPanel.restore();
    if (testPanel.running) {
      applyLevel(testPanel.sessionLevel, { force: true });
      // A reload during a timed test brings you back to it (unless a link asked for something else).
      if (!sessionRestored && !window.location.search) state.activeView = "problems";
    }
    sessionRestored = true;
    render();
  }
});

wireControls();
explorer.wireEvents();
testPanel.wire();
testPanel.restore();
if (testPanel.running) applyLevel(testPanel.sessionLevel, { force: true });
render();
applyDeepLink();
account.wire();
account.start();
