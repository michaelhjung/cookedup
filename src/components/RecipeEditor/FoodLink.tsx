"use client";

import { ChevronDown, Link2, Link2Off } from "lucide-react";
import React, { useMemo, useState } from "react";

import Popover from "@components/Popover";
import { searchIngredients } from "@lib/ingredients";

interface FoodLinkProps {
  /** The ingredient line, for finding alternatives. */
  lineText: string;
  food: string | null;
  onChange: (_food: string | null) => void;
}

const MAX_MATCHES = 8;

/**
 * The small chip under an ingredient line saying which pantry ingredient
 * it counts as ("eggs"), so the recipe can be matched against what's
 * stocked. Tapping it lists other candidates from the ingredient list,
 * searched by what's typed, and a way to say "none".
 */
const FoodLink: React.FC<FoodLinkProps> = ({ lineText, food, onChange }) => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const needle = query.trim() || lineText.replace(/^[\d\s/.,½¼¾-]+/, "");
    return searchIngredients(needle).slice(0, MAX_MATCHES);
  }, [query, lineText]);

  const choose = (next: string | null) => {
    onChange(next);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        ref={setAnchor}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={
          food ?
            `Counts as ${food} in your pantry. Change`
          : "Link to a pantry ingredient"
        }
        className={`
          inline-flex h-6 max-w-full items-center gap-1 rounded-sm px-1.5 text-[11px]
          transition-colors hover:bg-well
          ${food ? "text-ink-muted" : "text-ink-muted/70"}
        `}
      >
        {food ?
          <Link2 className="size-3 shrink-0" />
        : <Link2Off className="size-3 shrink-0" />}
        <span className="truncate">{food ?? "no pantry match"}</span>
        <ChevronDown className="size-3 shrink-0" />
      </button>

      {isOpen && (
        <Popover
          anchor={anchor}
          onClose={() => setIsOpen(false)}
          width={240}
        >
          <div>
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search ingredients…"
              className="mb-1 h-8 w-full rounded-md border border-line bg-transparent px-2 text-xs outline-none focus:border-ink"
            />
            <ul className="max-h-56 overflow-y-auto">
              {matches.map((match) => (
                <li key={match.name}>
                  <button
                    type="button"
                    onClick={() => choose(match.name)}
                    className={`
                      flex h-8 w-full items-center rounded-sm px-2 text-left text-xs
                      transition-colors hover:bg-well
                      ${match.name === food ? "font-semibold text-ink" : "text-ink"}
                    `}
                  >
                    {match.name}
                  </button>
                </li>
              ))}
              {matches.length === 0 && (
                <li className="px-2 py-1.5 text-xs text-ink-muted">
                  Nothing matches.
                </li>
              )}
            </ul>
            <button
              type="button"
              onClick={() => choose(null)}
              className="mt-1 flex h-8 w-full items-center gap-1.5 rounded-sm border-t border-line px-2 text-left text-xs text-ink-muted transition-colors hover:bg-well hover:text-ink"
            >
              <Link2Off className="size-3" />
              Not a pantry ingredient
            </button>
          </div>
        </Popover>
      )}
    </>
  );
};

export default FoodLink;
