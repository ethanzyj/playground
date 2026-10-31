import assert from "node:assert/strict";
import { test } from "node:test";
import { CloudQuests, mergeQuestProgress } from "../assets/cloud-quests.mjs";
import { validateQuestProgress } from "../assets/quests.mjs";

const lesson = { learned: true, formulas: [], problems: [], terms: [] };
function setup(client) {
  const cache = new Map();
  const errors = [];
  const updates = [];
  const cloud = new CloudQuests({
    getClient: () => client,
    storage: { getItem: (key) => cache.get(key), setItem: (key, value) => cache.set(key, value) },
    validate: validateQuestProgress, onError: (error) => errors.push(error),
    onChange: (data, user) => updates.push({ data, user }), onStatus() {}
  });
  return { cloud, cache, errors, updates };
}

test("quest cloud sync merges device progress, retries pending work, and keeps users isolated", async () => {
  let fail = true;
  const remote = { learned: true, formulas: [1], problems: [], terms: [] };
  const client = {
    from: () => ({ select: () => ({ eq: async () => ({ data: [{ mission_id: "polynomials", progress: remote }] }) }) }),
    rpc: async (_name, args) => fail ? { error: new Error("offline") }
      : { data: { mission_id: args.p_mission_id, progress: mergeQuestProgress(remote, args.p_progress) } }
  };
  const { cloud, cache, errors, updates } = setup(client);
  await cloud.activate("a", { version: 1, quests: { polynomials: { ...lesson, formulas: [0] } } });
  assert.equal(errors.length, 1);
  assert.deepEqual(updates[0].data.quests.polynomials.formulas, [0, 1]);
  assert.ok(JSON.parse(cache.get("amc10-quest-pending:a")).polynomials);
  fail = false;
  await cloud.retry(updates[0].data);
  assert.deepEqual(JSON.parse(cache.get("amc10-quest-pending:a")), {});
  assert.deepEqual(updates.at(-1).data.quests.polynomials.formulas, [0, 1]);
  await cloud.activate(null, { version: 1, quests: {} });
  assert.equal(cloud.userId, null);
  assert.deepEqual(cloud.pending, {});
  assert.ok(cache.has("amc10-quest-pending:a"));
});

test("a stale cloud response never updates the next account", async () => {
  let release;
  const client = {
    from: () => ({ select: () => ({ eq: () => new Promise((resolve) => { release = resolve; }) }) }),
    rpc: async () => { throw new Error("Unexpected save"); }
  };
  const { cloud, updates } = setup(client);
  const loading = cloud.activate("a", { version: 1, quests: {} });
  await cloud.activate(null, { version: 1, quests: {} });
  release({ data: [{ mission_id: "polynomials", progress: lesson }] });
  await loading;
  assert.equal(updates.length, 0);
});

test("missing migration errors keep pending progress and corrupt pending caches are not overwritten", async () => {
  const client = {
    from: () => ({ select: () => ({ eq: async () => ({ error: new Error("table missing") }) }) })
  };
  const { cloud, cache, errors } = setup(client);
  await cloud.activate("a", { version: 1, quests: { polynomials: lesson } });
  assert.equal(errors.length, 1);
  assert.equal(cloud.available, false);
  assert.deepEqual(JSON.parse(cache.get("amc10-quest-pending:a")).polynomials, lesson);
  cache.set("amc10-quest-pending:b", "{invalid");
  await cloud.activate("b", { version: 1, quests: {} });
  assert.equal(errors.length, 2);
  assert.equal(cache.get("amc10-quest-pending:b"), "{invalid");
});

test("edits made while a save is in flight are flushed rather than dropped", async () => {
  let release;
  let calls = 0;
  const client = {
    from: () => ({ select: () => ({ eq: async () => ({ data: [] }) }) }),
    rpc: async (_name, args) => {
      calls++;
      if (calls === 1) await new Promise((resolve) => { release = resolve; });
      return { data: { mission_id: args.p_mission_id, progress: args.p_progress } };
    }
  };
  const { cloud, cache } = setup(client);
  await cloud.activate("a", { version: 1, quests: {} });
  cloud.queue("polynomials", lesson);
  cloud.queue("polynomials", { ...lesson, formulas: [0] });
  release();
  while (cloud.flushing) await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(calls, 2);
  assert.deepEqual(JSON.parse(cache.get("amc10-quest-pending:a")), {});
});
