"use client";

import { useState, useEffect } from "react";

export const THEMES = [
  "theme-nature",
  "theme-caffeine",
  "theme-pastel",
  "theme-violet",
  "theme-twitter",
] as const;

export type Theme = (typeof THEMES)[number];

// Default theme → Twitter
const DEFAULT_THEME: Theme = "theme-twitter";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    THEMES.forEach((t) => document.documentElement.classList.remove(t));
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
