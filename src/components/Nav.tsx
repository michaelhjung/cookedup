"use client";

import {
  BookOpenText,
  CalendarDays,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useAuth } from "@context/AuthContext";

const LINKS = [
  { href: "/", label: "Search", shortLabel: "Search", Icon: Search },
  {
    href: "/recipes",
    label: "Recipes",
    shortLabel: "Recipes",
    Icon: BookOpenText,
  },
  { href: "/plan", label: "Plan", shortLabel: "Plan", Icon: CalendarDays },
  { href: "/pantry", label: "Pantry", shortLabel: "Pantry", Icon: Package },
  {
    href: "/grocery",
    label: "Grocery",
    shortLabel: "Grocery",
    Icon: ShoppingCart,
  },
] as const;

/** Admins only; the page 404s for anyone else regardless. */
const ADMIN_LINK = {
  href: "/admin",
  label: "Admin",
  shortLabel: "Admin",
  Icon: ShieldCheck,
} as const;

interface NavProps {
  className?: string;
}

/**
 * Five destinations (six for an admin), marked by an underline on the
 * current one. The
 * links are as tall as the header so the underline lands on the bar's
 * own hairline rather than floating above it. On phones the nav has a
 * row to itself, so each link takes a fifth of it with the icon
 * stacked over a short label: five thumb-sized targets that fit 360px.
 */
const Nav = ({ className = "" }: NavProps) => {
  const pathname = usePathname();
  const { isAdmin } = useAuth();
  const links = isAdmin ? [...LINKS, ADMIN_LINK] : LINKS;

  return (
    <nav className={`pointer-events-none flex items-center ${className}`}>
      <div className="pointer-events-auto flex w-full items-stretch sm:w-auto sm:items-center sm:gap-6">
        {links.map(({ href, label, shortLabel, Icon }) => {
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
