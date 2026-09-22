-- ---------------------------------------------------------------------
-- Recipe moderation: admins, review before publishing, reports, and
-- a star count on every user recipe.
--
-- A recipe the author marks public is not live until an admin approves
-- it, and editing an approved recipe puts it back in the queue, so the
-- version people see is always one an admin looked at. Signed-in users
-- can report a live recipe; admins dismiss the report or unpublish the
-- recipe with a note the author sees.
--
-- Admins are rows in `app_roles`. Nothing in the app can write that
-- table: grant yourself in the dashboard's SQL editor, once, after this
-- migration has been pushed:
--
--   insert into app_roles (user_id, role)
--   select id, 'admin' from auth.users where email = '<your email>'
--   on conflict do nothing
--   returning user_id;
--
-- (The demo seed grants the local demo account the same way, through
-- the service-role client.)
-- ---------------------------------------------------------------------

-- ---------------------------------------------------------------------
-- Roles
--
-- Shaped as (user, role) rows rather than a flag so a later "Roles" tab
-- can add a `reviewer` role, or a second admin, without a schema
-- change. Only `admin` means anything yet.
-- ---------------------------------------------------------------------

create table app_roles (
  user_id    uuid not null references auth.users(id) on delete cascade,
  role       text not null check (role in ('admin', 'reviewer')),
  created_at timestamptz not null default now(),
  primary key (user_id, role)
);

alter table app_roles enable row level security;

-- You can see your own roles (that is how the nav decides to show the
-- Admin link); nobody can list who the admins are, and there are no
-- write policies at all.
create policy "See your own roles"
on app_roles for select to authenticated
using (user_id = auth.uid());

create or replace function public.is_app_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from app_roles r
    where r.user_id = auth.uid() and r.role = 'admin'
  );
$$;

-- ---------------------------------------------------------------------
-- Review state on the recipe
--
-- "Live" (in Community, readable signed out) is
--   visibility = 'public' and review_status = 'approved'.
-- `review_status` only means something while `visibility = 'public'`,
-- except `rejected`, which an unpublished recipe keeps (with its note)
-- until the author resubmits.
-- ---------------------------------------------------------------------

alter table user_recipes
  add column review_status text not null default 'approved'
    check (review_status in ('pending', 'approved', 'rejected')),
  add column review_note text
    check (review_note is null or length(review_note) <= 500),
  add column reviewed_at timestamptz,
  add column reviewed_by uuid references auth.users(id) on delete set null,
  add column star_count integer not null default 0 check (star_count >= 0);

-- Recipes published before moderation existed stay live: the default
-- above is 'approved'. Everything written from now on goes through the
-- trigger below.

drop index if exists user_recipes_public_idx;
create index user_recipes_public_idx on user_recipes (created_at desc)
  where visibility = 'public' and review_status = 'approved';

create index user_recipes_pending_idx on user_recipes (updated_at)
  where review_status = 'pending';

-- Whether the current statement is the database's own bookkeeping (an
-- admin decision or a star recount) rather than the author saving. Set
-- and cleared around each such statement, never left on.
create or replace function public.is_system_write()
returns boolean
language sql
stable
as $$
  select coalesce(current_setting('cookedup.system_write', true), '') = 'on';
$$;

-- The author's writes decide `visibility`; the database decides the
-- rest. On an author write the review columns and star count are
-- carried over from the old row (or zeroed on insert), then:
--   public, and new or changed since it was last looked at → pending
--   public, unchanged                                     → as it was
--   private, was pending                                  → approved
--                                                            (withdrawn)
--   private, otherwise                                    → as it was
-- "Changed" means what a reader sees: the hit (minus the byline, which
-- is the profile's, not the recipe's) plus the columns the hit doesn't
-- carry. `updated_at` is only bumped by author writes, so the queue's
-- "submitted" time and the profile-rename touch behave.
create or replace function public.user_recipes_before_write()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  is_changed boolean;
begin
  new.hit := build_user_recipe_hit(new);

  if is_system_write() then
    return new;
  end if;

  new.updated_at := now();

  if tg_op = 'UPDATE' then
    new.review_status := old.review_status;
    new.review_note := old.review_note;
    new.reviewed_at := old.reviewed_at;
    new.reviewed_by := old.reviewed_by;
    new.star_count := old.star_count;

    is_changed :=
      old.visibility <> 'public'
      or (old.hit #- '{recipe,source}') is distinct from (new.hit #- '{recipe,source}')
      or old.description is distinct from new.description
      or old.notes is distinct from new.notes
      or old.source_name is distinct from new.source_name
      or old.source_url is distinct from new.source_url;
  else
    new.review_status := 'approved';
    new.review_note := null;
    new.reviewed_at := null;
    new.reviewed_by := null;
    new.star_count := 0;
    is_changed := true;
  end if;

  if new.visibility = 'public' then
    if is_changed then
      new.review_status := 'pending';
      new.review_note := null;
      new.reviewed_at := null;
      new.reviewed_by := null;
    end if;
  elsif new.review_status = 'pending' then
    new.review_status := 'approved';
  end if;

  return new;
end;
$$;

-- ---------------------------------------------------------------------
-- Star count
--
-- How many library rows star the recipe, kept on the recipe row so the
-- Community tab can show and later sort by it without a join. Recounted
-- rather than nudged, so a replayed statement lands on the same number.
-- Library rows belong to other users, hence definer.
-- ---------------------------------------------------------------------

create or replace function public.refresh_user_recipe_star_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  ids uuid[] := array_remove(array[
    case when tg_op <> 'INSERT' then old.user_recipe_id end,
    case when tg_op <> 'DELETE' then new.user_recipe_id end
  ], null);
begin
  if cardinality(ids) = 0 then
    return null;
  end if;

  perform set_config('cookedup.system_write', 'on', true);
  update user_recipes r
  set star_count = (
    select count(*) from recipes s
    where s.user_recipe_id = r.id and s.is_starred
  )
  where r.id = any (ids);
  perform set_config('cookedup.system_write', '', true);

  return null;
end;
$$;

create trigger recipes_refresh_star_count
after insert or update or delete on recipes
for each row execute function refresh_user_recipe_star_count();

update user_recipes r
set star_count = (
  select count(*) from recipes s
  where s.user_recipe_id = r.id and s.is_starred
);

-- ---------------------------------------------------------------------
-- Reports
-- ---------------------------------------------------------------------

create table recipe_reports (
  id          uuid primary key default gen_random_uuid(),
  recipe_id   uuid not null references user_recipes(id) on delete cascade,
  reporter_id uuid not null default auth.uid()
              references auth.users(id) on delete cascade,
  reason      text not null check (reason in (
                'not_a_recipe', 'offensive', 'spam', 'copyright',
                'personal_info', 'other'
              )),
  details     text check (details is null or length(details) <= 1000),
  status      text not null default 'open'
              check (status in ('open', 'resolved')),
  created_at  timestamptz not null default now(),
  resolved_at timestamptz,
  resolved_by uuid references auth.users(id) on delete set null,

  -- One report per person per recipe, resolved ones included: the
  -- admin has already seen what they had to say.
  unique (recipe_id, reporter_id)
);

create index recipe_reports_open_idx on recipe_reports (created_at)
  where status = 'open';

alter table recipe_reports enable row level security;

-- Only a live recipe by someone else. The subquery runs under the
-- reader's own policies, and a live recipe is readable by everyone.
create policy "Report a live recipe"
on recipe_reports for insert to authenticated
with check (
  reporter_id = auth.uid()
  and exists (
    select 1 from user_recipes r
    where r.id = recipe_id
      and r.visibility = 'public'
      and r.review_status = 'approved'
      and r.user_id <> auth.uid()
  )
);

-- Reporters see their own (that is how the button knows to say
-- "Reported"); admins see all. Resolving goes through the RPCs.
create policy "See your reports, or all as admin"
on recipe_reports for select to authenticated
using (reporter_id = auth.uid() or is_app_admin());

-- ---------------------------------------------------------------------
-- Admin decisions
--
-- Security definer: the row belongs to the author, whose update policy
-- would otherwise refuse. Each checks the caller is an admin itself.
-- ---------------------------------------------------------------------

create or replace function public.approve_recipe(p_recipe_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_app_admin() then
    raise exception 'Only an admin can approve a recipe' using errcode = '42501';
  end if;

  perform set_config('cookedup.system_write', 'on', true);
  update user_recipes
  set review_status = 'approved',
      review_note = null,
      reviewed_at = now(),
      reviewed_by = auth.uid()
  where id = p_recipe_id
    and visibility = 'public'
    and review_status = 'pending';
  perform set_config('cookedup.system_write', '', true);

  if not found then
    raise exception 'Recipe is not waiting for review' using errcode = 'P0002';
  end if;
end;
$$;

-- From the queue (pending) or from a report (approved, live). Either
-- way the recipe goes private with the note, and its open reports are
-- closed with it.
create or replace function public.reject_recipe(p_recipe_id uuid, p_note text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  note text := btrim(coalesce(p_note, ''));
begin
  if not is_app_admin() then
    raise exception 'Only an admin can reject a recipe' using errcode = '42501';
  end if;
  if length(note) = 0 then
    raise exception 'A rejection needs a note for the author' using errcode = '22023';
  end if;

  perform set_config('cookedup.system_write', 'on', true);
  update user_recipes
  set visibility = 'private',
      review_status = 'rejected',
      review_note = left(note, 500),
      reviewed_at = now(),
      reviewed_by = auth.uid()
  where id = p_recipe_id
    and visibility = 'public'
    and review_status in ('pending', 'approved');
  perform set_config('cookedup.system_write', '', true);

  if not found then
    raise exception 'Recipe is not public' using errcode = 'P0002';
  end if;

  update recipe_reports
  set status = 'resolved', resolved_at = now(), resolved_by = auth.uid()
  where recipe_id = p_recipe_id and status = 'open';
end;
$$;

create or replace function public.dismiss_reports(p_recipe_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_app_admin() then
    raise exception 'Only an admin can dismiss reports' using errcode = '42501';
  end if;

  update recipe_reports
  set status = 'resolved', resolved_at = now(), resolved_by = auth.uid()
  where recipe_id = p_recipe_id and status = 'open';
end;
$$;

-- ---------------------------------------------------------------------
-- Who may read a recipe: public now means approved as well, and admins
-- see everything so they can open what is in the queue.
-- ---------------------------------------------------------------------

drop policy "Read recipes you may see" on user_recipes;
create policy "Read recipes you may see"
on user_recipes for select to public
using (
  (visibility = 'public' and review_status = 'approved')
  or user_id = auth.uid()
  or is_household_member(household_id)
  or has_share('user_recipe', id, 'viewer')
  or is_app_admin()
);
