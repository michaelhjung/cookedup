"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import AuthButton from "@components/AuthButton";
import Nav from "@components/Nav";
import ThemeToggle from "@components/ThemeToggle";
import chefBulb from "@public/logo.png";

// One compact bar on every page: brand left, nav centered, theme and
// account on the right. Below `sm` the nav wraps onto its own row under
// the bar (`order-last w-full`) so the brand and controls keep the top
// row to themselves.
const Header = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="relative flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line pb-3">
      <Link
        href="/"
        className="group flex items-center gap-2"
        aria-label="cookedup home"
      >
        <Image
          src={chefBulb}
          alt=""
          priority
          className={`
            w-8 sm:w-9
            transition-[transform,filter] duration-300
            group-hover:-rotate-6
            ${isDark ? "brightness-125 drop-shadow-[0_0_14px_rgba(255,240,170,0.6)]" : ""}
          `}
        />
        <span className="text-xl font-bold tracking-tight sm:text-2xl">
          <span className="text-pastel-green">cooked</span>
          <span className="text-pastel-brown">up</span>
        </span>
      </Link>

      {/* Absolutely centered at sm+ so it sits on the page's midline
          regardless of how wide the brand and controls are. */}
      <Nav className="order-last w-full justify-center sm:absolute sm:left-1/2 sm:top-0 sm:order-none sm:w-auto sm:-translate-x-1/2" />

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
