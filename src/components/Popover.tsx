"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface PopoverProps {
  /** The element the popover is positioned against. */
  anchor: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
}

const MARGIN = 8;
const GAP = 6;

/**
 * A popover rendered into document.body rather than next to its trigger.
 *
 * Both places this is used sit inside a clipping ancestor — the week
 * grid needs `overflow-hidden` for its rounded corners, and the recipe
 * results list scrolls — so an absolutely positioned panel gets cut off
 * for any trigger near an edge (the bottom row of the calendar, the last
 * visible recipe card). Portalling escapes the clip; the trade is that
 * position has to be computed and kept in sync by hand.
 */
const Popover: React.FC<PopoverProps> = ({
  anchor,
  onClose,
  children,
  width = 224,
}) => {
  const [panel, setPanel] = useState<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const reposition = useCallback(() => {
    if (!anchor || !panel) return;

    const trigger = anchor.getBoundingClientRect();
    const height = panel.offsetHeight;

    const spaceBelow = window.innerHeight - trigger.bottom;
    // Flip above only when below genuinely doesn't fit and above fits
    // better — otherwise a popover near the middle would jump around.
    const placeAbove =
      spaceBelow < height + GAP + MARGIN && trigger.top > spaceBelow;

    const top =
      placeAbove ?
        Math.max(MARGIN, trigger.top - height - GAP)
      : Math.min(
          trigger.bottom + GAP,
          Math.max(MARGIN, window.innerHeight - height - MARGIN),
        );

    const left = Math.min(
      Math.max(MARGIN, trigger.left),
      Math.max(MARGIN, window.innerWidth - width - MARGIN),
    );

    setPosition({ top, left });
  }, [anchor, panel, width]);

  useLayoutEffect(() => {
    reposition();
  }, [reposition]);

  useEffect(() => {
    if (!anchor) return;

    // `true` for the capture phase: the grid and the recipe list scroll
    // in their own containers, and those events don't bubble to window.
    const handleScroll = () => reposition();
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panel?.contains(target) || anchor.contains(target)) return;
      onClose();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [anchor, panel, onClose, reposition]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={setPanel}
      style={{
        top: position?.top ?? 0,
        left: position?.left ?? 0,
        width,
        // Hidden until measured, so it never flashes at the origin.
        visibility: position ? "visible" : "hidden",
      }}
      className={`
        fixed z-50
        max-h-[80vh] overflow-y-auto
        rounded-md border border-zinc-500/20
        bg-[var(--background-color)]
        p-3
        shadow-xl
      `}
      // The recipe card wraps everything in a link; keep clicks inside
      // the popover from navigating.
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      {children}
    </div>,
    document.body,
  );
};

export default Popover;
