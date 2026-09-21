"use client";

import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { createList } from "@lib/grocery/client";
import { GroceryList } from "@lib/grocery/types";
import { Household } from "@lib/household/client";
import { Pantry } from "@lib/pantry/types";

interface NewListDialogProps {
  userId: string;
  household: Household | null;
  /** Pantries the user can edit, for the restock link. */
  pantries: Pantry[];
  onCreated: (_list: GroceryList) => void;
  onClose: () => void;
}

/**
 * Name, whether it's a household list, and which pantry it restocks.
 * The pantry picker only appears when there's a real choice to make.
 */
const NewListDialog: React.FC<NewListDialogProps> = ({
  userId,
  household,
  pantries,
  onCreated,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [isHousehold, setIsHousehold] = useState(household !== null);
  const [pantryId, setPantryId] = useState<string>(pantries[0]?.id ?? "");
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsBusy(true);
    setError("");
    try {
      const list = await createList(
        userId,
        name,
        isHousehold && household ? household.id : null,
        pantryId || null,
      );
      onCreated(list);
    } catch (caught) {
      console.error("Failed to create list:", caught);
      setError("Couldn't create the list.");
      setIsBusy(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-t-lg border border-line bg-surface-raised p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl sm:rounded-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold sm:text-base">
            New grocery list
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-sm p-1 transition-colors hover:bg-line"
          >
            <X className="size-4" />
          </button>
        </div>

        <label
          htmlFor="new-list-name"
          className="mb-1 block text-xs font-semibold"
        >
          Name
        </label>
        <input
          id="new-list-name"
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Costco, Trader Joe's, weekly shop"
          autoComplete="off"
          className="h-11 w-full rounded-md border border-line bg-transparent px-3 text-[15px] outline-none focus:border-ink"
        />

        {household && (
          <div className="mt-4">
            <p className="mb-1.5 text-xs font-semibold">Who can see it</p>
            <div
              role="radiogroup"
              aria-label="Who can see this list"
              className="grid grid-cols-2 rounded-md border border-line p-0.5"
            >
              {[
                { value: false, label: "Just me" },
                { value: true, label: household.name },
              ].map((option) => (
                <button
                  key={option.label}
                  type="button"
                  role="radio"
                  aria-checked={isHousehold === option.value}
                  onClick={() => setIsHousehold(option.value)}
                  className={`
                    h-9 truncate rounded-sm px-2 text-xs font-medium transition-colors
                    ${isHousehold === option.value ? "bg-ink text-surface" : "text-ink-muted hover:text-ink"}
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {pantries.length > 1 && (
          <div className="mt-4">
            <label
              htmlFor="new-list-pantry"
              className="mb-1 block text-xs font-semibold"
            >
              Restocks
            </label>
            <select
              id="new-list-pantry"
              value={pantryId}
              onChange={(event) => setPantryId(event.target.value)}
              className="h-10 w-full rounded-md border border-line bg-surface-raised px-2.5 text-sm"
            >
              {pantries.map((pantry) => (
                <option
                  key={pantry.id}
                  value={pantry.id}
                >
                  {pantry.name}
                </option>
              ))}
              <option value="">No pantry</option>
            </select>
            <p className="mt-1 text-[11px] text-ink-muted">
              Checking something off can mark it stocked here.
            </p>
          </div>
        )}

        {error && (
          <p
            role="alert"
            className="mt-3 text-xs text-danger"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isBusy}
          className="mt-5 h-11 w-full rounded-md bg-accent text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px disabled:opacity-50"
        >
          {isBusy ? "Creating..." : "Create list"}
        </button>
      </form>
    </div>
  );
};

export default NewListDialog;
