"use client";

import Image from "next/image";

export default function PhoneMockup({ reel }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[280px]">
      <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-neutral-900 dark:border-neutral-800 bg-neutral-900 shadow-2xl shadow-neutral-900/20 dark:shadow-black/50">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900 dark:bg-neutral-800" />

        <div className="relative aspect-[9/16] w-full bg-neutral-950">
          <Image
            key={reel.id}
            src={reel.thumbnail}
            alt={reel.title}
            fill
            sizes="280px"
            className="object-cover animate-reel-fade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-semibold leading-snug">{reel.title}</p>
            <p className="mt-1 text-xs text-white/70">{reel.date}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reel-fade {
          from {
            opacity: 0;
            transform: scale(1.03);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-reel-fade {
          animation: reel-fade 0.4s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-reel-fade {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
