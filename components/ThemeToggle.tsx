"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-24 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-4 h-10 rounded-xl flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-transparent dark:border-gray-700 text-sm font-medium"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-yellow-500" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-gray-700" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
