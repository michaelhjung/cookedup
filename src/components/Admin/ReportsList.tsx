"use client";

import { Check, EyeOff } from "lucide-react";
import React, { useState } from "react";

import RecipeSummary from "@components/Admin/RecipeSummary";
import RejectDialog from "@components/Admin/RejectDialog";
import { useToast } from "@context/ToastContext";
import { dismissReports, rejectRecipe } from "@lib/admin/client";
import { ReportedRecipe } from "@lib/admin/groupReports";
import { formatRelativeTime } from "@lib/pantry/time";
import { getReportReasonLabel } from "@lib/userRecipes/reports";
import { isRecipeLive } from "@lib/userRecipes/types";

interface ReportsListProps {
  groups: ReportedRecipe[];
  /** Called with the recipe's id once its reports are closed. */
  onResolved: (_recipeId: string) => void;
}

const BUTTON_CLASS =
  "flex h-9 items-center gap-1.5 rounded-md border border-line bg-surface-raised px-3 text-xs font-medium transition-colors hover:border-line-strong disabled:opacity-50";

/**
 * Open reports, one row per recipe. Dismiss closes them and leaves the
 * recipe alone; Unpublish takes it down with a note, which closes them
 * too. A recipe that already left Community (its author withdrew it,
 * or it's back in review) only offers Dismiss.
 */
const ReportsList: React.FC<ReportsListProps> = ({ groups, onResolved }) => {
  const { showToast } = useToast();
  const [unpublishing, setUnpublishing] = useState<ReportedRecipe | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const dismiss = async (group: ReportedRecipe) => {
    setBusyId(group.recipe.id);
    try {
      await dismissReports(group.recipe.id);
      showToast("Reports dismissed.");
      onResolved(group.recipe.id);
    } catch (caught) {
      console.error("Failed to dismiss reports:", caught);
      showToast("Couldn't dismiss the reports.");
    } finally {
      setBusyId(null);
    }
  };

  const unpublish = async (note: string) => {
    if (!unpublishing) return;
    setBusyId(unpublishing.recipe.id);
    try {
      await rejectRecipe(unpublishing.recipe.id, note);
      showToast(`Unpublished "${unpublishing.recipe.title}".`);
      onResolved(unpublishing.recipe.id);
      setUnpublishing(null);
    } catch (caught) {
      console.error("Failed to unpublish recipe:", caught);
      showToast("Couldn't unpublish the recipe.");
    } finally {
      setBusyId(null);
    }
  };

  if (groups.length === 0)
    return (
      <p className="py-12 text-center text-sm text-ink-muted">
        No open reports.
      </p>
    );

  return (
    <ul className="flex flex-col gap-3">
      {groups.map((group) => {
        const { recipe, reports } = group;
        const isBusy = busyId === recipe.id;
        const isLive = isRecipeLive(recipe);
        return (
          <li
            key={recipe.id}
            className="flex flex-col gap-3 rounded-lg border border-line bg-surface-raised p-3"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <RecipeSummary
                recipe={recipe}
                subline={
                  isLive ?
                    `${reports.length} ${reports.length === 1 ? "report" : "reports"}`
                  : "no longer public"
                }
              />
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => dismiss(group)}
                  disabled={isBusy}
                  className={BUTTON_CLASS}
                >
                  <Check className="size-3.5" />
                  Dismiss
                </button>
                {isLive && (
                  <button
                    type="button"
                    onClick={() => setUnpublishing(group)}
                    disabled={isBusy}
                    className={`${BUTTON_CLASS} text-ink-muted hover:text-danger`}
                  >
                    <EyeOff className="size-3.5" />
                    Unpublish…
                  </button>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-1.5 border-t border-line pt-3 text-sm">
              {reports.map((report) => (
                <li
                  key={report.id}
                  className="flex flex-col gap-0.5"
                >
                  <p>
                    <span className="font-medium">
                      {getReportReasonLabel(report.reason)}
                    </span>
                    <span className="text-ink-muted">
                      {" "}
                      · {formatRelativeTime(report.createdAt)}
                    </span>
                  </p>
                  {report.details && (
                    <p className="whitespace-pre-line text-ink-muted">
                      {report.details}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </li>
        );
      })}

      {unpublishing && (
        <RejectDialog
          title={`Unpublish "${unpublishing.recipe.title}"?`}
          confirmLabel="Unpublish"
          isBusy={busyId === unpublishing.recipe.id}
          onConfirm={unpublish}
          onCancel={() => setUnpublishing(null)}
        />
      )}
    </ul>
  );
};

export default ReportsList;
