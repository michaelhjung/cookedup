-- ---------------------------------------------------------------------
-- Monthly repeats and editing a series
--
-- A monthly rule is either "on the 14th" (month_day) or "on the 2nd
-- Tuesday" (week_ordinal + a single weekday in `weekdays`). Months that
-- lack the day are skipped, so "on the 31st" simply misses February.
--
-- Editing a rule works like moving one: everything from the chosen
-- occurrence onward is rebuilt from the new rule, splitting the series
-- when the edit starts part-way through.
-- ---------------------------------------------------------------------

alter table meal_plan_series
  drop constraint meal_plan_series_frequency_check;

alter table meal_plan_series
  add constraint meal_plan_series_frequency_check
  check (frequency in ('daily', 'weekly', 'monthly'));

alter table meal_plan_series
  add column month_day    smallint check (month_day between 1 and 31),
  -- 1..4 = first..fourth, -1 = last.
  add column week_ordinal smallint check (week_ordinal in (1, 2, 3, 4, -1));

alter table meal_plan_series
  add constraint meal_plan_series_monthly_shape_check
  check (
    frequency <> 'monthly'
    or (month_day is not null) <> (week_ordinal is not null)
  );

-- The old signature is replaced rather than overloaded, so a stale
-- client can't keep creating series without the monthly fields.
drop function if exists public.create_entry_series(
  uuid, text, smallint, smallint[], date, date[]
);

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
    plan_id, recipe_id, slot, frequency, interval_weeks, weekdays,
    month_day, week_ordinal, start_date, end_date
  )
  values (
    v_entry.plan_id, v_entry.recipe_id, v_entry.slot, p_frequency,
    p_interval_weeks, coalesce(p_weekdays, '{}'), p_month_day,
    p_week_ordinal, v_entry.date, p_end_date
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

grant execute on function public.create_entry_series(
  uuid, text, smallint, smallint[], smallint, smallint, date, date[]
) to authenticated;

-- Same contract as before, now carrying the monthly fields along: a
-- day-of-month rule shifts by the same number of days (wrapping past
-- the 31st), a weekday rule shifts its weekday, and the ordinal is
-- left alone, so "the 2nd Tuesday" dragged a day later reads "the 2nd
-- Wednesday".
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
      plan_id, recipe_id, slot, frequency, interval_weeks, weekdays,
      month_day, week_ordinal, start_date, end_date
    )
    values (
      v_series.plan_id, v_series.recipe_id, p_slot, v_series.frequency,
      v_series.interval_weeks, v_weekdays, v_month_day,
      v_series.week_ordinal, p_from_date + p_day_delta,
      v_series.end_date + p_day_delta
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

-- Replaces the rule from p_from_date onward. The occurrences from that
-- date are dropped and re-created from p_dates, which the app expanded
-- from the new rule. Editing from the first occurrence rewrites the
-- series in place; editing from later on splits it, as a move does, so
-- the earlier meals keep their old rule.
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
      plan_id, recipe_id, slot, frequency, interval_weeks, weekdays,
      month_day, week_ordinal, start_date, end_date
    )
    values (
      v_series.plan_id, v_series.recipe_id, v_series.slot, p_frequency,
      p_interval_weeks, coalesce(p_weekdays, '{}'), p_month_day,
      p_week_ordinal, p_from_date, p_end_date
    )
    returning id into v_target;

    update meal_plan_series
    set end_date = p_from_date - 1
    where id = p_series_id;
  end if;

  insert into meal_plan_entries (plan_id, recipe_id, date, slot, position, series_id)
  select v_series.plan_id, v_series.recipe_id, d, v_series.slot,
         coalesce(v_position, 0), v_target
  from unnest(p_dates) as d
  on conflict (plan_id, date, slot, recipe_id) do nothing;

  return v_target;
end;
$$;

grant execute on function public.update_series_rule(
  uuid, date, text, smallint, smallint[], smallint, smallint, date, date[]
) to authenticated;
