"use client";

import { Check, ChevronRight, Pencil, Tag, Trash2 } from "lucide-react";
import React, { useState } from "react";

import ActionSheet, { SheetAction } from "@components/ActionSheet";
import { CATEGORIES, Category, PantryItem } from "@lib/pantry/types";

interface ItemSheetProps {
  item: PantryItem;
  onRename: (_name: string) => Promise<void>;
  onCategoryChange: (_category: Category) => Promise<void>;
  onRemove: () => Promise<void>;
  onClose: () => void;
}

type Mode = "menu" | "rename" | "category";

/**
 * The ⋯ menu for one pantry item. Rename and category edit in place
 * inside the sheet rather than opening something else on top of it.
 */
const ItemSheet: React.FC<ItemSheetProps> = ({
  item,
  onRename,
  onCategoryChange,
  onRemove,
  onClose,
}) => {
  const [mode, setMode] = useState<Mode>("menu");
  const [draft, setDraft] = useState(item.name);
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const run = async (action: () => Promise<void>) => {
    setIsBusy(true);
    setError("");
    try {
      await action();
      onClose();
    } catch (caught) {
      setError(
        caught instanceof Error && caught.message ?
          caught.message
        : "That didn't save.",
      );
      setIsBusy(false);
    }
  };

  return (
    <ActionSheet
      title={item.name}
      onClose={onClose}
    >
      {mode === "menu" && (
        <div className="flex flex-col">
          <SheetAction onClick={() => setMode("rename")}>
            <Pencil className="size-4 text-ink-muted" />
            Rename
          </SheetAction>
          <SheetAction onClick={() => setMode("category")}>
            <Tag className="size-4 text-ink-muted" />
            <span className="flex-1">Change category</span>
            <span className="flex items-center gap-0.5 text-xs text-ink-muted">
              {item.category}
              <ChevronRight className="size-3.5" />
            </span>
          </SheetAction>
          <div className="my-1 border-t border-line" />
          <SheetAction
            isDanger
            onClick={() => run(onRemove)}
          >
            <Trash2 className="size-4" />
            {isBusy ? "Removing..." : "Remove from pantry"}
          </SheetAction>
        </div>
      )}

      {mode === "rename" && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = draft.trim();
            if (!name) {
              setError("Give it a name.");
              return;
            }
            if (name === item.name) {
              onClose();
              return;
            }
            run(() => onRename(name));
          }}
          className="px-1 pb-1 sm:px-2.5"
        >
          <label
            htmlFor="rename-item"
            className="mb-1 block text-xs font-semibold"
          >
            Name
          </label>
          <div className="flex gap-1.5">
            <input
              id="rename-item"
              autoFocus
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              className="h-11 min-w-0 flex-1 rounded-md border border-line bg-transparent px-3 text-[15px] outline-none focus:border-ink"
            />
            <button
              type="submit"
              disabled={isBusy}
              aria-label="Save name"
              className="flex size-11 shrink-0 items-center justify-center rounded-md bg-accent text-on-accent hover:bg-accent-hover disabled:opacity-50"
            >
              <Check className="size-4" />
            </button>
          </div>
        </form>
      )}

      {mode === "category" && (
        <ul
          role="listbox"
          aria-label="Category"
          className="max-h-[60vh] overflow-y-auto"
        >
          {CATEGORIES.map((category) => {
            const isSelected = category === item.category;
            return (
              <li key={category}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  disabled={isBusy}
                  onClick={() =>
                    isSelected ? onClose() : (
                      run(() => onCategoryChange(category))
                    )
                  }
                  className={`
                    flex h-11 w-full items-center justify-between rounded-sm px-1
                    text-left text-sm hover:bg-well sm:px-2.5
                    ${isSelected ? "font-semibold" : ""}
                  `}
                >
                  {category}
                  {isSelected && <Check className="size-4 text-accent" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {error && (
        <p
          role="alert"
          className="px-1 pt-2 text-xs text-danger sm:px-2.5"
        >
          {error}
        </p>
      )}
    </ActionSheet>
  );
};

export default ItemSheet;
