"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

const TESTIMONIALS = [
  {
    name: "Anjali Mehra",
    role: "Parent, Grade 6",
    quote:
      "Radiant transformed my daughter's confidence. The mentors truly know every child by name — and by strength.",
    initials: "AM",
  },
  {
    name: "Rohan Verma",
    role: "Alumnus, Batch of 2022",
    quote:
      "The foundation I built here got me into a top engineering program. The teachers pushed me further than I thought possible.",
    initials: "RV",
  },
  {
    name: "Sunita Rao",
    role: "Parent, Grade 2",
    quote:
      "From the campus to the curriculum, everything feels intentional. It's the safest, warmest school environment we've seen.",
    initials: "SR",
  },
  {
    name: "Kabir Singh",
    role: "Student, Grade 11",
    quote:
      "Between robotics club and the debate team, I've found parts of myself I didn't know existed. School feels like home.",
    initials: "KS",
  },
];

export default function Testimonials() {
  const ref = useReveal();
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const go = (dir) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative bg-gradient-to-b from-amber-50/60 to-white dark:from-ink-900/40 dark:to-ink-950 py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center" data-reveal="up">
        <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Voices of Radiant</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white">
          Trusted by <span className="text-gradient-amber ">Families Like Yours</span>
        </h2>

        <div key={index} className="mt-14 card-premium rounded-[2rem] p-10 sm:p-14 animate-fade-up">
          {/* Quotation mark */}
          <svg className="mx-auto text-amber-500/30" width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5 4C6 4 3 7 3 11c0 3.3 2.2 5.5 5 5.5.6 3-1.4 5-4 5.5v2c4.4-.5 7.5-3.5 7.5-8.5V4H9.5zm11 0C17 4 14 7 14 11c0 3.3 2.2 5.5 5 5.5.6 3-1.4 5-4 5.5v2c4.4-.5 7.5-3.5 7.5-8.5V4h-2z" />
          </svg>
          <p className="mt-6 text-xl sm:text-2xl font-display text-ink-950 dark:text-white leading-relaxed">
            "{t.quote}"
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center font-semibold">
              {t.initials}
            </div>
            <div className="text-left">
              <p className="font-semibold text-ink-950 dark:text-white">{t.name}</p>
              <p className="text-sm text-ink-950/50 dark:text-ink-300/70">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="h-11 w-11 rounded-full border border-ink-950/10 dark:border-white/15 flex items-center justify-center text-ink-950 dark:text-white hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-amber-600" : "w-2 bg-ink-950/15 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="h-11 w-11 rounded-full border border-ink-950/10 dark:border-white/15 flex items-center justify-center text-ink-950 dark:text-white hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
