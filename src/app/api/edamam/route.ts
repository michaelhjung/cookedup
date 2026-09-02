// src/app/api/edamam/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  RANDOM_RECIPE_FILTER_OPTIONS,
  RANDOM_RECIPE_FILTER_PARAM_NAMES,
} from "@data/randomRecipeFilters";

const { EDAMAM_APP_ID, EDAMAM_API_KEY } = process.env;
const apiBaseUrl = "https://api.edamam.com";

// (param, value) pairs allowed through to Edamam for the filter
// checkboxes (cuisine/diet/health/meal/dish type) — used both for
// filters-only random draws and for an ingredients search narrowed by
// filters. This is a server-side allowlist, not just client-side UI
// affordance: anyone can call this route directly (curl, etc.) with
// arbitrary values, and forwarding those unchecked would let them burn
// this app's Edamam quota. We only forward values that exactly match an
// entry in the verified src/data/randomRecipeFilters.ts list; anything
// else is silently dropped.
const VALID_FILTER_VALUES_BY_PARAM = RANDOM_RECIPE_FILTER_OPTIONS.reduce(
  (acc, option) => {
    const values = acc.get(option.param) ?? new Set<string>();
    values.add(option.value);
    acc.set(option.param, values);
    return acc;
  },
  new Map<string, Set<string>>(),
);

const appendValidFilterParams = (
  edamamParams: URLSearchParams,
  searchParams: URLSearchParams,
): void => {
  RANDOM_RECIPE_FILTER_PARAM_NAMES.forEach((param) => {
    const validValues = VALID_FILTER_VALUES_BY_PARAM.get(param);
    searchParams.getAll(param).forEach((value) => {
      if (!validValues?.has(value)) return;
      edamamParams.append(param, value);
    });
  });
};

const getEdamamApiUrl = (
  ingredientsQuery: string,
  searchParams: URLSearchParams,
): string => {
  const edamamParams = new URLSearchParams();
  edamamParams.set("type", "public");
  edamamParams.set("q", ingredientsQuery);
  appendValidFilterParams(edamamParams, searchParams);
  edamamParams.set("app_id", EDAMAM_APP_ID!);
  edamamParams.set("app_key", EDAMAM_API_KEY!);

  return `${apiBaseUrl}/api/recipes/v2?${edamamParams.toString()}`;
};

const getRandomRecipesApiUrl = (searchParams: URLSearchParams): string => {
  const edamamParams = new URLSearchParams();
  edamamParams.set("type", "public");
  edamamParams.set("random", "true");
  appendValidFilterParams(edamamParams, searchParams);
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
    : getEdamamApiUrl(ingredientsQuery!, req.nextUrl.searchParams));

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to get recipes.");

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
