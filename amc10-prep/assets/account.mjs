import { CLOUD_CONFIG } from "./cloud-config.mjs?v=20261024-13";
import { CloudProgress } from "./cloud-progress.mjs?v=20261024-12";

const TEXT = {
  heading: ["Account & cloud sync", "账户与云端同步"],
  disabled: ["Cloud login is not configured yet. Progress is still saved only in this browser.", "尚未配置云端登录，进度仍仅保存在本浏览器中。"],
  guest: ["Guest mode — progress is saved only in this browser.", "访客模式 — 进度仅保存在本浏览器中。"],
  email: ["Email", "电子邮箱"],
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
  authError: ["Account action failed. Please retry. Details are in the browser console.", "账户操作失败，请重试。详情见浏览器控制台。"],
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

export class AccountPanel {
  constructor({ getLanguage, validKeys, onProgress }) {
    this.getLanguage = getLanguage;
    this.validKeys = validKeys;
    this.onProgress = onProgress;
    this.controller = null;
    this.client = null;
    this.snapshot = null;
    this.message = "";
    this.signoutPending = false;
    this.authBusy = false;
    this.ready = false;
    this.restoring = false;
    this.guestCount = 0;
  }

  text(key) {
    const pair = TEXT[key];
    const language = this.getLanguage();
    return language === "zh" ? pair[1] : language === "en" ? pair[0] : pair.join(" / ");
  }

  async start() {
    try {
      if (!validateCloudConfig(CLOUD_CONFIG)) {
        this.message = "disabled";
        this.render();
        return;
      }
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
      this.message = "authError";
      this.render();
    } finally {
      this.restoring = false;
      this.render();
    }
  }

  async run(action) {
    try {
      this.message = "";
      await action();
    } catch (error) {
      console.error("Account action failed.", error);
      this.message = "authError";
    }
    this.render();
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
      this.message = "authError";
    } finally {
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
    $("#accountHeading").textContent = this.text("heading");
    $("#accountEmailLabel").textContent = this.text("email");
    $("#accountSendLink").textContent = this.text("signIn");
    $("#accountSignOut").textContent = this.text(this.signoutPending ? "confirmSignout" : "signOut");
    $("#accountRetry").textContent = this.text("retry");
    $("#accountImportHelp").textContent = this.text("importHelp");
    $("#accountImport").textContent = this.text("import");
    $("#accountKeepSeparate").textContent = this.text("dismiss");
    $("#accountMessage").textContent = this.message ? this.text(this.message) : "";
    $("#accountForm").hidden = !this.ready || this.signedIn;
    $("#accountSendLink").disabled = this.authBusy;
    $("#accountSignOut").hidden = !this.signedIn;
    $("#accountRetry").hidden = !this.signedIn;
    $("#accountRetry").disabled = this.snapshot?.busy || this.snapshot?.phase === "cacheError";
    $("#accountIdentity").textContent = this.signedIn ? this.controller.user.email || this.controller.user.id : "";
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
    if (["authError", "unsafeSignout"].includes(this.message)
      || ["syncError", "storageError", "cacheError", "conflict"].includes(this.snapshot?.phase)) {
      $("#accountHeading").parentElement.open = true;
    }
  }
}
