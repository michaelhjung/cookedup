-- ---------------------------------------------------------------------
-- Repeating meals
--
-- A repeat rule is expanded into ordinary entry rows by the app, so the
-- calendar feed, sharing, and drag-and-drop never have to understand
-- recurrence. The series row exists so the rule can be shown back
-- ("Every week on Mon, Wed until Oct 31") and so "this and following" /
-- "all" edits know which rows belong together.
-- ---------------------------------------------------------------------

create table meal_plan_series (
  id             uuid primary key default gen_random_uuid(),
  plan_id        uuid not null references meal_plans(id) on delete cascade,
  recipe_id      uuid not null references recipes(id) on delete cascade,
  slot           text not null check (slot <> ''),
  frequency      text not null check (frequency in ('daily', 'weekly')),
  interval_weeks smallint not null default 1 check (interval_weeks in (1, 2)),
  -- 0 = Sunday .. 6 = Saturday. Empty for daily rules.
  weekdays       smallint[] not null default '{}',
  start_date     date not null,
  end_date       date not null,
  created_at     timestamptz not null default now(),
  check (end_date >= start_date)
);

create index meal_plan_series_plan_id_idx
  on meal_plan_series (plan_id);

alter table meal_plan_entries
  add column series_id uuid
  references meal_plan_series(id) on delete cascade;

create index meal_plan_entries_series_id_idx
  on meal_plan_entries (series_id);

alter table meal_plan_series enable row level security;

create policy "Read series of readable plans"
on meal_plan_series for select to authenticated
using (can_read_plan(plan_id));

create policy "Editors manage series"
on meal_plan_series for all to authenticated
using (can_edit_plan(plan_id))
with check (can_edit_plan(plan_id));

-- Turns one existing entry into the first occurrence of a series and
-- inserts the rest. The dates come from the app, which already knows
-- how to expand a rule; this just makes the whole thing one transaction
-- so a failure part-way can't leave a series with half its meals.
--
-- `security invoker`: every insert below still goes through RLS.
create or replace function public.create_entry_series(
  p_entry_id       uuid,
  p_frequency      text,
  p_interval_weeks smallint,
  p_weekdays       smallint[],
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
    plan_id, recipe_id, slot, frequency, interval_weeks, weekdays,
    start_date, end_date
  )
  values (
    v_entry.plan_id, v_entry.recipe_id, v_entry.slot, p_frequency,
    p_interval_weeks, coalesce(p_weekdays, '{}'), v_entry.date, p_end_date
  )
  returning id into v_series;

  update meal_plan_entries set series_id = v_series where id = p_entry_id;

  -- The same recipe already sitting in one of these cells (planned by
  -- hand earlier) is left alone rather than failing the whole series.
  insert into meal_plan_entries (plan_id, recipe_id, date, slot, position, series_id)
  select v_entry.plan_id, v_entry.recipe_id, d, v_entry.slot, v_entry.position, v_series
  from unnest(p_dates) as d
  where d <> v_entry.date
  on conflict (plan_id, date, slot, recipe_id) do nothing;

  return v_series;
end;
$$;

grant execute on function public.create_entry_series(uuid, text, smallint, smallint[], date, date[])
  to authenticated;

-- "This and following" (or "all", with p_from_date on or before the
-- series start): every occurrence on or after p_from_date moves by the
-- same number of days and into the same slot.
--
-- Moving part of a series splits it, the way Google Calendar does: the
-- earlier occurrences keep the original rule (now ending the day before
-- the split) and the moved ones get a new series with the shifted rule,
-- so a later "all in this series" acts on the right group. Moving the
-- whole series just shifts its rule in place.
--
-- Rows are re-inserted rather than updated because the unique
-- constraint is checked per row: a daily series shifted by one day
-- would collide with itself part-way through a single UPDATE.
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
  v_series   meal_plan_series%rowtype;
  v_moved    meal_plan_entries[];
  v_target   uuid;
  v_weekdays smallint[];
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
      start_date = start_date + p_day_delta,
      end_date = end_date + p_day_delta
    where id = p_series_id;

    v_target := p_series_id;
  else
    insert into meal_plan_series (
      plan_id, recipe_id, slot, frequency, interval_weeks, weekdays,
      start_date, end_date
    )
    values (
      v_series.plan_id, v_series.recipe_id, p_slot, v_series.frequency,
      v_series.interval_weeks, v_weekdays,
      p_from_date + p_day_delta, v_series.end_date + p_day_delta
    )
    returning id into v_target;

    update meal_plan_series
    set end_date = p_from_date - 1
    where id = p_series_id;
  end if;

  insert into meal_plan_entries (plan_id, recipe_id, date, slot, position, series_id)
  select (m).plan_id, (m).recipe_id, (m).date + p_day_delta, p_slot, (m).position, v_target
  from unnest(v_moved) as m
  on conflict (plan_id, date, slot, recipe_id) do nothing;
end;
$$;

grant execute on function public.shift_series_entries(uuid, date, integer, text)
  to authenticated;

-- "This and following" delete: removes every occurrence on or after
-- p_from_date and shortens the rule to match. Deleting the whole series
-- row (cascading to its entries) is what "all" does, and needs no
-- function.
create or replace function public.end_series_before(
  p_series_id uuid,
  p_from_date date
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_start date;
begin
  select start_date into v_start from meal_plan_series where id = p_series_id;

  if not found then
    raise exception 'Series not found';
  end if;

  if p_from_date <= v_start then
    delete from meal_plan_series where id = p_series_id;
    return;
  end if;

  delete from meal_plan_entries
  where series_id = p_series_id and date >= p_from_date;

  update meal_plan_series
  set end_date = p_from_date - 1
  where id = p_series_id;
end;
$$;

grant execute on function public.end_series_before(uuid, date) to authenticated;

-- ---------------------------------------------------------------------
-- Copying a stretch of the calendar
--
-- "Copy last week into this week" is a single INSERT ... SELECT with the
-- dates shifted. Copies are plain entries, not part of any series, and
-- a recipe already in the target cell is skipped rather than doubled.
-- ---------------------------------------------------------------------

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
  insert into meal_plan_entries (plan_id, recipe_id, date, slot, position)
  select plan_id, recipe_id, date + p_day_delta, slot, position
  from meal_plan_entries
  where plan_id = p_plan_id and date between p_from and p_to
  on conflict (plan_id, date, slot, recipe_id) do nothing;

  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

grant execute on function public.copy_plan_entries(uuid, date, date, integer)
  to authenticated;
