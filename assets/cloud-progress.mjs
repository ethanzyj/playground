import { PROBLEM_PROGRESS_OPTIONS } from "./progress.mjs?v=20261024-11";

export const GUEST_PROGRESS_KEY = "amc10-problem-progress";
const accountKey = (userId) => `amc10-account-progress:${userId}`;

export class CloudProgress {
  constructor({ client, storage, validKeys, onChange, onError }) {
    this.client = client;
    this.storage = storage;
    this.validKeys = new Set(validKeys);
    this.onChange = onChange;
    this.onError = onError;
    this.user = null;
    this.generation = 0;
    this.cache = this.emptyCache();
    this.phase = "guest";
    this.loaded = false;
    this.busy = false;
  }

  emptyCache() {
    return { rows: {}, pending: {}, importDismissed: false };
  }

  validStatus(key, status) {
    return this.validKeys.has(key) && PROBLEM_PROGRESS_OPTIONS.includes(status);
  }

  validateRow(row) {
    if (!row || !this.validStatus(row.problem_key, row.status)
      || !Number.isSafeInteger(row.version) || row.version < 1) {
      throw new Error("Invalid server progress record.");
    }
    return row;
  }

  readGuest() {
    const data = JSON.parse(this.storage.getItem(GUEST_PROGRESS_KEY) || "{}");
    if (!data || typeof data !== "object" || Array.isArray(data)
      || !Object.entries(data).every(([key, status]) => this.validStatus(key, status))) {
      throw new Error("Invalid guest progress.");
    }
    return data;
  }

  selections() {
    if (!this.user) return this.readGuest();
    return {
      ...Object.fromEntries(Object.entries(this.cache.rows).map(([key, row]) => [key, row.status])),
      ...Object.fromEntries(Object.entries(this.cache.pending).map(([key, item]) => [key, item.status]))
    };
  }

  conflicts() {
    return Object.entries(this.cache.pending).filter(([key, item]) => {
      const row = this.cache.rows[key];
      return row && row.version !== item.baseVersion && row.status !== item.status;
    }).map(([key, item]) => ({ key, local: item.status, cloud: this.cache.rows[key].status }));
  }

  notify() {
    this.onChange({
      user: this.user,
      phase: this.phase,
      loaded: this.loaded,
      busy: this.busy,
      selections: this.selections(),
      pendingCount: Object.keys(this.cache.pending).length,
      conflicts: this.conflicts(),
      importDismissed: this.cache.importDismissed
    });
  }

  persist() {
    if (this.user) this.storage.setItem(accountKey(this.user.id), JSON.stringify(this.cache));
  }

  readCache(userId) {
    const raw = this.storage.getItem(accountKey(userId));
    if (!raw) return this.emptyCache();
    const data = JSON.parse(raw);
    if (!data || typeof data.rows !== "object" || !data.rows
      || typeof data.pending !== "object" || !data.pending
      || Array.isArray(data.rows) || Array.isArray(data.pending)
      || typeof data.importDismissed !== "boolean") throw new Error("Invalid account cache.");
    for (const [key, row] of Object.entries(data.rows)) {
      this.validateRow(row);
      if (row.problem_key !== key) throw new Error("Account cache key mismatch.");
    }
    for (const [key, item] of Object.entries(data.pending)) {
      if (!this.validStatus(key, item.status) || !Number.isSafeInteger(item.baseVersion)
        || item.baseVersion < 0) throw new Error("Invalid pending progress.");
    }
    return data;
  }

  async activate(user) {
    if (user?.id && this.user?.id === user.id) return;
    const generation = ++this.generation;
    this.user = user;
    this.loaded = false;
    this.busy = false;
    this.cache = this.emptyCache();
    if (!user) {
      this.phase = "guest";
      this.notify();
      return;
    }
    try {
      this.cache = this.readCache(user.id);
    } catch (error) {
      // Do not overwrite an unreadable cache: it may contain unsynced work.
      this.phase = "cacheError";
      this.onError(error);
      this.notify();
      return;
    }
    this.phase = "syncing";
    this.notify();
    await this.sync(generation);
  }

  async mark(key, status) {
    if (!this.validStatus(key, status)) throw new Error("Invalid progress selection.");
    if (!this.user) {
      const updated = { ...this.readGuest(), [key]: status };
      this.storage.setItem(GUEST_PROGRESS_KEY, JSON.stringify(updated));
      this.notify();
      return;
    }
    if (this.phase === "cacheError") throw new Error("Account cache requires recovery before editing.");
    const previous = this.cache.pending[key];
    this.cache.pending[key] = {
      status, baseVersion: previous?.baseVersion ?? this.cache.rows[key]?.version ?? 0
    };
    try {
      this.persist();
    } catch (error) {
      this.phase = "storageError";
      this.onError(error);
      this.notify();
      throw error;
    }
    this.notify();
    await this.sync();
  }

  async sync(generation = this.generation) {
    if (!this.user || this.busy || this.phase === "cacheError") return;
    this.busy = true;
    this.phase = "syncing";
    this.notify();
    const userId = this.user.id;
    try {
      const { data, error } = await this.client.from("problem_progress")
        .select("problem_key,status,version,updated_at").eq("user_id", userId);
      if (generation !== this.generation) return;
      if (error) throw error;
      if (!Array.isArray(data)) throw new Error("Missing server progress.");
      this.cache.rows = Object.fromEntries(data.map((row) => {
        this.validateRow(row);
        return [row.problem_key, row];
      }));
      this.loaded = true;
      this.persist();
      for (;;) {
        const entry = Object.entries(this.cache.pending).find(([key, item]) =>
          !this.conflicts().some((conflict) => conflict.key === key));
        if (!entry) break;
        const [key, item] = entry;
        const row = this.cache.rows[key];
        if (row?.status === item.status) {
          delete this.cache.pending[key];
          this.persist();
          continue;
        }
        const result = await this.client.rpc("save_problem_progress", {
          p_expected_user: userId, p_problem_key: key,
          p_status: item.status, p_expected_version: item.baseVersion
        });
        if (generation !== this.generation) return;
        if (result.error) throw result.error;
        const record = this.validateRow(result.data?.record);
        if (record.problem_key !== key || typeof result.data.saved !== "boolean") {
          throw new Error("Invalid save response.");
        }
        if ((result.data.saved && record.status !== item.status)
          || (!result.data.saved && record.version === item.baseVersion)) {
          throw new Error("Inconsistent save response.");
        }
        this.cache.rows[key] = record;
        const latest = this.cache.pending[key];
        if (result.data.saved || record.status === item.status) {
          if (latest === item) delete this.cache.pending[key];
          else latest.baseVersion = record.version;
        }
        this.persist();
      }
      this.phase = this.conflicts().length ? "conflict" : "saved";
    } catch (error) {
      if (generation !== this.generation) return;
      this.phase = "syncError";
      this.onError(error);
    } finally {
      if (generation === this.generation) {
        this.busy = false;
        this.notify();
      }
    }
  }

  async resolve(key, useLocal) {
    if (!this.conflicts().some((conflict) => conflict.key === key)) return;
    if (useLocal) this.cache.pending[key].baseVersion = this.cache.rows[key].version;
    else delete this.cache.pending[key];
    this.persist();
    this.notify();
    await this.sync();
  }

  async importGuest() {
    if (!this.user || !this.loaded || this.busy) throw new Error("Load account progress before importing.");
    for (const [key, status] of Object.entries(this.readGuest())) {
      if (!this.cache.rows[key] && !this.cache.pending[key]) {
        this.cache.pending[key] = { status, baseVersion: 0 };
      }
    }
    this.cache.importDismissed = true;
    this.persist();
    this.notify();
    await this.sync();
  }

  dismissImport() {
    this.cache.importDismissed = true;
    this.persist();
    this.notify();
  }
}
