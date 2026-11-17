// Shared problem rendering (statement, choices, passage, explanation, word check).
// Every function returns an HTML string; all content text is escaped first.

import { escapeHtml, withBlanks, slugifyTerm } from "./rich-text.mjs?v=20261116-2";
import { renderFigure } from "./figures.mjs?v=20261116-2";
import { SECTION_BY_ID } from "./taxonomy.mjs?v=20261116-2";

const INSTRUCTIONS = {
  synonym: "synonymInstruction",
  "sentence-completion": "sentenceInstruction",
  "quantitative-comparison": "comparisonInstruction"
};

const LETTERS = ["A", "B", "C", "D"];

// Which glossary term kinds may be linked inside a problem's explanation.
const EXPLANATION_LINK_KINDS = { verbal: [], reading: ["literary"], quantitative: ["math"], mathematics: ["math"] };

export function createProblemView({ i18n, linker, conceptById, glossaryByName, deepLink, getLanguage }) {
  const { uiHtml, uiText, uiPair, textPair, plainTextPair, levelShort, difficultyText, strandText } = i18n;

  // Problem text is never glossary-linked: tooltips would give hints away.
  const plain = (text) => linker.render(text, { link: false });
  const linked = (text, section) => linker.render(text, { link: true, kinds: EXPLANATION_LINK_KINDS[section] ?? [] });

  function figureHtml(problem) {
    if (!problem.figure) return "";
    const figure = problem.figure;
    const alt = plainTextPair(figure.altZh, figure.altEn);
    return renderFigure(figure, { alt, escape: escapeHtml, renderCell: plain });
  }

  function statementHtml(problem) {
    const language = getLanguage();
    const instruction = INSTRUCTIONS[problem.type]
      ? `<p class="problem-instruction">${uiPair(INSTRUCTIONS[problem.type])}</p>`
      : "";
    // The Chinese translation sits next to the English text it translates: after it
    // in bilingual mode, before it in Chinese mode (which keeps the English below).
    let stem;
    let after = "";
    if (problem.type === "synonym") {
      stem = `<p class="problem-stem stem-word">${escapeHtml(problem.stem)}</p>`;
    } else if (problem.type === "sentence-completion") {
      stem = `<p class="problem-stem">${withBlanks(plain(problem.stem))}</p>`;
    } else if (problem.type === "quantitative-comparison") {
      stem = problem.stem ? `<p class="problem-stem">${plain(problem.stem)}</p>` : "";
      after = `
        <div class="qc-columns">
          <div class="qc-column"><h4>${uiPair("columnA")}</h4><p>${plain(problem.quantityA)}</p></div>
          <div class="qc-column"><h4>${uiPair("columnB")}</h4><p>${plain(problem.quantityB)}</p></div>
        </div>`;
    } else {
      stem = `<p class="problem-stem">${plain(problem.stem)}</p>`;
    }
    const translation = problem.stemZh && language !== "en"
      ? `<p class="problem-stem-zh" lang="zh">${plain(problem.stemZh)}</p>`
      : "";
    const text = language === "zh" ? translation + stem : stem + translation;
    return `<div class="problem-statement">${instruction}${text}${figureHtml(problem)}${after}</div>`;
  }

  function choiceBody(problem, index) {
    const english = plain(problem.choices[index]);
    const zh = problem.choicesZh?.[index];
    if (!zh || getLanguage() === "en") return `<span class="choice-text">${english}</span>`;
    return `<span class="choice-text">${english}<small class="choice-zh" lang="zh">${escapeHtml(zh)}</small></span>`;
  }

  // mode: "open" (selectable), "locked" (answer checked; shows correct/wrong),
  // "review" (results page; no interaction), or "test" (selectable, never reveals).
  function choicesHtml(problem, { name, selected = null, mode = "open" }) {
    const locked = mode === "locked" || mode === "review";
    return `
      <fieldset class="problem-choices" data-mode="${mode}">
        <legend class="visually-hidden">${uiHtml("chooseOne")}</legend>
        ${problem.choices.map((_, index) => {
          const isSelected = selected === index;
          const isKey = locked && index === problem.answer;
          const isWrong = locked && isSelected && index !== problem.answer;
          const classes = ["choice", isSelected ? "is-selected" : "", isKey ? "is-correct" : "", isWrong ? "is-wrong" : ""].filter(Boolean).join(" ");
          const mark = isKey ? `<span class="choice-mark" aria-label="${uiText("correct")}">✓</span>` : isWrong ? `<span class="choice-mark" aria-label="${uiText("incorrect")}">✗</span>` : "";
          return `
            <label class="${classes}">
              <input type="radio" name="${name}" value="${index}" ${isSelected ? "checked" : ""} ${locked ? "disabled" : ""}>
              <span class="choice-letter" aria-hidden="true">${LETTERS[index]}</span>
              ${choiceBody(problem, index)}
              ${mark}
            </label>`;
        }).join("")}
      </fieldset>`;
  }

  function passageHtml(passage) {
    const language = getLanguage();
    const translation = language === "en" ? "" : `
      <details class="passage-translation" ${language === "zh" ? "open" : ""}>
        <summary>${uiHtml("showTranslation")}</summary>
        <div lang="zh">${passage.paragraphsZh.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
      </details>`;
    return `
      <article class="passage-card" data-passage-id="${passage.id}">
        <p class="eyebrow">${escapeHtml(uiText("passage"))} · ${escapeHtml(i18n.levelText(passage.level))} · ${escapeHtml(i18n.genreText(passage.genre))}</p>
        <h3>${textPair(escapeHtml(passage.titleZh), escapeHtml(passage.titleEn))}</h3>
        <div class="passage-text">${passage.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
        ${translation}
      </article>`;
  }

  function toplineHtml(problem) {
    const section = SECTION_BY_ID.get(problem.section);
    const strand = problem.strand ? ` · ${escapeHtml(strandText(problem.strand))}` : "";
    const kind = escapeHtml(i18n.typeText(problem.type));
    return `
      <h3 class="problem-topline">
        <strong>${escapeHtml(levelShort(problem.level))} · ${section.code} #${problem.number}</strong>
        <span class="difficulty-chip" data-difficulty="${problem.difficulty}">${escapeHtml(difficultyText(problem.difficulty))}</span>
      </h3>
      <p class="problem-meta"><span>${kind}${strand}</span><code class="problem-id">${problem.id}</code></p>`;
  }

  function tagsHtml(problem) {
    const tags = problem.conceptIds.map((id) => conceptById.get(id)).filter(Boolean);
    return `<div class="tags">${tags.map((tag) => `<a class="concept-tag" href="${deepLink("concept", tag.id)}" target="_blank" rel="noopener">${textPair(escapeHtml(tag.zh), escapeHtml(tag.en))}</a>`).join("")}</div>`;
  }

  function explanationHtml(problem) {
    return `
      <div class="answer-explanation">
        <h4>${uiPair("explanation")}</h4>
        <p>${textPair(plain(problem.explanationZh), linked(problem.explanationEn, problem.section))}</p>
      </div>`;
  }

  // Vocabulary aid for verbal items: the stem word and every choice with a Chinese gloss.
  function wordCheckHtml(problem) {
    if (!problem.glosses?.length) return "";
    const language = getLanguage();
    const keyWords = new Set(
      problem.type === "synonym"
        ? [problem.stem.toLowerCase(), problem.choices[problem.answer].toLowerCase()]
        : String(problem.choices[problem.answer]).split(" . . . ").map((word) => word.trim().toLowerCase())
    );
    const body = problem.glosses.map(([word, zh]) => {
      const term = glossaryByName.get(word.toLowerCase());
      const wordHtml = term
        ? `<a href="${deepLink("term", slugifyTerm(term.en))}" target="_blank" rel="noopener">${escapeHtml(word)}</a>`
        : escapeHtml(word);
      const meaning = language === "en"
        ? (term ? `<span lang="en">${escapeHtml(term.noteEn)}</span>` : "")
        : `<span lang="zh">${escapeHtml(zh)}</span>`;
      if (language === "en" && !meaning) return "";
      return `<tr class="${keyWords.has(word.toLowerCase()) ? "is-key" : ""}"><th scope="row">${wordHtml}</th><td>${meaning}</td></tr>`;
    }).join("");
    if (!body.trim()) return "";
    return `
      <div class="word-check">
        <h4>${uiPair("wordCheck")}</h4>
        <table><tbody>${body}</tbody></table>
      </div>`;
  }

  return {
    statementHtml,
    choicesHtml,
    passageHtml,
    toplineHtml,
    tagsHtml,
    explanationHtml,
    wordCheckHtml,
    LETTERS
  };
}
