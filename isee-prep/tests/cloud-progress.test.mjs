import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { CloudProgress, GUEST_PROGRESS_KEY } from "../assets/cloud-progress.mjs";
import { validateCloudConfig } from "../assets/account.mjs";
import { PROBLEMS } from "../assets/data.mjs";
import { PROBLEM_PROGRESS_OPTIONS } from "../assets/progress.mjs";

const keys = ["vr-syn-l01", "ma-na-u10"];
const user = { id: "user-a", email: "a@example.test" };
const row = (key, status, version = 1) => ({ problem_key: key, status, version });
const clone = (data) => JSON.parse(JSON.stringify(data));
const databaseError = (code) => Object.assign(new Error(`Database error ${code}`), { code });

function harness() {
  const store = new Map();
  const storage = {
    getItem: (key) => store.get(key) ?? null,
    setItem: (key, value) => store.set(key, value)
  };
  const remote = new Map();
  const used = { tables: new Set(), functions: new Set(), parameters: new Set() };
  let offline = false;
  let readError = null;
  let saveError = null;
  let beforeSave = null;
  let beforeRead = null;
  const errors = [];
  const snapshots = [];
  const client = {
    from(table) {
      used.tables.add(table);
      return { select() { return {
        async eq(_field, userId) {
          if (beforeRead) await beforeRead(userId);
          if (readError) return { error: readError };
          return offline ? { error: new Error("Offline") }
            : { data: clone(Object.values(remote.get(userId) || {})) };
        }
      }; } };
    },
    async rpc(name, args) {
      used.functions.add(name);
      Object.keys(args).forEach((parameter) => used.parameters.add(parameter));
      if (beforeSave) await beforeSave(args);
      if (saveError) return { error: saveError };
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
    controller, storage, remote, store, errors, snapshots, used,
    setOffline: (value) => { offline = value; },
    setReadError: (value) => { readError = value; },
    setSaveError: (value) => { saveError = value; },
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
  h.storage.setItem(`isee-account-progress:${user.id}`, "{invalid");
  await h.controller.activate(user);
  assert.equal(h.controller.phase, "cacheError");
  await assert.rejects(() => h.controller.mark(keys[0], "haveApproach"));
  assert.equal(h.storage.getItem(`isee-account-progress:${user.id}`), "{invalid");
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

test("progress uses the ISEE storage keys, table and save function", async () => {
  const h = harness();
  assert.equal(GUEST_PROGRESS_KEY, "isee-problem-progress");
  await h.controller.activate(user);
  await h.controller.mark(keys[0], "needStartingPoint");
  assert.deepEqual([...h.used.tables], ["isee_problem_progress"]);
  assert.deepEqual([...h.used.functions], ["save_isee_problem_progress"]);
  assert.deepEqual([...h.used.parameters].sort(), ["p_expected_user", "p_expected_version", "p_problem_key", "p_status"]);
  assert.equal(JSON.parse(h.storage.getItem(`isee-account-progress:${user.id}`)).rows[keys[0]].status, "needStartingPoint");
});

for (const code of ["PGRST205", "42P01"]) {
  test(`a missing progress table (${code}) asks for setup, keeps pending work, and recovers once it exists`, async () => {
    const h = harness();
    h.setReadError(databaseError(code));
    await h.controller.activate(user);
    assert.equal(h.controller.phase, "setupNeeded");
    assert.equal(h.snapshots.at(-1).phase, "setupNeeded");
    assert.equal(h.snapshots.at(-1).loaded, false);
    assert.equal(h.errors.at(-1).code, code);

    await h.controller.mark(keys[0], "haveApproach");
    assert.equal(h.controller.phase, "setupNeeded");
    assert.equal(h.controller.selections()[keys[0]], "haveApproach");
    assert.equal(h.snapshots.at(-1).pendingCount, 1);
    const cached = JSON.parse(h.storage.getItem(`isee-account-progress:${user.id}`));
    assert.deepEqual(cached.pending, { [keys[0]]: { status: "haveApproach", baseVersion: 0 } });

    const reloaded = new CloudProgress({
      client: h.controller.client, storage: h.storage, validKeys: keys, onChange() {}, onError() {}
    });
    await reloaded.activate(user);
    assert.equal(reloaded.phase, "setupNeeded");
    assert.equal(reloaded.selections()[keys[0]], "haveApproach");

    h.setReadError(null);
    await reloaded.sync();
    assert.equal(reloaded.phase, "saved");
    assert.equal(h.remote.get(user.id)[keys[0]].status, "haveApproach");
    assert.equal(Object.keys(reloaded.cache.pending).length, 0);
  });
}

for (const code of ["PGRST202", "42883"]) {
  test(`a missing save function (${code}) asks for setup and keeps the pending change`, async () => {
    const h = harness();
    await h.controller.activate(user);
    assert.equal(h.controller.phase, "saved");
    h.setSaveError(databaseError(code));
    await h.controller.mark(keys[1], "needUnderstanding");
    assert.equal(h.controller.phase, "setupNeeded");
    assert.equal(h.snapshots.at(-1).phase, "setupNeeded");
    assert.equal(h.errors.at(-1).code, code);
    assert.equal(h.controller.selections()[keys[1]], "needUnderstanding");
    assert.equal(JSON.parse(h.storage.getItem(`isee-account-progress:${user.id}`)).pending[keys[1]].status, "needUnderstanding");
    h.setSaveError(null);
    await h.controller.sync();
    assert.equal(h.controller.phase, "saved");
    assert.equal(h.remote.get(user.id)[keys[1]].status, "needUnderstanding");
  });
}

test("other database errors stay ordinary sync errors", async () => {
  for (const error of [databaseError("PGRST301"), databaseError("23514"), new Error("Offline")]) {
    const h = harness();
    h.setReadError(error);
    await h.controller.activate(user);
    assert.equal(h.controller.phase, "syncError");
  }
});

test("the migration defines the objects and rules the client relies on", () => {
  const sql = readFileSync(new URL("../supabase/isee-schema.sql", import.meta.url), "utf8").replace(/\s+/g, " ");
  assert.match(sql, /create table if not exists public\.isee_problem_progress \(/);
  const signature = /create or replace function public\.save_isee_problem_progress\(([^)]*)\) returns jsonb/.exec(sql);
  assert.ok(signature, "the save function is defined");
  const parameters = signature[1].split(",").map((parameter) => parameter.trim().split(" ")[0]).sort();
  assert.deepEqual(parameters, ["p_expected_user", "p_expected_version", "p_problem_key", "p_status"]);
  const statuses = /status in \(([^)]*)\)/.exec(sql)[1].match(/[A-Za-z]+/g);
  assert.deepEqual([...statuses].sort(), [...PROBLEM_PROGRESS_OPTIONS].sort());
  const keyPattern = new RegExp(/problem_key ~ '([^']+)'/.exec(sql)[1]);
  const maxLength = Number(/char_length\(problem_key\) <= (\d+)/.exec(sql)[1]);
  const rejected = PROBLEMS.map((problem) => problem.id).filter((id) => !keyPattern.test(id) || id.length > maxLength);
  assert.deepEqual(rejected, [], "every problem id must be accepted by the problem_key check");
});
