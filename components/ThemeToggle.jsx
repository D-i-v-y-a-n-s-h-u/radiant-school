"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * ThemeToggle
 * A pill-shaped switch with a sliding sun/moon indicator. Mounts guarded
 * to avoid hydration mismatch since the resolved theme is only known
 * client-side.
 */
export default function ThemeToggle({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative h-9 w-16 rounded-full border transition-colors duration-500 cursor-pointer
        ${isDark ? "bg-ink-800 border-white/10" : "bg-amber-50 border-amber-200"} ${className}`}
    >
      <span
        className={`absolute top-1 left-1 h-7 w-7 rounded-full shadow-md flex items-center justify-center
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isDark ? "translate-x-7 bg-ink-950" : "translate-x-0 bg-white"}`}
      >
        {isDark ? (
          // Moon icon
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              fill="#f59e0b"
            />
          </svg>
        ) : (
          // Sun icon
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" fill="#d97706" />
            <g stroke="#d97706" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
              <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
              <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
            </g>
          </svg>
        )}
      </span>
    </button>
  );
}
