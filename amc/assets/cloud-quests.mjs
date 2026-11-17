export function mergeQuestProgress(a, b) {
  return {
    learned: Boolean(a?.learned || b?.learned),
    formulas: [...new Set([...(a?.formulas || []), ...(b?.formulas || [])])].sort((x, y) => x - y),
    problems: [...new Set([...(a?.problems || []), ...(b?.problems || [])])],
    terms: [...new Set([...(a?.terms || []), ...(b?.terms || [])])]
  };
}

export class CloudQuests {
  constructor({ getClient, storage, validate, onChange, onError, onStatus }) {
    Object.assign(this, { getClient, storage, validate, onChange, onError, onStatus });
    this.userId = null;
    this.generation = 0;
    this.pending = {};
    this.flushing = null;
    this.available = false;
  }

  persist() {
    this.storage.setItem(`amc10-quest-pending:${this.userId}`, JSON.stringify(this.pending));
    this.onStatus(Object.keys(this.pending).length);
  }

  async activate(userId, local) {
    const generation = ++this.generation;
    this.userId = userId;
    this.pending = {};
    this.available = false;
    if (!userId) { this.onStatus(0); return; }
    try {
      const raw = this.storage.getItem(`amc10-quest-pending:${userId}`);
      this.pending = raw ? JSON.parse(raw) : {};
      this.validate({ version: 1, quests: this.pending });
      for (const [id, progress] of Object.entries(local.quests)) {
        this.pending[id] = mergeQuestProgress(this.pending[id], progress);
      }
      this.persist();
      const client = this.getClient();
      if (!client) throw new Error("Quest sync client unavailable.");
      const { data, error } = await client.from("user_quest_progress").select("mission_id,progress").eq("user_id", userId);
      if (generation !== this.generation) return;
      if (error) throw error;
      if (!Array.isArray(data)) throw new Error("Invalid quest sync response.");
      const quests = {};
      for (const row of data) {
        if (typeof row.mission_id !== "string" || Object.hasOwn(quests, row.mission_id)) throw new Error("Invalid remote mission.");
        quests[row.mission_id] = row.progress;
      }
      this.validate({ version: 1, quests });
      if (generation !== this.generation) return;
      for (const [id, progress] of Object.entries(this.pending)) quests[id] = mergeQuestProgress(quests[id], progress);
      this.validate({ version: 1, quests });
      this.available = true;
      this.onChange({ version: 1, quests }, userId);
      if (this.flushing) {
        try { await this.flushing; }
        catch (error) { if (generation === this.generation) this.onError(error); }
      }
      if (generation !== this.generation) return;
      await this.flush();
    } catch (error) {
      if (generation === this.generation) this.onError(error);
    }
  }

  queue(id, progress) {
    if (!this.userId) return;
    this.pending[id] = mergeQuestProgress(this.pending[id], progress);
    try { this.persist(); } catch (error) { this.onError(error); }
    this.flush();
  }

  async flush() {
    if (this.flushing || !this.userId || !this.available) return;
    const generation = this.generation;
    const userId = this.userId;
    const pending = this.pending;
    const run = (async () => {
      while (Object.keys(pending).length) {
        const id = Object.keys(pending)[0];
        const progress = pending[id];
        const { data, error } = await this.getClient().rpc("save_quest_progress", {
          p_expected_user: userId, p_mission_id: id, p_progress: progress
        });
        if (generation !== this.generation) return;
        if (error) throw error;
        if (!data || data.mission_id !== id) throw new Error("Invalid quest save response.");
        this.validate({ version: 1, quests: { [id]: data.progress } });
        this.onChange({ version: 1, quests: { [id]: data.progress } }, userId);
        if (pending[id] === progress) delete pending[id];
        this.persist();
      }
    })();
    this.flushing = run;
    try { await run; }
    catch (error) { if (generation === this.generation) this.onError(error); }
    finally {
      if (this.flushing === run) this.flushing = null;
    }
  }

  retry(local) {
    return this.activate(this.userId, local);
  }
}
