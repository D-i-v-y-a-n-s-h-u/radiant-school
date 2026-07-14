"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

/**
 * Crest — the signature brand mark: a shield monogram with the school's
 * initials, echoing the heritage/prestige positioning of the site.
 */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 lg:h-12 lg:w-12 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Radiant International School Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p
              className={`font-display font-semibold text-lg tracking-tight transition-colors ${
                scrolled ? "text-ink-950 dark:text-white" : "text-white"
              }`}
            >
              Radiant International School
            </p>
            <p
              className={`text-[10px] uppercase tracking-[0.25em] transition-colors ${
                scrolled ? "text-ink-950/75 dark:text-ink-300" : "text-white/90"
              }`}
            >
              2 Decades of Excellence in Education 
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium tracking-wide pb-1 transition-colors group ${
                  scrolled ? "text-ink-950/80 dark:text-ink-300 hover:text-amber-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://radiant.edunexttechnologies.com/Index"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold px-5 py-2.5 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            ERP Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden flex flex-col justify-center gap-1.5 h-10 w-10 rounded-full items-center ${
            scrolled ? "" : ""
          }`}
        >
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              scrolled ? "bg-ink-950 dark:bg-white" : "bg-white"
            } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              scrolled ? "bg-ink-950 dark:bg-white" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              scrolled ? "bg-ink-950 dark:bg-white" : "bg-white"
            } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 glass transition-all duration-500 origin-top ${
          mobileOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 px-8 py-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium text-ink-950 dark:text-white border-b border-ink-950/5 dark:border-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm text-ink-950/60 dark:text-ink-300">Appearance</span>
            <ThemeToggle />
          </div>
          <a
            href="https://radiant.edunexttechnologies.com/Index"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-6 text-center rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold px-5 py-3 shadow-lg shadow-amber-600/25"
          >
            ERP Login
          </a>
        </div>
      </div>
    </header>
  );
}
