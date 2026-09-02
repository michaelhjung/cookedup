import React, { ReactNode, useEffect, useState } from "react";

import styles from "./Tooltip.module.scss";

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
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  isVisible: controlledIsVisible,
  delay = 0,
  position = "top",
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

  return (
    <div
      onMouseEnter={() => !isControlled && setUncontrolledVisible(true)}
      onMouseLeave={() => !isControlled && setUncontrolledVisible(false)}
      className="relative overflow-visible flex items-center justify-center"
    >
      {children}
      {visible && (
        <div
          className={`
            min-w-24
            ${position === "bottom" ? styles.tooltipContainerBottom : styles.tooltipContainer}
            absolute
            ${position === "bottom" ? "top-full" : "bottom-full"}
            rounded-lg
            bg-slate-600
            px-2 py-1
            text-center text-xs text-white text-pretty
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
