// Problem Explorer: filters, progress overview, paginated cards, answer checking.

import { escapeHtml } from "./rich-text.mjs?v=20261116-3";
import {
  PROBLEM_PROGRESS_OPTIONS,
  summarizeProgress,
  answerState,
  recordAttempt,
  clearAttempt,
  exportProgress
} from "./progress.mjs?v=20261116-3";
import { PROBLEM_TYPES, DIFFICULTIES, PROBLEM_SECTIONS, SECTION_BY_ID } from "./taxonomy.mjs?v=20261116-3";

export const PAGE_SIZE = 12;

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

const BOOKMARK_ICON = '<path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4Z"/>';

export function createExplorer(ctx) {
  const { state, i18n, view, problems, passages, concepts, topics, $, typesetMath, deepLink, persist, onChange, wireTooltips } = ctx;
  const { uiText, uiHtml, uiPair, plainTextPair, levelText, sectionText, typeText, difficultyText } = i18n;
  const passageById = new Map(passages.map((passage) => [passage.id, passage]));
  const problemById = new Map(problems.map((problem) => [problem.id, problem]));
  const drafts = new Map();
  let progressControlId = 0;

  function selectedConceptId() {
    return state.problemConcept === "current" ? state.activeConceptId : state.problemConcept;
  }

  // The level is chosen once for the whole site (top bar), so the explorer only shows that level.
  function levelProblems() {
    return problems.filter((problem) => problem.level === state.level);
  }

  function filteredProblems() {
    const conceptId = selectedConceptId();
    return levelProblems().filter((problem) => {
      if (state.reviewOnly && !state.reviewCollection.has(problem.id)) return false;
      const progress = state.progress[problem.id];
      if (state.progressFilter !== "all" && (state.progressFilter === "unmarked" ? Boolean(progress) : progress !== state.progressFilter)) return false;
      if (state.answerFilter !== "all" && answerState(state.attempts, problem.id) !== state.answerFilter) return false;
      return (conceptId === "all" || problem.conceptIds.includes(conceptId))
        && (state.section === "all" || problem.section === state.section)
        && (state.type === "all" || problem.type === state.type)
        && (state.difficulty === "all" || problem.difficulty === state.difficulty);
    });
  }

  function scopedProblems() {
    return levelProblems().filter((problem) => state.section === "all" || problem.section === state.section);
  }

  // --- Filters --------------------------------------------------------------

  function populateFilters() {
    const option = (value, label) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
    const active = concepts.find((concept) => concept.id === state.activeConceptId);
    const available = levelProblems();
    const conceptsWithProblems = new Set(available.flatMap((problem) => problem.conceptIds));
    const conceptOptions = topics
      .map((topic) => {
        const practice = topic.concepts.filter((concept) => concept.practice && conceptsWithProblems.has(concept.id));
        if (!practice.length) return "";
        return `<optgroup label="${escapeHtml(plainTextPair(topic.zh, topic.en))}">${practice.map((concept) => option(concept.id, plainTextPair(concept.zh, concept.en))).join("")}</optgroup>`;
      })
      .join("");
    $("#conceptFilter").innerHTML = `
      ${option("all", uiText("allConcepts"))}
      ${active ? option("current", `${uiText("currentConcept")}: ${plainTextPair(active.zh, active.en)}`) : ""}
      ${conceptOptions}`;
    $("#sectionFilter").innerHTML = option("all", uiText("allSections")) + PROBLEM_SECTIONS.map((id) => option(id, sectionText(id))).join("");
    $("#typeFilter").innerHTML = option("all", uiText("allTypes")) + PROBLEM_TYPES.filter((type) => available.some((problem) => problem.type === type.id)).map((type) => option(type.id, typeText(type.id))).join("");
    $("#difficultyFilter").innerHTML = option("all", uiText("allDifficulties")) + DIFFICULTIES.map((entry) => option(entry.id, difficultyText(entry.id))).join("");
    $("#answerFilter").innerHTML = [
      option("all", uiText("allAnswerStates")),
      option("unattempted", uiText("answerUnattempted")),
      option("correct", uiText("answerCorrect")),
      option("incorrect", uiText("answerIncorrect"))
    ].join("");
    $("#conceptFilter").value = state.problemConcept;
    $("#sectionFilter").value = state.section;
    $("#typeFilter").value = state.type;
    $("#difficultyFilter").value = state.difficulty;
    $("#answerFilter").value = state.answerFilter;
  }

  // --- Progress overview ------------------------------------------------------

  function renderProgressOverview() {
    const summary = summarizeProgress(scopedProblems(), state);
    $("#progressOverviewHeading").textContent = uiText("progressOverview");
    $("#progressScope").textContent = `${levelText(state.level)} · ${state.section === "all" ? uiText("allSections") : sectionText(state.section)}`;
    const openStatuses = new Set([...document.querySelectorAll("[data-summary-status][open]")].map((element) => element.dataset.summaryStatus));
    const accuracy = summary.accuracy === null ? "–" : `${Math.round(summary.accuracy * 100)}%`;
    $("#progressTotals").innerHTML = `
      <span class="progress-marked"><strong>${summary.attempted} / ${summary.total}</strong><span>${uiPair("answeredProblems")}</span></span>
      <span class="progress-unmarked">${summary.correct} ${uiHtml("answerCorrectShort")} · ${summary.incorrect} ${uiHtml("answerIncorrectShort")} · ${uiHtml("accuracy")} ${accuracy}</span>`;
    $("#progressMeter").max = summary.total || 1;
    $("#progressMeter").value = summary.attempted;
    $("#progressBreakdown").innerHTML = summary.statuses.map((entry) => `
      <details class="progress-status-card" data-summary-status="${entry.status}" ${openStatuses.has(entry.status) ? "open" : ""}>
        <summary title="${escapeHtml(uiText(PROGRESS_LABEL_KEYS[entry.status]))}">
          <span class="progress-status-label">${uiPair(PROGRESS_LABEL_KEYS[entry.status])}</span>
          <strong class="progress-status-count">${entry.count}</strong>
          <svg class="steps-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        ${entry.count
          ? `<ul>${groupByLevelSection(entry.problems).map((group) => `<li><strong>${escapeHtml(group.label)}</strong>: ${group.problems.map((problem) => `<a href="${deepLink("problem", problem.id)}" target="_blank" rel="noopener">#${problem.number}</a>`).join(", ")}</li>`).join("")}</ul>`
          : `<p class="muted">${uiHtml("noMarkedStatus")}</p>`}
      </details>`).join("");
    $("#problemProgressFilter").innerHTML = `
      <option value="all">${escapeHtml(uiText("allProgress"))} (${summary.total})</option>
      <option value="unmarked">${escapeHtml(uiText("unmarkedProgress"))} (${summary.unmarked})</option>
      ${summary.statuses.map((entry) => `<option value="${entry.status}">${escapeHtml(uiText(PROGRESS_LABEL_KEYS[entry.status]))} (${entry.count})</option>`).join("")}`;
    $("#problemProgressFilter").value = state.progressFilter;
    $("#reviewCollectionCount").textContent = String(levelProblems().filter((problem) => state.reviewCollection.has(problem.id)).length);
    $("#reviewOnly option[value=all]").textContent = uiText("allCollectionProblems");
    $("#reviewOnly option[value=saved]").textContent = uiText("savedCollectionProblems");
  }

  function groupByLevelSection(items) {
    const groups = new Map();
    for (const problem of items) {
      const key = `${problem.level}:${problem.section}`;
      if (!groups.has(key)) groups.set(key, { label: `${i18n.levelShort(problem.level)} · ${SECTION_BY_ID.get(problem.section).code}`, problems: [] });
      groups.get(key).problems.push(problem);
    }
    return [...groups.values()];
  }

  // --- Cards ------------------------------------------------------------------

  function progressControl(key) {
    const selected = state.progress[key];
    const group = `progress-${++progressControlId}`;
    const saved = state.reviewCollection.has(key);
    const reviewLabel = saved ? "removeFromReview" : "saveToReview";
    const summaryText = selected ? `${uiText("problemProgress")}: ${uiText(PROGRESS_LABEL_KEYS[selected])}` : uiText("problemProgress");
    return `
      <details class="problem-progress" data-progress-key="${key}" data-progress-status="${selected || ""}" open>
        <summary>${escapeHtml(summaryText)}</summary>
        <div class="progress-picker-row">
          <fieldset>
            <legend>${uiHtml("problemProgress")}</legend>
            ${PROBLEM_PROGRESS_OPTIONS.map((status) => `
              <label class="progress-option" data-status="${status}">
                <input type="radio" name="${group}" value="${status}" aria-label="${escapeHtml(uiText(PROGRESS_LABEL_KEYS[status]))}" ${selected === status ? "checked" : ""}>
                <span class="progress-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${PROGRESS_ICONS[status]}</svg></span>
                <span class="progress-option-tooltip" role="tooltip">${uiPair(PROGRESS_LABEL_KEYS[status])}</span>
              </label>`).join("")}
          </fieldset>
          <button type="button" class="progress-option review-bookmark" data-review-key="${key}" aria-pressed="${saved}" aria-label="${escapeHtml(uiText(reviewLabel))}">
            <span class="progress-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${BOOKMARK_ICON}</svg></span>
            <span class="progress-option-tooltip" role="tooltip">${uiPair(reviewLabel)}</span>
          </button>
        </div>
      </details>`;
  }

  function feedbackHtml(problem, attempt) {
    const letter = view.LETTERS[problem.answer];
    return `
      <div class="answer-feedback ${attempt.correct ? "is-correct" : "is-incorrect"}" role="status">
        <p class="answer-result"><strong>${attempt.correct ? `✓ ${uiHtml("correct")}` : `✗ ${uiHtml("incorrect")}`}</strong> ${attempt.correct ? "" : `${uiHtml("correctAnswerIs")} <strong>${letter}</strong>.`}</p>
        ${view.explanationHtml(problem)}
        ${view.wordCheckHtml(problem)}
        <button type="button" class="text-button" data-try-again="${problem.id}">${uiHtml("tryAgain")}</button>
      </div>`;
  }

  function cardHtml(problem) {
    const attempt = state.attempts[problem.id];
    const selected = attempt ? attempt.choice : drafts.get(problem.id) ?? null;
    const name = `choice-${problem.id}`;
    return `
      <article class="problem-card ${attempt ? (attempt.correct ? "answered-correct" : "answered-incorrect") : ""}" data-problem-key="${problem.id}" data-section="${problem.section}" tabindex="-1">
        ${view.toplineHtml(problem)}
        ${view.statementHtml(problem)}
        <form class="answer-form" data-answer-form="${problem.id}" novalidate>
          ${view.choicesHtml(problem, { name, selected, mode: attempt ? "locked" : "open" })}
          ${attempt
            ? feedbackHtml(problem, attempt)
            : `<div class="answer-actions">
                <button type="submit" class="check-answer">${uiHtml("checkAnswer")}</button>
                <p class="answer-hint" role="alert" hidden>${uiHtml("chooseFirst")}</p>
              </div>`}
        </form>
        ${view.tagsHtml(problem)}
        ${progressControl(problem.id)}
      </article>`;
  }

  function pageHtml(items) {
    let lastPassage = null;
    return items.map((problem) => {
      let html = "";
      if (problem.passageId && problem.passageId !== lastPassage) html += view.passageHtml(passageById.get(problem.passageId));
      lastPassage = problem.passageId ?? null;
      return html + cardHtml(problem);
    }).join("");
  }

  // --- List -------------------------------------------------------------------

  let filterKey = "";

  function renderList() {
    if (state.activeView !== "problems") return;
    renderProgressOverview();
    const list = $("#problemList");
    window.MathJax?.typesetClear?.([list]);
    const key = JSON.stringify([selectedConceptId(), state.level, state.section, state.type, state.difficulty, state.progressFilter, state.answerFilter, state.reviewOnly]);
    if (key !== filterKey) state.problemPage = 0;
    filterKey = key;
    const matches = filteredProblems();
    const lastPage = Math.max(0, Math.ceil(matches.length / PAGE_SIZE) - 1);
    state.problemPage = Math.min(state.problemPage, lastPage);
    const start = state.problemPage * PAGE_SIZE;
    const visible = matches.slice(start, start + PAGE_SIZE);
    $("#problemPagination").hidden = matches.length <= PAGE_SIZE;
    $("#previousProblemPage").disabled = state.problemPage === 0;
    $("#nextProblemPage").disabled = state.problemPage === lastPage;
    $("#problemPageRange").textContent = plainTextPair(
      `第 ${matches.length ? start + 1 : 0}–${start + visible.length} 题，共 ${matches.length} 题`,
      `${matches.length ? start + 1 : 0}–${start + visible.length} of ${matches.length} problems`
    );
    $("#problemCount").textContent = `${matches.length} / ${levelProblems().length}`;
    list.innerHTML = visible.length ? pageHtml(visible) : `<p class="empty-state">${uiHtml("noProblems")}</p>`;
    wireList(list);
    typesetMath(list);
  }

  function wireList(container) {
    wireTooltips?.(container);
  }

  function refreshCard(id) {
    const problem = problemById.get(id);
    const article = document.querySelector(`#problemList [data-problem-key="${id}"]`);
    if (!problem || !article) return;
    const template = document.createElement("template");
    template.innerHTML = cardHtml(problem).trim();
    window.MathJax?.typesetClear?.([article]);
    article.replaceWith(template.content.firstElementChild);
    const fresh = document.querySelector(`#problemList [data-problem-key="${id}"]`);
    wireList(fresh);
    typesetMath(fresh);
  }

  function afterStateChange(id, { rerenderList = false } = {}) {
    renderProgressOverview();
    onChange();
    if (rerenderList) renderList();
    else if (id) refreshCard(id);
  }

  function checkAnswer(id) {
    const problem = problemById.get(id);
    const choice = drafts.get(id);
    const form = document.querySelector(`[data-answer-form="${id}"]`);
    if (choice === undefined) {
      const hint = form?.querySelector(".answer-hint");
      if (hint) hint.hidden = false;
      return;
    }
    const correct = choice === problem.answer;
    state.attempts = recordAttempt(state.attempts, id, choice, correct);
    drafts.delete(id);
    persist("attempts");
    if (!correct && !state.reviewCollection.has(id)) {
      state.reviewCollection = new Set([...state.reviewCollection, id]);
      persist("review");
    }
    afterStateChange(id, { rerenderList: state.answerFilter !== "all" || state.reviewOnly });
  }

  function tryAgain(id) {
    state.attempts = clearAttempt(state.attempts, id);
    drafts.delete(id);
    persist("attempts");
    afterStateChange(id, { rerenderList: state.answerFilter !== "all" });
  }

  function toggleReview(id) {
    const next = new Set(state.reviewCollection);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    state.reviewCollection = next;
    persist("review");
    renderProgressOverview();
    onChange();
    document.querySelectorAll(`[data-review-key="${id}"]`).forEach((button) => {
      const saved = state.reviewCollection.has(id);
      const label = saved ? "removeFromReview" : "saveToReview";
      button.setAttribute("aria-pressed", String(saved));
      button.setAttribute("aria-label", uiText(label));
      button.querySelector("[role=tooltip]").innerHTML = uiPair(label);
    });
    if (state.reviewOnly) renderList();
  }

  function setProgress(id, status) {
    state.progress = { ...state.progress, [id]: status };
    persist("progress");
    const control = document.querySelector(`[data-progress-key="${id}"]`);
    if (control) {
      control.dataset.progressStatus = status;
      control.querySelector("summary").textContent = `${uiText("problemProgress")}: ${uiText(PROGRESS_LABEL_KEYS[status])}`;
    }
    renderProgressOverview();
    onChange();
    if (state.progressFilter !== "all") renderList();
  }

  function wireEvents() {
    const list = $("#problemList");
    list.addEventListener("change", (event) => {
      const radio = event.target.closest("input[type=radio]");
      if (!radio) return;
      const article = radio.closest("[data-problem-key]");
      const id = article?.dataset.problemKey;
      if (radio.closest(".problem-choices")?.dataset.mode === "open" && id) {
        drafts.set(id, Number(radio.value));
        article.querySelectorAll(".choice").forEach((label) => label.classList.toggle("is-selected", label.contains(radio)));
        const hint = article.querySelector(".answer-hint");
        if (hint) hint.hidden = true;
      } else if (radio.closest(".problem-progress") && id) {
        setProgress(id, radio.value);
      }
    });
    list.addEventListener("submit", (event) => {
      const form = event.target.closest("[data-answer-form]");
      if (!form) return;
      event.preventDefault();
      checkAnswer(form.dataset.answerForm);
    });
    list.addEventListener("click", (event) => {
      const retry = event.target.closest("[data-try-again]");
      if (retry) return tryAgain(retry.dataset.tryAgain);
      const bookmark = event.target.closest("[data-review-key]");
      if (bookmark) return toggleReview(bookmark.dataset.reviewKey);
    });
    for (const [id, delta] of [["previousProblemPage", -1], ["nextProblemPage", 1]]) {
      $(`#${id}`).addEventListener("click", () => {
        state.problemPage += delta;
        renderList();
        $("#problemPagination").scrollIntoView({ block: "start" });
      });
    }
    const bind = (selector, key, transform = (value) => value) => {
      $(selector).addEventListener("change", (event) => {
        state[key] = transform(event.target.value);
        renderList();
      });
    };
    bind("#conceptFilter", "problemConcept");
    bind("#sectionFilter", "section");
    bind("#typeFilter", "type");
    bind("#difficultyFilter", "difficulty");
    bind("#answerFilter", "answerFilter");
    bind("#problemProgressFilter", "progressFilter");
    bind("#reviewOnly", "reviewOnly", (value) => value === "saved");
    $("#exportProgress").addEventListener("click", downloadProgress);
  }

  function downloadProgress() {
    let url;
    const link = document.createElement("a");
    $("#progressExportError").hidden = true;
    try {
      const snapshot = exportProgress(problems, state, concepts);
      url = URL.createObjectURL(new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" }));
      link.href = url;
      link.download = `isee-progress-${snapshot.exportedAt.slice(0, 10)}.json`;
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

  // Shows one problem on its own page of the explorer and highlights it.
  function openProblem(id) {
    const problem = problemById.get(id);
    if (!problem) return false;
    Object.assign(state, {
      problemConcept: "all",
      section: problem.section,
      type: "all",
      difficulty: "all",
      progressFilter: "all",
      answerFilter: "all",
      reviewOnly: false
    });
    const index = filteredProblems().findIndex((item) => item.id === id);
    filterKey = JSON.stringify([selectedConceptId(), state.level, state.section, state.type, state.difficulty, state.progressFilter, state.answerFilter, state.reviewOnly]);
    state.problemPage = Math.max(0, Math.floor(index / PAGE_SIZE));
    return true;
  }

  function highlightProblem(id) {
    const target = document.querySelector(`#problemList [data-problem-key="${id}"]`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("problem-highlight");
    target.focus({ preventScroll: true });
    setTimeout(() => target.classList.remove("problem-highlight"), 1600);
  }

  return {
    populateFilters,
    renderList,
    renderProgressOverview,
    wireEvents,
    openProblem,
    highlightProblem,
    filteredProblems,
    cardHtml,
    refreshCard
  };
}

