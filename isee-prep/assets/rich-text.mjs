// DOM-free text helpers shared by the app and the tests.

const MATH_SEGMENT = /(\\\([^]*?\\\))/g;
const DEFAULT_KINDS = ["math", "literary"];

export function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  })[character]);
}

export function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function slugifyTerm(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Builds an inline glossary linker. Only math and literary terms are linked
// inline; vocabulary words are looked up from the Glossary, not auto-linked, so
// ordinary prose is not littered with dotted underlines. Callers pass the kinds
// that make sense for the surrounding content (math terms in math text, literary
// terms in reading and writing text), and each term is linked at most once per
// text block to keep paragraphs readable.
export function createGlossaryLinker(glossary) {
  const byName = new Map(glossary.map((term) => [term.en.toLowerCase(), term]));
  const bySlug = new Map(glossary.map((term) => [slugifyTerm(term.en), term]));
  const linkable = glossary
    .filter((term) => term.kind !== "vocab")
    .sort((a, b) => b.en.length - a.en.length);
  const pattern = linkable.length
    ? new RegExp(
        `(?<![\\w-])(${linkable.map((term) => `${escapeRegExp(term.en).replace(/'/g, "['’]")}(?:['’]s|s)?`).join("|")})(?![\\w-])`,
        "gi"
      )
    : null;

  // Inflected forms of these terms are ordinary words ("this means...").
  const NO_INFLECTION = new Set(["mean"]);

  function resolve(matchText) {
    const lower = matchText.toLowerCase().replace(/’/g, "'");
    if (byName.has(lower)) return byName.get(lower);
    const stem = /'s$/.test(lower) ? lower.slice(0, -2) : lower.endsWith("s") ? lower.slice(0, -1) : null;
    if (stem && byName.has(stem) && !NO_INFLECTION.has(stem)) return byName.get(stem);
    return null;
  }

  // Escapes `text` for HTML and (optionally) links glossary terms outside TeX.
  function render(text, { link = true, kinds = DEFAULT_KINDS } = {}) {
    const seen = new Set();
    return String(text)
      .split(MATH_SEGMENT)
      .map((segment, index) => {
        if (index % 2 === 1) return escapeHtml(segment);
        const escaped = escapeHtml(segment);
        if (!link || !pattern) return escaped;
        return escaped.replace(pattern, (match) => {
          const term = resolve(match);
          if (!term || !kinds.includes(term.kind)) return match;
          const slug = slugifyTerm(term.en);
          if (seen.has(slug)) return match;
          seen.add(slug);
          return `<span class="glossary-term-link" tabindex="0" role="button" aria-describedby="glossary-tooltip" data-glossary-term-slug="${slug}">${match}</span>`;
        });
      })
      .join("");
  }

  return { byName, bySlug, render };
}

// Turns the _____ blank marker of sentence-completion stems into a styled gap.
export function withBlanks(html) {
  return html.replace(/_{5}/g, '<span class="blank" role="img" aria-label="blank"></span>');
}
