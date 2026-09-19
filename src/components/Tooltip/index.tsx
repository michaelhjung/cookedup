import React, { ReactNode, useEffect, useState } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  isVisible?: boolean;
  delay?: number; // in milliseconds
  // Where the tooltip box renders relative to its trigger. Defaults to
  // "top" (the original behavior). Use "bottom" for triggers that sit
  // near the top edge of a clipping ancestor, where an above-positioned
  // tooltip would get cut off.
  position?: "top" | "bottom";
  // How the box lines up horizontally with its trigger. "center" (the
  // default) centers it; "start"/"end" hang it off the trigger's left or
  // right edge, for triggers that sit against that edge of a scrolling
  // ancestor — there a centered box spills past the edge, and since any
  // ancestor with overflow-y:auto clips on x too, it gets cut off and
  // grows the ancestor a horizontal scrollbar. The arrow stays on the
  // trigger.
  align?: "start" | "center" | "end";
}

// The arrow is its own element anchored to the trigger rather than a
// pseudo-element on the box, so it keeps pointing at the trigger no matter
// where the box is aligned.
const ARROW_SIZE = 5;

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  isVisible: controlledIsVisible,
  delay = 0,
  position = "top",
  align = "center",
}) => {
  const [delayedVisible, setDelayedVisible] = useState(false);
  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const isControlled = controlledIsVisible !== undefined;

  useEffect(() => {
    if (isControlled) {
      if (controlledIsVisible) {
        const timeout = setTimeout(() => setDelayedVisible(true), delay);
        return () => clearTimeout(timeout);
      }

      setDelayedVisible(false);
    }

    return undefined;
  }, [controlledIsVisible, delay, isControlled]);

  const visible = isControlled ? delayedVisible : uncontrolledVisible;
  const below = position === "bottom";

  return (
    <div
      onMouseEnter={() => !isControlled && setUncontrolledVisible(true)}
      onMouseLeave={() => !isControlled && setUncontrolledVisible(false)}
      className="relative overflow-visible flex items-center justify-center"
    >
      {children}
      {visible && (
        <>
          <span
            aria-hidden="true"
            className={`absolute left-1/2 z-30 -translate-x-1/2 border-solid border-transparent ${
              below ? "top-full border-b-ink" : "bottom-full border-t-ink"
            }`}
            // Only the half facing the box is painted; pull the element
            // back by that half so the painted triangle sits between
            // trigger and box instead of hidden under the box.
            style={{
              borderWidth: ARROW_SIZE,
              ...(below ?
                { marginTop: -ARROW_SIZE }
              : { marginBottom: -ARROW_SIZE }),
            }}
          />
          <div
            className={`
              min-w-36 max-w-56
              absolute z-30
              ${below ? "top-full" : "bottom-full"}
              ${align === "end" ? "right-0" : ""}
              ${align === "start" ? "left-0" : ""}
              rounded-md
              bg-ink
              px-2 py-1
              text-center text-xs text-surface text-pretty
            `}
            // Clear the arrow so the box sits on its tip rather than over it.
            style={
              below ? { marginTop: ARROW_SIZE } : { marginBottom: ARROW_SIZE }
            }
          >
            {text}
          </div>
        </>
      )}
    </div>
  );
};

export default Tooltip;
