"use client";

import { ThemeProvider } from "next-themes";

/**
 * Providers
 * Wraps the app with next-themes' ThemeProvider so the theme (light/dark)
 * can be toggled without a page refresh. `attribute="class"` toggles the
 * `.dark` class on <html>, which our Tailwind v4 `@custom-variant dark`
 * definition in globals.css hooks into.
 */
export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
      {children}
    </ThemeProvider>
  );
}
