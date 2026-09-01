# Random Recipe Generator — Design

## Summary

Add a "Random" mode to the existing search sidebar that lets a user pick
from Edamam's cuisine, diet, health, meal-type, and dish-type filters and
generate a batch of random matching recipes, displayed in the existing
recipe grid with full save/star support.

## Goals

- Let users discover recipes without knowing specific ingredients,
  filtered by cuisine, diet, health restrictions, meal type, and dish
  type.
- Feel native to the existing app: same results grid, same save/star
  behavior, same loading/error/empty states.
- Support "generate one" through "generate many" from a single random
  draw.

## Non-goals

- "Kid-friendly" filtering — no reliable signal exists in Edamam's data
  (not a label, not derivable from `cautions`, which is allergen-focused,
  not spice/age-appropriateness). Dropped per explicit decision.
- New pagination/infinite-scroll for random results — Edamam disables
  cursor pagination when `random=true` (verified below).
- Server-side caching of random results — out of scope; each Generate
  click is a live Edamam call.

## Verified technical constraints

Live-tested against the Edamam v2 Recipe Search API using this project's
own credentials before writing this design, rather than assumed:

- `random=true` returns a genuinely randomized order on each call —
  confirmed by issuing two identical queries back to back and observing
  different result orderings both times.
- `q` is **not required** as long as at least one filter (`diet`,
  `health`, `cuisineType`, `mealType`, `dishType`) is present. With zero
  filters and no `q`, Edamam returns an empty result set (`count: 0`).
  The UI must require at least one filter before enabling Generate.
- `to`/`from` (page-size) params are **ignored** when `random=true` —
  every call returns a fixed batch of up to 20 hits regardless of `to`.
  "How many to show" is therefore a client-side slice of that batch, not
  a server-side page size.
- `_links.next` is **absent** when `random=true` — there is no further
  pagination for a given random draw. "Generate" doubles as "regenerate":
  each click is a fresh, independently-randomized call.
- Multiple values for the same filter category are OR'd together via
  repeated query params (e.g. `diet=low-carb&diet=high-fiber`) —
  confirmed working and returning recipes matching either.
- Passing an unrecognized filter value returns HTTP 400 (or 403 with a
  `{"errorCode":"not_allowed", ...}` body for values that exist but
  aren't available on this account's plan tier). The app must only ever
  send values from the verified lists below.

### Verified filter value lists

**Diet** (6): `balanced`, `high-fiber`, `high-protein`, `low-carb`,
`low-fat`, `low-sodium`

**Health** (35): `alcohol-cocktail`, `alcohol-free`, `celery-free`,
`crustacean-free`, `dairy-free`, `DASH`, `egg-free`, `fish-free`,
`fodmap-free`, `gluten-free`, `immuno-supportive`, `keto-friendly`,
`kidney-friendly`, `kosher`, `low-potassium`, `low-sugar`, `lupine-free`,
`Mediterranean`, `mollusk-free`, `mustard-free`, `no-oil-added`, `paleo`,
`peanut-free`, `pescatarian`, `pork-free`, `red-meat-free`,
`sesame-free`, `shellfish-free`, `soy-free`, `sugar-conscious`,
`sulfite-free`, `tree-nut-free`, `vegan`, `vegetarian`, `wheat-free`

> `low-fat-abs` is a real Edamam value but was rejected (HTTP 403,
> `errorCode: not_allowed`) on this account's plan tier — excluded.

**Cuisine type** (20): `American`, `Asian`, `British`, `Caribbean`,
`Central Europe`, `Chinese`, `Eastern Europe`, `French`, `Greek`,
`Indian`, `Italian`, `Japanese`, `Korean`, `Kosher`, `Mediterranean`,
`Mexican`, `Middle Eastern`, `Nordic`, `South American`,
`South East Asian`

**Meal type** (5): `Breakfast`, `Dinner`, `Lunch`, `Snack`, `Teatime`

**Dish type** (17): `Alcohol Cocktail`, `Biscuits and cookies`, `Bread`,
`Cereals`, `Condiments and sauces`, `Desserts`, `Drinks`, `Main course`,
`Pancake`, `Preps`, `Preserve`, `Salad`, `Sandwiches`, `Side dish`,
`Soup`, `Starter`, `Sweets`

## Architecture

### Entry point

The `Search` sidebar gains a small mode switcher at the top —
"Ingredients" / "Random" (tabs or a segmented control). Selecting
"Random" swaps the sidebar body to the new `RandomRecipeFilters`
component; the existing "view saved recipes" star stays where it is
regardless of mode.

### `RandomRecipeFilters` component

Lives at
`src/components/SearchAndRecipes/Search/RandomRecipeFilters/index.tsx`,
alongside the existing ingredient-search components.

- A single searchable tag picker across all 83 filter values, each
  rendered with its category as a prefix (e.g. "Cuisine: Italian",
  "Health: Vegan") — the same interaction model the ingredient search
  already has: type to filter the list, click/select to add, selected
  values shown as removable chips.
- Built on a new small generic component, `TagMultiSelect`, generalized
  from the existing `SearchInput`/`IngredientsList`/`SelectedIngredients`
  pattern to take arbitrary `{ value, label, group }[]` options instead
  of a flat ingredient string list. Only the new random-filter UI uses
  it initially — migrating the existing ingredient search onto the same
  component is a natural candidate for the later DRY/maintainability
  phase already planned, not this feature; not doing so here avoids
  touching the already-working ingredient search flow in this change.
- A "How many to show" control: 1 / 5 / 10 / 20 (defaulting to 10).
- A "Generate" button, disabled until at least one filter is selected.
  Every click is a fresh random draw (also serves as "regenerate").

### Filter data

A new static data file, `src/data/randomRecipeFilters.ts`, analogous to
the existing `src/data/ingredients.json`, holding the five verified
value lists above with human-readable labels and their Edamam
category/param name.

### Backend

Extend `src/app/api/edamam/route.ts` (not a new route) to accept
optional `random`, `cuisineType`, `diet`, `health`, `mealType`, and
`dishType` params (each repeatable) alongside the existing
`ingredients`/`nextPage` params. When any filter param is present, the
route builds the Edamam query from those instead of `q` and passes
`random=true` through. Existing ingredient-search and pagination
behavior is unchanged. Extending the existing route (rather than adding
a separate one) avoids duplicating the fetch/error-handling logic that
already exists there.

### Client data flow

A new handler in `Search/index.tsx`, alongside the existing
`handleSearchRecipes`/`handleViewSavedRecipes` —
`handleGenerateRandomRecipes(filters, count)` — calls `/api/edamam` with
the selected filters and `random=true`, slices the returned hits to
`count`, and calls `setRecipesData` with the result, exactly like the
existing handlers do. `Recipes`, `RecipeCard`, and `StarIcon` require no
changes at all — they already just render whatever `recipesData` holds,
so saving/starring a randomly-generated recipe works for free.

### Error/empty states

Reuses existing states unmodified: `errorFetchingRecipes` for request
failures, the existing `count === 0` "chef confused" empty state when a
filter combination matches nothing, `isLoadingRecipes` for the loading
spinner.

## Testing

No test framework exists in this repo yet. Verification will be manual
(typecheck/lint/build, plus live testing of a few filter combinations),
consistent with how prior work in this project has been verified.
Introducing a test framework remains slated for the DRY/maintainability
phase.

## Explicitly out of scope here

- Migrating ingredient search onto the shared `TagMultiSelect` component
  (DRY/maintainability phase).
- Any further mobile-layout work beyond what already responsively adapts
  (mobile-responsiveness phase).
- "Kid-friendly" filtering (no reliable data signal; dropped).
