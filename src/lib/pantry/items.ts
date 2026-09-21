// src/lib/pantry/items.ts
//
// Pure helpers for naming, matching and grouping pantry items. Nothing
// here touches the network, so all of it is unit-tested directly.

// Relative rather than aliased so the seed script can import this file
// under plain Node, which knows nothing about the tsconfig paths.
import type { Category, PantryItem } from "./types.ts";
import { CATEGORIES } from "./types.ts";

/**
 * The key two items are compared by: "Eggs", " egg" and "EGGS" are all
 * the same thing. Lowercased, trimmed, spaces collapsed, and a trailing
 * "s"/"es" dropped unless the word ends in "ss" (so "hummus" and
 * "swiss cheese" keep their s). It's deliberately crude: it only has to
 * agree with itself, on both pantry items and recipe ingredient names.
 */
export const normalizeItemName = (name: string): string => {
  const cleaned = name.toLowerCase().trim().replace(/\s+/g, " ");
  if (cleaned.endsWith("ss") || cleaned.length < 3) return cleaned;
  if (cleaned.endsWith("ies")) return `${cleaned.slice(0, -3)}y`;
  if (/(ch|sh|x|o)es$/.test(cleaned)) return cleaned.slice(0, -2);
  if (cleaned.endsWith("s")) return cleaned.slice(0, -1);
  return cleaned;
};

// First match wins, so more specific words go before general ones:
// "cream cheese" is dairy, not bakery; "coconut oil" is a staple, not
// produce. Everything unmatched is "Other".
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
 * A best guess at where an item lives in the store, for the "Auto"
 * category chip and for grocery lines that come from a recipe.
 */
export const guessCategory = (name: string): Category => {
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

export interface CategoryGroup<T> {
  category: Category;
  items: T[];
}

/**
 * Groups items by category in store-walk order, dropping empty groups
 * and sorting each group's items by name.
 */
export const groupByCategory = <T extends { category: Category; name: string }>(
  items: T[],
): CategoryGroup<T>[] => {
  const byCategory = new Map<Category, T[]>();
  for (const item of items) {
    const bucket = byCategory.get(item.category);
    if (bucket) bucket.push(item);
    else byCategory.set(item.category, [item]);
  }

  return CATEGORIES.flatMap((category) => {
    const bucket = byCategory.get(category);
    if (!bucket) return [];
    return [
      {
        category,
        items: [...bucket].sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
        ),
      },
    ];
  });
};

/** Items the shopper needs: anything not stocked. */
export const pickRestockItems = (items: PantryItem[]): PantryItem[] =>
  items.filter((item) => item.status !== "stocked");

/** Suggestion source: the ingredient list, normalized once. */
export interface Suggestion {
  /** As it appears in ingredients.json, for the Edamam query. */
  name: string;
  key: string;
}

export const buildSuggestionIndex = (names: string[]): Suggestion[] => {
  const seen = new Set<string>();
  const suggestions: Suggestion[] = [];
  for (const raw of names) {
    const name = raw.trim();
    const key = normalizeItemName(name);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    suggestions.push({ name, key });
  }
  return suggestions;
};

/**
 * Up to `limit` suggestions for what's been typed: prefix matches first,
 * then anything containing the text, excluding items already present.
 */
export const suggestItems = (
  index: Suggestion[],
  query: string,
  existingKeys: Set<string>,
  limit = 8,
): Suggestion[] => {
  const needle = query.toLowerCase().trim();
  if (!needle) return [];

  const starts: Suggestion[] = [];
  const contains: Suggestion[] = [];
  for (const suggestion of index) {
    if (existingKeys.has(suggestion.key)) continue;
    const haystack = suggestion.name.toLowerCase();
    if (haystack.startsWith(needle)) starts.push(suggestion);
    else if (haystack.includes(needle)) contains.push(suggestion);
  }

  // Shortest prefix match first: "onions" before "onion powder".
  starts.sort((a, b) => a.name.length - b.name.length);
  return [...starts, ...contains].slice(0, limit);
};

/** Title-cases a typed name: "greek yogurt" -> "Greek yogurt". */
export const tidyItemName = (name: string): string => {
  const cleaned = name.trim().replace(/\s+/g, " ");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

export interface SearchableItems {
  /** Search terms, as spelled in the ingredient list, newest first. */
  terms: string[];
  /** Stocked items the search can't use, by display name. */
  skipped: string[];
  /** How many searchable items were left out by the cap. */
  truncated: number;
}

/**
 * What "Find recipes with what I have" can actually search for: the
 * recipe search only understands the ingredient list, so stocked items
 * are matched against it by key and the rest are reported back so the
 * page can say what was left out. Capped to the most recently updated
 * so the query stays sane in a full pantry.
 */
export const pickSearchableItems = (
  items: PantryItem[],
  index: Suggestion[],
  cap = 10,
): SearchableItems => {
  const termByKey = new Map(index.map((entry) => [entry.key, entry.name]));
  const stocked = items
    .filter((item) => item.status === "stocked")
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  const terms: string[] = [];
  const skipped: string[] = [];
  for (const item of stocked) {
    const term = termByKey.get(item.nameKey);
    if (term) terms.push(term);
    else skipped.push(item.name);
  }

  return {
    terms: terms.slice(0, cap),
    skipped,
    truncated: Math.max(0, terms.length - cap),
  };
};
