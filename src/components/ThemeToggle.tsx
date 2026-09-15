"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// System (follow the device) is the default and stays reachable: the
// button cycles system → light → dark rather than only flipping between
// the two fixed themes, which would strand anyone who ever clicked it.
const ORDER = ["system", "light", "dark"] as const;
type Theme = (typeof ORDER)[number];

const OPTIONS: Record<Theme, { Icon: typeof Sun; label: string }> = {
  system: { Icon: Monitor, label: "System" },
  light: { Icon: Sun, label: "Light" },
  dark: { Icon: Moon, label: "Dark" },
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before hydration `theme` is unknown; render the system state so the
  // server and client markup match.
  const current: Theme =
    mounted && ORDER.includes(theme as Theme) ? (theme as Theme) : "system";
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  const { Icon, label } = OPTIONS[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${label}. Switch to ${OPTIONS[next].label.toLowerCase()}`}
      title={`Theme: ${label}`}
      className={`
        flex size-9 items-center justify-center
        rounded-md border border-line bg-surface-raised
        text-ink-muted
        transition-colors hover:border-pastel-blue hover:text-ink
      `}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ThemeToggle;
