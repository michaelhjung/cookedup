import React, { useLayoutEffect, useRef, useState } from "react";

import { TagMultiSelectOption } from "./types";

// Preferred dropdown heights, mirroring the `h-40`/`sm:h-80` Tailwind
// scale this dropdown used to render at unconditionally. These are now
// upper bounds rather than fixed heights: the effect below shrinks the
// dropdown to whatever room is actually available (e.g. inside the
// sidebar's `lg:overflow-hidden` container), so it stays fully reachable
// via its own internal scroll instead of being silently clipped by an
// ancestor.
const PREFERRED_MAX_HEIGHT_PX = 160; // matches h-40
const PREFERRED_MAX_HEIGHT_SM_PX = 320; // matches sm:h-80 at the `sm` breakpoint (640px)
const SM_BREAKPOINT_PX = 640;
const MIN_USABLE_HEIGHT_PX = 96;
const BOTTOM_MARGIN_PX = 8;

// Walk up from the dropdown to find the nearest ancestor that actually
// clips overflow (the sidebar container uses `lg:overflow-hidden`).
// Falls back to the viewport when no clipping ancestor is found.
const getClippingBoundaryBottom = (el: HTMLElement): number => {
  let node = el.parentElement;
  while (node) {
    const { overflowY, overflow } = window.getComputedStyle(node);
    if (/(hidden|auto|scroll|clip)/.test(overflowY || overflow)) {
      return node.getBoundingClientRect().bottom;
    }
    node = node.parentElement;
  }
  return window.innerHeight;
};

interface OptionsDropdownProps {
  options: TagMultiSelectOption[];
  selectedKeys: string[];
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  optionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onSelect: (_key: string) => void;
  onClose: () => void;
}

const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  options,
  selectedKeys,
  setFocusedIndex,
  optionRefs,
  onSelect,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const recalculate = () => {
      const el = containerRef.current;
      if (!el) return;

      const preferredMaxHeight =
        window.innerWidth >= SM_BREAKPOINT_PX ?
          PREFERRED_MAX_HEIGHT_SM_PX
        : PREFERRED_MAX_HEIGHT_PX;

      const { top } = el.getBoundingClientRect();
      const availableHeight =
        getClippingBoundaryBottom(el) - top - BOTTOM_MARGIN_PX;

      setMaxHeight(
        Math.max(
          MIN_USABLE_HEIGHT_PX,
          Math.min(preferredMaxHeight, availableHeight),
        ),
      );
    };

    recalculate();
    window.addEventListener("resize", recalculate);
    window.addEventListener("scroll", recalculate, true);
    return () => {
      window.removeEventListener("resize", recalculate);
      window.removeEventListener("scroll", recalculate, true);
    };
    // The dropdown is anchored below the chip list (see TagMultiSelect's
    // wrapper), and selecting/removing a chip doesn't close/reopen the
    // dropdown (fix #5 keeps it open across selections) — so this needs
    // to re-measure whenever `selectedKeys` changes, not just on mount,
    // or a stale max-height would linger as the anchor's position moves
    // with the growing/shrinking chip list.
  }, [selectedKeys.length]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        e.preventDefault();
        const option = options[index];
        if (option) onSelect(option.key);
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex = index + 1 === options.length ? 0 : index + 1;
        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const nextIndex = index === 0 ? options.length - 1 : index - 1;
        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "Escape":
        onClose();
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ maxHeight }}
      className={`
        absolute top-full z-10
        w-80
        lg:w-64 xl:w-72 2xl:w-96
        mt-1
        text-xs sm:text-sm
        overflow-auto
        bg-[var(--pastel-brown)]/25 p-4
        backdrop-blur-lg
      `}
    >
      {options.length === 0 && <div>No matching filters found.</div>}

      {options.map((option, index) => {
        const isSelected = selectedKeys.includes(option.key);
        return (
          <div
            key={option.key}
            ref={(el) => {
              optionRefs.current[index] = el;
            }}
            role="button"
            className={`rounded-lg p-1 outline-none ${
              isSelected ?
                "cursor-default italic text-gray-400"
              : "cursor-pointer hover:bg-pastel-brown/35 focus:border-2 focus:border-pastel-brown focus:bg-pastel-brown/35"
            }`}
            onClick={() => onSelect(option.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default OptionsDropdown;
