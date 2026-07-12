// components/Gallery/GalleryCard.jsx
"use client";

import Image from "next/image";

/**
 * Single gallery image card.
 *
 * Props:
 * - item: { id, image, title }
 * - onClick: () => void  (called when the card is clicked, e.g. to open the lightbox)
 * - priority: boolean    (optional, pass true only for the first visible card if needed)
 */
export default function GalleryCard({ item, onClick, priority = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group relative shrink-0 overflow-hidden rounded-2xl
        shadow-md shadow-black/10 dark:shadow-black/30
        w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px]
        aspect-[4/5] cursor-pointer
        select-none
        focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
        transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20
      "
      aria-label={`Open ${item.title} in gallery viewer`}
      draggable={false}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        draggable={false}
        loading="lazy"
        sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
        className="
          object-cover pointer-events-none
          transition-transform duration-500 ease-out
          group-hover:scale-110
        "
      />

      {/* Soft gradient + title overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-black/60 via-black/0 to-black/0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />
      <span
        className="
          pointer-events-none absolute bottom-3 left-3 right-3
          translate-y-2 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-300
          text-sm font-medium text-white
          truncate
        "
      >
        {item.title}
      </span>
    </button>
  );
}
