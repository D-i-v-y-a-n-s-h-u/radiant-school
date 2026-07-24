"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { Megaphone, ChevronLeft, ChevronRight } from "lucide-react";

const news = [
  {
    title: "Admissions Open for Session 2026-27",
    href: "/admissions",
  },
  {
    title: "CBSE Result 2026 Declared",
    href: "/academics",
  },
  {
    title: "Olympiad Registration Started",
    href: "/downloads",
  },
  {
    title: "Summer Vacation Circular Released",
    href: "/downloads",
  },
  {
    title: "Annual Sports Meet Schedule",
    href: "/downloads",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function LatestNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const total = useMemo(() => news.length, []);

  const goTo = useCallback(
    (nextIndex) => {
      setIsAnimating(true);
      window.setTimeout(() => {
        setActiveIndex((nextIndex + total) % total);
        setIsAnimating(false);
      }, 200);
    },
    [total]
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const resetAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        setIsAnimating(true);
        window.setTimeout(() => setIsAnimating(false), 200);
        return (prev + 1) % total;
      });
    }, AUTOPLAY_INTERVAL);
  }, [isPaused, total]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoplay]);

  const handlePrevClick = () => {
    goPrev();
    resetAutoplay();
  };

  const handleNextClick = () => {
    goNext();
    resetAutoplay();
  };

  const handleDotClick = (index) => {
    goTo(index);
    resetAutoplay();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrevClick();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNextClick();
    }
  };

  const current = news[activeIndex];

  return (
    <section
      aria-label="Latest news and announcements"
      className="w-full px-4 sm:px-6 lg:px-8 pt-6 pb-0"
    >
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        className="
          mx-auto max-w-6xl
          rounded-2xl
          border border-amber-200/40 dark:border-amber-400/10
          bg-white/70 dark:bg-white/5
          backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          flex flex-col md:flex-row md:items-center
          gap-3 md:gap-6
          px-4 py-3 md:px-6 md:py-4
        "
      >
        {/* Left: fixed label */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="
              flex h-8 w-8 items-center justify-center
              rounded-full
              bg-amber-500/15 dark:bg-amber-400/15
              text-amber-600 dark:text-amber-400
            "
            aria-hidden="true"
          >
            <Megaphone className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-white whitespace-nowrap">
            Latest News
          </span>
        </div>

        {/* Divider (desktop only) */}
        <span className="hidden md:block h-6 w-px bg-amber-200/60 dark:bg-white/10 shrink-0" />

        {/* Center: announcement */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <Link
            href={current.href}
className={`
block text-sm md:text-[15px] font-medium
text-neutral-700 dark:text-neutral-200
hover:text-amber-600 dark:hover:text-amber-400
focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-amber-500 focus-visible:ring-offset-2
dark:focus-visible:ring-offset-neutral-900
rounded-md
transition-all duration-200 ease-out
${isAnimating ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}
`}
          >
            {current.title}
          </Link>
        </div>

        {/* Right: controls */}
        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrevClick}
            aria-label="Previous announcement"
            className="
              flex h-8 w-8 items-center justify-center rounded-full
              bg-amber-500/10 hover:bg-amber-500/20
              dark:bg-white/5 dark:hover:bg-white/10
              text-amber-600 dark:text-amber-400
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-amber-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-neutral-900
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Announcement indicators"
          >
            {news.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show announcement ${index + 1}: ${item.title}`}
                onClick={() => handleDotClick(index)}
                className={`
                  h-1.5 rounded-full transition-all duration-300 ease-out
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-amber-500 focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-neutral-900
                  ${
                    index === activeIndex
                      ? "w-5 bg-amber-500 dark:bg-amber-400"
                      : "w-1.5 bg-amber-500/30 hover:bg-amber-500/50 dark:bg-white/20 dark:hover:bg-white/35"
                  }
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNextClick}
            aria-label="Next announcement"
            className="
              flex h-8 w-8 items-center justify-center rounded-full
              bg-amber-500/10 hover:bg-amber-500/20
              dark:bg-white/5 dark:hover:bg-white/10
              text-amber-600 dark:text-amber-400
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-amber-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-neutral-900
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}