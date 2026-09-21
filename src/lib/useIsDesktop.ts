"use client";

import { useEffect, useState } from "react";

/**
 * Whether the viewport is at least `lg` (1024px), or null until the
 * first client render. Pages whose phone and desktop layouts differ in
 * structure (not just styling) resolve it with matchMedia rather than
 * CSS visibility, so only one layout ever mounts: rendering both would
 * duplicate every id, popover and request.
 */
export const useIsDesktop = (): boolean | null => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return isDesktop;
};
