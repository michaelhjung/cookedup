"use client";

import { Clock, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useToast } from "@context/ToastContext";
import { resubmitRecipe } from "@lib/userRecipes/client";
import { UserRecipe } from "@lib/userRecipes/types";

interface ReviewBannerProps {
  recipe: UserRecipe;
}

/**
 * For the author only: where a public recipe stands with the admin.
 * Nothing while it's private or live; a waiting note while pending;
 * the admin's reason and a Resubmit button after a rejection.
 */
const ReviewBanner: React.FC<ReviewBannerProps> = ({ recipe }) => {
  const { showToast } = useToast();
  const router = useRouter();
  const [isBusy, setIsBusy] = useState(false);

  const resubmit = async () => {
    setIsBusy(true);
    try {
      await resubmitRecipe(recipe.id);
      showToast("Sent for review.");
      router.refresh();
    } catch (caught) {
      console.error("Failed to resubmit recipe:", caught);
      showToast("Couldn't resubmit the recipe.");
    } finally {
      setIsBusy(false);
    }
  };

  if (recipe.reviewStatus === "pending" && recipe.visibility === "public")
    return (
      <p className="flex items-start gap-2 rounded-md border border-line bg-well px-3 py-2 text-sm text-ink-muted">
        <Clock
          className="mt-0.5 size-4 shrink-0"
          aria-hidden
        />
        <span>
          <span className="font-semibold text-ink">In review.</span> It'll show
          in Community once an admin approves it. Your household and anyone
          you've shared it with can already open it.
        </span>
      </p>
    );

  if (recipe.reviewStatus === "rejected")
    return (
      <div className="flex flex-col gap-2 rounded-md bg-danger-tint px-3 py-2.5 text-sm text-danger sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <p className="flex items-start gap-2">
          <XCircle
            className="mt-0.5 size-4 shrink-0"
            aria-hidden
          />
          <span>
            <span className="font-semibold">Not approved.</span>{" "}
            {recipe.reviewNote ?? "It doesn't meet the community guidelines."}{" "}
            It's private again; fix it and resubmit.
          </span>
        </p>
        <button
          type="button"
          onClick={resubmit}
          disabled={isBusy}
          className="h-8 shrink-0 self-start rounded-md border border-danger/40 px-3 text-xs font-semibold transition-colors hover:bg-danger/10 disabled:opacity-50 sm:self-auto"
        >
          {isBusy ? "Sending…" : "Resubmit"}
        </button>
      </div>
    );

  return null;
};

export default ReviewBanner;
