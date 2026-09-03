"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { MealPlanEntry, SlotId } from "@lib/mealPlan/types";

export interface DropTarget {
  date: string;
  slot: SlotId;
}

interface DragContextValue {
  /** Entry currently being dragged, so its chip can render as a ghost. */
  draggingEntryId: string | null;
  /** Slot the pointer is currently over, for the drop highlight. */
  target: DropTarget | null;
  /**
   * Begins a potential drag. Nothing visible happens until the gesture
   * proves itself a drag rather than a tap or a scroll; `onEngage` fires
   * at that moment so the chip can suppress the click that follows.
   */
  start: (
    // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
    _entry: MealPlanEntry,
    _event: React.PointerEvent,
    _onEngage: () => void,
  ) => void;
}

// Read-only views (a shared plan) render chips and cells without a
// provider, so the default has to be inert rather than throwing.
const INERT: DragContextValue = {
  draggingEntryId: null,
  target: null,
  start: () => {},
};

const DragContext = createContext<DragContextValue>(INERT);

export const useEntryDrag = () => useContext(DragContext);

/** Pixels a mouse must travel before a press becomes a drag. */
const MOUSE_THRESHOLD = 5;
/** How long a finger must rest before a press becomes a drag. */
const LONG_PRESS_MS = 300;
/** Movement before that timer fires means the user is scrolling. */
const TOUCH_SCROLL_TOLERANCE = 12;

const targetAt = (x: number, y: number): DropTarget | null => {
  const cell = document
    .elementFromPoint(x, y)
    ?.closest<HTMLElement>("[data-drop-slot]");

  if (!cell) return null;

  const { dropDate: date, dropSlot: slot } = cell.dataset;

  if (!date || !slot) return null;
  return { date, slot };
};

interface EntryDragProviderProps {
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onDrop: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
  children: React.ReactNode;
}

/**
 * Pointer-event based drag and drop for planned meals.
 *
 * Pointer events rather than the HTML5 drag-and-drop API because that
 * API doesn't fire for touch at all, and this needs to work on the
 * mobile agenda too. Drop targets are found with `elementFromPoint`
 * against a `data-drop-slot` attribute instead of a registry of measured
 * rectangles, so cells that scroll or reflow mid-drag can't go stale.
 *
 * A press only becomes a drag once it proves itself: a mouse has to move
 * a few pixels (so a click still opens the chip's popover), and a finger
 * has to rest for a moment (so the page can still be scrolled by
 * swiping across a chip).
 */
export const EntryDragProvider: React.FC<EntryDragProviderProps> = ({
  onDrop,
  children,
}) => {
  const [entry, setEntry] = useState<MealPlanEntry | null>(null);
  const [point, setPoint] = useState<{ x: number; y: number } | null>(null);
  const [target, setTarget] = useState<DropTarget | null>(null);

  // Everything the window listeners need, kept in a ref so they read
  // live values instead of the ones captured when the gesture began.
  const session = useRef<{
    entry: MealPlanEntry;
    pointerId: number;
    startX: number;
    startY: number;
    isTouch: boolean;
    engaged: boolean;
    longPress?: ReturnType<typeof setTimeout>;
    onEngage: () => void;
    target: DropTarget | null;
  } | null>(null);

  // Held in a ref so the window listeners below register once, instead
  // of being torn down and re-added on every pointermove (the planner
  // passes a fresh callback each render).
  const onDropRef = useRef(onDrop);
  useEffect(() => {
    onDropRef.current = onDrop;
  }, [onDrop]);

  const reset = useCallback(() => {
    if (session.current?.longPress) clearTimeout(session.current.longPress);
    session.current = null;
    setEntry(null);
    setPoint(null);
    setTarget(null);
  }, []);

  const engage = useCallback((x: number, y: number) => {
    const current = session.current;
    if (!current || current.engaged) return;

    current.engaged = true;
    current.onEngage();
    setEntry(current.entry);
    setPoint({ x, y });
  }, []);

  const track = useCallback((x: number, y: number) => {
    const current = session.current;
    if (!current) return;

    const found = targetAt(x, y);
    current.target = found;
    setPoint({ x, y });
    setTarget(found);
  }, []);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const current = session.current;
      if (!current || event.pointerId !== current.pointerId) return;

      const distance = Math.hypot(
        event.clientX - current.startX,
        event.clientY - current.startY,
      );

      if (!current.engaged) {
        // Before the long press completes, movement means the finger is
        // scrolling the page — let it, and abandon the drag.
        if (current.isTouch) {
          if (distance > TOUCH_SCROLL_TOLERANCE) reset();
          return;
        }

        if (distance < MOUSE_THRESHOLD) return;
        engage(event.clientX, event.clientY);
      }

      // Non-passive, so this actually suppresses touch scrolling for the
      // rest of the gesture. It only runs once a drag is under way.
      event.preventDefault();
      track(event.clientX, event.clientY);
    };

    const handleUp = (event: PointerEvent) => {
      const current = session.current;
      if (!current || event.pointerId !== current.pointerId) return;

      const { engaged, entry: dragged, target: dropped } = current;
      reset();

      if (!engaged || !dropped) return;
      // Dropping a meal back where it started isn't a move.
      if (dropped.date === dragged.date && dropped.slot === dragged.slot)
        return;

      onDropRef.current(dragged, dropped.date, dropped.slot);
    };

    window.addEventListener("pointermove", handleMove, { passive: false });
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", reset);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", reset);
    };
  }, [engage, track, reset]);

  const start = useCallback<DragContextValue["start"]>(
    (candidate, event, onEngage) => {
      // Ignore secondary mouse buttons.
      if (event.button !== 0 && event.pointerType === "mouse") return;

      const isTouch = event.pointerType === "touch";

      session.current = {
        entry: candidate,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        isTouch,
        engaged: false,
        onEngage,
        target: null,
      };

      if (isTouch) {
        const { clientX, clientY } = event;
        session.current.longPress = setTimeout(() => {
          engage(clientX, clientY);
          track(clientX, clientY);
        }, LONG_PRESS_MS);
      }
    },
    [engage, track],
  );

  const value = useMemo(
    () => ({ draggingEntryId: entry?.id ?? null, target, start }),
    [entry, target, start],
  );

  return (
    <DragContext.Provider value={value}>
      {children}

      {entry &&
        point &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            style={{ top: point.y, left: point.x }}
            className={`
              pointer-events-none fixed z-[60]
              max-w-48 -translate-x-1/2 -translate-y-1/2
              rounded-md border border-[var(--pastel-blue)]
              bg-[var(--background-color)]
              px-2 py-1
              text-[0.65rem] leading-tight
              opacity-95 shadow-xl
            `}
          >
            <span className="line-clamp-2">{entry.recipe.recipe.label}</span>
          </div>,
          document.body,
        )}
    </DragContext.Provider>
  );
};
