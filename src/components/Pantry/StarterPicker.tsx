"use client";

import { Check } from "lucide-react";
import React, { useMemo, useState } from "react";

import { StarterItem, buildStarterGroups } from "@lib/ingredients";
import { tidyItemName } from "@lib/pantry/items";
import { Category, PantryItem } from "@lib/pantry/types";

export interface StarterEntry {
  name: string;
  category: Category;
}

interface StarterPickerProps {
  items: PantryItem[];
  onAdd: (_entries: StarterEntry[]) => Promise<void>;
}

/**
 * The common-kitchen starter list as tappable chips by aisle, nothing
 * chosen up front. Whatever the pantry already has is shown ticked and
 * can't be picked again. Shown inside an empty pantry and from the
 * settings sheet, so it owns only its selection; the page adds the rows.
 */
const StarterPicker: React.FC<StarterPickerProps> = ({ items, onAdd }) => {
  const groups = useMemo(() => buildStarterGroups(items), [items]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [isBusy, setIsBusy] = useState(false);

  const available = groups.flatMap((group) =>
    group.items.filter((starter) => !starter.isInPantry),
  );
  const isAllSelected =
    available.length > 0 && available.every((s) => selected.has(s.name));

  const toggle = (starter: StarterItem) => {
    setSelected((previous) => {
      const next = new Set(previous);
      if (next.has(starter.name)) next.delete(starter.name);
      else next.add(starter.name);
      return next;
    });
  };

  const handleAdd = async () => {
    const entries = available
      .filter((starter) => selected.has(starter.name))
      .map((starter) => ({
        name: tidyItemName(starter.name),
        category: starter.category,
      }));
    if (entries.length === 0) return;

    setIsBusy(true);
    try {
      await onAdd(entries);
      setSelected(new Set());
    } finally {
      setIsBusy(false);
    }
  };

  if (available.length === 0) {
    return (
      <p className="py-4 text-center text-sm text-ink-muted">
        You already have all the basics.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => (
        <section key={group.category}>
          <h4 className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((starter) => {
              const isSelected = selected.has(starter.name);
              return (
                <button
                  key={starter.name}
                  type="button"
                  disabled={starter.isInPantry || isBusy}
                  aria-pressed={isSelected}
                  onClick={() => toggle(starter)}
                  className={`
                    flex h-8 items-center gap-1 rounded-md border px-2.5 text-[13px]
                    transition-colors active:translate-y-px
                    disabled:cursor-default disabled:active:translate-y-0
                    ${
                      starter.isInPantry ?
                        "border-transparent bg-well text-ink-muted"
                      : isSelected ? "border-accent bg-accent-tint text-ink"
                      : "border-line bg-surface-raised text-ink hover:border-line-strong"
                    }
                  `}
                >
                  {(starter.isInPantry || isSelected) && (
                    <Check
                      className={`size-3.5 ${starter.isInPantry ? "text-ink-muted" : "text-accent"}`}
                    />
                  )}
                  {tidyItemName(starter.name)}
                </button>
              );
            })}
          </div>
        </section>
      ))}

      {/* Sticky so the button stays in reach while the chips scroll in
          the sheet; in the empty state it just sits at the bottom. */}
      <div className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-line bg-surface-raised py-3">
        <button
          type="button"
          disabled={isBusy}
          onClick={() =>
            setSelected(
              isAllSelected ? new Set() : new Set(available.map((s) => s.name)),
            )
          }
          className="text-xs font-semibold text-accent hover:underline disabled:opacity-50"
        >
          {isAllSelected ? "Clear" : `Select all ${available.length}`}
        </button>
        <button
          type="button"
          disabled={isBusy || selected.size === 0}
          onClick={handleAdd}
          className="h-10 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isBusy ?
            "Adding..."
          : selected.size === 0 ?
            "Add to pantry"
          : `Add ${selected.size} to pantry`}
        </button>
      </div>
    </div>
  );
};

export default StarterPicker;
