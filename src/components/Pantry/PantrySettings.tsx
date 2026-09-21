"use client";

import { Check, PackagePlus, Plus, Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import ConfirmDialog from "@components/MealPlan/ConfirmDialog";
import SharingSection from "@components/SharingSection";
import { Household } from "@lib/household/client";
import { createPantry, deletePantry, updatePantry } from "@lib/pantry/client";
import { Pantry } from "@lib/pantry/types";

interface PantrySettingsProps {
  pantry: Pantry;
  pantries: Pantry[];
  userId: string;
  household: Household | null;
  onPantryChange: (_pantry: Pantry) => void;
  onPantryCreated: (_pantry: Pantry) => void;
  onPantryDeleted: (_pantryId: string) => void;
  onSwitch: (_pantryId: string) => void;
  /** Opens the starter-list picker; absent for viewers, who can't add. */
  onAddBasics?: () => void;
  onClose: () => void;
}

/**
 * Name, who can see it, who it's shared with, the other pantries this
 * person can switch to, and the delete. Everything saves as it's
 * changed; there's no form to submit.
 */
const PantrySettings: React.FC<PantrySettingsProps> = ({
  pantry,
  pantries,
  userId,
  household,
  onPantryChange,
  onPantryCreated,
  onPantryDeleted,
  onSwitch,
  onAddBasics,
  onClose,
}) => {
  const [name, setName] = useState(pantry.name);
  const [newName, setNewName] = useState("");
  const [isAddingPantry, setIsAddingPantry] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const isOwner = pantry.role === "owner";
  const isHouseholdAdmin =
    household?.role === "admin" && pantry.householdId === household.id;
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
    if (!trimmed || trimmed === pantry.name) {
      setName(pantry.name);
      return;
    }
    try {
      await updatePantry(pantry.id, { name: trimmed });
      onPantryChange({ ...pantry, name: trimmed });
    } catch (caught) {
      console.error("Failed to rename pantry:", caught);
      setError("Couldn't rename the pantry.");
    }
  };

  const addPantry = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;

    setIsBusy(true);
    setError("");
    try {
      // A second pantry is usually the personal one next to a household
      // one (or the other way round), so it starts as the opposite.
      const householdId =
        household && !pantry.householdId ? household.id : null;
      const created = await createPantry(userId, householdId, trimmed);
      onPantryCreated(created);
      setNewName("");
      setIsAddingPantry(false);
    } catch (caught) {
      console.error("Failed to create pantry:", caught);
      setError("Couldn't create that pantry.");
    } finally {
      setIsBusy(false);
    }
  };

  const remove = async () => {
    setIsBusy(true);
    try {
      await deletePantry(pantry.id);
      onPantryDeleted(pantry.id);
    } catch (caught) {
      console.error("Failed to delete pantry:", caught);
      setError("Couldn't delete the pantry.");
      setIsBusy(false);
      setIsConfirmingDelete(false);
    }
  };

  const describe = (candidate: Pantry): string =>
    candidate.householdId ? "Household"
    : candidate.role === "owner" ? "Personal"
    : `Shared with you · ${candidate.role === "editor" ? "can edit" : "can view"}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90dvh] w-full max-w-md flex-col rounded-t-lg border border-line bg-surface-raised shadow-2xl sm:max-h-[85vh] sm:rounded-lg">
        <div className="flex shrink-0 items-center justify-between border-b border-line p-4">
          <h2 className="text-sm font-semibold sm:text-base">
            Pantry settings
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

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {!canManage && (
            <p className="rounded-md bg-well p-2 text-xs text-ink-muted">
              {pantry.householdId ?
                "This pantry belongs to your household, so everyone in it can update what's stocked. Only its owner can rename it or change sharing."
              : `This pantry is shared with you as ${pantry.role === "editor" ? "an editor" : "a viewer"}. Only its owner can rename it or change sharing.`
              }
            </p>
          )}

          {canManage && (
            <div>
              <label
                htmlFor="pantry-name"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted"
              >
                Pantry name
              </label>
              <input
                id="pantry-name"
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
          )}

          <SharingSection
            kind="pantry"
            resourceId={pantry.id}
            noun="pantry"
            householdId={pantry.householdId}
            household={household}
            isOwner={isOwner}
            canManage={canManage}
            onVisibilityChange={async (householdId) => {
              await updatePantry(pantry.id, { householdId });
              onPantryChange({ ...pantry, householdId });
            }}
            onError={setError}
          />

          <div className="border-t border-line pt-4">
            <p className="mb-2 text-xs font-semibold">Your pantries</p>
            <ul className="space-y-1">
              {pantries.map((candidate) => {
                const isCurrent = candidate.id === pantry.id;
                return (
                  <li key={candidate.id}>
                    <button
                      type="button"
                      disabled={isCurrent}
                      onClick={() => onSwitch(candidate.id)}
                      className={`
                        flex h-10 w-full items-center justify-between gap-2 rounded-md px-2.5 text-left text-sm
                        ${isCurrent ? "bg-well" : "hover:bg-well"}
                      `}
                    >
                      <span className="min-w-0 truncate">
                        {candidate.name}
                        <span className="ml-1.5 text-[11px] text-ink-muted">
                          {describe(candidate)}
                        </span>
                      </span>
                      {isCurrent && (
                        <Check className="size-4 shrink-0 text-accent" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {isAddingPantry ?
              <form
                onSubmit={addPantry}
                className="mt-2 flex gap-1.5"
              >
                <input
                  autoFocus
                  value={newName}
                  onChange={(event) => setNewName(event.target.value)}
                  placeholder={
                    household && !pantry.householdId ?
                      "Household pantry"
                    : "Personal pantry"
                  }
                  aria-label="New pantry name"
                  className="h-10 min-w-0 flex-1 rounded-md border border-line bg-transparent px-2.5 text-sm outline-none focus:border-ink"
                />
                <button
                  type="submit"
                  disabled={isBusy || !newName.trim()}
                  className="h-10 rounded-md bg-accent px-3 text-xs font-semibold text-on-accent hover:bg-accent-hover disabled:opacity-50"
                >
                  Create
                </button>
              </form>
            : <button
                type="button"
                onClick={() => setIsAddingPantry(true)}
                className="mt-2 flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <Plus className="size-3.5" />
                New pantry
              </button>
            }
          </div>

          {onAddBasics && (
            <div className="border-t border-line pt-4">
              <button
                type="button"
                onClick={onAddBasics}
                className="flex h-9 items-center gap-1.5 rounded-md px-2 text-xs text-ink-muted transition-colors hover:text-ink"
              >
                <PackagePlus className="size-3.5" />
                Add the basics
              </button>
            </div>
          )}

          {canManage && (
            <div className="border-t border-line pt-4">
              <button
                type="button"
                onClick={() => setIsConfirmingDelete(true)}
                className="flex h-9 items-center gap-1.5 rounded-md px-2 text-xs text-ink-muted transition-colors hover:text-danger"
              >
                <Trash2 className="size-3.5" />
                Delete this pantry
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
          title={`Delete ${pantry.name}?`}
          body="Everything in it goes too. Grocery lists that used it keep working, they just won't restock anything."
          confirmLabel="Delete pantry"
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

export default PantrySettings;
