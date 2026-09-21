"use client";

import { ChevronDown, Plus } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { guessCategory, suggestItems } from "@lib/ingredients";
import { normalizeItemName, tidyItemName } from "@lib/pantry/items";
import { CATEGORIES, Category } from "@lib/pantry/types";

interface AddItemBarProps {
  /** Keys of what's already there, to keep out of suggestions. */
  existingKeys: Set<string>;
  /** Where the bar sits: pinned to the bottom on phones, or inline at the top. */
  placement: "bottom" | "top";
  placeholder?: string;
  onAdd: (_name: string, _category: Category) => void;
  /** Called instead of onAdd when the typed name is already present. */
  onDuplicate: (_nameKey: string) => void;
}

/**
 * The one input for adding things. Suggestions come from the same
 * ingredient list the recipe search uses (so what's added here can be
 * searched for later); anything else is accepted as typed. Enter adds
 * and keeps focus so a run of items can go in one after another.
 */
const AddItemBar: React.FC<AddItemBarProps> = ({
  existingKeys,
  placement,
  placeholder = "Add an item",
  onAdd,
  onDuplicate,
}) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState<"auto" | Category>("auto");
  const [highlighted, setHighlighted] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(
    () => suggestItems(text, existingKeys),
    [text, existingKeys],
  );

  useEffect(() => {
    setHighlighted(-1);
  }, [text]);

  const guessed = text.trim() ? guessCategory(text) : null;
  const resolvedCategory: Category =
    category === "auto" ? (guessed ?? "Other") : category;

  const submit = (rawName: string) => {
    const name = tidyItemName(rawName);
    if (!name) return;

    const key = normalizeItemName(name);
    if (existingKeys.has(key)) onDuplicate(key);
    else onAdd(name, category === "auto" ? guessCategory(name) : category);

    setText("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && suggestions.length > 0) {
      event.preventDefault();
      setHighlighted((index) => (index + 1) % suggestions.length);
    } else if (event.key === "ArrowUp" && suggestions.length > 0) {
      event.preventDefault();
      setHighlighted(
        (index) => (index - 1 + suggestions.length) % suggestions.length,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      submit(highlighted >= 0 ? suggestions[highlighted].name : text);
    } else if (event.key === "Escape") {
      setText("");
    }
  };

  const isListOpen = isFocused && suggestions.length > 0;
  const listId = "pantry-suggestions";

  return (
    <div className="relative">
      <div
        className={`
          flex h-12 items-center gap-1 rounded-md border bg-surface-raised
          pr-1 pl-3 transition-colors
          ${isFocused ? "border-ink" : "border-line-strong"}
        `}
      >
        <Plus
          aria-hidden
          className="size-4 shrink-0 text-ink-muted"
        />
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          // Delayed so a tap on a suggestion lands before the list goes.
          onBlur={() => setTimeout(() => setIsFocused(false), 120)}
          placeholder={placeholder}
          aria-label={placeholder}
          role="combobox"
          aria-expanded={isListOpen}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            highlighted >= 0 ? `${listId}-${highlighted}` : undefined
          }
          autoComplete="off"
          autoCapitalize="sentences"
          enterKeyHint="done"
          className="h-full min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink-muted"
        />

        {/* A native select styled as a chip: the phone's own picker is
            the right control for ten options with one thumb. */}
        <label className="relative flex h-9 shrink-0 items-center rounded-md bg-well pr-6 pl-2.5 text-xs font-medium text-ink">
          <span className="sr-only">Category</span>
          {category === "auto" ?
            guessed && guessed !== "Other" ?
              `Auto · ${guessed}`
            : "Auto"
          : category}
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-1.5 size-3.5 text-ink-muted"
          />
          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as "auto" | Category)
            }
            className="absolute inset-0 cursor-pointer opacity-0"
          >
            <option value="auto">Auto</option>
            {CATEGORIES.map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      {isListOpen && (
        <ul
          id={listId}
          role="listbox"
          className={`
            absolute inset-x-0 z-20 overflow-hidden rounded-lg border border-line
            bg-surface-raised shadow-xl
            ${placement === "bottom" ? "bottom-full mb-2" : "top-full mt-1.5"}
          `}
        >
          {suggestions.map((suggestion, index) => {
            const isHighlighted = index === highlighted;
            const matchAt = suggestion.name
              .toLowerCase()
              .indexOf(text.toLowerCase().trim());
            const before = suggestion.name.slice(0, matchAt);
            const match = suggestion.name.slice(
              matchAt,
              matchAt + text.trim().length,
            );
            const after = suggestion.name.slice(matchAt + text.trim().length);

            return (
              <li
                key={suggestion.name}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={isHighlighted}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => submit(suggestion.name)}
                onMouseEnter={() => setHighlighted(index)}
                className={`
                  flex h-11 cursor-pointer items-center justify-between gap-3
                  border-t border-line px-3.5 text-[14.5px] first:border-t-0
                  ${isHighlighted ? "bg-well" : ""}
                `}
              >
                <span className="truncate">
                  {matchAt >= 0 ?
                    <>
                      {before}
                      <span className="font-semibold">{match}</span>
                      {after}
                    </>
                  : suggestion.name}
                </span>
                <span className="shrink-0 text-xs text-ink-muted">
                  {category === "auto" ? suggestion.category : resolvedCategory}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AddItemBar;
