"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { TEXTAREA_CLASS } from "@components/RecipeEditor/Field";
import { REVIEW_NOTE_MAX } from "@lib/userRecipes/reports";

interface RejectDialogProps {
  title: string;
  /** "Reject" from the queue, "Unpublish" from a report. */
  confirmLabel: string;
  isBusy: boolean;
  onConfirm: (_note: string) => void;
  onCancel: () => void;
}

/**
 * The note the author will read. Required: a rejection with no reason
 * is a guess for the author and an argument for the admin.
 */
const RejectDialog: React.FC<RejectDialogProps> = ({
  title,
  confirmLabel,
  isBusy,
  onConfirm,
  onCancel,
}) => {
  const [note, setNote] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const trimmed = note.trim();

  useEffect(() => {
    textareaRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isBusy) onCancel();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isBusy, onCancel]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-scrim p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isBusy) onCancel();
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (trimmed.length > 0 && !isBusy) onConfirm(trimmed);
        }}
        className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-line bg-surface-raised p-4 shadow-2xl"
      >
        <h2 className="text-base font-semibold tracking-[-0.01em]">{title}</h2>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold">
            Note to the author
          </span>
          <textarea
            ref={textareaRef}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            maxLength={REVIEW_NOTE_MAX}
            rows={4}
            placeholder="Which guideline it breaks, and what would fix it."
            className={TEXTAREA_CLASS}
          />
          <span className="mt-1 block text-[11px] text-ink-muted">
            The recipe goes private with this note; the author can fix it and
            resubmit.
          </span>
        </label>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={isBusy}
            className="h-9 rounded-md border border-line px-3 text-sm font-medium text-ink transition-colors hover:border-line-strong disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={trimmed.length === 0 || isBusy}
            className="h-9 rounded-md bg-danger px-3 text-sm font-semibold text-on-accent transition-colors hover:opacity-90 disabled:opacity-50"
          >
            {isBusy ? "Saving…" : confirmLabel}
          </button>
        </div>
      </form>
    </div>,
    document.body,
  );
};

export default RejectDialog;
