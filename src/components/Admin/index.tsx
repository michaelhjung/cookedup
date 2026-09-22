"use client";

import React, { useCallback, useEffect, useState } from "react";

import ReportsList from "@components/Admin/ReportsList";
import ReviewQueue from "@components/Admin/ReviewQueue";
import Bowl from "@components/loaders/Bowl";
import { useToast } from "@context/ToastContext";
import { fetchOpenReports, fetchPendingRecipes } from "@lib/admin/client";
import { ReportedRecipe, groupReportsByRecipe } from "@lib/admin/groupReports";
import { UserRecipe } from "@lib/userRecipes/types";

type Tab = "queue" | "reports";

const TAB_LABELS: Record<Tab, string> = {
  queue: "Review queue",
  reports: "Reports",
};

/**
 * Two lists, each a decision at a time. Both load up front so the tab
 * counts are right; a decision removes its row on the spot rather than
 * refetching, and the RPC having succeeded is what makes that honest.
 */
const AdminPage: React.FC = () => {
  const { showToast } = useToast();
  const [tab, setTab] = useState<Tab>("queue");
  const [pending, setPending] = useState<UserRecipe[] | null>(null);
  const [reported, setReported] = useState<ReportedRecipe[] | null>(null);

  const load = useCallback(async () => {
    try {
      const [recipes, { reports, recipes: reportedRecipes }] =
        await Promise.all([fetchPendingRecipes(), fetchOpenReports()]);
      setPending(recipes);
      setReported(groupReportsByRecipe(reports, reportedRecipes));
    } catch (caught) {
      console.error("Failed to load moderation data:", caught);
      showToast("Couldn't load the queue.");
    }
  }, [showToast]);

  useEffect(() => {
    load();
  }, [load]);

  const dropPending = (recipeId: string) =>
    setPending((previous) =>
      previous ? previous.filter((recipe) => recipe.id !== recipeId) : previous,
    );

  const dropReported = (recipeId: string) =>
    setReported((previous) =>
      previous ?
        previous.filter((group) => group.recipe.id !== recipeId)
      : previous,
    );

  // Unpublishing from a report also resolves the queue side, and
  // rejecting from the queue closes any reports; keep both lists honest.
  const handleDecided = (recipeId: string) => {
    dropPending(recipeId);
    dropReported(recipeId);
  };

  const isLoading = pending === null || reported === null;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-4">
        <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
          Admin
        </h2>
        <p className="text-xs text-ink-muted">
          Recipes waiting to go public, and what people have reported.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Show"
        className="mb-4 flex gap-0.5 rounded-md bg-well p-0.5"
      >
        {(["queue", "reports"] as Tab[]).map((option) => {
          const isSelected = option === tab;
          const count = option === "queue" ? pending?.length : reported?.length;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setTab(option)}
              className={`
                h-10 flex-1 truncate rounded-sm px-1 text-xs font-medium transition-colors sm:h-9
                ${isSelected ? "bg-surface-raised text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "text-ink-muted hover:text-ink"}
              `}
            >
              {TAB_LABELS[option]}
              {count !== undefined && (
                <span className="ml-1 text-ink-muted">{count}</span>
              )}
            </button>
          );
        })}
      </div>

      {isLoading ?
        <div className="flex justify-center py-16">
          <Bowl />
        </div>
      : tab === "queue" ?
        <ReviewQueue
          recipes={pending}
          onDecided={handleDecided}
        />
      : <ReportsList
          groups={reported}
          onResolved={handleDecided}
        />
      }
    </div>
  );
};

export default AdminPage;
