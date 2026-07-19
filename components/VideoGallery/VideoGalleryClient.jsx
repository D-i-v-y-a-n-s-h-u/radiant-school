"use client";

import { useState } from "react";
import GalleryHero from "@/components/VideoGallery/GalleryHero";
import PlatformSwitcher from "@/components/VideoGallery/PlatformSwitcher";
import YouTubeSection from "@/components/VideoGallery/YouTubeSection";
import InstagramSection from "@/components/VideoGallery/InstagramSection";

export default function VideoGalleryClient() {
  const [activeTab, setActiveTab] = useState("youtube");

  return (
    <main className="bg-white dark:bg-neutral-950">
      <GalleryHero />

      <section className="pt-12 pb-24">
        <PlatformSwitcher activeTab={activeTab} onChange={setActiveTab} />
        <div className="mt-12">
          <div
  key={activeTab}
  className="animate-fade-in"
>
  {activeTab === "youtube"
    ? <YouTubeSection />
    : <InstagramSection />}
</div>
        </div>
      </section>
    </main>
  );
}
