-- ---------------------------------------------------------------------
-- Per-meal times
--
-- A plan's slots each carry a time ("Dinner, 18:00"), which is the
-- right default but not always the truth: Friday's dinner is at 19:30
-- because of practice. An entry can now override its slot's time.
--
-- The override is a nullable column rather than a required one so that
-- retiming a slot in settings still moves every meal that hasn't been
-- given its own time, which is what "the default changed" should mean.
-- Null means "whenever the slot is". Local wall-clock, same as the
-- slot times, so the calendar feed stays timezone-free.
-- ---------------------------------------------------------------------

alter table meal_plan_entries
  add column "time" text
  constraint meal_plan_entries_time_format_check
  check ("time" is null or "time" ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$');

-- ---------------------------------------------------------------------
-- The series and copy functions, re-created to carry `time` along.
--
-- Series don't store a time of their own: each occurrence keeps its
-- own, the way `position` works. Starting a series stamps the anchor's
-- time on every occurrence; shifting one moves each row's time with it
-- unless the slot changes, in which case the override is dropped (a
-- "19:30" that belonged to dinner means nothing under lunch); rebuilding
-- one from a new rule takes the time of the first rebuilt occurrence,
-- exactly as it does for position.
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
  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, "time", series_id)
  select v_entry.plan_id, v_entry.recipe_id, v_entry.title, d, v_entry.slot,
         v_entry.position, v_entry."time", v_series
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
  v_keep_time boolean;
begin
  select * into v_series from meal_plan_series where id = p_series_id;

  if not found then
    raise exception 'Series not found';
  end if;

  if p_slot is null or p_slot = '' then
    raise exception 'A meal slot is required';
  end if;

  v_keep_time := p_slot = v_series.slot;

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

  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, "time", series_id)
  select (m).plan_id, (m).recipe_id, (m).title, (m).date + p_day_delta, p_slot,
         (m).position, case when v_keep_time then (m)."time" else null end, v_target
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
  v_time     text;
  v_target   uuid;
begin
  select * into v_series from meal_plan_series where id = p_series_id;

  if not found then
    raise exception 'Series not found';
  end if;

  -- Keep the rebuilt meals where, and when, the edited one sat.
  select position, "time" into v_position, v_time
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

  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, "time", series_id)
  select v_series.plan_id, v_series.recipe_id, v_series.title, d, v_series.slot,
         coalesce(v_position, 0), v_time, v_target
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
  insert into meal_plan_entries (plan_id, recipe_id, title, date, slot, position, "time")
  select plan_id, recipe_id, title, date + p_day_delta, slot, position, "time"
  from meal_plan_entries
  where plan_id = p_plan_id and date between p_from and p_to
  on conflict do nothing;

  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

-- The share link and calendar feed need the override to put the meal
-- at the right time.
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
          'time', e."time",
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
