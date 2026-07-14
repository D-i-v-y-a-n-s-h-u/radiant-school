// components/Programmes/ProgrammesSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import SegmentedTabs from "./SegmentedTabs";
import LogoCarousel from "./LogoCarousel";
import programmesData from "./programmesData";
import collaborationsData from "./collaborationsData";

const TABS = ["Programmes & Initiatives", "Educational Collaborations"];
const DATASETS = [programmesData, collaborationsData];
const FADE_MS = 250;

export default function ProgrammesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // fade-up reveal on scroll
  const [isCarouselFaded, setIsCarouselFaded] = useState(false); // crossfade on tab switch
  const sectionRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  // Fade-up reveal when the section enters the viewport (matches Gallery/Facilities pattern)
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Crossfade the carousel content whenever the active tab changes
  const handleTabChange = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setIsCarouselFaded(true);

    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    fadeTimeoutRef.current = setTimeout(() => {
      setDisplayedIndex(index);
      setIsCarouselFaded(false);
    }, FADE_MS);
  };

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative w-full overflow-hidden
        bg-amber-50/40 dark:bg-neutral-950
        px-4 py-20 sm:px-6 sm:py-28
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Header */}
        <div className="mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Programmes{" "}
            <span className="text-amber-500 dark:text-amber-400">
              &amp; Initiatives
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Discover the programmes and educational collaborations that make
            Radiant International School a future-ready institution.
          </p>
        </div>

        {/* Segmented tab switcher */}
        <SegmentedTabs
          tabs={TABS}
          activeIndex={activeIndex}
          onChange={handleTabChange}
        />

        {/* Carousel with crossfade on tab switch */}
        <div
          className={`
            mt-12 w-full transition-opacity ease-out sm:mt-16
            ${isCarouselFaded ? "opacity-0" : "opacity-100"}
          `}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        >
          <LogoCarousel items={DATASETS[displayedIndex]} />
        </div>

        {/* View All button */}
        <button
          type="button"
          className="
            mt-12 inline-flex items-center gap-2 rounded-full
            bg-amber-500 px-7 py-3 text-sm font-semibold text-white sm:mt-16
            shadow-md shadow-amber-500/30
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/40
            dark:bg-amber-600 dark:hover:bg-amber-500
            cursor-pointer
          "
        >
          View All
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>
    </section>
  );
}
