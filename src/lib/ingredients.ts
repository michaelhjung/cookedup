// src/lib/ingredients.ts
//
// Pure helpers over the ingredient list in src/data/ingredients.ts:
// looking an item up by any of its names, searching it for a dropdown,
// and bridging it to the pantry (which aisle an item belongs in, what
// stocked items the recipe search can use). Nothing here touches the
// network, so all of it is unit-tested directly.

import { INGREDIENTS, type Ingredient } from "@data/ingredients";
import { STARTER_PANTRY } from "@data/starterPantry";
import {
  type CategoryGroup,
  groupByCategory,
  normalizeItemName,
} from "@lib/pantry/items";
import type { Category, PantryItem } from "@lib/pantry/types";

export type { Ingredient };

// Every name and alias, by normalized key, so "Garbanzo Beans" and
// "chickpea" both land on the chickpeas entry in O(1).
const INGREDIENT_BY_KEY = new Map<string, Ingredient>();
for (const ingredient of INGREDIENTS) {
  for (const term of [ingredient.name, ...ingredient.aliases]) {
    const key = normalizeItemName(term);
    const owner = INGREDIENT_BY_KEY.get(key);
    // Dev-time guard: a collision would silently make one entry
    // unreachable by that name, with no error anywhere.
    if (
      owner &&
      owner !== ingredient &&
      process.env.NODE_ENV !== "production"
    ) {
      throw new Error(
        `Ingredient key collision: "${term}" (${ingredient.name}) and "${owner.name}" both normalize to "${key}".`,
      );
    }
    INGREDIENT_BY_KEY.set(key, ingredient);
  }
}

/** The canonical entry for a name or alias, in any case or plural. */
export const lookupIngredient = (name: string): Ingredient | undefined => {
  const key = normalizeItemName(name);
  if (!key) return undefined;
  return INGREDIENT_BY_KEY.get(key);
};

/**
 * Entries matching what's been typed, best first: names starting with
 * the text (shortest first, so "onions" beats "onion powder"), then
 * names containing it, then alias matches. Empty text returns the
 * whole list.
 */
export const searchIngredients = (query: string): Ingredient[] => {
  const needle = query.trim().toLowerCase();
  if (!needle) return INGREDIENTS;

  const starts: Ingredient[] = [];
  const contains: Ingredient[] = [];
  const byAlias: Ingredient[] = [];
  for (const ingredient of INGREDIENTS) {
    if (ingredient.name.startsWith(needle)) starts.push(ingredient);
    else if (ingredient.name.includes(needle)) contains.push(ingredient);
    else if (ingredient.aliases.some((alias) => alias.includes(needle)))
      byAlias.push(ingredient);
  }

  starts.sort((a, b) => a.name.length - b.name.length);
  return [...starts, ...contains, ...byAlias];
};

// Every entry by aisle, in store-walk order, for browsing without a
// query. INGREDIENTS is sorted by name, so each aisle is too.
const INGREDIENTS_BY_AISLE = groupByCategory(INGREDIENTS);
const INGREDIENTS_BY_CATEGORY = new Map(
  INGREDIENTS_BY_AISLE.map((group) => [group.category, group.items]),
);

// Only aisles that hold ingredients can be browsed or matched by name.
const MATCHABLE_CATEGORIES = INGREDIENTS_BY_AISLE.map(
  (group) => group.category,
);
const MIN_CATEGORY_QUERY = 3;

/**
 * The aisle the typed text names, if any: "dai" or "eggs" is Dairy &
 * eggs, "seafood" is Meat & seafood. A prefix of the aisle's name or
 * of any word in it, from three letters so "me" doesn't drag the whole
 * meat counter into every search.
 */
export const matchCategory = (query: string): Category | undefined => {
  const needle = query.trim().toLowerCase();
  if (needle.length < MIN_CATEGORY_QUERY) return undefined;

  return MATCHABLE_CATEGORIES.find((category) => {
    const lowered = category.toLowerCase();
    if (lowered.startsWith(needle)) return true;
    return lowered
      .split(" ")
      .some((word) => word !== "&" && word.startsWith(needle));
  });
};

export type BrowseOrder = "aisle" | "alphabetical";

export interface IngredientSection {
  /** The aisle, or null for the ranked matches / the flat A-Z list. */
  heading: Category | null;
  ingredients: Ingredient[];
}

/**
 * What the ingredient dropdown shows. With nothing typed it's a browse:
 * every entry, either by aisle in store-walk order or as one A-Z list.
 * With a query it's the ranked matches in one section regardless of
 * the browse order (grouping them would bury the best match under a
 * heading), followed by the aisle the text names, if it names one,
 * minus anything already listed. Empty sections are left out, so no
 * sections at all means nothing matched.
 */
export const buildIngredientSections = (
  query: string,
  order: BrowseOrder,
): IngredientSection[] => {
  if (!query.trim()) {
    if (order === "alphabetical")
      return [{ heading: null, ingredients: INGREDIENTS }];
    return INGREDIENTS_BY_AISLE.map((group) => ({
      heading: group.category,
      ingredients: group.items,
    }));
  }

  const matches = searchIngredients(query);
  const sections: IngredientSection[] = [];
  if (matches.length > 0)
    sections.push({ heading: null, ingredients: matches });

  const category = matchCategory(query);
  if (!category) return sections;

  const listed = new Set(matches);
  const rest = (INGREDIENTS_BY_CATEGORY.get(category) ?? []).filter(
    (ingredient) => !listed.has(ingredient),
  );
  if (rest.length > 0) sections.push({ heading: category, ingredients: rest });
  return sections;
};

// First match wins, so more specific words go before general ones:
// "cream cheese" is dairy, not bakery; "coconut oil" is a staple, not
// produce. Everything unmatched is "Other". Only consulted for names
// that aren't in the ingredient list.
const CATEGORY_KEYWORDS: [Category, RegExp][] = [
  // Things a later, broader rule would misfile: "olive oil" isn't
  // produce, "peanut butter" isn't dairy, "chicken broth" isn't meat.
  [
    "Pantry staples",
    /\b(oil|vinegar|broth|stock|bouillon|sauce|peanut butter|almond butter|nut butter|egg noodle|cream of tartar|coconut milk|condensed milk|evaporated milk|baking soda|baking powder|cooking spray|flakes?|cereal|krispies?|chex|cheerios?|pebbles?|puffs?|crunch|loops?|pops?|bran|granola|graham|kix|trix|special k|lucky charms?|golden crisp|mini-wheats?|wheaties|apple jacks?|jerky|tomato paste|hoisin|worcestershire|teriyaki|corn syrup|cornstarch|cornmeal|corn flour|potato flour|sun-dried|potato chips?|molasses|honeycomb|ranch|thousand island)\b/,
  ],
  [
    "Frozen",
    /\b(frozen|ice cream|popsicle|fish sticks?|french fries|onion rings?|potstickers?|taquitos?|corn dogs?|egg rolls?|waffle)\b/,
  ],
  [
    "Household",
    /\b(paper towels?|toilet paper|napkins?|foil|plastic wrap|parchment|trash bags?|dish soap|detergent|sponges?|soap|shampoo|toothpaste|cleaner|bleach|batteries)\b/,
  ],
  [
    "Beverages",
    /\b(juice|nectar|soda|cola|coke|sprite|dr pepper|ginger ale|root beer|lemonade|tonic|water|beer|cider|wine|whiskey|vodka|rum|gin|sake|coffee|tea|energy drink|fruit punch|milk shake|kombucha|ovaltine|eggnog|grenadine)\b/,
  ],
  [
    "Bakery",
    /\b(bread|bagels?|buns?|rolls?|croissants?|tortillas?|pita|naan|roti|paratha|focaccia|biscuits?|muffins?|cake|pie crust|pumpernickel|bollilo|cornbread|croutons?|taco shells?|wraps?|phyllo|dough)\b/,
  ],
  [
    "Spices",
    /\b(salt|black pepper|white pepper|peppercorns?|paprika|cumin|coriander|turmeric|cinnamon|nutmeg|cloves?|oregano|thyme|basil|parsley|marjoram|sage|rosemary|bay lea(f|ves)|chili powder|cayenne|garlic powder|onion powder|curry|seasoning|spice|vanilla|extract|caraway|celery seed|mustard seed|ground ginger|allspice|cardamom|saffron|za'atar|sumac|dill|chives?|cilantro|mint)\b/,
  ],
  [
    "Dairy & eggs",
    /\b(milk|buttermilk|soymilk|cheese|yogurt|butter|cream|whipping|whipped|eggs?|half and half|whey|margarine|ghee|creamer|kefir)\b/,
  ],
  [
    "Meat & seafood",
    /\b(chicken|beef|pork|turkey|lamb|veal|bacon|ham|sausage|steak|roast|\w*ribs?|brisket|tenderloin|salami|pepperoni|pastrami|bologna|frankfurter|bratwurst|kielbasa|knackwurst|mortadella|braunschweiger|thuringer|scrapple|tripe|pate|prosciutto|duck|goose|quail|pheasant|bison|venison|deer|rabbit|goat|bear|beaver|boar|caribou|moose|opossum|ostrich|raccoon|squirrel|fish|salmon|tuna|cod|shrimp|prawns?|crab|crayfish|lobster|clams?|mussels?|oysters?|scallops?|squid|octopus|abalone|snails?|turtles?|frog legs|tilapia|halibut|trout|sardines?|anchov(y|ies)|mackerel|haddock|herring|catfish|snapper|swordfish|whitefish|whiting|sea bass|eel|roe|caviar|carp|croaker|flatfish|mullet|perch|pike|pollock|pompano|scup|shark|sturgeon|tofu|tempeh|seitan|vegetarian burgers?|meat)\b/,
  ],
  [
    "Produce",
    /\b(apples?|apricots?|avocados?|bananas?|\w*berr(y|ies)|cherr(y|ies)|grapes?|grapefruit|lemons?|limes?|mangos?|melon|cantaloupe|casaba|honeydew|watermelon|oranges?|tangerines?|nectarines?|peach(es)?|pears?|persimmons?|pineapple|plums?|pomegranates?|kiwi|figs?|dates?|papayas?|guavas?|kumquats?|litchis?|passionfruit|carambola|tamarinds?|rhubarb|tomato(es)?|tomatillos?|potato(es)?|yams?|onions?|scallions?|leeks?|garlic|carrots?|celery|cucumbers?|zucchini|squash|waxgourd|pumpkin|eggplant|peppers?|jalapenos?|serranos?|pimento|broccoli|cauliflower|cabbage|coleslaw|kale|spinach|lettuce|arugula|chard|collards?|greens|cress|watercress|radicchio|escarole|endive|beets?|radish(es)?|turnips?|rutabagas?|parsnips?|celeriac|kohlrabi|fennel|asparagus|artichokes?|okra|corn|peas?|cowpeas?|green beans?|yellow beans?|lima beans?|broadbeans?|fava|bean sprouts?|edamame|ginger|mushrooms?|shiitake|sprouts?|brussels|plantains?|cassava|taro|jicama|yambean|chayote|nopales|bamboo|hearts of palm|lotus root|burdock|salsify|waterchestnuts?|seaweed|herbs?|lambsquarters|dandelion|olives?|breadfruit)\b/,
  ],
  [
    "Pantry staples",
    /\b(rice|pasta|noodles?|macaroni|spaghetti|lasagna|ravioli|tortellini|vermicelli|ramen|couscous|quinoa|bulgur|barley|buckwheat|millet|oats?|oatmeal|flour|sugar|honey|syrup|agave|baking|yeast|masa|crackers?|chips?|pretzels?|popcorn|cookies?|beans?|lentils?|chickpeas?|garbanzo|kidney|hominy|soup|chowder|stew|chili|canned|jams?|jell(y|ies)|marmalade|preserves?|\w*nuts?|almonds?|cashews?|pecans?|pistachios?|filberts?|macadamia|seeds?|flaxseed|raisins?|currants?|dried|mustard|ketchup|catsup|mayonnaise|mayo|relish|pickles?|salsa|dressing|marinara|gravy|hummus|tahini|miso|kimchi|sauerkraut|capers?|coconut|chocolate|cocoa|gelatin|tapioca|shortening|lard|tallow|protein powder|sweeteners?|mix|pancake|tabasco|wasabi|horseradish|natto|papad|wafers?|zwieback|applesauce|stuffing)\b/,
  ],
];

/**
 * Where an item lives in the store, for the "Auto" category chip and
 * for grocery lines that come from a recipe. Anything in the
 * ingredient list is placed exactly; anything else is a best guess
 * from keywords.
 */
export const guessCategory = (name: string): Category => {
  const known = lookupIngredient(name);
  if (known) return known.category;

  // Tested against both spellings: the raw one so "asparagus" and
  // "couscous" survive the plural-stripping, the key so "Tomatoes" hits
  // "tomato".
  const raw = name.toLowerCase().trim().replace(/\s+/g, " ");
  const key = normalizeItemName(name);
  for (const [category, pattern] of CATEGORY_KEYWORDS) {
    if (pattern.test(raw) || pattern.test(key)) return category;
  }
  return "Other";
};

/**
 * Up to `limit` suggestions for what's been typed into the pantry,
 * excluding items already present (by key).
 */
export const suggestItems = (
  query: string,
  existingKeys: Set<string>,
  limit = 8,
): Ingredient[] => {
  if (!query.trim()) return [];
  return searchIngredients(query)
    .filter(
      (ingredient) => !existingKeys.has(normalizeItemName(ingredient.name)),
    )
    .slice(0, limit);
};

export interface SearchableItems {
  /** Search terms, as spelled in the ingredient list, newest first. */
  terms: string[];
  /** Stocked items the search can't use, by display name. */
  skipped: string[];
  /** How many searchable items were left out by the cap. */
  truncated: number;
}

// What drives a "what should I cook" search: the fresh food first, the
// staples next, and the things that are in every recipe anyway (salt,
// cumin, wine) last, so a full pantry's capped query isn't ten
// seasonings. Anything not listed ranks with the last group.
const SEARCH_PRIORITY: Partial<Record<Category, number>> = {
  Produce: 0,
  "Meat & seafood": 0,
  "Dairy & eggs": 0,
  Bakery: 0,
  Frozen: 0,
  "Pantry staples": 1,
};
const LOWEST_SEARCH_PRIORITY = 2;

/**
 * What "Find recipes with what I have" can actually search for: the
 * recipe search only understands the ingredient list, so stocked items
 * are matched against it (aliases included, so "green onions" searches
 * as "scallions") and the rest are reported back so the page can say
 * what was left out. Ranked by the ingredient's aisle, then by most
 * recently updated, and capped so the query stays sane in a full pantry.
 */
export const pickSearchableItems = (
  items: PantryItem[],
  cap = 10,
): SearchableItems => {
  const stocked = items
    .filter((item) => item.status === "stocked")
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  const ranked: { term: string; priority: number }[] = [];
  const skipped: string[] = [];
  for (const item of stocked) {
    const known = lookupIngredient(item.nameKey);
    if (!known) {
      skipped.push(item.name);
      continue;
    }
    ranked.push({
      term: known.name,
      priority: SEARCH_PRIORITY[known.category] ?? LOWEST_SEARCH_PRIORITY,
    });
  }
  // Stable sort, so within a tier the newest-first order above holds.
  ranked.sort((a, b) => a.priority - b.priority);
  const terms = ranked.map(({ term }) => term);

  return {
    terms: terms.slice(0, cap),
    skipped,
    truncated: Math.max(0, terms.length - cap),
  };
};

// A pantry item and a recipe ingredient are the same thing when they
// resolve to the same list entry; anything the list doesn't know falls
// back to its plain normalized name, so a home-made "grandma's hot
// sauce" still matches itself.
const toMatchKey = (name: string): string =>
  lookupIngredient(name)?.name ?? normalizeItemName(name);

/** The stocked items, as the keys recipe ingredients are matched by. */
export const buildStockedKeys = (items: PantryItem[]): Set<string> =>
  new Set(
    items
      .filter((item) => item.status === "stocked")
      .map((item) => toMatchKey(item.nameKey)),
  );

// Edamam phrases foods the list doesn't always know ("large eggs",
// "boneless skinless chicken breasts"). Those also try their tail,
// read from the front until the rest is a known entry. A food the list
// does know is taken as is: "peanut butter" is not butter.
const toRecipeMatchKeys = (food: string): string[] => {
  const known = lookupIngredient(food);
  if (known) return [known.name];

  const words = food.trim().split(/\s+/);
  for (let start = 1; start < words.length; start++) {
    const shorter = lookupIngredient(words.slice(start).join(" "));
    if (shorter) return [normalizeItemName(food), shorter.name];
  }
  return [normalizeItemName(food)];
};

/**
 * How many of a recipe's ingredients (Edamam's normalized `food`
 * names) the pantry covers. Counted per ingredient, so it lines up
 * with the ingredient count shown next to it.
 */
export const countPantryMatches = (
  foods: string[],
  stockedKeys: Set<string>,
): number => {
  if (stockedKeys.size === 0) return 0;
  return foods.filter((food) =>
    toRecipeMatchKeys(food).some((key) => stockedKeys.has(key)),
  ).length;
};

export interface StarterItem {
  name: string;
  category: Category;
  /** Already in the pantry, stocked or not, so there's nothing to add. */
  isInPantry: boolean;
}

/**
 * The starter list by aisle, with what this pantry already has marked
 * so the picker can show it as done rather than offer a duplicate.
 */
export const buildStarterGroups = (
  items: PantryItem[],
): CategoryGroup<StarterItem>[] => {
  const pantryKeys = new Set(items.map((item) => toMatchKey(item.nameKey)));
  const starters = STARTER_PANTRY.flatMap((name) => {
    const known = lookupIngredient(name);
    if (!known) return [];
    return [
      {
        name: known.name,
        category: known.category,
        isInPantry: pantryKeys.has(known.name),
      },
    ];
  });
  return groupByCategory(starters);
};
