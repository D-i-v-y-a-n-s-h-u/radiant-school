"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  Download,
  GraduationCap,
  CalendarClock,
  HardDrive,
  ChevronRight,
  Inbox,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import downloadsData, { categories } from "@/data/downloads";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function DownloadsExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return downloadsData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.class.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.session.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategory]);

  return (
    <main className="bg-white dark:bg-zinc-950">
      {/* ---------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-amber-50/60 to-white dark:from-amber-950/30 dark:via-zinc-950 dark:to-zinc-950" />

        {/* floating shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/10 animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 -right-16 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-400/10 animate-float-slower"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-300/5 animate-float-slow"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center justify-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400"
            >
              <Link
                href="/"
                className="transition-colors hover:text-amber-600 dark:hover:text-amber-400"
              >
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>Academics</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                Downloads
              </span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
              Download{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Centre
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Download syllabus, holiday homework, circulars, date sheets and
              important academic resources.
            </p>
          </Reveal>

          {/* search */}
          <Reveal delay={300}>
            <div className="mx-auto mt-10 max-w-xl">
              <div className="group relative flex items-center rounded-full border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-md transition-all focus-within:border-amber-400 focus-within:shadow-lg focus-within:shadow-amber-200/40 dark:border-zinc-800 dark:bg-zinc-900/70 dark:focus-within:shadow-amber-900/20">
                <Search className="pointer-events-none absolute left-5 h-5 w-5 text-zinc-400 transition-colors group-focus-within:text-amber-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search downloads..."
                  className="w-full rounded-full bg-transparent py-4 pl-14 pr-6 text-base text-zinc-800 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-100"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Category filter */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ease-out ${
                    isActive
                      ? "border-amber-500 bg-amber-500 text-white shadow-md shadow-amber-300/40 scale-105 dark:shadow-amber-900/30"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-amber-300 hover:text-amber-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-amber-700 dark:hover:text-amber-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Grid */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={(i % 6) * 60}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300/70 hover:shadow-xl hover:shadow-amber-200/30 dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:border-amber-700/50 dark:hover:shadow-amber-950/40">
                  {/* ambient glow on hover */}
                  <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-300/0 blur-2xl transition-colors duration-300 group-hover:bg-amber-300/30 dark:group-hover:bg-amber-500/10" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white dark:bg-amber-500/10 dark:text-amber-400">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-lg font-semibold leading-snug text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>

                  <div className="relative mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                      <span>
                        {item.class} &middot; {item.session}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                      <span>{item.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                      <span>Updated {formatDate(item.updated)}</span>
                    </div>
                  </div>

                  <a
                    href={item.file}
                    download
                    className="relative mt-6 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-400"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/60 py-24 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400">
                <Inbox className="h-8 w-8" />
              </div>
              <p className="mt-5 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                No downloads available.
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Try a different search term or category.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(16px) translateX(-14px);
          }
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-float-slower {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
