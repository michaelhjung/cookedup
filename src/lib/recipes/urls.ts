// src/lib/recipes/urls.ts
//
// A user-authored recipe's `recipe.url` is app-relative ("/recipes/<id>"),
// built that way by the database so it is local on localhost and live
// on cookedup.app. Everything that renders a recipe link asks here
// whether to open it in-app or as an external site.

const INTERNAL_RECIPE_PATH = /^\/recipes\/([0-9a-f-]{36})$/i;

export const isInternalRecipeUrl = (url: string): boolean =>
  INTERNAL_RECIPE_PATH.test(url);

/** The user recipe's id, when the url is one of ours. */
export const getUserRecipeId = (url: string): string | null =>
  url.match(INTERNAL_RECIPE_PATH)?.[1] ?? null;

/**
 * For places that leave the app (calendar feeds), a relative url needs
 * the origin the feed was requested from.
 */
export const toAbsoluteRecipeUrl = (url: string, origin: string): string =>
  isInternalRecipeUrl(url) ? `${origin}${url}` : url;
