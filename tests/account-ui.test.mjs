import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { JSDOM, VirtualConsole } from "jsdom";
import { allConcepts, PROBLEM_REFERENCES } from "../assets/data.mjs";
import { problemKey } from "../assets/progress.mjs";

const root = new URL("../", import.meta.url);
const html = readFileSync(new URL("index.html", root), "utf8");

async function page(configured, client, method = "password", search = "", fetchImpl = null) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", (error) => errors.push(error));
  const dom = new JSDOM(html, {
    url: `https://example.test/playground/${search}`, runScripts: "outside-only",
    pretendToBeVisual: true, virtualConsole
  });
  const window = dom.window;
  window.matchMedia = () => ({ matches: false, addEventListener() {} });
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.__testClient = client;
  window.document.querySelector("#accountLoginMethod").value = method;
  window.fetch = fetchImpl || (async (url) => ({
    ok: true, json: async () => JSON.parse(readFileSync(new URL(url, root), "utf8"))
  }));
  const bundle = await build({
    entryPoints: [fileURLToPath(new URL("assets/app.mjs", root))],
    bundle: true, write: false, format: "iife", platform: "browser",
    plugins: [{
      name: "mock-account-connection",
      setup(builder) {
        builder.onLoad({ filter: /cloud-config\.mjs$/ }, () => ({
          contents: `export const CLOUD_CONFIG = ${JSON.stringify(configured
            ? { url: "https://project.supabase.co", publishableKey: "sb_publishable_test" }
            : { url: "", publishableKey: "" })};`,
          loader: "js"
        }));
        builder.onLoad({ filter: /vendor\/supabase\.mjs$/ }, () => ({
          contents: "export const createClient = () => window.__testClient;", loader: "js"
        }));
      }
    }]
  });
  window.eval(bundle.outputFiles[0].text);
  const $ = (selector) => window.document.querySelector(selector);
  const $$ = (selector) => window.document.querySelectorAll(selector);
  const waitFor = async (condition) => {
    const deadline = Date.now() + 10000;
    while (!condition()) {
      if (Date.now() > deadline) throw new Error("UI condition timed out");
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
  };
  return { window, $, $$, waitFor, errors, close: () => window.close() };
}

test("formula inequalities stay intact when rendered into HTML", async () => {
  const concept = allConcepts().find((item) => item.formulas.some((formula) => formula.includes("<")));
  const formula = concept.formulas.find((item) => item.includes("<"));
  const p = await page(false);
  try {
    p.$(`[data-concept="${concept.id}"]`).click();
    const expression = p.$(".math-formula");
    assert.equal(expression.textContent, `\\(${formula}\\)`);
    assert.equal(expression.querySelector("*"), null);
  } finally {
    p.close();
  }
});

test("compact explorer header keeps labeled filters, localized counts, and progress details working", async () => {
  const p = await page(false, undefined, "password", "", async (url) => ({
    ok: true, json: async () => JSON.parse(readFileSync(new URL(url, root), "utf8"))
  }));
  try {
    p.$("#problemsTab").click();
    assert.equal(p.$$("#problemFilters label select").length, 4);
    for (const select of p.$$("#problemFilters select")) {
      assert.ok(select.closest("label").textContent.trim());
    }
    assert.equal(p.$("#problemCount").textContent, "500 / 500");
    p.$("#yearFilter").value = "2025";
    p.$("#yearFilter").dispatchEvent(new p.window.Event("change"));
    assert.equal(p.$("#problemCount").textContent, "50 / 500");
    assert.match(p.$("#progressScope").textContent, /2025/);
    assert.equal(p.$("#progressMeter").max, 50);
    assert.equal(p.$(".progress-help").open, false);
    p.$(".progress-help summary").click();
    assert.equal(p.$(".progress-help").open, true);
    assert.ok(p.$(".progress-help #exportProgress"));
    p.$("#examFilter").value = "AMC 10A";
    p.$("#examFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$$("#problemList .problem-statement").length === 25);
    assert.equal(p.$$("[data-problem-mode]").length, 0);
    assert.equal(p.$("#examAttribution").hidden, false);
    assert.ok(p.$("#problemList").classList.contains("full-exam"));
    p.$("#examFilter").value = "AMC 10B";
    p.$("#examFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$('#problemList [data-problem-key="2025-AMC10B-1"] .problem-statement'));
    assert.equal(p.$$("#problemList .problem-statement").length, 25);
    p.$("#difficultyFilter").value = "early";
    p.$("#difficultyFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$$("#problemList .problem-statement").length === 8);
    assert.equal(p.$("#progressMeter").max, 25);
    p.$("#problemProgressFilter").value = "haveApproach";
    p.$("#problemProgressFilter").dispatchEvent(new p.window.Event("change"));
    assert.equal(p.$$("#problemList .problem-statement").length, 0);
    assert.equal(p.$("#examAttribution").hidden, true);
    p.$("#problemProgressFilter").value = "all";
    p.$("#problemProgressFilter").dispatchEvent(new p.window.Event("change"));
    p.$("#difficultyFilter").value = "all";
    p.$("#difficultyFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$$("#problemList .problem-statement").length === 25);
    assert.equal(p.$("#problemFilters").hidden, false);
    assert.equal(p.$("#progressMeter").max, 25);
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("#problemHeading").textContent, "真题索引");
    assert.equal(p.$("#progressOverviewHeading").textContent, "进度总览");
    assert.match(p.$("#examAttribution").textContent, /版权/);
    assert.equal(p.$(".progress-status-label").textContent, "待理解题意");
    p.$("#examFilter").value = "all";
    p.$("#examFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$$("#problemList .problem-statement").length === 50);
    assert.equal(p.$("#problemFilters").hidden, false);
    assert.equal(p.$("#yearFilter").value, "2025");
    assert.equal(p.$("#problemCount").textContent, "50 / 500");
    p.$("#yearFilter").value = "all";
    p.$("#yearFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$$("#problemList .problem-statement").length === 500);
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("statement failures are explicit, retryable, and cannot replace newer filter results", async () => {
  let release;
  let fail = true;
  const p = await page(false, undefined, "password", "?problem=2025-AMC10A-1", async (url) => {
    if (fail) return { ok: false, status: 503 };
    if (url.endsWith("2025B.json")) await new Promise((resolve) => { release = resolve; });
    return { ok: true, json: async () => JSON.parse(readFileSync(new URL(url, root), "utf8")) };
  });
  try {
    await p.waitFor(() => p.$("#retryExam"));
    assert.ok(p.$("#problemList [role=alert]"));
    assert.equal(p.$("#problemList").getAttribute("aria-busy"), "false");
    fail = false;
    p.$("#retryExam").click();
    await p.waitFor(() => p.$$("#problemList .problem-statement").length === 25);
    p.$("#examFilter").value = "all";
    p.$("#examFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => release);
    p.$("#yearFilter").value = "2024";
    p.$("#examFilter").value = "AMC 10A";
    p.$("#yearFilter").dispatchEvent(new p.window.Event("change"));
    p.$("#examFilter").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => p.$('#problemList [data-problem-key="2024-AMC10A-1"] .problem-statement'));
    release();
    await new Promise((resolve) => setTimeout(resolve, 10));
    assert.equal(p.$$("#problemList .problem-statement").length, 25);
    assert.equal(p.$('#problemList [data-problem-key="2025-AMC10B-1"]'), null);
    assert.equal(p.$("#problemList").getAttribute("aria-busy"), "false");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("review bookmarks are independent of progress, filterable, localized, and persistent", async () => {
  const p = await page(false);
  try {
    p.$("#problemsTab").click();
    const button = p.$("[data-review-key]");
    const key = button.dataset.reviewKey;
    button.click();
    assert.equal(button.getAttribute("aria-pressed"), "true");
    assert.equal(p.$(`[data-progress-key="${key}"] input:checked`), null);
    assert.deepEqual(JSON.parse(p.window.localStorage.getItem("amc10-review-collection")), [key]);
    assert.equal(p.$("#reviewCollectionCount").textContent, "1");
    p.$("#reviewOnly").value = "saved";
    p.$("#reviewOnly").dispatchEvent(new p.window.Event("change"));
    assert.equal(p.$$("#problemList .problem-card").length, 1);
    assert.equal(p.$("#progressMeter").max, 500);
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("[data-review-key]").getAttribute("aria-pressed"), "true");
    assert.equal(p.$("[data-review-key]").getAttribute("aria-label"), "移出错题集");
    p.$("[data-review-key]").click();
    assert.equal(p.$$("#problemList .problem-card").length, 0);
    assert.equal(p.$("#reviewCollectionCount").textContent, "0");
    p.$("#reviewOnly").value = "all";
    p.$("#reviewOnly").dispatchEvent(new p.window.Event("change"));
    assert.equal(p.$$("#problemList .problem-card").length, 500);
    const storage = p.window.Storage.prototype.setItem;
    p.window.Storage.prototype.setItem = () => { throw new Error("Storage full"); };
    p.$("[data-review-key]").click();
    assert.equal(p.$("#reviewCollectionError").hidden, false);
    assert.equal(p.$("[data-review-key]").getAttribute("aria-pressed"), "false");
    p.window.Storage.prototype.setItem = storage;
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("signed-in review bookmarks save and remove cloud rows without changing progress", async () => {
  const user = { id: "review-user", email: "student@example.test" };
  const key = "2016-AMC10A-4";
  let rows = [{ user_id: user.id, kind: "review", item_id: key }];
  const client = {
    auth: {
      onAuthStateChange() {},
      async getSession() { return { data: { session: { user } } }; },
      async signOut() { return {}; }
    },
    from(table) {
      return {
        select() { return { async eq() { return { data: table === "user_mastery" ? rows : [] }; } }; },
        async upsert(row) { rows.push(row); return {}; },
        delete() {
          const filters = {};
          const chain = { eq(column, value) {
            filters[column] = value;
            if (Object.keys(filters).length < 3) return chain;
            rows = rows.filter((row) => !Object.entries(filters).every(([k, v]) => row[k] === v));
            return Promise.resolve({});
          } };
          return chain;
        }
      };
    }
  };
  const p = await page(true, client);
  try {
    await p.waitFor(() => p.$(`[data-review-key="${key}"]`).getAttribute("aria-pressed") === "true"
      && !p.$(`[data-review-key="${key}"]`).disabled);
    p.$(`[data-review-key="${key}"]`).click();
    await p.waitFor(() => rows.length === 0);
    assert.equal(p.$(`[data-review-key="${key}"]`).getAttribute("aria-pressed"), "false");
    p.$(`[data-review-key="${key}"]`).click();
    await p.waitFor(() => rows.length === 1);
    assert.equal(rows[0].kind, "review");
    assert.equal(rows[0].item_id, key);
    assert.equal(p.$("#conceptProgress .concept-progress-statuses > div:last-child dd").textContent,
      PROBLEM_REFERENCES.find((problem) => problemKey(problem) === key).conceptIds.includes("polynomials") ? "1" : "0");
    assert.equal(p.$(`[data-progress-key="${key}"] input:checked`), null);
    assert.equal(p.window.localStorage.getItem("amc10-review-collection"), null);
    p.$("#accountSignOut").click();
    await p.waitFor(() => !p.$("#accountPasswordForm").hidden);
    assert.equal(p.$(`[data-review-key="${key}"]`).getAttribute("aria-pressed"), "false");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("unconfigured cloud panel preserves guest progress and keeps login disabled", async () => {
  const p = await page(false);
  try {
    assert.equal(p.$("#accountForm").hidden, true);
    assert.equal(p.$("#accountPasswordForm").hidden, true);
    assert.match(p.$("#accountMessage").textContent, /not configured/);
    assert.equal(p.window.document.body.dataset.authGate, "open");
    assert.equal(p.$("main.app-shell").hasAttribute("inert"), false);
    assert.equal(p.$("#accountLanding").hidden, true);
    const input = p.$('#problemList .problem-progress input[value="needUnderstanding"]');
    const control = input.closest("[data-progress-key]");
    const key = control.dataset.progressKey;
    assert.equal(control.querySelectorAll(".progress-option-icon svg").length, 4);
    for (const radio of control.querySelectorAll("input")) {
      assert.ok(radio.getAttribute("aria-label"));
      const tip = p.window.document.getElementById(radio.getAttribute("aria-describedby"));
      assert.equal(tip.getAttribute("role"), "tooltip");
      assert.match(tip.textContent, /[A-Za-z]/);
      assert.match(tip.textContent, /[\u4e00-\u9fff]/);
    }
    input.focus();
    input.dispatchEvent(new p.window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    assert.equal(input.closest("label").dataset.tooltipDismissed, "true");
    input.blur();
    input.focus();
    assert.equal(input.closest("label").hasAttribute("data-tooltip-dismissed"), false);
    input.click();
    assert.equal(JSON.parse(p.window.localStorage.getItem("amc10-problem-progress"))[key], "needUnderstanding");
    assert.equal(p.window.document.activeElement, input);
    assert.equal(control.dataset.progressStatus, "needUnderstanding");
    assert.match(control.querySelector("summary").textContent, /Need clarity/);
    const approach = control.querySelector('[value="haveApproach"]');
    approach.click();
    assert.equal(control.querySelectorAll("input:checked").length, 1);
    assert.equal(control.dataset.progressStatus, "haveApproach");
    assert.equal(JSON.parse(p.window.localStorage.getItem("amc10-problem-progress"))[key], "haveApproach");
    p.$('[data-language="zh"]').click();
    const localized = p.$(`[data-progress-key="${key}"] input:checked`);
    assert.equal(localized.value, "haveApproach");
    assert.match(localized.getAttribute("aria-label"), /理解题意/);
    assert.match(localized.closest("details").querySelector("summary").textContent, /已有解题思路/);
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("sign-in failures show actionable localized errors and clear on a successful retry", async () => {
  let failure;
  const client = {
    auth: {
      onAuthStateChange() {},
      async getSession() { return { data: { session: null } }; },
      async signInWithOtp() { return { error: failure }; }
    }
  };
  const p = await page(true, client, "email");
  try {
    await p.waitFor(() => !p.$("#accountForm").hidden);
    p.$("#accountEmail").value = "student@example.test";
    const cases = [
      [{ code: "over_email_send_rate_limit", message: "email rate limit exceeded", status: 429 }, /Too many sign-in email requests/],
      [{ code: "over_request_rate_limit", message: "Request cooldown", status: 429 }, /Too many sign-in attempts/],
      [{ message: "Too many requests", status: 429 }, /Too many sign-in attempts/],
      [{ code: "email_address_not_authorized", message: "Recipient is not authorized" }, /custom SMTP/],
      [{ code: "email_address_invalid", message: "Invalid email" }, /Check the email address/],
      [{ code: "signup_disabled", message: "Signups not allowed" }, /registration is disabled/],
      [{ code: "unexpected_failure", message: "SMTP delivery failed <b>details</b>" }, /Account action failed/],
      [new TypeError("Failed to fetch"), /Failed to fetch/]
    ];
    for (const [error, guidance] of cases) {
      failure = error;
      p.$("#accountHeading").parentElement.open = false;
      p.$("#accountForm").dispatchEvent(new p.window.Event("submit", { cancelable: true }));
      await p.waitFor(() => !p.$("#accountSendLink").disabled);
      assert.match(p.$("#accountMessage").textContent, guidance);
      assert.ok(p.$("#accountMessage").textContent.includes(error.message));
      assert.equal(p.$("#accountMessage b"), null);
      assert.equal(p.$("#accountHeading").parentElement.open, true);
      assert.equal(p.$("#accountForm").hidden, false);
    }
    p.$('[data-language="zh"]').click();
    assert.match(p.$("#accountMessage").textContent, /账户操作失败/);
    failure = { code: "over_email_send_rate_limit", message: "email rate limit exceeded" };
    p.$("#accountForm").dispatchEvent(new p.window.Event("submit", { cancelable: true }));
    await p.waitFor(() => !p.$("#accountSendLink").disabled);
    assert.match(p.$("#accountMessage").textContent, /登录邮件请求过多/);
    failure = null;
    p.$("#accountForm").dispatchEvent(new p.window.Event("submit", { cancelable: true }));
    await p.waitFor(() => !p.$("#accountSendLink").disabled);
    assert.match(p.$("#accountMessage").textContent, /请检查邮箱/);
    assert.doesNotMatch(p.$("#accountMessage").textContent, /rate limit/);
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("email login, guest import, cloud save, localization, and logout work through the app", async () => {
  let callback;
  let emailRequest;
  let offline = false;
  let signouts = 0;
  const records = {};
  const user = { id: "user-a", email: "student@example.test" };
  const client = {
    auth: {
      onAuthStateChange(handler) { callback = handler; },
      async getSession() { return { data: { session: null } }; },
      async signInWithOtp(args) { emailRequest = args; return {}; },
      async signOut() { signouts += 1; return {}; }
    },
    from() { return { select() { return { async eq() {
      return offline ? { error: new Error("Offline") } : { data: Object.values(records) };
    } }; } }; },
    async rpc(_name, args) {
      const record = {
        problem_key: args.p_problem_key, status: args.p_status,
        version: (records[args.p_problem_key]?.version || 0) + 1
      };
      records[args.p_problem_key] = record;
      return { data: { saved: true, record } };
    }
  };
  const p = await page(true, client, "email");
  try {
    await p.waitFor(() => !p.$("#accountForm").hidden);
    const key = "2016-AMC10A-4";
    p.$(`#problemList [data-progress-key="${key}"] input[value="needUnderstanding"]`).click();
    const guest = p.window.localStorage.getItem("amc10-problem-progress");
    p.$("#accountEmail").value = user.email;
    p.$("#accountForm").dispatchEvent(new p.window.Event("submit", { cancelable: true }));
    await p.waitFor(() => /Check your email/.test(p.$("#accountMessage").textContent));
    assert.equal(emailRequest.email, user.email);
    assert.equal(emailRequest.options.emailRedirectTo, "https://example.test/playground/");
    callback("SIGNED_IN", { user });
    await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
    assert.equal(p.$("#accountForm").hidden, true);
    assert.equal(p.$("#accountIdentity").textContent, user.email);
    assert.equal(p.$(`#problemList [data-progress-key="${key}"] input:checked`), null);
    assert.equal(p.$("#accountImportPanel").hidden, false);
    p.$("#accountImport").click();
    await p.waitFor(() => records[key]?.status === "needUnderstanding");
    assert.equal(p.$('[data-study-metric="problems"] progress').value, 1);
    assert.equal(p.window.localStorage.getItem("amc10-problem-progress"), guest);
    await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
    p.$(`#problemList [data-progress-key="${key}"] input[value="haveApproach"]`).click();
    await p.waitFor(() => records[key]?.status === "haveApproach");
    assert.equal(p.$(`#problemList [data-progress-key="${key}"]`).open, true);
    assert.equal(p.$(`[data-progress-key="${key}"]`).dataset.progressStatus, "haveApproach");
    assert.match(p.$(`[data-progress-key="${key}"] summary`).textContent, /Have an approach/);
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("#accountHeading").title, "账户与云端同步");
    assert.equal(p.$("#accountHeading").textContent, user.email);
    assert.equal(p.$(`#problemList [data-progress-key="${key}"] input:checked`).value, "haveApproach");
    p.$('[data-language="en"]').click();
    await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
    offline = true;
    p.$(`#problemList [data-progress-key="${key}"] input[value="needStartingPoint"]`).click();
    await p.waitFor(() => /Sync failed/.test(p.$("#accountSyncStatus").textContent));
    p.$("#accountSignOut").click();
    assert.equal(signouts, 0);
    assert.match(p.$("#accountMessage").textContent, /unsynced/);
    p.$("#accountSignOut").click();
    await p.waitFor(() => !p.$("#accountForm").hidden);
    assert.equal(signouts, 1);
    assert.equal(p.$(`#problemList [data-progress-key="${key}"] input:checked`).value, "needUnderstanding");
    assert.equal(records[key].status, "haveApproach");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("username password sign-in isolates both accounts and preserves guest progress", async () => {
  let callback;
  let activeUser;
  const requests = [];
  const records = new Map();
  const client = {
    auth: {
      onAuthStateChange(handler) { callback = handler; },
      async getSession() { return { data: { session: null } }; },
      async signInWithPassword(args) {
        requests.push(args);
        activeUser = { id: args.email, email: args.email };
        callback("SIGNED_IN", { user: activeUser });
        return { data: { user: activeUser } };
      },
      async signOut() { activeUser = null; callback("SIGNED_OUT", null); return {}; }
    },
    from() { return { select() { return { async eq(_column, id) {
      return { data: Object.values(records.get(id) || {}) };
    } }; } }; },
    async rpc(_name, args) {
      assert.equal(args.p_expected_user, activeUser.id);
      const rows = records.get(activeUser.id) || {};
      const record = {
        problem_key: args.p_problem_key, status: args.p_status,
        version: (rows[args.p_problem_key]?.version || 0) + 1
      };
      rows[record.problem_key] = record;
      records.set(activeUser.id, rows);
      return { data: { saved: true, record } };
    }
  };
  const p = await page(true, client);
  try {
    await p.waitFor(() => !p.$("#accountPasswordForm").hidden);
    const gate = () => p.window.document.body.dataset.authGate;
    assert.equal(gate(), "locked");
    assert.equal(p.$("main.app-shell").hasAttribute("inert"), true);
    assert.equal(p.$("#accountLanding").hidden, false);
    assert.match(p.$("#accountLandingTitle").textContent, /Sign in to continue/);
    assert.equal(p.$("#accountHeading").parentElement.open, true);
    assert.equal(p.$("#accountSyncStatus").hidden, true);
    assert.equal(p.$("#accountForm").hidden, true);
    assert.equal(p.$("#accountPassword").type, "password");
    assert.equal(p.$("#accountPassword").autocomplete, "current-password");
    const key = "2016-AMC10A-4";
    const selected = () => p.$(`#problemList [data-progress-key="${key}"] input:checked`)?.value;
    p.$(`#problemList [data-progress-key="${key}"] input[value="needUnderstanding"]`).click();
    for (const [index, name] of ["ethanzyj", "evanz"].entries()) {
      p.$("#accountUsername").value = ` ${name.toUpperCase()} `;
      p.$("#accountPassword").value = "test-only-password";
      p.$("#accountPasswordForm").dispatchEvent(new p.window.Event("submit", { cancelable: true }));
      await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
      assert.equal(requests[index].email, `${name}@users.amc10-prep.invalid`);
      assert.equal(requests[index].password, "test-only-password");
      assert.equal(p.$("#accountIdentity").textContent, name);
      assert.equal(gate(), "open");
      assert.equal(p.$("#accountSyncStatus").hidden, false);
      assert.equal(p.$("main.app-shell").hasAttribute("inert"), false);
      assert.equal(p.$("#accountLanding").hidden, true);
      assert.equal(p.$("#accountPassword").value, "");
      assert.equal(p.$("#accountPasswordForm").hidden, true);
      assert.equal(p.$("#accountLoginMethods").hidden, true);
      assert.equal(selected(), undefined);
      const status = index === 0 ? "haveApproach" : "needStartingPoint";
      p.$(`#problemList [data-progress-key="${key}"] input[value="${status}"]`).click();
      await p.waitFor(() => records.get(`${name}@users.amc10-prep.invalid`)?.[key]?.status === status);
      await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
      for (let i = 0; i < p.window.localStorage.length; i += 1) {
        assert.ok(!p.window.localStorage.getItem(p.window.localStorage.key(i)).includes("test-only-password"));
      }
      p.$("#accountSignOut").click();
      await p.waitFor(() => !p.$("#accountPasswordForm").hidden);
      assert.equal(gate(), "locked");
      assert.equal(p.$("main.app-shell").hasAttribute("inert"), true);
      assert.equal(selected(), "needUnderstanding");
    }
    assert.equal(records.get("ethanzyj@users.amc10-prep.invalid")[key].status, "haveApproach");
    assert.equal(records.get("evanz@users.amc10-prep.invalid")[key].status, "needStartingPoint");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("password login validates input, blocks duplicate requests, and surfaces auth failures", async () => {
  let finish;
  let requests = 0;
  const client = {
    auth: {
      onAuthStateChange() {},
      async getSession() { return { data: { session: null } }; },
      async signInWithPassword() {
        requests += 1;
        return new Promise((resolve) => { finish = resolve; });
      }
    }
  };
  const p = await page(true, client);
  try {
    await p.waitFor(() => !p.$("#accountPasswordForm").hidden);
    const submit = () => p.$("#accountPasswordForm").dispatchEvent(new p.window.Event("submit", { cancelable: true }));
    p.$("#accountUsername").value = "not-an-email@example.test";
    p.$("#accountPassword").value = "test-only-password";
    submit();
    assert.equal(requests, 0);
    assert.match(p.$("#accountMessage").textContent, /Use a username/);
    p.$("#accountUsername").value = "evanz";
    p.$("#accountPassword").value = "";
    submit();
    assert.equal(requests, 0);
    assert.match(p.$("#accountMessage").textContent, /Enter your password/);
    for (const [code, guidance] of [
      ["invalid_credentials", /Incorrect username or password/],
      ["email_not_confirmed", /has not been confirmed/],
      ["over_request_rate_limit", /Too many sign-in attempts/]
    ]) {
      p.$("#accountPassword").value = "test-only-password";
      submit();
      assert.equal(p.$("#accountLoginMethod").disabled, true);
      assert.equal(p.$("#accountPasswordSignIn").disabled, true);
      const before = requests;
      submit();
      assert.equal(requests, before);
      finish({ error: { code, message: "Authentication rejected" } });
      await p.waitFor(() => !p.$("#accountPasswordSignIn").disabled);
      assert.match(p.$("#accountMessage").textContent, guidance);
      assert.equal(p.$("#accountPassword").value, "");
      assert.equal(p.$("#accountPasswordForm").hidden, false);
    }
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("#accountPasswordSignIn").textContent, "登录");
    assert.match(p.$("#accountMessage").textContent, /登录尝试过多/);
    p.$("#accountPassword").value = "test-only-password";
    p.$("#accountLoginMethod").value = "email";
    p.$("#accountLoginMethod").dispatchEvent(new p.window.Event("change"));
    assert.equal(p.$("#accountPassword").value, "");
    assert.equal(p.$("#accountMessage").textContent, "");
    assert.equal(p.$("#accountForm").hidden, false);
    assert.equal(p.$("#accountPasswordForm").hidden, true);
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("a restored username account uses the existing authenticated session", async () => {
  const user = { id: "existing-user", email: "ethanzyj@users.amc10-prep.invalid" };
  const client = {
    auth: {
      onAuthStateChange() {},
      async getSession() { return { data: { session: { user } } }; }
    },
    from() { return { select() { return { async eq() {
      return { data: [{ problem_key: "2016-AMC10A-4", status: "haveApproach", version: 1 }] };
    } }; } }; }
  };
  const p = await page(true, client);
  try {
    await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
    assert.equal(p.$("#accountIdentity").textContent, "ethanzyj");
    assert.equal(p.window.document.body.dataset.authGate, "open");
    assert.equal(p.$("#accountLanding").hidden, true);
    assert.equal(p.$("#accountPasswordForm").hidden, true);
    assert.equal(p.$('#problemList [data-progress-key="2016-AMC10A-4"] input:checked').value, "haveApproach");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("the landing page stays locked when the sign-in service cannot be checked", async () => {
  const client = {
    auth: {
      onAuthStateChange() {},
      async getSession() { return { error: { message: "Service unavailable" } }; }
    }
  };
  const p = await page(true, client);
  try {
    assert.equal(p.window.document.body.dataset.authGate, "locked");
    await p.waitFor(() => /Service unavailable/.test(p.$("#accountMessage").textContent));
    assert.equal(p.window.document.body.dataset.authGate, "locked");
    assert.equal(p.$("main.app-shell").hasAttribute("inert"), true);
    assert.equal(p.$("#accountLanding").hidden, false);
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("#accountLandingTitle").textContent, "请先登录");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("study dashboard counts the whole collection once and scopes practice to the selected concept", async () => {
  const p = await page(false);
  try {
    const metric = (key) => p.$(`[data-study-metric="${key}"] progress`);
    assert.equal(metric("concepts").max, 18);
    assert.equal(metric("vocabulary").max, 144);
    assert.equal(metric("problems").max, 500);
    assert.equal(metric("problems").value, 0);
    p.$('#topicNav [data-concept="numbers-operations"]').click();
    const related = PROBLEM_REFERENCES.filter((problem) => problem.conceptIds.includes("numbers-operations"));
    const unrelated = PROBLEM_REFERENCES.find((problem) => !problem.conceptIds.includes("numbers-operations"));
    assert.equal(related.length, 204);
    assert.equal(new Set(related.map(problemKey)).size, 204);
    assert.equal(p.$("#relatedProblemCount").textContent, "204 / 500");
    assert.match(p.$("#referenceCountHelp").textContent, /must not be added together/);
    assert.equal(p.$("#conceptProgress > progress").max, 204);
    const key = problemKey(related[0]);
    p.$(`#problemList [data-progress-key="${key}"] input[value="haveApproach"]`).click();
    p.$(`#problemList [data-progress-key="${problemKey(unrelated)}"] input[value="needUnderstanding"]`).click();
    assert.equal(metric("problems").value, 2);
    assert.equal(p.$("#conceptProgress > progress").value, 1);
    assert.equal(p.$('[data-study-status="haveApproach"] dd').textContent, "1");
    assert.equal(p.$('[data-study-status="needUnderstanding"] dd').textContent, "0");
    p.$(`#problemList [data-review-key="${key}"]`).click();
    assert.equal(p.$("#conceptProgress .concept-progress-statuses > div:last-child dd").textContent, "1");
    p.$("#masteryToggle").click();
    assert.equal(metric("concepts").value, 1);
    p.$("[data-glossary-mastery]").click();
    assert.equal(metric("vocabulary").value, 1);
    p.$("#yearFilter").value = "2025";
    p.$("#yearFilter").dispatchEvent(new p.window.Event("change"));
    assert.equal(metric("problems").max, 500);
    assert.equal(metric("problems").value, 2);
    assert.equal(p.$("#conceptProgress > progress").max, 204);
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("#studyProgressHeading").textContent, "学习进度");
    assert.equal(p.$("#relatedProblemCount").textContent, "204 / 500");
    assert.equal(metric("problems").value, 2);
    assert.equal(metric("concepts").value, 1);
    assert.equal(metric("vocabulary").value, 1);
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("concept mastery uses the glossary check icon and highlights mastered Topic Map nodes", async () => {
  const p = await page(false);
  try {
    const mastery = p.$("#masteryToggle");
    assert.equal(mastery.getAttribute("aria-pressed"), "false");
    assert.match(mastery.getAttribute("aria-label"), /Mark mastered/);
    assert.ok(mastery.querySelector("svg circle"));
    assert.ok(mastery.querySelector("svg path"));
    mastery.click();
    assert.equal(p.$("#masteryToggle").getAttribute("aria-pressed"), "true");
    assert.match(p.$("#masteryToggle").getAttribute("aria-label"), /Mastered/);
    p.$("#mapTab").click();
    assert.ok(p.$('.map-concept.mastered[data-map-node="concept:polynomials"]'));
  } finally { p.close(); }
});

test("study guide shows related problems as a year/exam table of links that open the full exam page", async () => {
  let p = await page(false);
  try {
    assert.equal(p.$("#conceptView .problem-card"), null);
    assert.equal(p.$("#conceptView .problem-progress"), null);
    const link = p.$("#conceptView [data-open-problem]");
    assert.ok(link);
    const key = link.dataset.openProblem;
    const [year, exam, number] = key.split("-");
    p.window.fetch = async (url) => {
      assert.equal(url, `assets/exams/${year}${exam.slice(-1)}.json`);
      const body = readFileSync(new URL(url, root), "utf8");
      return { ok: true, json: async () => JSON.parse(body) };
    };
    p.$(`#problemList [data-progress-key="${key}"] input[value="haveApproach"]`).click();
    assert.match(link.getAttribute("aria-label"), /have a solution approach/);
    assert.equal(link.dataset.progress, "haveApproach");
    assert.equal(link.closest("tr").querySelector("th").textContent, year);
    assert.equal(link.getAttribute("target"), "_blank");
    assert.equal(link.getAttribute("href"), `?problem=${key}`);
    const viewAll = p.$("#conceptView a.text-button");
    assert.equal(viewAll.getAttribute("target"), "_blank");
    assert.match(viewAll.getAttribute("href"), /^\?problems-concept=/);
    assert.equal(p.errors.length, 0);
    const label = link.getAttribute("aria-label");
    p.close();
    p = await page(false, undefined, "password", link.getAttribute("href"), async (url) => {
      assert.equal(url, `assets/exams/${year}${exam.slice(-1)}.json`);
      const body = readFileSync(new URL(url, root), "utf8");
      return { ok: true, json: async () => JSON.parse(body) };
    });
    await p.waitFor(() => p.$(`#problemList [data-problem-key="${key}"] .problem-statement`));
    assert.equal(p.$("#problemsPanel").hidden, false);
    assert.equal(p.$$("[data-problem-mode]").length, 0);
    assert.equal(p.$("#yearFilter").value, year);
    assert.equal(p.$("#examFilter").value.replace(" ", ""), exam);
    assert.equal(p.$(`#problemList [data-problem-key="${key}"] .problem-topline strong`).textContent,
      label.split(" · ")[0]);
    assert.match(label, new RegExp(`#${number}\\b`));
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});

test("study guide shows related vocabulary as chips that preview and open glossary terms", async () => {
  let p = await page(false);
  try {
    assert.equal(p.$("#conceptView .glossary-card"), null);
    const chip = p.$("#conceptView [data-vocab-term]");
    assert.ok(chip);
    const slug = chip.dataset.vocabTerm;
    chip.dispatchEvent(new p.window.MouseEvent("mouseenter"));
    assert.equal(p.$("#glossary-tooltip").hidden, false);
    assert.ok(p.$("#glossary-tooltip .glossary-tooltip-note").textContent.trim());
    assert.equal(chip.getAttribute("target"), "_blank");
    assert.equal(chip.getAttribute("href"), `?term=${slug}`);
    const viewAll = [...p.$$("#conceptView a.text-button")].at(-1);
    assert.equal(viewAll.getAttribute("target"), "_blank");
    const conceptHref = viewAll.getAttribute("href");
    assert.match(conceptHref, /^\?glossary-concept=/);
    assert.equal(p.errors.length, 0);
    p.close();
    p = await page(false, undefined, "password", chip.getAttribute("href"));
    assert.equal(p.$("#glossaryPanel").hidden, false);
    assert.ok(p.$(`#glossary-${slug}`));
    const mastery = p.$("[data-glossary-mastery]");
    assert.equal(mastery.getAttribute("aria-pressed"), "false");
    assert.equal(mastery.querySelector("svg").getAttribute("aria-hidden"), "true");
    assert.ok(mastery.querySelector("svg circle"));
    assert.ok(mastery.querySelector('svg path[d^="m6.8"]'));
    assert.doesNotMatch(mastery.querySelector("svg").innerHTML, /M10 4v12/);
    assert.equal(mastery.textContent.trim(), "");
    assert.match(mastery.getAttribute("aria-label"), /Mark vocabulary mastered/);
    assert.equal(mastery.title, mastery.getAttribute("aria-label"));
    assert.equal(p.$(".glossary-related .glossary-action-label"), null);
    const relatedProblems = p.$(".glossary-problem-count");
    assert.match(relatedProblems.textContent, /\d+ problems\d+ 道真题/);
    assert.match(relatedProblems.getAttribute("aria-label"), /Related problems/);
    assert.equal(relatedProblems.parentElement, p.$(".glossary-mastery-action"));
    assert.equal(relatedProblems.nextElementSibling, mastery);
    assert.equal(p.$(".glossary-related .text-button"), null);
    mastery.click();
    const mastered = p.$("[data-glossary-mastery]");
    assert.equal(mastered.getAttribute("aria-pressed"), "true");
    assert.equal(mastered.getAttribute("aria-label"), "Mastered / 已掌握");
    assert.ok(mastered.classList.contains("complete"));
    p.$('[data-language="zh"]').click();
    assert.equal(p.$("[data-glossary-mastery]").getAttribute("aria-label"), "已掌握");
    p.close();
    p = await page(false, undefined, "password", conceptHref);
    assert.equal(p.$("#glossaryPanel").hidden, false);
    assert.equal(p.$("#glossaryConcept")?.value ?? conceptHref.split("=")[1], conceptHref.split("=")[1]);
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});
