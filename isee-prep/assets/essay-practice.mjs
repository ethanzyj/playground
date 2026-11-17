// Essay practice: original ISEE-style prompts, a 30-minute timer, an autosaving
// writing area with a word count, and a self-check list. Essays are not scored.

import { escapeHtml } from "./rich-text.mjs?v=20261116-2";
import { formatClock } from "./test-mode.mjs?v=20261116-2";

const ESSAY_MINUTES = 30;
const CHECKLIST = ["essayCheck1", "essayCheck2", "essayCheck3", "essayCheck4", "essayCheck5"];

export function createEssayPractice({ store, i18n, prompts, getLevel }) {
  const { uiText, uiHtml, uiPair, textPair, plainTextPair } = i18n;
  let promptId = null;
  let timerEnd = null;
  let pausedMs = null;
  let ticker = null;

  const draftKey = (id) => `essay-${id}`;
  const checkKey = (id) => `essay-check-${id}`;

  function words(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }

  function stopTicker() {
    if (ticker) clearInterval(ticker);
    ticker = null;
  }

  function remaining() {
    if (pausedMs !== null) return pausedMs;
    if (timerEnd === null) return ESSAY_MINUTES * 60000;
    return Math.max(0, timerEnd - Date.now());
  }

  function render(container) {
    stopTicker();
    if (!container) return;
    // Prompts follow the site-wide level; drafts stay saved, so switching levels never loses writing.
    const visible = prompts.filter((prompt) => prompt.level === getLevel());
    let selected = visible.find((prompt) => prompt.id === promptId);
    if (!selected && promptId) {
      promptId = null;
      timerEnd = null;
      pausedMs = null;
      selected = undefined;
    }
    container.innerHTML = `
      <div class="study-section-heading">
        <h3>${uiHtml("essayPractice")}</h3>
        <span class="result-count">${visible.length}</span>
      </div>
      <p class="muted">${uiHtml("essayPracticeCopy")}</p>
      <ul class="essay-prompts">
        ${visible.map((prompt) => `
          <li class="essay-prompt ${prompt.id === promptId ? "active" : ""}">
            <p class="essay-prompt-text">${textPair(escapeHtml(prompt.promptZh), escapeHtml(prompt.promptEn))}</p>
            <details>
              <summary>${uiHtml("essayIdeas")}</summary>
              <ul>${prompt.ideasEn.map((idea, index) => `<li>${textPair(escapeHtml(prompt.ideasZh[index]), escapeHtml(idea))}</li>`).join("")}</ul>
            </details>
            <button type="button" class="mastery" data-essay-start="${prompt.id}">${uiHtml(prompt.id === promptId ? "essayWritingNow" : "essayWrite")}</button>
          </li>`).join("")}
      </ul>
      ${selected ? writerHtml(selected) : ""}`;
    wire(container, selected);
  }

  function writerHtml(prompt) {
    const draft = store.read(draftKey(prompt.id), "");
    const checks = store.read(checkKey(prompt.id), []);
    return `
      <div class="essay-writer" data-essay-writer="${prompt.id}">
        <h4>${uiPair("essayYourEssay")}</h4>
        <p class="essay-prompt-text">${textPair(escapeHtml(prompt.promptZh), escapeHtml(prompt.promptEn))}</p>
        <div class="essay-toolbar">
          <span class="essay-clock-wrap"><span>${uiHtml("essayTimer")}</span> <strong data-essay-clock>${formatClock(remaining())}</strong></span>
          <button type="button" class="mastery" data-essay-timer="toggle">${uiHtml(timerEnd !== null && pausedMs === null ? "essayPause" : "essayStartTimer")}</button>
          <button type="button" class="mastery" data-essay-timer="reset">${uiHtml("essayReset")}</button>
          <span class="muted" data-essay-words>0 ${uiHtml("essayWords")}</span>
        </div>
        <textarea data-essay-text rows="14" spellcheck="true" aria-label="${escapeHtml(uiText("essayYourEssay"))}" placeholder="${escapeHtml(uiText("essayPlaceholder"))}">${escapeHtml(draft)}</textarea>
        <p class="muted" data-essay-saved>${uiHtml("essaySaved")}</p>
        <fieldset class="essay-checklist">
          <legend>${uiHtml("essayChecklist")}</legend>
          ${CHECKLIST.map((key) => `<label class="test-check"><input type="checkbox" data-essay-check="${key}" ${checks.includes(key) ? "checked" : ""}> <span>${uiHtml(key)}</span></label>`).join("")}
        </fieldset>
        <button type="button" class="text-button" data-essay-clear>${uiHtml("essayClear")}</button>
      </div>`;
  }

  function wire(container, prompt) {
    container.querySelectorAll("[data-essay-start]").forEach((button) => {
      button.addEventListener("click", () => {
        promptId = button.dataset.essayStart;
        timerEnd = null;
        pausedMs = null;
        render(container);
        container.querySelector("[data-essay-text]")?.focus();
      });
    });
    if (!prompt) return;
    const text = container.querySelector("[data-essay-text]");
    const count = container.querySelector("[data-essay-words]");
    const saved = container.querySelector("[data-essay-saved]");
    const clock = container.querySelector("[data-essay-clock]");
    const updateCount = () => {
      count.textContent = plainTextPair(`${words(text.value)} 词`, `${words(text.value)} words`);
    };
    updateCount();
    text.addEventListener("input", () => {
      updateCount();
      saved.textContent = store.write(draftKey(prompt.id), text.value) ? uiText("essaySaved") : uiText("essaySaveError");
    });
    container.querySelectorAll("[data-essay-check]").forEach((box) => {
      box.addEventListener("change", () => {
        const checked = [...container.querySelectorAll("[data-essay-check]")].filter((item) => item.checked).map((item) => item.dataset.essayCheck);
        store.write(checkKey(prompt.id), checked);
      });
    });
    container.querySelector("[data-essay-clear]").addEventListener("click", () => {
      if (text.value && !window.confirm(uiText("essayClearConfirm"))) return;
      text.value = "";
      store.remove(draftKey(prompt.id));
      updateCount();
    });
    const tick = () => {
      clock.textContent = formatClock(remaining());
      clock.classList.toggle("test-clock-urgent", remaining() <= 60000 && timerEnd !== null);
      if (timerEnd !== null && pausedMs === null && remaining() <= 0) stopTicker();
    };
    container.querySelectorAll("[data-essay-timer]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.essayTimer;
        if (action === "reset") {
          timerEnd = null;
          pausedMs = null;
          stopTicker();
        } else if (timerEnd !== null && pausedMs === null) {
          pausedMs = remaining();
          stopTicker();
        } else {
          timerEnd = Date.now() + (pausedMs ?? ESSAY_MINUTES * 60000);
          pausedMs = null;
        }
        render(container);
        container.querySelector("[data-essay-text]")?.focus();
      });
    });
    if (timerEnd !== null && pausedMs === null) ticker = setInterval(tick, 1000);
    tick();
  }

  return { render };
}
