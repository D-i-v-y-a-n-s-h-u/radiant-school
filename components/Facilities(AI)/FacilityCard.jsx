"use client";

import Image from "next/image";

/**
 * Single facility card.
 * Kept as its own component so the carousel logic in FacilitiesCarousel
 * never has to change when the card design changes.
 */
export default function FacilityCard({ facility }) {
  return (
    <div
      className="
        group relative flex-shrink-0 select-none
        w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px]
        mx-3 md:mx-4
        rounded-2xl overflow-hidden
        bg-white
        shadow-[0_2px_10px_rgba(0,0,0,0.06)]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden bg-gray-100">
        <Image
          src={facility.image}
          alt={facility.title}
          fill
          draggable={false}
          loading="lazy"
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* subtle gradient on hover for depth */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/35 via-transparent to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>

      {/* Text content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight mb-1.5">
          {facility.title}
        </h3>
        <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed line-clamp-3">
          {facility.description}
        </p>
      </div>
    </div>
  );
}
