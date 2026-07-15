// components/Programmes/LogoCard.jsx
import Image from "next/image";

/**
 * LogoCard
 * Identical premium card used to display a single programme / collaboration logo.
 * - fixed, uniform size so every card lines up regardless of the logo's natural size
 * - object-contain keeps each logo's aspect ratio intact (never stretched/cropped)
 * - matches the amber / rounded-2xl / shadow language used in Gallery & Facilities
 */
export default function LogoCard({
  name,
  image,
  active = false,
  ...rest
}) {
  return (
    <div
      {...rest}
className={`
            group relative flex h-40 w-72 shrink-0 items-center justify-center
            rounded-2xl border border-amber-100 bg-white p-5
            shadow-md shadow-amber-950/5
            transition-all duration-500 ease-out will-change-transform

          ${
            active
            ? "active-logo -translate-y-2 scale-[1.03] rotate-[1deg] border-amber-300 shadow-2xl shadow-amber-400/30"
            : ""
          }

            hover:-translate-y-2
            hover:rotate-[1deg]
            hover:shadow-2xl
            hover:shadow-amber-400/25
            hover:border-amber-200

            dark:border-white/10
            dark:bg-neutral-900
            dark:shadow-black/30
            dark:hover:shadow-black/50
            dark:hover:border-amber-500/30

            sm:h-44 sm:w-80
            lg:h-48 lg:w-96
            `}
    >
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 224px, 256px"
          className={`
                      object-contain
                      transition-transform duration-700 ease-out
                      group-hover:scale-110
                      ${active ? "scale-110" : ""}
                    `}
        />
      </div>

      {/* Accessible label, visually hidden but present for SEO / screen readers */}
      <span className="sr-only">{name}</span>
    </div>
  );
}
