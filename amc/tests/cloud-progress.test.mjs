import assert from "node:assert/strict";
import { test } from "node:test";
import { CloudProgress, GUEST_PROGRESS_KEY } from "../assets/cloud-progress.mjs";
import { validateCloudConfig } from "../assets/account.mjs";

const keys = ["2025-AMC10A-1", "2025-AMC10B-1"];
const user = { id: "user-a", email: "a@example.test" };
const row = (key, status, version = 1) => ({ problem_key: key, status, version });
const clone = (data) => JSON.parse(JSON.stringify(data));

function harness() {
  const store = new Map();
  const storage = {
    getItem: (key) => store.get(key) ?? null,
    setItem: (key, value) => store.set(key, value)
  };
  const remote = new Map();
  let offline = false;
  let beforeSave = null;
  let beforeRead = null;
  const errors = [];
  const snapshots = [];
  const client = {
    from() {
      return { select() { return {
        async eq(_field, userId) {
          if (beforeRead) await beforeRead(userId);
          return offline ? { error: new Error("Offline") }
            : { data: clone(Object.values(remote.get(userId) || {})) };
        }
      }; } };
    },
    async rpc(_name, args) {
      if (beforeSave) await beforeSave(args);
      if (offline) return { error: new Error("Offline") };
      const records = remote.get(args.p_expected_user) || {};
      remote.set(args.p_expected_user, records);
      const existing = records[args.p_problem_key];
      if (existing && existing.version !== args.p_expected_version) {
        return { data: { saved: false, record: clone(existing) } };
      }
      const next = row(args.p_problem_key, args.p_status, (existing?.version || 0) + 1);
      records[args.p_problem_key] = next;
      return { data: { saved: true, record: clone(next) } };
    }
  };
  const controller = new CloudProgress({
    client, storage, validKeys: keys,
    onChange: (value) => snapshots.push(clone(value)), onError: (error) => errors.push(error)
  });
  return {
    controller, storage, remote, store, errors, snapshots,
    setOffline: (value) => { offline = value; },
    beforeSave: (callback) => { beforeSave = callback; },
    beforeRead: (callback) => { beforeRead = callback; }
  };
}

test("guest data remains separate during login, migration, and logout", async () => {
  const h = harness();
  const guest = { [keys[0]]: "needUnderstanding", [keys[1]]: "haveApproach" };
  h.storage.setItem(GUEST_PROGRESS_KEY, JSON.stringify(guest));
  h.remote.set(user.id, { [keys[0]]: row(keys[0], "needStartingPoint") });
  await h.controller.activate(user);
  assert.equal(h.controller.selections()[keys[0]], "needStartingPoint");
  assert.equal(h.controller.selections()[keys[1]], undefined);
  await h.controller.importGuest();
  assert.equal(h.controller.selections()[keys[0]], "needStartingPoint");
  assert.equal(h.remote.get(user.id)[keys[1]].status, "haveApproach");
  assert.equal(h.storage.getItem(GUEST_PROGRESS_KEY), JSON.stringify(guest));
  await h.controller.activate(null);
  assert.deepEqual(h.controller.selections(), guest);
});

test("keep-separate decision survives login without importing guest progress", async () => {
  const h = harness();
  h.storage.setItem(GUEST_PROGRESS_KEY, JSON.stringify({ [keys[0]]: "haveApproach" }));
  await h.controller.activate(user);
  h.controller.dismissImport();
  await h.controller.activate(null);
  await h.controller.activate(user);
  assert.equal(h.controller.cache.importDismissed, true);
  assert.deepEqual(h.controller.selections(), {});
  assert.equal(h.remote.get(user.id), undefined);
});

test("offline writes survive reload and retry", async () => {
  const h = harness();
  await h.controller.activate(user);
  h.setOffline(true);
  await h.controller.mark(keys[0], "needUnderstanding");
  assert.equal(h.controller.phase, "syncError");
  assert.equal(h.controller.selections()[keys[0]], "needUnderstanding");
  const reloaded = new CloudProgress({
    client: h.controller.client, storage: h.storage, validKeys: keys, onChange() {}, onError() {}
  });
  await reloaded.activate(user);
  assert.equal(reloaded.selections()[keys[0]], "needUnderstanding");
  h.setOffline(false);
  await reloaded.sync();
  assert.equal(reloaded.phase, "saved");
  assert.equal(h.remote.get(user.id)[keys[0]].status, "needUnderstanding");
  assert.equal(Object.keys(reloaded.cache.pending).length, 0);
});

test("another account never receives the first account's cache or pending writes", async () => {
  const h = harness();
  await h.controller.activate(user);
  h.setOffline(true);
  await h.controller.mark(keys[0], "haveApproach");
  h.setOffline(false);
  await h.controller.activate({ id: "user-b" });
  assert.deepEqual(h.controller.selections(), {});
  assert.equal(h.remote.get("user-b"), undefined);
  await h.controller.activate(user);
  assert.equal(h.controller.selections()[keys[0]], "haveApproach");
});

test("conflicts require an explicit cloud or local decision", async () => {
  for (const useLocal of [false, true]) {
    const h = harness();
    h.remote.set(user.id, { [keys[0]]: row(keys[0], "needUnderstanding") });
    await h.controller.activate(user);
    h.setOffline(true);
    await h.controller.mark(keys[0], "haveApproach");
    h.remote.get(user.id)[keys[0]] = row(keys[0], "needStartingPoint", 2);
    h.setOffline(false);
    await h.controller.sync();
    assert.equal(h.controller.phase, "conflict");
    assert.equal(h.remote.get(user.id)[keys[0]].status, "needStartingPoint");
    await h.controller.resolve(keys[0], useLocal);
    assert.equal(h.controller.phase, "saved");
    assert.equal(h.controller.selections()[keys[0]], useLocal ? "haveApproach" : "needStartingPoint");
  }
});

test("concurrent server save is caught by RPC version check", async () => {
  const h = harness();
  await h.controller.activate(user);
  h.beforeSave((args) => {
    h.remote.set(user.id, { [args.p_problem_key]: row(args.p_problem_key, "haveApproach") });
  });
  await h.controller.mark(keys[0], "needUnderstanding");
  assert.equal(h.controller.phase, "conflict");
  assert.equal(h.controller.conflicts().length, 1);
});

test("rapid edits during a save keep the newest local choice", async () => {
  const h = harness();
  await h.controller.activate(user);
  let release;
  let started;
  const saving = new Promise((resolve) => { started = resolve; });
  h.beforeSave(async () => {
    h.beforeSave(null);
    started();
    await new Promise((resolve) => { release = resolve; });
  });
  const first = h.controller.mark(keys[0], "needUnderstanding");
  await saving;
  await h.controller.mark(keys[0], "haveApproach");
  release();
  await first;
  assert.equal(h.controller.phase, "saved");
  assert.equal(h.remote.get(user.id)[keys[0]].status, "haveApproach");
});

test("old account responses cannot replace a newly signed-in account", async () => {
  const h = harness();
  let release;
  let started;
  const reading = new Promise((resolve) => { started = resolve; });
  h.beforeRead(async (userId) => {
    if (userId !== user.id) return;
    started();
    await new Promise((resolve) => { release = resolve; });
  });
  const previous = h.controller.activate(user);
  await reading;
  await h.controller.activate({ id: "user-b" });
  release();
  await previous;
  assert.equal(h.controller.user.id, "user-b");
  assert.deepEqual(h.controller.selections(), {});
});

test("corrupt caches are not overwritten and storage failures are surfaced", async () => {
  const h = harness();
  h.storage.setItem(`amc10-account-progress:${user.id}`, "{invalid");
  await h.controller.activate(user);
  assert.equal(h.controller.phase, "cacheError");
  await assert.rejects(() => h.controller.mark(keys[0], "haveApproach"));
  assert.equal(h.storage.getItem(`amc10-account-progress:${user.id}`), "{invalid");
  assert.ok(h.errors.length);
  const clean = harness();
  await clean.controller.activate(user);
  clean.storage.setItem = () => { throw new Error("Storage full"); };
  await assert.rejects(() => clean.controller.mark(keys[0], "haveApproach"));
  assert.equal(clean.controller.phase, "storageError");
});

test("browser configuration rejects secret keys and unsafe project URLs", () => {
  assert.equal(validateCloudConfig({ url: "", publishableKey: "" }), false);
  assert.equal(validateCloudConfig({ url: "https://project.supabase.co", publishableKey: "sb_publishable_example" }), true);
  for (const url of ["http://project.supabase.co", "https://project.supabase.co/?secret=1"]) {
    assert.throws(() => validateCloudConfig({ url, publishableKey: "sb_publishable_example" }));
  }
  const jwt = (role) => `header.${btoa(JSON.stringify({ role }))}.signature`;
  assert.throws(() => validateCloudConfig({ url: "https://project.supabase.co", publishableKey: jwt("service_role") }));
  assert.equal(validateCloudConfig({ url: "https://project.supabase.co", publishableKey: jwt("anon") }), true);
});
