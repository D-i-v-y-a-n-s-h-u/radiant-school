"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Contact", href: "/#contact" },
];

/**
 * Crest — the signature brand mark: a shield monogram with the school's
 * initials, echoing the heritage/prestige positioning of the site.
 */

export default function Navbar() {
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
         scrolled || !isHome
           ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] py-3"
           : "bg-transparent py-5"
       }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
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
                scrolled || !isHome
               ? "text-ink-950 dark:text-white"
               : "text-white"
              }`}
            >
              Radiant International School
            </p>
            <p
              className={`text-[10px] uppercase tracking-[0.25em] transition-colors ${
                scrolled || !isHome
               ? "text-ink-950/75 dark:text-ink-300"
               : "text-white/90"
              }`}
            >
              2 Decades of Excellence in Education 
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          
<li className="relative group">

  <button
    className={`flex items-center gap-1 text-sm font-medium ${
      scrolled || !isHome
  ? "text-ink-950/80 dark:text-ink-300 hover:text-amber-600"
  : "text-white/90 hover:text-white"
    }`}
  >
    About

    <svg
      className="h-4 w-4 transition-transform group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>

  </button>

  <div className="absolute left-0 mt-3 w-72 rounded-2xl glass shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">

    <a
      href="/#leadership"
      className="block px-5 py-4 hover:bg-amber-500/10"
    >
      👥 Leadership
    </a>

    <a
      href="/mission-vision"
      className="block px-5 py-4 hover:bg-amber-500/10"
    >
      🎯 Mission & Vision
    </a>

    <div className="border-t border-black/10 dark:border-white/10" />

    <p className="px-5 pt-4 pb-2 text-xs uppercase tracking-widest text-neutral-500">
      Facilities
    </p>

    <a
      href="/#facilities"
      className="block px-5 py-3 hover:bg-amber-500/10"
    >
      🏫 Facilities Gallery
    </a>

    <a
      href="/facilities"
      className="block px-5 py-3 hover:bg-amber-500/10"
    >
      📖 Facilities Information
    </a>

  </div>

</li>

<li className="relative group">

  <button
    className={`flex items-center gap-1 text-sm font-medium ${
      scrolled || !isHome
        ? "text-ink-950/80 dark:text-ink-300 hover:text-amber-600"
        : "text-white/90 hover:text-white"
    }`}
  >
    Academics

    <svg
      className="h-4 w-4 transition-transform group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  <div className="absolute left-0 mt-3 w-72 rounded-2xl glass shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">

    <a
      href="/#academics"
      className="block px-5 py-4 hover:bg-amber-500/10"
    >
      🎓 Academic Excellence
    </a>

    <a
      href="/downloads"
      className="block px-5 py-4 hover:bg-amber-500/10"
    >
      📥 Download Centre
    </a>

  </div>

</li>

<li className="relative group">

<button
className={`flex items-center gap-1 text-sm font-medium ${
scrolled || !isHome
? "text-ink-950/80 dark:text-ink-300 hover:text-amber-600"
: "text-white/90 hover:text-white"
}`}
>

Gallery

<svg
className="h-4 w-4 transition-transform group-hover:rotate-180"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M19 9l-7 7-7-7"
/>
</svg>

</button>

<div className="absolute left-0 mt-3 w-72 rounded-2xl glass shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">

<a
href="/#gallery"
className="block px-5 py-4 hover:bg-amber-500/10"
>
🖼 Quick Preview
</a>

<a
href="/gallery"
className="block px-5 py-4 hover:bg-amber-500/10"
>
📷 Photo Gallery
</a>

<a
href="/videos"
className="block px-5 py-4 hover:bg-amber-500/10"
>
🎥 Video Gallery
</a>

</div>

</li>

  {LINKS.map((link) => (
    <li key={link.href}>
      <a
        href={link.href}
        className={`relative text-sm font-medium tracking-wide pb-1 transition-colors group ${
          scrolled || !isHome
  ? "text-ink-950/80 dark:text-ink-300 hover:text-amber-600"
  : "text-white/90 hover:text-white"
        }`}
      >
        {link.label}
        <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
      </a>
    </li>
  ))}

  {/* Admissions Dropdown */}
  <li className="relative group">
    <button
      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
        scrolled || !isHome
  ? "text-ink-950/80 dark:text-ink-300 hover:text-amber-600"
  : "text-white/90 hover:text-white"
      }`}
    >
      Admissions

      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div className="absolute left-0 mt-3 w-64 rounded-2xl glass shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">

      <a
        href="https://forms.edunexttechnologies.com/forms/radiant/application/"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 py-4 hover:bg-amber-500/10"
      >
        📄 Apply Online
      </a>

      <a
           href="https://radiant.edunexttechnologies.com/mvc/std/DynamicEnquiryForm"
           target="_blank"
           rel="noopener noreferrer"
           className="block px-5 py-4 hover:bg-amber-500/10"
      >
  ❓ Enquiry Form
</a>
     <a
           href="https://www.radiantpatna.com/files/fee_structure_2024-25_nur12.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="block px-5 py-4 hover:bg-amber-500/10"
      >
  💰 Fee Structure [2024-25]
</a>
     <a
           href="https://www.radiantpatna.com/files/fee_structure_2025-26_nur-12.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="block px-5 py-4 hover:bg-amber-500/10"
      >
  💰 Fee Structure [2025-26]
</a>
    <a
           href="https://www.radiantpatna.com/files/fee_structure_2026-27_nur_12.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="block px-5 py-4 hover:bg-amber-500/10"
      >
  💰 Fee Structure [2026-27]
</a>

      <a
        href="#admissions"
        className="block px-5 py-4 hover:bg-amber-500/10"
      >
        📋 Admission Process
      </a>

    </div>
  </li>
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
    mobileOpen
      ? "opacity-100 scale-y-100 pointer-events-auto"
      : "opacity-0 scale-y-95 pointer-events-none"
  }`}
>
  <div className="flex flex-col gap-1 px-8 py-8">

<div className="border-b border-ink-950/5 dark:border-white/10">

  <button
    onClick={() => setAboutOpen(!aboutOpen)}
    className="flex w-full items-center justify-between py-3 text-lg font-medium text-ink-950 dark:text-white"
  >
    About

    <span
      className={`transition-transform duration-300 ${
        aboutOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      aboutOpen ? "max-h-96 pb-2" : "max-h-0"
    }`}
  >
    <a
      href="/#leadership"
      onClick={() => setMobileOpen(false)}
      className="block py-2 pl-5 text-base text-ink-950/80 dark:text-white/80 hover:text-amber-500"
    >
      👥 Leadership
    </a>

    <a
      href="/mission-vision"
      onClick={() => setMobileOpen(false)}
      className="block py-2 pl-5 text-base text-ink-950/80 dark:text-white/80 hover:text-amber-500"
    >
      🎯 Mission & Vision
    </a>

    <p className="pl-5 pt-3 pb-1 text-xs uppercase tracking-widest text-neutral-500">
      Facilities
    </p>

    <a
      href="/#facilities"
      onClick={() => setMobileOpen(false)}
      className="block py-2 pl-8 text-base text-ink-950/80 dark:text-white/80 hover:text-amber-500"
    >
      🏫 Facilities Gallery
    </a>

    <a
      href="/facilities"
      onClick={() => setMobileOpen(false)}
      className="block py-2 pl-8 text-base text-ink-950/80 dark:text-white/80 hover:text-amber-500"
    >
      📖 Facilities Information
    </a>
  </div>
</div>
<div className="border-b border-ink-950/5 dark:border-white/10">

  <button
    onClick={() => setGalleryOpen(!galleryOpen)}
    className="flex w-full items-center justify-between py-3 text-lg font-medium text-ink-950 dark:text-white"
  >
    Academics

    <span
      className={`transition-transform duration-300 ${
        galleryOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      galleryOpen ? "max-h-60" : "max-h-0"
    }`}
  >

    <a
      href="/#academics"
      onClick={() => setMobileOpen(false)}
      className="block py-2 pl-5 text-base"
    >
      🎓 Academic Excellence
    </a>

    <a
      href="/downloads"
      onClick={() => setMobileOpen(false)}
      className="block py-2 pl-5 pb-3 text-base"
    >
      📥 Download Centre
    </a>

  </div>

</div>

<div className="border-b border-ink-950/5 dark:border-white/10">

<button
onClick={() => setGalleryOpen(!galleryOpen)}
className="flex w-full items-center justify-between py-3 text-lg font-medium text-ink-950 dark:text-white"
>

Gallery

<span
className={`transition-transform duration-300 ${
galleryOpen ? "rotate-180" : ""
}`}
>
▼
</span>

</button>

<div
className={`overflow-hidden transition-all duration-300 ${
galleryOpen ? "max-h-60" : "max-h-0"
}`}
>

<a
href="/#gallery"
onClick={() => setMobileOpen(false)}
className="block py-2 pl-5 text-base"
>
🖼 Quick Preview
</a>

<a
href="/gallery"
onClick={() => setMobileOpen(false)}
className="block py-2 pl-5 text-base"
>
📷 Photo Gallery
</a>

<a
href="/videos"
onClick={() => setMobileOpen(false)}
className="block py-2 pl-5 pb-3 text-base"
>
🎥 Video Gallery
</a>

</div>

</div>

    {/* Admissions Accordion */}
    <div className="border-b border-ink-950/5 dark:border-white/10">

      <button
        onClick={() => setAdmissionOpen(!admissionOpen)}
        className="flex w-full items-center justify-between py-3 text-lg font-medium text-ink-950 dark:text-white"
      >
        Admissions

        <span
          className={`transition-transform duration-300 ${
            admissionOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          admissionOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <a
          href="https://forms.edunexttechnologies.com/forms/radiant/application/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="block py-2 pl-5 text-base text-ink-950/80 dark:text-white/80"
        >
          📄 Apply Online
        </a>

        <a
          href="https://radiant.edunexttechnologies.com/mvc/std/DynamicEnquiryForm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="block py-2 pl-5 text-base text-ink-950/80 dark:text-white/80"
        >
          ❓ Enquiry Form
        </a>

        <a
          href="/#admissions"
          onClick={() => setMobileOpen(false)}
          className="block py-2 pl-5 pb-3 text-base text-ink-950/80 dark:text-white/80"
        >
          📋 Admission Process
        </a>
      </div>
    </div>

    <a
      href="/#contact"
      onClick={() => setMobileOpen(false)}
      className="py-3 text-lg font-medium text-ink-950 dark:text-white border-b border-ink-950/5 dark:border-white/10"
    >
      Contact
    </a>

    <div className="flex items-center justify-between mt-6">
      <span className="text-sm text-ink-950/60 dark:text-ink-300">
        Appearance
      </span>
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