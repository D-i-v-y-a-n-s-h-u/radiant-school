"use client";

import { useEffect, useState } from "react";
import LogoCard from "./LogoCard";

export default function LogoCarousel({ items }) {
  const [activeLogo, setActiveLogo] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % items.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [paused, items.length]);

  return (
    <div
  className="
    group
    relative
    w-full
    overflow-x-auto
    overflow-y-hidden
    cursor-grab
    active:cursor-grabbing
    touch-pan-x
    select-none
    [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
  "
>
      <div
        className="
          marquee-track flex w-max items-center gap-8
          [animation-play-state:running]
          group-hover:[animation-play-state:paused]
          group-active:[animation-play-state:paused]
        "
      >
        {/* First copy */}
        {items.map((item, index) => (
          <LogoCard
            key={`a-${item.id}`}
            name={item.name}
            image={item.image}
            active={index === activeLogo}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          />
        ))}

        {/* Duplicate copy for infinite loop */}
        {items.map((item, index) => (
          <LogoCard
            key={`b-${item.id}`}
            name={item.name}
            image={item.image}
            active={index === activeLogo}
            aria-hidden="true"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          />
        ))}
      </div>
    </div>
  );
}