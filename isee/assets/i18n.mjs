// Language-aware text helpers. `getLanguage()` returns "both", "zh" or "en".

import { UI_TEXT } from "./ui-text.mjs?v=20261116-2";
import { escapeHtml } from "./rich-text.mjs?v=20261116-2";
import {
  LEVEL_BY_ID,
  SECTION_BY_ID,
  TYPE_BY_ID,
  DIFFICULTY_BY_ID,
  STRAND_BY_ID,
  GENRE_BY_ID,
  GLOSSARY_KINDS
} from "./taxonomy.mjs?v=20261116-2";

export function createI18n(getLanguage) {
  // Plain text (attributes, textContent). "both" joins with " / ".
  function plainTextPair(zh, en) {
    const language = getLanguage();
    if (language === "zh") return zh;
    if (language === "en") return en;
    return `${en} / ${zh}`;
  }

  // Both arguments must already be safe HTML.
  function textPair(zh, en) {
    const language = getLanguage();
    if (language === "zh") return `<span lang="zh">${zh}</span>`;
    if (language === "en") return `<span lang="en">${en}</span>`;
    return `<span class="bilingual-pair"><span lang="en">${en}</span><span lang="zh">${zh}</span></span>`;
  }

  function uiText(key) {
    const text = UI_TEXT[key];
    if (!text) throw new Error(`Missing UI text: ${key}`);
    return plainTextPair(text.zh, text.en);
  }

  const uiHtml = (key) => escapeHtml(uiText(key));

  function uiPair(key) {
    const text = UI_TEXT[key];
    if (!text) throw new Error(`Missing UI text: ${key}`);
    return textPair(escapeHtml(text.zh), escapeHtml(text.en));
  }

  const label = (entry, fallback = "") => (entry ? plainTextPair(entry.zh, entry.en) : fallback);
  const pair = (entry, fallback = "") => (entry ? textPair(escapeHtml(entry.zh), escapeHtml(entry.en)) : escapeHtml(fallback));

  return {
    plainTextPair,
    textPair,
    uiText,
    uiHtml,
    uiPair,
    levelText: (id) => label(LEVEL_BY_ID.get(id), id),
    levelPair: (id) => pair(LEVEL_BY_ID.get(id), id),
    levelShort: (id) => plainTextPair(LEVEL_BY_ID.get(id)?.zh ?? id, LEVEL_BY_ID.get(id)?.shortEn ?? id),
    sectionText: (id) => label(SECTION_BY_ID.get(id), id),
    sectionPair: (id) => pair(SECTION_BY_ID.get(id), id),
    typeText: (id) => label(TYPE_BY_ID.get(id), id),
    typePair: (id) => pair(TYPE_BY_ID.get(id), id),
    difficultyText: (id) => label(DIFFICULTY_BY_ID.get(id), id),
    strandText: (id) => label(STRAND_BY_ID.get(id), id),
    genreText: (id) => label(GENRE_BY_ID.get(id), id),
    kindText: (id) => label(GLOSSARY_KINDS.find((kind) => kind.id === id), id)
  };
}
