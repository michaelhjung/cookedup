// src/lib/ingredients.ts
//
// Pure helpers over the ingredient list in src/data/ingredients.ts:
// looking an item up by any of its names, searching it for a dropdown,
// and bridging it to the pantry (which aisle an item belongs in, what
// stocked items the recipe search can use). Nothing here touches the
// network, so all of it is unit-tested directly.

import { INGREDIENTS, type Ingredient } from "@data/ingredients";
import { normalizeItemName } from "@lib/pantry/items";
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

/**
 * What "Find recipes with what I have" can actually search for: the
 * recipe search only understands the ingredient list, so stocked items
 * are matched against it (aliases included, so "green onions" searches
 * as "scallions") and the rest are reported back so the page can say
 * what was left out. Capped to the most recently updated so the query
 * stays sane in a full pantry.
 */
export const pickSearchableItems = (
  items: PantryItem[],
  cap = 10,
): SearchableItems => {
  const stocked = items
    .filter((item) => item.status === "stocked")
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  const terms: string[] = [];
  const skipped: string[] = [];
  for (const item of stocked) {
    const known = lookupIngredient(item.nameKey);
    if (known) terms.push(known.name);
    else skipped.push(item.name);
  }

  return {
    terms: terms.slice(0, cap),
    skipped,
    truncated: Math.max(0, terms.length - cap),
  };
};
