import { problemKey } from "./progress.mjs?v=20261112-2";
import { problemStatement, problemChoice } from "./problem-language.mjs?v=20261031-3";
import { practiceStatement } from "./practice-papers.mjs?v=20261112-2";
import { createPdfFromSections, openQuestShare } from "./quest-pdf.mjs?v=20261112-2";

const escape = (value) => String(value).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const text = (language, zh, en) => language === "zh" ? escape(zh) : language === "en" ? escape(en) : `${escape(en)} / ${escape(zh)}`;

export async function explorerPdfSections({ problems, language, includeAnswers, fetchImpl, signal }) {
  if (!problems.length) throw new Error("No problems selected for export.");
  const t = (zh, en) => text(language, zh, en);
  const label = (p) => escape(`${p.paperId || `${p.year} ${p.exam}`} #${p.problemNumber}`);
  const blocks = [`<h1>${t("题库练习卷", "Problem Explorer worksheet")}</h1>
    <p>${problems.length} ${t("道题", "problems")}</p>
    <p>${t("姓名：________________ 日期：________________", "Name: ________________ Date: ________________")}</p>`];
  const papers = new Map();
  for (const p of problems) {
    signal?.throwIfAborted();
    let statement;
    if (p.practice) statement = practiceStatement(p, language);
    else {
      const paper = `${p.year}${p.exam.slice(-1)}`;
      if (!papers.has(paper)) {
        const response = await fetchImpl(`assets/exams/${paper}.json?v=20261031-zh`);
        if (!response.ok) throw new Error(`Unable to load exam ${paper}`);
        const data = await response.json();
        if (data.year !== p.year || data.exam !== p.exam || !Array.isArray(data.problems)) throw new Error(`Invalid exam ${paper}`);
        papers.set(paper, data);
      }
      const question = papers.get(paper).problems.find((q) => q.problemNumber === p.problemNumber);
      if (!question?.statementHtml || question.choices?.length !== 5) throw new Error(`Missing question ${problemKey(p)}`);
      statement = `${problemStatement(question, language)}<ol type="A">${question.choices.map((_, i) => `<li>${problemChoice(question, i, language)}</li>`).join("")}</ol>`;
    }
    blocks.push(`<h3>${label(p)}</h3>${statement}<div class="pdf-work">${t("解题过程：", "Working:")}<br><br><br><br></div>`);
  }
  if (includeAnswers) {
    const sources = [...new Set(problems.filter((p) => !p.practice || p.answerKeyUrl).map((p) => p.answerKeyUrl || "assets/answer-key.json"))];
    const keys = await Promise.all(sources.map(async (source) => {
      const response = await fetchImpl(source);
      if (!response.ok) throw new Error("Unable to load answer key.");
      return (await response.json()).answers;
    }));
    const answers = Object.assign({}, ...keys);
    blocks.push(`<h2>${t("答案与解析", "Answers & solutions")}</h2>`);
    for (const p of problems) {
      const key = problemKey(p);
      if (p.practice && !p.answerKeyUrl) {
        blocks.push(`<h3>${label(p)}</h3><p>${t("尚未提供答案或解析。", "No answer key or worked solution was supplied.")}</p>`);
        continue;
      }
      if (!/^[A-E]$/.test(answers[key])) throw new Error(`Missing answer ${key}`);
      blocks.push(`<h3>${label(p)}: ${answers[key]}</h3>`);
      if (p.solutionImageUrl) blocks.push(`<p>${t("用户提供的中文解析", "Supplied Chinese worked solution")}</p><img src="${p.solutionImageUrl}" alt="${label(p)} solution">`);
      else {
        const source = `https://live.poshenloh.com/${language === "zh" ? "zh/" : ""}past-contests/amc10/${p.year}${p.exam.slice(-1)}/problem/${p.problemNumber}`;
        blocks.push(`<p>${t("完整解析请查看来源（含答案）；未复制来源解析。", "For the full worked solution, see the source (reveals answers). Source solutions are not reproduced.")}</p><p class="pdf-small">${source}</p>`);
      }
    }
  }
  blocks.push(`<h2>${t("来源", "Sources")}</h2><p>${t("AMC 原题版权归 MAA 所有。历年中文题目来自 LIVE by Po-Shen Loh。练习卷译题与解析来自用户提供的 PDF，不是官方解析。此文件不含账户或进度信息。", "AMC problems © MAA. Archived Chinese statements from LIVE by Po-Shen Loh. Practice translations and solutions are from the user-supplied PDF, not official solutions. No account or progress data is included.")}</p>`);
  return blocks;
}

export async function createExplorerPdf({ document, content, language, includeAnswers, fetchImpl, signal, onProgress }) {
  const sections = await explorerPdfSections({ problems: content.problems, language, includeAnswers, fetchImpl, signal });
  return createPdfFromSections({ document, sections, language, title: "Problem Explorer",
    filename: `AMC10-problems-${content.problems.length}-${language}.pdf`, signal, onProgress });
}

export function openExplorerExport({ document, problems, language, fetchImpl = (...args) => fetch(...args), createPdf = createExplorerPdf }) {
  openQuestShare({ document, language, fetchImpl, createPdf, explorer: true,
    content: { concept: { en: `${problems.length} filtered problems`, zh: `${problems.length} 道筛选题目` }, problems: [...problems] } });
}
