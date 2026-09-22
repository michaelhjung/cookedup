"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import Bowl from "@components/loaders/Bowl";
import Field, {
  INPUT_CLASS,
  TEXTAREA_CLASS,
} from "@components/RecipeEditor/Field";
import IngredientRows from "@components/RecipeEditor/IngredientRows";
import PhotoField, { PhotoChange } from "@components/RecipeEditor/PhotoField";
import StepRows from "@components/RecipeEditor/StepRows";
import TagPicker from "@components/RecipeEditor/TagPicker";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { useHousehold } from "@lib/household/useHousehold";
import { ensureProfile } from "@lib/profiles/client";
import {
  clearRecipeImage,
  createRecipe,
  saveRecipeImage,
  updateRecipe,
} from "@lib/userRecipes/client";
import {
  DESCRIPTION_MAX,
  DraftErrors,
  DraftField,
  NOTES_MAX,
  RecipeDraft,
  SOURCE_NAME_MAX,
  TITLE_MAX,
  createEmptyDraft,
  toDraft,
  validateRecipeDraft,
} from "@lib/userRecipes/draft";
import { RecipeVisibility, UserRecipe } from "@lib/userRecipes/types";

interface RecipeEditorProps {
  /** The recipe being edited; absent when writing a new one. */
  recipe?: UserRecipe;
}

const SECTION_CLASS = "flex flex-col gap-4 border-t border-line pt-6";
const SECTION_TITLE_CLASS = "text-base font-semibold tracking-[-0.01em]";

/**
 * One long form, sectioned: photo, basics, ingredients, steps, tags,
 * nutrition, source, who can see it. Everything is validated on Save
 * (inline errors, first one scrolled to), the recipe is written in one
 * request under RLS, and the photo follows as a second step that can
 * fail without losing the recipe.
 */
const RecipeEditor: React.FC<RecipeEditorProps> = ({ recipe }) => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household } = useHousehold();
  const { showToast } = useToast();
  const router = useRouter();

  const [draft, setDraft] = useState<RecipeDraft>(() =>
    recipe ? toDraft(recipe) : createEmptyDraft(),
  );
  const [photo, setPhoto] = useState<PhotoChange>({ kind: "keep" });
  const [errors, setErrors] = useState<DraftErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  const isEditing = Boolean(recipe);

  const set = <K extends keyof RecipeDraft>(key: K, value: RecipeDraft[K]) => {
    setDraft((previous) => ({ ...previous, [key]: value }));
    if (key in errors)
      setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const fieldError = (field: DraftField) => errors[field];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user || isSaving) return;

    const { errors: found, value } = validateRecipeDraft(draft);
    setErrors(found);
    if (!value) {
      const first = Object.keys(found)[0];
      document
        .getElementById(`recipe-${first}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSaving(true);
    try {
      // The byline is built from the profile in the database, so it
      // has to exist before the first recipe does.
      await ensureProfile(user);
      const saved =
        recipe ?
          await updateRecipe(recipe.id, value)
        : await createRecipe(user.id, value);

      let didPhotoFail = false;
      try {
        if (photo.kind === "replace")
          await saveRecipeImage(user.id, saved.id, photo.blob);
        else if (photo.kind === "remove" && recipe?.imageUrl)
          await clearRecipeImage(user.id, saved.id);
      } catch (caught) {
        console.error("Failed to save recipe photo:", caught);
        didPhotoFail = true;
      }

      if (didPhotoFail)
        showToast("Saved, but the photo didn't upload. Try again from Edit.");
      else showToast(isEditing ? "Recipe updated." : "Recipe saved.");

      router.push(`/recipes/${saved.id}`);
    } catch (caught) {
      console.error("Failed to save recipe:", caught);
      showToast("Couldn't save the recipe. Nothing was lost; try again.");
      setIsSaving(false);
    }
  };

  // ------------------------------------------------------------------

  if (authLoading)
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  if (!user)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Write down what you cook
        </h2>
        <p className="max-w-md text-sm text-ink-muted sm:text-base">
          Your recipes get their own page here, with a photo, the ingredients
          and the steps. Sign in to start one.
        </p>
        <button
          type="button"
          onClick={openAuthModal}
          className="mt-2 h-9 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          Sign in to get started
        </button>
      </div>
    );

  const numberInput = (
    id: DraftField & keyof RecipeDraft,
    label: string,
    options: { unit?: string; step?: string; hint?: string } = {},
  ) => (
    <Field
      id={`recipe-${id}`}
      label={label}
      error={fieldError(id)}
      hint={options.hint}
    >
      <div className="relative">
        <input
          id={`recipe-${id}`}
          type="number"
          inputMode="decimal"
          min={0}
          step={options.step ?? "1"}
          value={draft[id] as string}
          onChange={(event) => set(id, event.target.value)}
          aria-invalid={Boolean(fieldError(id))}
          className={`${INPUT_CLASS} ${options.unit ? "pr-12" : ""}`}
        />
        {options.unit && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-ink-muted">
            {options.unit}
          </span>
        )}
      </div>
    </Field>
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex w-full max-w-2xl flex-col gap-6 pb-24"
    >
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
          {isEditing ? "Edit recipe" : "New recipe"}
        </h2>
        <Link
          href={recipe ? `/recipes/${recipe.id}` : "/recipes"}
          className="text-sm text-ink-muted hover:text-ink"
        >
          Cancel
        </Link>
      </div>

      {/* Photo */}
      <PhotoField
        currentUrl={recipe?.imageUrl ?? null}
        change={photo}
        onChange={setPhoto}
        onError={showToast}
      />

      {/* Basics */}
      <section className="flex flex-col gap-4">
        <Field
          id="recipe-title"
          label="Title"
          error={fieldError("title")}
        >
          <input
            id="recipe-title"
            value={draft.title}
            maxLength={TITLE_MAX}
            onChange={(event) => set("title", event.target.value)}
            placeholder="Lemon garlic chicken"
            autoComplete="off"
            aria-invalid={Boolean(fieldError("title"))}
            className={INPUT_CLASS}
          />
        </Field>

        <Field
          id="recipe-description"
          label="Description"
          hint="Optional. A line or two about the dish."
          error={fieldError("description")}
        >
          <textarea
            id="recipe-description"
            value={draft.description}
            maxLength={DESCRIPTION_MAX}
            rows={2}
            onChange={(event) => set("description", event.target.value)}
            className={TEXTAREA_CLASS}
          />
        </Field>

        <div className="grid grid-cols-3 gap-3">
          {numberInput("servings", "Serves")}
          {numberInput("prepMinutes", "Prep", { unit: "min" })}
          {numberInput("cookMinutes", "Cook", { unit: "min" })}
        </div>
      </section>

      {/* Ingredients */}
      <section
        id="recipe-ingredients"
        className={SECTION_CLASS}
      >
        <div>
          <h3 className={SECTION_TITLE_CLASS}>Ingredients</h3>
          <p className="mt-0.5 text-xs text-ink-muted">
            One per line. Paste a whole list and it splits itself up.
          </p>
        </div>
        <IngredientRows
          rows={draft.ingredients}
          onChange={(rows) => set("ingredients", rows)}
        />
        {fieldError("ingredients") && (
          <p className="text-xs text-danger">{fieldError("ingredients")}</p>
        )}
      </section>

      {/* Steps */}
      <section
        id="recipe-steps"
        className={SECTION_CLASS}
      >
        <div>
          <h3 className={SECTION_TITLE_CLASS}>Steps</h3>
          <p className="mt-0.5 text-xs text-ink-muted">
            Enter starts the next step; Shift+Enter for a new line.
          </p>
        </div>
        <StepRows
          rows={draft.steps}
          onChange={(rows) => set("steps", rows)}
        />
        {fieldError("steps") && (
          <p className="text-xs text-danger">{fieldError("steps")}</p>
        )}
      </section>

      {/* Tags */}
      <section className={SECTION_CLASS}>
        <div>
          <h3 className={SECTION_TITLE_CLASS}>Tags</h3>
          <p className="mt-0.5 text-xs text-ink-muted">
            Optional. The same categories the recipe search filters by.
          </p>
        </div>
        <TagPicker
          tags={draft.tags}
          onChange={(tags) => set("tags", tags)}
        />
      </section>

      {/* Nutrition */}
      <details className="group/nutrition border-t border-line pt-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
          <div>
            <h3 className={SECTION_TITLE_CLASS}>Nutrition</h3>
            <p className="mt-0.5 text-xs text-ink-muted">
              Optional. Per serving, if you know it.
            </p>
          </div>
          <ChevronDown className="size-4 shrink-0 text-ink-muted transition-transform duration-200 group-open/nutrition:rotate-180" />
        </summary>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {numberInput("calories", "Calories", { unit: "kcal" })}
          {numberInput("protein", "Protein", { unit: "g", step: "0.1" })}
          {numberInput("carbs", "Carbs", { unit: "g", step: "0.1" })}
          {numberInput("fat", "Fat", { unit: "g", step: "0.1" })}
        </div>
      </details>

      {/* Source & notes */}
      <section className={SECTION_CLASS}>
        <h3 className={SECTION_TITLE_CLASS}>Source &amp; notes</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            id="recipe-sourceName"
            label="Adapted from"
            hint="Optional. A cookbook, a site, your grandmother."
            error={fieldError("sourceName")}
          >
            <input
              id="recipe-sourceName"
              value={draft.sourceName}
              maxLength={SOURCE_NAME_MAX}
              onChange={(event) => set("sourceName", event.target.value)}
              autoComplete="off"
              className={INPUT_CLASS}
            />
          </Field>
          <Field
            id="recipe-sourceUrl"
            label="Link"
            hint="Optional."
            error={fieldError("sourceUrl")}
          >
            <input
              id="recipe-sourceUrl"
              type="url"
              inputMode="url"
              value={draft.sourceUrl}
              onChange={(event) => set("sourceUrl", event.target.value)}
              placeholder="https://"
              autoComplete="off"
              aria-invalid={Boolean(fieldError("sourceUrl"))}
              className={INPUT_CLASS}
            />
          </Field>
        </div>
        <Field
          id="recipe-notes"
          label="Notes"
          hint="Optional. Tips, swaps, what to serve it with."
          error={fieldError("notes")}
        >
          <textarea
            id="recipe-notes"
            value={draft.notes}
            maxLength={NOTES_MAX}
            rows={3}
            onChange={(event) => set("notes", event.target.value)}
            className={TEXTAREA_CLASS}
          />
        </Field>
      </section>

      {/* Visibility */}
      <section className={SECTION_CLASS}>
        <h3 className={SECTION_TITLE_CLASS}>Who can see it</h3>
        <div
          role="radiogroup"
          aria-label="Visibility"
          className="grid grid-cols-2 rounded-md border border-line p-0.5"
        >
          {(
            [
              { value: "private", label: "Private" },
              { value: "public", label: "Public" },
            ] as { value: RecipeVisibility; label: string }[]
          ).map((option) => {
            const isSelected = draft.visibility === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => set("visibility", option.value)}
                className={`
                  h-10 rounded-sm px-2 text-sm font-medium transition-colors sm:h-9 sm:text-xs
                  ${isSelected ? "bg-ink text-surface" : "text-ink-muted hover:text-ink"}
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        <p className="-mt-2 text-[11px] leading-snug text-ink-muted">
          {draft.visibility === "public" ?
            <>
              Anyone can find it under Community and open its link, signed in or
              not, once an admin has approved it. Editing an approved recipe
              puts it back in review. By publishing you agree to the{" "}
              <Link
                href="/recipes/guidelines"
                target="_blank"
                className="font-medium text-ink underline underline-offset-2 hover:text-accent"
              >
                community guidelines
              </Link>
              .
            </>
          : "Only you can see it, plus anyone you invite from the recipe's page."
          }
        </p>
        {recipe?.reviewStatus === "rejected" && recipe.reviewNote && (
          <p className="-mt-1 rounded-md bg-danger-tint px-3 py-2 text-xs leading-snug text-danger">
            <span className="font-semibold">Not approved:</span>{" "}
            {recipe.reviewNote} Set it to Public again to resubmit.
          </p>
        )}
        {household && (
          <label className="flex cursor-pointer items-start gap-2.5 text-sm">
            <input
              type="checkbox"
              checked={draft.householdId === household.id}
              onChange={(event) =>
                set("householdId", event.target.checked ? household.id : null)
              }
              className="mt-0.5 size-4 shrink-0 accent-accent"
            />
            <span>
              Visible to {household.name}
              <span className="block text-[11px] leading-snug text-ink-muted">
                Everyone in your household can see it; only you can change it.
              </span>
            </span>
          </label>
        )}
      </section>

      {/* Save */}
      <div className="flex items-center justify-end gap-3 border-t border-line pt-6">
        <Link
          href={recipe ? `/recipes/${recipe.id}` : "/recipes"}
          className="text-sm text-ink-muted hover:text-ink"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={isSaving}
          className="h-10 rounded-md bg-accent px-5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {isSaving ?
            "Saving…"
          : isEditing ?
            "Save changes"
          : "Save recipe"}
        </button>
      </div>
    </form>
  );
};

export default RecipeEditor;
