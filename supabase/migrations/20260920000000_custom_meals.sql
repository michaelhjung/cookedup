-- ---------------------------------------------------------------------
-- Custom meals
--
-- Not every planned meal is a recipe. "Leftovers", "eating out", or
-- "meal prep" is just a label on a calendar cell with nothing behind
-- it, so an entry now holds either a recipe reference or a free-text
-- title — never both, never neither. Series carry the same choice, since
-- every occurrence is stamped from the series row.
--
-- Keeping these as text on the entry, rather than as pretend rows in
-- the recipe library, means the library stays a library: searching,
-- starring, and any future user-submitted recipes never have to filter
-- "Leftovers" out.
-- ---------------------------------------------------------------------

alter table meal_plan_entries
  alter column recipe_id drop not null,
  add column title text;

alter table meal_plan_entries
  add constraint meal_plan_entries_recipe_or_title_check
  check (
    (recipe_id is not null and title is null)
    or (recipe_id is null and title is not null and btrim(title) <> '')
  );

-- The existing unique (plan, date, slot, recipe_id) treats nulls as
-- distinct, so it says nothing about custom entries. This index does
-- the same job for them: "Leftovers" can't be added to the same meal
-- twice, whatever its capitalisation.
create unique index meal_plan_entries_custom_title_key
  on meal_plan_entries (plan_id, date, slot, lower(btrim(title)))
  where recipe_id is null;

alter table meal_plan_series
  alter column recipe_id drop not null,
  add column title text;

alter table meal_plan_series
  add constraint meal_plan_series_recipe_or_title_check
  check (
    (recipe_id is not null and title is null)
    or (recipe_id is null and title is not null and btrim(title) <> '')
  );

-- ---------------------------------------------------------------------
-- The series and copy functions, re-created to carry `title` along.
--
-- Their `on conflict` clauses drop the explicit target: with two unique
-- rules on the table (one per kind of entry), a bare DO NOTHING is the
-- only form that skips a duplicate of either kind.
-- ---------------------------------------------------------------------

create or replace function public.create_entry_series(
  p_entry_id       uuid,
  p_frequency      text,
  p_interval_weeks smallint,
  p_weekdays       smallint[],
  p_month_day      smallint,
  p_week_ordinal   smallint,
  p_end_date       date,
  p_dates          date[]
)
returns uuid
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_entry  meal_plan_entries%rowtype;
  v_series uuid;
begin
  select * into v_entry from meal_plan_entries where id = p_entry_id;

  if not found then
    raise exception 'Entry not found';
  end if;

  if v_entry.series_id is not null then
    raise exception 'That meal already repeats';
  end if;

  insert into meal_plan_series (
    plan_id, recipe_id, title, slot, frequency, interval_weeks, weekdays,
    month_day, week_ordinal, start_date, end_date
  )
  values (
    v_entry.plan_id, v_entry.recipe_id, v_entry.title, v_entry.slot,
    p_frequency, p_interval_weeks, coalesce(p_weekdays, '{}'), p_month_day,
    p_week_ordinal, v_entry.date, p_end_date
  )
  returning id into v_series;

  update meal_plan_entries set series_id = v_series where id = p_entry_id;

  -- The same meal already sitting in one of these cells (planned by
  -- hand earlier) is left alone rather than failing the whole series.
  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, series_id)
  select v_entry.plan_id, v_entry.recipe_id, v_entry.title, d, v_entry.slot,
         v_entry.position, v_series
  from unnest(p_dates) as d
  where d <> v_entry.date
  on conflict do nothing;

  return v_series;
end;
$$;

create or replace function public.shift_series_entries(
  p_series_id uuid,
  p_from_date date,
  p_day_delta integer,
  p_slot      text
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_series    meal_plan_series%rowtype;
  v_moved     meal_plan_entries[];
  v_target    uuid;
  v_weekdays  smallint[];
  v_month_day smallint;
begin
  select * into v_series from meal_plan_series where id = p_series_id;

  if not found then
    raise exception 'Series not found';
  end if;

  if p_slot is null or p_slot = '' then
    raise exception 'A meal slot is required';
  end if;

  select coalesce(array_agg((((w + p_day_delta) % 7 + 7) % 7)::smallint), '{}')
  into v_weekdays
  from unnest(v_series.weekdays) as w;

  v_month_day := case
    when v_series.month_day is null then null
    else (((v_series.month_day - 1 + p_day_delta) % 31 + 31) % 31 + 1)::smallint
  end;

  select coalesce(array_agg(e), '{}')
  into v_moved
  from meal_plan_entries e
  where e.series_id = p_series_id and e.date >= p_from_date;

  delete from meal_plan_entries
  where series_id = p_series_id and date >= p_from_date;

  if p_from_date <= v_series.start_date then
    update meal_plan_series
    set
      slot = p_slot,
      weekdays = v_weekdays,
      month_day = v_month_day,
      start_date = start_date + p_day_delta,
      end_date = end_date + p_day_delta
    where id = p_series_id;

    v_target := p_series_id;
  else
    insert into meal_plan_series (
      plan_id, recipe_id, title, slot, frequency, interval_weeks, weekdays,
      month_day, week_ordinal, start_date, end_date
    )
    values (
      v_series.plan_id, v_series.recipe_id, v_series.title, p_slot,
      v_series.frequency, v_series.interval_weeks, v_weekdays, v_month_day,
      v_series.week_ordinal, p_from_date + p_day_delta,
      v_series.end_date + p_day_delta
    )
    returning id into v_target;

    update meal_plan_series
    set end_date = p_from_date - 1
    where id = p_series_id;
  end if;

  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, series_id)
  select (m).plan_id, (m).recipe_id, (m).title, (m).date + p_day_delta, p_slot,
         (m).position, v_target
  from unnest(v_moved) as m
  on conflict do nothing;
end;
$$;

create or replace function public.update_series_rule(
  p_series_id      uuid,
  p_from_date      date,
  p_frequency      text,
  p_interval_weeks smallint,
  p_weekdays       smallint[],
  p_month_day      smallint,
  p_week_ordinal   smallint,
  p_end_date       date,
  p_dates          date[]
)
returns uuid
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_series   meal_plan_series%rowtype;
  v_position smallint;
  v_target   uuid;
begin
  select * into v_series from meal_plan_series where id = p_series_id;

  if not found then
    raise exception 'Series not found';
  end if;

  -- Keep the rebuilt meals where the edited one sat within its slot.
  select position into v_position
  from meal_plan_entries
  where series_id = p_series_id and date >= p_from_date
  order by date
  limit 1;

  delete from meal_plan_entries
  where series_id = p_series_id and date >= p_from_date;

  if p_from_date <= v_series.start_date then
    update meal_plan_series
    set
      frequency = p_frequency,
      interval_weeks = p_interval_weeks,
      weekdays = coalesce(p_weekdays, '{}'),
      month_day = p_month_day,
      week_ordinal = p_week_ordinal,
      end_date = p_end_date
    where id = p_series_id;

    v_target := p_series_id;
  else
    insert into meal_plan_series (
      plan_id, recipe_id, title, slot, frequency, interval_weeks, weekdays,
      month_day, week_ordinal, start_date, end_date
    )
    values (
      v_series.plan_id, v_series.recipe_id, v_series.title, v_series.slot,
      p_frequency, p_interval_weeks, coalesce(p_weekdays, '{}'), p_month_day,
      p_week_ordinal, p_from_date, p_end_date
    )
    returning id into v_target;

    update meal_plan_series
    set end_date = p_from_date - 1
    where id = p_series_id;
  end if;

  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, series_id)
  select v_series.plan_id, v_series.recipe_id, v_series.title, d, v_series.slot,
         coalesce(v_position, 0), v_target
  from unnest(p_dates) as d
  on conflict do nothing;

  return v_target;
end;
$$;

create or replace function public.copy_plan_entries(
  p_plan_id   uuid,
  p_from      date,
  p_to        date,
  p_day_delta integer
)
returns integer
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_count integer;
begin
  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position)
  select plan_id, recipe_id, title, date + p_day_delta, slot, position
  from meal_plan_entries
  where plan_id = p_plan_id and date between p_from and p_to
  on conflict do nothing;

  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

-- The share link and calendar feed: a custom meal has no recipe row to
-- join, so the join becomes outer and the title rides alongside.
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
          'recipe', r.data,
          'title', e.title
        )
        order by e.date, e.slot, e.position
      )
      from meal_plan_entries e
      left join recipes r on r.id = e.recipe_id
      where e.plan_id = p.id
        and (p_start is null or e.date >= p_start)
        and (p_end is null or e.date <= p_end)
    ), '[]'::jsonb)
  )
  from meal_plans p
  where p.share_token = p_token;
$$;
