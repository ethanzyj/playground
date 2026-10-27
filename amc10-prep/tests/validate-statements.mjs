import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const root = new URL("../", import.meta.url);
const allowedTags = new Set([
  "b", "strong", "i", "em", "u", "sub", "sup", "br", "p", "div", "span",
  "table", "thead", "tbody", "tr", "td", "th", "ul", "ol", "li", "img"
]);
let diagrams = 0;

for (let year = 2016; year <= 2025; year += 1) {
  for (const variant of ["A", "B"]) {
    const paper = `${year}${variant}`;
    const data = JSON.parse(readFileSync(new URL(`assets/exams/${paper}.json`, root), "utf8"));
    assert.deepEqual(Object.keys(data).sort(), ["exam", "problems", "sourceName", "sourceUrl", "year"]);
    assert.equal(data.year, year);
    assert.equal(data.exam, `AMC 10${variant}`);
    assert.equal(data.sourceUrl, `https://live.poshenloh.com/past-contests/amc10/${paper}`);
    assert.equal(data.sourceName, "LIVE by Po-Shen Loh");
    assert.equal(data.problems.length, 25);
    data.problems.forEach((problem, index) => {
      assert.deepEqual(Object.keys(problem).sort(), ["choices", "problemNumber", "statementHtml"]);
      assert.equal(problem.problemNumber, index + 1);
      assert.equal(problem.choices.length, 5);
      for (const html of [problem.statementHtml, ...problem.choices]) {
        assert.equal(typeof html, "string");
        assert.ok(html.trim().length > 0, `${paper} #${index + 1} contains empty content`);
        for (const [tag, name] of html.matchAll(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi)) {
          assert.ok(allowedTags.has(name), `Unexpected HTML: ${tag}`);
          if (name === "img") {
            const src = tag.match(/src="([^"]+)"/)?.[1];
            assert.match(src, /^assets\/exams\/images\/amc10\/\d{4}[AB]\/[\w.-]+\.(svg|png|jpg|jpeg|webp)$/);
            assert.ok(existsSync(new URL(src, root)), `Missing diagram: ${src}`);
            assert.match(tag, /alt="[^"]+"/);
            assert.match(tag, /^<img src="[^"]+" alt="[^"]+" loading="lazy">$/);
            diagrams += 1;
          } else {
            assert.match(tag, /^<\/?[a-z]+>$/i, `Unexpected attributes: ${tag}`);
          }
        }
      }
    });
  }
}
assert.ok(diagrams > 0, "Imported exams must include their diagrams.");
const app = readFileSync(new URL("assets/app.mjs", root), "utf8");
const html = readFileSync(new URL("index.html", root), "utf8");
assert.ok(!html.includes("data-problem-mode") && app.includes('state.year !== "all" && state.exam !== "all"'), "Selecting one year and exam must automatically show the full paper.");
assert.ok(html.includes('id="examAttribution"'), "Full exams must credit the source.");
assert.ok(app.includes("version !== problemRenderVersion"), "Stale loads must not replace a newer selection.");
assert.ok(app.includes('id="retryExam"'), "Failed loads must offer a retry.");
console.log(`Validated 20 full exams, 500 statements, 2,500 choices, and ${diagrams} diagram references.`);
