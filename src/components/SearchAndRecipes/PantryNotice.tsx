"use client";

import { Package, X } from "lucide-react";
import React from "react";

export interface PantryHandoff {
  /** Stocked items that matched a searchable ingredient. */
  terms: string[];
  /** Stocked items that didn't match anything Edamam knows. */
  skipped: string[];
  /** How many matched items were dropped to keep the search focused. */
  truncated: number;
}

const splitList = (value: string | null): string[] =>
  (value ?? "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

/**
 * Reads the `/?ingredients=…&skipped=…&truncated=…` query the pantry
 * page links to. Returns null when the query isn't a pantry handoff.
 */
export const readPantryHandoff = (search: string): PantryHandoff | null => {
  const params = new URLSearchParams(search);
  if (!params.has("ingredients")) return null;
  return {
    terms: splitList(params.get("ingredients")),
    skipped: splitList(params.get("skipped")),
    truncated: Math.max(0, Number(params.get("truncated")) || 0),
  };
};

interface PantryNoticeProps {
  handoff: PantryHandoff;
  onDismiss: () => void;
}

/** Explains which pantry items made it into the search and which didn't. */
const PantryNotice: React.FC<PantryNoticeProps> = ({ handoff, onDismiss }) => {
  const { terms, skipped, truncated } = handoff;
  const hasTerms = terms.length > 0;

  const title =
    hasTerms ?
      `Searching with ${terms.length} ${terms.length === 1 ? "item" : "items"} from your pantry`
    : "Nothing in your pantry could be searched";

  const details: string[] = [];
  if (truncated > 0)
    details.push(
      `Fresh food and what you updated most recently are in. ${truncated} more ${truncated === 1 ? "was" : "were"} left out to keep the results relevant.`,
    );
  if (skipped.length > 0)
    details.push(`Not matched to a recipe ingredient: ${skipped.join(", ")}.`);

  return (
    <div
      role="status"
      className="mb-4 flex items-start gap-3 rounded-lg border border-line bg-surface-raised px-3.5 py-3"
    >
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-accent-tint text-accent">
        <Package className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold tracking-[-0.01em]">{title}</p>
        {details.map((detail) => (
          <p
            key={detail}
            className="mt-0.5 text-xs leading-snug text-ink-muted"
          >
            {detail}
          </p>
        ))}
        {!hasTerms && (
          <p className="mt-0.5 text-xs leading-snug text-ink-muted">
            Try picking ingredients by hand instead.
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss"
        className="-mr-1 -mt-1 flex size-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink"
      >
        <X className="size-4" />
      </button>
    </div>
  );
};

export default PantryNotice;
