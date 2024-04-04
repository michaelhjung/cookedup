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
      className="flex justify-center items-center relative"
    >
      {children}
      {isVisible && (
        <div className="tooltip-container absolute bottom-full px-2 py-1 text-xs text-white bg-slate-600 rounded">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
