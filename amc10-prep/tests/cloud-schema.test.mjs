import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { PGlite } from "@electric-sql/pglite";

test("PostgreSQL enforces owner isolation, version checks, and RPC-only writes", async () => {
  const db = new PGlite();
  const a = "11111111-1111-4111-8111-111111111111";
  const b = "22222222-2222-4222-8222-222222222222";
  try {
    await db.exec(`
      create role anon;
      create role authenticated;
      create schema auth;
      create table auth.users (id uuid primary key);
      create function auth.uid() returns uuid language sql stable as
        $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
      grant usage on schema auth to authenticated, anon;
      grant execute on function auth.uid() to authenticated, anon;
      insert into auth.users values ('${a}'), ('${b}');
    `);
    const schema = readFileSync(new URL("../supabase/schema.sql", import.meta.url), "utf8");
    await db.exec(schema);
    await db.exec(schema);
    const asUser = async (id) => {
      await db.exec("reset role");
      await db.query("select set_config('request.jwt.claim.sub', $1, false)", [id]);
      await db.exec("set role authenticated");
    };
    const save = async (userId, status, version) => {
      const result = await db.query("select public.save_problem_progress($1, $2, $3, $4) as result",
        [userId, "2025-AMC10A-1", status, version]);
      return result.rows[0].result;
    };
    await asUser(a);
    assert.equal((await save(a, "needUnderstanding", 0)).saved, true);
    const stale = await save(a, "haveApproach", 0);
    assert.equal(stale.saved, false);
    assert.equal(stale.record.status, "needUnderstanding");
    assert.equal((await save(a, "haveApproach", 1)).record.version, 2);
    await assert.rejects(() => save(b, "haveApproach", 0), /Authentication required/);
    await assert.rejects(() => save(a, "invalid", 2), /Invalid progress/);
    await assert.rejects(() => db.query("select public.save_problem_progress($1, '2025-AMC10A-26', 'haveApproach', 0)", [a]), /Invalid progress/);
    await assert.rejects(() => db.query("update public.problem_progress set status='needUnderstanding'"), /permission denied/);
    await assert.rejects(() => db.query("delete from public.problem_progress"), /permission denied/);
    await assert.rejects(() => db.query(
      "insert into public.problem_progress(user_id,problem_key,status) values ($1,'2025-AMC10B-1','haveApproach')", [a]
    ), /permission denied/);
    await asUser(b);
    assert.equal((await db.query("select * from public.problem_progress")).rows.length, 0);
    assert.equal((await save(b, "needStartingPoint", 0)).saved, true);
    assert.equal((await db.query("select * from public.problem_progress")).rows.length, 1);
    await asUser(a);
    const own = (await db.query("select * from public.problem_progress")).rows;
    assert.equal(own.length, 1);
    assert.equal(own[0].status, "haveApproach");
    await db.query("insert into public.user_mastery(kind,item_id) values ('concept','polynomials'),('glossary','Median')");
    await assert.rejects(() => db.query(
      "insert into public.user_mastery(user_id,kind,item_id) values ($1,'concept','sequences')", [b]
    ), /row-level security/);
    await assert.rejects(() => db.query("insert into public.user_mastery(kind,item_id) values ('topic','x')"), /check constraint/);
    await asUser(b);
    assert.equal((await db.query("select * from public.user_mastery")).rows.length, 0);
    await db.query("delete from public.user_mastery");
    await asUser(a);
    assert.equal((await db.query("select * from public.user_mastery")).rows.length, 2);
    await db.query("delete from public.user_mastery where kind='glossary'");
    assert.deepEqual((await db.query("select kind,item_id from public.user_mastery")).rows, [{ kind: "concept", item_id: "polynomials" }]);
    await db.exec("reset role; set role anon;");
    await assert.rejects(() => db.query("select * from public.problem_progress"), /permission denied/);
    await assert.rejects(() => save(a, "haveApproach", 0), /permission denied/);
    await assert.rejects(() => db.query("select * from public.user_mastery"), /permission denied/);
    await db.exec("reset role;");
    await db.query("select set_config('request.jwt.claim.sub', '', false)");
    await assert.rejects(() => save(a, "haveApproach", 0), /Authentication required/);
  } finally {
    await db.close();
  }
});
