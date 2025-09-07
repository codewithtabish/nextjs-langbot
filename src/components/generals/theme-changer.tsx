"use client";

import { useTheme, Theme, THEMES } from "@/hooks/use-theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // adjust path if different

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const themeLabels: Record<Theme, string> = {
    "theme-twitter": "🐦 Twitter",
    "theme-nature": "🌿 Nature",
    "theme-caffeine": "☕ Caffeine",
    "theme-pastel": "🌸 Pastel Dreams",
    "theme-violet": "💜 Violet Bloom",
  };

  return (
    <Select value={theme} onValueChange={(value) => setTheme(value as Theme)}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map((t) => (
          <SelectItem key={t} value={t}>
            {themeLabels[t]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
