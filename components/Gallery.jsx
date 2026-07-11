"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

const IMAGES = [
  { src: "/images/gallery-1-classroom.svg", caption: "Interactive Classrooms" },
  { src: "/images/gallery-2-library.svg", caption: "The Reading Hall" },
  { src: "/images/gallery-3-sports.svg", caption: "Athletics Ground" },
  { src: "/images/gallery-4-lab.svg", caption: "Innovation Lab" },
  { src: "/images/gallery-5-auditorium.svg", caption: "Main Auditorium" },
  { src: "/images/gallery-6-art.svg", caption: "Art & Design Studio" },
];

export default function Gallery() {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" ref={ref} className="relative bg-white dark:bg-ink-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center" data-reveal="up">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Campus Life</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white">
            A Glimpse Into <span className="text-gradient-amber italic">Everyday Radiance</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {IMAGES.map((img, i) => (
            <button
              key={img.caption}
              data-reveal="scale"
              data-reveal-delay={i * 80}
              onClick={() => setActive(img)}
              className={`group relative rounded-2xl overflow-hidden cursor-zoom-in ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close preview"
            className="absolute top-6 right-6 h-11 w-11 rounded-full glass flex items-center justify-center text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="max-w-3xl w-full animate-scale-in">
            <img src={active.src} alt={active.caption} className="w-full rounded-2xl" />
            <p className="mt-4 text-center text-white/80 font-medium">{active.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
