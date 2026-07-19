"use client";

import { PlayCircle, Clapperboard } from "lucide-react";

const TABS = [
  { key: "youtube", label: "YouTube Videos", icon: PlayCircle },
  { key: "instagram", label: "Instagram Reels", icon: Clapperboard },
];

export default function PlatformSwitcher({ activeTab, onChange }) {
  const activeIndex = TABS.findIndex((tab) => tab.key === activeTab);

  return (
    <div className="flex justify-center px-6">
      <div
        role="tablist"
        aria-label="Video platform"
        className="relative inline-flex rounded-full border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-1.5 shadow-sm"
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-1.5 w-[calc(50%-0.375rem)] rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-md shadow-amber-500/30 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.key)}
              className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 sm:px-6 ${
                isActive
                  ? "text-white"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
