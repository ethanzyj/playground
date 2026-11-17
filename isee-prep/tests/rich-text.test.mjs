import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, slugifyTerm, createGlossaryLinker, withBlanks } from "../assets/rich-text.mjs";

const GLOSSARY = [
  { kind: "math", en: "Mean", zh: "平均数", categoryEn: "Data", categoryZh: "数据", noteEn: "x", noteZh: "x", conceptIds: [] },
  { kind: "math", en: "Least Common Multiple", zh: "最小公倍数", categoryEn: "Numbers", categoryZh: "数", noteEn: "x", noteZh: "x", conceptIds: [] },
  { kind: "math", en: "Heron's Formula", zh: "海伦公式", categoryEn: "Geometry", categoryZh: "几何", noteEn: "x", noteZh: "x", conceptIds: [] },
  { kind: "vocab", en: "meticulous", zh: "细致的", categoryEn: "Character", categoryZh: "品格", noteEn: "x", noteZh: "x", conceptIds: [] }
];

test("escapeHtml escapes the four dangerous characters", () => {
  assert.equal(escapeHtml(`a < b & "c" > d`), "a &lt; b &amp; &quot;c&quot; &gt; d");
});

test("slugifyTerm produces stable anchors", () => {
  assert.equal(slugifyTerm("Heron's Formula"), "heron-s-formula");
  assert.equal(slugifyTerm("  Least Common Multiple "), "least-common-multiple");
});

test("linker links each non-vocabulary term once per block and never vocabulary words", () => {
  const linker = createGlossaryLinker(GLOSSARY);
  const html = linker.render("The mean is not the same as the Mean of a set; a meticulous student knows.");
  assert.equal((html.match(/glossary-term-link/g) || []).length, 1);
  assert.ok(html.includes('data-glossary-term-slug="mean"'));
  assert.ok(!html.includes("meticulous</span>"));
});

test("linker leaves TeX untouched (but escaped) and handles plurals and possessives", () => {
  const linker = createGlossaryLinker(GLOSSARY);
  const html = linker.render(String.raw`Find the \(\text{mean}<5\) first; Heron’s formula and least common multiples follow.`);
  assert.ok(html.includes(String.raw`\(\text{mean}&lt;5\)`), html);
  assert.ok(html.includes('data-glossary-term-slug="heron-s-formula"'));
  assert.ok(html.includes('data-glossary-term-slug="least-common-multiple"'));
  assert.ok(!html.includes('data-glossary-term-slug="mean"'), "mean inside TeX must not be linked");
});

test("linker only links the requested kinds and never links inflected 'means'", () => {
  const linker = createGlossaryLinker([...GLOSSARY, { kind: "literary", en: "Metaphor", zh: "隐喻", categoryEn: "Figurative", categoryZh: "修辞", noteEn: "x", noteZh: "x", conceptIds: [] }]);
  const text = "A metaphor means one thing; the mean of the data differs.";
  const literary = linker.render(text, { kinds: ["literary"] });
  assert.ok(literary.includes('data-glossary-term-slug="metaphor"') && !literary.includes('data-glossary-term-slug="mean"'));
  const math = linker.render(text, { kinds: ["math"] });
  assert.ok(math.includes('data-glossary-term-slug="mean"') && !math.includes('data-glossary-term-slug="metaphor"'));
  assert.equal((math.match(/glossary-term-link/g) || []).length, 1, "'means' must not be linked, 'mean' must");
  assert.ok(!linker.render(text, { kinds: [] }).includes("glossary-term-link"));
});

test("linker does not link inside longer words and can be disabled", () => {
  const linker = createGlossaryLinker(GLOSSARY);
  assert.ok(!linker.render("Meaning and meander").includes("glossary-term-link"));
  assert.ok(!linker.render("the mean value", { link: false }).includes("glossary-term-link"));
});

test("linker escapes HTML in plain text", () => {
  const linker = createGlossaryLinker(GLOSSARY);
  assert.equal(linker.render("a <b>bold</b> & more", { link: false }), "a &lt;b&gt;bold&lt;/b&gt; &amp; more");
});

test("withBlanks converts five underscores to a gap element", () => {
  const html = withBlanks("He was _____ and _____.");
  assert.equal((html.match(/class="blank"/g) || []).length, 2);
});
