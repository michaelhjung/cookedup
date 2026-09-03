"use client";

import {
  Check,
  Copy,
  CircleAlert,
  Link2,
  Link2Off,
  Plus,
  Trash2,
  UserPlus,
  X,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

import {
  countEntriesInSlots,
  createInvite,
  deleteEntriesInSlots,
  fetchShares,
  removeShare,
  setLinkSharing,
  updatePlan,
} from "@lib/mealPlan/client";
import {
  MealPlan,
  MealSlotDef,
  PlanShare,
  makeSlotId,
  sortSlots,
} from "@lib/mealPlan/types";

interface PlanSettingsProps {
  plan: MealPlan;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onPlanChange: (_plan: MealPlan) => void;
  onClose: () => void;
}

const CopyableUrl: React.FC<{ label: string; url: string }> = ({
  label,
  url,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div>
      <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <div className="flex gap-1.5">
        <input
          readOnly
          value={url}
          onFocus={(event) => event.target.select()}
          className="min-w-0 flex-1 rounded border border-zinc-500/30 bg-transparent px-2 py-1.5 text-[0.65rem]"
        />
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(url).then(() => setCopied(true));
          }}
          aria-label={`Copy ${label}`}
          className="shrink-0 rounded border border-zinc-500/30 px-2 transition-colors hover:border-[var(--pastel-blue)]"
        >
          {copied ?
            <Check className="size-3.5 text-green-500" />
          : <Copy className="size-3.5" />}
        </button>
      </div>
    </div>
  );
};

const PlanSettings: React.FC<PlanSettingsProps> = ({
  plan,
  onPlanChange,
  onClose,
}) => {
  const [name, setName] = useState(plan.name);
  const [slots, setSlots] = useState<MealSlotDef[]>(plan.slots);
  const [shares, setShares] = useState<PlanShare[]>([]);
  const [inviteRole, setInviteRole] = useState<"viewer" | "editor">("editor");
  const [inviteUrl, setInviteUrl] = useState("");
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
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  useEffect(() => {
    if (!isOwner) return;
    fetchShares(plan.id).then(setShares).catch(console.error);
  }, [plan.id, isOwner]);

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

  const updateSlot = (id: string, changes: Partial<MealSlotDef>) =>
    setSlots((previous) =>
      previous.map((slot) => (slot.id === id ? { ...slot, ...changes } : slot)),
    );

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

  const generateInvite = async () => {
    setIsBusy(true);
    setError("");
    try {
      const token = await createInvite(plan.id, inviteRole);
      setInviteUrl(`${origin}/invite/${token}`);
    } catch (caught) {
      console.error("Failed to create invite:", caught);
      setError("Couldn't create an invite link.");
    } finally {
      setIsBusy(false);
    }
  };

  const revokeShare = async (userId: string) => {
    try {
      await removeShare(plan.id, userId);
      setShares((previous) =>
        previous.filter((share) => share.userId !== userId),
      );
    } catch (caught) {
      console.error("Failed to remove share:", caught);
      setError("Couldn't remove that person.");
    }
  };

  const feedUrl =
    plan.shareToken ? `${origin}/api/calendar/${plan.shareToken}.ics` : "";
  const webcalUrl = feedUrl.replace(/^https?:/, "webcal:");
  const viewUrl =
    plan.shareToken ? `${origin}/plan/shared/${plan.shareToken}` : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div className="flex max-h-[85vh] w-full max-w-md flex-col rounded-xl border border-zinc-500/20 bg-[var(--background-color)] shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-500/15 p-4">
          <h2 className="text-sm font-semibold sm:text-base">Plan settings</h2>
          <button
            type="button"
            onClick={requestClose}
            aria-label="Close"
            className="rounded p-1 transition-colors hover:bg-zinc-500/10"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4">
          {!isOwner && (
            <p className="rounded-md bg-[var(--pastel-brown)]/15 p-2 text-xs text-gray-500">
              This plan is shared with you as{" "}
              {plan.role === "editor" ? "an editor" : "a viewer"}. Only its
              owner can rename it or change sharing.
            </p>
          )}

          {isOwner && (
            <>
              <div>
                <label className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-wide text-gray-400">
                  Plan name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-9 w-full rounded border border-zinc-500/30 bg-transparent px-2 text-xs outline-none focus:border-[var(--pastel-blue)]"
                />
              </div>

              <div>
                <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-wide text-gray-400">
                  Meals
                </p>
                <p className="mb-2 text-[0.65rem] leading-snug text-gray-400">
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
                        className="min-w-0 flex-1 rounded border border-zinc-500/30 bg-transparent px-2 py-1 text-xs outline-none focus:border-[var(--pastel-blue)]"
                      />
                      <input
                        type="time"
                        value={slot.time}
                        aria-label={`${slot.label} time`}
                        onChange={(event) =>
                          updateSlot(slot.id, { time: event.target.value })
                        }
                        className="shrink-0 rounded border border-zinc-500/30 bg-transparent px-1.5 py-1 text-xs"
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
                          shrink-0 rounded p-1
                          ${
                            slots.length === 1 ?
                              "cursor-not-allowed text-gray-300"
                            : "text-gray-400 hover:text-red-400"
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
                  className="mt-2 flex items-center gap-1.5 rounded-3xl border border-zinc-400/50 px-3 py-1.5 text-xs text-gray-500 transition-colors hover:border-[var(--pastel-blue)] hover:text-[var(--pastel-blue)]"
                >
                  <Plus className="size-3.5" />
                  Add a meal
                </button>
              </div>

              <div className="border-t border-zinc-500/15 pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-semibold">Share link</p>
                  <button
                    type="button"
                    onClick={() => toggleLinkSharing(!plan.shareToken)}
                    disabled={isBusy}
                    className={`
                      flex items-center gap-1.5 rounded-3xl border px-2.5 py-1 text-[0.65rem]
                      ${
                        plan.shareToken ?
                          "border-zinc-400/50 text-gray-500 hover:border-red-400 hover:text-red-400"
                        : "border-[var(--pastel-blue)] text-[var(--pastel-blue)]"
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
                        className="rounded-3xl bg-[var(--pastel-blue)]/70 px-3 py-1.5 text-[0.65rem] font-semibold text-blue-900"
                      >
                        Add to Google Calendar
                      </a>
                      <a
                        href={webcalUrl}
                        className="rounded-3xl bg-[var(--pastel-orange)]/60 px-3 py-1.5 text-[0.65rem] font-semibold text-orange-900"
                      >
                        Add to Apple / Outlook
                      </a>
                    </div>
                    <p className="text-[0.65rem] leading-snug text-gray-400">
                      Calendar apps refresh subscribed feeds on their own
                      schedule — Google often takes several hours, so changes
                      here won&rsquo;t appear there right away. Turning sharing
                      off and on again issues a new link and breaks every old
                      one.
                    </p>
                  </div>
                : <p className="text-[0.65rem] text-gray-400">
                    Off. Turning this on creates a secret link that shows this
                    plan read-only and can be subscribed to from any calendar
                    app.
                  </p>
                }
              </div>

              <div className="border-t border-zinc-500/15 pt-4">
                <p className="mb-2 text-xs font-semibold">People</p>

                <div className="mb-3 flex gap-1.5">
                  <select
                    value={inviteRole}
                    onChange={(event) =>
                      setInviteRole(event.target.value as "viewer" | "editor")
                    }
                    className="rounded border border-zinc-500/30 bg-[var(--background-color)] px-2 py-1.5 text-xs"
                  >
                    <option value="editor">Can edit</option>
                    <option value="viewer">Can view</option>
                  </select>
                  <button
                    type="button"
                    onClick={generateInvite}
                    disabled={isBusy}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-3xl border border-[var(--pastel-blue)] px-3 py-1.5 text-xs font-semibold text-[var(--pastel-blue)] disabled:opacity-50"
                  >
                    <UserPlus className="size-3.5" />
                    Create invite link
                  </button>
                </div>

                {inviteUrl && (
                  <div className="mb-3">
                    <CopyableUrl
                      label="Invite link (send it however you like)"
                      url={inviteUrl}
                    />
                  </div>
                )}

                {shares.length === 0 ?
                  <p className="text-[0.65rem] text-gray-400">
                    Nobody else has this plan yet.
                  </p>
                : <ul className="space-y-1">
                    {shares.map((share) => (
                      <li
                        key={share.userId}
                        className="flex items-center justify-between gap-2 rounded bg-zinc-500/5 px-2 py-1.5"
                      >
                        <span className="min-w-0 flex-1 truncate text-xs">
                          {share.email ?? "Someone"}
                          <span className="ml-1.5 text-[0.65rem] text-gray-400">
                            {share.role === "editor" ? "can edit" : "can view"}
                          </span>
                        </span>
                        <button
                          type="button"
                          onClick={() => revokeShare(share.userId)}
                          aria-label="Remove access"
                          className="shrink-0 text-gray-400 hover:text-red-400"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </>
          )}

          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>

        {/* Pinned rather than sitting inline between "Meals" and "Share
            link", where it scrolled out of view the moment you looked at
            anything below it — which made unsaved edits very easy to
            walk away from. */}
        {isOwner && (
          <div className="shrink-0 border-t border-zinc-500/15 p-4">
            {isConfirmingExit ?
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-1.5 text-xs font-semibold">
                  <CircleAlert className="size-3.5 shrink-0 text-[var(--pastel-orange)]" />
                  Save your changes before closing?
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={saveAndClose}
                    disabled={isBusy}
                    className="flex-1 rounded-3xl bg-[var(--pastel-blue)] px-3 py-2 text-xs font-semibold text-blue-900 disabled:opacity-50"
                  >
                    {isBusy ? "Saving..." : "Save & close"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isBusy}
                    className="rounded-3xl border border-zinc-400/50 px-3 py-2 text-xs text-gray-500 transition-colors hover:border-red-400 hover:text-red-400 disabled:opacity-50"
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsConfirmingExit(false)}
                    disabled={isBusy}
                    className="rounded-3xl px-3 py-2 text-xs text-gray-500 hover:text-current disabled:opacity-50"
                  >
                    Keep editing
                  </button>
                </div>
              </div>
            : <div className="flex items-center gap-3">
                <p className="flex min-w-0 flex-1 items-center gap-1.5 text-[0.65rem] leading-snug text-gray-400">
                  {isDirty ?
                    <>
                      <CircleAlert className="size-3.5 shrink-0 text-[var(--pastel-orange)]" />
                      <span className="font-semibold text-[var(--pastel-orange)]">
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
                    shrink-0 rounded-3xl px-5 py-2 text-xs font-semibold
                    transition-all
                    ${
                      isBusy || !isDirty ?
                        "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
                      : "cursor-pointer bg-[var(--pastel-blue)] text-blue-900 shadow-md hover:scale-105"
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
