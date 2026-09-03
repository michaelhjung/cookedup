"use client";

import { CalendarDays, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: "Find Recipes", Icon: Search },
  { href: "/plan", label: "Meal Plan", Icon: CalendarDays },
] as const;

/**
 * The app was a single page until the planner arrived, so this is its
 * first navigation of any kind. Kept to a small pill row rather than a
 * full nav bar: with two destinations, anything heavier would take up
 * more of the screen than it earns.
 */
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-2 flex items-center gap-1 rounded-full bg-[var(--pastel-brown)]/12 p-1">
      {LINKS.map(({ href, label, Icon }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={`
              flex items-center gap-1.5
              rounded-full px-3 py-1.5
              text-xs sm:text-sm
              transition-colors
              ${
                isActive ?
                  "bg-[var(--background-color)] font-semibold shadow-sm"
                : "text-gray-500 hover:text-current"
              }
            `}
          >
            <Icon className="size-3.5 sm:size-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
