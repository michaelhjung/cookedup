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
// API (see docs/superpowers/specs/2026-09-01-random-recipe-generator-design.md).
// `low-fat-abs` is a real Edamam health value but is rejected by this
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
    values: ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"],
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
