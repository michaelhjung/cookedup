-- Households, unified sharing, pantries, and grocery lists.
--
-- A household is a group of accounts that see each other's everything:
-- meal plans, pantries, grocery lists. Sharing one object at a time
-- (for people who aren't in a household) keeps working, but the two
-- meal-plan-specific tables that did it are replaced by `shares` and
-- `invites`, keyed by (resource_kind, resource_id) so the same two
-- tables serve every shareable object, including ones that don't exist
-- yet (user-created recipes are next).
--
-- A pantry is a list of what's in the kitchen with a three-way status
-- (stocked / low / out) and no quantities. A grocery list is a per-store
-- check-off list, optionally linked to a pantry so checking a line can
-- restock the matching item.

-- ---------------------------------------------------------------------
-- Households
-- ---------------------------------------------------------------------

create table households (
  id         uuid primary key default gen_random_uuid(),
  name       text not null check (btrim(name) <> ''),
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table household_members (
  household_id uuid not null references households(id) on delete cascade,
  user_id      uuid not null references auth.users(id) on delete cascade,
  role         text not null check (role in ('admin', 'member')),
  -- Captured on join. `auth.users` isn't readable from the client, so
  -- this is the only way the member list can show who someone is.
  email        text,
  joined_at    timestamptz not null default now(),
  primary key (household_id, user_id),
  -- One household per person. That's what makes "household objects"
  -- unambiguous: a pantry belongs to *the* household, not one of several.
  unique (user_id)
);

-- ---------------------------------------------------------------------
-- Unified sharing
-- ---------------------------------------------------------------------

create table shares (
  resource_kind text not null check (resource_kind in ('meal_plan', 'pantry', 'grocery_list')),
  -- No foreign key: the id points at a different table per kind. The
  -- delete triggers at the bottom of this file keep it from dangling.
  resource_id   uuid not null,
  user_id       uuid not null references auth.users(id) on delete cascade,
  role          text not null check (role in ('viewer', 'editor')),
  email         text,
  created_at    timestamptz not null default now(),
  primary key (resource_kind, resource_id, user_id)
);

create index shares_user_id_idx on shares (user_id);

-- Copy-this-link invites, as before. A link can be redeemed by anyone
-- who has it until it expires, so one "join our household" link can go
-- to the whole family.
create table invites (
  id            uuid primary key default gen_random_uuid(),
  resource_kind text not null check (resource_kind in ('meal_plan', 'pantry', 'grocery_list', 'household')),
  resource_id   uuid not null,
  token         uuid not null unique default gen_random_uuid(),
  role          text not null,
  created_by    uuid references auth.users(id) on delete set null,
  created_at    timestamptz not null default now(),
  expires_at    timestamptz not null default now() + interval '7 days',
  constraint invites_role_matches_kind check (
    (resource_kind = 'household' and role in ('member', 'admin'))
    or (resource_kind <> 'household' and role in ('viewer', 'editor'))
  )
);

create index invites_resource_idx on invites (resource_kind, resource_id);

-- Carry existing plan shares and live invites across before the old
-- tables go.
insert into shares (resource_kind, resource_id, user_id, role, email, created_at)
select 'meal_plan', plan_id, user_id, role, email, created_at
from meal_plan_shares;

insert into invites (id, resource_kind, resource_id, token, role, created_by, created_at, expires_at)
select i.id, 'meal_plan', i.plan_id, i.token, i.role, p.owner_id, i.created_at, i.expires_at
from meal_plan_invites i
join meal_plans p on p.id = i.plan_id
where i.accepted_at is null;

drop table meal_plan_invites;
drop table meal_plan_shares;
drop function if exists public.accept_meal_plan_invite(uuid);

-- The meal_plans policies are recreated further down, once the
-- household helpers exist; they have to go now because the functions
-- they call are going.
drop policy "Read plans you own or are shared into" on meal_plans;
drop policy "Create your own plans" on meal_plans;
drop policy "Owners update their plans" on meal_plans;
drop policy "Owners delete their plans" on meal_plans;
drop function public.is_plan_owner(uuid);
drop function public.is_plan_member(uuid);

alter table meal_plans
  add column household_id uuid references households(id) on delete set null;

create index meal_plans_household_id_idx on meal_plans (household_id);

-- ---------------------------------------------------------------------
-- Pantries and grocery lists
-- ---------------------------------------------------------------------

create table pantries (
  id           uuid primary key default gen_random_uuid(),
  owner_id     uuid not null references auth.users(id) on delete cascade,
  household_id uuid references households(id) on delete set null,
  name         text not null default 'My Pantry',
  created_at   timestamptz not null default now()
);

create index pantries_owner_id_idx on pantries (owner_id);
create index pantries_household_id_idx on pantries (household_id);

create table pantry_items (
  id         uuid primary key default gen_random_uuid(),
  pantry_id  uuid not null references pantries(id) on delete cascade,
  name       text not null check (btrim(name) <> ''),
  -- normalizeItemName(name): lowercased, trimmed, singularised. Computed
  -- by the app on write; it's what dedupes "Eggs" against "egg" and what
  -- recipe ingredients and grocery lines match against.
  name_key   text not null check (name_key <> ''),
  status     text not null default 'stocked' check (status in ('stocked', 'low', 'out')),
  category   text,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null,
  unique (pantry_id, name_key)
);

create table grocery_lists (
  id           uuid primary key default gen_random_uuid(),
  owner_id     uuid not null references auth.users(id) on delete cascade,
  household_id uuid references households(id) on delete set null,
  -- The pantry that checking a line restocks. Optional, and a list
  -- outlives its pantry.
  pantry_id    uuid references pantries(id) on delete set null,
  name         text not null default 'Grocery list',
  created_at   timestamptz not null default now()
);

create index grocery_lists_owner_id_idx on grocery_lists (owner_id);
create index grocery_lists_household_id_idx on grocery_lists (household_id);

create table grocery_list_lines (
  id                  uuid primary key default gen_random_uuid(),
  list_id             uuid not null references grocery_lists(id) on delete cascade,
  name                text not null check (btrim(name) <> ''),
  name_key            text not null check (name_key <> ''),
  category            text,
  is_checked          boolean not null default false,
  checked_at          timestamptz,
  checked_by          uuid references auth.users(id) on delete set null,
  source              text not null default 'manual' check (source in ('pantry', 'plan', 'manual')),
  -- For plan lines: which upcoming meals wanted this, shown under the
  -- line ("for Chicken curry, Pad thai").
  source_recipe_names text[] not null default '{}',
  position            integer not null default 0,
  created_at          timestamptz not null default now(),
  unique (list_id, name_key)
);

create index grocery_list_lines_list_id_idx on grocery_list_lines (list_id);

-- Per-person preferences for check-off behaviour and the generate sheet.
create table pantry_settings (
  user_id             uuid primary key references auth.users(id) on delete cascade,
  restock_on_check    boolean not null default true,
  add_new_on_check    boolean not null default true,
  default_sources     text[] not null default '{pantry,plan}',
  default_range_count integer not null default 7 check (default_range_count between 1 and 31),
  default_range_unit  text not null default 'days' check (default_range_unit in ('days', 'weeks', 'months'))
);

-- Realtime on the list currently open at the store, so two phones
-- checking things off see each other.
alter publication supabase_realtime add table grocery_list_lines;

-- ---------------------------------------------------------------------
-- Access helpers
--
-- All `security definer`: policies that consult another table whose own
-- policy consults this one would otherwise recurse. Each reads only the
-- tables it names, and none of the object-table policies below call a
-- helper that reads the table the policy is on (see the note on
-- `insert ... returning` in the meal plans migration).
-- ---------------------------------------------------------------------

create or replace function public.is_household_member(p_household_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select p_household_id is not null and exists (
    select 1 from household_members m
    where m.household_id = p_household_id and m.user_id = auth.uid()
  );
$$;

create or replace function public.is_household_admin(p_household_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select p_household_id is not null and exists (
    select 1 from household_members m
    where m.household_id = p_household_id
      and m.user_id = auth.uid()
      and m.role = 'admin'
  );
$$;

-- `editor` satisfies a `viewer` requirement; the reverse doesn't hold.
create or replace function public.has_share(p_kind text, p_id uuid, p_min_role text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from shares s
    where s.resource_kind = p_kind
      and s.resource_id = p_id
      and s.user_id = auth.uid()
      and (p_min_role = 'viewer' or s.role = 'editor')
  );
$$;

-- The owner, or a member of the household the object belongs to.
create or replace function public.owns_resource(p_kind text, p_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select case p_kind
    when 'meal_plan' then exists (
      select 1 from meal_plans o
      where o.id = p_id and (o.owner_id = auth.uid() or is_household_member(o.household_id))
    )
    when 'pantry' then exists (
      select 1 from pantries o
      where o.id = p_id and (o.owner_id = auth.uid() or is_household_member(o.household_id))
    )
    when 'grocery_list' then exists (
      select 1 from grocery_lists o
      where o.id = p_id and (o.owner_id = auth.uid() or is_household_member(o.household_id))
    )
    else false
  end;
$$;

create or replace function public.can_read_resource(p_kind text, p_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select owns_resource(p_kind, p_id) or has_share(p_kind, p_id, 'viewer');
$$;

create or replace function public.can_edit_resource(p_kind text, p_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select owns_resource(p_kind, p_id) or has_share(p_kind, p_id, 'editor');
$$;

-- Who may rename, reshare, or delete: the owner, or an admin of the
-- household it's in (so a household keeps control of an object whose
-- owner has left). For a household itself, its admins.
create or replace function public.can_manage_resource(p_kind text, p_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select case p_kind
    when 'household' then is_household_admin(p_id)
    when 'meal_plan' then exists (
      select 1 from meal_plans o
      where o.id = p_id and (o.owner_id = auth.uid() or is_household_admin(o.household_id))
    )
    when 'pantry' then exists (
      select 1 from pantries o
      where o.id = p_id and (o.owner_id = auth.uid() or is_household_admin(o.household_id))
    )
    when 'grocery_list' then exists (
      select 1 from grocery_lists o
      where o.id = p_id and (o.owner_id = auth.uid() or is_household_admin(o.household_id))
    )
    else false
  end;
$$;

-- Same names and signatures as before, so the entry, series and recipe
-- policies from earlier migrations pick up households and the new
-- shares table without being rewritten.
create or replace function public.can_read_plan(p_plan_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select can_read_resource('meal_plan', p_plan_id);
$$;

create or replace function public.can_edit_plan(p_plan_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select can_edit_resource('meal_plan', p_plan_id);
$$;

create or replace function public.can_read_pantry(p_pantry_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select can_read_resource('pantry', p_pantry_id);
$$;

create or replace function public.can_edit_pantry(p_pantry_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select can_edit_resource('pantry', p_pantry_id);
$$;

create or replace function public.can_read_list(p_list_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select can_read_resource('grocery_list', p_list_id);
$$;

create or replace function public.can_edit_list(p_list_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select can_edit_resource('grocery_list', p_list_id);
$$;

-- ---------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------

alter table households enable row level security;
alter table household_members enable row level security;
alter table shares enable row level security;
alter table invites enable row level security;
alter table pantries enable row level security;
alter table pantry_items enable row level security;
alter table grocery_lists enable row level security;
alter table grocery_list_lines enable row level security;
alter table pantry_settings enable row level security;

-- Households are created through create_household() so the creator's
-- admin row lands in the same transaction; there's no insert policy.
create policy "Members read their household"
on households for select to authenticated
using (is_household_member(id));

create policy "Admins rename their household"
on households for update to authenticated
using (is_household_admin(id))
with check (is_household_admin(id));

create policy "Admins delete their household"
on households for delete to authenticated
using (is_household_admin(id));

create policy "Members see each other"
on household_members for select to authenticated
using (is_household_member(household_id));

-- Joining goes through accept_invite(); leaving through leave_household().
create policy "Admins change roles"
on household_members for update to authenticated
using (is_household_admin(household_id))
with check (is_household_admin(household_id));

create policy "Admins remove members"
on household_members for delete to authenticated
using (is_household_admin(household_id) and user_id <> auth.uid());

create policy "See who a readable object is shared with"
on shares for select to authenticated
using (user_id = auth.uid() or can_read_resource(resource_kind, resource_id));

create policy "Owners manage shares"
on shares for all to authenticated
using (can_manage_resource(resource_kind, resource_id))
with check (can_manage_resource(resource_kind, resource_id));

-- Leaving a share you were given is your own call.
create policy "Leave a share"
on shares for delete to authenticated
using (user_id = auth.uid());

create policy "Owners manage invites"
on invites for all to authenticated
using (can_manage_resource(resource_kind, resource_id))
with check (can_manage_resource(resource_kind, resource_id));

-- Meal plans: the policies dropped above, re-made so a household member
-- sees and edits the household's plans like an editor would.
create policy "Read plans you own, share, or live with"
on meal_plans for select to authenticated
using (
  owner_id = auth.uid()
  or is_household_member(household_id)
  or has_share('meal_plan', id, 'viewer')
);

-- Ownership is tested against the row rather than via can_manage_
-- resource(), which would read meal_plans from inside a policy on
-- meal_plans and break `insert ... returning` (see the meal plans
-- migration). The household check reads a different table.
create policy "Owners and household admins update plans"
on meal_plans for update to authenticated
using (owner_id = auth.uid() or is_household_admin(household_id))
with check (
  (owner_id = auth.uid() or is_household_admin(household_id))
  and (household_id is null or is_household_member(household_id))
);

create policy "Owners and household admins delete plans"
on meal_plans for delete to authenticated
using (owner_id = auth.uid() or is_household_admin(household_id));

-- As before, plus a household id, and only one the creator belongs to.
create policy "Create your own plans"
on meal_plans for insert to authenticated
with check (
  owner_id = auth.uid()
  and (household_id is null or is_household_member(household_id))
);

create policy "Read pantries you own, share, or live with"
on pantries for select to authenticated
using (
  owner_id = auth.uid()
  or is_household_member(household_id)
  or has_share('pantry', id, 'viewer')
);

create policy "Create your own pantries"
on pantries for insert to authenticated
with check (
  owner_id = auth.uid()
  and (household_id is null or is_household_member(household_id))
);

create policy "Owners and household admins update pantries"
on pantries for update to authenticated
using (owner_id = auth.uid() or is_household_admin(household_id))
with check (
  (owner_id = auth.uid() or is_household_admin(household_id))
  and (household_id is null or is_household_member(household_id))
);

create policy "Owners and household admins delete pantries"
on pantries for delete to authenticated
using (owner_id = auth.uid() or is_household_admin(household_id));

create policy "Read items of readable pantries"
on pantry_items for select to authenticated
using (can_read_pantry(pantry_id));

create policy "Editors manage pantry items"
on pantry_items for all to authenticated
using (can_edit_pantry(pantry_id))
with check (can_edit_pantry(pantry_id));

create policy "Read lists you own, share, or live with"
on grocery_lists for select to authenticated
using (
  owner_id = auth.uid()
  or is_household_member(household_id)
  or has_share('grocery_list', id, 'viewer')
);

-- A list may only point at a pantry its creator can read; otherwise
-- check-off would quietly write into someone else's pantry.
create policy "Create your own lists"
on grocery_lists for insert to authenticated
with check (
  owner_id = auth.uid()
  and (household_id is null or is_household_member(household_id))
  and (pantry_id is null or can_read_pantry(pantry_id))
);

create policy "Owners and household admins update lists"
on grocery_lists for update to authenticated
using (owner_id = auth.uid() or is_household_admin(household_id))
with check (
  (owner_id = auth.uid() or is_household_admin(household_id))
  and (household_id is null or is_household_member(household_id))
  and (pantry_id is null or can_read_pantry(pantry_id))
);

create policy "Owners and household admins delete lists"
on grocery_lists for delete to authenticated
using (owner_id = auth.uid() or is_household_admin(household_id));

create policy "Read lines of readable lists"
on grocery_list_lines for select to authenticated
using (can_read_list(list_id));

create policy "Editors manage lines"
on grocery_list_lines for all to authenticated
using (can_edit_list(list_id))
with check (can_edit_list(list_id));

create policy "Your own preferences"
on pantry_settings for all to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

-- ---------------------------------------------------------------------
-- Keeping shares and invites from dangling
--
-- The polymorphic tables can't use foreign keys, so each shareable
-- table drops its rows on delete instead.
-- ---------------------------------------------------------------------

create or replace function public.delete_resource_shares()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from shares where resource_kind = tg_argv[0] and resource_id = old.id;
  delete from invites where resource_kind = tg_argv[0] and resource_id = old.id;
  return old;
end;
$$;

create trigger meal_plans_delete_shares
after delete on meal_plans
for each row execute function delete_resource_shares('meal_plan');

create trigger pantries_delete_shares
after delete on pantries
for each row execute function delete_resource_shares('pantry');

create trigger grocery_lists_delete_shares
after delete on grocery_lists
for each row execute function delete_resource_shares('grocery_list');

create trigger households_delete_shares
after delete on households
for each row execute function delete_resource_shares('household');

-- ---------------------------------------------------------------------
-- Household membership
-- ---------------------------------------------------------------------

-- The household and its first admin row are one step: an admin-only
-- insert policy on household_members can't admit the person who is
-- about to become the first admin.
create or replace function public.create_household(p_name text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  if btrim(coalesce(p_name, '')) = '' then
    raise exception 'Give the household a name.';
  end if;

  if exists (select 1 from household_members where user_id = auth.uid()) then
    raise exception 'You''re already in a household. Leave it first to start another.';
  end if;

  insert into households (name, created_by)
  values (btrim(p_name), auth.uid())
  returning id into v_id;

  insert into household_members (household_id, user_id, role, email)
  values (
    v_id, auth.uid(), 'admin',
    (select u.email from auth.users u where u.id = auth.uid())
  );

  return v_id;
end;
$$;

grant execute on function public.create_household(text) to authenticated;

-- Personal objects are untouched; household objects stay with the
-- household. If the last admin leaves, the longest-standing remaining
-- member is promoted; if nobody remains, the household is deleted and
-- its objects revert to their owners.
create or replace function public.leave_household()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_household uuid;
  v_role      text;
  v_next      uuid;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  select household_id, role into v_household, v_role
  from household_members
  where user_id = auth.uid();

  if not found then
    return;
  end if;

  delete from household_members
  where household_id = v_household and user_id = auth.uid();

  if not exists (select 1 from household_members where household_id = v_household) then
    delete from households where id = v_household;
    return;
  end if;

  if v_role = 'admin' and not exists (
    select 1 from household_members
    where household_id = v_household and role = 'admin'
  ) then
    select user_id into v_next
    from household_members
    where household_id = v_household
    order by joined_at asc
    limit 1;

    update household_members set role = 'admin'
    where household_id = v_household and user_id = v_next;
  end if;
end;
$$;

grant execute on function public.leave_household() to authenticated;

-- ---------------------------------------------------------------------
-- Accepting an invite
--
-- `security definer`: the invitee can't read the invite (owner-only)
-- and can't insert their own share or membership row. Returns what was
-- joined so the page can send them to it, or null for a dead token —
-- expired and nonexistent are deliberately indistinguishable.
-- ---------------------------------------------------------------------

create or replace function public.accept_invite(p_token uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_invite invites%rowtype;
  v_email  text;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  select * into v_invite
  from invites
  where token = p_token and expires_at > now();

  if not found then
    return null;
  end if;

  select u.email into v_email from auth.users u where u.id = auth.uid();

  if v_invite.resource_kind = 'household' then
    if exists (
      select 1 from household_members
      where household_id = v_invite.resource_id and user_id = auth.uid()
    ) then
      return jsonb_build_object('kind', 'household', 'id', v_invite.resource_id);
    end if;

    if exists (select 1 from household_members where user_id = auth.uid()) then
      raise exception 'You''re already in a household. Leave it before joining another.';
    end if;

    insert into household_members (household_id, user_id, role, email)
    values (v_invite.resource_id, auth.uid(), v_invite.role, v_email);

    return jsonb_build_object('kind', 'household', 'id', v_invite.resource_id);
  end if;

  -- Someone who already sees the object (its owner, or a member of its
  -- household) following the link is a no-op, not a demotion to viewer.
  if not owns_resource(v_invite.resource_kind, v_invite.resource_id) then
    insert into shares (resource_kind, resource_id, user_id, role, email)
    values (v_invite.resource_kind, v_invite.resource_id, auth.uid(), v_invite.role, v_email)
    on conflict (resource_kind, resource_id, user_id)
    do update set role = excluded.role, email = excluded.email;
  end if;

  return jsonb_build_object('kind', v_invite.resource_kind, 'id', v_invite.resource_id);
end;
$$;

grant execute on function public.accept_invite(uuid) to authenticated;

-- ---------------------------------------------------------------------
-- Grocery check-off
--
-- Checking a line and restocking the pantry are one transaction, and
-- the function reports what it did so the toast can say "marked Stocked
-- in Home pantry" and Undo knows exactly what to put back.
--
-- `security invoker`: every read and write here goes through RLS, so a
-- viewer of the pantry gets a plain check with no pantry change.
-- ---------------------------------------------------------------------

create or replace function public.check_grocery_line(
  p_line_id       uuid,
  p_apply_restock boolean,
  p_add_new       boolean
)
returns jsonb
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_line      grocery_list_lines%rowtype;
  v_pantry_id uuid;
  v_item      pantry_items%rowtype;
  v_action    text := 'none';
  v_previous  text;
begin
  select * into v_line from grocery_list_lines where id = p_line_id;

  if not found then
    raise exception 'Line not found';
  end if;

  update grocery_list_lines
  set is_checked = true, checked_at = now(), checked_by = auth.uid()
  where id = p_line_id;

  if not found then
    raise exception 'You can''t edit this list';
  end if;

  select pantry_id into v_pantry_id from grocery_lists where id = v_line.list_id;

  if v_pantry_id is null or not can_edit_pantry(v_pantry_id) then
    return jsonb_build_object('pantry_action', v_action, 'previous_status', null);
  end if;

  select * into v_item
  from pantry_items
  where pantry_id = v_pantry_id and name_key = v_line.name_key;

  if found then
    if p_apply_restock and v_item.status <> 'stocked' then
      v_previous := v_item.status;
      update pantry_items
      set status = 'stocked', updated_at = now(), updated_by = auth.uid()
      where id = v_item.id;
      v_action := 'restocked';
    end if;
  elsif p_add_new then
    insert into pantry_items (pantry_id, name, name_key, status, category, updated_by)
    values (v_pantry_id, v_line.name, v_line.name_key, 'stocked', v_line.category, auth.uid());
    v_action := 'added';
  end if;

  return jsonb_build_object('pantry_action', v_action, 'previous_status', v_previous);
end;
$$;

grant execute on function public.check_grocery_line(uuid, boolean, boolean) to authenticated;

-- The reverse. `p_revert_pantry` is only true from the Undo toast: an
-- ordinary uncheck (a mis-tap noticed later) leaves the pantry alone,
-- because by then the item really is in the bag.
create or replace function public.uncheck_grocery_line(
  p_line_id         uuid,
  p_revert_pantry   boolean,
  p_previous_status text
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_line      grocery_list_lines%rowtype;
  v_pantry_id uuid;
begin
  select * into v_line from grocery_list_lines where id = p_line_id;

  if not found then
    raise exception 'Line not found';
  end if;

  update grocery_list_lines
  set is_checked = false, checked_at = null, checked_by = null
  where id = p_line_id;

  if not found then
    raise exception 'You can''t edit this list';
  end if;

  if not p_revert_pantry then
    return;
  end if;

  select pantry_id into v_pantry_id from grocery_lists where id = v_line.list_id;

  if v_pantry_id is null then
    return;
  end if;

  if p_previous_status in ('low', 'out') then
    update pantry_items
    set status = p_previous_status, updated_at = now(), updated_by = auth.uid()
    where pantry_id = v_pantry_id and name_key = v_line.name_key;
  else
    -- No previous status means the check added the item; take it back.
    delete from pantry_items
    where pantry_id = v_pantry_id and name_key = v_line.name_key;
  end if;
end;
$$;

grant execute on function public.uncheck_grocery_line(uuid, boolean, text) to authenticated;

-- Bulk add from the generate sheet or a paste: lines already on the
-- list (by name_key) are skipped, never doubled. Returns how many went
-- in. Each element of p_lines is
--   {name, name_key, category, source, source_recipe_names}.
create or replace function public.add_lines_to_list(p_list_id uuid, p_lines jsonb)
returns integer
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_count    integer;
  v_position integer;
begin
  select coalesce(max(position), -1) + 1 into v_position
  from grocery_list_lines
  where list_id = p_list_id;

  with incoming as (
    select
      l->>'name'                         as name,
      l->>'name_key'                     as name_key,
      l->>'category'                     as category,
      coalesce(l->>'source', 'manual')   as source,
      coalesce(
        (select array_agg(x) from jsonb_array_elements_text(coalesce(l->'source_recipe_names', '[]'::jsonb)) x),
        '{}'
      )                                  as source_recipe_names,
      ordinality                         as ord
    from jsonb_array_elements(p_lines) with ordinality as t(l, ordinality)
  ),
  inserted as (
    insert into grocery_list_lines (list_id, name, name_key, category, source, source_recipe_names, position)
    select p_list_id, name, name_key, category, source, source_recipe_names, v_position + ord - 1
    from incoming
    on conflict (list_id, name_key) do nothing
    returning 1
  )
  select count(*) into v_count from inserted;

  return v_count;
end;
$$;

grant execute on function public.add_lines_to_list(uuid, jsonb) to authenticated;
