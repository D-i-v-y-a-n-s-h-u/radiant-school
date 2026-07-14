// components/Programmes/LogoCarousel.jsx
"use client";

import LogoCard from "./LogoCard";

/**
 * LogoCarousel
 * Continuous, infinite marquee of LogoCards — same animation philosophy as the
 * Gallery / Facilities marquees elsewhere on the site.
 *
 * How the seamless loop works:
 * - The list is rendered twice back to back inside a flex track.
 * - The track animates from translateX(0) to translateX(-50%).
 * - Because the second copy is an exact duplicate of the first, the moment the
 *   track finishes translating by 50% it looks identical to the start frame,
 *   so the loop can restart with zero visible jump.
 *
 * Pause on hover / touch is handled purely with CSS (group-hover), so there is
 * no JS animation loop, no jank, and no external dependency.
 */
export default function LogoCarousel({ items }) {
  return (
    <div
      className="
        group relative w-full overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
      "
    >
      <div
        className="
          marquee-track flex w-max items-center gap-6
          [animation-play-state:running]
          group-hover:[animation-play-state:paused]
          group-active:[animation-play-state:paused]
        "
      >
        {items.map((item) => (
          <LogoCard key={`a-${item.id}`} name={item.name} image={item.image} />
        ))}
        {items.map((item) => (
          <LogoCard
            key={`b-${item.id}`}
            name={item.name}
            image={item.image}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
