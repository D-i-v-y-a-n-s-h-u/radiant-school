"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

const STAGES = [
  {
    key: "early",
    label: "Early Years",
    grades: "Pre-KG – Grade 2",
    desc: "Play-based, Montessori-inspired learning that builds curiosity, motor skills, and a lifelong love for discovery.",
    points: ["Activity-based numeracy & literacy", "Sensory & motor-skill labs", "Story-telling & phonics circles"],
  },
  {
    key: "primary",
    label: "Primary",
    grades: "Grade 3 – 5",
    desc: "A strong foundation in core subjects paired with design-thinking, coding basics, and collaborative projects.",
    points: ["Integrated STEAM projects", "Introductory coding & robotics", "Peer-learning clubs"],
  },
  {
    key: "middle",
    label: "Middle School",
    grades: "Grade 6 – 8",
    desc: "Deepened subject mastery with electives in the arts, applied sciences, and public speaking.",
    points: ["Elective tracks: arts, media, science", "Model UN & debate", "Career-exploration workshops"],
  },
  {
    key: "senior",
    label: "Senior School",
    grades: "Grade 9 – 12",
    desc: "CBSE Science, Commerce & Humanities streams with dedicated mentors for board and competitive exams.",
    points: ["Science / Commerce / Humanities streams", "IIT-JEE & NEET foundation support", "University counselling cell"],
  },
];

export default function Academics() {
  const ref = useReveal();
  const [active, setActive] = useState(STAGES[0].key);
  const stage = STAGES.find((s) => s.key === active);

  return (
    <section id="academics" ref={ref} className="relative bg-white dark:bg-ink-950 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl" data-reveal="up">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Academic Journey</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white">
            A Curriculum That <span className="text-gradient-amber ">Grows With Your Child</span>
          </h2>
        </div>

        {/* Stage tabs */}
        <div data-reveal="up" data-reveal-delay="100" className="mt-12 flex flex-wrap gap-3">
          {STAGES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 border ${
                active === s.key
                  ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white border-transparent shadow-lg shadow-amber-600/25"
                  : "border-ink-950/10 dark:border-white/10 text-ink-950/70 dark:text-ink-300 hover:border-amber-500/50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Active stage panel */}
        <div
          key={stage.key}
          className="mt-10 grid lg:grid-cols-5 gap-10 card-premium rounded-[2rem] p-8 sm:p-12 animate-fade-up"
        >
          <div className="lg:col-span-2">
            <p className="text-amber-600 font-semibold tracking-wide text-sm">{stage.grades}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-ink-950 dark:text-white">
              {stage.label}
            </h3>
            <p className="mt-4 text-ink-950/65 dark:text-ink-300 leading-relaxed">{stage.desc}</p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
            {stage.points.map((p, i) => (
              <div
                key={p}
                className="rounded-2xl bg-amber-50/60 dark:bg-white/5 p-6 border border-amber-600/10"
              >
                <span className="font-display text-2xl text-amber-600/50">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm font-medium text-ink-950/80 dark:text-ink-300 leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
