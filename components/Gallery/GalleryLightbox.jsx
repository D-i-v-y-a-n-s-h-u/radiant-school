// components/Gallery/GalleryLightbox.jsx
"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Fullscreen image lightbox. Fully reusable — accepts any items array and
 * controlled index, so the same component can back the homepage preview
 * and the full /gallery page later.
 *
 * Props:
 * - items: Array<{ id, image, title }>
 * - index: number          (currently open image index)
 * - onClose: () => void
 * - onIndexChange: (nextIndex: number) => void
 */
export default function GalleryLightbox({ items, index, onClose, onIndexChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const total = items.length;
  const current = items[index];

  // Trigger the zoom-in transition on mount.
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  // Keyboard support.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext]);

  // Prevent background scroll while open.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-center justify-center
        bg-black/80 backdrop-blur-md
        transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} — image viewer`}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Close viewer"
      >
        <X size={28} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 text-white/80 text-sm font-medium tracking-wide">
        {index + 1} / {total}
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-2 sm:left-6 z-10 rounded-full p-2 sm:p-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-[88vw] h-[70vh] sm:w-[80vw] sm:h-[78vh] max-w-5xl
          transition-transform duration-300 ease-out
          ${isVisible ? "scale-100" : "scale-90"}
        `}
      >
        <Image
          src={current.image}
          alt={current.title}
          fill
          sizes="90vw"
          className="object-contain select-none"
          draggable={false}
          priority
        />
        <p className="absolute -bottom-8 left-0 right-0 text-center text-white/70 text-sm">
          {current.title}
        </p>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-2 sm:right-6 z-10 rounded-full p-2 sm:p-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
