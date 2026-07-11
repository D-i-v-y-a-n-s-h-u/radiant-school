"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 28, suffix: "+", label: "Years of Legacy" },
  { value: 4200, suffix: "+", label: "Students Enrolled" },
  { value: 98, suffix: "%", label: "Board Exam Success" },
  { value: 65, suffix: "+", label: "Expert Faculty" },
];

const ACCREDITATIONS = [
  "CBSE Affiliated",
  "ISO 21001:2018 Certified",
  "Council for Global Education",
  "Green Campus Award",
  "Safe School Certified",
  "National Excellence in Education",
];

/**
 * Counter — animates from 0 to `value` once it enters the viewport.
 */
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // Ease-out cubic for a smooth deceleration
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-semibold text-gradient-amber">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative bg-white dark:bg-ink-950 py-16 -mt-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 border-b border-ink-950/8 dark:border-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-ink-950/50 dark:text-ink-300/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Accreditation marquee */}
        <div className="mt-10 overflow-hidden">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-ink-950/40 dark:text-ink-300/50 mb-6">
            Recognized &amp; Accredited By
          </p>
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-14 animate-marquee whitespace-nowrap">
              {[...ACCREDITATIONS, ...ACCREDITATIONS].map((item, i) => (
                <span
                  key={i}
                  className="text-sm sm:text-base font-medium text-ink-950/60 dark:text-ink-300/70 tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
