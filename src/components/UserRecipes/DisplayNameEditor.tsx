"use client";

import { Check, X } from "lucide-react";
import React, { useState } from "react";

import { DISPLAY_NAME_MAX } from "@lib/userRecipes/client";

interface DisplayNameEditorProps {
  displayName: string;
  onSave: (_displayName: string) => Promise<void>;
}

/**
 * "Publishing as michael · change": the byline on the user's recipes,
 * edited in place. One field, saved on Enter or the tick; Escape or the
 * cross puts the old name back.
 */
const DisplayNameEditor: React.FC<DisplayNameEditorProps> = ({
  displayName,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(displayName);
  const [isSaving, setIsSaving] = useState(false);

  const startEditing = () => {
    setDraft(displayName);
    setIsEditing(true);
  };

  const cancel = () => {
    setIsEditing(false);
    setDraft(displayName);
  };

  const save = async () => {
    const next = draft.trim();
    if (!next || next === displayName) {
      cancel();
      return;
    }
    setIsSaving(true);
    try {
      await onSave(next);
      setIsEditing(false);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isEditing)
    return (
      <p className="text-xs text-ink-muted">
        Publishing as{" "}
        <span className="font-medium text-ink">{displayName}</span>
        <span aria-hidden> · </span>
        <button
          type="button"
          onClick={startEditing}
          className="font-medium text-accent hover:underline"
        >
          change
        </button>
      </p>
    );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
      className="flex items-center gap-1.5"
    >
      <label
        className="sr-only"
        htmlFor="display-name"
      >
        Name shown on your recipes
      </label>
      <input
        id="display-name"
        autoFocus
        value={draft}
        maxLength={DISPLAY_NAME_MAX}
        disabled={isSaving}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") cancel();
        }}
        className="h-8 w-44 rounded-md border border-line bg-surface-raised px-2 text-sm outline-none transition-colors focus:border-ink disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={isSaving}
        aria-label="Save name"
        className="flex size-8 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:opacity-50"
      >
        <Check className="size-4" />
      </button>
      <button
        type="button"
        onClick={cancel}
        disabled={isSaving}
        aria-label="Cancel"
        className="flex size-8 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:opacity-50"
      >
        <X className="size-4" />
      </button>
    </form>
  );
};

export default DisplayNameEditor;
