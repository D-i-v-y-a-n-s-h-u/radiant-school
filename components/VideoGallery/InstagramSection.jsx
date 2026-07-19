"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import instagramData from "./instagramData";

export default function InstagramSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReel = instagramData[activeIndex];

  const handlePrev = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? instagramData.length - 1 : current - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current === instagramData.length - 1 ? 0 : current + 1));
  }, []);

  const handleOpenReel = useCallback(() => {
    window.open(activeReel.instagramUrl, "_blank", "noopener,noreferrer");
  }, [activeReel]);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="w-full max-w-sm">
          <PhoneMockup reel={activeReel} />
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {activeReel.date}
          </span>
          <h3 className="mt-2 max-w-xs text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
            {activeReel.title}
          </h3>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous reel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl text-neutral-700 dark:text-neutral-200 transition-colors hover:bg-amber-500 hover:text-white hover:border-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {activeIndex + 1} / {instagramData.length}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next reel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl text-neutral-700 dark:text-neutral-200 transition-colors hover:bg-amber-500 hover:text-white hover:border-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={handleOpenReel}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            Open Reel
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
