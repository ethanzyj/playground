import assert from "node:assert/strict";
import { test } from "node:test";
import { CloudMastery } from "../assets/cloud-mastery.mjs";

function memoryStorage() {
  const data = new Map();
  return { getItem: (key) => data.get(key) ?? null, setItem: (key, value) => data.set(key, String(value)) };
}

function fakeClient(rows = []) {
  const state = { rows: [...rows], offline: false, calls: 0 };
  const match = (filters) => (row) => Object.entries(filters).every(([key, value]) => row[key] === value);
  state.client = {
    from() {
      const fail = () => ({ error: new Error("Offline") });
      return {
        select() {
          return { async eq(_column, id) {
            if (state.offline) return fail();
            return { data: state.rows.filter((row) => row.user_id === id).map(({ kind, item_id }) => ({ kind, item_id })) };
          } };
        },
        async upsert(row) {
          state.calls += 1;
          if (state.offline) return fail();
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
              if (state.offline) return fail();
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

test("first sign-in imports browser mastery, then loads server mastery on other devices", async () => {
  const server = fakeClient();
  let latest;
  const first = new CloudMastery({
    client: server.client, storage: memoryStorage(),
    readLocal: () => ({ concept: ["polynomials"], glossary: ["Median"] }),
    onChange: (sets) => { latest = sets; }
  });
  await first.activate(user);
  assert.equal(first.pendingCount, 0);
  assert.deepEqual(server.rows.map((row) => `${row.kind}:${row.item_id}`).sort(), ["concept:polynomials", "glossary:Median"]);

  let other;
  const second = new CloudMastery({
    client: server.client, storage: memoryStorage(), readLocal: () => ({ concept: ["sequences"], glossary: [] }),
    onChange: (sets) => { other = sets; }
  });
  await second.activate(user);
  assert.deepEqual([...other.concept], ["polynomials"]);
  assert.deepEqual([...other.glossary], ["Median"]);
  await second.set("glossary", "Median", false);
  await second.set("concept", "functions", true);
  assert.deepEqual(server.rows.map((row) => `${row.kind}:${row.item_id}`).sort(), ["concept:functions", "concept:polynomials"]);
  assert.ok(latest.concept.has("polynomials"));
});

test("offline changes stay queued in the browser and sync when retried", async () => {
  const server = fakeClient([{ user_id: "user-a", kind: "concept", item_id: "polynomials" }]);
  const storage = memoryStorage();
  let latest;
  const mastery = new CloudMastery({ client: server.client, storage, onChange: (sets) => { latest = sets; } });
  await mastery.activate(user);
  server.offline = true;
  await mastery.set("concept", "polynomials", false);
  await mastery.set("glossary", "Median", true);
  assert.equal(mastery.pendingCount, 2);
  assert.equal(latest.concept.has("polynomials"), false);
  assert.ok(latest.glossary.has("Median"));

  const reloaded = new CloudMastery({ client: server.client, storage, onChange: (sets) => { latest = sets; } });
  await reloaded.activate(user);
  assert.equal(reloaded.pendingCount, 2);
  assert.ok(latest.glossary.has("Median"));
  server.offline = false;
  await reloaded.flush();
  assert.equal(reloaded.pendingCount, 0);
  assert.deepEqual(server.rows.map((row) => `${row.kind}:${row.item_id}`), ["glossary:Median"]);
});

test("signing out clears in-memory mastery and ignores edits", async () => {
  const server = fakeClient();
  const mastery = new CloudMastery({ client: server.client, storage: memoryStorage(), onChange() {} });
  await mastery.activate(user);
  await mastery.activate(null);
  const calls = server.calls;
  await mastery.set("concept", "polynomials", true);
  assert.equal(server.calls, calls);
  assert.equal(mastery.pendingCount, 0);
});
