"use client";

import { Trash2, UserPlus } from "lucide-react";
import React, { useEffect, useState } from "react";

import CopyableUrl from "@components/CopyableUrl";
import { Household } from "@lib/household/client";
import {
  ResourceKind,
  Share,
  ShareRole,
  createInvite,
  fetchShares,
  getDisplayName,
  removeShare,
} from "@lib/sharing/client";

interface SharingSectionProps {
  kind: ResourceKind;
  resourceId: string;
  /** What the object is called in copy: "plan", "pantry", "list". */
  noun: string;
  /** Which household the object is in right now, if any. */
  householdId: string | null;
  /** The current user's household, if any: decides whether the choice is offered. */
  household: Household | null;
  /** Only the owner may move the object in or out of the household. */
  isOwner: boolean;
  /** Owners and household admins may invite and remove people. */
  canManage: boolean;
  /**
   * Which roles an invite may carry. Recipes are author-only, so they
   * offer viewer alone and the role picker disappears.
   */
  roles?: ShareRole[];
  onVisibilityChange: (_householdId: string | null) => Promise<void>;
  onError: (_message: string) => void;
}

const ROLE_LABELS: Record<ShareRole, string> = {
  editor: "Can edit",
  viewer: "Can view",
};

/**
 * The two ways to share one thing: with the whole household, or with
 * individual people by invite link. Used identically by plans, pantries
 * and grocery lists, so the wording only differs by noun.
 */
const SharingSection: React.FC<SharingSectionProps> = ({
  kind,
  resourceId,
  noun,
  householdId,
  household,
  isOwner,
  canManage,
  roles = ["editor", "viewer"],
  onVisibilityChange,
  onError,
}) => {
  const [shares, setShares] = useState<Share[]>([]);
  const [inviteRole, setInviteRole] = useState<ShareRole>(roles[0]);
  const canHouseholdEdit = roles.includes("editor");
  const [inviteUrl, setInviteUrl] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  useEffect(() => {
    if (!canManage) return;
    fetchShares(kind, resourceId).then(setShares).catch(console.error);
  }, [kind, resourceId, canManage]);

  const setVisibility = async (next: string | null) => {
    if (next === householdId) return;
    setIsBusy(true);
    try {
      await onVisibilityChange(next);
    } catch (caught) {
      console.error("Failed to change visibility:", caught);
      onError(`Couldn't change who can see this ${noun}.`);
    } finally {
      setIsBusy(false);
    }
  };

  const generateInvite = async () => {
    setIsBusy(true);
    try {
      const token = await createInvite(kind, resourceId, inviteRole);
      setInviteUrl(`${origin}/invite/${token}`);
    } catch (caught) {
      console.error("Failed to create invite:", caught);
      onError("Couldn't create an invite link.");
    } finally {
      setIsBusy(false);
    }
  };

  const revoke = async (userId: string) => {
    try {
      await removeShare(kind, resourceId, userId);
      setShares((previous) =>
        previous.filter((share) => share.userId !== userId),
      );
    } catch (caught) {
      console.error("Failed to remove share:", caught);
      onError("Couldn't remove that person.");
    }
  };

  return (
    <>
      {isOwner && household && (
        <div className="border-t border-line pt-4">
          <p className="mb-1.5 text-xs font-semibold">Who can see this</p>
          <div
            role="radiogroup"
            aria-label={`Who can see this ${noun}`}
            className="grid grid-cols-2 rounded-md border border-line p-0.5"
          >
            {(
              [
                { id: null, label: "Just me" },
                { id: household.id, label: household.name },
              ] as const
            ).map((option) => {
              const isSelected = householdId === option.id;
              return (
                <button
                  key={option.label}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  disabled={isBusy}
                  onClick={() => setVisibility(option.id)}
                  className={`
                    h-9 truncate rounded-sm px-2 text-xs font-medium transition-colors
                    ${isSelected ? "bg-ink text-surface" : "text-ink-muted hover:text-ink"}
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-ink-muted">
            {householdId ?
              canHouseholdEdit ?
                `Everyone in your household sees and edits this ${noun}. It stays yours to rename or delete.`
              : `Everyone in your household can see this ${noun}. Only you can change it.`

            : "Only you and the people you invite below can see it."}
          </p>
        </div>
      )}

      {canManage && (
        <div className="border-t border-line pt-4">
          <p className="mb-2 text-xs font-semibold">People</p>

          <div className="mb-3 flex gap-1.5">
            {roles.length > 1 && (
              <select
                value={inviteRole}
                onChange={(event) =>
                  setInviteRole(event.target.value as ShareRole)
                }
                aria-label="Invite role"
                className="rounded-md border border-line bg-surface-raised px-2 py-1.5 text-xs"
              >
                {roles.map((role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {ROLE_LABELS[role]}
                  </option>
                ))}
              </select>
            )}
            <button
              type="button"
              onClick={generateInvite}
              disabled={isBusy}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-accent px-3 py-1.5 text-xs font-semibold text-accent disabled:opacity-50"
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
            <p className="text-[11px] text-ink-muted">
              Nobody else has this {noun} yet.
            </p>
          : <ul className="space-y-1">
              {shares.map((share) => (
                <li
                  key={share.userId}
                  className="flex items-center justify-between gap-2 rounded-sm bg-well px-2 py-1.5"
                >
                  <span className="min-w-0 flex-1 truncate text-xs">
                    {share.email ?? getDisplayName(null)}
                    <span className="ml-1.5 text-[11px] text-ink-muted">
                      {share.role === "editor" ? "can edit" : "can view"}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => revoke(share.userId)}
                    aria-label="Remove access"
                    className="shrink-0 text-ink-muted hover:text-danger"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          }
        </div>
      )}
    </>
  );
};

export default SharingSection;
