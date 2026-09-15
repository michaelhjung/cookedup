"use client";

import { useTheme } from "next-themes";
import type { ButtonHTMLAttributes, ReactNode } from "react";

// The one button style every sign-in option in the modal shares, so the
// Google and email options read as a matched pair and can't drift apart.
//
// Colors follow Google's branding guidelines for self-rendered sign-in
// buttons (light: white on #747775; dark: #131314 on #8E918F), which put
// the logo straight on the surface — their script-drawn button forces a
// white tile behind it in dark mode, which is why the button is ours.
const THEME_CLASSES = {
  light: "bg-white border-[#747775] text-[#1f1f1f] hover:bg-[#1f1f1f]/8",
  dark: "bg-[#131314] border-[#8e918f] text-[#e3e3e3] hover:bg-[#e3e3e3]/8",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Drawn at 24px in the slot before the label. */
  icon: ReactNode;
  children: ReactNode;
}

const AuthOptionButton = ({ icon, children, ...rest }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      {...rest}
      className={`
        flex h-11 w-full items-center justify-center gap-3
        rounded-md border px-3
        text-sm font-medium
        transition
        disabled:cursor-not-allowed disabled:opacity-50
        ${THEME_CLASSES[resolvedTheme === "dark" ? "dark" : "light"]}
      `}
    >
      <span className="flex size-6 items-center justify-center">{icon}</span>
      {children}
    </button>
  );
};

export default AuthOptionButton;
