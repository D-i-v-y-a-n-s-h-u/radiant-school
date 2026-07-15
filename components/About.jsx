"use client";

import useReveal from "@/hooks/useReveal";

const HIGHLIGHTS = [
  "CBSE-affiliated curriculum enriched with global pedagogy",
  "15-acre green campus with modern infrastructure",
  "1:12 teacher-to-student mentorship ratio",
  "Holistic focus on academics, arts, sport & values",
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="relative bg-white dark:bg-ink-950 py-28 lg:py-36 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image column */}
        <div data-reveal="left" className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-ink-950/10">
            <img
              src="/hero.jpg"
              alt="Radiant International School campus"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-8 -right-6 sm:-right-10 card-premium rounded-2xl px-6 py-5 w-56">
            <p className="font-display text-3xl font-semibold text-amber-600">28+</p>
            <p className="text-xs uppercase tracking-wider text-ink-950/50 dark:text-ink-300/70 mt-1">
              Years shaping futures
            </p>
          </div>
          <div className="absolute -top-8 -left-6 h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-600/30 hidden sm:flex items-center justify-center animate-float">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3L2 8l10 5 10-5-10-5z"
                fill="#fff"
              />
              <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="#fff" strokeWidth="1.6" fill="none" />
            </svg>
          </div>
        </div>

        {/* Text column */}
        <div data-reveal="right">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">About Our School</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white leading-tight">
            A Legacy of Nurturing <span className="text-gradient-amber ">Tomorrow's Leaders</span>
          </h2>
          <p className="mt-6 text-ink-950/70 dark:text-ink-300 leading-relaxed text-lg">
            Since 1998, Radiant International School has stood as a beacon of
            academic distinction and character education. We believe every
            child carries a unique spark — our role is to provide the
            environment, mentors, and opportunities for that spark to become
            a lifelong flame of curiosity, empathy, and leadership.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item, i) => (
              <li
                key={item}
                data-reveal="up"
                data-reveal-delay={i * 100}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-ink-950/80 dark:text-ink-300">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#academics"
            className="mt-10 inline-flex items-center gap-2 text-amber-600 font-semibold group"
          >
            Discover our academic philosophy
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
