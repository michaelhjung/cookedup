"use client";

import {
  Check,
  Ellipsis,
  Home,
  Link2,
  LogOut,
  Pencil,
  Trash2,
  UserPlus,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import CopyableUrl from "@components/CopyableUrl";
import Bowl from "@components/loaders/Bowl";
import ConfirmDialog from "@components/MealPlan/ConfirmDialog";
import Popover from "@components/Popover";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import {
  Household,
  HouseholdMember,
  HouseholdSummary,
  createHousehold,
  deleteHousehold,
  fetchHouseholdSummary,
  leaveHousehold,
  removeMember,
  renameHousehold,
  setMemberRole,
} from "@lib/household/client";
import { useHousehold } from "@lib/household/useHousehold";
import { createInvite, getDisplayName } from "@lib/sharing/client";

const INVITE_TOKEN_PATTERN =
  /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i;

/** Accepts a pasted invite link or a bare token. */
const extractInviteToken = (input: string): string | null =>
  input.match(INVITE_TOKEN_PATTERN)?.[1]?.toLowerCase() ?? null;

const summarize = (summary: HouseholdSummary): string => {
  const parts = [
    [summary.planCount, "meal plan"],
    [summary.pantryCount, "pantry", "pantries"],
    [summary.listCount, "grocery list"],
  ] as const;

  const named = parts
    .filter(([count]) => count > 0)
    .map(
      ([count, singular, plural]) =>
        `${count} ${count === 1 ? singular : (plural ?? `${singular}s`)}`,
    );

  return named.length > 0 ? named.join(", ") : "Nothing shared yet";
};

// ---------------------------------------------------------------------
// No household yet: start one or join one
// ---------------------------------------------------------------------

const NoHousehold: React.FC<{ onCreated: () => Promise<void> }> = ({
  onCreated,
}) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Give the household a name.");
      return;
    }

    setIsCreating(true);
    setError("");
    try {
      await createHousehold(name);
      await onCreated();
    } catch (caught) {
      console.error("Failed to create household:", caught);
      setError(
        caught instanceof Error && caught.message ?
          caught.message
        : "Couldn't create the household.",
      );
      setIsCreating(false);
    }
  };

  const handleJoin = (event: React.FormEvent) => {
    event.preventDefault();
    const token = extractInviteToken(link);
    if (!token) {
      setError("That doesn't look like an invite link.");
      return;
    }
    router.push(`/invite/${token}`);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
          Cook as a household
        </h2>
        <p className="mt-1.5 max-w-[48ch] text-sm leading-relaxed text-ink-muted">
          Everyone in a household sees the same meal plans, pantry and grocery
          lists, with nothing to share one at a time.
        </p>
      </div>

      <form
        onSubmit={handleCreate}
        className="rounded-lg border border-line bg-surface-raised p-4"
      >
        <label
          htmlFor="household-name"
          className="mb-1 block text-xs font-semibold"
        >
          Start a household
        </label>
        <div className="flex gap-2">
          <input
            id="household-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="The Nguyens"
            autoComplete="off"
            className="h-10 min-w-0 flex-1 rounded-md border border-line bg-transparent px-3 text-sm outline-none transition-colors focus:border-ink"
          />
          <button
            type="submit"
            disabled={isCreating}
            className="h-10 shrink-0 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
        <p className="mt-1.5 text-[11px] text-ink-muted">
          You&rsquo;ll be its admin and can invite people next.
        </p>
      </form>

      <div className="my-4 flex items-center gap-2 text-xs text-ink-muted">
        <span className="h-px grow bg-line" />
        or
        <span className="h-px grow bg-line" />
      </div>

      <form
        onSubmit={handleJoin}
        className="rounded-lg border border-line bg-surface-raised p-4"
      >
        <label
          htmlFor="household-link"
          className="mb-1 block text-xs font-semibold"
        >
          Join with an invite link
        </label>
        <div className="flex gap-2">
          <input
            id="household-link"
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder="Paste the link you were sent"
            autoComplete="off"
            className="h-10 min-w-0 flex-1 rounded-md border border-line bg-transparent px-3 text-sm outline-none transition-colors focus:border-ink"
          />
          <button
            type="submit"
            className="h-10 shrink-0 rounded-md border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-line-strong active:translate-y-px"
          >
            Join
          </button>
        </div>
      </form>

      {error && (
        <p
          role="alert"
          className="mt-3 text-xs text-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------
// One member row
// ---------------------------------------------------------------------

interface MemberRowProps {
  member: HouseholdMember;
  isSelf: boolean;
  canManage: boolean;
  onRemove: () => void;
  onRoleChange: (_role: "admin" | "member") => void;
}

const MemberRow: React.FC<MemberRowProps> = ({
  member,
  isSelf,
  canManage,
  onRemove,
  onRoleChange,
}) => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const name = getDisplayName(member.email);

  return (
    <li className="flex min-h-14 items-center gap-3 py-2">
      <span
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-well text-sm font-semibold text-ink"
      >
        {name[0]?.toUpperCase() ?? "?"}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">
          {name}
          {isSelf && <span className="ml-1.5 text-ink-muted">(you)</span>}
        </p>
        <p className="truncate text-xs text-ink-muted">
          {member.email ?? "No email on file"}
        </p>
      </div>
      <span
        className={`
          shrink-0 rounded-sm px-1.5 py-0.5 text-[11px] font-medium
          ${member.role === "admin" ? "bg-accent-tint text-accent" : "bg-well text-ink-muted"}
        `}
      >
        {member.role === "admin" ? "Admin" : "Member"}
      </span>

      {canManage && !isSelf && (
        <>
          <button
            ref={setAnchor}
            type="button"
            aria-label={`Options for ${name}`}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex size-11 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink"
          >
            <Ellipsis className="size-4" />
          </button>
          {isOpen && (
            <Popover
              anchor={anchor}
              onClose={() => setIsOpen(false)}
            >
              <div
                role="menu"
                className="p-1"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    onRoleChange(member.role === "admin" ? "member" : "admin");
                  }}
                  className="flex h-10 w-full items-center rounded-sm px-2.5 text-sm hover:bg-well"
                >
                  {member.role === "admin" ? "Make a member" : "Make an admin"}
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    onRemove();
                  }}
                  className="flex h-10 w-full items-center rounded-sm px-2.5 text-sm text-danger hover:bg-well"
                >
                  Remove from household
                </button>
              </div>
            </Popover>
          )}
        </>
      )}
    </li>
  );
};

// ---------------------------------------------------------------------
// The household
// ---------------------------------------------------------------------

interface HouseholdViewProps {
  household: Household;
  userId: string;
  onChange: (_household: Household | null) => void;
  reload: () => Promise<void>;
}

const HouseholdView: React.FC<HouseholdViewProps> = ({
  household,
  userId,
  onChange,
  reload,
}) => {
  const { showToast } = useToast();
  const [summary, setSummary] = useState<HouseholdSummary | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [draftName, setDraftName] = useState(household.name);
  const [inviteUrl, setInviteUrl] = useState("");
  const [isInviting, setIsInviting] = useState(false);
  const [pending, setPending] = useState<
    | { kind: "leave" }
    | { kind: "delete" }
    | { kind: "remove"; member: HouseholdMember }
    | null
  >(null);
  const [isBusy, setIsBusy] = useState(false);

  const isAdmin = household.role === "admin";
  const adminCount = household.members.filter(
    (member) => member.role === "admin",
  ).length;
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  useEffect(() => {
    fetchHouseholdSummary(household.id).then(setSummary).catch(console.error);
  }, [household.id]);

  const saveName = async () => {
    const trimmed = draftName.trim();
    if (!trimmed || trimmed === household.name) {
      setDraftName(household.name);
      setIsRenaming(false);
      return;
    }

    try {
      await renameHousehold(household.id, trimmed);
      onChange({ ...household, name: trimmed });
      setIsRenaming(false);
    } catch (caught) {
      console.error("Failed to rename household:", caught);
      showToast("Couldn't rename the household.");
    }
  };

  const makeInvite = async () => {
    setIsInviting(true);
    try {
      const token = await createInvite("household", household.id, "member");
      const url = `${origin}/invite/${token}`;
      setInviteUrl(url);
      await navigator.clipboard.writeText(url).catch(() => undefined);
    } catch (caught) {
      console.error("Failed to create invite:", caught);
      showToast("Couldn't create an invite link.");
    } finally {
      setIsInviting(false);
    }
  };

  const changeRole = async (
    member: HouseholdMember,
    role: "admin" | "member",
  ) => {
    // Optimistic: the row updates now and is put back if the write fails.
    const previous = household;
    onChange({
      ...household,
      members: household.members.map((candidate) =>
        candidate.userId === member.userId ? { ...candidate, role } : candidate,
      ),
    });

    try {
      await setMemberRole(household.id, member.userId, role);
    } catch (caught) {
      console.error("Failed to change role:", caught);
      onChange(previous);
      showToast("Couldn't change that role.");
    }
  };

  const confirmPending = async () => {
    if (!pending) return;
    setIsBusy(true);

    try {
      if (pending.kind === "remove") {
        await removeMember(household.id, pending.member.userId);
        onChange({
          ...household,
          members: household.members.filter(
            (member) => member.userId !== pending.member.userId,
          ),
        });
      } else if (pending.kind === "leave") {
        await leaveHousehold();
        await reload();
      } else {
        await deleteHousehold(household.id);
        onChange(null);
      }
      setPending(null);
    } catch (caught) {
      console.error("Household action failed:", caught);
      showToast(
        caught instanceof Error && caught.message ?
          caught.message
        : "That didn't go through.",
      );
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      {/* Name */}
      <div className="mb-5 flex items-start gap-3">
        <span
          aria-hidden
          className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-tint text-accent"
        >
          <Home className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          {isRenaming ?
            <form
              onSubmit={(event) => {
                event.preventDefault();
                saveName();
              }}
              className="flex gap-1.5"
            >
              <input
                autoFocus
                aria-label="Household name"
                value={draftName}
                onChange={(event) => setDraftName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setDraftName(household.name);
                    setIsRenaming(false);
                  }
                }}
                className="h-10 min-w-0 flex-1 rounded-md border border-line bg-transparent px-2.5 text-lg font-semibold tracking-[-0.02em] outline-none focus:border-ink"
              />
              <button
                type="submit"
                aria-label="Save name"
                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-on-accent hover:bg-accent-hover"
              >
                <Check className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Cancel"
                onClick={() => {
                  setDraftName(household.name);
                  setIsRenaming(false);
                }}
                className="flex size-10 shrink-0 items-center justify-center rounded-md border border-line text-ink-muted hover:border-line-strong hover:text-ink"
              >
                <X className="size-4" />
              </button>
            </form>
          : <div className="flex items-center gap-1">
              <h2 className="truncate text-2xl font-semibold tracking-[-0.02em]">
                {household.name}
              </h2>
              {isAdmin && (
                <button
                  type="button"
                  aria-label="Rename household"
                  onClick={() => setIsRenaming(true)}
                  className="flex size-9 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink"
                >
                  <Pencil className="size-4" />
                </button>
              )}
            </div>
          }
          <p className="text-sm text-ink-muted">
            {household.members.length === 1 ?
              "Just you so far"
            : `${household.members.length} people`}
            {summary && (
              <>
                <span className="mx-1.5">&middot;</span>
                {summarize(summary)}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Members */}
      <section className="rounded-lg border border-line bg-surface-raised px-4">
        <ul className="divide-y divide-line">
          {household.members.map((member) => (
            <MemberRow
              key={member.userId}
              member={member}
              isSelf={member.userId === userId}
              canManage={isAdmin}
              onRemove={() => setPending({ kind: "remove", member })}
              onRoleChange={(role) => changeRole(member, role)}
            />
          ))}
        </ul>
      </section>

      {/* Invite */}
      {isAdmin && (
        <section className="mt-4 rounded-lg border border-line bg-surface-raised p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Invite someone</p>
              <p className="mt-0.5 text-xs leading-snug text-ink-muted">
                Anyone with the link can join for seven days. They&rsquo;ll see
                everything the household shares.
              </p>
            </div>
            <button
              type="button"
              onClick={makeInvite}
              disabled={isInviting}
              className="flex h-10 shrink-0 items-center gap-1.5 rounded-md bg-accent px-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px disabled:opacity-50"
            >
              {inviteUrl ?
                <Link2 className="size-4" />
              : <UserPlus className="size-4" />}
              {isInviting ?
                "Creating..."
              : inviteUrl ?
                "New link"
              : "Invite link"}
            </button>
          </div>
          {inviteUrl && (
            <div className="mt-3">
              <CopyableUrl
                label="Copied. Send it however you like"
                url={inviteUrl}
              />
            </div>
          )}
        </section>
      )}

      {/* Leave / delete */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setPending({ kind: "leave" })}
          className="flex h-10 items-center gap-1.5 rounded-md border border-line px-3 text-sm text-ink-muted transition-colors hover:border-danger hover:text-danger"
        >
          <LogOut className="size-4" />
          Leave household
        </button>
        {isAdmin && (
          <button
            type="button"
            onClick={() => setPending({ kind: "delete" })}
            className="flex h-10 items-center gap-1.5 rounded-md px-3 text-sm text-ink-muted transition-colors hover:text-danger"
          >
            <Trash2 className="size-4" />
            Delete household
          </button>
        )}
      </div>

      {pending?.kind === "leave" && (
        <ConfirmDialog
          title="Leave this household?"
          body={
            household.members.length === 1 ?
              "You're the only one in it, so it will be deleted. Anything shared to it goes back to being yours."
            : isAdmin && adminCount === 1 ?
              "You're the only admin, so the longest-standing member takes over. Your own plans, pantries and lists stay yours; anything you shared to the household stays there."
            : "Your own plans, pantries and lists stay yours; anything you shared to the household stays there."

          }
          confirmLabel="Leave"
          busyLabel="Leaving..."
          isDestructive
          isBusy={isBusy}
          onConfirm={confirmPending}
          onCancel={() => setPending(null)}
        />
      )}

      {pending?.kind === "delete" && (
        <ConfirmDialog
          title={`Delete ${household.name}?`}
          body="Everyone is removed and every shared plan, pantry and list goes back to whoever created it. Nothing is deleted except the household itself."
          confirmLabel="Delete household"
          busyLabel="Deleting..."
          isDestructive
          isBusy={isBusy}
          onConfirm={confirmPending}
          onCancel={() => setPending(null)}
        />
      )}

      {pending?.kind === "remove" && (
        <ConfirmDialog
          title={`Remove ${getDisplayName(pending.member.email)}?`}
          body="They'll stop seeing the household's plans, pantries and lists. Anything they created and shared to the household stays here."
          confirmLabel="Remove"
          busyLabel="Removing..."
          isDestructive
          isBusy={isBusy}
          onConfirm={confirmPending}
          onCancel={() => setPending(null)}
        />
      )}
    </div>
  );
};

// ---------------------------------------------------------------------

const HouseholdPanel: React.FC = () => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household, isLoading, error, reload, setHousehold } = useHousehold();

  if (authLoading || (user && isLoading))
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  if (!user)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Cook as a household
        </h2>
        <p className="max-w-md text-sm text-ink-muted sm:text-base">
          Group the people you cook with so you all see the same meal plans,
          pantry and grocery lists.
        </p>
        <button
          type="button"
          onClick={openAuthModal}
          className="mt-2 h-9 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          Sign in to get started
        </button>
      </div>
    );

  if (error)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <p className="text-sm text-danger">
          Couldn&rsquo;t load your household: {error}
        </p>
        <button
          type="button"
          onClick={reload}
          className="h-9 rounded-md border border-line px-4 text-sm font-medium hover:border-line-strong"
        >
          Try again
        </button>
      </div>
    );

  if (!household) return <NoHousehold onCreated={reload} />;

  return (
    <HouseholdView
      household={household}
      userId={user.id}
      onChange={setHousehold}
      reload={reload}
    />
  );
};

export default HouseholdPanel;
