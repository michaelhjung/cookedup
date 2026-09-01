// src/app/api/edamam/route.ts

import { NextRequest, NextResponse } from "next/server";

const { EDAMAM_APP_ID, EDAMAM_API_KEY } = process.env;
const apiBaseUrl = "https://api.edamam.com";

const getEdamamApiUrl = (ingredientsQuery: string) =>
  `${apiBaseUrl}/api/recipes/v2?type=public&q=${ingredientsQuery}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}`;

// Repeatable filter params for the random recipe generator (e.g.
// `diet=low-carb&diet=high-fiber`), forwarded to Edamam as-is. Values are
// validated client-side against src/data/randomRecipeFilters.ts before
// ever reaching this route.
const RANDOM_RECIPE_FILTER_PARAMS = [
  "cuisineType",
  "diet",
  "health",
  "mealType",
  "dishType",
] as const;

const getRandomRecipesApiUrl = (searchParams: URLSearchParams): string => {
  const edamamParams = new URLSearchParams();
  edamamParams.set("type", "public");
  edamamParams.set("random", "true");

  RANDOM_RECIPE_FILTER_PARAMS.forEach((param) => {
    searchParams.getAll(param).forEach((value) => {
      edamamParams.append(param, value);
    });
  });

  edamamParams.set("app_id", EDAMAM_APP_ID!);
  edamamParams.set("app_key", EDAMAM_API_KEY!);

  return `${apiBaseUrl}/api/recipes/v2?${edamamParams.toString()}`;
};

export async function GET(req: NextRequest) {
  // Edamam's own pagination links (`_links.next.href`) already carry our
  // app_id/app_key. Fetching them server-side (instead of the client
  // fetching that link directly) keeps those credentials out of the
  // browser's network tab.
  const nextPage = req.nextUrl.searchParams.get("nextPage");
  const ingredients = req.nextUrl.searchParams.get("ingredients");
  const isRandomRequest = req.nextUrl.searchParams.get("random") === "true";

  if (!nextPage && !ingredients && !isRandomRequest)
    return NextResponse.json({
      message: "At least one ingredient is required.",
    });

  const ingredientsQuery =
    Array.isArray(ingredients) ? ingredients.join(",") : ingredients;

  const url =
    nextPage ||
    (isRandomRequest ?
      getRandomRecipesApiUrl(req.nextUrl.searchParams)
    : getEdamamApiUrl(ingredientsQuery!));

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to get recipes.");

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
