"use client";

import React, { useState } from "react";

import ActionSheet from "@components/ActionSheet";
import { TEXTAREA_CLASS } from "@components/RecipeEditor/Field";
import { useToast } from "@context/ToastContext";
import { reportRecipe } from "@lib/userRecipes/client";
import {
  REPORT_DETAILS_MAX,
  REPORT_REASONS,
  ReportReason,
} from "@lib/userRecipes/reports";

interface ReportRecipeSheetProps {
  recipeId: string;
  onReported: () => void;
  onClose: () => void;
}

/**
 * Why this recipe shouldn't be public: one reason from the guidelines
 * and an optional line of detail. One report per person; the button
 * that opened this knows not to open it twice.
 */
const ReportRecipeSheet: React.FC<ReportRecipeSheetProps> = ({
  recipeId,
  onReported,
  onClose,
}) => {
  const { showToast } = useToast();
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [details, setDetails] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const submit = async () => {
    if (!reason || isBusy) return;
    setIsBusy(true);
    try {
      await reportRecipe(recipeId, reason, details);
      showToast("Thanks, an admin will take a look.");
      onReported();
      onClose();
    } catch (caught) {
      console.error("Failed to report recipe:", caught);
      showToast("Couldn't send the report.");
      setIsBusy(false);
    }
  };

  return (
    <ActionSheet
      title="Report this recipe"
      onClose={onClose}
    >
      <div className="flex flex-col gap-3 px-1 pb-1 sm:px-2.5">
        <div
          role="radiogroup"
          aria-label="Reason"
          className="flex flex-col gap-1"
        >
          {REPORT_REASONS.map((option) => {
            const isSelected = reason === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setReason(option.value)}
                className={`
                  flex h-9 items-center gap-2.5 rounded-md px-2 text-left text-sm transition-colors
                  ${isSelected ? "bg-well text-ink" : "text-ink-muted hover:bg-well hover:text-ink"}
                `}
              >
                <span
                  aria-hidden
                  className={`size-3.5 shrink-0 rounded-full border ${
                    isSelected ?
                      "border-[4px] border-accent"
                    : "border-line-strong"
                  }`}
                />
                {option.label}
              </button>
            );
          })}
        </div>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold">
            Anything else?{" "}
            <span className="font-normal text-ink-muted">Optional</span>
          </span>
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            maxLength={REPORT_DETAILS_MAX}
            rows={3}
            placeholder="What should the admin look at?"
            className={TEXTAREA_CLASS}
          />
        </label>

        <div className="flex justify-end gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="h-9 rounded-md border border-line px-3 text-sm font-medium text-ink transition-colors hover:border-line-strong"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={submit}
            disabled={!reason || isBusy}
            className="h-9 rounded-md bg-accent px-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-50"
          >
            {isBusy ? "Sending…" : "Send report"}
          </button>
        </div>
      </div>
    </ActionSheet>
  );
};

export default ReportRecipeSheet;
