-- The recipe library.
--
-- One row per user per recipe, holding the full Edamam hit as JSON plus
-- a permanent copy of its thumbnail in the recipe-images bucket (next
-- migration). A row exists because the recipe is starred, or planned in
-- a meal plan, or both — `is_starred` records which; the planner's
-- entries reference the row by id.
--
-- This table was originally created in the Supabase dashboard; this is
-- its definition as pulled from production when migrations were
-- introduced, minus a vestigial `type` column the app no longer reads.

create table recipes (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid()
             references auth.users(id) on update cascade on delete cascade,
  data       jsonb,
  is_starred boolean not null default false,
  created_at timestamptz not null default now()
);

-- One library row per user per recipe. The recipe URL (not the Edamam
-- `uri`) is the identity used everywhere else in the app already.
--
-- Lifted out of the jsonb into a stored generated column rather than
-- indexed as an expression, because PostgREST's `on_conflict` can only
-- name real columns — without this, "save this recipe" can't be written
-- as a single upsert and needs a read-then-write round trip that races.
alter table recipes
  add column recipe_url text
  generated always as (data->'recipe'->>'url') stored;

alter table recipes
  add constraint recipes_user_recipe_url_key unique (user_id, recipe_url);

alter table recipes enable row level security;

-- Users see and change only their own rows. (A second, read-only policy
-- for recipes planned in a plan shared with you comes with meal plans.)
create policy "Allow all for authenticated users"
on recipes for all to public
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
