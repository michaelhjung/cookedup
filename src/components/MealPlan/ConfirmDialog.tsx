"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ConfirmDialogProps {
  title: string;
  body: React.ReactNode;
  confirmLabel: string;
  isBusy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

/** A small yes/no prompt for an action that's additive but tedious to undo. */
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  body,
  confirmLabel,
  isBusy = false,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isBusy) onCancel();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onCancel, isBusy]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-scrim p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isBusy) onCancel();
      }}
    >
      <div className="w-full max-w-xs rounded-lg border border-line bg-surface-raised p-4 shadow-2xl">
        <h2
          id="confirm-dialog-title"
          className="text-sm font-semibold"
        >
          {title}
        </h2>
        <div className="mt-1 text-xs leading-snug text-ink-muted">{body}</div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            autoFocus
            disabled={isBusy}
            onClick={onConfirm}
            className="h-9 flex-1 rounded-md bg-accent px-3 text-xs font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-50"
          >
            {isBusy ? "Copying..." : confirmLabel}
          </button>
          <button
            type="button"
            disabled={isBusy}
            onClick={onCancel}
            className="h-9 rounded-md border border-line px-3 text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmDialog;
