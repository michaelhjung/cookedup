-- ---------------------------------------------------------------------
-- User-authored recipes
--
-- A recipe someone writes themselves, with a details page inside the
-- app at /recipes/<id> rather than a link out to another site. It is
-- stored twice over in one row: proper columns for authoring and
-- (later) searching, and a `hit` jsonb built from them by trigger in
-- Edamam's shape, so recipe cards, the planner and the library take it
-- like any other recipe. That mapping lives here and nowhere else.
--
-- Visibility: private (author only), the author's household, people
-- invited by link (viewer only, through the shared `shares`/`invites`
-- tables), or public. Only the author edits.
-- ---------------------------------------------------------------------

-- ---------------------------------------------------------------------
-- Profiles: a public byline
--
-- Public recipes say who wrote them, and an email (even its local
-- part) is not something to print on a public page. Made lazily the
-- first time someone saves a recipe.
-- ---------------------------------------------------------------------

create table profiles (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (length(btrim(display_name)) between 1 and 40),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "Bylines are public"
on profiles for select to public
using (true);

create policy "Create your own profile"
on profiles for insert to authenticated
with check (user_id = auth.uid());

create policy "Update your own profile"
on profiles for update to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

-- ---------------------------------------------------------------------
-- The recipes themselves
-- ---------------------------------------------------------------------

-- `ingredients` is an array of lines `{ "text": "2 eggs", "food": "eggs" }`
-- (food is the linked pantry ingredient, or null) and group headings
-- `{ "heading": "For the sauce" }`. Check constraints can't hold
-- subqueries, so the shape checks are functions.
create or replace function public.count_ingredient_lines(p_ingredients jsonb)
returns integer
language sql
immutable
as $$
  select case
    when p_ingredients is null or jsonb_typeof(p_ingredients) <> 'array' then 0
    else (
      select count(*)::integer
      from jsonb_array_elements(p_ingredients) line
      where jsonb_typeof(line) = 'object'
        and line ? 'text'
        and length(btrim(line->>'text')) > 0
    )
  end;
$$;

-- `instructions` is an array of step strings.
create or replace function public.count_instruction_steps(p_instructions jsonb)
returns integer
language sql
immutable
as $$
  select case
    when p_instructions is null or jsonb_typeof(p_instructions) <> 'array' then 0
    else (
      select count(*)::integer
      from jsonb_array_elements(p_instructions) step
      where jsonb_typeof(step) = 'string'
        and length(btrim(step #>> '{}')) > 0
    )
  end;
$$;

create table user_recipes (
  id                   uuid primary key default gen_random_uuid(),
  user_id              uuid not null default auth.uid()
                       references auth.users(id) on delete cascade,
  household_id         uuid references households(id) on delete set null,

  title                text not null check (length(btrim(title)) between 1 and 120),
  description          text check (description is null or length(description) <= 2000),
  servings             integer not null check (servings between 1 and 100),
  prep_minutes         integer check (prep_minutes between 0 and 1440),
  cook_minutes         integer check (cook_minutes between 0 and 1440),

  ingredients          jsonb not null check (count_ingredient_lines(ingredients) >= 1),
  instructions         jsonb not null check (count_instruction_steps(instructions) >= 1),

  -- The same vocabularies the filter generator sends to Edamam, so a
  -- later search over these lines up with the Edamam filters.
  cuisine_types        text[] not null default '{}',
  meal_types           text[] not null default '{}',
  dish_types           text[] not null default '{}',
  diet_labels          text[] not null default '{}',
  health_labels        text[] not null default '{}',

  -- Per serving, all optional.
  calories_per_serving numeric check (calories_per_serving is null or calories_per_serving >= 0),
  protein_g            numeric check (protein_g is null or protein_g >= 0),
  carbs_g              numeric check (carbs_g is null or carbs_g >= 0),
  fat_g                numeric check (fat_g is null or fat_g >= 0),

  source_name          text check (source_name is null or length(source_name) <= 120),
  source_url           text check (source_url is null or length(source_url) <= 2000),
  notes                text check (notes is null or length(notes) <= 4000),

  -- The public URL of the upload in recipe-images, cache-busted with
  -- `?v=`; null means the placeholder tile.
  image_url            text,

  visibility           text not null default 'private'
                       check (visibility in ('private', 'public')),

  -- Built by trigger from the columns above; never written by the app.
  hit                  jsonb not null default '{}'::jsonb,

  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create index user_recipes_user_id_idx on user_recipes (user_id);
create index user_recipes_household_id_idx on user_recipes (household_id)
  where household_id is not null;
create index user_recipes_public_idx on user_recipes (created_at desc)
  where visibility = 'public';
create index user_recipes_cuisine_types_idx on user_recipes using gin (cuisine_types);
create index user_recipes_meal_types_idx on user_recipes using gin (meal_types);
create index user_recipes_dish_types_idx on user_recipes using gin (dish_types);
create index user_recipes_diet_labels_idx on user_recipes using gin (diet_labels);
create index user_recipes_health_labels_idx on user_recipes using gin (health_labels);

-- ---------------------------------------------------------------------
-- The Edamam-shaped view of a recipe
--
-- `url` is app-relative on purpose: it is local on localhost and live
-- on cookedup.app with no origin to configure, and it is what the
-- library's `recipe_url` identity is, so it must not carry anything
-- that changes when the recipe is edited (hence no title slug).
-- Edamam's `calories` is for the whole recipe, so per-serving values
-- are multiplied up to match.
-- ---------------------------------------------------------------------

create or replace function public.build_user_recipe_hit(r user_recipes)
returns jsonb
language sql
stable
set search_path = public
as $$
  with lines as (
    select
      btrim(line->>'text') as text,
      coalesce(nullif(btrim(line->>'food'), ''), btrim(line->>'text')) as food,
      ordinality
    from jsonb_array_elements(r.ingredients) with ordinality as l(line, ordinality)
    where jsonb_typeof(line) = 'object'
      and line ? 'text'
      and length(btrim(line->>'text')) > 0
  ),
  image as (
    select coalesce(r.image_url, '/recipe-placeholder.svg') as url
  ),
  author as (
    select coalesce(
      (select display_name from profiles where user_id = r.user_id),
      'A Cooked Up cook'
    ) as name
  ),
  nutrients as (
    select jsonb_strip_nulls(jsonb_build_object(
      'ENERC_KCAL', case when r.calories_per_serving is null then null else
        jsonb_build_object('label', 'Energy', 'quantity', r.calories_per_serving * r.servings, 'unit', 'kcal') end,
      'PROCNT', case when r.protein_g is null then null else
        jsonb_build_object('label', 'Protein', 'quantity', r.protein_g * r.servings, 'unit', 'g') end,
      'CHOCDF', case when r.carbs_g is null then null else
        jsonb_build_object('label', 'Carbs', 'quantity', r.carbs_g * r.servings, 'unit', 'g') end,
      'FAT', case when r.fat_g is null then null else
        jsonb_build_object('label', 'Fat', 'quantity', r.fat_g * r.servings, 'unit', 'g') end
    )) as value
  )
  select jsonb_build_object(
    'recipe', jsonb_build_object(
      'uri', 'cookedup:recipe/' || r.id,
      'label', btrim(r.title),
      'image', (select url from image),
      'images', jsonb_build_object(
        'THUMBNAIL', jsonb_build_object('url', (select url from image), 'width', 100, 'height', 100),
        'SMALL',     jsonb_build_object('url', (select url from image), 'width', 200, 'height', 200),
        'REGULAR',   jsonb_build_object('url', (select url from image), 'width', 300, 'height', 300),
        'LARGE',     jsonb_build_object('url', (select url from image), 'width', 600, 'height', 600)
      ),
      'source', (select name from author),
      'url', '/recipes/' || r.id,
      'shareAs', '/recipes/' || r.id,
      'yield', r.servings,
      'dietLabels', to_jsonb(r.diet_labels),
      'healthLabels', to_jsonb(r.health_labels),
      'cautions', '[]'::jsonb,
      'ingredientLines', coalesce(
        (select jsonb_agg(text order by ordinality) from lines), '[]'::jsonb),
      'ingredients', coalesce(
        (select jsonb_agg(jsonb_build_object(
          'text', text,
          'quantity', 0,
          'measure', '',
          'food', food,
          'weight', 0,
          'foodCategory', '',
          'foodId', ''
        ) order by ordinality) from lines), '[]'::jsonb),
      'calories', coalesce(r.calories_per_serving, 0) * r.servings,
      'totalCO2Emissions', 0,
      'co2EmissionsClass', '',
      'totalWeight', 0,
      'totalTime', coalesce(r.prep_minutes, 0) + coalesce(r.cook_minutes, 0),
      'cuisineType', to_jsonb(r.cuisine_types),
      'mealType', to_jsonb(r.meal_types),
      'dishType', to_jsonb(r.dish_types),
      'totalNutrients', (select value from nutrients),
      'totalDaily', '{}'::jsonb,
      'digest', '[]'::jsonb
    ),
    '_links', jsonb_build_object(
      'self', jsonb_build_object('title', 'Self', 'href', '/recipes/' || r.id)
    )
  );
$$;

create or replace function public.user_recipes_before_write()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at := now();
  new.hit := build_user_recipe_hit(new);
  return new;
end;
$$;

create trigger user_recipes_build_hit
before insert or update on user_recipes
for each row execute function user_recipes_before_write();

-- ---------------------------------------------------------------------
-- Keeping library snapshots fresh
--
-- Starring or planning a user recipe stores its hit in `recipes.data`
-- like any Edamam hit. This column pulls the recipe id back out so an
-- edit can find every snapshot of it; it is generated, not a foreign
-- key, so a deleted recipe leaves the snapshots standing (the way an
-- Edamam recipe that vanishes does) and the library needs no new write
-- path.
-- ---------------------------------------------------------------------

alter table recipes
  add column user_recipe_id uuid
  generated always as (
    case
      when data->'recipe'->>'uri' like 'cookedup:recipe/%'
      then substr(data->'recipe'->>'uri', 17)::uuid
    end
  ) stored;

create index recipes_user_recipe_id_idx on recipes (user_recipe_id)
  where user_recipe_id is not null;

-- The snapshots belong to other users, so this runs as definer.
create or replace function public.refresh_user_recipe_snapshots()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update recipes
  set data = new.hit
  where user_recipe_id = new.id
    and data is distinct from new.hit;
  return null;
end;
$$;

-- Not `update of hit`: a column list only matches columns named in the
-- UPDATE statement itself, and `hit` is only ever set by the trigger
-- above. The WHEN clause does the narrowing instead.
create trigger user_recipes_refresh_snapshots
after update on user_recipes
for each row
when (old.hit is distinct from new.hit)
execute function refresh_user_recipe_snapshots();

-- A new display name reaches the bylines by touching the author's
-- recipes; their before trigger rebuilds each hit and the one above
-- carries it on to the snapshots. AFTER, not before: the rebuild reads
-- the profile row, which a before trigger hasn't written yet.
create or replace function public.profiles_touch_recipes()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  update user_recipes set updated_at = now() where user_id = new.user_id;
  return null;
end;
$$;

create trigger profiles_touch_recipes
after update on profiles
for each row
when (old.display_name is distinct from new.display_name)
execute function profiles_touch_recipes();

create or replace function public.profiles_before_write()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on profiles
for each row execute function profiles_before_write();

-- ---------------------------------------------------------------------
-- Sharing: the same tables as plans, pantries and lists
-- ---------------------------------------------------------------------

alter table shares drop constraint shares_resource_kind_check;
alter table shares add constraint shares_resource_kind_check
  check (resource_kind in ('meal_plan', 'pantry', 'grocery_list', 'user_recipe'));

-- Nobody but the author edits a recipe.
alter table shares add constraint shares_recipe_role_is_viewer
  check (resource_kind <> 'user_recipe' or role = 'viewer');

alter table invites drop constraint invites_resource_kind_check;
alter table invites add constraint invites_resource_kind_check
  check (resource_kind in ('meal_plan', 'pantry', 'grocery_list', 'household', 'user_recipe'));

alter table invites drop constraint invites_role_matches_kind;
alter table invites add constraint invites_role_matches_kind check (
  (resource_kind = 'household' and role in ('member', 'admin'))
  or (resource_kind = 'user_recipe' and role = 'viewer')
  or (resource_kind in ('meal_plan', 'pantry', 'grocery_list') and role in ('viewer', 'editor'))
);

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
    when 'user_recipe' then exists (
      select 1 from user_recipes o
      where o.id = p_id and (o.user_id = auth.uid() or is_household_member(o.household_id))
    )
    else false
  end;
$$;

-- Who may reshare or delete. For a recipe that is the author alone: a
-- household admin does not get to manage someone else's writing.
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
    when 'user_recipe' then exists (
      select 1 from user_recipes o
      where o.id = p_id and o.user_id = auth.uid()
    )
    else false
  end;
$$;

create trigger user_recipes_delete_shares
after delete on user_recipes
for each row execute function delete_resource_shares('user_recipe');

-- ---------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------

alter table user_recipes enable row level security;

-- `to public` so a public recipe's link works signed out. The other
-- three branches are all false for an anonymous visitor.
create policy "Read recipes you may see"
on user_recipes for select to public
using (
  visibility = 'public'
  or user_id = auth.uid()
  or is_household_member(household_id)
  or has_share('user_recipe', id, 'viewer')
);

create policy "Write your own recipes"
on user_recipes for insert to authenticated
with check (
  user_id = auth.uid()
  and (household_id is null or is_household_member(household_id))
);

create policy "Edit your own recipes"
on user_recipes for update to authenticated
using (user_id = auth.uid())
with check (
  user_id = auth.uid()
  and (household_id is null or is_household_member(household_id))
);

create policy "Delete your own recipes"
on user_recipes for delete to authenticated
using (user_id = auth.uid());

-- ---------------------------------------------------------------------
-- Storage: removing a photo
--
-- The bucket had insert and update policies only; deleting a recipe
-- (or swapping its photo for none) now needs to remove the object.
-- ---------------------------------------------------------------------

create policy "Users can delete their own recipe images"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'recipe-images'
  and (storage.foldername(name))[1] = auth.uid()::text
);
