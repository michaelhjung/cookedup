"use client";

import { ArrowDown, ArrowUp, Heading, Plus, X } from "lucide-react";
import React, { useEffect, useRef } from "react";

import FoodLink from "@components/RecipeEditor/FoodLink";
import {
  IngredientRow,
  createHeadingRow,
  createLineRow,
  splitPastedLines,
  suggestFoodForLine,
} from "@lib/userRecipes/draft";

interface IngredientRowsProps {
  rows: IngredientRow[];
  onChange: (_rows: IngredientRow[]) => void;
}

const ROW_BUTTON_CLASS =
  "flex size-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent";

const move = <T,>(list: T[], from: number, to: number): T[] => {
  if (to < 0 || to >= list.length) return list;
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

/**
 * One text input per ingredient line, plus heading rows to group them
 * ("For the sauce"). Enter adds the next line, a multi-line paste
 * becomes that many rows, and Backspace on an empty row removes it.
 * Under each line a chip says which pantry ingredient it counts as,
 * guessed as the author types until they pick one themselves.
 */
const IngredientRows: React.FC<IngredientRowsProps> = ({ rows, onChange }) => {
  const inputRefs = useRef(new Map<string, HTMLInputElement>());
  const focusIdRef = useRef<string | null>(null);

  // Focus lands after the row it's for has rendered.
  useEffect(() => {
    if (!focusIdRef.current) return;
    inputRefs.current.get(focusIdRef.current)?.focus();
    focusIdRef.current = null;
  });

  const updateRow = (index: number, patch: Partial<IngredientRow>) =>
    onChange(
      rows.map((row, at) =>
        at === index ? ({ ...row, ...patch } as IngredientRow) : row,
      ),
    );

  const setLineText = (index: number, text: string) => {
    const row = rows[index];
    if (row.kind !== "line") {
      updateRow(index, { text });
      return;
    }
    const food =
      row.isFoodPinned ? row.food : (suggestFoodForLine(text)?.name ?? null);
    updateRow(index, { text, food });
  };

  const insertAfter = (index: number, newRows: IngredientRow[]) => {
    const next = [...rows];
    next.splice(index + 1, 0, ...newRows);
    onChange(next);
    focusIdRef.current = newRows[newRows.length - 1]?.id ?? null;
  };

  const removeAt = (index: number) => {
    if (rows.length === 1) {
      onChange([createLineRow()]);
      return;
    }
    const next = rows.filter((_, at) => at !== index);
    onChange(next);
    focusIdRef.current = next[Math.max(0, index - 1)]?.id ?? null;
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    const lines = splitPastedLines(event.clipboardData.getData("text"));
    if (lines.length < 2) return; // a normal paste

    event.preventDefault();
    const [first, ...rest] = lines;
    const current = rows[index];
    const text = `${current.text.slice(0, event.currentTarget.selectionStart ?? current.text.length)}${first}`;
    const updated: IngredientRow =
      current.kind === "line" ?
        {
          ...current,
          text,
          food:
            current.isFoodPinned ?
              current.food
            : (suggestFoodForLine(text)?.name ?? null),
        }
      : { ...current, text };
    const added = rest.map((line) =>
      createLineRow(line, suggestFoodForLine(line)?.name ?? null),
    );
    const next = [...rows];
    next.splice(index, 1, updated, ...added);
    onChange(next);
    focusIdRef.current = added[added.length - 1]?.id ?? null;
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      insertAfter(index, [createLineRow()]);
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
    <div className="flex flex-col gap-1.5">
      {rows.map((row, index) => (
        <div
          key={row.id}
          className={row.kind === "heading" && index > 0 ? "mt-2" : ""}
        >
          <div className="flex items-start gap-1">
            <div className="min-w-0 flex-1">
              <input
                ref={(element) => {
                  if (element) inputRefs.current.set(row.id, element);
                  else inputRefs.current.delete(row.id);
                }}
                value={row.text}
                onChange={(event) => setLineText(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={(event) => handlePaste(index, event)}
                placeholder={
                  row.kind === "heading" ?
                    "Heading, e.g. For the sauce"
                  : "2 cups flour"
                }
                aria-label={
                  row.kind === "heading" ?
                    `Heading ${index + 1}`
                  : `Ingredient ${index + 1}`
                }
                autoComplete="off"
                className={`
                  h-11 w-full rounded-md border border-line bg-transparent px-3 text-[15px]
                  outline-none transition-colors focus:border-ink sm:h-10 sm:text-sm
                  ${row.kind === "heading" ? "font-semibold" : ""}
                `}
              />
              {row.kind === "line" && row.text.trim() !== "" && (
                <div className="mt-0.5 pl-1">
                  <FoodLink
                    lineText={row.text}
                    food={row.food}
                    onChange={(food) =>
                      updateRow(index, { food, isFoodPinned: true })
                    }
                  />
                </div>
              )}
            </div>
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
        </div>
      ))}

      <div className="mt-1 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => insertAfter(rows.length - 1, [createLineRow()])}
          className="flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-xs font-medium text-ink transition-colors hover:border-line-strong"
        >
          <Plus className="size-3.5" />
          Add ingredient
        </button>
        <button
          type="button"
          onClick={() => insertAfter(rows.length - 1, [createHeadingRow()])}
          className="flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-xs font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
        >
          <Heading className="size-3.5" />
          Add heading
        </button>
      </div>
    </div>
  );
};

export default IngredientRows;
