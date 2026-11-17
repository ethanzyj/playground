import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { CloudMastery, attemptsFromSet, isSetupError } from "../assets/cloud-mastery.mjs";
import { GLOSSARY, PROBLEMS, allConcepts } from "../assets/data.mjs";

function memoryStorage() {
  const data = new Map();
  return { getItem: (key) => data.get(key) ?? null, setItem: (key, value) => data.set(key, String(value)) };
}

// A fake Supabase client over an in-memory table. `error` fails every request with that
// error, `offline` fails them with a plain network error, and `gate` can hold a write.
function fakeClient(rows = []) {
  const state = { rows: [...rows], offline: false, error: null, failDeletes: false, gate: null, calls: 0, log: [], tables: new Set() };
  const match = (filters) => (row) => Object.entries(filters).every(([key, value]) => row[key] === value);
  const failure = () => (state.error ? { error: state.error } : state.offline ? { error: new Error("Offline") } : null);
  state.client = {
    from(table) {
      state.tables.add(table);
      return {
        select() {
          return { async eq(_column, id) {
            const failed = failure();
            if (failed) return failed;
            return { data: state.rows.filter((row) => row.user_id === id).map(({ kind, item_id }) => ({ kind, item_id })) };
          } };
        },
        async upsert(row) {
          state.calls += 1;
          if (state.gate) await state.gate("upsert", row);
          const failed = failure();
          if (failed) return failed;
          state.log.push(`upsert ${row.kind}:${row.item_id}`);
          if (!state.rows.some(match(row))) state.rows.push(row);
          return {};
        },
        delete() {
          const filters = {};
          const chain = {
            eq(column, value) {
              filters[column] = value;
              return Object.keys(filters).length === 3 ? chain.run() : chain;
            },
            async run() {
              state.calls += 1;
              if (state.gate) await state.gate("delete", filters);
              const failed = failure();
              if (failed) return failed;
              if (state.failDeletes) return { error: new Error("Delete failed") };
              state.log.push(`delete ${filters.kind}:${filters.item_id}`);
              state.rows = state.rows.filter((row) => !match(filters)(row));
              return {};
            }
          };
          return chain;
        }
      };
    }
  };
  return state;
}

const user = { id: "user-a" };
const problem = "vr-syn-l01";
const other = "ma-na-u10";
const attemptRow = (id, choice, userId = user.id) => ({ user_id: userId, kind: "attempt", item_id: `${id}:${choice}` });
const entries = (server) => server.rows.map((row) => `${row.kind}:${row.item_id}`).sort();
const databaseError = (code) => Object.assign(new Error(`Database error ${code}`), { code });
const cachedPending = (storage, userId = user.id) => JSON.parse(storage.getItem(`isee-mastery-cache:${userId}`)).pending;

test("first sign-in imports browser mastery and answers, then loads server data on other devices", async () => {
  const server = fakeClient();
  let latest;
  const first = new CloudMastery({
    client: server.client, storage: memoryStorage(),
    readLocal: () => ({ concept: ["fractions-decimals"], glossary: ["median"], review: [other], attempt: [`${problem}:2`] }),
    onChange: (sets) => { latest = sets; }
  });
  await first.activate(user);
  assert.equal(first.pendingCount, 0);
  assert.deepEqual([...server.tables], ["isee_user_mastery"]);
  assert.deepEqual(entries(server), [`attempt:${problem}:2`, "concept:fractions-decimals", "glossary:median", `review:${other}`]);

  let synced;
  const second = new CloudMastery({
    client: server.client, storage: memoryStorage(),
    readLocal: () => ({ concept: ["synonyms"], glossary: [], review: [], attempt: [] }),
    onChange: (sets) => { synced = sets; }
  });
  await second.activate(user);
  assert.deepEqual([...synced.concept], ["fractions-decimals"]);
  assert.deepEqual([...synced.glossary], ["median"]);
  assert.deepEqual([...synced.review], [other]);
  assert.deepEqual([...synced.attempt], [`${problem}:2`]);
  await second.set("glossary", "median", false);
  await second.set("concept", "synonyms", true);
  assert.deepEqual(entries(server), [`attempt:${problem}:2`, "concept:fractions-decimals", "concept:synonyms", `review:${other}`]);
  assert.ok(latest.concept.has("fractions-decimals"));
});

test("the first upload keeps one valid answer per problem", async () => {
  const server = fakeClient();
  const mastery = new CloudMastery({
    client: server.client, storage: memoryStorage(), onChange() {},
    readLocal: () => ({ attempt: [`${problem}:3`, `${problem}:1`, `${other}:9`, "broken"] })
  });
  await mastery.activate(user);
  assert.deepEqual(entries(server), [`attempt:${problem}:1`]);
});

test("offline changes stay queued in the browser and sync when retried", async () => {
  const server = fakeClient([{ user_id: "user-a", kind: "concept", item_id: "fractions-decimals" }]);
  const storage = memoryStorage();
  let latest;
  const mastery = new CloudMastery({ client: server.client, storage, onChange: (sets) => { latest = sets; } });
  await mastery.activate(user);
  server.offline = true;
  await mastery.set("concept", "fractions-decimals", false);
  await mastery.set("glossary", "median", true);
  assert.equal(mastery.pendingCount, 2);
  assert.equal(latest.concept.has("fractions-decimals"), false);
  assert.ok(latest.glossary.has("median"));
  assert.deepEqual(cachedPending(storage), { "concept:fractions-decimals": false, "glossary:median": true });

  const reloaded = new CloudMastery({ client: server.client, storage, onChange: (sets) => { latest = sets; } });
  await reloaded.activate(user);
  assert.equal(reloaded.pendingCount, 2);
  assert.ok(latest.glossary.has("median"));
  server.offline = false;
  await reloaded.flush();
  assert.equal(reloaded.pendingCount, 0);
  assert.deepEqual(entries(server), ["glossary:median"]);
});

test("signing out clears in-memory mastery and ignores edits", async () => {
  const server = fakeClient();
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
  await mastery.activate(user);
  await mastery.activate(null);
  const calls = server.calls;
  await mastery.set("concept", "fractions-decimals", true);
  await mastery.setAttempt(problem, 1);
  assert.equal(server.calls, calls);
  assert.equal(mastery.pendingCount, 0);
});

test("review collection queues offline changes, reloads across devices, and isolates accounts", async () => {
  const key = problem;
  const server = fakeClient();
  const storage = memoryStorage();
  let latest;
  const sync = new CloudMastery({
    client: server.client, storage, onChange: (sets) => { latest = sets; }
  });

  await sync.activate(user);
  server.offline = true;
  await sync.set("review", key, true);
  assert.ok(latest.review.has(key));
  assert.equal(sync.pendingCount, 1);
  const reloaded = new CloudMastery({ client: server.client, storage, onChange: (sets) => { latest = sets; } });
  await reloaded.activate(user);
  assert.ok(latest.review.has(key));
  server.offline = false;
  await reloaded.flush();
  assert.equal(reloaded.pendingCount, 0);
  await reloaded.activate({ id: "user-b" });
  assert.equal(latest.review.size, 0);
  await reloaded.set("review", other, true);
  await reloaded.activate(user);
  assert.deepEqual([...latest.review], [key]);
  await reloaded.set("review", key, false);
  assert.equal(latest.review.size, 0);
  assert.deepEqual(server.rows, [{ user_id: "user-b", kind: "review", item_id: other }]);
});

test("review edits during an in-flight save automatically flush the latest choice", async () => {
  const server = fakeClient();
  let release;
  server.gate = async () => {
    server.gate = null;
    await new Promise((resolve) => { release = resolve; });
  };
  const sync = new CloudMastery({ client: server.client, storage: memoryStorage() });
  await sync.activate(user);
  const saved = sync.set("review", problem, true);
  const removed = sync.set("review", problem, false);
  release();
  await Promise.all([saved, removed]);
  assert.equal(sync.pendingCount, 0);
  assert.deepEqual(server.rows, []);
  assert.equal(sync.snapshot().review.size, 0);
});

test("retry recovers an initial mastery load failure even without queued edits", async () => {
  const server = fakeClient([{ user_id: user.id, kind: "concept", item_id: "fractions-decimals" }]);
  server.offline = true;
  const sync = new CloudMastery({ client: server.client, storage: memoryStorage() });
  await sync.activate(user);
  assert.equal(sync.available, false);
  assert.equal(sync.pendingCount, 0);
  server.offline = false;
  await sync.flush();
  assert.equal(sync.available, true);
  assert.deepEqual([...sync.snapshot().concept], ["fractions-decimals"]);
});

test("attemptsFromSet maps items to choices, ignores malformed ones, and picks the lowest of several", () => {
  assert.deepEqual(attemptsFromSet(new Set([`${problem}:2`, `${other}:0`])), { [problem]: 2, [other]: 0 });
  assert.deepEqual(attemptsFromSet(new Set()), {});
  assert.deepEqual(attemptsFromSet(undefined), {});
  assert.deepEqual(attemptsFromSet([`${problem}:3`, `${problem}:1`, `${problem}:2`]), { [problem]: 1 });
  const malformed = ["", ":", "a-1", "a-1:", ":2", "a-1:4", "a-1:-1", "a-1:1.5", "a-1:x", "a-1:01", "a-1:2:3", "a-b:c:1", "a-1: 2", 7, null];
  assert.deepEqual(attemptsFromSet(new Set(malformed)), {});
  assert.deepEqual(attemptsFromSet(new Set([...malformed, "ok-1:3"])), { "ok-1": 3 });
  const odd = attemptsFromSet(new Set(["__proto__:1", "constructor:2"]));
  assert.equal(Object.getPrototypeOf(odd), Object.prototype);
  assert.deepEqual(Object.keys(odd).sort(), ["__proto__", "constructor"]);
});

test("setAttempt replaces the previous choice and leaves other problems alone", async () => {
  const server = fakeClient([attemptRow(problem, 1), attemptRow(other, 3)]);
  let latest;
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange: (sets) => { latest = sets; } });
  await mastery.activate(user);
  await mastery.setAttempt(problem, 2);
  assert.deepEqual(attemptsFromSet(latest.attempt), { [problem]: 2, [other]: 3 });
  assert.deepEqual(entries(server), [`attempt:${other}:3`, `attempt:${problem}:2`]);
  assert.equal(mastery.pendingCount, 0);
  assert.deepEqual(server.log, [`delete attempt:${problem}:1`, `upsert attempt:${problem}:2`]);
});

test("setAttempt with null removes every stored choice for the problem", async () => {
  const server = fakeClient([attemptRow(problem, 1), attemptRow(problem, 3), attemptRow(other, 0)]);
  let latest;
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange: (sets) => { latest = sets; } });
  await mastery.activate(user);
  await mastery.setAttempt(problem, null);
  assert.deepEqual(attemptsFromSet(latest.attempt), { [other]: 0 });
  assert.deepEqual(entries(server), [`attempt:${other}:0`]);
  await mastery.setAttempt(other, null);
  assert.deepEqual(server.rows, []);
  assert.equal(mastery.pendingCount, 0);
});

test("setAttempt can be called repeatedly without awaiting", async () => {
  const server = fakeClient([attemptRow(problem, 1)]);
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
  await mastery.activate(user);
  const calls = [
    mastery.setAttempt(problem, 0),
    mastery.setAttempt(problem, 2),
    mastery.setAttempt(other, 1),
    mastery.setAttempt(problem, null),
    mastery.setAttempt(problem, 3)
  ];
  assert.deepEqual(attemptsFromSet(mastery.snapshot().attempt), { [problem]: 3, [other]: 1 });
  await Promise.all(calls);
  assert.equal(mastery.pendingCount, 0);
  assert.deepEqual(entries(server), [`attempt:${other}:1`, `attempt:${problem}:3`]);
});

test("attempt changes made while a save is in flight end with the latest choice", async () => {
  for (const finalChoice of [null, 0]) {
    const server = fakeClient();
    let release;
    server.gate = async () => {
      server.gate = null;
      await new Promise((resolve) => { release = resolve; });
    };
    const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
    await mastery.activate(user);
    const calls = [mastery.setAttempt(problem, 1), mastery.setAttempt(problem, 2), mastery.setAttempt(problem, finalChoice)];
    release();
    await Promise.all(calls);
    assert.equal(mastery.pendingCount, 0);
    assert.deepEqual(entries(server), finalChoice === null ? [] : [`attempt:${problem}:0`]);
    assert.deepEqual(attemptsFromSet(mastery.snapshot().attempt), finalChoice === null ? {} : { [problem]: 0 });
  }
});

test("queued attempt changes persist per account and merge with server rows in the snapshot", async () => {
  const server = fakeClient([attemptRow(problem, 1), attemptRow(other, 3), attemptRow("vr-syn-l02", 0)]);
  const storage = memoryStorage();
  const mastery = new CloudMastery({ client: server.client, storage, onChange() {} });
  await mastery.activate(user);
  server.offline = true;
  await mastery.setAttempt(problem, 2);
  await mastery.setAttempt(other, null);
  assert.deepEqual(cachedPending(storage), {
    [`attempt:${problem}:1`]: false, [`attempt:${problem}:2`]: true, [`attempt:${other}:3`]: false
  });
  assert.equal(storage.getItem("isee-mastery-cache:user-b"), null);
  assert.deepEqual(attemptsFromSet(mastery.snapshot().attempt), { [problem]: 2, "vr-syn-l02": 0 });
  assert.equal(entries(server).length, 3);

  const reloaded = new CloudMastery({ client: server.client, storage, onChange() {} });
  await reloaded.activate(user);
  assert.equal(reloaded.pendingCount, 3);
  server.offline = false;
  await reloaded.flush();
  assert.equal(reloaded.pendingCount, 0);
  assert.deepEqual(entries(server), [`attempt:${problem}:2`, "attempt:vr-syn-l02:0"]);
  assert.deepEqual(attemptsFromSet(reloaded.snapshot().attempt), { [problem]: 2, "vr-syn-l02": 0 });
});

test("a failed removal never leaves two answers for a problem on the server", async () => {
  const server = fakeClient([attemptRow(problem, 1)]);
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
  await mastery.activate(user);
  server.failDeletes = true;
  await mastery.setAttempt(problem, 2);
  assert.deepEqual(entries(server), [`attempt:${problem}:1`]);
  assert.deepEqual(attemptsFromSet(mastery.snapshot().attempt), { [problem]: 2 });
  assert.equal(mastery.pendingCount, 2);
  server.failDeletes = false;
  await mastery.flush();
  assert.deepEqual(entries(server), [`attempt:${problem}:2`]);
  assert.equal(mastery.pendingCount, 0);
});

test("queued removals are sent before additions, whatever order they were queued in", async () => {
  const server = fakeClient([attemptRow(problem, 1)]);
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
  await mastery.activate(user);
  server.offline = true;
  await mastery.set("attempt", `${problem}:3`, true);
  await mastery.set("attempt", `${problem}:1`, false);
  server.offline = false;
  await mastery.flush();
  assert.deepEqual(server.log, [`delete attempt:${problem}:1`, `upsert attempt:${problem}:3`]);
});

test("setAttempt rejects values that could break the one-answer-per-problem rule", async () => {
  const server = fakeClient();
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
  await mastery.activate(user);
  for (const [id, choice] of [["", 1], ["a:b", 1], [null, 1], [problem, 4], [problem, -1], [problem, 1.5], [problem, "1"], [problem, undefined]]) {
    await assert.rejects(() => mastery.setAttempt(id, choice), /Invalid attempt/);
  }
  assert.equal(mastery.pendingCount, 0);
  assert.equal(server.calls, 0);
});

for (const code of ["PGRST205", "PGRST202", "42P01", "42883"]) {
  test(`a missing mastery table (${code}) sets setupNeeded and reports the error code`, async () => {
    const server = fakeClient();
    server.error = databaseError(code);
    const errors = [];
    const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {}, onError: (error) => errors.push(error) });
    assert.equal(mastery.setupNeeded, false);
    await mastery.activate(user);
    assert.equal(mastery.setupNeeded, true);
    assert.equal(mastery.available, false);
    assert.equal(errors.at(-1).code, code);
    assert.equal(isSetupError(errors.at(-1)), true);
    await mastery.activate(null);
    assert.equal(mastery.setupNeeded, false);
  });
}

test("other failures do not ask for setup", async () => {
  for (const error of [new Error("Offline"), databaseError("PGRST301"), databaseError("23514")]) {
    const server = fakeClient();
    server.error = error;
    const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {}, onError() {} });
    await mastery.activate(user);
    assert.equal(mastery.setupNeeded, false);
    assert.equal(isSetupError(error), false);
  }
  assert.equal(isSetupError(null), false);
});

test("changes made before the tables exist stay queued per account and upload afterwards", async () => {
  const server = fakeClient();
  server.error = databaseError("PGRST205");
  const storage = memoryStorage();
  let latest;
  const mastery = new CloudMastery({ client: server.client, storage, onChange: (sets) => { latest = sets; }, onError() {} });
  await mastery.activate(user);
  await mastery.set("concept", "fractions-decimals", true);
  await mastery.setAttempt(problem, 1);
  assert.equal(mastery.setupNeeded, true);
  assert.ok(latest.concept.has("fractions-decimals"));
  assert.deepEqual(attemptsFromSet(latest.attempt), { [problem]: 1 });
  assert.deepEqual(cachedPending(storage), { "concept:fractions-decimals": true, [`attempt:${problem}:1`]: true });
  assert.equal(storage.getItem("isee-mastery-cache:user-b"), null);

  const reloaded = new CloudMastery({ client: server.client, storage, onChange() {}, onError() {} });
  await reloaded.activate(user);
  assert.equal(reloaded.setupNeeded, true);
  assert.equal(reloaded.pendingCount, 2);
  assert.equal(server.rows.length, 0);

  server.error = null;
  await reloaded.flush();
  assert.equal(reloaded.setupNeeded, false);
  assert.equal(reloaded.pendingCount, 0);
  assert.deepEqual(entries(server), [`attempt:${problem}:1`, "concept:fractions-decimals"]);
});

test("a table that disappears during a flush asks for setup and recovers after the next successful write", async () => {
  const server = fakeClient();
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {}, onError() {} });
  await mastery.activate(user);
  server.error = databaseError("42P01");
  await mastery.set("review", problem, true);
  assert.equal(mastery.setupNeeded, true);
  assert.equal(mastery.pendingCount, 1);
  server.error = null;
  await mastery.flush();
  assert.equal(mastery.setupNeeded, false);
  assert.equal(mastery.pendingCount, 0);
  assert.deepEqual(entries(server), [`review:${problem}`]);
});

test("browser data is still uploaded after the tables are created, without undoing newer edits", async () => {
  const server = fakeClient();
  server.error = databaseError("PGRST205");
  const mastery = new CloudMastery({
    client: server.client, storage: memoryStorage(), onChange() {}, onError() {},
    readLocal: () => ({ concept: ["fractions-decimals"], glossary: [], review: [other], attempt: [`${problem}:1`] })
  });
  await mastery.activate(user);
  await mastery.set("review", other, false);
  await mastery.setAttempt(problem, 2);
  server.error = null;
  await mastery.flush();
  assert.deepEqual(entries(server), [`attempt:${problem}:2`, "concept:fractions-decimals"]);
});

test("the migration accepts every kind and item id the client syncs", () => {
  const sql = readFileSync(new URL("../supabase/isee-schema.sql", import.meta.url), "utf8").replace(/\s+/g, " ");
  const table = /create table if not exists public\.isee_user_mastery \(.*?kind in \(([^)]*)\).*?char_length\(item_id\) between (\d+) and (\d+)/.exec(sql);
  assert.ok(table, "the mastery table is defined");
  assert.deepEqual(table[1].match(/[a-z]+/g).sort(), ["attempt", "concept", "glossary", "review"]);
  const items = [
    ...allConcepts().map((concept) => concept.id),
    ...GLOSSARY.map((term) => term.en),
    ...PROBLEMS.flatMap((item) => [item.id, `${item.id}:3`])
  ];
  const rejected = items.filter((item) => item.length < Number(table[2]) || item.length > Number(table[3]));
  assert.deepEqual(rejected, [], "every item id must fit the item_id check");
});
