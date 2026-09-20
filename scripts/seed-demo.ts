/**
 * Rebuilds the local demo account.
 *
 * Everything is written the way the app writes it — recipes as library
 * rows in Edamam's shape with their image in the recipe-images bucket,
 * meals as plan entries, the repeating breakfast through the
 * create_entry_series RPC, the second account through an invite it
 * accepts itself — so the demo cannot drift into a shape the product
 * could never produce. Rows are written signed in as their owner, so RLS
 * is exercised rather than bypassed; the service-role key is used only
 * to create and remove the users.
 *
 * Local only, and it says so out loud: it refuses to run against any
 * host but localhost, and it never deletes anything except the demo
 * accounts and what they own.
 */
import { readFile } from "node:fs/promises";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { DEMO_LOGIN, DEMO_SECOND_EMAIL } from "../src/lib/auth/demo.ts";
import {
  addDays,
  parseISODate,
  startOfWeek,
  todayISO,
} from "../src/lib/mealPlan/dates.ts";
import {
  buildDemoHit,
  DEMO_RECIPES,
  DEMO_WEEK,
  type DemoRecipeKey,
} from "./demo-data.ts";

config({ path: ".env.local" });

const RECIPE_IMAGES_BUCKET = "recipe-images";
const IMAGES_DIR = new URL("../supabase/seed/images/", import.meta.url);

const DEMO = {
  password: DEMO_LOGIN.password,
  owner: DEMO_LOGIN.email,
  friend: DEMO_SECOND_EMAIL,
  planName: "This week",
  /** Weekday breakfasts repeat for four weeks from this Monday. */
  repeatWeeks: 4,
} as const;

const createClients = () => {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !anonKey || !serviceKey)
    throw new Error(
      "SUPABASE_URL, SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local",
    );

  const host = new URL(url).hostname;
  if (host !== "127.0.0.1" && host !== "localhost")
    throw new Error(
      `refusing to seed ${host}: the demo account is for local development only`,
    );

  return {
    admin: createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    }),
    signIn: async (email: string): Promise<SupabaseClient> => {
      const client = createClient(url, anonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      const { error } = await client.auth.signInWithPassword({
        email,
        password: DEMO.password,
      });
      if (error) throw error;
      return client;
    },
  };
};

const fail = (step: string, error: { message: string } | null): void => {
  if (error) throw new Error(`${step}: ${error.message}`);
};

/** The row a `.single()` query returned, or a clear error about why not. */
const unwrap = <T>(
  step: string,
  result: { data: T | null; error: { message: string } | null },
): T => {
  fail(step, result.error);
  if (result.data === null) throw new Error(`${step}: no row returned`);
  return result.data;
};

/** Removes the previous demo accounts and everything they own. */
const clearDemoAccounts = async (admin: SupabaseClient): Promise<void> => {
  const { data, error } = await admin.auth.admin.listUsers({ perPage: 1000 });
  fail("listUsers", error);

  const demoEmails = new Set<string>([DEMO.owner, DEMO.friend]);
  const demoUsers = (data?.users ?? []).filter((user) =>
    demoEmails.has(user.email ?? ""),
  );

  for (const user of demoUsers) {
    // Plans cascade to their entries, series, shares and invites.
    await admin.from("meal_plans").delete().eq("owner_id", user.id);
    await admin.from("recipes").delete().eq("user_id", user.id);

    const { data: objects } = await admin.storage
      .from(RECIPE_IMAGES_BUCKET)
      .list(user.id);
    const paths = (objects ?? []).map((object) => `${user.id}/${object.name}`);
    if (paths.length > 0)
      await admin.storage.from(RECIPE_IMAGES_BUCKET).remove(paths);

    const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
    fail("deleteUser", deleteError);
  }
};

/**
 * Uploads the recipe's placeholder image under the user's folder, the
 * way persistRecipeImage does, and stores the library row pointing at it.
 * Resolves to the row id, which plan entries reference.
 */
const seedRecipe = async (
  client: SupabaseClient,
  userId: string,
  key: DemoRecipeKey,
): Promise<string> => {
  const recipe = DEMO_RECIPES[key];
  const file = await readFile(new URL(`${recipe.slug}.jpg`, IMAGES_DIR));
  const path = `${userId}/demo_${recipe.slug.replace(/-/g, "_")}.jpg`;

  const { error: uploadError } = await client.storage
    .from(RECIPE_IMAGES_BUCKET)
    .upload(path, file, { contentType: "image/jpeg", upsert: true });
  fail(`upload ${recipe.slug}`, uploadError);

  const {
    data: { publicUrl },
  } = client.storage.from(RECIPE_IMAGES_BUCKET).getPublicUrl(path);

  const row = unwrap(
    `insert ${recipe.slug}`,
    await client
      .from("recipes")
      .insert({
        user_id: userId,
        data: buildDemoHit(recipe, publicUrl),
        is_starred: recipe.isStarred,
      })
      .select("id")
      .single<{ id: string }>(),
  );

  return row.id;
};

/** The weekdays (Mon–Fri) from `monday` for `weeks` weeks, inclusive. */
const weekdayDates = (monday: string, weeks: number): string[] =>
  Array.from({ length: weeks * 7 }, (_, index) =>
    addDays(monday, index),
  ).filter((date) => {
    const weekday = parseISODate(date).getDay();
    return weekday >= 1 && weekday <= 5;
  });

export const seedDemo = async ({
  today = todayISO(),
  log = false,
}: { today?: string; log?: boolean } = {}): Promise<void> => {
  const { admin, signIn } = createClients();
  const say = (message: string) => log && console.log(message);

  await clearDemoAccounts(admin);

  for (const email of [DEMO.owner, DEMO.friend]) {
    const { error } = await admin.auth.admin.createUser({
      email,
      password: DEMO.password,
      email_confirm: true,
    });
    fail(`createUser ${email}`, error);
  }
  say("created two users");

  const owner = await signIn(DEMO.owner);
  const {
    data: { user: ownerUser },
  } = await owner.auth.getUser();
  if (!ownerUser) throw new Error("owner sign-in returned no user");

  const recipeIds = {} as Record<DemoRecipeKey, string>;
  for (const key of Object.keys(DEMO_RECIPES) as DemoRecipeKey[]) {
    recipeIds[key] = await seedRecipe(owner, ownerUser.id, key);
  }
  say(`added ${Object.keys(recipeIds).length} recipes to the library`);

  const plan = unwrap(
    "create plan",
    await owner
      .from("meal_plans")
      .insert({
        owner_id: ownerUser.id,
        name: DEMO.planName,
        share_token: crypto.randomUUID(),
      })
      .select("id")
      .single<{ id: string }>(),
  );

  const monday = startOfWeek(today);
  const entries = DEMO_WEEK.map((meal) => ({
    plan_id: plan.id,
    recipe_id: recipeIds[meal.recipe],
    date: addDays(monday, meal.day),
    slot: meal.slot,
    position: 0,
  }));
  const { error: entriesError } = await owner
    .from("meal_plan_entries")
    .insert(entries);
  fail("insert entries", entriesError);

  // Overnight oats every weekday, through the same RPC the "Repeat"
  // menu calls, so the series machinery is exercised too.
  const firstOats = unwrap(
    "insert first breakfast",
    await owner
      .from("meal_plan_entries")
      .insert({
        plan_id: plan.id,
        recipe_id: recipeIds.overnightOats,
        date: monday,
        slot: "breakfast",
        position: 0,
      })
      .select("id")
      .single<{ id: string }>(),
  );

  const repeatEnd = addDays(monday, DEMO.repeatWeeks * 7 - 1);
  const { error: seriesError } = await owner.rpc("create_entry_series", {
    p_entry_id: firstOats.id,
    p_frequency: "weekly",
    p_interval_weeks: 1,
    p_weekdays: [1, 2, 3, 4, 5],
    p_end_date: repeatEnd,
    p_dates: weekdayDates(monday, DEMO.repeatWeeks),
  });
  fail("create_entry_series", seriesError);
  say(`planned the week of ${monday}`);

  // A second, quieter plan so the plan switcher has something to switch.
  const prepPlan = unwrap(
    "create meal prep plan",
    await owner
      .from("meal_plans")
      .insert({ owner_id: ownerUser.id, name: "Meal prep" })
      .select("id")
      .single<{ id: string }>(),
  );

  const { error: prepEntriesError } = await owner
    .from("meal_plan_entries")
    .insert([
      {
        plan_id: prepPlan.id,
        recipe_id: recipeIds.lemonGarlicChicken,
        date: addDays(monday, 6),
        slot: "lunch",
        position: 0,
      },
      {
        plan_id: prepPlan.id,
        recipe_id: recipeIds.veggieStirFry,
        date: addDays(monday, 6),
        slot: "lunch",
        position: 1,
      },
    ]);
  fail("insert meal prep entries", prepEntriesError);

  // The friend joins through an invite, exactly as a real editor would.
  const invite = unwrap(
    "create invite",
    await owner
      .from("meal_plan_invites")
      .insert({ plan_id: plan.id, role: "editor" })
      .select("token")
      .single<{ token: string }>(),
  );

  const friend = await signIn(DEMO.friend);
  const { data: joined, error: acceptError } = await friend.rpc(
    "accept_meal_plan_invite",
    { p_token: invite.token },
  );
  fail("accept invite", acceptError);
  if (joined !== plan.id) throw new Error("accept invite: not joined");
  say(`shared "${DEMO.planName}" with ${DEMO.friend} as an editor`);

  say(`\nSign in as ${DEMO.owner} / ${DEMO.password}`);
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  seedDemo({ log: true }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
