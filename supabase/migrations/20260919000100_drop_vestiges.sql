-- Drops three things that existed in production before the schema was
-- captured as migrations, and that nothing uses any more:
--
--   * recipes.type  — pre-dates the `data` jsonb column; always null.
--   * meal_slot     — the fixed breakfast/lunch/dinner/snack enum,
--                     replaced by the per-plan `meal_plans.slots` jsonb.
--   * pgjwt         — enabled by an early Supabase default, never called.
--
-- Everything is `if exists` because a fresh local database (built from
-- the migrations above) never had them; only production does.

alter table recipes drop column if exists "type";

drop type if exists meal_slot;

drop extension if exists pgjwt;
