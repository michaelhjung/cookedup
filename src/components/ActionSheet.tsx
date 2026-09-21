"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ActionSheetProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * A short menu of actions for one thing. On phones it rises from the
 * bottom edge where a thumb already is; from `sm` up it's a small
 * centred dialog. Tapping the scrim or pressing Escape closes it.
 */
const ActionSheet: React.FC<ActionSheetProps> = ({
  title,
  onClose,
  children,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`
          w-full max-w-sm rounded-t-lg border border-line bg-surface-raised
          px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl
          motion-safe:animate-sheet-in
          sm:rounded-lg sm:p-2 sm:pb-2
        `}
      >
        <div
          aria-hidden
          className="mx-auto mb-3 h-1 w-9 rounded-full bg-line-strong sm:hidden"
        />
        <p className="truncate px-1 pb-2 text-sm font-semibold sm:px-2.5 sm:pt-1.5">
          {title}
        </p>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default ActionSheet;

/** A row in the sheet. Full width, thumb-height. */
export const SheetAction: React.FC<{
  onClick: () => void;
  isDanger?: boolean;
  children: React.ReactNode;
}> = ({ onClick, isDanger = false, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      flex h-11 w-full items-center gap-2.5 rounded-sm px-1 text-left text-sm
      transition-colors hover:bg-well active:bg-well sm:px-2.5
      ${isDanger ? "text-danger" : "text-ink"}
    `}
  >
    {children}
  </button>
);
