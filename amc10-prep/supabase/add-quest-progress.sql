-- Run as administrator after add-quest-answers.sql.
begin;
create table if not exists public.user_quest_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  mission_id text not null,
  progress jsonb not null,
  primary key (user_id, mission_id)
);
alter table public.user_quest_progress enable row level security;
drop policy if exists "Read own quest progress" on public.user_quest_progress;
create policy "Read own quest progress" on public.user_quest_progress
  for select to authenticated using ((select auth.uid()) = user_id);
revoke all on public.user_quest_progress from public, anon, authenticated;
grant select on public.user_quest_progress to authenticated;

create or replace function public.save_quest_progress(
  p_expected_user uuid, p_mission_id text, p_progress jsonb
) returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  previous jsonb;
  merged jsonb;
  field text;
  items jsonb;
begin
  if auth.uid() is null or auth.uid() is distinct from p_expected_user then
    raise exception 'Authentication required' using errcode = '42501';
  end if;
  if p_mission_id is null or p_mission_id !~ '^[a-z0-9-]{1,120}$'
    or p_progress is null or jsonb_typeof(p_progress) <> 'object'
    or jsonb_typeof(p_progress->'learned') is distinct from 'boolean'
    or jsonb_typeof(p_progress->'formulas') is distinct from 'array'
    or jsonb_typeof(p_progress->'problems') is distinct from 'array'
    or jsonb_typeof(p_progress->'terms') is distinct from 'array'
    or octet_length(p_progress::text) > 50000 then
    raise exception 'Invalid quest progress' using errcode = '22023';
  end if;
  -- Lock even the first insert so concurrent sessions cannot overwrite work.
  insert into public.user_quest_progress(user_id,mission_id,progress)
    values(p_expected_user,p_mission_id,'{"learned":false,"formulas":[],"problems":[],"terms":[]}')
    on conflict do nothing;
  select progress into previous from public.user_quest_progress
    where user_id=p_expected_user and mission_id=p_mission_id for update;
  merged = jsonb_build_object('learned',
    (previous->>'learned')::boolean or (p_progress->>'learned')::boolean);
  foreach field in array array['formulas','problems','terms'] loop
    if exists (
      select 1 from jsonb_array_elements(p_progress->field) entry
      where (field='formulas' and (jsonb_typeof(entry) <> 'number' or entry::text !~ '^[0-9]{1,3}$'))
        or (field='problems' and (jsonb_typeof(entry) <> 'string'
          or (entry #>> '{}') !~ '^(201[6-9]|202[0-5])-AMC10[AB]-([1-9]|1[0-9]|2[0-5])$'))
        or (field='terms' and (jsonb_typeof(entry) <> 'string'
          or length(entry #>> '{}') not between 1 and 120))
    ) then
      raise exception 'Invalid quest task' using errcode='22023';
    end if;
    select coalesce(jsonb_agg(value order by value), '[]'::jsonb) into items
      from (select distinct value from jsonb_array_elements(previous->field)
        union select distinct value from jsonb_array_elements(p_progress->field)) entries;
    merged = merged || jsonb_build_object(field,items);
  end loop;
  update public.user_quest_progress set progress=merged
    where user_id=p_expected_user and mission_id=p_mission_id;
  return jsonb_build_object('mission_id',p_mission_id,'progress',merged);
end;
$$;
revoke all on function public.save_quest_progress(uuid,text,jsonb) from public,anon,authenticated;
grant execute on function public.save_quest_progress(uuid,text,jsonb) to authenticated;
notify pgrst, 'reload schema';
commit;
