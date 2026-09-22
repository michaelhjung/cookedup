"use client";

import React, { useEffect, useState } from "react";

import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { DISPLAY_NAME_MAX } from "@lib/profiles/displayName";

/**
 * The "Display name" field in the account modal: what the household,
 * sharing lists and recipe bylines call this person. One input and a
 * Save button that only lights up once the name actually differs.
 */
const DisplayNameEditor: React.FC = () => {
  const { displayName, saveDisplayName } = useAuth();
  const { showToast } = useToast();
  const [draft, setDraft] = useState(displayName);
  const [isSaving, setIsSaving] = useState(false);

  // The profile loads a beat after the session; follow it in.
  useEffect(() => setDraft(displayName), [displayName]);

  const trimmed = draft.trim();
  const isDirty = trimmed.length > 0 && trimmed !== displayName;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isDirty || isSaving) return;
    setIsSaving(true);
    try {
      await saveDisplayName(trimmed);
      showToast("Name saved.", { tone: "info" });
    } catch (caught) {
      console.error("Failed to save display name:", caught);
      showToast("Couldn't change your name.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1.5"
    >
      <label
        htmlFor="display-name"
        className="text-xs font-medium text-ink-muted"
      >
        Display name
      </label>
      <div className="flex gap-2">
        <input
          id="display-name"
          value={draft}
          maxLength={DISPLAY_NAME_MAX}
          disabled={isSaving}
          autoComplete="nickname"
          onChange={(event) => setDraft(event.target.value)}
          className="h-10 min-w-0 flex-1 rounded-md border border-line bg-surface px-3 text-sm outline-none transition-colors focus:border-ink disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!isDirty || isSaving}
          className="h-10 shrink-0 rounded-md bg-accent px-3.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>
      <p className="text-[11px] text-ink-muted">
        Shown to your household, on things you share, and on recipes you
        publish.
      </p>
    </form>
  );
};

export default DisplayNameEditor;
