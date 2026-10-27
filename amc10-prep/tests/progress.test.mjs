import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { JSDOM } from "jsdom";
import { PROBLEM_REFERENCES, allConcepts } from "../assets/data.mjs";
import { problemKey, progressScope, summarizeProgress, exportProgress } from "../assets/progress.mjs";

test("empty selections count all problems as unmarked", () => {
  const summary = summarizeProgress(PROBLEM_REFERENCES, {});
  assert.equal(summary.total, 500);
  assert.equal(summary.marked, 0);
  assert.equal(summary.unmarked, 500);
  assert.ok(summary.statuses.every((entry) => entry.count === 0 && entry.papers.length === 0));
});

test("counts and ordered problem numbers distinguish years and exam variants", () => {
  const selections = {
    "2025-AMC10A-10": "needUnderstanding",
    "2025-AMC10A-2": "needUnderstanding",
    "2025-AMC10B-2": "needStartingPoint",
    "2016-AMC10A-2": "haveApproach",
    "unknown": "needUnderstanding"
  };
  const summary = summarizeProgress([...PROBLEM_REFERENCES].reverse(), selections);
  assert.equal(summary.marked, 4);
  assert.equal(summary.unmarked, 496);
  assert.deepEqual(summary.statuses.map((entry) => entry.count), [2, 1, 1]);
  assert.deepEqual(summary.statuses[0].papers, [{ year: 2025, exam: "AMC 10A", problemNumbers: [2, 10] }]);
  assert.equal(summary.statuses[1].papers[0].exam, "AMC 10B");
  selections["2025-AMC10A-2"] = "haveApproach";
  assert.deepEqual(summarizeProgress(PROBLEM_REFERENCES, selections).statuses.map((entry) => entry.count), [1, 1, 2]);
});

test("export preserves statuses, stable identities, and concept metadata without statements", () => {
  const problem = PROBLEM_REFERENCES[0];
  const selections = { [problemKey(problem)]: "needStartingPoint" };
  const snapshot = JSON.parse(JSON.stringify(exportProgress(
    PROBLEM_REFERENCES, selections, allConcepts(), "2026-10-25T05:00:00.000Z"
  )));
  assert.equal(snapshot.schemaVersion, 1);
  assert.equal(snapshot.exportedAt, "2026-10-25T05:00:00.000Z");
  assert.equal(snapshot.summary.marked, 1);
  assert.equal(snapshot.problems.length, 500);
  assert.equal(snapshot.problems[0].status, "needStartingPoint");
  assert.equal(snapshot.problems[1].status, null);
  assert.deepEqual(snapshot.problems[0].conceptIds, problem.conceptIds);
  assert.ok(snapshot.concepts.every((concept) => concept.id && concept.en && concept.zh));
  assert.deepEqual(Object.keys(snapshot.problems[0]).sort(),
    ["conceptIds", "difficulty", "exam", "key", "problemNumber", "status", "year"]);
  assert.equal(new Set(snapshot.problems.map((entry) => entry.key)).size, 500);
});

test("complete selections and invalid values produce consistent totals", () => {
  const selections = Object.fromEntries(PROBLEM_REFERENCES.map((problem) => [problemKey(problem), "haveApproach"]));
  assert.equal(summarizeProgress(PROBLEM_REFERENCES, selections).unmarked, 0);
  selections[problemKey(PROBLEM_REFERENCES[0])] = "invalid";
  const summary = summarizeProgress(PROBLEM_REFERENCES, selections);
  assert.equal(summary.marked, 499);
  assert.equal(summary.unmarked, 1);
  assert.equal(exportProgress(PROBLEM_REFERENCES, selections, []).problems[0].status, null);
});

test("overview refreshes counts and numbered lists without resetting the active filter", () => {
  const dom = new JSDOM(readFileSync(new URL("../index.html", import.meta.url), "utf8"));
  const elements = Object.fromEntries(["#progressTotals", "#progressBreakdown", "#problemProgressFilter", "#progressOverviewHeading", "#progressScope", "#progressMeter"]
    .map((id) => [id, dom.window.document.querySelector(id)]));
  const state = {
    problemProgress: { "2025-AMC10A-3": "needUnderstanding" },
    problemProgressFilter: "needUnderstanding",
    problemMode: "filters", year: "all", exam: "all"
  };
  const app = readFileSync(new URL("../assets/app.mjs", import.meta.url), "utf8");
  const render = app.slice(app.indexOf("function renderProgressOverview()"), app.indexOf("function downloadProgress()"));
  const context = {
    state, PROBLEM_REFERENCES, progressScope, summarizeProgress,
    $: (selector) => elements[selector],
    uiText: (key) => key,
    UI_TEXT: Object.fromEntries(["markedProblems", "progressNeedUnderstanding", "progressNeedStartingPoint", "progressHaveApproach"]
      .map((key) => [key, { en: key, zh: key }])),
    textPair: (zh, en) => `<span>${en}</span><span>${zh}</span>`,
    document: { querySelectorAll: () => [{ dataset: { summaryStatus: "needUnderstanding" } }] }
  };
  runInNewContext(`${render}\nrenderProgressOverview();`, context);
  assert.match(elements["#progressTotals"].textContent, /1 \/ 500.*499/s);
  assert.match(elements["#progressBreakdown"].innerHTML, /2025 AMC 10A<\/strong>: #3/);
  assert.match(elements["#progressBreakdown"].innerHTML, /data-summary-status="needUnderstanding" open/);
  assert.equal(elements["#problemProgressFilter"].value, "needUnderstanding");
  assert.equal(elements["#progressMeter"].max, 500);
  assert.equal(elements["#progressMeter"].value, 1);
  assert.equal(elements["#progressBreakdown"].querySelectorAll(".progress-status-count").length, 3);
  assert.equal(elements["#progressBreakdown"].querySelector(".progress-status-count").textContent, "1");
  assert.equal(dom.window.document.querySelector(".progress-help").open, false);
  state.problemProgress["2025-AMC10A-3"] = "haveApproach";
  runInNewContext("renderProgressOverview();", context);
  assert.match(elements["#problemProgressFilter"].innerHTML, /needUnderstanding \(0\)/);
  assert.match(elements["#problemProgressFilter"].innerHTML, /haveApproach \(1\)/);
  for (const mode of ["filters", "exam", "full"]) {
    state.problemMode = mode;
    state.year = state.examYear = "2025";
    state.exam = state.examPaper = "AMC 10A";
    runInNewContext("renderProgressOverview();", context);
    assert.match(elements["#progressTotals"].textContent, /1 \/ 25.*24/s);
    assert.match(elements["#progressScope"].textContent, /2025 · AMC 10A/);
    assert.equal(elements["#progressMeter"].max, 25);
    assert.equal(elements["#progressMeter"].value, 1);
    state.exam = state.examPaper = "AMC 10B";
    runInNewContext("renderProgressOverview();", context);
    assert.match(elements["#progressTotals"].textContent, /0 \/ 25.*25/s);
    assert.doesNotMatch(elements["#progressBreakdown"].innerHTML, /#3/);
    assert.equal(elements["#progressMeter"].value, 0);
  }
  state.year = state.examYear = "1900";
  runInNewContext("renderProgressOverview();", context);
  assert.equal(elements["#progressMeter"].max, 1);
  assert.equal(elements["#progressMeter"].value, 0);
  dom.window.close();
});

test("scope supports all years, one year, one exam variant, and a single paper", () => {
  assert.equal(progressScope(PROBLEM_REFERENCES).length, 500);
  assert.equal(progressScope(PROBLEM_REFERENCES, "2025").length, 50);
  assert.equal(progressScope(PROBLEM_REFERENCES, "all", "AMC 10B").length, 250);
  const problems = progressScope(PROBLEM_REFERENCES, "2025", "AMC 10B");
  assert.equal(problems.length, 25);
  assert.ok(problems.every((problem) => problem.year === 2025 && problem.exam === "AMC 10B"));
});

test("download action creates a JSON snapshot and cleans up the temporary link", async () => {
  let blob;
  let clicked = false;
  let removed = false;
  let revoked = false;
  const link = { click() { clicked = true; }, remove() { removed = true; } };
  const error = {};
  const app = readFileSync(new URL("../assets/app.mjs", import.meta.url), "utf8");
  const download = app.slice(app.indexOf("function downloadProgress()"), app.indexOf("let problemRenderVersion"));
  runInNewContext(`${download}\ndownloadProgress();`, {
    state: { problemProgress: { "2025-AMC10B-1": "needStartingPoint" } },
    PROBLEM_REFERENCES, allConcepts, exportProgress, Blob, console,
    $: () => error,
    document: { createElement: () => link, body: { appendChild() {} } },
    URL: {
      createObjectURL(value) { blob = value; return "blob:test"; },
      revokeObjectURL(value) { revoked = value === "blob:test"; }
    },
    setTimeout(callback) { callback(); }
  });
  assert.ok(clicked && removed && revoked);
  assert.match(link.download, /^amc10-progress-\d{4}-\d{2}-\d{2}\.json$/);
  assert.equal(JSON.parse(await blob.text()).summary.marked, 1);
  assert.equal(error.hidden, true);
});
