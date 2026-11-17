// Timed practice panel: setup, running test (wall-clock deadline), results.

import { escapeHtml } from "./rich-text.mjs?v=20261116-3";
import { recordAttempt } from "./progress.mjs?v=20261116-3";
import {
  TEST_PACE_SECONDS,
  TEST_COUNTS,
  MIXED_PLAN,
  buildTest,
  createSession,
  validateTestSession,
  finishSession,
  remainingMs,
  scoreSession,
  formatClock
} from "./test-mode.mjs?v=20261116-3";

const SECTIONS = ["verbal", "quantitative", "reading", "mathematics", "mixed"];

export function createTestPanel(ctx) {
  const { state, store, i18n, view, problems, concepts, $, typesetMath, deepLink, persist, onAttempts, onClose, onSessionChange, now = () => Date.now() } = ctx;
  const { uiText, uiHtml, uiPair, textPair, plainTextPair, levelText, sectionText } = i18n;
  const byId = new Map(problems.map((problem) => [problem.id, problem]));
  const passageById = new Map(ctx.passages.map((passage) => [passage.id, passage]));
  const conceptById = new Map(concepts.map((concept) => [concept.id, concept]));
  const validIds = new Set(byId.keys());
  const panel = $("#testModePanel");
  let session = null;
  let setupOpen = false;
  // The level always follows the site-wide level chosen in the top bar (state.level).
  let setup = { section: "verbal", count: 10, prioritize: true };
  let message = "";
  let timer = null;

  function saveSession() {
    if (!store.write("test-session", session)) message = uiText("testSaveError");
  }

  function restore() {
    session = null;
    message = "";
    try {
      const saved = store.read("test-session", null);
      if (saved) session = validateTestSession(saved, validIds);
    } catch (error) {
      console.error("Unable to restore the timed test.", error);
      message = uiText("testRestoreError");
    }
    tick(false);
    ensureTimer();
  }

  // The countdown must keep running (and auto-submit) even when another tab is showing.
  function ensureTimer() {
    if (!timer) timer = window.setInterval(() => tick(), 1000);
  }

  function estimate(level, section, count) {
    const pace = TEST_PACE_SECONDS[level];
    const passageSize = level === "lower" ? 5 : 6;
    let seconds;
    let questions;
    if (section === "mixed") {
      questions = MIXED_PLAN.reduce((sum, [part, amount]) => sum + (part === "reading" ? amount * passageSize : amount), 0);
      seconds = MIXED_PLAN.reduce((sum, [part, amount]) => sum + (part === "reading" ? amount * passageSize : amount) * pace[part], 0);
    } else if (section === "reading") {
      questions = count * passageSize;
      seconds = questions * pace.reading;
    } else {
      questions = count;
      seconds = count * pace[section];
    }
    return { questions, minutes: Math.ceil(seconds / 60) };
  }

  function availableCount(level, section) {
    const pool = problems.filter((problem) => problem.level === level && (section === "mixed" || problem.section === section));
    if (section === "reading") return new Set(pool.map((problem) => problem.passageId)).size;
    return pool.length;
  }

  function countOptions(section) {
    return TEST_COUNTS[section];
  }

  function normalizeSetup() {
    const options = countOptions(setup.section);
    const available = availableCount(state.level, setup.section);
    const usable = options.filter((count) => count <= Math.max(available, options[0]));
    if (!usable.includes(setup.count)) setup.count = usable[usable.length - 1] ?? options[0];
  }

  function start() {
    normalizeSetup();
    const keys = buildTest({
      problems,
      level: state.level,
      section: setup.section,
      count: setup.count,
      seed: Math.floor(Math.random() * 2 ** 31),
      attempts: state.attempts,
      prioritize: setup.prioritize
    });
    if (!keys.length) {
      message = uiText("testNoProblems");
      render();
      return;
    }
    session = createSession({ id: `t${now().toString(36)}`, level: state.level, section: setup.section, keys, byId, now: now() });
    message = "";
    setupOpen = false;
    saveSession();
    render();
  }

  function applyResults() {
    const score = scoreSession(session, byId);
    let attempts = state.attempts;
    const review = new Set(state.reviewCollection);
    for (const question of score.questions) {
      if (question.status === "blank") continue;
      attempts = recordAttempt(attempts, question.key, question.choice, question.status === "correct", new Date(session.completedAt ?? now()).toISOString());
      if (question.status === "wrong") review.add(question.key);
    }
    state.attempts = attempts;
    state.reviewCollection = review;
    persist("attempts");
    persist("review");
    onAttempts();
  }

  function finish() {
    if (!session || session.status !== "running") return;
    session = finishSession(session, now());
    saveSession();
    applyResults();
    render();
  }

  function clearSession() {
    session = null;
    store.remove("test-session");
    setupOpen = false;
    message = "";
    render();
    onClose?.();
  }

  function tick(rerender = true) {
    if (!session || session.status !== "running") return;
    if (remainingMs(session, now()) <= 0) {
      finish();
      return;
    }
    const clock = panel.querySelector("[data-test-clock]");
    if (clock && rerender) {
      const left = remainingMs(session, now());
      clock.textContent = formatClock(left);
      clock.classList.toggle("test-clock-urgent", left <= 60000);
    }
  }

  // --- Rendering -------------------------------------------------------------

  function selectOption(value, label, selected) {
    return `<option value="${value}" ${selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
  }

  function setupHtml() {
    normalizeSetup();
    const available = availableCount(state.level, setup.section);
    const options = countOptions(setup.section);
    const info = estimate(state.level, setup.section, setup.count);
    return `
      <form class="test-setup" data-test-form>
        <p class="test-level-note"><strong>${uiHtml("testLevel")}: ${escapeHtml(levelText(state.level))}</strong> · ${uiHtml("testLevelHint")}</p>
        <div class="test-setup-grid">
          <label><span>${uiHtml("testSection")}</span>
            <select name="section">${SECTIONS.map((id) => selectOption(id, id === "mixed" ? uiText("testMixed") : sectionText(id), id === setup.section)).join("")}</select></label>
          ${setup.section === "mixed" ? "" : `
          <label><span>${uiHtml(setup.section === "reading" ? "testPassages" : "testQuestions")}</span>
            <select name="count">${options.map((count) => `<option value="${count}" ${count === setup.count ? "selected" : ""} ${count > Math.max(available, options[0]) ? "disabled" : ""}>${count}</option>`).join("")}</select></label>`}
        </div>
        <label class="test-check"><input type="checkbox" name="prioritize" ${setup.prioritize ? "checked" : ""}> <span>${uiHtml("testPrioritize")}</span></label>
        <p class="test-estimate">${escapeHtml(plainTextPair(
          `约 ${info.questions} 道题 · ${info.minutes} 分钟（按真实 ISEE 节奏）`,
          `About ${info.questions} questions · ${info.minutes} minutes (real ISEE pace)`
        ))}</p>
        <button type="submit" class="mastery" data-test-action="start">${uiHtml("testStart")}</button>
      </form>`;
  }

  function idleHtml() {
    return `
      <div class="test-mode-intro">
        <div>
          <h3>${uiPair("timedPractice")}</h3>
          <p>${uiPair("timedPracticeCopy")}</p>
        </div>
        <button type="button" class="mastery" data-test-action="${setupOpen ? "cancel" : "setup"}">${uiHtml(setupOpen ? "testCancel" : "testChoose")}</button>
      </div>
      ${message ? `<p role="alert">${escapeHtml(message)}</p>` : ""}
      ${setupOpen ? setupHtml() : ""}`;
  }

  function questionsHtml(mode) {
    let lastPassage = null;
    return session.keys.map((key, index) => {
      const problem = byId.get(key);
      let passage = "";
      if (problem.passageId && problem.passageId !== lastPassage) passage = view.passageHtml(passageById.get(problem.passageId));
      lastPassage = problem.passageId ?? null;
      const choice = Number.isInteger(session.answers[key]) ? session.answers[key] : null;
      const status = mode === "review" ? (choice === null ? "blank" : choice === problem.answer ? "correct" : "wrong") : "";
      const header = `<h4 class="test-question-title">${plainTextPair(`第 ${index + 1} 题`, `Question ${index + 1}`)} <span class="muted">· ${escapeHtml(plainTextPair(sectionText(problem.section), sectionText(problem.section)))}</span></h4>`;
      const review = mode === "review"
        ? `<div class="answer-feedback ${status === "correct" ? "is-correct" : "is-incorrect"}">
            <p class="answer-result"><strong>${status === "correct" ? `✓ ${uiHtml("correct")}` : status === "blank" ? `○ ${uiHtml("testBlank")}` : `✗ ${uiHtml("incorrect")}`}</strong>
              ${status === "correct" ? "" : `${uiHtml("correctAnswerIs")} <strong>${view.LETTERS[problem.answer]}</strong>.`}</p>
            ${view.explanationHtml(problem)}
            ${view.wordCheckHtml(problem)}
            ${view.tagsHtml(problem)}
          </div>`
        : "";
      return `${passage}
        <section class="test-question ${status ? `status-${status}` : ""}" data-test-key="${key}">
          ${header}
          ${view.statementHtml(problem)}
          ${view.choicesHtml(problem, { name: `test-${session.id}-${key}`, selected: choice, mode: mode === "review" ? "review" : "test" })}
          ${review}
        </section>`;
    }).join("");
  }

  function runningHtml() {
    const answered = Object.keys(session.answers).length;
    return `
      <div class="test-mode-header">
        <div>
          <p class="test-eyebrow">${escapeHtml(levelText(session.level))} · ${escapeHtml(session.section === "mixed" ? uiText("testMixed") : sectionText(session.section))}</p>
          <h3>${uiPair("timedPractice")}</h3>
          <p class="muted" data-test-progress>${escapeHtml(plainTextPair(`已作答 ${answered} / ${session.keys.length}`, `Answered ${answered} / ${session.keys.length}`))}</p>
        </div>
        <div class="test-clock-wrap"><span>${uiHtml("testTimeLeft")}</span><strong data-test-clock>${formatClock(remainingMs(session, now()))}</strong></div>
        <button type="button" class="mastery" data-test-action="finish">${uiHtml("testFinish")}</button>
      </div>
      <p class="muted test-note">${uiHtml("testNote")}</p>
      <div class="test-questions">${questionsHtml("test")}</div>
      <div class="test-footer"><button type="button" class="mastery" data-test-action="finish">${uiHtml("testFinish")}</button></div>`;
  }

  function resultsHtml() {
    const score = scoreSession(session, byId);
    const used = Math.min(session.durationMs, (session.completedAt ?? now()) - session.startedAt);
    const weak = score.byConcept.filter((row) => row.correct < row.total && conceptById.has(row.conceptId)).slice(0, 5);
    return `
      <div class="test-mode-header">
        <div>
          <p class="test-eyebrow">${escapeHtml(levelText(session.level))} · ${escapeHtml(session.section === "mixed" ? uiText("testMixed") : sectionText(session.section))}</p>
          <h3>${uiPair("testResults")}</h3>
        </div>
        <button type="button" class="mastery" data-test-action="clear">${uiHtml("testClose")}</button>
      </div>
      <div class="test-complete" role="status">
        <p class="test-score"><strong>${score.correct} / ${score.total}</strong> ${uiHtml("answerCorrectShort")} · ${Math.round(score.percent * 100)}%</p>
        <p>${score.wrong} ${uiHtml("answerIncorrectShort")} · ${score.blank} ${uiHtml("testBlank")} · ${escapeHtml(plainTextPair("用时", "Time used"))} ${formatClock(used)} / ${formatClock(session.durationMs)}${session.status === "expired" ? ` · ${uiHtml("testAutoSubmitted")}` : ""}</p>
        <p class="muted">${uiHtml("testRecorded")}</p>
        ${score.bySection.length > 1 ? `<table class="test-breakdown"><tbody>${score.bySection.map((row) => `<tr><th scope="row">${escapeHtml(sectionText(row.section))}</th><td>${row.correct} / ${row.total}</td></tr>`).join("")}</tbody></table>` : ""}
        ${weak.length ? `
          <h4>${uiPair("testFocus")}</h4>
          <ul class="test-focus">${weak.map((row) => {
            const concept = conceptById.get(row.conceptId);
            return `<li><a class="concept-tag" href="${deepLink("concept", row.conceptId)}" target="_blank" rel="noopener">${textPair(escapeHtml(concept.zh), escapeHtml(concept.en))}</a> <span class="muted">${row.correct} / ${row.total}</span></li>`;
          }).join("")}</ul>` : ""}
        <button type="button" class="mastery" data-test-action="again">${uiHtml("testAgain")}</button>
      </div>
      <h4 class="test-review-heading">${uiPair("testReview")}</h4>
      <div class="test-questions">${questionsHtml("review")}</div>`;
  }

  function render() {
    panel.setAttribute("aria-label", uiText("timedPractice"));
    const active = Boolean(session);
    $("#problemsPanel").classList.toggle("test-mode-active", active);
    window.MathJax?.typesetClear?.([panel]);
    if (!session) panel.innerHTML = idleHtml();
    else if (session.status === "running") panel.innerHTML = runningHtml();
    else panel.innerHTML = resultsHtml();
    if (session) typesetMath(panel);
    ensureTimer();
    onSessionChange?.();
  }

  function wire() {
    panel.addEventListener("click", (event) => {
      const action = event.target.closest("[data-test-action]")?.dataset.testAction;
      if (!action || action === "start") return;
      if (action === "setup") { setupOpen = true; render(); }
      else if (action === "cancel") { setupOpen = false; render(); }
      else if (action === "finish") finish();
      else if (action === "clear") clearSession();
      else if (action === "again") {
        const { section } = session;
        clearSession();
        setup = { ...setup, section };
        setupOpen = true;
        render();
      }
    });
    panel.addEventListener("change", (event) => {
      const form = event.target.closest("[data-test-form]");
      if (form) {
        const data = new FormData(form);
        setup = {
          section: data.get("section"),
          count: Number(data.get("count") ?? setup.count),
          prioritize: form.elements.prioritize.checked
        };
        render();
        return;
      }
      const radio = event.target.closest("input[type=radio]");
      const question = radio?.closest("[data-test-key]");
      if (radio && question && session?.status === "running") {
        session = { ...session, answers: { ...session.answers, [question.dataset.testKey]: Number(radio.value) } };
        saveSession();
        question.querySelectorAll(".choice").forEach((label) => label.classList.toggle("is-selected", label.contains(radio)));
        const progress = panel.querySelector("[data-test-progress]");
        if (progress) progress.textContent = plainTextPair(`已作答 ${Object.keys(session.answers).length} / ${session.keys.length}`, `Answered ${Object.keys(session.answers).length} / ${session.keys.length}`);
      }
    });
    panel.addEventListener("submit", (event) => {
      if (!event.target.closest("[data-test-form]")) return;
      event.preventDefault();
      start();
    });
    document.addEventListener("visibilitychange", () => tick());
    window.addEventListener("storage", (event) => {
      if (event.key === store.key("test-session")) { restore(); render(); }
    });
  }

  return { render, restore, wire, get active() { return Boolean(session); }, get running() { return session?.status === "running"; }, get sessionLevel() { return session?.level; } };
}
