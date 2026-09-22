"use client";

import React from "react";

export const INPUT_CLASS =
  "h-11 w-full rounded-md border border-line bg-transparent px-3 text-[15px] outline-none transition-colors focus:border-ink disabled:opacity-60 sm:h-10 sm:text-sm";

export const TEXTAREA_CLASS =
  "w-full resize-y rounded-md border border-line bg-transparent px-3 py-2 text-[15px] leading-snug outline-none transition-colors focus:border-ink disabled:opacity-60 sm:text-sm";

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  /** For groups of controls that don't take a `for`. */
  asGroup?: boolean;
  children: React.ReactNode;
}

/** Label above, control, then the hint or the error underneath. */
const Field: React.FC<FieldProps> = ({
  id,
  label,
  hint,
  error,
  asGroup = false,
  children,
}) => {
  const Label = asGroup ? "p" : "label";
  return (
    <div>
      <Label
        {...(!asGroup && { htmlFor: id })}
        className="mb-1 block text-xs font-semibold"
      >
        {label}
      </Label>
      {children}
      {error ?
        <p
          id={`${id}-error`}
          className="mt-1 text-xs text-danger"
        >
          {error}
        </p>
      : hint ?
        <p className="mt-1 text-[11px] leading-snug text-ink-muted">{hint}</p>
      : null}
    </div>
  );
};

export default Field;
