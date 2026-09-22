import Image from "next/image";
import React from "react";

import IngredientList from "@components/RecipeDetail/IngredientList";
import PantryMatch from "@components/RecipeDetail/PantryMatch";
import RecipeActions from "@components/RecipeDetail/RecipeActions";
import { RANDOM_RECIPE_FILTER_CATEGORIES } from "@data/randomRecipeFilters";
import { UserRecipe, isIngredientHeading } from "@lib/userRecipes/types";

interface RecipeDetailProps {
  recipe: UserRecipe;
  viewerId: string | null;
}

const formatMinutes = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} hr` : `${hours} hr ${rest} min`;
};

const describeVisibility = (recipe: UserRecipe): string =>
  recipe.visibility === "public" ? "Public"
  : recipe.householdId ? "Household"
  : "Private";

/**
 * A recipe's own page. Rendered on the server so a shared link carries
 * a title and picture; the interactive bits (actions, pantry count,
 * tick-off ingredients) are small client islands inside it.
 */
const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, viewerId }) => {
  const isAuthor = viewerId !== null && viewerId === recipe.userId;
  const totalMinutes = (recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0);
  const { nutrition } = recipe;
  const foods = recipe.ingredients.flatMap((ingredient) =>
    isIngredientHeading(ingredient) ? [] : [ingredient.food ?? ingredient.text],
  );

  const facts = [
    `Serves ${recipe.servings}`,
    recipe.prepMinutes ? `Prep ${formatMinutes(recipe.prepMinutes)}` : null,
    recipe.cookMinutes ? `Cook ${formatMinutes(recipe.cookMinutes)}` : null,
    recipe.prepMinutes && recipe.cookMinutes ?
      `${formatMinutes(totalMinutes)} total`
    : null,
    nutrition.calories !== null ?
      `${Math.round(nutrition.calories)} kcal per serving`
    : null,
  ].filter((fact): fact is string => fact !== null);

  const macros = [
    nutrition.protein !== null ? `${nutrition.protein} g protein` : null,
    nutrition.carbs !== null ? `${nutrition.carbs} g carbs` : null,
    nutrition.fat !== null ? `${nutrition.fat} g fat` : null,
  ].filter((fact): fact is string => fact !== null);

  // Tags in the same order the filter groups list them.
  const tags = RANDOM_RECIPE_FILTER_CATEGORIES.flatMap((category) =>
    recipe.tags[category.param].map((value) => ({
      key: `${category.param}:${value}`,
      label: value,
    })),
  );

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-well">
        <Image
          src={recipe.imageUrl ?? "/recipe-placeholder.svg"}
          alt={recipe.imageUrl ? recipe.title : ""}
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <header className="flex flex-col gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {recipe.title}
          </h1>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
            <span>by {recipe.hit.recipe.source}</span>
            {isAuthor && (
              <span className="rounded-sm bg-well px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em]">
                {describeVisibility(recipe)}
              </span>
            )}
          </p>
        </div>

        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted tabular-nums">
          {facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
          <PantryMatch foods={foods} />
        </p>
        {macros.length > 0 && (
          <p className="-mt-2 text-xs text-ink-muted tabular-nums">
            {macros.join(" · ")} per serving
          </p>
        )}

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag.key}
                className="rounded-full bg-well px-2.5 py-1 text-xs text-ink-muted"
              >
                {tag.label}
              </li>
            ))}
          </ul>
        )}

        {recipe.description && (
          <p className="max-w-prose text-[15px] leading-relaxed text-ink">
            {recipe.description}
          </p>
        )}

        <RecipeActions
          recipe={recipe}
          isAuthor={isAuthor}
        />
      </header>

      <div className="grid gap-8 border-t border-line pt-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section>
          <h2 className="mb-3 text-base font-semibold tracking-[-0.01em]">
            Ingredients
          </h2>
          <IngredientList ingredients={recipe.ingredients} />
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold tracking-[-0.01em]">
            Steps
          </h2>
          <ol className="flex flex-col gap-4">
            {recipe.instructions.map((step, index) => (
              <li
                key={index}
                className="flex gap-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-tint text-xs font-semibold text-accent tabular-nums">
                  {index + 1}
                </span>
                <p className="min-w-0 whitespace-pre-line pt-0.5 text-[15px] leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {(recipe.notes || recipe.sourceName || recipe.sourceUrl) && (
        <footer className="flex flex-col gap-3 border-t border-line pt-6 text-sm">
          {recipe.notes && (
            <div>
              <h2 className="mb-1.5 text-base font-semibold tracking-[-0.01em]">
                Notes
              </h2>
              <p className="max-w-prose whitespace-pre-line leading-relaxed">
                {recipe.notes}
              </p>
            </div>
          )}
          {(recipe.sourceName || recipe.sourceUrl) && (
            <p className="text-ink-muted">
              Adapted from{" "}
              {recipe.sourceUrl ?
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  {recipe.sourceName ?? new URL(recipe.sourceUrl).hostname}
                </a>
              : recipe.sourceName}
            </p>
          )}
        </footer>
      )}
    </article>
  );
};

export default RecipeDetail;
