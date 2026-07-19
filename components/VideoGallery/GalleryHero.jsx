"use client";

import { Play } from "lucide-react";
import useReveal from "@/hooks/useReveal";

export default function GalleryHero() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-amber-400/20 dark:bg-amber-500/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-amber-500/15 dark:bg-amber-400/10 blur-3xl animate-float-slower" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-amber-300/20 dark:bg-amber-600/10 blur-3xl animate-float-slow" />
      </div>

<div
  ref={ref}
  data-reveal="up"
  className="relative mx-auto max-w-3xl px-6 text-center"
>
        <div className="mb-6 inline-flex items-center justify-center">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30">
            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping-slow opacity-40" />
            <Play className="relative h-6 w-6 fill-white text-white translate-x-0.5" />
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
          Video Gallery
        </h1>
        <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Experience Radiant International School through annual functions,
          campus life, student achievements and daily memories.
        </p>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(18px) translateX(-14px);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          80%,
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-float-slower,
          .animate-ping-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
