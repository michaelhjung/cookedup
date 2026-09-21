"use client";

import { Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import ConfirmDialog from "@components/MealPlan/ConfirmDialog";
import SharingSection from "@components/SharingSection";
import { deleteList, updateList } from "@lib/grocery/client";
import { GroceryList } from "@lib/grocery/types";
import { Household } from "@lib/household/client";
import { Pantry } from "@lib/pantry/types";

interface ListSettingsProps {
  list: GroceryList;
  /** Pantries the user can read, for the restock link. */
  pantries: Pantry[];
  household: Household | null;
  onListChange: (_list: GroceryList) => void;
  onDeleted: () => void;
  onClose: () => void;
}

/** Name, who can see it, which pantry it restocks, and the delete. */
const ListSettings: React.FC<ListSettingsProps> = ({
  list,
  pantries,
  household,
  onListChange,
  onDeleted,
  onClose,
}) => {
  const [name, setName] = useState(list.name);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const isOwner = list.role === "owner";
  const isHouseholdAdmin =
    household?.role === "admin" && list.householdId === household.id;
  const canManage = isOwner || isHouseholdAdmin;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isConfirmingDelete) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, isConfirmingDelete]);

  const saveName = async () => {
    const trimmed = name.trim();
    if (!trimmed || trimmed === list.name) {
      setName(list.name);
      return;
    }
    try {
      await updateList(list.id, { name: trimmed });
      onListChange({ ...list, name: trimmed });
    } catch (caught) {
      console.error("Failed to rename list:", caught);
      setError("Couldn't rename the list.");
    }
  };

  const savePantry = async (pantryId: string | null) => {
    try {
      await updateList(list.id, { pantryId });
      onListChange({ ...list, pantryId });
    } catch (caught) {
      console.error("Failed to change pantry:", caught);
      setError("Couldn't change the pantry.");
    }
  };

  const remove = async () => {
    setIsBusy(true);
    try {
      await deleteList(list.id);
      onDeleted();
    } catch (caught) {
      console.error("Failed to delete list:", caught);
      setError("Couldn't delete the list.");
      setIsBusy(false);
      setIsConfirmingDelete(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90dvh] w-full max-w-md flex-col rounded-t-lg border border-line bg-surface-raised shadow-2xl sm:max-h-[85vh] sm:rounded-lg">
        <div className="flex shrink-0 items-center justify-between border-b border-line p-4">
          <h2 className="text-sm font-semibold sm:text-base">List settings</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-sm p-1 transition-colors hover:bg-line"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {!canManage && (
            <p className="rounded-md bg-well p-2 text-xs text-ink-muted">
              {list.householdId ?
                "This list belongs to your household, so everyone in it can add and check things off. Only its owner can rename it or change sharing."
              : `This list is shared with you as ${list.role === "editor" ? "an editor" : "a viewer"}. Only its owner can rename it or change sharing.`
              }
            </p>
          )}

          {canManage && (
            <>
              <div>
                <label
                  htmlFor="list-name"
                  className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted"
                >
                  List name
                </label>
                <input
                  id="list-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  onBlur={saveName}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") event.currentTarget.blur();
                  }}
                  className="h-10 w-full rounded-md border border-line bg-transparent px-2.5 text-sm outline-none focus:border-ink"
                />
              </div>

              <div>
                <label
                  htmlFor="list-pantry"
                  className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted"
                >
                  Restocks
                </label>
                <select
                  id="list-pantry"
                  value={list.pantryId ?? ""}
                  onChange={(event) => savePantry(event.target.value || null)}
                  className="h-10 w-full rounded-md border border-line bg-surface-raised px-2.5 text-sm"
                >
                  <option value="">No pantry</option>
                  {pantries.map((pantry) => (
                    <option
                      key={pantry.id}
                      value={pantry.id}
                    >
                      {pantry.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] leading-snug text-ink-muted">
                  Checking something off can mark it stocked in this pantry, and
                  &ldquo;Add items from&rdquo; pulls its low and out items.
                </p>
              </div>
            </>
          )}

          <SharingSection
            kind="grocery_list"
            resourceId={list.id}
            noun="list"
            householdId={list.householdId}
            household={household}
            isOwner={isOwner}
            canManage={canManage}
            onVisibilityChange={async (householdId) => {
              await updateList(list.id, { householdId });
              onListChange({ ...list, householdId });
            }}
            onError={setError}
          />

          {canManage && (
            <div className="border-t border-line pt-4">
              <button
                type="button"
                onClick={() => setIsConfirmingDelete(true)}
                className="flex h-9 items-center gap-1.5 rounded-md px-2 text-xs text-ink-muted transition-colors hover:text-danger"
              >
                <Trash2 className="size-3.5" />
                Delete this list
              </button>
            </div>
          )}

          {error && (
            <p
              role="alert"
              className="text-xs text-danger"
            >
              {error}
            </p>
          )}
        </div>
      </div>

      {isConfirmingDelete && (
        <ConfirmDialog
          title={`Delete ${list.name}?`}
          body="Everything on it goes too. The pantry is not affected."
          confirmLabel="Delete list"
          busyLabel="Deleting..."
          isDestructive
          isBusy={isBusy}
          onConfirm={remove}
          onCancel={() => setIsConfirmingDelete(false)}
        />
      )}
    </div>
  );
};

export default ListSettings;
