"use client";

import useReveal from "@/hooks/useReveal";

const FACILITIES = [
  { title: "Central Library", img: "/facilities/LIBRARY.jpg", desc: "A quiet, well-lit space with an extensive collection of books, journals, and digital resources.", },
  { title: "Maths Lab", img: "/facilities/MATH LAB.jpg", desc: "Interactive learning with models, puzzles, and hands-on mathematical exploration." },
  { title: "Maths Lab", img: "/facilities/MATHS LAB 1.jpg", desc: "Interactive learning with models, puzzles, and hands-on mathematical exploration." },
  { title: "Science Lab", img: "/facilities/COMPOSITE LAB.jpg", desc: "Fully-equipped Physics, Chemistry & Biology labs.", },
  { title: "Computer Lab", img: "/facilities/COMPUTER LAB.jpg", desc: "High-speed workstations with the latest software, supported by dedicated technical staff.", },
  { title: "Computer Lab", img: "/facilities/COMPUTER LAB 1.jpg", desc: "High-speed workstations with the latest software, supported by dedicated technical staff." },
  { title: "Atal Lab", img: "/facilities/ATAL LAB.jpg", desc: "Innovation hub for robotics, coding, AI, electronics & hands-on STEM learning." },
  { title: "Sports Complex", img: "/facilities/PLAYGROUND.jpg", desc: "A multi-purpose court for basketball, badminton, volleyball & indoor courts." },
  { title: "Sports Complex", img: "/facilities/PLAYGROUND 1.jpg", desc: "A multi-purpose court for basketball, badminton, volleyball & indoor courts." },
  { title: "Auditorium", img: "/facilities/AUDITORIUM.jpg", desc: "A large auditorium ideal for events, conferences, and performances." },
  { title: "Auditorium", img: "/facilities/AUDITORIUM 1.jpg", desc: "A large auditorium ideal for events, conferences, and performances." },
];

export default function Facilities() {
  const ref = useReveal();

  return (
    <section id="facilities" ref={ref} className="relative bg-amber-50/40 dark:bg-ink-900/30 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl" data-reveal="up">
          <p className="section-eyebrow text-amber-600 font-semibold uppercase text-xs">Campus Facilities</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink-950 dark:text-white">
            Infrastructure Built for <span className="text-gradient-amber italic">Every Ambition</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {FACILITIES.map((f, i) => (
            <div
              key={f.title}
              data-reveal="scale"
              data-reveal-delay={i * 90}
              className="group relative rounded-3xl overflow-hidden shadow-lg shadow-ink-950/5 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={f.img}
                alt={f.title}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75 max-w-xs">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
