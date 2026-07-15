"use client";

import LogoCard from "./LogoCard";

export default function LogoCarousel({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
      {items.map((item) => (
        <LogoCard
          key={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
}