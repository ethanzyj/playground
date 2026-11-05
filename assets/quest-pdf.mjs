import { problemStatement, problemChoice } from "./problem-language.mjs?v=20261031-3";
import { problemKey } from "./progress.mjs?v=20261024-11";
import { practiceStatement, practiceSolution } from "./practice-papers.mjs?v=20261105-1";

const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[c]);
const pair = (language, zh, en) => language === "zh" ? `<span lang="zh">${escape(zh)}</span>`
  : language === "en" ? `<span lang="en">${escape(en)}</span>`
    : `<span lang="en">${escape(en)}</span><span lang="zh">${escape(zh)}</span>`;
const math = (value) => `\\(${escape(value)}\\)`;

async function withTimeout(promise, message, milliseconds = 30000) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(message)), milliseconds); })
    ]);
  } finally { clearTimeout(timer); }
}

export async function questPdfSections({ content, language, includeAnswers, quizQuestion, fetchImpl }) {
  const { concept, terms, problems } = content;
  const text = (zh, en) => pair(language, zh, en);
  const blocks = [];
  const add = (html) => blocks.push(html);
  const title = text(concept.zh, concept.en);
  const url = new URL(globalThis.location?.href || "https://ethanzyj.github.io/playground/");
  url.search = "";
  url.hash = "";
  url.searchParams.set("quest", concept.id);
  const heading = (zh, en) => `<h2>${text(zh, en)}</h2>`;
  add(`<p class="pdf-eyebrow">AMC 10 · ${text("任务学习包", "Quest study pack")}</p><h1>${title}</h1>
    <p>${text("学习 · 测验 · 真题 · 词汇 · 复习", "Lesson · Checkpoints · Practice · Vocabulary · Review")}</p>
    <p>${text("姓名：________________  日期：________________", "Name: ________________  Date: ________________")}</p>
    <p class="pdf-small">${escape(url.href)}</p>`);
  add(`${heading("学习", "Lesson")}<p>${text(concept.explanationZh, concept.explanationEn)}</p>`);
  concept.formulas.forEach((formula, i) => {
    if (concept.formulas.indexOf(formula) !== i) return;
    const note = concept.formulaNotes[i];
    add(`<h3>${math(formula)}</h3><p>${text(note.explanationZh, note.explanationEn)}</p>
      <p class="pdf-example">${text(note.exampleZh, note.exampleEn)}</p>`);
  });
  if (concept.bridgeEn) add(`<h3>${text("解题提示", "Practice bridge")}</h3><p>${text(concept.bridgeZh, concept.bridgeEn)}</p>`);
  const keys = [];
  const quizzes = (vocabulary) => {
    const items = vocabulary ? terms : concept.formulas;
    if (!items.length) {
      add(`<p>${text("本任务无此类测验。", "No questions of this type in this quest.")}</p>`);
    }
    items.forEach((_, i) => {
      const { term, note, correct, challenge, options } = quizQuestion(content, i, vocabulary);
      const label = `${vocabulary ? "V" : "C"}${i + 1}`;
      const question = vocabulary ? text(term.zh, term.en)
        : math(challenge?.question || concept.formulas[i]);
      add(`<h3>${label}. ${question}</h3><p>${text("选择正确答案。", "Choose the correct answer.")}</p>
        <ol type="A">${options.map((option) => `<li>${option.math ? math(option.math) : text(option.zh, option.en)}</li>`).join("")}</ol>
        <p class="pdf-work">${text("答案 / 笔记：", "Answer / notes:")} ____________________________________</p>`);
      const answerIndex = options.findIndex((option) => option.id === correct.id);
      if (answerIndex < 0) throw new Error(`Missing answer for ${label}`);
      keys.push(`<h3>${label}. ${"ABCD"[answerIndex]}</h3>
        <p>${vocabulary ? text(term.noteZh, term.noteEn) : text(note.explanationZh, note.explanationEn)}</p>
        ${challenge ? `<p>${math(challenge.options[0])}</p>` : ""}`);
    });
  };
  add(heading("概念测验", "Checkpoints"));
  quizzes(false);
  add(heading("真题练习", "AMC practice"));
  const papers = new Map();
  for (const reference of problems) {
    if (reference.practice) {
      add(`<h3>${escape(`${reference.paperId} #${reference.problemNumber}`)}</h3>
        ${practiceStatement(reference, language)}
        <div class="pdf-work">${text("解题过程：", "Working:")}<br><br><br><br></div>`);
      continue;
    }
    const paper = `${reference.year}${reference.exam.slice(-1)}`;
    if (!papers.has(paper)) {
      const response = await fetchImpl(`assets/exams/${paper}.json?v=20261031-zh`);
      if (!response.ok) throw new Error(`Unable to load exam ${paper}`);
      const exam = await response.json();
      if (exam.year !== reference.year || exam.exam !== reference.exam || !Array.isArray(exam.problems)) {
        throw new Error(`Invalid exam ${paper}`);
      }
      papers.set(paper, exam);
    }
    const exam = papers.get(paper);
    const question = exam.problems.find((item) => item.problemNumber === reference.problemNumber);
    if (!question?.statementHtml || question.choices?.length !== 5) throw new Error(`Missing problem ${problemKey(reference)}`);
    add(`<h3>${escape(`${reference.year} ${reference.exam} #${reference.problemNumber}`)}</h3>
      ${problemStatement(question, language, reference)}
      <ol type="A">${question.choices.map((_, i) => `<li>${problemChoice(question, i, language)}</li>`).join("")}</ol>
      <div class="pdf-work">${text("解题过程：", "Working:")}<br><br><br><br></div>`);
  }
  add(heading("词汇", "Vocabulary"));
  terms.forEach((term) => add(`<h3>${text(term.zh, term.en)}</h3><p>${text(term.noteZh, term.noteEn)}</p>`));
  add(heading("词汇测验", "Vocabulary checks"));
  quizzes(true);
  add(`${heading("复习与反思", "Review & reflection")}
    <p>${text("不看笔记，写下本关的主要公式和适用条件。", "Without your notes, write the key formulas and when they apply.")}</p><div class="pdf-lines"></div>
    <p>${text("哪道题最难？解释你的方法，并记录需要复习的错误。", "Which problem was hardest? Explain your approach and record mistakes to revisit.")}</p><div class="pdf-lines"></div>
    <p>${text("用自己的话解释每个词汇，然后重做不确定的题目。", "Explain each vocabulary term in your own words, then retry any uncertain questions.")}</p>
    <p>${text("自查：已复习公式 ____  已重做错题 ____  已检查词汇 ____", "Self-check: Formulas reviewed ____  Mistakes retried ____  Vocabulary checked ____")}</p>`);
  if (includeAnswers) {
    const sources = [...new Set(problems.map((p) => p.answerKeyUrl || "assets/answer-key.json"))];
    const answerSets = await Promise.all(sources.map(async (source) => {
      const response = await fetchImpl(source);
      if (!response.ok) throw new Error("Unable to load the answer key");
      return (await response.json()).answers;
    }));
    const answers = Object.assign({}, ...answerSets);
    add(heading("答案与复习提示", "Answer key & review notes"));
    keys.forEach(add);
    for (const reference of problems) {
      const key = problemKey(reference);
      if (!/^[A-E]$/.test(answers?.[key])) throw new Error(`Missing answer for ${key}`);
      if (reference.practice) {
        add(`<h3>${escape(`${reference.paperId} #${reference.problemNumber}`)}: ${answers[key]}</h3>
          <p>${text("用户提供的中文完整解析（原文保留）。", "Supplied Chinese worked solution, preserved as provided.")}</p>
          <img src="${reference.solutionImageUrl}" alt="${escape(`${reference.paperId} #${reference.problemNumber} Chinese worked solution`)}">
          <p>${practiceSolution(reference, language)}</p>`);
        continue;
      }
      const paper = `${reference.year}${reference.exam.slice(-1)}`;
      const source = `https://live.poshenloh.com/${language === "zh" ? "zh/" : ""}past-contests/amc10/${paper}/problem/${reference.problemNumber}`;
      add(`<h3>${escape(`${reference.year} ${reference.exam} #${reference.problemNumber}`)}: ${answers[key]}</h3>
        <p>${text("完整解析请查看来源页面（含答案）。", "For a full worked solution, see the source page (reveals answers).")}</p>
        <p class="pdf-small">${source}</p>`);
    }
  }
  add(`<h2>${text("来源", "Sources")}</h2><p>${text("AMC 题目版权归美国数学协会所有。历年真题中文题目来自 LIVE by Po-Shen Loh，未复制其来源解析。", "AMC problems © Mathematical Association of America. Archived Chinese statements from LIVE by Po-Shen Loh; its source solutions are not reproduced in this pack.")}</p>
    ${[...papers.values()].map((exam) => `<p class="pdf-small">${escape(exam.sourceUrl)}<br>${escape(exam.chineseSourceUrl || "")}</p>`).join("")}
    ${problems.some((p) => p.practice) ? `<p>${text("2026-practice-1 中文译题与解析来自用户提供的 AMC10A_2026_高质量.pdf，不是官方 MAA 解析。", "2026-practice-1 Chinese statements and worked solutions are from the user-supplied AMC10A_2026_高质量.pdf, not official MAA solutions.")}</p>` : ""}
    <p>${text("本文件不包含账户信息、作答记录或个人学习进度。", "This document contains no account information, submitted answers, or personal learning progress.")}</p>`);
  return blocks;
}

export async function createQuestPdf({ document, content, language, includeAnswers, quizQuestion, fetchImpl, onProgress = () => {}, signal }) {
  const win = document.defaultView;
  const sections = await questPdfSections({ content, language, includeAnswers, quizQuestion, fetchImpl });
  signal?.throwIfAborted();
  const { jsPDF, html2canvas } = await import("./vendor/quest-pdf.mjs");
  const frame = document.createElement("iframe");
  frame.setAttribute("aria-hidden", "true");
  frame.title = "PDF rendering";
  frame.style.cssText = "position:absolute;left:-10000px;top:0;width:800px;height:1200px;border:0";
  document.body.append(frame);
  try {
    const exportDocument = frame.contentDocument;
    const exportWindow = frame.contentWindow;
    const base = exportDocument.createElement("base");
    base.href = document.baseURI;
    exportDocument.head.append(base);
    const stylesheet = exportDocument.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = new URL("assets/styles.css?v=20261105-1", document.baseURI).href;
    const styled = new Promise((resolve, reject) => {
      stylesheet.onload = resolve;
      stylesheet.onerror = () => reject(new Error("PDF styles could not be loaded."));
    });
    exportDocument.head.append(stylesheet);
    exportDocument.body.style.margin = "0";
    const host = exportDocument.createElement("article");
    host.className = "quest-pdf-document";
    host.style.cssText = "position:static;left:auto;top:auto";
    host.lang = language === "zh" ? "zh" : "en";
    host.innerHTML = sections.map((section) => `<section class="pdf-block">${section}</section>`).join("");
    // Offscreen lazy images never start loading, so explicitly load export diagrams.
    host.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });
    exportDocument.body.append(host);
    // Use a separate SVG renderer: canvas capture can distort CHTML math glyph spacing.
    exportWindow.MathJax = { tex: { inlineMath: [["\\(", "\\)"]] }, svg: { fontCache: "none" } };
    const script = exportDocument.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js";
    const loaded = new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => reject(new Error("PDF math renderer could not be loaded."));
    });
    exportDocument.head.append(script);
    await withTimeout(Promise.all([styled, loaded]), "PDF resources did not finish loading.");
    await withTimeout(exportWindow.MathJax.startup.promise, "Math typesetting timed out.");
    signal?.throwIfAborted();
    await withTimeout(exportDocument.fonts.ready, "PDF fonts did not finish loading.");
    // Canvas rendering does not honor the assistive MathML clipping consistently.
    host.querySelectorAll("mjx-assistive-mml").forEach((element) => element.remove());
    host.querySelectorAll("mjx-container svg").forEach((svg) => {
      const bounds = svg.getBoundingClientRect();
      const image = exportDocument.createElement("img");
      image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new win.XMLSerializer().serializeToString(svg))}`;
      image.alt = "";
      image.style.cssText = `display:inline-block;margin:0;width:${bounds.width}px;height:${bounds.height}px;vertical-align:${svg.style.verticalAlign || "baseline"}`;
      svg.replaceWith(image);
    });
    await Promise.all([...host.querySelectorAll("img")].map(async (image) => {
      await withTimeout(image.decode(), "A problem diagram did not finish loading.");
      if (!image.naturalWidth) throw new Error("A problem diagram could not be loaded.");
    }));
    const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
    pdf.setProperties({ title: `AMC 10 - ${content.concept.en}`, subject: "Quest study pack", creator: "AMC 10 Prep" });
    const margin = 14, width = 182, bottom = 278;
    let y = margin;
    const blocks = [...host.children];
    const pages = [];
    const maxHeight = (bottom - margin) * 740 / width;
    let page, pageHeight = 0;
    for (const [index, block] of blocks.entries()) {
      const height = block.getBoundingClientRect().height;
      const heading = block.children.length === 1 && block.firstElementChild.tagName === "H2";
      const requiredHeight = height + (heading ? blocks[index + 1]?.getBoundingClientRect().height || 0 : 0);
      const previous = page?.lastElementChild;
      const followsHeading = previous?.children.length === 1 && previous.firstElementChild.tagName === "H2";
      if (!page || (!followsHeading && pageHeight > 0 && pageHeight + requiredHeight > maxHeight)) {
        page = exportDocument.createElement("div");
        page.className = "pdf-page";
        host.append(page);
        pages.push(page);
        pageHeight = 0;
      }
      page.append(block);
      pageHeight += height;
    }
    for (const [index, block] of pages.entries()) {
      signal?.throwIfAborted();
      onProgress(index + 1, pages.length);
      const canvas = await withTimeout(html2canvas(block, {
        scale: 1.5, backgroundColor: "#ffffff", logging: false,
        ignoreElements: (element) => (element.parentElement === exportDocument.body && element !== host)
          || (element.parentElement === host && element !== block)
      }), "PDF page rendering timed out.");
      const mmPerPixel = width / canvas.width;
      const height = canvas.height * mmPerPixel;
      if (y > margin && y + height > bottom) { pdf.addPage(); y = margin; }
      let offset = 0;
      while (offset < canvas.height) {
        let rows = Math.min(canvas.height - offset, Math.floor((bottom - y) / mmPerPixel));
        if (offset + rows < canvas.height) {
          // Prefer a whitespace row to avoid cutting a line or equation across pages.
          const ctx = canvas.getContext("2d");
          const pixels = ctx.getImageData(0, offset + Math.max(0, rows - 60), canvas.width, Math.min(60, rows));
          for (let row = pixels.height - 1; row >= 0; row--) {
            let blank = true;
            for (let x = 0; x < canvas.width; x++) {
              const p = (row * canvas.width + x) * 4;
              if (pixels.data[p] < 245 || pixels.data[p + 1] < 245 || pixels.data[p + 2] < 245) { blank = false; break; }
            }
            if (blank) { rows = Math.max(1, rows - pixels.height + row + 1); break; }
          }
        }
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = rows;
        slice.getContext("2d").drawImage(canvas, 0, offset, canvas.width, rows, 0, 0, canvas.width, rows);
        pdf.addImage(slice.toDataURL("image/jpeg", 0.95), "JPEG", margin, y, width, rows * mmPerPixel);
        offset += rows;
        y += rows * mmPerPixel;
        slice.width = slice.height = 0;
        if (offset < canvas.height) { pdf.addPage(); y = margin; }
      }
      canvas.width = canvas.height = 0;
      y += 3;
    }
    const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(9);
      pdf.setTextColor(100);
      pdf.text(`AMC 10 Prep | ${i} / ${pageCount}`, margin, 288);
    }
    return new win.File([pdf.output("blob")], `AMC10-${content.concept.id}-${language}.pdf`, { type: "application/pdf" });
  } finally {
    frame.remove();
  }
}

export function openQuestShare({ document, content, language, fetchImpl, quizQuestion, createPdf = createQuestPdf }) {
  const existing = document.querySelector("#questShareDialog");
  if (existing) { existing.focus(); return; }
  const win = document.defaultView;
  const zh = language === "zh";
  const t = (chinese, english) => zh ? chinese : english;
  const dialog = document.createElement("dialog");
  dialog.id = "questShareDialog";
  dialog.className = "quest-share-dialog";
  dialog.setAttribute("aria-labelledby", "questShareTitle");
  dialog.innerHTML = `<form method="dialog"><button class="mastery quest-share-close" aria-label="${t("关闭", "Close")}">×</button></form>
    <h2 id="questShareTitle">${t("分享任务学习包", "Share a quest study pack")}</h2>
    <p>${escape(zh ? content.concept.zh : content.concept.en)}</p>
    <p>${t("包含学习、全部测验、真题、词汇及复习。不包含个人进度。", "Includes the lesson, every checkpoint, practice problem, vocabulary check, and review. No personal progress is included.")}</p>
    <label>${t("PDF 语言", "PDF language")}<select id="questPdfLanguage"><option value="both">English + 中文</option><option value="en">English</option><option value="zh">中文</option></select></label>
    <label class="quest-pdf-answer-option"><input id="questPdfAnswers" type="checkbox" checked>${t("在文末加入答案与复习提示", "Include an answer key and review notes at the end")}</label>
    <button id="questPdfGenerate" class="mastery" type="button">${t("生成 PDF", "Create PDF")}</button>
    <p id="questPdfStatus" role="status" aria-live="polite"></p>
    <div class="quest-share-actions" hidden>
      <button id="questPdfShare" class="mastery" type="button">${t("分享文件…", "Share file…")}</button>
      <a id="questPdfDownload" class="mastery">${t("下载 PDF", "Download PDF")}</a>
      <a id="questPdfEmail" class="mastery">${t("打开邮件", "Open email")}</a>
      <p>${t("邮件：先下载 PDF，再将它作为附件加入邮件。其他应用可使用“分享文件”或手动上传。", "Email: download the PDF, then attach it to your message. For other apps, use Share file or upload the downloaded PDF.")}</p>
    </div>`;
  const select = dialog.querySelector("#questPdfLanguage");
  select.value = language;
  const status = dialog.querySelector("#questPdfStatus");
  const generate = dialog.querySelector("#questPdfGenerate");
  const answers = dialog.querySelector("#questPdfAnswers");
  const actions = dialog.querySelector(".quest-share-actions");
  let file = null, objectUrl = null, controller = null;
  const clearFile = () => {
    if (objectUrl) win.URL.revokeObjectURL(objectUrl);
    objectUrl = null;
    file = null;
    actions.hidden = true;
  };
  select.addEventListener("change", () => { clearFile(); status.textContent = ""; });
  answers.addEventListener("change", () => { clearFile(); status.textContent = ""; });
  dialog.addEventListener("close", () => { controller?.abort(); clearFile(); dialog.remove(); });
  generate.addEventListener("click", async () => {
    clearFile();
    controller = new win.AbortController();
    generate.disabled = select.disabled = answers.disabled = true;
    status.setAttribute("role", "status");
    status.textContent = t("正在准备所有任务内容…", "Preparing all quest content…");
    try {
      file = await createPdf({
        document, content, language: select.value, includeAnswers: answers.checked, quizQuestion, fetchImpl, signal: controller.signal,
        onProgress: (done, total) => { status.textContent = t(`正在生成 PDF：${done} / ${total}`, `Creating PDF: ${done} / ${total}`); }
      });
      if (!dialog.isConnected) return;
      objectUrl = win.URL.createObjectURL(file);
      const download = dialog.querySelector("#questPdfDownload");
      download.href = objectUrl;
      download.download = file.name;
      dialog.querySelector("#questPdfEmail").href = `mailto:?subject=${encodeURIComponent(`AMC 10: ${content.concept.en}`)}&body=${encodeURIComponent(t("请将下载的任务 PDF 添加到此邮件附件。", "Please attach the downloaded quest PDF to this email."))}`;
      const canShare = Boolean(win.navigator.share && win.navigator.canShare?.({ files: [file] }));
      dialog.querySelector("#questPdfShare").hidden = !canShare;
      actions.hidden = false;
      status.textContent = t("PDF 已就绪。", "Your PDF is ready.") + (canShare ? "" : t("此浏览器不支持文件分享，请下载后添加到邮件或其他应用。", " File sharing is unavailable in this browser; download and attach it in email or another app."));
    } catch (error) {
      if (controller.signal.aborted) return;
      console.error("Unable to generate quest PDF.", error);
      status.setAttribute("role", "alert");
      status.textContent = t("无法生成 PDF。请检查网络和公式加载后重试。", "Unable to create the PDF. Check your connection and math renderer, then retry.");
    } finally {
      generate.disabled = select.disabled = answers.disabled = false;
    }
  });
  dialog.querySelector("#questPdfShare").addEventListener("click", async () => {
    if (!file) return;
    try {
      await win.navigator.share({ files: [file], title: `AMC 10: ${content.concept.en}` });
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error("Unable to share quest PDF.", error);
      status.setAttribute("role", "alert");
      status.textContent = t("分享失败。请下载 PDF 并手动添加到应用。", "Sharing failed. Download the PDF and attach it manually.");
    }
  });
  document.body.append(dialog);
  dialog.showModal();
}
