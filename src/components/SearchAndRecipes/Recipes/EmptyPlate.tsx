import React from "react";

interface EmptyPlateProps {
  className?: string;
}

/**
 * The "nothing matched" illustration: an empty plate between a fork and
 * a spoon, drawn with the same 1.5px strokes as the icon set so it reads
 * as part of the interface rather than a picture dropped into it. Colors
 * come from the theme — the plate's rim in the muted ink, the inner ring
 * in the hairline color — so it works in both themes without a second
 * asset.
 */
const EmptyPlate = ({ className = "" }: EmptyPlateProps) => (
  <svg
    viewBox="0 0 160 120"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    {/* Fork */}
    <g
      stroke="var(--text-muted)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Four short tines on a wide head that narrows to the handle —
          short tines keep it a fork rather than a pitchfork. */}
      <path d="M21 26v13c0 5 3 9 7 9s7-4 7-9V26" />
      <path d="M25.7 26v13M30.3 26v13" />
      <path d="M28 48v46" />
    </g>

    {/* Plate */}
    <circle
      cx="80"
      cy="60"
      r="42"
      stroke="var(--text-muted)"
      strokeWidth="1.5"
    />
    <circle
      cx="80"
      cy="60"
      r="29"
      stroke="var(--line-strong)"
      strokeWidth="1.5"
      strokeDasharray="3 4"
      strokeLinecap="round"
    />

    {/* Spoon */}
    <g
      stroke="var(--text-muted)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse
        cx="132"
        cy="39"
        rx="8.5"
        ry="13"
      />
      <path d="M132 52v42" />
    </g>
  </svg>
);

export default EmptyPlate;
