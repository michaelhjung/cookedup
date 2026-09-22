/**
 * Rebuilds the local demo account.
 *
 * Everything is written the way the app writes it — recipes as library
 * rows in Edamam's shape with their image in the recipe-images bucket,
 * meals as plan entries, the repeating breakfast through the
 * create_entry_series RPC, the household through create_household and
 * an invite the second account accepts itself — so the demo cannot
 * drift into a shape the product could never produce. Rows are written signed in as their owner, so RLS
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
import { normalizeItemName } from "../src/lib/pantry/items.ts";
import {
  buildDemoHit,
  DEMO_PANTRY,
  DEMO_RECIPES,
  DEMO_USER_RECIPES,
  DEMO_WEEK,
  type DemoRecipeKey,
  type DemoUserRecipe,
} from "./demo-data.ts";

config({ path: ".env.local" });

const RECIPE_IMAGES_BUCKET = "recipe-images";
const IMAGES_DIR = new URL("../supabase/seed/images/", import.meta.url);

const DEMO = {
  password: DEMO_LOGIN.password,
  owner: DEMO_LOGIN.email,
  friend: DEMO_SECOND_EMAIL,
  householdName: "The Demos",
  pantryName: "Home pantry",
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
    // Plans cascade to their entries and series; the delete triggers
    // drop shares and invites. The household cascades to its members.
    await admin.from("households").delete().eq("created_by", user.id);
    await admin.from("grocery_lists").delete().eq("owner_id", user.id);
    await admin.from("pantries").delete().eq("owner_id", user.id);
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

/**
 * Writes a recipe the way the editor does: the row first (the database
 * builds its Edamam-shaped `hit`), then the photo under
 * `{user}/authored/{recipe}.jpg` with the row pointed at it.
 */
const seedUserRecipe = async (
  client: SupabaseClient,
  userId: string,
  householdId: string,
  recipe: DemoUserRecipe,
): Promise<string> => {
  const row = unwrap(
    `insert user recipe ${recipe.title}`,
    await client
      .from("user_recipes")
      .insert({
        user_id: userId,
        household_id: recipe.inHousehold ? householdId : null,
        title: recipe.title,
        description: recipe.description,
        servings: recipe.servings,
        prep_minutes: recipe.prepMinutes,
        cook_minutes: recipe.cookMinutes,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        cuisine_types: recipe.cuisineTypes,
        meal_types: recipe.mealTypes,
        dish_types: recipe.dishTypes,
        diet_labels: recipe.dietLabels,
        health_labels: recipe.healthLabels,
        calories_per_serving: recipe.caloriesPerServing,
        source_name: recipe.sourceName,
        notes: recipe.notes,
        visibility: recipe.visibility,
      })
      .select("id")
      .single<{ id: string }>(),
  );

  if (!recipe.imageSlug) return row.id;

  const file = await readFile(new URL(`${recipe.imageSlug}.jpg`, IMAGES_DIR));
  const path = `${userId}/authored/${row.id}.jpg`;
  const { error: uploadError } = await client.storage
    .from(RECIPE_IMAGES_BUCKET)
    .upload(path, file, { contentType: "image/jpeg", upsert: true });
  fail(`upload photo for ${recipe.title}`, uploadError);

  const {
    data: { publicUrl },
  } = client.storage.from(RECIPE_IMAGES_BUCKET).getPublicUrl(path);
  const { error: imageError } = await client
    .from("user_recipes")
    .update({ image_url: `${publicUrl}?v=${Date.now()}` })
    .eq("id", row.id);
  fail(`set photo for ${recipe.title}`, imageError);

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

  // The owner moderates: the same service-role insert a real admin is
  // granted with in the dashboard.
  const { error: roleError } = await admin
    .from("app_roles")
    .insert({ user_id: ownerUser.id, role: "admin" });
  fail("grant admin", roleError);
  say(`made ${DEMO.owner} an admin`);

  // The household first, so the week's plan can belong to it from the
  // start. The friend joins through an invite link, as anyone would.
  const { data: householdId, error: householdError } = await owner.rpc(
    "create_household",
    { p_name: DEMO.householdName },
  );
  fail("create_household", householdError);
  if (typeof householdId !== "string")
    throw new Error("create_household: no id returned");

  const householdInvite = unwrap(
    "create household invite",
    await owner
      .from("invites")
      .insert({
        resource_kind: "household",
        resource_id: householdId,
        role: "member",
      })
      .select("token")
      .single<{ token: string }>(),
  );

  const friend = await signIn(DEMO.friend);
  const { data: joinedHousehold, error: joinError } = await friend.rpc(
    "accept_invite",
    { p_token: householdInvite.token },
  );
  fail("accept household invite", joinError);
  if ((joinedHousehold as { id?: string } | null)?.id !== householdId)
    throw new Error("accept household invite: not joined");
  say(`created household "${DEMO.householdName}" with ${DEMO.friend}`);

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
        household_id: householdId,
        name: DEMO.planName,
        share_token: crypto.randomUUID(),
      })
      .select("id")
      .single<{ id: string }>(),
  );

  const sunday = startOfWeek(today);
  const monday = addDays(sunday, 1);
  const entries = DEMO_WEEK.map((meal) => ({
    plan_id: plan.id,
    ...("recipe" in meal ?
      { recipe_id: recipeIds[meal.recipe] }
    : { title: meal.title }),
    date: addDays(sunday, meal.day),
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
    p_month_day: null,
    p_week_ordinal: null,
    p_end_date: repeatEnd,
    p_dates: weekdayDates(monday, DEMO.repeatWeeks),
  });
  fail("create_entry_series", seriesError);
  say(`planned the week of ${sunday}`);

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

  // The week's plan is the household's; the prep plan stays personal
  // and is shared one-off, so both ways of seeing someone else's plan
  // are in the demo.
  const invite = unwrap(
    "create plan invite",
    await owner
      .from("invites")
      .insert({
        resource_kind: "meal_plan",
        resource_id: prepPlan.id,
        role: "viewer",
      })
      .select("token")
      .single<{ token: string }>(),
  );

  const { data: joined, error: acceptError } = await friend.rpc(
    "accept_invite",
    { p_token: invite.token },
  );
  fail("accept plan invite", acceptError);
  if ((joined as { id?: string } | null)?.id !== prepPlan.id)
    throw new Error("accept plan invite: not joined");
  say(`shared "Meal prep" with ${DEMO.friend} as a viewer`);

  // The household pantry. Some items were marked by the friend, so the
  // "marked low · friend" sublines have something to show.
  const {
    data: { user: friendUser },
  } = await friend.auth.getUser();
  if (!friendUser) throw new Error("friend sign-in returned no user");

  const pantry = unwrap(
    "create pantry",
    await owner
      .from("pantries")
      .insert({
        owner_id: ownerUser.id,
        household_id: householdId,
        name: DEMO.pantryName,
      })
      .select("id")
      .single<{ id: string }>(),
  );

  const hoursAgo = (hours: number) =>
    new Date(Date.now() - hours * 3_600_000).toISOString();

  const { error: itemsError } = await owner.from("pantry_items").insert(
    DEMO_PANTRY.map((item) => ({
      pantry_id: pantry.id,
      name: item.name,
      name_key: normalizeItemName(item.name),
      category: item.category,
      status: item.status ?? "stocked",
      updated_at: hoursAgo(item.hoursAgo ?? 24 * 14),
      updated_by: item.markedByFriend ? friendUser.id : ownerUser.id,
    })),
  );
  fail("insert pantry items", itemsError);
  say(`stocked "${DEMO.pantryName}" with ${DEMO_PANTRY.length} items`);

  // A household list filled from the pantry's low and out items, with a
  // couple already checked off by the friend (through the same function
  // the app uses, so the pantry restocks as it would in the aisle), and
  // a personal one shared read-only.
  const costco = unwrap(
    "create Costco list",
    await owner
      .from("grocery_lists")
      .insert({
        owner_id: ownerUser.id,
        household_id: householdId,
        pantry_id: pantry.id,
        name: "Costco",
      })
      .select("id")
      .single<{ id: string }>(),
  );

  const restock = DEMO_PANTRY.filter(
    (item) => item.status && item.status !== "stocked",
  );
  const { error: linesError } = await owner.rpc("add_lines_to_list", {
    p_list_id: costco.id,
    p_lines: restock.map((item) => ({
      name: item.name,
      name_key: normalizeItemName(item.name),
      category: item.category,
      source: "pantry",
      source_recipe_names: [],
    })),
  });
  fail("add_lines_to_list", linesError);

  const { data: costcoLines, error: costcoLinesError } = await friend
    .from("grocery_list_lines")
    .select("id, name_key")
    .eq("list_id", costco.id)
    .in("name_key", ["tortilla", "dish soap"]);
  fail("read Costco lines", costcoLinesError);
  for (const line of costcoLines ?? []) {
    const { error: checkError } = await friend.rpc("check_grocery_line", {
      p_line_id: line.id,
      p_apply_restock: true,
      p_add_new: true,
    });
    fail(`check ${line.name_key}`, checkError);
  }

  const market = unwrap(
    "create Farmers market list",
    await owner
      .from("grocery_lists")
      .insert({
        owner_id: ownerUser.id,
        pantry_id: pantry.id,
        name: "Farmers market",
      })
      .select("id")
      .single<{ id: string }>(),
  );
  const { error: marketError } = await owner.rpc("add_lines_to_list", {
    p_list_id: market.id,
    p_lines: [
      ["Heirloom tomatoes", "Produce"],
      ["Peaches", "Produce"],
      ["Sourdough loaf", "Bakery"],
      ["Local honey", "Pantry staples"],
    ].map(([name, category]) => ({
      name,
      name_key: normalizeItemName(name),
      category,
      source: "manual",
      source_recipe_names: [],
    })),
  });
  fail("add market lines", marketError);

  const { error: marketShareError } = await owner.from("shares").insert({
    resource_kind: "grocery_list",
    resource_id: market.id,
    user_id: friendUser.id,
    role: "viewer",
    email: DEMO.friend,
  });
  fail("share market list", marketShareError);
  say(
    `made lists "Costco" (household) and "Farmers market" (shared read-only)`,
  );

  // Recipes the two accounts wrote themselves. Bylines come from
  // profiles, made first the way the editor does before a first save.
  for (const [client, userId, name] of [
    [owner, ownerUser.id, "Demo"],
    [friend, friendUser.id, "Sam"],
  ] as const) {
    const { error: profileError } = await client
      .from("profiles")
      .upsert({ user_id: userId, display_name: name });
    fail(`profile for ${name}`, profileError);
  }

  const userRecipeIds: string[] = [];
  for (const recipe of DEMO_USER_RECIPES) {
    const isOwner = recipe.author === "owner";
    userRecipeIds.push(
      await seedUserRecipe(
        isOwner ? owner : friend,
        isOwner ? ownerUser.id : friendUser.id,
        householdId,
        recipe,
      ),
    );
  }

  // A public recipe waits for an admin. The owner approves the ones
  // meant to be live and leaves the rest in the queue.
  let approvedCount = 0;
  for (const [index, recipe] of DEMO_USER_RECIPES.entries()) {
    if (recipe.visibility !== "public" || recipe.isAwaitingReview) continue;
    const { error: approveError } = await owner.rpc("approve_recipe", {
      p_recipe_id: userRecipeIds[index],
    });
    fail(`approve ${recipe.title}`, approveError);
    approvedCount += 1;
  }

  // The owner has starred the friend's live recipe, so a user recipe
  // sits in the library and on a card like any Edamam one.
  const friendsRecipeIndex = DEMO_USER_RECIPES.findIndex(
    (recipe) =>
      recipe.author === "friend" &&
      recipe.visibility === "public" &&
      !recipe.isAwaitingReview,
  );
  const friendsRecipe = unwrap(
    "read friend's recipe",
    await owner
      .from("user_recipes")
      .select("hit")
      .eq("id", userRecipeIds[friendsRecipeIndex])
      .single<{ hit: unknown }>(),
  );
  const { error: starError } = await owner.from("recipes").insert({
    user_id: ownerUser.id,
    data: friendsRecipe.hit,
    is_starred: true,
  });
  fail("star friend's recipe", starError);

  // And the friend has reported the owner's live recipe, so the Reports
  // tab has a row too.
  const ownersRecipeIndex = DEMO_USER_RECIPES.findIndex(
    (recipe) =>
      recipe.author === "owner" &&
      recipe.visibility === "public" &&
      !recipe.isAwaitingReview,
  );
  const { error: reportError } = await friend.from("recipe_reports").insert({
    recipe_id: userRecipeIds[ownersRecipeIndex],
    reason: "copyright",
    details: "Pretty sure this is word for word from a cookbook I have.",
  });
  fail("report owner's recipe", reportError);
  say(
    `wrote ${DEMO_USER_RECIPES.length} recipes, approved ${approvedCount}, starred one and reported one`,
  );

  say(`\nSign in as ${DEMO.owner} / ${DEMO.password}`);
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  seedDemo({ log: true }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
