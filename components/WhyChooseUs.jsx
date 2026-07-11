"use client";

import useReveal from "@/hooks/useReveal";

const FEATURES = [
  {
    title: "Personalised Mentorship",
    desc: "A 1:12 mentor ratio ensures every child is seen, guided, and challenged to reach their fullest potential.",
    icon: (
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Global Curriculum",
    desc: "CBSE core enriched with design thinking, coding, and global citizenship modules from Grade 1.",
    icon: (
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a13 13 0 010 18M12 3a13 13 0 000 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "State-of-the-Art Campus",
    desc: "15 acres of smart classrooms, science labs, sports arenas and green open spaces designed for growth.",
    icon: (
      <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Safety First",
    desc: "RFID tracking, CCTV-monitored transport, and trained staff ensure complete peace of mind for parents.",
    icon: (
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Arts, Sport &amp; Beyond",
    desc: "50+ clubs spanning robotics, theatre, music and athletics nurture well-rounded personalities.",
    icon: (
      <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.5 21 12 17.3 6.5 21 8 13.4 3 9l6.4-.5L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Proven Results",
    desc: "Consistent 98%+ board results and alumni placed in top universities across 12 countries.",
    icon: (
      <path d="M4 19h16M7 19V9m5 10V4m5 15v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    ),
  },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative bg-amber-50/40 dark:bg-ink-900/40 py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center" data-reveal="up">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Why Families Choose Us</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white">
            Built Around What Truly <span className="text-gradient-amber ">Matters</span>
          </h2>
          <p className="mt-5 text-ink-950/60 dark:text-ink-300 text-lg">
            Every decision on our campus — from classroom design to club schedules — is made with one question in mind: does this help a child thrive?
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              data-reveal="up"
              data-reveal-delay={i * 90}
              className="card-premium rounded-3xl p-8 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shadow-lg shadow-amber-600/25 group-hover:scale-110 transition-transform duration-500">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink-950 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-ink-950/60 dark:text-ink-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
