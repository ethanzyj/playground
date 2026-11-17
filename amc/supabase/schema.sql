begin;

create table if not exists public.problem_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  problem_key text not null check (
    problem_key ~ '^(201[6-9]|202[0-5])-AMC10[AB]-([1-9]|1[0-9]|2[0-5])$'
  ),
  status text not null check (
    status in ('needUnderstanding', 'needStartingPoint', 'haveApproach')
  ),
  version bigint not null default 1 check (version > 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, problem_key)
);

alter table public.problem_progress enable row level security;
drop policy if exists "Read own progress" on public.problem_progress;
create policy "Read own progress" on public.problem_progress
  for select to authenticated using ((select auth.uid()) = user_id);

-- Writes go through the version-checked RPC, never directly from the browser.
revoke all on public.problem_progress from anon, authenticated;
grant select on public.problem_progress to authenticated;

create or replace function public.save_problem_progress(
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
  current_row public.problem_progress;
begin
  if owner_id is null or owner_id is distinct from p_expected_user then
    raise exception 'Authentication required' using errcode = '42501';
  end if;
  if p_expected_version is null or p_expected_version < 0
    or p_status is null or p_status not in ('needUnderstanding', 'needStartingPoint', 'haveApproach')
    or p_problem_key is null
    or p_problem_key !~ '^(201[6-9]|202[0-5])-AMC10[AB]-([1-9]|1[0-9]|2[0-5])$' then
    raise exception 'Invalid progress record' using errcode = '22023';
  end if;

  if p_expected_version = 0 then
    insert into public.problem_progress (user_id, problem_key, status)
    values (owner_id, p_problem_key, p_status)
    on conflict do nothing
    returning * into current_row;
    if found then
      return jsonb_build_object('saved', true, 'record', to_jsonb(current_row) - 'user_id');
    end if;
  end if;

  select * into current_row from public.problem_progress
    where user_id = owner_id and problem_key = p_problem_key for update;
  if not found then
    raise exception 'Record not found; refresh progress before saving' using errcode = 'P0002';
  end if;
  if current_row.version <> p_expected_version then
    return jsonb_build_object('saved', false, 'record', to_jsonb(current_row) - 'user_id');
  end if;

  update public.problem_progress set
    status = p_status, version = version + 1, updated_at = clock_timestamp()
    where user_id = owner_id and problem_key = p_problem_key
    returning * into current_row;
  return jsonb_build_object('saved', true, 'record', to_jsonb(current_row) - 'user_id');
end;
$$;

revoke all on function public.save_problem_progress(uuid, text, text, bigint) from public, anon;
grant execute on function public.save_problem_progress(uuid, text, text, bigint) to authenticated;

create table if not exists public.user_mastery (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kind text not null check (kind in ('concept', 'glossary', 'review')),
  item_id text not null check (char_length(item_id) between 1 and 120),
  updated_at timestamptz not null default now(),
  primary key (user_id, kind, item_id)
);

alter table public.user_mastery drop constraint if exists user_mastery_kind_check;
alter table public.user_mastery add constraint user_mastery_kind_check
  check (kind in ('concept', 'glossary', 'review'));
alter table public.user_mastery enable row level security;
drop policy if exists "Read own mastery" on public.user_mastery;
create policy "Read own mastery" on public.user_mastery
  for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Add own mastery" on public.user_mastery;
create policy "Add own mastery" on public.user_mastery
  for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Update own mastery" on public.user_mastery;
create policy "Update own mastery" on public.user_mastery
  for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Remove own mastery" on public.user_mastery;
create policy "Remove own mastery" on public.user_mastery
  for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.user_mastery from anon, authenticated;
grant select, insert, update, delete on public.user_mastery to authenticated;

commit;
