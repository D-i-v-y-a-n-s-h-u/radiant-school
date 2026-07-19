"use client";

import { useCallback, useState } from "react";
import FeaturedVideo from "./FeaturedVideo";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import youtubeData, { featuredVideo } from "./youtubeData";

export default function YouTubeSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlay = useCallback((video) => setActiveVideo(video), []);
  const handleClose = useCallback(() => setActiveVideo(null), []);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <FeaturedVideo video={featuredVideo} onPlay={handlePlay} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {youtubeData.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            index={index}
            onPlay={handlePlay}
          />
        ))}
      </div>

      <VideoModal video={activeVideo} onClose={handleClose} />
    </div>
  );
}
