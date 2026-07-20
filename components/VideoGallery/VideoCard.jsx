"use client";

import { memo } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import useReveal from "@/hooks/useReveal";

function VideoCard({ video, onPlay, index }) {
  const ref = useReveal();

  return (
  <div
    ref={ref}
    data-reveal="up"
    style={{ transitionDelay: `${(index % 3) * 80}ms` }}
  >
      <button
        onClick={() => onPlay(video)}
        aria-label={`Play video: ${video.title}`}
        className="group block w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-amber-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={
              video.thumbnail ??
             `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
            }
            alt={video.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md">
              <Play className="h-4 w-4 fill-white text-white translate-x-0.5" />
            </span>
          </span>

          <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
            {video.duration}
          </span>
        </div>

        <div className="p-4 text-left">
          <h4 className="line-clamp-2 text-sm font-semibold text-neutral-900 dark:text-white sm:text-base">
            {video.title}
          </h4>
          <span className="mt-1 inline-block text-xs font-medium text-amber-600 dark:text-amber-400">
            {video.year}
          </span>
        </div>
      </button>
    </div>
  );
}

export default memo(VideoCard);
