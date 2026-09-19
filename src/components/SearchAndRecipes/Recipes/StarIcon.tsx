import { User } from "@supabase/supabase-js";
import { Star } from "lucide-react";
import React, { useRef } from "react";

import Tooltip from "@components/Tooltip";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { Hit } from "@interfaces/edamam";
import { unstarRecipe } from "@lib/mealPlan/client";
import { supabase } from "@utils/supabase";

interface StarIconProps {
  hit: Hit;
  user: User | null;
  savedRecipes: Hit[];
  setSavedRecipes: React.Dispatch<React.SetStateAction<Hit[]>>;
}

const persistSaveRecipe = async (data: Hit) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) throw new Error("Your session has expired.");

  const response = await fetch("/api/recipes/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok)
    throw new Error(result.message || "An unknown error occurred.");
};

/**
 * Unstarring can't just delete the row any more: the same library row
 * may be what a planned meal points at. The RPC clears the star and only
 * removes the row when nothing else needs it.
 */
const persistRemoveRecipe = async (data: Hit) => unstarRecipe(data.recipe.url);

const StarIcon: React.FC<StarIconProps> = ({
  hit,
  user,
  savedRecipes,
  setSavedRecipes,
}) => {
  const { openAuthModal } = useAuth();
  const { showToast } = useToast();
  const isSaved = savedRecipes.some(
    (savedHit) => savedHit?.recipe?.url === hit?.recipe?.url,
  );
  const tooltipText =
    !user ? "Sign in to save this recipe"
    : isSaved ? "Click to remove this recipe from your saved list"
    : "Click to save this recipe";

  // Toggling the star updates `savedRecipes` immediately (optimistic), so
  // it feels instant regardless of network speed. The actual request is
  // chained off this ref so rapid re-toggling still reaches the server in
  // the order it was clicked, and a failure rolls the optimistic change
  // back with a toast.
  const pendingRequestRef = useRef<Promise<void>>(Promise.resolve());

  const saveRecipe = (data: Hit) => {
    if (!user) {
      openAuthModal();
      return;
    }

    setSavedRecipes((prev) => [...prev, data]);

    pendingRequestRef.current = pendingRequestRef.current.then(() =>
      persistSaveRecipe(data).catch((error) => {
        setSavedRecipes((prev) =>
          prev.filter((savedHit) => savedHit.recipe.url !== data.recipe.url),
        );
        showToast("We couldn't save that recipe. Try again.");
        console.error(
          "An error occurred while attempting to save the recipe:",
          error,
        );
      }),
    );
  };

  const removeRecipe = (data: Hit) => {
    if (!user) {
      openAuthModal();
      return;
    }

    setSavedRecipes((prev) =>
      prev.filter((savedHit) => savedHit.recipe.url !== data.recipe.url),
    );

    pendingRequestRef.current = pendingRequestRef.current.then(() =>
      persistRemoveRecipe(data).catch((error) => {
        setSavedRecipes((prev) => [...prev, data]);
        showToast("We couldn't remove that recipe. Try again.");
        console.error(
          "An error occurred while attempting to remove the saved recipe:",
          error,
        );
      }),
    );
  };

  return (
    <Tooltip text={tooltipText}>
      <button
        type="button"
        aria-label={isSaved ? "Remove from saved recipes" : "Save recipe"}
        aria-pressed={isSaved}
        className={`
          flex size-7 items-center justify-center rounded-md
          transition-colors hover:bg-well
          ${isSaved ? "text-accent" : "text-ink-muted hover:text-ink"}
        `}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();

          if (isSaved) removeRecipe(hit);
          else saveRecipe(hit);
        }}
      >
        <Star
          strokeWidth={2}
          className={`size-4 ${isSaved ? "fill-accent" : ""}`}
        />
      </button>
    </Tooltip>
  );
};

export default StarIcon;
