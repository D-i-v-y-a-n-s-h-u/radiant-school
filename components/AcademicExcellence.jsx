"use client";

/**
 * AcademicExcellence.jsx
 * ------------------------------------------------------------------
 * Drop-in replacement for the existing "Academics" section on the
 * homepage. Self-contained — no new files, no new packages, no
 * changes to global CSS, Navbar, Footer, or any other section.
 *
 * `useReveal()` returns a single ref:
 *   const ref = useReveal();
 *   <div ref={ref} data-reveal="up" />
 * The reveal animation itself (opacity/transform + the `.is-visible`
 * class swap) is handled entirely by globals.css — this component
 * never touches opacity/translate classes itself.
 *
 * Assets expected (already referenced per spec):
 *   /public/academics/academics.mp4
 *   /public/academics/poster.jpg
 * ------------------------------------------------------------------
 */

import { useEffect, useRef } from "react";
import { CheckCircle2, MonitorSmartphone, GraduationCap, BookOpenCheck } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const ACHIEVEMENTS = [
  {
    id: "pass-rate",
    title: "100% Pass Rate",
    description: "Consistent, outstanding board results year after year.",
    Icon: CheckCircle2,
  },
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    description: "Interactive, technology-enabled learning spaces.",
    Icon: MonitorSmartphone,
  },
  {
    id: "faculty",
    title: "Experienced Faculty",
    description: "Dedicated educators committed to student success.",
    Icon: GraduationCap,
  },
  {
    id: "curriculum",
    title: "CBSE Curriculum",
    description: "A structured, nationally recognised framework for growth.",
    Icon: BookOpenCheck,
  },
];

/** Merge a plain ref object (from useReveal) with a local ref, onto one node. */
function mergeRefs(revealRef, localRef) {
  return (node) => {
    if (revealRef) revealRef.current = node;
    if (localRef) localRef.current = node;
  };
}

/* -------------------------------------------------------------------- */
/*  Individual achievement card                                          */
/* -------------------------------------------------------------------- */
function AchievementCard({ title, description, Icon, delay }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      data-reveal="up"
      data-reveal-delay={delay}
      className="
        group relative overflow-hidden rounded-2xl
        border border-amber-500/10 dark:border-amber-400/10
        bg-white/40 dark:bg-white/5
        backdrop-blur-xl
        p-6 sm:p-7
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-lg hover:shadow-amber-500/10
        hover:border-amber-500/40 dark:hover:border-amber-400/40
      "
    >
      <div
        className="
          mb-4 flex h-12 w-12 items-center justify-center rounded-xl
          bg-amber-500/10 dark:bg-amber-400/10
          text-amber-600 dark:text-amber-400
          transition-colors duration-300
          group-hover:bg-amber-500/15
        "
      >
        <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-1.5 text-sm sm:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      {/* subtle amber corner glow on hover */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full
          bg-amber-400/0 blur-2xl transition-all duration-500
          group-hover:bg-amber-400/20
        "
      />
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Cinematic video card                                                 */
/* -------------------------------------------------------------------- */
function CinematicVideoCard() {
  const revealRef = useReveal();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    const video = videoRef.current;
    if (!node || !video) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!prefersReducedMotion) {
              // Resumes from wherever currentTime already is — we never
              // touch currentTime or reset src, so this naturally
              // continues from the last position rather than restarting.
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  /* Autoplay was blocked — poster remains visible. */
                });
              }
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Toggle the "playing" gradient overlay directly via a class, driven by
  // the video's real play/pause events — no extra React state needed.
  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    const handlePlay = () => overlay.classList.add("opacity-100");
    const handlePause = () => overlay.classList.remove("opacity-100");

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div
      ref={mergeRefs(revealRef, containerRef)}
      data-reveal="up"
      className="relative mx-auto w-full max-w-[1100px]"
    >
      <div
        className="
          relative aspect-video w-full overflow-hidden rounded-3xl
          border border-amber-500/20 dark:border-amber-400/15
          bg-black/5 dark:bg-black/40
          backdrop-blur-xl
          shadow-[0_0_60px_-15px_rgba(245,158,11,0.35)]
        "
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/academics/video/academics-video-1.mp4"
          poster="/academics/video/poster.jpeg"
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          aria-label="Cinematic showcase of academic life at Radiant International School"
        />

        {/* Dark gradient overlay — only while actively playing */}
        <div
          ref={overlayRef}
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 opacity-0
            bg-gradient-to-t from-black/15 via-transparent to-transparent
            transition-opacity duration-500
          "
        />

        {/* Bottom-left label */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <span className="text-sm sm:text-base font-medium text-white drop-shadow-md">
            Academic Excellence
          </span>
        </div>

        {/* Bottom-right animated LIVE indicator */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-wide text-white drop-shadow-md">
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Main section                                                         */
/* -------------------------------------------------------------------- */
export default function AcademicExcellence() {
  const headingRef = useReveal();

  return (
    <section
      id="academics"
      aria-labelledby="academic-excellence-heading"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div ref={headingRef} data-reveal="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase">
            Academic Excellence
          </span>
          <h2
            id="academic-excellence-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Results That Inspire Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Where academic achievement, innovation and holistic learning come
            together to shape future leaders.
          </p>
          <p className="mt-2 text-sm font-medium tracking-wide text-amber-600/80 dark:text-amber-400/80">
            Results &bull; Innovation &bull; Learning
          </p>
        </div>

        {/* Cinematic video */}
        <div className="mt-12 sm:mt-16">
          <CinematicVideoCard />
        </div>

        {/* Achievement cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((item, index) => (
            <AchievementCard
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
