// components/Gallery/GallerySection.jsx
"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import GalleryCarousel from "./GalleryCarousel";
import GalleryLightbox from "./GalleryLightbox";
import galleryData from "./galleryData";

/**
 * Homepage Gallery preview section.
 *
 * Drop this into the homepage, e.g.:
 *   import GallerySection from "@/components/Gallery/GallerySection";
 *   ...
 *   <GallerySection />
 *
 * This only renders the preview carousel + CTA — the full /gallery page
 * is a separate, later task. The "View Full Gallery" button currently has
 * no navigation attached, per spec.
 */
export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useReveal();

  return (
    <section
        ref={ref}
        className="relative bg-white dark:bg-ink-950 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <p
        className="section-eyebrow text-amber-600 font-semibold uppercase text-xs"
        data-reveal="up"
      >
        Gallery
      </p>

      <h2
        className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white"
       data-reveal="up"
      >
        Life Beyond{" "}
        <span className="text-gradient-amber">
          Classrooms
        </span>
      </h2>

      <p
        className="mt-5 max-w-3xl mx-auto text-ink-950/60 dark:text-ink-300 leading-relaxed"
        data-reveal="up"
      >
        Discover the vibrant spirit of Radiant International School through
        celebrations, cultural events, sports, creative activities, leadership
        programs, and unforgettable student experiences.
      </p>
      </div>

      <div className="mt-14" data-reveal="up">
        <GalleryCarousel
          items={galleryData}
          onImageClick={(index) => setLightboxIndex(index)}
        />
      </div>

      <div
         className="mt-14 flex justify-center px-4"
         data-reveal="up"
      >
        <button
          type="button"
          className="
            inline-flex items-center gap-2 rounded-full
            bg-amber-500 hover:bg-amber-600
            text-white font-medium
            px-7 py-3 sm:px-8 sm:py-3.5
            shadow-md shadow-amber-500/20
            transition-all duration-300
            hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5
            focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2
          "
        >
          View Full Gallery →
        </button>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={galleryData}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
