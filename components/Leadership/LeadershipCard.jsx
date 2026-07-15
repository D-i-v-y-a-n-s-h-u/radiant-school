"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * LeadershipCard
 *
 * NOTE: This project already has a shared scroll-reveal animation used
 * throughout the site. If yours is a hook (e.g. `useReveal`) or a
 * library (Framer Motion / AOS) instead of a plain IntersectionObserver +
 * CSS class, swap the small effect below for your existing utility —
 * everything else (markup, hover states) stays the same.
 */
export default function LeadershipCard({
  slug,
  image,
  designation,
  name,
  message,
  signature = "/signature.png",
  delay = 0,
}) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={`
        group relative flex flex-col items-center text-center
        rounded-3xl border border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-neutral-900
        px-8 py-12 sm:px-10 sm:py-14
        shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-amber-400/70 dark:hover:border-amber-400/50
        hover:shadow-[0_20px_45px_-10px_rgba(217,119,6,0.25)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Portrait */}
        <div className="relative mb-8 h-40 w-40 sm:h-48 sm:w-48 rounded-full">
           {/* Outer Ring */}
           <div className="absolute inset-0 rounded-full ring-[5px] ring-amber-400/50 group-hover:ring-amber-500 transition-all duration-300" />
        
           {/* Image */}
           <div className="absolute inset-[6px] overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
             <Image
               src={image}
               alt={name}
               fill
               sizes="192px"
               className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
             />
           </div>
        </div>

      {/* Designation */}
      <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
        {designation}
      </span>

      {/* Name */}
      <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
        {name}
      </h3>

      {/* Message */}
      <p className="mb-5 max-w-full text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-[15px] line-clamp-5">
        {message}
      </p>

      <Link
  href={`/leadership/${slug}`}
  className="
    inline-flex
    items-center
    rounded-full
    border
    border-amber-500
    px-4
    py-2
    text-sm
    font-semibold
    text-amber-500
    transition-all
    duration-300
    hover:bg-amber-500
    hover:text-white
"
>
  Read Full Message →
</Link>


      {showModal && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
    onClick={() => setShowModal(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-neutral-900 p-10"
    >
      <button
        onClick={() => setShowModal(false)}
        className="absolute right-6 top-6 text-3xl text-neutral-500 hover:text-amber-500"
      >
        ×
      </button>

      <div className="flex flex-col items-center text-center">

        <div className="relative h-44 w-44 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <span className="mt-6 text-sm uppercase tracking-[0.3em] text-amber-500">
          {designation}
        </span>

        <h2 className="mt-3 text-3xl font-semibold dark:text-white">
          {name}
        </h2>

        <p className="mt-8 whitespace-pre-line text-left leading-8 text-neutral-700 dark:text-neutral-300">
          {message}
        </p>

        <div className="relative mt-10 h-12 w-32 opacity-70 dark:invert">
          <Image
            src={signature}
            alt=""
            fill
            className="object-contain"
          />
        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
}
