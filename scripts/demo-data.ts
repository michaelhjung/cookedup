/**
 * What the local demo account owns: a small recipe library and a week
 * of meals planned from it. Recipes are in Edamam's `Hit` shape — the
 * same JSON the app stores when you star a search result — so the demo
 * renders through exactly the code paths real data does.
 *
 * Images are placeholders in supabase/seed/images; drop real photos in
 * under the same names to make the demo look the part.
 */
import type { Hit } from "../src/interfaces/edamam.ts";

export type DemoRecipeKey =
  | "lemonGarlicChicken"
  | "overnightOats"
  | "veggieStirFry"
  | "tomatoBasilPasta"
  | "blackBeanTacos"
  | "greekSalad"
  | "shakshuka"
  | "misoSalmon";

export interface DemoRecipe {
  /** Also the image's file name (`<slug>.jpg`) and the Edamam recipe id. */
  slug: string;
  isStarred: boolean;
  label: string;
  source: string;
  url: string;
  yield: number;
  calories: number;
  totalTime: number;
  dietLabels: string[];
  healthLabels: string[];
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  ingredientLines: string[];
}

export const DEMO_RECIPES: Record<DemoRecipeKey, DemoRecipe> = {
  lemonGarlicChicken: {
    slug: "lemon-garlic-chicken",
    isStarred: true,
    label: "Lemon Garlic Roast Chicken",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/lemon-garlic-roast-chicken",
    yield: 4,
    calories: 2140,
    totalTime: 75,
    dietLabels: ["low-carb"],
    healthLabels: ["Gluten-Free", "Dairy-Free", "Paleo"],
    cuisineType: ["mediterranean"],
    mealType: ["lunch/dinner"],
    dishType: ["main course"],
    ingredientLines: [
      "1 whole chicken (about 4 lb)",
      "2 lemons, halved",
      "1 head garlic, halved crosswise",
      "3 tablespoons olive oil",
      "1 tablespoon fresh thyme leaves",
      "Salt and black pepper",
    ],
  },
  overnightOats: {
    slug: "overnight-oats",
    isStarred: true,
    label: "Overnight Oats with Berries",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/overnight-oats-with-berries",
    yield: 1,
    calories: 380,
    totalTime: 5,
    dietLabels: ["High-Fiber"],
    healthLabels: ["Vegetarian", "Egg-Free"],
    cuisineType: ["american"],
    mealType: ["breakfast"],
    dishType: ["cereals"],
    ingredientLines: [
      "1/2 cup rolled oats",
      "1/2 cup milk of choice",
      "1/4 cup Greek yogurt",
      "1 tablespoon chia seeds",
      "1 teaspoon maple syrup",
      "1/2 cup mixed berries",
    ],
  },
  veggieStirFry: {
    slug: "veggie-stir-fry",
    isStarred: true,
    label: "Ginger Sesame Veggie Stir-Fry",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/ginger-sesame-veggie-stir-fry",
    yield: 2,
    calories: 620,
    totalTime: 20,
    dietLabels: ["Balanced"],
    healthLabels: ["Vegan", "Vegetarian", "Dairy-Free"],
    cuisineType: ["asian"],
    mealType: ["lunch/dinner"],
    dishType: ["main course"],
    ingredientLines: [
      "1 head broccoli, cut into florets",
      "1 red bell pepper, sliced",
      "1 carrot, julienned",
      "2 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "2 tablespoons soy sauce",
      "1 teaspoon sesame oil",
      "1 tablespoon sesame seeds",
    ],
  },
  tomatoBasilPasta: {
    slug: "tomato-basil-pasta",
    isStarred: true,
    label: "Tomato Basil Pasta",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/tomato-basil-pasta",
    yield: 4,
    calories: 1980,
    totalTime: 30,
    dietLabels: ["Balanced"],
    healthLabels: ["Vegetarian", "Egg-Free"],
    cuisineType: ["italian"],
    mealType: ["lunch/dinner"],
    dishType: ["main course"],
    ingredientLines: [
      "12 oz spaghetti",
      "2 tablespoons olive oil",
      "3 cloves garlic, sliced",
      "1 can (28 oz) crushed tomatoes",
      "1 cup fresh basil leaves",
      "1/2 cup grated Parmesan",
      "Salt and black pepper",
    ],
  },
  blackBeanTacos: {
    slug: "black-bean-tacos",
    isStarred: true,
    label: "Black Bean Tacos",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/black-bean-tacos",
    yield: 3,
    calories: 1120,
    totalTime: 25,
    dietLabels: ["High-Fiber"],
    healthLabels: ["Vegetarian", "Vegan"],
    cuisineType: ["mexican"],
    mealType: ["lunch/dinner"],
    dishType: ["main course"],
    ingredientLines: [
      "1 can (15 oz) black beans, drained",
      "1 teaspoon ground cumin",
      "1/2 teaspoon smoked paprika",
      "6 small corn tortillas",
      "1 avocado, sliced",
      "1/2 red onion, thinly sliced",
      "Fresh cilantro and lime wedges",
    ],
  },
  greekSalad: {
    slug: "greek-salad",
    isStarred: true,
    label: "Greek Salad with Chickpeas",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/greek-salad-with-chickpeas",
    yield: 2,
    calories: 740,
    totalTime: 15,
    dietLabels: ["Balanced", "High-Fiber"],
    healthLabels: ["vegetarian", "gluten-free"],
    cuisineType: ["greek"],
    mealType: ["lunch/dinner"],
    dishType: ["salad"],
    ingredientLines: [
      "1 cucumber, chopped",
      "2 cups cherry tomatoes, halved",
      "1 can (15 oz) chickpeas, drained",
      "1/2 cup Kalamata olives",
      "4 oz feta, crumbled",
      "3 tablespoons olive oil",
      "1 tablespoon red wine vinegar",
      "1 teaspoon dried oregano",
    ],
  },
  shakshuka: {
    slug: "shakshuka",
    isStarred: false,
    label: "Shakshuka",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/shakshuka",
    yield: 2,
    calories: 560,
    totalTime: 35,
    dietLabels: ["low-carb"],
    healthLabels: ["vegetarian", "gluten-free"],
    cuisineType: ["middle eastern"],
    mealType: ["breakfast", "brunch"],
    dishType: ["main course"],
    ingredientLines: [
      "2 tablespoons olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 cloves garlic, minced",
      "1 teaspoon ground cumin",
      "1 teaspoon smoked paprika",
      "1 can (28 oz) crushed tomatoes",
      "4 eggs",
      "Fresh parsley",
    ],
  },
  misoSalmon: {
    slug: "miso-salmon",
    isStarred: false,
    label: "Miso Glazed Salmon",
    source: "Demo Kitchen",
    url: "https://example.com/recipes/miso-glazed-salmon",
    yield: 2,
    calories: 820,
    totalTime: 25,
    dietLabels: ["High-Protein"],
    healthLabels: ["Pescatarian", "Dairy-Free"],
    cuisineType: ["japanese"],
    mealType: ["lunch/dinner"],
    dishType: ["main course"],
    ingredientLines: [
      "2 salmon fillets",
      "2 tablespoons white miso",
      "1 tablespoon mirin",
      "1 tablespoon soy sauce",
      "1 teaspoon honey",
      "Sliced scallions",
    ],
  },
};

/**
 * The stored row for a demo recipe, with `imageUrl` in every image slot
 * the way persistRecipeImage leaves a starred recipe.
 */
const MEASURE_WORDS =
  /^(a|an|of|whole|large|small|medium|fresh|ripe|big|tablespoons?|tbsp|teaspoons?|tsp|cups?|pounds?|lb|lbs|ounces?|oz|cloves?|heads?|cans?|bunch(es)?|handfuls?|pinch(es)?|sprigs?|slices?|pieces?|sticks?|stalks?|jars?)$/i;

/**
 * Edamam's `food` is the bare ingredient ("chicken thighs"); the demo
 * only has the written lines, so this pares one down the way Edamam
 * would: drop the parenthetical and the prep note after the comma, then
 * the leading quantity and measure words.
 */
const foodFromLine = (line: string): string => {
  const bare = line
    .replace(/\([^)]*\)/g, "")
    .split(",")[0]
    .trim()
    .toLowerCase();
  const words = bare.split(/\s+/);
  while (
    words.length > 1 &&
    (/^[\d/½¼¾.-]+$/.test(words[0]) || MEASURE_WORDS.test(words[0]))
  )
    words.shift();
  return words.join(" ");
};

export const buildDemoHit = (recipe: DemoRecipe, imageUrl: string): Hit => {
  const image = { url: imageUrl, width: 640, height: 480 };

  return {
    recipe: {
      uri: `http://www.edamam.com/ontologies/edamam.owl#recipe_demo_${recipe.slug.replace(/-/g, "_")}`,
      label: recipe.label,
      image: imageUrl,
      images: { THUMBNAIL: image, SMALL: image, REGULAR: image, LARGE: image },
      source: recipe.source,
      url: recipe.url,
      shareAs: recipe.url,
      yield: recipe.yield,
      dietLabels: recipe.dietLabels,
      healthLabels: recipe.healthLabels,
      cautions: [],
      ingredientLines: recipe.ingredientLines,
      ingredients: recipe.ingredientLines.map((text) => ({
        text,
        quantity: 0,
        measure: "",
        food: foodFromLine(text),
        weight: 0,
        foodCategory: "",
        foodId: "",
      })),
      calories: recipe.calories,
      totalCO2Emissions: 0,
      co2EmissionsClass: "B",
      totalWeight: 0,
      totalTime: recipe.totalTime,
      cuisineType: recipe.cuisineType,
      mealType: recipe.mealType,
      dishType: recipe.dishType,
      totalNutrients: {},
      totalDaily: {},
      digest: [],
    },
    _links: { self: { title: "Self", href: recipe.url } },
  };
};

/**
 * One planned meal, as a day of the current week. Either a recipe from
 * the library or a custom title with nothing behind it.
 */
export type DemoMeal = {
  day: number;
  slot: "breakfast" | "lunch" | "snack" | "dinner";
} & ({ recipe: DemoRecipeKey } | { title: string });

/**
 * This week's plan; `day` counts from Sunday, like the calendar's
 * columns. Weekday breakfasts come from a repeat rule instead.
 */
export const DEMO_WEEK: DemoMeal[] = [
  { day: 0, slot: "dinner", recipe: "tomatoBasilPasta" },
  { day: 1, slot: "dinner", recipe: "tomatoBasilPasta" },
  { day: 1, slot: "lunch", title: "Leftovers" },
  { day: 2, slot: "lunch", recipe: "greekSalad" },
  { day: 2, slot: "dinner", recipe: "veggieStirFry" },
  { day: 3, slot: "dinner", recipe: "blackBeanTacos" },
  { day: 4, slot: "lunch", recipe: "blackBeanTacos" },
  { day: 4, slot: "dinner", recipe: "misoSalmon" },
  { day: 5, slot: "dinner", recipe: "lemonGarlicChicken" },
  { day: 6, slot: "breakfast", recipe: "shakshuka" },
  { day: 6, slot: "lunch", recipe: "greekSalad" },
  { day: 6, slot: "dinner", title: "Dinner at Mom's" },
];

/** What's in the household pantry, in the state a mid-week kitchen is in. */
export const DEMO_PANTRY: {
  name: string;
  category: string;
  status?: "stocked" | "low" | "out";
  /** How long ago it was last touched; stocked items default to a fortnight. */
  hoursAgo?: number;
  markedByFriend?: boolean;
}[] = [
  { name: "Garlic", category: "Produce" },
  {
    name: "Onions",
    category: "Produce",
    status: "low",
    hoursAgo: 70,
    markedByFriend: true,
  },
  { name: "Spinach", category: "Produce", status: "out", hoursAgo: 20 },
  { name: "Lemons", category: "Produce" },
  { name: "Avocados", category: "Produce", status: "low", hoursAgo: 5 },
  { name: "Cherry tomatoes", category: "Produce" },
  { name: "Sourdough bread", category: "Bakery" },
  {
    name: "Tortillas",
    category: "Bakery",
    status: "out",
    hoursAgo: 96,
    markedByFriend: true,
  },
  { name: "Chicken thighs", category: "Meat & seafood" },
  { name: "Shrimp", category: "Meat & seafood", status: "out", hoursAgo: 30 },
  {
    name: "Eggs",
    category: "Dairy & eggs",
    status: "low",
    hoursAgo: 26,
    markedByFriend: true,
  },
  { name: "Butter", category: "Dairy & eggs" },
  { name: "Greek yogurt", category: "Dairy & eggs" },
  { name: "Parmesan cheese", category: "Dairy & eggs" },
  { name: "Olive oil", category: "Pantry staples" },
  {
    name: "Basmati rice",
    category: "Pantry staples",
    status: "low",
    hoursAgo: 50,
  },
  { name: "Soy sauce", category: "Pantry staples" },
  {
    name: "Chicken broth",
    category: "Pantry staples",
    status: "low",
    hoursAgo: 8,
    markedByFriend: true,
  },
  { name: "Rolled oats", category: "Pantry staples" },
  { name: "Peanut butter", category: "Pantry staples" },
  { name: "Cumin", category: "Spices" },
  { name: "Paprika", category: "Spices" },
  { name: "Frozen peas", category: "Frozen" },
  { name: "Coffee", category: "Beverages" },
  { name: "Dish soap", category: "Household", status: "low", hoursAgo: 120 },
];

// ---------------------------------------------------------------------
// Recipes the demo accounts wrote themselves
// ---------------------------------------------------------------------

export interface DemoUserRecipe {
  /** Which account wrote it. */
  author: "owner" | "friend";
  /** The seed image to use as its photo, or null for the placeholder. */
  imageSlug: string | null;
  visibility: "private" | "public";
  /** Visible to the household as well. */
  inHousehold: boolean;
  title: string;
  description: string | null;
  servings: number;
  prepMinutes: number | null;
  cookMinutes: number | null;
  ingredients: ({ text: string; food: string | null } | { heading: string })[];
  instructions: string[];
  cuisineTypes: string[];
  mealTypes: string[];
  dishTypes: string[];
  dietLabels: string[];
  healthLabels: string[];
  caloriesPerServing: number | null;
  sourceName: string | null;
  notes: string | null;
}

export const DEMO_USER_RECIPES: DemoUserRecipe[] = [
  {
    author: "owner",
    imageSlug: "tomato-basil-pasta",
    visibility: "public",
    inHousehold: true,
    title: "Weeknight tomato pasta",
    description:
      "The pasta I make when there's nothing in the house but a can of tomatoes. Twenty minutes, one pot for the sauce, and it's better than it has any right to be.",
    servings: 4,
    prepMinutes: 5,
    cookMinutes: 20,
    ingredients: [
      { heading: "Sauce" },
      { text: "2 tbsp olive oil", food: "olive oil" },
      { text: "3 cloves garlic, thinly sliced", food: "garlic" },
      { text: "1 can (400 g) whole peeled tomatoes", food: "canned tomatoes" },
      { text: "1/2 tsp chili flakes", food: "red pepper flakes" },
      { text: "Salt, to taste", food: "salt" },
      { heading: "To finish" },
      { text: "400 g spaghetti", food: "spaghetti" },
      { text: "A handful of basil leaves", food: "basil" },
      { text: "Parmesan, for grating", food: "parmesan cheese" },
    ],
    instructions: [
      "Bring a big pot of salted water to the boil and cook the spaghetti a minute short of the packet time.",
      "Meanwhile warm the oil in a wide pan over medium heat. Add the garlic and chili flakes and cook until the garlic just turns golden, about a minute.",
      "Crush the tomatoes in with your hands, add a good pinch of salt, and simmer while the pasta cooks, stirring now and then.",
      "Drain the pasta, keeping a mug of the water. Toss the pasta through the sauce with a splash of the water until it clings.",
      "Tear in the basil, grate over parmesan, and serve at once.",
    ],
    cuisineTypes: ["Italian"],
    mealTypes: ["Dinner"],
    dishTypes: ["Main course"],
    dietLabels: [],
    healthLabels: ["vegetarian"],
    caloriesPerServing: 520,
    sourceName: null,
    notes:
      "A spoon of butter in the sauce at the end makes it silkier. Any long pasta works.",
  },
  {
    author: "owner",
    imageSlug: null,
    visibility: "private",
    inHousehold: true,
    title: "Mom's chicken soup",
    description: "Written down from a phone call. Not to be shared.",
    servings: 6,
    prepMinutes: 15,
    cookMinutes: 90,
    ingredients: [
      { text: "1 whole chicken, about 1.5 kg", food: "whole chicken" },
      { text: "2 onions, halved", food: "onions" },
      { text: "3 carrots, cut into chunks", food: "carrots" },
      { text: "3 stalks celery", food: "celery" },
      { text: "1 bunch dill", food: "dill" },
      { text: "Salt and pepper", food: "salt" },
      { text: "Egg noodles, to serve", food: "egg noodles" },
    ],
    instructions: [
      "Put the chicken in a large pot and cover with cold water by a few centimetres. Bring to a boil and skim.",
      "Add the onions, carrots, celery and half the dill. Simmer very gently, uncovered, for an hour and a half.",
      "Lift out the chicken. Strain the broth, season well, and pick the meat off the bones.",
      "Cook noodles separately and ladle the soup over them with some chicken and the rest of the dill, chopped.",
    ],
    cuisineTypes: ["Eastern Europe"],
    mealTypes: ["Dinner"],
    dishTypes: ["Soup"],
    dietLabels: [],
    healthLabels: [],
    caloriesPerServing: null,
    sourceName: "Mom",
    notes: null,
  },
  {
    author: "friend",
    imageSlug: "greek-salad",
    visibility: "public",
    inHousehold: false,
    title: "Chopped salad with feta",
    description:
      "Everything cut small so you get a bit of it all in each bite.",
    servings: 2,
    prepMinutes: 15,
    cookMinutes: null,
    ingredients: [
      { text: "1 cucumber", food: "cucumbers" },
      { text: "2 tomatoes", food: "tomatoes" },
      { text: "1/2 red onion", food: "red onions" },
      { text: "100 g feta", food: "feta cheese" },
      { text: "A handful of olives", food: "olives" },
      { text: "3 tbsp olive oil", food: "olive oil" },
      { text: "1 tbsp red wine vinegar", food: "red wine vinegar" },
      { text: "1 tsp dried oregano", food: "oregano" },
    ],
    instructions: [
      "Dice the cucumber, tomatoes and onion into small, even pieces and put them in a bowl.",
      "Crumble in the feta and add the olives.",
      "Whisk the oil, vinegar and oregano with a pinch of salt, pour over, and toss.",
    ],
    cuisineTypes: ["Greek", "Mediterranean"],
    mealTypes: ["Lunch"],
    dishTypes: ["Salad"],
    dietLabels: ["low-carb"],
    healthLabels: ["vegetarian", "gluten-free"],
    caloriesPerServing: 380,
    sourceName: null,
    notes: null,
  },
];
