"use client";

import { Check, X } from "lucide-react";
import React, { useState } from "react";

import RecipeSummary from "@components/Admin/RecipeSummary";
import RejectDialog from "@components/Admin/RejectDialog";
import { useToast } from "@context/ToastContext";
import { approveRecipe, rejectRecipe } from "@lib/admin/client";
import { formatRelativeTime } from "@lib/pantry/time";
import { UserRecipe } from "@lib/userRecipes/types";

interface ReviewQueueProps {
  recipes: UserRecipe[];
  /** Called with the decided recipe's id so the list drops it. */
  onDecided: (_recipeId: string) => void;
}

const BUTTON_CLASS =
  "flex h-9 items-center gap-1.5 rounded-md border border-line bg-surface-raised px-3 text-xs font-medium transition-colors hover:border-line-strong disabled:opacity-50";

/** Pending recipes, longest-waiting first, each with approve and reject. */
const ReviewQueue: React.FC<ReviewQueueProps> = ({ recipes, onDecided }) => {
  const { showToast } = useToast();
  const [rejecting, setRejecting] = useState<UserRecipe | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const approve = async (recipe: UserRecipe) => {
    setBusyId(recipe.id);
    try {
      await approveRecipe(recipe.id);
      showToast(`Approved "${recipe.title}".`);
      onDecided(recipe.id);
    } catch (caught) {
      console.error("Failed to approve recipe:", caught);
      showToast("Couldn't approve the recipe.");
    } finally {
      setBusyId(null);
    }
  };

  const reject = async (note: string) => {
    if (!rejecting) return;
    setBusyId(rejecting.id);
    try {
      await rejectRecipe(rejecting.id, note);
      showToast(`Rejected "${rejecting.title}".`);
      onDecided(rejecting.id);
      setRejecting(null);
    } catch (caught) {
      console.error("Failed to reject recipe:", caught);
      showToast("Couldn't reject the recipe.");
    } finally {
      setBusyId(null);
    }
  };

  if (recipes.length === 0)
    return (
      <p className="py-12 text-center text-sm text-ink-muted">
        Nothing waiting for review.
      </p>
    );

  return (
    <ul className="flex flex-col divide-y divide-line rounded-lg border border-line bg-surface-raised">
      {recipes.map((recipe) => {
        const isBusy = busyId === recipe.id;
        return (
          <li
            key={recipe.id}
            className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <RecipeSummary
              recipe={recipe}
              subline={`submitted ${formatRelativeTime(recipe.updatedAt)}`}
            />
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => approve(recipe)}
                disabled={isBusy}
                className={`${BUTTON_CLASS} text-success`}
              >
                <Check className="size-3.5" />
                Approve
              </button>
              <button
                type="button"
                onClick={() => setRejecting(recipe)}
                disabled={isBusy}
                className={`${BUTTON_CLASS} text-ink-muted hover:text-danger`}
              >
                <X className="size-3.5" />
                Reject…
              </button>
            </div>
          </li>
        );
      })}

      {rejecting && (
        <RejectDialog
          title={`Reject "${rejecting.title}"?`}
          confirmLabel="Reject"
          isBusy={busyId === rejecting.id}
          onConfirm={reject}
          onCancel={() => setRejecting(null)}
        />
      )}
    </ul>
  );
};

export default ReviewQueue;
