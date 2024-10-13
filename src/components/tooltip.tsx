import React, { ReactNode, useState } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative flex items-center justify-center"
    >
      {children}
      {isVisible && (
        <div className="tooltip-container absolute bottom-full rounded bg-slate-600 px-2 py-1 text-center text-xs text-white">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
