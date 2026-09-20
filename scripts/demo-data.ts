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
    dietLabels: ["Low-Carb"],
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
    healthLabels: ["Vegetarian", "Gluten-Free"],
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
    dietLabels: ["Low-Carb"],
    healthLabels: ["Vegetarian", "Gluten-Free"],
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
        food: text,
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

/** One planned meal, as a day of the current week (0 = Monday). */
export interface DemoMeal {
  day: number;
  slot: "breakfast" | "lunch" | "snack" | "dinner";
  recipe: DemoRecipeKey;
}

/**
 * This week's plan; `day` counts from Sunday, like the calendar's
 * columns. Weekday breakfasts come from a repeat rule instead.
 */
export const DEMO_WEEK: DemoMeal[] = [
  { day: 0, slot: "dinner", recipe: "tomatoBasilPasta" },
  { day: 1, slot: "dinner", recipe: "tomatoBasilPasta" },
  { day: 2, slot: "lunch", recipe: "greekSalad" },
  { day: 2, slot: "dinner", recipe: "veggieStirFry" },
  { day: 3, slot: "dinner", recipe: "blackBeanTacos" },
  { day: 4, slot: "lunch", recipe: "blackBeanTacos" },
  { day: 4, slot: "dinner", recipe: "misoSalmon" },
  { day: 5, slot: "dinner", recipe: "lemonGarlicChicken" },
  { day: 6, slot: "breakfast", recipe: "shakshuka" },
  { day: 6, slot: "lunch", recipe: "greekSalad" },
];
