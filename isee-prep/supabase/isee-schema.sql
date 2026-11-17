-- ISEE Prep: one-time Supabase setup for account progress sync.
--
-- How to run: Supabase dashboard -> SQL Editor -> New query -> paste this whole file -> Run.
-- It is safe to run again: every statement is idempotent (create ... if not exists,
-- create or replace, drop ... if exists) and no existing data is deleted or changed.
-- Until it has been run, the site shows "Cloud sync tables are not set up for ISEE yet"
-- and keeps each signed-in student's work in their browser, then uploads it after the first run.
--
-- It creates these objects in the public schema. Row-level security limits every user to
-- their own rows.
--   isee_problem_progress            One row per user and practice problem: the self-assessment
--                                    status (needUnderstanding / needStartingPoint / haveApproach)
--                                    and a version number that detects edits made on another device.
--   save_isee_problem_progress(...)  The version-checked function the browser calls to save a status.
--                                    Browsers can read the table but never write it directly.
--   isee_user_mastery                Mastered concepts and glossary terms, review bookmarks, and answer
--                                    attempts (kind 'attempt', item "<problem id>:<choice 0-3>", at most
--                                    one per problem).
--
-- It uses the same Supabase project and sign-in accounts as the AMC 10 site and does not touch
-- that site's tables.
begin;

create table if not exists public.isee_problem_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  problem_key text not null check (
    problem_key ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(problem_key) <= 40
  ),
  status text not null check (
    status in ('needUnderstanding', 'needStartingPoint', 'haveApproach')
  ),
  version bigint not null default 1 check (version > 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, problem_key)
);

alter table public.isee_problem_progress enable row level security;
drop policy if exists "Read own progress" on public.isee_problem_progress;
create policy "Read own progress" on public.isee_problem_progress
  for select to authenticated using ((select auth.uid()) = user_id);

-- Writes go through the version-checked RPC, never directly from the browser.
revoke all on public.isee_problem_progress from anon, authenticated;
grant select on public.isee_problem_progress to authenticated;

create or replace function public.save_isee_problem_progress(
  p_expected_user uuid,
  p_problem_key text,
  p_status text,
  p_expected_version bigint
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  owner_id uuid := auth.uid();
  current_row public.isee_problem_progress;
begin
  if owner_id is null or owner_id is distinct from p_expected_user then
    raise exception 'Authentication required' using errcode = '42501';
  end if;
  if p_expected_version is null or p_expected_version < 0
    or p_status is null or p_status not in ('needUnderstanding', 'needStartingPoint', 'haveApproach')
    or p_problem_key is null
    or p_problem_key !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    or char_length(p_problem_key) > 40 then
    raise exception 'Invalid progress record' using errcode = '22023';
  end if;

  if p_expected_version = 0 then
    insert into public.isee_problem_progress (user_id, problem_key, status)
    values (owner_id, p_problem_key, p_status)
    on conflict do nothing
    returning * into current_row;
    if found then
      return jsonb_build_object('saved', true, 'record', to_jsonb(current_row) - 'user_id');
    end if;
  end if;

  select * into current_row from public.isee_problem_progress
    where user_id = owner_id and problem_key = p_problem_key for update;
  if not found then
    raise exception 'Record not found; refresh progress before saving' using errcode = 'P0002';
  end if;
  if current_row.version <> p_expected_version then
    return jsonb_build_object('saved', false, 'record', to_jsonb(current_row) - 'user_id');
  end if;

  update public.isee_problem_progress set
    status = p_status, version = version + 1, updated_at = clock_timestamp()
    where user_id = owner_id and problem_key = p_problem_key
    returning * into current_row;
  return jsonb_build_object('saved', true, 'record', to_jsonb(current_row) - 'user_id');
end;
$$;

revoke all on function public.save_isee_problem_progress(uuid, text, text, bigint) from public, anon;
grant execute on function public.save_isee_problem_progress(uuid, text, text, bigint) to authenticated;

create table if not exists public.isee_user_mastery (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kind text not null check (kind in ('concept', 'glossary', 'review', 'attempt')),
  item_id text not null check (char_length(item_id) between 1 and 120),
  updated_at timestamptz not null default now(),
  primary key (user_id, kind, item_id)
);

alter table public.isee_user_mastery drop constraint if exists isee_user_mastery_kind_check;
alter table public.isee_user_mastery add constraint isee_user_mastery_kind_check
  check (kind in ('concept', 'glossary', 'review', 'attempt'));
alter table public.isee_user_mastery enable row level security;
drop policy if exists "Read own mastery" on public.isee_user_mastery;
create policy "Read own mastery" on public.isee_user_mastery
  for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Add own mastery" on public.isee_user_mastery;
create policy "Add own mastery" on public.isee_user_mastery
  for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Update own mastery" on public.isee_user_mastery;
create policy "Update own mastery" on public.isee_user_mastery
  for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Remove own mastery" on public.isee_user_mastery;
create policy "Remove own mastery" on public.isee_user_mastery
  for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.isee_user_mastery from anon, authenticated;
grant select, insert, update, delete on public.isee_user_mastery to authenticated;

-- Ask the API to pick up the new tables and function right away.
notify pgrst, 'reload schema';

commit;
