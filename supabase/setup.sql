-- Run once in the Supabase SQL editor for this project.
-- This repo doesn't use the Supabase CLI/migrations yet, so schema and
-- storage setup steps are tracked here instead.

-- ---------------------------------------------------------------------
-- recipe-images bucket
--
-- Saved recipes store a permanent copy of their thumbnail here, since
-- Edamam's own image URLs are pre-signed S3 links that expire.
-- ---------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('recipe-images', 'recipe-images', true)
on conflict (id) do nothing;

-- Users may only write into a folder named after their own user id
-- (the app uploads to `{user_id}/{recipe_id}.{ext}`).
create policy "Users can upload their own recipe images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'recipe-images'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Users can overwrite their own recipe images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'recipe-images'
  and (storage.foldername(name))[1] = auth.uid()::text
);

-- The bucket is public, but this policy documents intent explicitly.
create policy "Anyone can view recipe images"
on storage.objects for select
to public
using (bucket_id = 'recipe-images');


-- =====================================================================
-- MEAL PLANNING
--
-- Adds named meal plans, dated entries in per-plan meal slots, and the
-- sharing primitives behind both the read-only share link and the
-- subscribable .ics feed.
--
-- NOTE: the pre-existing `recipes` table was created directly in the
-- Supabase dashboard and its DDL was never captured here. Everything
-- below only *alters* it, and every statement is written to be safe to
-- re-run. If you regenerate this file from scratch later, dump the real
-- `recipes` definition in above this block so the schema stops living
-- only in the dashboard.
-- =====================================================================

-- ---------------------------------------------------------------------
-- `recipes` becomes the user's recipe library
--
-- Previously this table meant "starred recipes" (every row had
-- type = 'starred'). Planning a recipe now also needs a row here — so it
-- can reuse the permanent-image pipeline — without that recipe showing
-- up in the starred list. Starring becomes a flag on a library row
-- rather than the reason the row exists.
-- ---------------------------------------------------------------------

alter table recipes add column if not exists is_starred boolean not null default false;

-- Backfill: every row that exists today exists because it was starred.
update recipes set is_starred = true where type = 'starred' and is_starred = false;

-- The old save route inserted unconditionally, so starring the same
-- recipe twice left duplicate rows. Collapse them before the unique
-- index below can be created (keeps one row per user+recipe, preferring
-- a starred one so the backfill above isn't undone).
delete from recipes r
using recipes keep
where r.user_id = keep.user_id
  and r.data->'recipe'->>'url' = keep.data->'recipe'->>'url'
  and (keep.is_starred, keep.id) > (r.is_starred, r.id);

-- One library row per user per recipe. The recipe URL (not the Edamam
-- `uri`) is the identity used everywhere else in the app already.
--
-- Lifted out of the jsonb into a stored generated column rather than
-- indexed as an expression, because PostgREST's `on_conflict` can only
-- name real columns — without this, "save this recipe" can't be written
-- as a single upsert and needs a read-then-write round trip that races.
alter table recipes
  add column if not exists recipe_url text
  generated always as (data->'recipe'->>'url') stored;

do $$ begin
  alter table recipes add constraint recipes_user_recipe_url_key
    unique (user_id, recipe_url);
exception
  when duplicate_table then null;
  when duplicate_object then null;
end $$;

-- `recipes.type` is now vestigial — `is_starred` carries the meaning and
-- nothing reads `type` any more. Left in place so this migration stays
-- non-destructive; drop it yourself once you've confirmed the app works:
--
--   alter table recipes drop column type;

-- ---------------------------------------------------------------------
-- Plans and entries
-- ---------------------------------------------------------------------

create table if not exists meal_plans (
  id          uuid primary key default gen_random_uuid(),
  owner_id    uuid not null references auth.users(id) on delete cascade,
  name        text not null default 'My Meal Plan',
  -- The plan's meals, as an ordered array of
  -- {id, label, time} objects. Slots are per-plan data rather than a
  -- fixed enum so a plan can drop breakfast, keep three snacks, or name
  -- one "Meal prep" — `id` is the stable key meal_plan_entries points
  -- at, `label` is display text the owner can rename freely.
  --
  -- Times are local wall-clock. Calendar events are emitted as RFC 5545
  -- "floating" times (no timezone), so dinner at 18:00 is 6pm wherever
  -- the viewer happens to be — which is what you want for a meal, and
  -- avoids emitting VTIMEZONE blocks or tracking DST.
  slots       jsonb not null default
              '[{"id":"breakfast","label":"Breakfast","time":"08:00"},
                {"id":"lunch","label":"Lunch","time":"12:00"},
                {"id":"snack","label":"Snack","time":"15:00"},
                {"id":"dinner","label":"Dinner","time":"18:00"}]'::jsonb,
  -- null = link sharing off. Rotating this value revokes every existing
  -- share link and calendar subscription at once.
  share_token uuid unique,
  created_at  timestamptz not null default now()
);

create index if not exists meal_plans_owner_id_idx on meal_plans (owner_id);

create table if not exists meal_plan_entries (
  id        uuid primary key default gen_random_uuid(),
  plan_id   uuid not null references meal_plans(id) on delete cascade,
  recipe_id uuid not null references recipes(id) on delete cascade,
  date      date not null,
  -- References meal_plans.slots[].id. Deliberately plain text with no
  -- foreign key: the slot list lives inside a jsonb column, so this is
  -- kept consistent by the app (removing a slot removes its entries)
  -- rather than by a constraint.
  slot      text not null check (slot <> ''),
  position  smallint not null default 0,
  created_at timestamptz not null default now(),
  unique (plan_id, date, slot, recipe_id)
);

create index if not exists meal_plan_entries_plan_date_idx
  on meal_plan_entries (plan_id, date);

-- ---------------------------------------------------------------------
-- Upgrade installs created with the original fixed four-slot shape
--
-- Slots used to be a Postgres enum with `slot_times` holding a
-- {slot: "HH:MM"} object. Both statements below are no-ops on a database
-- created from the definitions above, and safe to re-run.
-- ---------------------------------------------------------------------

do $$ begin
  alter table meal_plans rename column slot_times to slots;
exception
  when undefined_column then null;
end $$;

-- A renamed column keeps its old object-shaped default.
alter table meal_plans alter column slots set default '[{"id":"breakfast","label":"Breakfast","time":"08:00"},
                {"id":"lunch","label":"Lunch","time":"12:00"},
                {"id":"snack","label":"Snack","time":"15:00"},
                {"id":"dinner","label":"Dinner","time":"18:00"}]'::jsonb;

-- {"dinner":"18:00", ...} -> [{"id":"dinner","label":"Dinner","time":"18:00"}, ...]
update meal_plans
set slots = coalesce((
  select jsonb_agg(
    jsonb_build_object('id', key, 'label', initcap(key), 'time', value)
    order by value, key
  )
  from jsonb_each_text(slots)
), '[]'::jsonb)
where jsonb_typeof(slots) = 'object';

alter table meal_plan_entries
  alter column slot type text using slot::text;

do $$ begin
  alter table meal_plan_entries add constraint meal_plan_entries_slot_not_blank
    check (slot <> '');
exception
  when duplicate_object then null;
end $$;

-- The enum is unused once the column above is text. Drop it yourself
-- after confirming the app works:
--
--   drop type if exists meal_slot;

-- ---------------------------------------------------------------------
-- Sharing with other cookedup accounts
-- ---------------------------------------------------------------------

create table if not exists meal_plan_shares (
  plan_id    uuid not null references meal_plans(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  role       text not null check (role in ('viewer', 'editor')),
  -- Captured when the invite is accepted. `auth.users` isn't readable
  -- from the client, so without this the owner's share list can only say
  -- "somebody" — a name-less row is useless for deciding who to revoke.
  email      text,
  created_at timestamptz not null default now(),
  primary key (plan_id, user_id)
);

-- Invites are a copy-this-link flow: the owner generates one and sends
-- it however they like. The app has no transactional email sender and
-- doesn't need one for this.
create table if not exists meal_plan_invites (
  id          uuid primary key default gen_random_uuid(),
  plan_id     uuid not null references meal_plans(id) on delete cascade,
  token       uuid not null unique default gen_random_uuid(),
  role        text not null check (role in ('viewer', 'editor')),
  created_at  timestamptz not null default now(),
  expires_at  timestamptz not null default now() + interval '30 days',
  accepted_by uuid references auth.users(id) on delete set null,
  accepted_at timestamptz
);

create index if not exists meal_plan_invites_plan_id_idx
  on meal_plan_invites (plan_id);

-- ---------------------------------------------------------------------
-- Access helpers
--
-- These are `security definer` so they read the membership tables with
-- RLS bypassed. Without that, a policy on meal_plans that consults
-- meal_plan_shares (whose own policy consults meal_plans) recurses
-- infinitely and Postgres aborts the query.
-- ---------------------------------------------------------------------

create or replace function public.is_plan_owner(p_plan_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from meal_plans p
    where p.id = p_plan_id and p.owner_id = auth.uid()
  );
$$;

-- Reads ONLY meal_plan_shares, never meal_plans. That restriction is
-- what makes it safe to call from a policy ON meal_plans -- see the
-- "Read plans you own or are shared into" policy below.
create or replace function public.is_plan_member(p_plan_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from meal_plan_shares s
    where s.plan_id = p_plan_id and s.user_id = auth.uid()
  );
$$;

create or replace function public.can_read_plan(p_plan_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from meal_plans p
    where p.id = p_plan_id and p.owner_id = auth.uid()
  ) or is_plan_member(p_plan_id);
$$;

create or replace function public.can_edit_plan(p_plan_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from meal_plans p
    where p.id = p_plan_id and p.owner_id = auth.uid()
  ) or exists (
    select 1 from meal_plan_shares s
    where s.plan_id = p_plan_id
      and s.user_id = auth.uid()
      and s.role = 'editor'
  );
$$;

-- ---------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------

alter table meal_plans enable row level security;
alter table meal_plan_entries enable row level security;
alter table meal_plan_shares enable row level security;
alter table meal_plan_invites enable row level security;

-- Ownership is tested directly against the row rather than through
-- can_read_plan(), which would query meal_plans from inside a policy on
-- meal_plans. That self-reference breaks `insert ... returning`: this
-- policy is applied to the returned rows, but a subquery running inside
-- the same INSERT command cannot see the tuple that command is
-- inserting, so the new row is filtered out of RETURNING and PostgREST
-- reports zero rows back to the client. Creating a plan fails even
-- though the insert itself succeeded.
--
-- The share lookup is fine to delegate, because is_plan_member() reads
-- meal_plan_shares -- a different table, whose rows already exist.
drop policy if exists "Read plans you own or are shared into" on meal_plans;
create policy "Read plans you own or are shared into"
on meal_plans for select to authenticated
using (owner_id = auth.uid() or is_plan_member(id));

drop policy if exists "Create your own plans" on meal_plans;
create policy "Create your own plans"
on meal_plans for insert to authenticated
with check (owner_id = auth.uid());

-- Plan metadata (name, slot times, share token) stays owner-only even
-- for editors: an editor can change what's on the calendar, not who can
-- see it.
drop policy if exists "Owners update their plans" on meal_plans;
create policy "Owners update their plans"
on meal_plans for update to authenticated
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

drop policy if exists "Owners delete their plans" on meal_plans;
create policy "Owners delete their plans"
on meal_plans for delete to authenticated
using (owner_id = auth.uid());

drop policy if exists "Read entries of readable plans" on meal_plan_entries;
create policy "Read entries of readable plans"
on meal_plan_entries for select to authenticated
using (can_read_plan(plan_id));

drop policy if exists "Editors add entries" on meal_plan_entries;
create policy "Editors add entries"
on meal_plan_entries for insert to authenticated
with check (can_edit_plan(plan_id));

drop policy if exists "Editors move entries" on meal_plan_entries;
create policy "Editors move entries"
on meal_plan_entries for update to authenticated
using (can_edit_plan(plan_id))
with check (can_edit_plan(plan_id));

drop policy if exists "Editors remove entries" on meal_plan_entries;
create policy "Editors remove entries"
on meal_plan_entries for delete to authenticated
using (can_edit_plan(plan_id));

drop policy if exists "See who a readable plan is shared with" on meal_plan_shares;
create policy "See who a readable plan is shared with"
on meal_plan_shares for select to authenticated
using (user_id = auth.uid() or can_read_plan(plan_id));

drop policy if exists "Owners manage shares" on meal_plan_shares;
create policy "Owners manage shares"
on meal_plan_shares for all to authenticated
using (is_plan_owner(plan_id))
with check (is_plan_owner(plan_id));

drop policy if exists "Owners manage invites" on meal_plan_invites;
create policy "Owners manage invites"
on meal_plan_invites for all to authenticated
using (is_plan_owner(plan_id))
with check (is_plan_owner(plan_id));

-- A recipe row belongs to the plan owner, so a viewer or editor of a
-- shared plan can't read it under the usual `user_id = auth.uid()`
-- policy — the plan would render as a grid of missing recipes. This
-- grants read access to exactly the recipes that a plan they can
-- already read points at, and nothing else.
drop policy if exists "Read recipes planned in a readable plan" on recipes;
create policy "Read recipes planned in a readable plan"
on recipes for select to authenticated
using (
  exists (
    select 1 from meal_plan_entries e
    where e.recipe_id = recipes.id and can_read_plan(e.plan_id)
  )
);

-- ---------------------------------------------------------------------
-- Unauthenticated access by share token
--
-- The share link and the .ics feed are both public URLs whose only
-- credential is the token. Rather than introduce a service-role key into
-- the app to read past RLS, these `security definer` functions take the
-- token and return exactly the plan it names — nothing else is reachable
-- and no privileged key ever ships with the app.
-- ---------------------------------------------------------------------

create or replace function public.get_shared_plan(
  p_token uuid,
  p_start date default null,
  p_end   date default null
)
returns jsonb
language sql
security definer
set search_path = public
stable
as $$
  select jsonb_build_object(
    'id', p.id,
    'name', p.name,
    'slots', p.slots,
    'entries', coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'id', e.id,
          'date', e.date,
          'slot', e.slot,
          'position', e.position,
          'recipe', r.data
        )
        order by e.date, e.slot, e.position
      )
      from meal_plan_entries e
      join recipes r on r.id = e.recipe_id
      where e.plan_id = p.id
        and (p_start is null or e.date >= p_start)
        and (p_end is null or e.date <= p_end)
    ), '[]'::jsonb)
  )
  from meal_plans p
  where p.share_token = p_token;
$$;

grant execute on function public.get_shared_plan(uuid, date, date) to anon, authenticated;

-- ---------------------------------------------------------------------
-- Accepting an invite
--
-- Also `security definer`: the invitee can't see the invite row (it's
-- owner-only) and can't insert into meal_plan_shares (owner-only), so
-- redeeming a token has to happen inside a trusted function. Expired or
-- already-accepted tokens are indistinguishable from nonexistent ones.
-- ---------------------------------------------------------------------

create or replace function public.accept_meal_plan_invite(p_token uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_invite meal_plan_invites%rowtype;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  select * into v_invite
  from meal_plan_invites
  where token = p_token
    and accepted_at is null
    and expires_at > now();

  if not found then
    return null;
  end if;

  -- The owner following their own invite link is a no-op, not an error.
  if exists (
    select 1 from meal_plans where id = v_invite.plan_id and owner_id = auth.uid()
  ) then
    return v_invite.plan_id;
  end if;

  insert into meal_plan_shares (plan_id, user_id, role, email)
  values (
    v_invite.plan_id,
    auth.uid(),
    v_invite.role,
    (select u.email from auth.users u where u.id = auth.uid())
  )
  on conflict (plan_id, user_id)
  do update set role = excluded.role, email = excluded.email;

  update meal_plan_invites
  set accepted_by = auth.uid(), accepted_at = now()
  where id = v_invite.id;

  return v_invite.plan_id;
end;
$$;

grant execute on function public.accept_meal_plan_invite(uuid) to authenticated;

-- ---------------------------------------------------------------------
-- Unstarring
--
-- A library row can't simply be deleted any more: a plan entry may point
-- at it. This clears the star and only removes the row if nothing else
-- needs it, in one atomic step the client can call directly.
-- ---------------------------------------------------------------------

create or replace function public.unstar_recipe(p_recipe_url text)
returns void
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_id uuid;
begin
  select id into v_id
  from recipes
  where user_id = auth.uid()
    and recipe_url = p_recipe_url;

  if v_id is null then
    return;
  end if;

  if exists (select 1 from meal_plan_entries where recipe_id = v_id) then
    update recipes set is_starred = false where id = v_id;
  else
    delete from recipes where id = v_id;
  end if;
end;
$$;

grant execute on function public.unstar_recipe(text) to authenticated;
