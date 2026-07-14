// components/Programmes/SegmentedTabs.jsx
"use client";

/**
 * SegmentedTabs
 * Apple-style rounded segmented control with a sliding amber active pill.
 * Purely CSS transform driven — no external animation library.
 */
export default function SegmentedTabs({ tabs, activeIndex, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Programmes section switcher"
      className="
        relative mx-auto flex w-full max-w-md items-center
        rounded-full border border-amber-100 bg-white p-1.5
        shadow-sm
        dark:border-white/10 dark:bg-neutral-900
      "
    >
      {/* Sliding active pill */}
      <span
        aria-hidden="true"
        className="
          absolute inset-y-1.5 left-1.5 rounded-full
          bg-amber-500 shadow-md shadow-amber-500/30
          transition-transform duration-300 ease-out
          dark:bg-amber-600
        "
        style={{
          width: `calc(${100 / tabs.length}% - 0.375rem)`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(index)}
            className={`
              relative z-10 flex-1 rounded-full px-3 py-2.5
              text-center text-sm font-medium sm:text-base
              transition-colors duration-300 ease-out
              cursor-pointer
              ${
                isActive
                  ? "text-white"
                  : "text-neutral-600 hover:text-amber-600 dark:text-neutral-300 dark:hover:text-amber-400"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
