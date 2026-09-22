"use client";

import { ArrowDown, ArrowUp, Plus, X } from "lucide-react";
import React, { useEffect, useRef } from "react";

import {
  StepRow,
  createStepRow,
  splitPastedLines,
} from "@lib/userRecipes/draft";

interface StepRowsProps {
  rows: StepRow[];
  onChange: (_rows: StepRow[]) => void;
}

const ROW_BUTTON_CLASS =
  "flex size-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent";

const move = (list: StepRow[], from: number, to: number): StepRow[] => {
  if (to < 0 || to >= list.length) return list;
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

/**
 * Numbered steps, a textarea each. Enter (without Shift) starts the
 * next step, a paste of several lines becomes that many steps, and the
 * numbers are the row order, so there's nothing to type or fix.
 */
const StepRows: React.FC<StepRowsProps> = ({ rows, onChange }) => {
  const refs = useRef(new Map<string, HTMLTextAreaElement>());
  const focusIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!focusIdRef.current) return;
    refs.current.get(focusIdRef.current)?.focus();
    focusIdRef.current = null;
  });

  // Grow with the text rather than scroll inside a two-line box.
  const autosize = (element: HTMLTextAreaElement | null) => {
    if (!element) return;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const insertAfter = (index: number, added: StepRow[]) => {
    const next = [...rows];
    next.splice(index + 1, 0, ...added);
    onChange(next);
    focusIdRef.current = added[added.length - 1]?.id ?? null;
  };

  const removeAt = (index: number) => {
    if (rows.length === 1) {
      onChange([createStepRow()]);
      return;
    }
    const next = rows.filter((_, at) => at !== index);
    onChange(next);
    focusIdRef.current = next[Math.max(0, index - 1)]?.id ?? null;
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLTextAreaElement>,
  ) => {
    const lines = splitPastedLines(event.clipboardData.getData("text"));
    if (lines.length < 2) return;

    event.preventDefault();
    const [first, ...rest] = lines;
    const current = rows[index];
    const start = event.currentTarget.selectionStart ?? current.text.length;
    const updated = {
      ...current,
      text: `${current.text.slice(0, start)}${first}`,
    };
    const added = rest.map((line) => createStepRow(line));
    const next = [...rows];
    next.splice(index, 1, updated, ...added);
    onChange(next);
    focusIdRef.current = added[added.length - 1]?.id ?? null;
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      insertAfter(index, [createStepRow()]);
    } else if (
      event.key === "Backspace" &&
      rows[index].text === "" &&
      rows.length > 1
    ) {
      event.preventDefault();
      removeAt(index);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <div
          key={row.id}
          className="flex items-start gap-2"
        >
          <span className="flex h-11 w-6 shrink-0 items-center justify-center text-sm font-semibold tabular-nums text-ink-muted sm:h-10">
            {index + 1}
          </span>
          <textarea
            ref={(element) => {
              if (element) {
                refs.current.set(row.id, element);
                autosize(element);
              } else refs.current.delete(row.id);
            }}
            value={row.text}
            rows={1}
            onChange={(event) => {
              autosize(event.currentTarget);
              onChange(
                rows.map((candidate, at) =>
                  at === index ?
                    { ...candidate, text: event.target.value }
                  : candidate,
                ),
              );
            }}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={(event) => handlePaste(index, event)}
            placeholder={index === 0 ? "Preheat the oven to 200°C." : ""}
            aria-label={`Step ${index + 1}`}
            className="min-h-11 w-full resize-none rounded-md border border-line bg-transparent px-3 py-2.5 text-[15px] leading-snug outline-none transition-colors focus:border-ink sm:min-h-10 sm:py-2 sm:text-sm"
          />
          <div className="flex shrink-0 items-center">
            <button
              type="button"
              onClick={() => onChange(move(rows, index, index - 1))}
              disabled={index === 0}
              aria-label="Move up"
              className={ROW_BUTTON_CLASS}
            >
              <ArrowUp className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => onChange(move(rows, index, index + 1))}
              disabled={index === rows.length - 1}
              aria-label="Move down"
              className={ROW_BUTTON_CLASS}
            >
              <ArrowDown className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => removeAt(index)}
              aria-label="Remove"
              className={ROW_BUTTON_CLASS}
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-1">
        <button
          type="button"
          onClick={() => insertAfter(rows.length - 1, [createStepRow()])}
          className="flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-xs font-medium text-ink transition-colors hover:border-line-strong"
        >
          <Plus className="size-3.5" />
          Add step
        </button>
      </div>
    </div>
  );
};

export default StepRows;
