"use client";

import { Ellipsis } from "lucide-react";
import React, { useRef } from "react";

import StatusControl from "@components/Pantry/StatusControl";
import { formatRelativeTime } from "@lib/pantry/time";
import { PantryItem, PantryStatus, STATUS_LABELS } from "@lib/pantry/types";

const LONG_PRESS_MS = 500;

interface PantryItemRowProps {
  item: PantryItem;
  /** Display name of whoever last touched it; null for the current user or unknown. */
  markedBy: string | null;
  canEdit: boolean;
  isFlashing: boolean;
  onStatusChange: (_status: PantryStatus) => void;
  onOpenMenu: () => void;
}

/**
 * One item: its name (with "Marked low 3 days ago · sam" underneath
 * when it needs attention), the status switch, and a menu button. A
 * long press anywhere on the name opens the same menu, which is easier
 * than the small button when the phone's in one hand.
 */
const PantryItemRow: React.FC<PantryItemRowProps> = ({
  item,
  markedBy,
  canEdit,
  isFlashing,
  onStatusChange,
  onOpenMenu,
}) => {
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startPress = () => {
    if (!canEdit) return;
    pressTimer.current = setTimeout(onOpenMenu, LONG_PRESS_MS);
  };
  const cancelPress = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = null;
  };

  const needsAttention = item.status !== "stocked";

  return (
    <li
      id={`pantry-item-${item.id}`}
      className={`
        flex min-h-[52px] items-center gap-1.5 py-1.5 pr-0.5 pl-3 sm:gap-2 sm:pr-1 sm:pl-4
        ${isFlashing ? "flash-row" : ""}
      `}
    >
      <div
        className="min-w-0 flex-1 select-none"
        onTouchStart={startPress}
        onTouchEnd={cancelPress}
        onTouchMove={cancelPress}
        onContextMenu={(event) => {
          if (pressTimer.current) event.preventDefault();
        }}
      >
        <p className="line-clamp-2 text-sm leading-tight sm:text-[15px]">
          {item.name}
        </p>
        {needsAttention && (
          <p className="mt-0.5 line-clamp-2 text-[11.5px] leading-snug text-ink-muted">
            {/* On phones the name column is narrow and the status sits
                right beside it in colour, so "Marked low" is dropped. */}
            <span className="hidden sm:inline">
              Marked {STATUS_LABELS[item.status].toLowerCase()}{" "}
            </span>
            {formatRelativeTime(item.updatedAt)}
            {markedBy && (
              <>
                <span className="mx-1">&middot;</span>
                {markedBy}
              </>
            )}
          </p>
        )}
      </div>

      <StatusControl
        value={item.status}
        itemName={item.name}
        isDisabled={!canEdit}
        onChange={onStatusChange}
      />

      {canEdit ?
        <button
          type="button"
          aria-label={`Options for ${item.name}`}
          onClick={onOpenMenu}
          className="flex h-11 w-9 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink sm:size-9"
        >
          <Ellipsis className="size-4" />
        </button>
      : <span
          aria-hidden
          className="h-11 w-9 shrink-0 sm:size-9"
        />
      }
    </li>
  );
};

export default PantryItemRow;
