const KINDS = ["concept", "glossary", "review", "attempt"];
const TABLE = "isee_user_mastery";
// The table does not exist yet: supabase/isee-schema.sql has not been run.
const SETUP_ERROR_CODES = ["PGRST205", "PGRST202", "42P01", "42883"];
const ATTEMPT_ITEM = /^([^:]+):([0-3])$/;

export function isSetupError(error) {
  return SETUP_ERROR_CODES.includes(error?.code);
}

// Answer attempts are items "<problemId>:<choice>" (choice 0-3, at most one per problem).
// Returns { [problemId]: choice }. Malformed items are ignored, and when a set holds
// several choices for one problem the lowest wins so every device resolves the same one.
export function attemptsFromSet(set) {
  const attempts = new Map();
  for (const item of set || []) {
    const match = typeof item === "string" ? ATTEMPT_ITEM.exec(item) : null;
    if (!match) continue;
    const choice = Number(match[2]);
    if (!attempts.has(match[1]) || choice < attempts.get(match[1])) attempts.set(match[1], choice);
  }
  return Object.fromEntries(attempts);
}

// Syncs concept mastery, glossary mastery, review bookmarks, and answer attempts for signed-in users.
// Changes are applied locally first, queued per user, and flushed to Supabase.
export class CloudMastery {
  constructor({ client, storage, readLocal, onChange, onError }) {
    this.client = client;
    this.storage = storage;
    this.readLocal = readLocal;
    this.onChange = onChange;
    this.onError = onError;
    this.user = null;
    this.generation = 0;
    this.remote = this.emptySets();
    this.pending = {};
    this.available = false;
    this.initialized = false;
    this.setupNeeded = false;
    this.flushing = null;
  }

  emptySets() {
    return Object.fromEntries(KINDS.map((kind) => [kind, new Set()]));
  }

  cacheKey() {
    return `isee-mastery-cache:${this.user.id}`;
  }

  readCache() {
    try {
      const data = JSON.parse(this.storage.getItem(this.cacheKey()) || "null");
      if (data && typeof data.pending === "object" && !Array.isArray(data.pending)) return data;
    } catch {
      // Ignore corrupt cache and rebuild from the server.
    }
    return null;
  }

  persist() {
    try {
      this.storage.setItem(this.cacheKey(), JSON.stringify({ pending: this.pending, initialized: this.initialized }));
    } catch (error) {
      this.onError?.(error);
    }
  }

  snapshot() {
    const sets = Object.fromEntries(KINDS.map((kind) => [kind, new Set(this.remote[kind])]));
    for (const [entry, mastered] of Object.entries(this.pending)) {
      const [kind, id] = splitEntry(entry);
      if (!sets[kind]) continue;
      if (mastered) sets[kind].add(id);
      else sets[kind].delete(id);
    }
    return sets;
  }

  get pendingCount() {
    return Object.keys(this.pending).length;
  }

  notify() {
    this.onChange?.(this.snapshot());
  }

  async activate(user) {
    if (user?.id && this.user?.id === user.id) return;
    if (await this.load(user)) await this.flush();
  }

  // Loads server rows for the user. Returns true when the table is reachable.
  async load(user) {
    const generation = ++this.generation;
    this.user = user || null;
    this.remote = this.emptySets();
    this.pending = {};
    this.available = false;
    this.initialized = false;
    if (!this.user) {
      this.setupNeeded = false;
      this.notify();
      return false;
    }
    const cache = this.readCache();
    this.pending = cache?.pending || {};
    this.initialized = Boolean(cache?.initialized);
    let rows;
    try {
      const { data, error } = await this.client.from(TABLE)
        .select("kind,item_id").eq("user_id", this.user.id);
      if (error) throw error;
      rows = Array.isArray(data) ? data : [];
    } catch (error) {
      if (generation !== this.generation) return false;
      this.setupNeeded = isSetupError(error);
      this.onError?.(error);
      this.notify();
      return false;
    }
    if (generation !== this.generation) return false;
    this.available = true;
    this.setupNeeded = false;
    for (const row of rows) {
      if (KINDS.includes(row?.kind) && typeof row.item_id === "string") this.remote[row.kind].add(row.item_id);
    }
    // Only a successful load marks the cache initialized, so edits queued while the
    // table was unreachable cannot suppress the first upload of this browser's data.
    if (!this.initialized && !rows.length) this.importLocal();
    this.initialized = true;
    this.persist();
    this.notify();
    return true;
  }

  // Queues the browser's own data for an account that has nothing yet. Edits already
  // queued for this account win over the older local copy.
  importLocal() {
    const local = this.readLocal?.() || {};
    for (const kind of KINDS) {
      if (kind === "attempt") continue;
      for (const id of local[kind] || []) {
        if (!(`${kind}:${id}` in this.pending)) this.pending[`${kind}:${id}`] = true;
      }
    }
    for (const [problemId, choice] of Object.entries(attemptsFromSet(local.attempt))) {
      if (!this.attemptIds(problemId).length) this.pending[`attempt:${problemId}:${choice}`] = true;
    }
  }

  // Attempt items ("<problemId>:<choice>") stored or queued for one problem.
  attemptIds(problemId) {
    const prefix = `${problemId}:`;
    const ids = new Set([...this.remote.attempt].filter((id) => id.startsWith(prefix)));
    for (const entry of Object.keys(this.pending)) {
      const [kind, id] = splitEntry(entry);
      if (kind === "attempt" && id.startsWith(prefix)) ids.add(id);
    }
    return [...ids];
  }

  async set(kind, id, mastered) {
    if (!this.user || !KINDS.includes(kind)) return;
    this.pending[`${kind}:${id}`] = Boolean(mastered);
    this.persist();
    this.notify();
    await this.flush();
  }

  // Records the chosen answer for a problem (0-3), or clears it with null. Every earlier
  // attempt for the problem is removed in the same queued update, and the update is
  // applied before the first await so overlapping calls always see each other's changes.
  async setAttempt(problemId, choice) {
    if (!this.user) return;
    const validChoice = choice === null || (Number.isInteger(choice) && choice >= 0 && choice <= 3);
    if (typeof problemId !== "string" || !problemId || problemId.includes(":") || !validChoice) {
      throw new Error("Invalid attempt.");
    }
    const keep = choice === null ? null : `${problemId}:${choice}`;
    for (const id of this.attemptIds(problemId)) {
      if (id !== keep) this.pending[`attempt:${id}`] = false;
    }
    if (keep) this.pending[`attempt:${keep}`] = true;
    this.persist();
    this.notify();
    await this.flush();
  }

  async flush() {
    while (this.flushing) await this.flushing;
    if (!this.user || (this.available && !this.pendingCount)) return;
    this.flushing = this.flushPending().finally(() => { this.flushing = null; });
    return this.flushing;
  }

  async flushPending() {
    if (!this.available && !(await this.load(this.user))) return;
    const generation = this.generation;
    const userId = this.user.id;
    // Removals go first, so replacing an attempt never leaves two answers on the server.
    const entries = Object.keys(this.pending).sort((a, b) => Number(this.pending[a]) - Number(this.pending[b]));
    for (const entry of entries) {
      const mastered = this.pending[entry];
      const [kind, id] = splitEntry(entry);
      try {
        const query = this.client.from(TABLE);
        const { error } = mastered
          ? await query.upsert({ user_id: userId, kind, item_id: id }, { onConflict: "user_id,kind,item_id" })
          : await query.delete().eq("user_id", userId).eq("kind", kind).eq("item_id", id);
        if (error) throw error;
      } catch (error) {
        if (isSetupError(error)) this.setupNeeded = true;
        this.onError?.(error);
        return;
      }
      if (generation !== this.generation) return;
      this.setupNeeded = false;
      if (mastered) this.remote[kind].add(id);
      else this.remote[kind].delete(id);
      if (this.pending[entry] === mastered) delete this.pending[entry];
      this.persist();
    }
  }
}

function splitEntry(entry) {
  const index = entry.indexOf(":");
  return [entry.slice(0, index), entry.slice(index + 1)];
}
