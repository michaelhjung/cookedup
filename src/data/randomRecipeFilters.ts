export type RandomRecipeFilterParam =
  | "cuisineType"
  | "diet"
  | "health"
  | "mealType"
  | "dishType";

export interface RandomRecipeFilterOption {
  key: string;
  label: string;
  param: RandomRecipeFilterParam;
  value: string;
}

// Every value below was live-tested against the Edamam v2 Recipe Search
// API. `low-fat-abs` is a real Edamam health value but is rejected by this
// account's plan tier, so it's intentionally excluded.
const FILTER_CATEGORIES: {
  param: RandomRecipeFilterParam;
  groupLabel: string;
  values: string[];
}[] = [
  {
    param: "cuisineType",
    groupLabel: "Cuisine",
    values: [
      "American",
      "Asian",
      "British",
      "Caribbean",
      "Central Europe",
      "Chinese",
      "Eastern Europe",
      "French",
      "Greek",
      "Indian",
      "Italian",
      "Japanese",
      "Korean",
      "Kosher",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "South American",
      "South East Asian",
    ],
  },
  {
    param: "diet",
    groupLabel: "Diet",
    values: [
      "balanced",
      "high-fiber",
      "high-protein",
      "low-carb",
      "low-fat",
      "low-sodium",
    ],
  },
  {
    param: "health",
    groupLabel: "Health",
    values: [
      "alcohol-cocktail",
      "alcohol-free",
      "celery-free",
      "crustacean-free",
      "dairy-free",
      "DASH",
      "egg-free",
      "fish-free",
      "fodmap-free",
      "gluten-free",
      "immuno-supportive",
      "keto-friendly",
      "kidney-friendly",
      "kosher",
      "low-potassium",
      "low-sugar",
      "lupine-free",
      "Mediterranean",
      "mollusk-free",
      "mustard-free",
      "no-oil-added",
      "paleo",
      "peanut-free",
      "pescatarian",
      "pork-free",
      "red-meat-free",
      "sesame-free",
      "shellfish-free",
      "soy-free",
      "sugar-conscious",
      "sulfite-free",
      "tree-nut-free",
      "vegan",
      "vegetarian",
      "wheat-free",
    ],
  },
  {
    param: "mealType",
    groupLabel: "Meal Type",
    values: ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"],
  },
  {
    param: "dishType",
    groupLabel: "Dish Type",
    values: [
      "Alcohol Cocktail",
      "Biscuits and cookies",
      "Bread",
      "Cereals",
      "Condiments and sauces",
      "Desserts",
      "Drinks",
      "Main course",
      "Pancake",
      "Preps",
      "Preserve",
      "Salad",
      "Sandwiches",
      "Side dish",
      "Soup",
      "Starter",
      "Sweets",
    ],
  },
];

const makeOptionKey = (param: RandomRecipeFilterParam, value: string): string =>
  `${param}:${value}`;

export const RANDOM_RECIPE_FILTER_OPTIONS: RandomRecipeFilterOption[] =
  FILTER_CATEGORIES.flatMap(({ param, groupLabel, values }) =>
    values.map((value) => ({
      key: makeOptionKey(param, value),
      label: `${groupLabel}: ${value}`,
      param,
      value,
    })),
  );

export interface RandomRecipeFilterCategory {
  param: RandomRecipeFilterParam;
  groupLabel: string;
  // Unprefixed labels (just the value) — the per-category UI already
  // shows the group heading, so repeating it in every checkbox label
  // (as RANDOM_RECIPE_FILTER_OPTIONS does for the flat picker) would be
  // redundant here.
  options: { key: string; label: string }[];
}

// Same underlying data as RANDOM_RECIPE_FILTER_OPTIONS, grouped by
// category for the per-section checkbox UI.
export const RANDOM_RECIPE_FILTER_CATEGORIES: RandomRecipeFilterCategory[] =
  FILTER_CATEGORIES.map(({ param, groupLabel, values }) => ({
    param,
    groupLabel,
    options: values.map((value) => ({
      key: makeOptionKey(param, value),
      label: value,
    })),
  }));

// Dev-time guard: the composite `param:value` key is relied on elsewhere
// (e.g. buildRandomRecipeSearchParams's Map lookup) to uniquely identify
// an option. A future edit that accidentally introduces a duplicate
// param/value pair would otherwise silently make one of the two options
// disappear from the UI with no error anywhere.
if (process.env.NODE_ENV !== "production") {
  const seenKeys = new Set<string>();
  const duplicateKey = RANDOM_RECIPE_FILTER_OPTIONS.find((option) => {
    if (seenKeys.has(option.key)) return true;
    seenKeys.add(option.key);
    return false;
  })?.key;

  if (duplicateKey) {
    throw new Error(
      `Duplicate RANDOM_RECIPE_FILTER_OPTIONS key detected: "${duplicateKey}". Each (param, value) pair must be unique.`,
    );
  }
}

// The single source of truth for which query params the random recipe
// generator is allowed to send to Edamam — reused by the API route so it
// doesn't maintain a second, drifting copy of this list.
export const RANDOM_RECIPE_FILTER_PARAM_NAMES: RandomRecipeFilterParam[] = [
  ...new Set(RANDOM_RECIPE_FILTER_OPTIONS.map((option) => option.param)),
];

/**
 * Turns selected option keys (from RANDOM_RECIPE_FILTER_OPTIONS) into the
 * query params Edamam expects: `random=true` plus each filter repeated
 * per selected value (e.g. `diet=low-carb&diet=high-fiber`).
 */
export const buildRandomRecipeSearchParams = (
  selectedKeys: string[],
): URLSearchParams => {
  const optionsByKey = new Map(
    RANDOM_RECIPE_FILTER_OPTIONS.map((option) => [option.key, option]),
  );

  const params = new URLSearchParams();
  params.set("random", "true");

  selectedKeys.forEach((key) => {
    const option = optionsByKey.get(key);
    if (!option) return;
    params.append(option.param, option.value);
  });

  return params;
};
