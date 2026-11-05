import { problemKey } from "./progress.mjs?v=20261104-1";
import { problemStatement, problemChoice } from "./problem-language.mjs?v=20261031-3";
import { practiceStatement } from "./practice-papers.mjs?v=20261104-1";

export const TEST_DURATION = 75 * 60 * 1000;
const escape = (value) => String(value).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const testTime = (milliseconds) => {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
};

export function validateTestSession(value, validKeys) {
  if (!value || value.version !== 1 || typeof value.id !== "string"
    || !Number.isFinite(value.startedAt) || value.startedAt < 0
    || value.deadline !== value.startedAt + TEST_DURATION
    || !["running", "submitted", "expired"].includes(value.status)
    || !Array.isArray(value.keys) || !value.keys.length
    || new Set(value.keys).size !== value.keys.length || !value.keys.every((key) => validKeys.has(key))
    || !value.answers || typeof value.answers !== "object" || Array.isArray(value.answers)
    || !Object.entries(value.answers).every(([key, answer]) => value.keys.includes(key) && typeof answer === "string" && /^[A-E]$/.test(answer))) {
    throw new Error("Invalid saved test session.");
  }
  return value;
}

export class TestMode {
  constructor({ mount, problems, storage, getUserId, getLanguage, typeset, fetchImpl = (...args) => fetch(...args), now = () => Date.now() }) {
    Object.assign(this, { mount, problems, storage, getUserId, getLanguage, typeset, fetch: fetchImpl, now });
    this.byKey = new Map(problems.map((problem) => [problemKey(problem), problem]));
    this.validKeys = new Set(this.byKey.keys());
    this.filtered = [];
    this.selected = new Set();
    this.papers = new Map();
    this.generation = 0;
    this.identity = undefined;
    this.error = "";
    this.loadError = "";
    this.session = null;
    this.win = mount.ownerDocument.defaultView;
    this.onStorage = (event) => {
      if (event.key === this.storageKey) { this.restore(); this.render(); }
    };
    this.onVisibility = () => this.tick();
    this.win.addEventListener("storage", this.onStorage);
    this.mount.ownerDocument.addEventListener("visibilitychange", this.onVisibility);
    this.timer = this.win.setInterval(() => this.tick(), 1000);
  }

  text(zh, en) {
    const language = this.getLanguage();
    return language === "zh" ? zh : language === "en" ? en : `${en} / ${zh}`;
  }

  get storageKey() { return `amc10-test:${this.identity}`; }

  syncIdentity() {
    const identity = this.getUserId() || "guest";
    if (identity === this.identity) return false;
    this.identity = identity;
    this.generation++;
    this.setup = false;
    this.selected.clear();
    this.loading = false;
    this.loadError = "";
    this.restore();
    return true;
  }

  restore() {
    this.generation++;
    this.loading = false;
    this.session = null;
    this.error = "";
    try {
      const saved = this.storage.getItem(this.storageKey);
      if (saved) this.session = validateTestSession(JSON.parse(saved), this.validKeys);
    } catch (error) {
      console.error("Unable to restore timed test.", error);
      this.error = this.text("无法读取测试记录。原记录已保留，请清除该测试后重试。", "Unable to read the saved test. The original record was preserved; clear this test to retry.");
    }
    this.tick(false);
  }

  persist(next) {
    try {
      this.storage.setItem(this.storageKey, JSON.stringify(next));
      this.session = next;
      this.error = "";
      return true;
    } catch (error) {
      console.error("Unable to save timed test.", error);
      this.error = this.text("无法保存测试。请释放浏览器存储空间后重试；倒计时不会暂停。", "Unable to save this test. Free browser storage and retry; the countdown does not pause.");
      return false;
    }
  }

  update(problems) {
    this.filtered = problems;
    this.selected = new Set([...this.selected].filter((key) => problems.some((p) => problemKey(p) === key)));
    this.syncIdentity();
    this.render();
  }

  tick(render = true) {
    if (this.syncing) return;
    this.syncing = true;
    try {
      const changed = this.syncIdentity();
      if (this.session?.status === "running" && this.now() >= this.session.deadline) {
        let next = { ...this.session, status: "expired" };
        let readable = true;
        try {
          const raw = this.storage.getItem(this.storageKey);
          const latest = raw && validateTestSession(JSON.parse(raw), this.validKeys);
          if (!latest || latest.id !== this.session.id || latest.status !== "running") {
            this.restore();
            if (render) this.render();
            return;
          }
          next = { ...latest, status: "expired" };
        } catch (error) {
          console.error("Unable to read test answers at expiration.", error);
          this.error = this.text("无法读取最新答案。测试已锁定，原记录已保留，请重试。", "Unable to read the latest answers. The test is locked and the original record was preserved. Please retry.");
          readable = false;
        }
        // Expiration still locks the UI if persistence fails.
        if (readable) this.persist(next);
        this.session = next;
        if (render) this.render();
      } else if (changed && render) this.render();
      else {
        const clock = this.mount.querySelector("[data-test-clock]");
        if (clock && this.session) {
          clock.textContent = testTime(this.session.status === "running" ? this.session.deadline - this.now() : 0);
          clock.classList.toggle("test-clock-urgent", this.session.deadline - this.now() <= 5 * 60 * 1000);
        }
      }
    } finally { this.syncing = false; }
  }

  start() {
    this.syncIdentity();
    if (this.session || this.error || !this.selected.size) return;
    try {
      if (this.storage.getItem(this.storageKey)) { this.restore(); this.render(); return; }
    } catch (error) {
      console.error("Unable to check saved timed test.", error);
      this.error = this.text("无法读取测试记录，请重试。", "Unable to read the saved test. Please retry.");
      this.render();
      return;
    }
    const startedAt = this.now();
    const keys = this.filtered.map(problemKey).filter((key) => this.selected.has(key));
    if (!keys.length) return;
    const next = { version: 1, id: `${startedAt}-${this.win.crypto.randomUUID()}`, startedAt,
      deadline: startedAt + TEST_DURATION, keys, answers: {}, status: "running" };
    if (this.persist(next)) { this.setup = false; this.generation++; this.loadError = ""; }
    this.render();
  }

  answer(key, answer) {
    if (this.syncIdentity()) { this.render(); return; }
    this.tick(false);
    if (!this.session || this.session.status !== "running" || this.error) { this.render(); return; }
    // Merge another tab's saved answers and honor submissions there.
    try {
      const raw = this.storage.getItem(this.storageKey);
      const latest = raw && validateTestSession(JSON.parse(raw), this.validKeys);
      if (!latest || latest.id !== this.session.id || latest.status !== "running") {
        this.restore(); this.render(); return;
      }
      if (this.now() >= latest.deadline) { this.session = latest; this.tick(); return; }
      if (!latest.keys.includes(key) || !/^[A-E]$/.test(answer)) throw new Error("Invalid test answer.");
      const next = { ...latest, answers: { ...latest.answers, [key]: answer } };
      if (this.persist(next)) {
        this.mount.querySelectorAll("[data-test-answer]").forEach((input) => {
          input.checked = next.answers[input.dataset.testAnswer] === input.value;
        });
        const count = this.mount.querySelector("[data-test-answer-count]");
        if (count) count.textContent = `${Object.keys(next.answers).length} / ${next.keys.length} ${this.text("题已作答", "answered")}`;
        return;
      }
    } catch (error) {
      console.error("Unable to record test answer.", error);
      this.error = this.text("无法记录答案，请重试。", "Unable to record your answer. Please retry.");
    }
    this.render();
    this.mount.querySelector(`input[data-test-answer="${key}"][value="${answer}"]`)?.focus({ preventScroll: true });
  }

  finish() {
    if (this.syncIdentity()) { this.render(); return; }
    this.tick(false);
    if (this.session?.status !== "running") { this.render(); return; }
    this.restore();
    if (this.session?.status === "running") this.persist({ ...this.session, status: "submitted" });
    this.render();
  }

  clear() {
    if (this.syncIdentity()) { this.render(); return; }
    try {
      this.storage.removeItem(this.storageKey);
      this.session = null;
      this.error = "";
      this.loadError = "";
      this.loading = false;
      this.generation++;
      this.setup = false;
      this.selected.clear();
    } catch (error) {
      console.error("Unable to clear timed test.", error);
      this.error = this.text("无法清除测试记录，请重试。", "Unable to clear the saved test. Please retry.");
    }
    this.render();
  }

  async loadQuestions() {
    if (!this.session || this.loading || this.loadError) return;
    const missing = this.session.keys.map((key) => this.byKey.get(key))
      .filter((p) => !p.practice && !this.papers.has(`${p.year}${p.exam.slice(-1)}`));
    if (!missing.length) return;
    const generation = this.generation, identity = this.identity;
    this.loading = true;
    try {
      const papers = new Map(missing.map((p) => [`${p.year}${p.exam.slice(-1)}`, p]));
      const loaded = await Promise.all([...papers].map(async ([paper, p]) => {
        const response = await this.fetch(`assets/exams/${paper}.json?v=20261031-zh`);
        if (!response.ok) throw new Error(`Unable to load ${paper}`);
        const data = await response.json();
        if (data.year !== p.year || data.exam !== p.exam || data.problems?.length !== 25
          || !data.problems.every((q, i) => q.problemNumber === i + 1 && typeof q.statementHtml === "string"
            && q.choices?.length === 5 && q.choices.every((choice) => typeof choice === "string"))) throw new Error(`Invalid exam ${paper}`);
        return [paper, data];
      }));
      if (generation !== this.generation || identity !== (this.getUserId() || "guest")) return;
      loaded.forEach(([paper, data]) => this.papers.set(paper, data));
    } catch (error) {
      if (generation !== this.generation || identity !== (this.getUserId() || "guest")) return;
      console.error("Unable to load test questions.", error);
      this.loadError = this.text("题目加载失败，请重试。倒计时继续运行。", "Questions could not be loaded. Retry; the countdown continues.");
    } finally {
      if (generation === this.generation && identity === (this.getUserId() || "guest")) {
        this.loading = false;
        this.render();
      }
    }
  }

  render() {
    this.mount.closest("#problemsPanel")?.classList.toggle("test-mode-active", Boolean(this.session));
    const t = (zh, en) => escape(this.text(zh, en));
    const button = (action, zh, en, disabled = false) => `<button type="button" class="mastery" data-test-action="${action}" ${disabled ? "disabled" : ""}>${t(zh, en)}</button>`;
    const error = this.error ? `<p role="alert">${escape(this.error)}</p>${button("retry-save", "重试保存", "Retry saving")}${button("clear", "清除该测试", "Clear this test")}` : "";
    if (!this.session) {
      this.mount.innerHTML = `<div class="test-mode-intro"><div><h3>${t("测试模式", "Test mode")}</h3>
        <p>${t("选择题目，开始 75 分钟测试。", "Choose questions for a 75-minute test.")}</p></div>
        ${button("setup", this.setup ? "关闭选题" : "选择测试题目", this.setup ? "Close selection" : "Choose test questions", Boolean(this.error))}</div>${error}
        ${this.setup ? `<div class="test-setup"><p>${t("使用当前筛选结果，或取消勾选不需要的题目。开始后不会暂停；刷新页面仍会继续倒计时。测试记录只保存在当前浏览器。", "Use the current filtered results, or uncheck questions. Once started, there is no pause; refreshing does not reset the countdown. Test records stay in this browser.")}</p>
        <div class="test-mode-actions">${button("all", "全选当前结果", "Select all filtered")}${button("none", "清空选择", "Clear selection")}</div>
        <div class="test-selection">${this.filtered.map((p) => `<label><input type="checkbox" data-test-select="${problemKey(p)}" ${this.selected.has(problemKey(p)) ? "checked" : ""}><span>${escape(p.paperId || `${p.year} ${p.exam}`)} #${p.problemNumber}</span></label>`).join("")}</div>
        <p data-test-selection-count>${this.selected.size} ${t("题已选", "questions selected")}</p>${button("start", "开始 75 分钟测试", "Start 75-minute test", !this.selected.size || Boolean(this.error))}</div>` : ""}`;
    } else {
      const session = this.session;
      const running = session.status === "running";
      const answered = Object.keys(session.answers).length;
      this.mount.innerHTML = `<div class="test-mode-header"><div><p class="test-eyebrow">${t("75 分钟 · 测试模式", "75 minutes · Test mode")}</p>
        <h3>${t(running ? "测试进行中" : session.status === "expired" ? "时间到" : "测试已提交", running ? "Test in progress" : session.status === "expired" ? "Time is up" : "Test submitted")}</h3>
        <p data-test-answer-count>${answered} / ${session.keys.length} ${t("题已作答", "answered")}</p></div>
        ${running ? `<div class="test-clock-wrap"><span>${t("剩余时间", "Time remaining")}</span><strong data-test-clock role="timer" aria-live="off">${testTime(session.deadline - this.now())}</strong></div>` : ""}
        ${running ? button("finish", "结束并提交", "Finish & submit", Boolean(this.error)) : button("clear", "返回题库 · 新测试", "Back to Explorer · New test")}</div>
        ${error}${!running ? `<p role="status" class="test-complete">${t("答案已锁定。下方可查看已保存的选择。本测试不自动评分，也不会修改任务或掌握进度。", "Answers are locked. Review your saved choices below. This test is not automatically graded and does not change quest or mastery progress.")}</p>` : `<p class="muted">${t("测试仅限当前浏览器；关闭或切换页面不会暂停。答案与计时按账户保存，不上传。", "This browser only. Leaving the page does not pause the timer. Answers and timing are saved per account locally, not uploaded.")}</p>`}
        ${this.loadError ? `<p role="alert">${escape(this.loadError)}</p>${button("retry-load", "重新加载题目", "Retry loading questions")}` : ""}
        <div class="test-questions">${session.keys.map((key, index) => {
          const p = this.byKey.get(key);
          const question = this.papers.get(`${p.year}${p.exam.slice(-1)}`)?.problems[p.problemNumber - 1];
          return `<article class="test-question"><h4>${index + 1}. ${escape(p.paperId || `${p.year} ${p.exam}`)} #${p.problemNumber}</h4>
            ${p.practice ? `<div class="test-practice-statement">${practiceStatement(p, this.getLanguage())}</div>`
              : question ? problemStatement(question, this.getLanguage()) + `<ol type="A">${question.choices.map((_, i) => `<li>${problemChoice(question, i, this.getLanguage())}</li>`).join("")}</ol>`
                : `<p role="status">${t("正在加载题目…", "Loading question…")}</p>`}
            <fieldset ${!running || this.error || (!p.practice && !question) ? "disabled" : ""}><legend>${t("选择答案", "Choose your answer")}</legend>
            <div class="test-answer-options">${[..."ABCDE"].map((letter) => `<label><input type="radio" name="test-${key}" data-test-answer="${key}" value="${letter}" ${session.answers[key] === letter ? "checked" : ""}>${letter}</label>`).join("")}</div></fieldset></article>`;
        }).join("")}</div>`;
      if (!this.loadError) void this.loadQuestions();
    }
    this.mount.querySelectorAll("[data-test-select]").forEach((input) => input.addEventListener("change", () => {
      const key = input.dataset.testSelect;
      if (input.checked) this.selected.add(key); else this.selected.delete(key);
      this.mount.querySelector("[data-test-selection-count]").textContent = `${this.selected.size} ${this.text("题已选", "questions selected")}`;
      this.mount.querySelector('[data-test-action="start"]').disabled = !this.selected.size;
    }));
    this.mount.querySelectorAll("[data-test-answer]").forEach((input) => input.addEventListener("change", () => this.answer(input.dataset.testAnswer, input.value)));
    this.mount.querySelectorAll("[data-test-action]").forEach((b) => b.addEventListener("click", () => {
      switch (b.dataset.testAction) {
        case "setup": this.setup = !this.setup; this.selected = new Set(this.filtered.map(problemKey)); this.render(); break;
        case "all": this.selected = new Set(this.filtered.map(problemKey)); this.render(); break;
        case "none": this.selected.clear(); this.render(); break;
        case "start": this.start(); break;
        case "finish": this.finish(); break;
        case "clear": this.clear(); break;
        case "retry-load": this.loadError = ""; this.render(); break;
        case "retry-save":
          if (this.session) this.persist(this.session); else this.restore();
          this.render(); break;
      }
    }));
    this.typeset(this.mount);
  }

  dispose() {
    this.win.clearInterval(this.timer);
    this.win.removeEventListener("storage", this.onStorage);
    this.mount.ownerDocument.removeEventListener("visibilitychange", this.onVisibility);
    this.generation++;
  }
}
