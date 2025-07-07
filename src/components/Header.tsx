"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import AuthButton from "@/components/AuthButton2";
import chefBulb from "@public/logo.png";

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="flex flex-col items-center justify-center gap-1">
      <AuthButton />

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle Theme"
        className="transition-transform hover:scale-110 focus-visible:outline-none"
      >
        <Image
          src={chefBulb}
          alt="chef lightbulb"
          className={`w-10 sm:w-12 md:w-14 lg:w-16 transition-[filter,box-shadow] ${
            mounted && isDark ?
              "brightness-125 drop-shadow-[0_0_20px_rgba(255,255,180,0.75)]"
            : ""
          }`}
        />
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="font-bold text-pastel-green">cooked</span>
        <span className="text-pastel-brown">up</span>
      </h1>

      <p className="text-xs sm:text-sm md:text-base text-center">
        Find recipes based on ingredients on hand!
      </p>
    </header>
  );
};

export default Header;
