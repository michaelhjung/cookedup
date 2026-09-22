"use client";

import { Link as LinkIcon, Pencil, Share2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import AddToPlanButton from "@components/MealPlan/AddToPlanButton";
import ConfirmDialog from "@components/MealPlan/ConfirmDialog";
import RecipeSharingSheet from "@components/RecipeDetail/RecipeSharingSheet";
import StarIcon from "@components/SearchAndRecipes/Recipes/StarIcon";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { Hit } from "@interfaces/edamam";
import { deleteRecipe, removeRecipeImageObject } from "@lib/userRecipes/client";
import { UserRecipe } from "@lib/userRecipes/types";
import { supabase } from "@utils/supabase";

interface RecipeActionsProps {
  recipe: UserRecipe;
  isAuthor: boolean;
}

const TEXT_BUTTON_CLASS =
  "flex h-9 items-center gap-1.5 rounded-md border border-line bg-surface-raised px-3 text-xs font-medium text-ink transition-colors hover:border-line-strong";

/**
 * The row under the title: star and plan (the same controls as a
 * recipe card, fed the same hit), copy the link, and for the author
 * edit, sharing and delete.
 */
const RecipeActions: React.FC<RecipeActionsProps> = ({ recipe, isAuthor }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);
  const [isSharingOpen, setIsSharingOpen] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Whether this one recipe is starred; StarIcon reads it as a list.
  useEffect(() => {
    if (!user) {
      setSavedRecipes([]);
      return;
    }
    let cancelled = false;
    supabase
      .from("recipes")
      .select("data")
      .eq("user_id", user.id)
      .eq("recipe_url", recipe.hit.recipe.url)
      .eq("is_starred", true)
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled && data) setSavedRecipes([data.data as Hit]);
      });
    return () => {
      cancelled = true;
    };
  }, [user, recipe.hit.recipe.url]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied.");
    } catch {
      showToast("Couldn't copy the link.");
    }
  };

  const remove = async () => {
    if (!user) return;
    setIsDeleting(true);
    try {
      await deleteRecipe(recipe.id);
      if (recipe.imageUrl) await removeRecipeImageObject(user.id, recipe.id);
      showToast("Recipe deleted.");
      router.push("/recipes");
    } catch (caught) {
      console.error("Failed to delete recipe:", caught);
      showToast("Couldn't delete the recipe.");
      setIsDeleting(false);
      setIsConfirmingDelete(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex h-9 items-center gap-0.5 rounded-md border border-line bg-surface-raised px-1">
        <StarIcon
          hit={recipe.hit}
          user={user}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
        />
        <AddToPlanButton
          hit={recipe.hit}
          user={user}
        />
      </div>

      <button
        type="button"
        onClick={copyLink}
        className={TEXT_BUTTON_CLASS}
      >
        <LinkIcon className="size-3.5" />
        Copy link
      </button>

      {isAuthor && (
        <>
          <Link
            href={`/recipes/${recipe.id}/edit`}
            className={TEXT_BUTTON_CLASS}
          >
            <Pencil className="size-3.5" />
            Edit
          </Link>
          <button
            type="button"
            onClick={() => setIsSharingOpen(true)}
            className={TEXT_BUTTON_CLASS}
          >
            <Share2 className="size-3.5" />
            Sharing
          </button>
          <button
            type="button"
            onClick={() => setIsConfirmingDelete(true)}
            className={`${TEXT_BUTTON_CLASS} text-ink-muted hover:text-danger`}
          >
            <Trash2 className="size-3.5" />
            Delete
          </button>
        </>
      )}

      {isSharingOpen && (
        <RecipeSharingSheet
          recipe={recipe}
          onClose={() => setIsSharingOpen(false)}
        />
      )}

      {isConfirmingDelete && (
        <ConfirmDialog
          title="Delete this recipe?"
          body="Anyone who saved or planned it keeps their copy, but the page and its photo go away. This can't be undone."
          confirmLabel="Delete"
          busyLabel="Deleting…"
          isDestructive
          isBusy={isDeleting}
          onConfirm={remove}
          onCancel={() => setIsConfirmingDelete(false)}
        />
      )}
    </div>
  );
};

export default RecipeActions;
