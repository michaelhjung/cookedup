"use client";

import { CalendarDays, Package, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: "Find recipes", shortLabel: "Recipes", Icon: Search },
  { href: "/plan", label: "Meal plan", shortLabel: "Plan", Icon: CalendarDays },
  { href: "/pantry", label: "Pantry", shortLabel: "Pantry", Icon: Package },
  {
    href: "/grocery",
    label: "Grocery",
    shortLabel: "Grocery",
    Icon: ShoppingCart,
  },
] as const;

interface NavProps {
  className?: string;
}

/**
 * Four destinations, marked by an underline on the current one. The
 * links are as tall as the header so the underline lands on the bar's
 * own hairline rather than floating above it. On phones the nav has a
 * row to itself, so each link takes a quarter of it with the icon
 * stacked over a short label: four thumb-sized targets that fit 360px.
 */
const Nav = ({ className = "" }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={`pointer-events-none flex items-center ${className}`}>
      <div className="pointer-events-auto flex w-full items-stretch sm:w-auto sm:items-center sm:gap-6">
        {LINKS.map(({ href, label, shortLabel, Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`
                flex h-14 flex-1 flex-col items-center justify-center gap-0.5
                sm:h-14 sm:flex-none sm:flex-row sm:gap-1.5
                -mb-px border-b-[1.5px]
                text-[11.5px] font-medium sm:text-sm
                transition-colors
                ${
                  isActive ?
                    "border-accent text-ink"
                  : "border-transparent text-ink-muted hover:text-ink"
                }
              `}
            >
              <Icon
                className="size-[18px] sm:size-4"
                strokeWidth={2}
              />
              <span className="sm:hidden">{shortLabel}</span>
              <span className="hidden sm:inline">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
