// components/Programmes/LogoCard.jsx
import Image from "next/image";

/**
 * LogoCard
 * Identical premium card used to display a single programme / collaboration logo.
 * - fixed, uniform size so every card lines up regardless of the logo's natural size
 * - object-contain keeps each logo's aspect ratio intact (never stretched/cropped)
 * - matches the amber / rounded-2xl / shadow language used in Gallery & Facilities
 */
export default function LogoCard({ name, image, ...rest }) {
  return (
    <div
      {...rest}
      className="
        group relative flex h-32 w-56 shrink-0 items-center justify-center
        rounded-2xl border border-amber-100 bg-white p-6
        shadow-md shadow-amber-950/5
        transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-900/10
        hover:border-amber-200
        dark:border-white/10 dark:bg-neutral-900
        dark:shadow-black/30 dark:hover:shadow-black/50
        dark:hover:border-amber-500/30
        sm:h-36 sm:w-64
      "
    >
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 224px, 256px"
          className="
            object-contain
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Accessible label, visually hidden but present for SEO / screen readers */}
      <span className="sr-only">{name}</span>
    </div>
  );
}
