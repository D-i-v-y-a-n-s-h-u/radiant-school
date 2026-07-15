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
  priority = false,
  ...rest
}) {
  return (
    <div
      {...rest}
className="
group
relative
flex
h-24 w-36
sm:h-28 sm:w-44
md:h-32 md:w-52
lg:h-36 lg:w-60
shrink-0
items-center
justify-center

rounded-2xl
border
border-neutral-200
dark:border-neutral-700

bg-white
dark:bg-neutral-900

p-4

shadow-sm
hover:shadow-xl

transition-transform
transition-shadow
transition-colors
duration-300
ease-out

hover:-translate-y-2
hover:border-amber-300
"
    >
      <div className="relative h-full w-full">
        <Image
  src={image}
  alt={name}
  fill
  priority={priority}
  loading={priority ? "eager" : "lazy"}
  sizes="(max-width:768px) 176px, 240px"
  className="
    object-contain
    p-2
    transition-transform
    duration-300
    group-hover:scale-105
  "
/>
      </div>

      {/* Accessible label, visually hidden but present for SEO / screen readers */}
      <span className="sr-only">{name}</span>
    </div>
  );
}
