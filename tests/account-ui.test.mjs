import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { JSDOM, VirtualConsole } from "jsdom";

const root = new URL("../", import.meta.url);
const html = readFileSync(new URL("index.html", root), "utf8");

async function page(configured, client) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", (error) => errors.push(error));
  const dom = new JSDOM(html, {
    url: "https://example.test/playground/", runScripts: "outside-only",
    pretendToBeVisual: true, virtualConsole
  });
  const window = dom.window;
  window.matchMedia = () => ({ matches: false, addEventListener() {} });
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.__testClient = client;
  window.fetch = async () => { throw new Error("Unexpected network request"); };
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
  const waitFor = async (condition) => {
    const deadline = Date.now() + 10000;
    while (!condition()) {
      if (Date.now() > deadline) throw new Error("UI condition timed out");
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
  };
  return { window, $, waitFor, errors, close: () => window.close() };
}

test("unconfigured cloud panel preserves guest progress and keeps login disabled", async () => {
  const p = await page(false);
  try {
    assert.equal(p.$("#accountForm").hidden, true);
    assert.match(p.$("#accountMessage").textContent, /not configured/);
    const input = p.$('#conceptView .problem-progress input[value="needUnderstanding"]');
    const key = input.closest("[data-progress-key]").dataset.progressKey;
    input.click();
    assert.equal(JSON.parse(p.window.localStorage.getItem("amc10-problem-progress"))[key], "needUnderstanding");
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
  const p = await page(true, client);
  try {
    await p.waitFor(() => !p.$("#accountForm").hidden);
    p.$("#accountEmail").value = "student@example.test";
    const cases = [
      [{ code: "over_email_send_rate_limit", message: "email rate limit exceeded", status: 429 }, /Too many sign-in email requests/],
      [{ code: "over_request_rate_limit", message: "Request cooldown", status: 429 }, /Too many sign-in email requests/],
      [{ message: "Too many requests", status: 429 }, /Too many sign-in email requests/],
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
    p.$("#languageMode").value = "zh";
    p.$("#languageMode").dispatchEvent(new p.window.Event("change"));
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
  const p = await page(true, client);
  try {
    await p.waitFor(() => !p.$("#accountForm").hidden);
    const key = "2016-AMC10A-4";
    p.$(`#conceptView [data-progress-key="${key}"] input[value="needUnderstanding"]`).click();
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
    assert.equal(p.$(`#conceptView [data-progress-key="${key}"] input:checked`), null);
    assert.equal(p.$("#accountImportPanel").hidden, false);
    p.$("#accountImport").click();
    await p.waitFor(() => records[key]?.status === "needUnderstanding");
    assert.equal(p.window.localStorage.getItem("amc10-problem-progress"), guest);
    await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
    p.$(`#conceptView [data-progress-key="${key}"] input[value="haveApproach"]`).click();
    await p.waitFor(() => records[key]?.status === "haveApproach");
    assert.equal(p.$(`#conceptView [data-progress-key="${key}"]`).open, true);
    p.$("#languageMode").value = "zh";
    p.$("#languageMode").dispatchEvent(new p.window.Event("change"));
    assert.equal(p.$("#accountHeading").textContent, "账户与云端同步");
    assert.equal(p.$(`#conceptView [data-progress-key="${key}"] input:checked`).value, "haveApproach");
    p.$("#languageMode").value = "en";
    p.$("#languageMode").dispatchEvent(new p.window.Event("change"));
    await p.waitFor(() => /Saved to your account/.test(p.$("#accountSyncStatus").textContent));
    offline = true;
    p.$(`#conceptView [data-progress-key="${key}"] input[value="needStartingPoint"]`).click();
    await p.waitFor(() => /Sync failed/.test(p.$("#accountSyncStatus").textContent));
    p.$("#accountSignOut").click();
    assert.equal(signouts, 0);
    assert.match(p.$("#accountMessage").textContent, /unsynced/);
    p.$("#accountSignOut").click();
    await p.waitFor(() => !p.$("#accountForm").hidden);
    assert.equal(signouts, 1);
    assert.equal(p.$(`#conceptView [data-progress-key="${key}"] input:checked`).value, "needUnderstanding");
    assert.equal(records[key].status, "haveApproach");
    assert.equal(p.errors.length, 0);
  } finally { p.close(); }
});
