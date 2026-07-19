"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import useReveal from "@/hooks/useReveal";

export default function FeaturedVideo({ video, onPlay }) {
  const ref = useReveal();

  return (
<div
  ref={ref}
  data-reveal="up"
>
      <button
        onClick={() => onPlay(video)}
        aria-label={`Play featured video: ${video.title}`}
        className="group relative block w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 shadow-xl shadow-neutral-900/5 dark:shadow-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg sm:h-14 sm:w-14">
                <Play className="h-5 w-5 fill-white text-white translate-x-0.5 sm:h-6 sm:w-6" />
              </span>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 text-left sm:p-8">
            <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Featured
            </span>
            <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {video.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
              {video.description}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
