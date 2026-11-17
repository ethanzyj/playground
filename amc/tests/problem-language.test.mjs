import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { problemStatement, problemChoice } from "../assets/problem-language.mjs";
import { questContent } from "../assets/quests.mjs";

test("mission statements have Chinese translations with language-aware rendering", () => {
  for (const problem of questContent("course-v1-polynomials-1").problems) {
    const paper = JSON.parse(readFileSync(new URL(`../assets/exams/${problem.year}${problem.exam.slice(-1)}.json`, import.meta.url)));
    const question = paper.problems[problem.problemNumber - 1];
    assert.ok(question.statementZhHtml);
    assert.match(problemStatement(question, "zh"), /lang="zh"/);
    assert.doesNotMatch(problemStatement(question, "zh"), /lang="en"/);
    assert.match(problemStatement(question, "both"), /lang="en"/);
    assert.match(problemStatement(question, "both"), /lang="zh"/);
    assert.doesNotMatch(problemStatement(question, "en"), /lang="zh"/);
  }
});

test("untranslated statements clearly identify the English fallback", () => {
  assert.match(problemStatement({ statementHtml: "Original" }, "zh"), /暂未提供此题的中文翻译/);
  const result = problemStatement({ statementHtml: "Original" }, "both",
    { year: 2021, exam: "AMC 10B", problemNumber: 10 });
  assert.match(result, /https:\/\/live.poshenloh.com\/zh\/past-contests\/amc10\/2021B\/problem\/10/);
  assert.match(result, /reveals answers and solutions/);
});

test("all 500 problems render Chinese statements and all 2,500 translated choices", () => {
  let problems = 0;
  let choices = 0;
  for (let year = 2016; year <= 2025; year++) {
    for (const variant of ["A", "B"]) {
      const paper = JSON.parse(readFileSync(new URL(`../assets/exams/${year}${variant}.json`, import.meta.url)));
      for (const question of paper.problems) {
        assert.match(problemStatement(question, "zh"), /lang="zh"/);
        assert.doesNotMatch(problemStatement(question, "zh"), /lang="en"|not included locally/);
        assert.match(problemStatement(question, "both"), /lang="en"/);
        assert.match(problemStatement(question, "both"), /lang="zh"/);
        for (let i = 0; i < 5; i++) {
          assert.match(problemChoice(question, i, "zh"), /lang="zh"/);
          choices++;
        }
        problems++;
      }
    }
  }
  assert.equal(problems, 500);
  assert.equal(choices, 2500);
});

test("bilingual choices avoid duplicate identical math but retain translated text", () => {
  assert.equal(problemChoice({ choices: ["\\( 3 \\)"], choicesZh: ["\\(3\\)"] }, 0, "both"), "<span>\\( 3 \\)</span>");
  assert.match(problemChoice({ choices: ["Monday"], choicesZh: ["星期一"] }, 0, "both"), /星期一/);
});
