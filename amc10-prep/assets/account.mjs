import { CLOUD_CONFIG } from "./cloud-config.mjs?v=20261024-13";
import { CloudProgress } from "./cloud-progress.mjs?v=20261024-12";

const TEXT = {
  heading: ["Account & cloud sync", "账户与云端同步"],
  landingTitle: ["Sign in to continue", "请先登录"],
  landingCopy: ["Sign in to open the AMC 10 study guide and keep your problem progress in your account.", "登录后即可使用 AMC 10 备考指南，并将做题进度保存到账户中。"],
  checkingSession: ["Checking your sign-in…", "正在检查登录状态……"],
  disabled: ["Cloud login is not configured yet. Progress is still saved only in this browser.", "尚未配置云端登录，进度仍仅保存在本浏览器中。"],
  guest: ["Guest mode — progress is saved only in this browser.", "访客模式 — 进度仅保存在本浏览器中。"],
  email: ["Email", "电子邮箱"],
  loginMethod: ["Sign-in method", "登录方式"],
  passwordMethod: ["Username & password", "用户名和密码"],
  emailMethod: ["Email link", "邮件链接"],
  username: ["Username", "用户名"],
  password: ["Password", "密码"],
  passwordSignIn: ["Sign in", "登录"],
  signingIn: ["Signing in…", "正在登录……"],
  invalidUsername: ["Use a username with 3–32 letters, numbers, or underscores.", "用户名需为 3–32 位字母、数字或下划线。"],
  missingPassword: ["Enter your password.", "请输入密码。"],
  invalidCredentials: ["Incorrect username or password, or the account has not been created yet.", "用户名或密码错误，或账户尚未创建。"],
  unconfirmedAccount: ["This account has not been confirmed. Ask the project owner to create a confirmed account in Supabase Authentication → Users.", "此账户尚未确认。请让项目所有者在 Supabase Authentication → Users 中创建已确认的账户。"],
  requestRateLimit: ["Too many sign-in attempts. Wait before trying again.", "登录尝试过多，请稍后重试。"],
  signIn: ["Send sign-in link", "发送登录链接"],
  signOut: ["Sign out", "退出登录"],
  retry: ["Sync now / retry", "立即同步 / 重试"],
  syncing: ["Syncing…", "正在同步……"],
  saved: ["Saved to your account", "已保存至账户"],
  syncError: ["Sync failed. Pending changes remain in this browser; retry when online.", "同步失败。待同步更改仍在本浏览器中，请联网后重试。"],
  storageError: ["Browser storage failed. Keep this page open and retry syncing before leaving.", "浏览器存储失败，请保持页面打开并重试同步后再离开。"],
  cacheError: ["Your account cache could not be read. Editing is paused to protect unsynced work. Do not clear browser data without backing it up.", "无法读取账户缓存，为保护未同步数据已暂停编辑。备份前请勿清除浏览器数据。"],
  conflict: ["Changes from another device need your decision below.", "其他设备有不同的更改，请在下方选择保留哪一项。"],
  pending: ["Pending changes", "待同步更改"],
  importHelp: ["Guest progress exists in this browser. Import only problems not already marked in your account; existing account selections stay unchanged. Guest progress is kept separately.", "本浏览器中有访客进度。仅导入账户尚未标记的题目，已有账户状态保持不变。访客进度将单独保留。"],
  import: ["Import unmarked problems", "导入尚未标记的题目"],
  dismiss: ["Keep separate", "保持独立"],
  local: ["Use this browser's choice", "保留本浏览器的选择"],
  cloud: ["Use cloud choice", "保留云端选择"],
  sent: ["Check your email for a sign-in link. Open it in this browser/profile to finish signing in.", "请检查邮箱中的登录链接，并在此浏览器及用户配置中打开链接完成登录。"],
  sending: ["Sending sign-in link…", "正在发送登录链接……"],
  authError: ["Account action failed.", "账户操作失败。"],
  emailRateLimit: ["Too many sign-in email requests. Wait before requesting another link; a project-wide email limit may require a longer wait. The project owner can review Supabase Auth logs, email limits, and SMTP settings.", "登录邮件请求过多。请稍后再请求链接；项目邮件总量限制可能需要等待更长时间。项目所有者可检查 Supabase 身份验证日志、邮件限额和 SMTP 设置。"],
  emailNotAuthorized: ["Supabase cannot send email to this address with the current mail settings. The project owner must configure a custom SMTP provider or authorize this recipient for testing.", "当前邮件设置不允许 Supabase 向此地址发信。项目所有者需配置自定义 SMTP 服务，或授权此收件人用于测试。"],
  invalidEmail: ["Check the email address and try again.", "请检查电子邮箱地址后重试。"],
  signupDisabled: ["New account registration is disabled in Supabase. The project owner must enable signups to allow new accounts.", "Supabase 已禁用新账户注册。项目所有者需启用注册才能创建新账户。"],
  unsafeSignout: ["There are unsynced changes. They will remain in this account's local cache when you sign out, but are not yet backed up online.", "仍有未同步更改。退出后将保留在此账户的本地缓存中，但尚未备份至云端。"],
  confirmSignout: ["Sign out with unsynced changes", "仍然退出（有未同步更改）"],
  needUnderstanding: ["Need help understanding", "需要帮助理解题意"],
  needStartingPoint: ["Understand, but need a starting point", "理解题意，但还没有解题思路"],
  haveApproach: ["Understand and have a solution approach", "理解题意，并有解题思路"]
};

export function validateCloudConfig(config) {
  if (!config.url && !config.publishableKey) return false;
  const url = new URL(config.url);
  if (url.protocol !== "https:" || url.username || url.password
    || url.search || url.hash || url.pathname !== "/") throw new Error("Use an HTTPS Supabase project origin.");
  const key = config.publishableKey;
  if (typeof key !== "string" || !key) throw new Error("Missing public Supabase key.");
  if (!key.startsWith("sb_publishable_")) {
    const payload = JSON.parse(atob(key.split(".")[1]?.replace(/-/g, "+").replace(/_/g, "/") || ""));
    if (payload.role !== "anon") throw new Error("Only publishable or legacy anon keys are safe in browser configuration.");
  }
  return true;
}

const USERNAME_DOMAIN = "@users.amc10-prep.invalid";

function accountIdentity(user) {
  return user.email?.endsWith(USERNAME_DOMAIN)
    ? user.email.slice(0, -USERNAME_DOMAIN.length) : user.email || user.id;
}

export class AccountPanel {
  constructor({ getLanguage, validKeys, onProgress }) {
    this.getLanguage = getLanguage;
    this.validKeys = validKeys;
    this.onProgress = onProgress;
    this.controller = null;
    this.client = null;
    this.snapshot = null;
    this.message = "";
    this.errorDetails = "";
    this.signoutPending = false;
    this.authBusy = false;
    this.ready = false;
    this.restoring = false;
    this.guestCount = 0;
    this.cloudEnabled = null;
  }

  text(key) {
    const pair = TEXT[key];
    const language = this.getLanguage();
    return language === "zh" ? pair[1] : language === "en" ? pair[0] : pair.join(" / ");
  }

  async start() {
    try {
      if (!validateCloudConfig(CLOUD_CONFIG)) {
        this.cloudEnabled = false;
        this.message = "disabled";
        this.render();
        return;
      }
      this.cloudEnabled = true;
      this.restoring = true;
      this.render();
      const { createClient } = await import("./vendor/supabase.mjs");
      this.client = createClient(CLOUD_CONFIG.url, CLOUD_CONFIG.publishableKey, {
        auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
      this.controller = new CloudProgress({
        client: this.client, storage: localStorage, validKeys: this.validKeys,
        onError: (error) => console.error("Account progress sync failed.", error),
        onChange: (snapshot) => {
          this.snapshot = snapshot;
          this.onProgress(snapshot.selections);
          this.render();
        }
      });
      this.guestCount = Object.keys(this.controller.readGuest()).length;
      this.ready = true;
      this.client.auth.onAuthStateChange((_event, session) => {
        // Supabase auth callbacks must not await other client operations.
        setTimeout(() => this.run(async () => {
          this.guestCount = Object.keys(this.controller.readGuest()).length;
          await this.controller.activate(session?.user || null);
        }), 0);
      });
      const { data, error } = await this.client.auth.getSession();
      if (error) throw error;
      await this.controller.activate(data.session?.user || null);
      window.addEventListener("online", () => this.run(() => this.controller.sync()));
      window.addEventListener("focus", () => {
        if (this.controller.user) this.run(() => this.controller.sync());
      });
      this.render();
    } catch (error) {
      console.error("Unable to initialize cloud login.", error);
      this.setAuthError(error);
      this.render();
    } finally {
      this.restoring = false;
      this.render();
    }
  }

  async run(action) {
    try {
      this.message = "";
      this.errorDetails = "";
      await action();
    } catch (error) {
      console.error("Account action failed.", error);
      this.setAuthError(error);
    }
    this.render();
  }

  setAuthError(error) {
    const messages = {
      over_email_send_rate_limit: "emailRateLimit",
      over_request_rate_limit: "requestRateLimit",
      email_address_not_authorized: "emailNotAuthorized",
      email_address_invalid: "invalidEmail",
      signup_disabled: "signupDisabled",
      invalid_credentials: "invalidCredentials",
      email_not_confirmed: "unconfirmedAccount"
    };
    this.message = Object.hasOwn(messages, error?.code) ? messages[error.code]
      : error?.status === 429 ? "requestRateLimit" : "authError";
    this.errorDetails = typeof error?.message === "string" ? error.message : "";
  }

  get signedIn() {
    return Boolean(this.controller?.user);
  }

  get editingPaused() {
    return this.restoring || (this.signedIn && this.snapshot?.phase === "cacheError");
  }

  async mark(key, status) {
    await this.run(() => this.controller.mark(key, status));
  }

  async signIn(email) {
    if (!this.client || this.authBusy) return;
    this.authBusy = true;
    this.message = "sending";
    this.errorDetails = "";
    this.render();
    try {
      const redirect = new URL(location.pathname, location.origin).href;
      const { error } = await this.client.auth.signInWithOtp({
        email, options: { emailRedirectTo: redirect }
      });
      if (error) throw error;
      this.message = "sent";
    } catch (error) {
      console.error("Unable to send sign-in link.", error);
      this.setAuthError(error);
    } finally {
      this.authBusy = false;
      this.render();
    }
  }

  async signInWithPassword(username, password) {
    if (!this.client || this.authBusy) return;
    const normalized = username.trim().toLowerCase();
    this.errorDetails = "";
    if (!/^[a-z0-9_]{3,32}$/.test(normalized) || !password) {
      this.message = password ? "invalidUsername" : "missingPassword";
      this.render();
      return;
    }
    this.authBusy = true;
    this.message = "signingIn";
    this.render();
    try {
      const { error } = await this.client.auth.signInWithPassword({
        email: `${normalized}${USERNAME_DOMAIN}`, password
      });
      if (error) throw error;
      this.message = "";
    } catch (error) {
      console.error("Unable to sign in with password.", error);
      this.setAuthError(error);
    } finally {
      document.querySelector("#accountPassword").value = "";
      this.authBusy = false;
      this.render();
    }
  }

  async signOut() {
    if (this.snapshot?.pendingCount && !this.signoutPending) {
      this.signoutPending = true;
      this.message = "unsafeSignout";
      this.render();
      return;
    }
    await this.run(async () => {
      const { error } = await this.client.auth.signOut({ scope: "local" });
      if (error) throw error;
      await this.controller.activate(null);
      this.signoutPending = false;
    });
  }

  wire() {
    document.querySelector("#accountLoginMethod").addEventListener("change", () => {
      document.querySelector("#accountPassword").value = "";
      this.message = "";
      this.errorDetails = "";
      this.render();
    });
    document.querySelector("#accountPasswordForm").addEventListener("submit", (event) => {
      event.preventDefault();
      this.signInWithPassword(
        document.querySelector("#accountUsername").value,
        document.querySelector("#accountPassword").value
      );
    });
    document.querySelector("#accountForm").addEventListener("submit", (event) => {
      event.preventDefault();
      this.signIn(document.querySelector("#accountEmail").value.trim());
    });
    document.querySelector("#accountSignOut").addEventListener("click", () => this.signOut());
    document.querySelector("#accountRetry").addEventListener("click", () =>
      this.run(() => this.controller.sync()));
    document.querySelector("#accountImport").addEventListener("click", () =>
      this.run(() => this.controller.importGuest()));
    document.querySelector("#accountKeepSeparate").addEventListener("click", () =>
      this.run(() => this.controller.dismissImport()));
  }

  render() {
    const $ = (selector) => document.querySelector(selector);
    const locked = this.cloudEnabled !== false && !this.signedIn;
    document.body.dataset.authGate = locked ? "locked" : "open";
    $("main.app-shell").toggleAttribute("inert", locked);
    $("#accountLanding").hidden = !locked;
    $("#accountLandingTitle").textContent = this.text("landingTitle");
    $("#accountLandingCopy").textContent = this.text(
      this.restoring || (this.cloudEnabled === null && !this.message) ? "checkingSession" : "landingCopy");
    if (locked) $("#accountHeading").parentElement.open = true;
    $("#accountSyncStatus").hidden = locked;
    $("#accountHeading").textContent = this.text("heading");
    $("#accountEmailLabel").textContent = this.text("email");
    $("#accountLoginMethodLabel").textContent = this.text("loginMethod");
    $("#accountLoginMethod option[value='password']").textContent = this.text("passwordMethod");
    $("#accountLoginMethod option[value='email']").textContent = this.text("emailMethod");
    $("#accountUsernameLabel").textContent = this.text("username");
    $("#accountPasswordLabel").textContent = this.text("password");
    $("#accountPasswordSignIn").textContent = this.text("passwordSignIn");
    $("#accountSendLink").textContent = this.text("signIn");
    $("#accountSignOut").textContent = this.text(this.signoutPending ? "confirmSignout" : "signOut");
    $("#accountRetry").textContent = this.text("retry");
    $("#accountImportHelp").textContent = this.text("importHelp");
    $("#accountImport").textContent = this.text("import");
    $("#accountKeepSeparate").textContent = this.text("dismiss");
    $("#accountMessage").textContent = this.message
      ? [this.text(this.message), this.errorDetails].filter(Boolean).join(" ") : "";
    const hideLogin = !this.ready || this.signedIn;
    const passwordLogin = $("#accountLoginMethod").value === "password";
    $("#accountLoginMethods").hidden = hideLogin;
    $("#accountPasswordForm").hidden = hideLogin || !passwordLogin;
    $("#accountForm").hidden = hideLogin || passwordLogin;
    $("#accountLoginMethod").disabled = this.authBusy;
    $("#accountPasswordSignIn").disabled = this.authBusy;
    $("#accountUsername").disabled = this.authBusy;
    $("#accountPassword").disabled = this.authBusy;
    $("#accountSendLink").disabled = this.authBusy;
    $("#accountSignOut").hidden = !this.signedIn;
    $("#accountRetry").hidden = !this.signedIn;
    $("#accountRetry").disabled = this.snapshot?.busy || this.snapshot?.phase === "cacheError";
    $("#accountIdentity").textContent = this.signedIn ? accountIdentity(this.controller.user) : "";
    $("#accountSyncStatus").textContent = this.signedIn
      ? `${this.text(this.snapshot?.phase || "syncing")} · ${this.text("pending")}: ${this.snapshot?.pendingCount || 0}`
      : this.text("guest");
    const importing = this.signedIn && this.guestCount > 0 && this.snapshot?.loaded && !this.snapshot.importDismissed;
    $("#accountImportPanel").hidden = !importing;
    $("#accountImport").disabled = this.snapshot?.busy;
    const conflicts = $("#accountConflicts");
    conflicts.replaceChildren();
    for (const conflict of this.snapshot?.conflicts || []) {
      const row = document.createElement("div");
      row.className = "account-conflict";
      const label = document.createElement("p");
      label.textContent = conflict.key;
      row.appendChild(label);
      for (const [choice, status] of [["local", conflict.local], ["cloud", conflict.cloud]]) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "mastery";
        button.textContent = `${this.text(choice)}: ${this.text(status)}`;
        button.disabled = this.snapshot.busy;
        button.addEventListener("click", () =>
          this.run(() => this.controller.resolve(conflict.key, choice === "local")));
        row.appendChild(button);
      }
      conflicts.appendChild(row);
    }
    document.querySelectorAll(".problem-progress input").forEach((input) => {
      input.disabled = this.editingPaused;
    });
    if (this.errorDetails || ["authError", "emailRateLimit", "requestRateLimit", "emailNotAuthorized", "invalidEmail", "signupDisabled", "invalidUsername", "missingPassword", "invalidCredentials", "unconfirmedAccount", "unsafeSignout"].includes(this.message)
      || ["syncError", "storageError", "cacheError", "conflict"].includes(this.snapshot?.phase)) {
      $("#accountHeading").parentElement.open = true;
    }
  }
}
