export function problemStatement(problem, language, reference = null) {
  const english = `<div lang="en">${problem.statementHtml}</div>`;
  if (language === "en") return english;
  const sourceLink = reference ? `<p><a href="https://live.poshenloh.com/zh/past-contests/amc10/${reference.year}${reference.exam.slice(-1)}/problem/${reference.problemNumber}" target="_blank" rel="noopener">${language === "zh" ? "查看中文来源题目（含答案及解析）" : "Open Chinese source (reveals answers and solutions) / 查看中文来源（含答案及解析）"}</a></p>` : "";
  if (!problem.statementZhHtml) {
    return `<p class="muted">${language === "zh" ? "本站暂未提供此题的中文翻译，以下为英文原题。" : "English original · Chinese translation not included locally / 本站暂未提供此题的中文翻译"}</p>${sourceLink}${english}`;
  }

  const chinese = `<div lang="zh">${problem.statementZhHtml}</div>`;
  return language === "zh" ? chinese : `<div class="bilingual-pair">${english}${chinese}</div>`;
}

export function problemChoice(problem, index, language) {
  const english = problem.choices[index];
  const chinese = problem.choicesZh?.[index];
  if (language === "en" || !chinese) return `<span lang="en">${english}</span>`;
  if (language === "zh") return `<span lang="zh">${chinese}</span>`;
  if (english.replace(/\s/g, "") === chinese.replace(/\s/g, "")) return `<span>${english}</span>`;
  return `<span class="bilingual-pair"><span lang="en">${english}</span><span lang="zh">${chinese}</span></span>`;
}
