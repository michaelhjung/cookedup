"use client";

import { CircleAlert, Link2, Link2Off, Plus, Trash2, X } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

import CopyableUrl from "@components/CopyableUrl";
import SharingSection from "@components/SharingSection";
import { Household } from "@lib/household/client";
import {
  countEntriesInSlots,
  deleteEntriesInSlots,
  setLinkSharing,
  updatePlan,
} from "@lib/mealPlan/client";
import {
  MealPlan,
  MealSlotDef,
  makeSlotId,
  sortSlots,
} from "@lib/mealPlan/types";

interface PlanSettingsProps {
  plan: MealPlan;
  /** The user's household, if any; decides whether "Who can see this" is offered. */
  household: Household | null;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onPlanChange: (_plan: MealPlan) => void;
  onClose: () => void;
}

const PlanSettings: React.FC<PlanSettingsProps> = ({
  plan,
  household,
  onPlanChange,
  onClose,
}) => {
  const [name, setName] = useState(plan.name);
  const [slots, setSlots] = useState<MealSlotDef[]>(plan.slots);
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [isConfirmingExit, setIsConfirmingExit] = useState(false);

  // Only the name and meals form is save-on-submit; the sharing controls
  // below apply immediately, so they're deliberately not part of this.
  const isDirty = useMemo(
    () =>
      name !== plan.name ||
      JSON.stringify(slots) !== JSON.stringify(plan.slots),
    [name, slots, plan.name, plan.slots],
  );

  const isOwner = plan.role === "owner";
  // A household admin can look after a household plan whose owner has
  // moved on, but only the owner decides whether it's a household plan.
  const isHouseholdAdmin =
    household?.role === "admin" && plan.householdId === household.id;
  const canManage = isOwner || isHouseholdAdmin;
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      // While the prompt is up, Escape backs out of it rather than
      // discarding the very changes it's asking about.
      if (isConfirmingExit) setIsConfirmingExit(false);
      else requestClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  });

  const addSlot = () => {
    // Start the new meal an hour after the current last one so it lands
    // at the bottom of the list, rather than colliding with an existing
    // row and reordering things unexpectedly.
    const latest = slots[slots.length - 1]?.time ?? "08:00";
    const [hours, minutes] = latest.split(":").map(Number);
    const next = `${`${Math.min(hours + 1, 23)}`.padStart(2, "0")}:${`${minutes}`.padStart(2, "0")}`;

    setSlots((previous) => [
      ...previous,
      { id: makeSlotId(), label: "New meal", time: next },
    ]);
  };

  // Re-sorted as soon as a time changes rather than on save, so retiming
  // a snack to 10am visibly moves it above lunch right away. React keeps
  // focus on the input being edited when its row moves, since rows are
  // keyed by slot id. Label edits don't re-sort: two meals at the same
  // time would otherwise swap places under the cursor mid-word.
  const updateSlot = (id: string, changes: Partial<MealSlotDef>) =>
    setSlots((previous) => {
      const next = previous.map((slot) =>
        slot.id === id ? { ...slot, ...changes } : slot,
      );
      return changes.time === undefined ? next : sortSlots(next);
    });

  const removeSlot = (id: string) =>
    setSlots((previous) => previous.filter((slot) => slot.id !== id));

  const saveDetails = async (): Promise<boolean> => {
    if (slots.length === 0) {
      setError("A plan needs at least one meal.");
      return false;
    }

    // A blank label would render an unnamed, unreadable row.
    const cleaned = sortSlots(
      slots.map((slot) => ({ ...slot, label: slot.label.trim() || "Meal" })),
    );

    const removedIds = plan.slots
      .filter((existing) => !cleaned.some((slot) => slot.id === existing.id))
      .map((slot) => slot.id);

    setIsBusy(true);
    setError("");

    try {
      // `slot` is a plain text reference into a jsonb array, so nothing
      // in the database cleans up entries whose slot has gone — they'd
      // linger invisibly with no time to be scheduled at. Removing them
      // is destructive, so it's confirmed first.
      if (removedIds.length > 0) {
        const affected = await countEntriesInSlots(plan.id, removedIds);

        if (affected > 0) {
          const confirmed = window.confirm(
            `Removing ${removedIds.length === 1 ? "that meal" : "those meals"} will also delete ${affected} planned ${affected === 1 ? "recipe" : "recipes"} from this plan. Continue?`,
          );

          if (!confirmed) {
            setIsBusy(false);
            return false;
          }
        }

        await deleteEntriesInSlots(plan.id, removedIds);
      }

      await updatePlan(plan.id, { name, slots: cleaned });
      setSlots(cleaned);
      onPlanChange({ ...plan, name, slots: cleaned });
      return true;
    } catch (caught) {
      console.error("Failed to save plan settings:", caught);
      setError(
        caught instanceof Error && caught.message ?
          `Couldn't save those changes: ${caught.message}`
        : "Couldn't save those changes.",
      );
      return false;
    } finally {
      setIsBusy(false);
    }
  };

  /**
   * Closing with edits still in the form is the easiest way to lose
   * work here, so the close paths all route through this instead of
   * calling onClose directly.
   */
  const requestClose = () => {
    if (isDirty) {
      setIsConfirmingExit(true);
      return;
    }
    onClose();
  };

  const saveAndClose = async () => {
    if (await saveDetails()) onClose();
    // A failed save leaves the prompt up with the error, rather than
    // closing and silently discarding what the user typed.
    else setIsConfirmingExit(false);
  };

  const toggleLinkSharing = async (enabled: boolean) => {
    setIsBusy(true);
    setError("");
    try {
      const shareToken = await setLinkSharing(plan.id, enabled);
      onPlanChange({ ...plan, shareToken });
    } catch (caught) {
      console.error("Failed to change link sharing:", caught);
      setError("Couldn't change link sharing.");
    } finally {
      setIsBusy(false);
    }
  };

  const feedUrl =
    plan.shareToken ? `${origin}/api/calendar/${plan.shareToken}.ics` : "";
  const webcalUrl = feedUrl.replace(/^https?:/, "webcal:");
  const viewUrl =
    plan.shareToken ? `${origin}/plan/shared/${plan.shareToken}` : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-scrim backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div className="flex max-h-[85vh] w-full max-w-md flex-col rounded-lg border border-line bg-surface-raised shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-line p-4">
          <h2 className="text-sm font-semibold sm:text-base">Plan settings</h2>
          <button
            type="button"
            onClick={requestClose}
            aria-label="Close"
            className="rounded-sm p-1 transition-colors hover:bg-line"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4">
          {!canManage && (
            <p className="rounded-md bg-well p-2 text-xs text-ink-muted">
              {plan.householdId ?
                "This plan belongs to your household, so everyone in it can plan meals here. Only its owner can rename it or change sharing."
              : `This plan is shared with you as ${plan.role === "editor" ? "an editor" : "a viewer"}. Only its owner can rename it or change sharing.`
              }
            </p>
          )}

          {canManage && (
            <>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  Plan name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-9 w-full rounded-md border border-line bg-transparent px-2 text-xs outline-none focus:border-ink"
                />
              </div>

              <div>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  Meals
                </p>
                <p className="mb-2 text-[11px] leading-snug text-ink-muted">
                  Rename, retime, add or remove the meals in this plan &mdash;
                  three snacks, no breakfast, a &ldquo;Meal prep&rdquo; slot,
                  whatever suits you. They always show in time order. Times have
                  no timezone, so a 6pm dinner shows as 6pm wherever it&rsquo;s
                  viewed.
                </p>

                <ul className="flex flex-col gap-1.5">
                  {slots.map((slot) => (
                    <li
                      key={slot.id}
                      className="flex items-center gap-1.5"
                    >
                      <input
                        type="text"
                        value={slot.label}
                        aria-label="Meal name"
                        onChange={(event) =>
                          updateSlot(slot.id, { label: event.target.value })
                        }
                        className="min-w-0 flex-1 rounded-md border border-line bg-transparent px-2 py-1 text-xs outline-none focus:border-ink"
                      />
                      <input
                        type="time"
                        value={slot.time}
                        aria-label={`${slot.label} time`}
                        onChange={(event) =>
                          updateSlot(slot.id, { time: event.target.value })
                        }
                        className="shrink-0 rounded-md border border-line bg-transparent px-1.5 py-1 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => removeSlot(slot.id)}
                        aria-label={`Remove ${slot.label}`}
                        disabled={slots.length === 1}
                        title={
                          slots.length === 1 ?
                            "A plan needs at least one meal"
                          : `Remove ${slot.label}`
                        }
                        className={`
                          shrink-0 rounded-sm p-1
                          ${
                            slots.length === 1 ?
                              "cursor-not-allowed text-ink-muted/50"
                            : "text-ink-muted hover:text-danger"
                          }
                        `}
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={addSlot}
                  className="mt-2 flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
                >
                  <Plus className="size-3.5" />
                  Add a meal
                </button>
              </div>

              {/* The share token is only read for the owner, so a household
                  admin standing in for them can't see or manage the link. */}
              {isOwner && (
                <div className="border-t border-line pt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-semibold">Share link</p>
                    <button
                      type="button"
                      onClick={() => toggleLinkSharing(!plan.shareToken)}
                      disabled={isBusy}
                      className={`
                      flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px]
                      ${
                        plan.shareToken ?
                          "border-line text-ink-muted hover:border-danger hover:text-danger"
                        : "border-accent text-accent"
                      }
                    `}
                    >
                      {plan.shareToken ?
                        <>
                          <Link2Off className="size-3" /> Turn off
                        </>
                      : <>
                          <Link2 className="size-3" /> Turn on
                        </>
                      }
                    </button>
                  </div>

                  {plan.shareToken ?
                    <div className="space-y-3">
                      <CopyableUrl
                        label="Read-only web view"
                        url={viewUrl}
                      />
                      <CopyableUrl
                        label="Calendar subscription (.ics)"
                        url={feedUrl}
                      />
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={`https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webcalUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md bg-accent hover:bg-accent-hover px-3 py-1.5 text-[11px] font-semibold text-on-accent"
                        >
                          Add to Google Calendar
                        </a>
                        <a
                          href={webcalUrl}
                          className="rounded-md border border-line bg-surface-raised px-3 py-1.5 text-[11px] font-semibold text-ink"
                        >
                          Add to Apple / Outlook
                        </a>
                      </div>
                      <p className="text-[11px] leading-snug text-ink-muted">
                        Calendar apps pull subscribed feeds on their own
                        schedule, so changes here won&rsquo;t appear there right
                        away. To refresh sooner: Apple Calendar &mdash; View
                        &rsaquo; Refresh Calendars (or pull down on iPhone);
                        Outlook &mdash; Send/Receive; Google Calendar has no
                        refresh and can take up to a day. Turning sharing off
                        and on again issues a new link and breaks every old one.
                      </p>
                    </div>
                  : <p className="text-[11px] text-ink-muted">
                      Off. Turning this on creates a secret link that shows this
                      plan read-only and can be subscribed to from any calendar
                      app.
                    </p>
                  }
                </div>
              )}

              <SharingSection
                kind="meal_plan"
                resourceId={plan.id}
                noun="plan"
                householdId={plan.householdId}
                household={household}
                isOwner={isOwner}
                canManage={canManage}
                onVisibilityChange={async (householdId) => {
                  await updatePlan(plan.id, { householdId });
                  onPlanChange({ ...plan, householdId });
                }}
                onError={setError}
              />
            </>
          )}

          {error && <p className="text-xs text-danger">{error}</p>}
        </div>

        {/* Pinned rather than sitting inline between "Meals" and "Share
            link", where it scrolled out of view the moment you looked at
            anything below it — which made unsaved edits very easy to
            walk away from. */}
        {canManage && (
          <div className="shrink-0 border-t border-line p-4">
            {isConfirmingExit ?
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-1.5 text-xs font-semibold">
                  <CircleAlert className="size-3.5 shrink-0 text-accent" />
                  Save your changes before closing?
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={saveAndClose}
                    disabled={isBusy}
                    className="flex-1 rounded-md bg-accent hover:bg-accent-hover px-3 py-2 text-xs font-semibold text-on-accent disabled:opacity-50"
                  >
                    {isBusy ? "Saving..." : "Save & close"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isBusy}
                    className="rounded-md border border-line px-3 py-2 text-xs text-ink-muted transition-colors hover:border-danger hover:text-danger disabled:opacity-50"
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsConfirmingExit(false)}
                    disabled={isBusy}
                    className="rounded-md px-3 py-2 text-xs text-ink-muted hover:text-current disabled:opacity-50"
                  >
                    Keep editing
                  </button>
                </div>
              </div>
            : <div className="flex items-center gap-3">
                <p className="flex min-w-0 flex-1 items-center gap-1.5 text-[11px] leading-snug text-ink-muted">
                  {isDirty ?
                    <>
                      <CircleAlert className="size-3.5 shrink-0 text-accent" />
                      <span className="font-semibold text-accent">
                        Unsaved changes
                      </span>
                    </>
                  : "Sharing settings save on their own."}
                </p>

                <button
                  type="button"
                  onClick={saveDetails}
                  disabled={isBusy || !isDirty}
                  className={`
                    shrink-0 rounded-md px-5 py-2 text-xs font-semibold
                    transition-all
                    ${
                      isBusy || !isDirty ?
                        "cursor-not-allowed bg-well text-ink-muted"
                      : "cursor-pointer bg-accent hover:bg-accent-hover text-on-accent"
                    }
                  `}
                >
                  {isBusy ?
                    "Saving..."
                  : isDirty ?
                    "Save changes"
                  : "Saved"}
                </button>
              </div>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanSettings;
