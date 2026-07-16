"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/hero-campus.svg')" }}

      />
      {/* School Sketch */}
      <Image
         src="/image/hero(background).png"
         alt=""
         fill
         priority
         className="
           absolute
           inset-0
           object-cover 
           object-[60%_center]
           pointer-events-none
           select-none
           opacity-[45]
           dark:opacity-[55]
           scale-105
           animate-float-slow
        "
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />

      {/* Floating decorative gradients */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/30 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-10 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-600/20 blur-[120px] animate-float" />
      <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl animate-glow" />
      
      <div
  className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2
    h-[650px]
    w-[650px]
    rounded-full
    bg-amber-500/10
    blur-[140px]
    pointer-events-none
  "
/>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-40 w-full">
        <div className="max-w-3xl">
          {/* Admissions badge */}
<a
  href="https://forms.edunexttechnologies.com/forms/radiant/application/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex
    items-center
    gap-2
    rounded-full
    glass
    px-4
    py-2
    sm:px-5
    text-xs
    sm:text-sm
    font-semibold
    tracking-wide
    text-amber-100
    animate-fade-in
    transition-all
    duration-300
    hover:scale-105
    hover:bg-amber-500/15
    hover:shadow-lg
    hover:shadow-amber-500/20
    cursor-pointer
  "
  style={{ animationDelay: "0.1s", opacity: 0 }}
>
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
  </span>

  <span>Admissions Open • Academic Year 2026–27</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 5l7 7-7 7M5 12h15"
    />
  </svg>
</a>

          <h1
            className="mt-7 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold text-white animate-fade-up"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            Where <span className="text-gradient-amber ">Curiosity</span>
            <br /> Grows Into Character
          </h1>

          <p
            className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s", opacity: 0 }}
          >
            Radiant International School blends a rigorous CBSE curriculum with
            world-class facilities and mentorship — shaping confident learners
            ready for a global future, from Pre-KG to Grade 12.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <a
              href="#admissions"
              className="btn-glow rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold px-8 py-4 shadow-xl shadow-amber-600/30 hover:shadow-amber-600/50 hover:-translate-y-1 transition-all duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="#about"
              className="rounded-full glass text-white font-semibold px-8 py-4 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Take a Campus Tour
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="mt-16 grid grid-cols-3 max-w-lg gap-6 animate-fade-up"
            style={{ animationDelay: "0.75s", opacity: 0 }}
          >
            {[
              ["28+", "Years of Legacy"],
              ["4200+", "Students"],
              ["98%", "Board Success"],
            ].map(([num, label]) => (
              <div key={label} className="border-l border-amber-500/40 pl-4">
                <p className="font-display text-3xl text-white font-semibold">{num}</p>
                <p className="text-xs uppercase tracking-wider text-white/60 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[70px] sm:h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
            className="fill-white dark:fill-ink-950"
          />
        </svg>
      </div>
    </section>
  );
}
