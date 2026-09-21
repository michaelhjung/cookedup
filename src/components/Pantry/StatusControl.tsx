"use client";

import React from "react";

import { PantryStatus, STATUS_LABELS } from "@lib/pantry/types";

const STATUSES: PantryStatus[] = ["stocked", "low", "out"];

interface StatusControlProps {
  value: PantryStatus;
  itemName: string;
  isDisabled?: boolean;
  onChange: (_status: PantryStatus) => void;
}

/**
 * The three-way switch on every pantry row. Each segment is at least
 * 44px tall and wide so a thumb can hit it on the first try; the chosen
 * one is raised and coloured by meaning (low = accent, out = danger).
 */
const StatusControl: React.FC<StatusControlProps> = ({
  value,
  itemName,
  isDisabled = false,
  onChange,
}) => (
  <div
    role="radiogroup"
    aria-label={`${itemName} status`}
    className="flex shrink-0 gap-0.5 rounded-md bg-well p-0.5"
  >
    {STATUSES.map((status) => {
      const isSelected = status === value;
      return (
        <button
          key={status}
          type="button"
          role="radio"
          aria-checked={isSelected}
          disabled={isDisabled}
          onClick={() => {
            if (!isSelected) onChange(status);
          }}
          className={`
            h-10 min-w-11 rounded-sm px-1 text-[11.5px] font-medium
            transition-colors sm:h-9 sm:min-w-14 sm:px-2 sm:text-xs
            disabled:cursor-default
            ${
              isSelected ?
                `bg-surface-raised shadow-[0_1px_0_rgba(0,0,0,0.06)] ${
                  status === "low" ? "text-accent"
                  : status === "out" ? "text-danger"
                  : "text-ink"
                }`
              : "text-ink-muted hover:text-ink disabled:hover:text-ink-muted"
            }
          `}
        >
          {STATUS_LABELS[status]}
        </button>
      );
    })}
  </div>
);

export default StatusControl;
