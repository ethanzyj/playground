const KINDS = ["concept", "glossary", "review"];
const TABLE = "user_mastery";

// Syncs concept mastery, glossary mastery, and review bookmarks for signed-in users.
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
    this.flushing = null;
  }

  emptySets() {
    return Object.fromEntries(KINDS.map((kind) => [kind, new Set()]));
  }

  cacheKey() {
    return `amc10-mastery-cache:${this.user.id}`;
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
      this.storage.setItem(this.cacheKey(), JSON.stringify({ pending: this.pending, initialized: true }));
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
    if (!this.user) {
      this.notify();
      return false;
    }
    const cache = this.readCache();
    this.pending = cache?.pending || {};
    let rows;
    try {
      const { data, error } = await this.client.from(TABLE)
        .select("kind,item_id").eq("user_id", this.user.id);
      if (error) throw error;
      rows = Array.isArray(data) ? data : [];
    } catch (error) {
      if (generation !== this.generation) return false;
      this.onError?.(error);
      this.notify();
      return false;
    }
    if (generation !== this.generation) return false;
    this.available = true;
    for (const row of rows) {
      if (KINDS.includes(row?.kind) && typeof row.item_id === "string") this.remote[row.kind].add(row.item_id);
    }
    if (!cache?.initialized && !rows.length) {
      const local = this.readLocal?.() || {};
      for (const kind of KINDS) {
        for (const id of local[kind] || []) this.pending[`${kind}:${id}`] = true;
      }
    }
    this.persist();
    this.notify();
    return true;
  }

  async set(kind, id, mastered) {
    if (!this.user || !KINDS.includes(kind)) return;
    this.pending[`${kind}:${id}`] = Boolean(mastered);
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
    for (const [entry, mastered] of Object.entries(this.pending)) {
      const [kind, id] = splitEntry(entry);
      try {
        const query = this.client.from(TABLE);
        const { error } = mastered
          ? await query.upsert({ user_id: userId, kind, item_id: id }, { onConflict: "user_id,kind,item_id" })
          : await query.delete().eq("user_id", userId).eq("kind", kind).eq("item_id", id);
        if (error) throw error;
      } catch (error) {
        this.onError?.(error);
        return;
      }
      if (generation !== this.generation) return;
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
