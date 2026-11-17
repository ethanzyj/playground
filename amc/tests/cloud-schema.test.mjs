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
    const masteryUpgrade = readFileSync(new URL("../supabase/add-user-mastery.sql", import.meta.url), "utf8");
    await db.exec("alter table public.user_mastery drop constraint user_mastery_kind_check; alter table public.user_mastery add constraint user_mastery_kind_check check (kind in ('concept', 'glossary'))");
    await db.exec(masteryUpgrade);
    await db.exec(masteryUpgrade);
    const questUpgrade = readFileSync(new URL("../supabase/add-quest-progress.sql", import.meta.url), "utf8");
    await db.exec(questUpgrade);
    await db.exec(questUpgrade);
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
    const questSave = async (id, progress) => (await db.query(
      "select public.save_quest_progress($1,'polynomials',$2::jsonb) as result", [id, JSON.stringify(progress)]
    )).rows[0].result;
    const questLesson = { learned: true, formulas: [], problems: [], terms: [] };
    await questSave(a, { ...questLesson, formulas: [0] });
    const mergedQuest = await questSave(a, { ...questLesson, formulas: [1] });
    assert.deepEqual(mergedQuest.progress.formulas, [0, 1]);
    assert.equal((await questSave(a, { ...questLesson, learned: false })).progress.learned, true);
    await assert.rejects(() => questSave(b, questLesson), /Authentication required/);
    await assert.rejects(() => questSave(a, { learned: true }), /Invalid quest progress/);
    await assert.rejects(() => questSave(a, { ...questLesson, formulas: ["invalid"] }), /Invalid quest task/);
    await assert.rejects(() => questSave(a, { ...questLesson, problems: ["2025-AMC10A-26"] }), /Invalid quest task/);
    await assert.rejects(() => questSave(a, { ...questLesson, terms: [null] }), /Invalid quest task/);
    await assert.rejects(() => db.query("update public.user_quest_progress set progress='{}'"), /permission denied/);
    await assert.rejects(() => db.query("delete from public.user_quest_progress"), /permission denied/);
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
    assert.equal((await db.query("select * from public.user_quest_progress")).rows.length, 0);
    assert.equal((await db.query("select * from public.problem_progress")).rows.length, 0);
    assert.equal((await save(b, "needStartingPoint", 0)).saved, true);
    assert.equal((await db.query("select * from public.problem_progress")).rows.length, 1);
    await asUser(a);
    const own = (await db.query("select * from public.problem_progress")).rows;
    assert.equal(own.length, 1);
    assert.equal(own[0].status, "haveApproach");
    await db.query("insert into public.user_mastery(kind,item_id) values ('concept','polynomials'),('glossary','Median')");
    await db.query("insert into public.user_mastery(kind,item_id) values ('review','2025-AMC10A-1')");
    await assert.rejects(() => db.query(
      "insert into public.user_mastery(user_id,kind,item_id) values ($1,'concept','sequences')", [b]
    ), /row-level security/);
    await assert.rejects(() => db.query("insert into public.user_mastery(kind,item_id) values ('topic','x')"), /check constraint/);
    await asUser(b);
    assert.equal((await db.query("select * from public.user_mastery")).rows.length, 0);
    await db.query("delete from public.user_mastery");
    await asUser(a);
    assert.equal((await db.query("select * from public.user_mastery")).rows.length, 3);
    await db.query("delete from public.user_mastery where kind='review'");
    await db.query("delete from public.user_mastery where kind='glossary'");
    assert.deepEqual((await db.query("select kind,item_id from public.user_mastery")).rows, [{ kind: "concept", item_id: "polynomials" }]);
    await db.exec("reset role; set role anon;");
    await assert.rejects(() => questSave(a, questLesson), /permission denied/);
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

test("quiz answers are seeded repeatably and graded only for authenticated users", async () => {
  const db = new PGlite();
  const user = "11111111-1111-4111-8111-111111111111";
  const other = "22222222-2222-4222-8222-222222222222";
  try {
    await db.exec(`
      create role anon;
      create role authenticated;
      create schema auth;
      create function auth.uid() returns uuid language sql stable as
        $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
    `);
    const migration = readFileSync(new URL("../supabase/add-quest-answers.sql", import.meta.url), "utf8");
    await db.exec(migration);
    await db.exec(migration);
    const key = JSON.parse(readFileSync(new URL("../assets/answer-key.json", import.meta.url)));
    const rows = (await db.query("select problem_key, answer, source_url from public.quiz_answers")).rows;
    assert.equal(rows.length, 500);
    for (const row of rows) {
      assert.equal(row.answer, key.answers[row.problem_key]);
      assert.match(row.source_url, /^https:\/\/live\.poshenloh\.com\/past-contests\/amc10\/\d{4}[AB]\/answers$/);
    }
    const grade = async (id, problem, answer) =>
      (await db.query("select public.check_quiz_answer($1,$2,$3) as result", [id, problem, answer])).rows[0].result;
    await db.query("select set_config('request.jwt.claim.sub', $1, false)", [user]);
    await db.exec("set role authenticated");
    assert.deepEqual(await grade(user, "2025-AMC10A-1", "E"), { problem_key: "2025-AMC10A-1", correct: true });
    assert.deepEqual(await grade(user, "2025-AMC10A-1", "A"), { problem_key: "2025-AMC10A-1", correct: false });
    await assert.rejects(() => grade(other, "2025-AMC10A-1", "E"), /Authentication required/);
    await assert.rejects(() => grade(null, "2025-AMC10A-1", "E"), /Authentication required/);
    for (const [problem, answer] of [["2025-AMC10A-26", "A"], ["2025-AMC10A-1", "X"], [null, "A"], ["2025-AMC10A-1", null]]) {
      await assert.rejects(() => grade(user, problem, answer), /Invalid quiz answer/);
    }
    await assert.rejects(() => db.query("select * from public.quiz_answers"), /permission denied/);
    await assert.rejects(() => db.query("update public.quiz_answers set answer = 'A'"), /permission denied/);
    await assert.rejects(() => db.query("delete from public.quiz_answers"), /permission denied/);
    await assert.rejects(() => db.query("insert into public.quiz_answers values ('2025-AMC10A-1','A','test')"), /permission denied/);
    await db.exec("reset role; set role anon");
    await assert.rejects(() => grade(user, "2025-AMC10A-1", "E"), /permission denied/);
    await assert.rejects(() => db.query("select * from public.quiz_answers"), /permission denied/);
    await db.exec("reset role");
    await db.query("select set_config('request.jwt.claim.sub', '', false)");
    await assert.rejects(() => grade(user, "2025-AMC10A-1", "E"), /Authentication required/);
    await db.query("select set_config('request.jwt.claim.sub', $1, false)", [user]);
    await db.exec("delete from public.quiz_answers where problem_key = '2025-AMC10A-1'");
    await assert.rejects(() => grade(user, "2025-AMC10A-1", "E"), /Answer key entry missing/);
  } finally {
    await db.close();
  }
});
