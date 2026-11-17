import { test } from "node:test";
import assert from "node:assert/strict";
import { renderFigure } from "../assets/figures.mjs";
import { escapeHtml } from "../assets/rich-text.mjs";

const opts = { alt: "alt text", escape: escapeHtml, renderCell: (cell) => escapeHtml(cell) };

test("bar chart draws one rect per value with gridlines and labels", () => {
  const html = renderFigure({
    kind: "bar", titleEn: "Laps", labels: ["Mon", "Tue", "Wed", "Thu"], series: [{ values: [8, 12, 6, 10] }], yLabelEn: "Laps"
  }, opts);
  assert.equal((html.match(/class="fig-bar /g) || []).length, 4);
  assert.ok(html.includes("Mon") && html.includes("Thu"));
  assert.ok(/fig-grid/.test(html));
  assert.ok(!/NaN|undefined|Infinity/.test(html), "chart output must not contain NaN");
});

test("multi-series bar chart shows a legend", () => {
  const html = renderFigure({
    kind: "bar", labels: ["A", "B"], series: [{ nameEn: "Boys", values: [3, 5] }, { nameEn: "Girls", values: [4, 2] }]
  }, opts);
  assert.equal((html.match(/class="fig-bar /g) || []).length, 4);
  assert.ok(html.includes("fig-legend") && html.includes("Boys") && html.includes("Girls"));
});

test("line chart draws a polyline and a dot per point", () => {
  const html = renderFigure({ kind: "line", labels: ["1", "2", "3"], series: [{ values: [2, 4, 3] }] }, opts);
  assert.equal((html.match(/<polyline/g) || []).length, 1);
  assert.equal((html.match(/<circle/g) || []).length, 3);
});

test("pie chart labels slices and treats totals of 100 as percents", () => {
  const html = renderFigure({ kind: "pie", slices: [{ label: "Red", value: 40 }, { label: "Blue", value: 35 }, { label: "Green", value: 25 }] }, opts);
  assert.equal((html.match(/class="fig-slice /g) || []).length, 3);
  assert.ok(html.includes("Red 40%"));
  assert.ok(!/NaN|undefined/.test(html));
});

test("pie chart with counts does not add a percent sign", () => {
  const html = renderFigure({ kind: "pie", slices: [{ label: "Cats", value: 6 }, { label: "Dogs", value: 9 }] }, opts);
  assert.ok(html.includes("Cats 6<") && !html.includes("Cats 6%"));
});

test("table figure renders headers, a row header column and escapes cells", () => {
  const html = renderFigure({ kind: "table", captionEn: "Books", headers: ["Student", "Books"], rows: [["Maya", "12"], ["<b>Leo</b>", "7"]] }, opts);
  assert.ok(html.includes('<th scope="col">Student</th>'));
  assert.ok(html.includes('<th scope="row">Maya</th><td>12</td>'));
  assert.ok(html.includes("&lt;b&gt;Leo&lt;/b&gt;"));
  assert.ok(html.includes("<caption>Books</caption>"));
});

test("svg figures keep their markup and expose the alt text", () => {
  const html = renderFigure({ kind: "svg", svg: '<svg viewBox="0 0 10 10"><circle r="3"/></svg>' }, opts);
  assert.ok(html.includes('role="img" aria-label="alt text"'));
  assert.ok(html.includes('<svg viewBox="0 0 10 10">'));
});

test("unknown figure kinds are rejected", () => {
  assert.throws(() => renderFigure({ kind: "radar" }, opts), /Unknown figure kind/);
});
