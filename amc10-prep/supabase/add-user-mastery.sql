-- Run once in the Supabase SQL editor to enable syncing Study Guide and Glossary mastery.
begin;
create table if not exists public.user_mastery (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kind text not null check (kind in ('concept', 'glossary')),
  item_id text not null check (char_length(item_id) between 1 and 120),
  updated_at timestamptz not null default now(),
  primary key (user_id, kind, item_id)
);

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
