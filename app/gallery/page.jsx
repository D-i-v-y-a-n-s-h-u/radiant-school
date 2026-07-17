// app/gallery/page.jsx
"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const CATEGORIES = ["All", "Awards & Ceremony", "Academics","Tour", "Celebrations"];

const GALLERY_ITEMS = [
  { id: 1, title: "Summer Camp", category: "Academics", src: "/Gallery/summer-camp/summer-camp.jpg", tall: true },
  { id: 2, title: "Summer Camp", category: "Academics", src: "/Gallery/summer-camp/summer-camp-1.jpg", tall: true },
  { id: 3, title: "Summer Camp", category: "Academics", src: "/Gallery/summer-camp/summer-camp-2.jpg", tall: true },
  { id: 4, title: "Summer Camp", category: "Academics", src: "/Gallery/summer-camp/summer-camp-3.jpg", tall: true },
  { id: 5, title: "Summer Camp", category: "Academics", src: "/Gallery/summer-camp/summer-camp-4.jpg", tall: true },
  { id: 6, title: "Summer Camp", category: "Academics", src: "/Gallery/summer-camp/summer-camp-5.jpg", tall: true },
  { id: 7, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club.jpg" },
  { id: 8, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club-1.jpg" },
  { id: 9, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club-2.jpg" },
  { id: 10, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club-3.jpg" },
  { id: 11, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club-4.jpg" },
  { id: 12, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club-5.jpg" },
  { id: 13, title: "Club Day", category: "Academics", src: "/Gallery/club-day/club-6.jpg" },
  { id: 14, title: "Internatinal Basketball Court", category: "Academics", src: "/Gallery/international-basketball-court/court.jpg" },
  { id: 15, title: "Internatinal Basketball Court", category: "Academics", src: "/Gallery/international-basketball-court/court-1.jpg" },
  { id: 16, title: "Internatinal Basketball Court", category: "Academics", src: "/Gallery/international-basketball-court/court-2.jpg" },
  { id: 17, title: "Internatinal Basketball Court", category: "Academics", src: "/Gallery/international-basketball-court/court-3.jpg" },
  { id: 18, title: "Internatinal Basketball Court", category: "Academics", src: "/Gallery/international-basketball-court/court-4.jpg" },
  { id: 19, title: "Carrer Mela", category: "Academics", src: "/Gallery/carrer-mela/counselling.jpg", tall: true },
  { id: 20, title: "Carrer Mela", category: "Academics", src: "/Gallery/carrer-mela/counselling-1.jpg", tall: true },
  { id: 21, title: "Carrer Mela", category: "Academics", src: "/Gallery/carrer-mela/counselling-2.jpg", tall: true },
  { id: 22, title: "Carrer Mela", category: "Academics", src: "/Gallery/carrer-mela/counselling-3.jpg", tall: true },
  { id: 23, title: "Carrer Mela", category: "Academics", src: "/Gallery/carrer-mela/counselling-4.jpg", tall: true },
  { id: 24, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth.jpeg" },
  { id: 25, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-1.jpeg" },
  { id: 26, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-2.jpeg" },
  { id: 27, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-3.jpeg" },
  { id: 28, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-4.jpeg" },
  { id: 29, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-5.jpeg" },
  { id: 30, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-6.jpeg" },
  { id: 31, title: "Earth's Day", category: "Celebrations", src: "/Gallery/earth-day/earth-7.jpeg" },
  { id: 32, title: "Environment Day", category: "Celebrations", src: "/Gallery/environment-day/environment.jpg" },
  { id: 33, title: "Environment Day", category: "Celebrations", src: "/Gallery/environment-day/environment-1.jpg" },
  { id: 34, title: "Environment Day", category: "Celebrations", src: "/Gallery/environment-day/environment-2.jpg" },
  { id: 35, title: "Environment Day", category: "Celebrations", src: "/Gallery/environment-day/environment-3.jpg" },
  { id: 36, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour.jpg" },
  { id: 37, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-1.jpg" },
  { id: 38, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-2.jpg" },
  { id: 39, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-3.jpeg" },
  { id: 40, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-4.jpeg" },
  { id: 41, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-5.jpeg" },
  { id: 42, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-6.jpeg" },
  { id: 43, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-7.jpeg" },
  { id: 44, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-8.jpeg" },
  { id: 45, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-9.jpeg" },
  { id: 46, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-10.jpeg" },
  { id: 47, title: "Labour's Day", category: "Celebrations", src: "/Gallery/labour-day/labour-11.jpeg" },
  { id: 48, title: "Yoga Day", category: "Celebrations", src: "/Gallery/yoga-day/yoga-day.jpg", tall: true },
  { id: 49, title: "Yoga Day", category: "Celebrations", src: "/Gallery/yoga-day/yoga-day-1.jpg", tall: true },
  { id: 50, title: "Yoga Day", category: "Celebrations", src: "/Gallery/yoga-day/yoga-day-2.jpg", tall: true },
  { id: 51, title: "Yoga Day", category: "Celebrations", src: "/Gallery/yoga-day/yoga-day-3.jpg", tall: true },
  { id: 52, title: "Yoga Day", category: "Celebrations", src: "/Gallery/yoga-day/yoga-day-front.jpg", tall: true },
  { id: 53, title: "Scholars Award", category: "Awards & Ceremony", src: "/Gallery/scholars-award/scholars.jpg" },
  { id: 54, title: "Scholars Award", category: "Awards & Ceremony", src: "/Gallery/scholars-award/scholars-1.jpg" },
  { id: 55, title: "Scholars Award", category: "Awards & Ceremony", src: "/Gallery/scholars-award/scholars-2.jpg" },
  { id: 56, title: "Scholars Award", category: "Awards & Ceremony", src: "/Gallery/scholars-award/scholars-3.jpg" },
  { id: 57, title: "Investiture Ceremony", category: "Awards & Ceremony", src: "/Gallery/investiture-ceremony/ceremony.jpg" },
  { id: 58, title: "Investiture Ceremony", category: "Awards & Ceremony", src: "/Gallery/investiture-ceremony/ceremony-1.jpg" },
  { id: 59, title: "Investiture Ceremony", category: "Awards & Ceremony", src: "/Gallery/investiture-ceremony/ceremony-2.jpg" },
  { id: 60, title: "Investiture Ceremony", category: "Awards & Ceremony", src: "/Gallery/investiture-ceremony/ceremony-3.jpg" },
  { id: 61, title: "Investiture Ceremony", category: "Awards & Ceremony", src: "/Gallery/investiture-ceremony/ceremony-4.jpg" },
  { id: 62, title: "Investiture Ceremony", category: "Awards & Ceremony", src: "/Gallery/investiture-ceremony/ceremony-5.jpg" },
  { id: 63, title: "Matrix Award", category: "Awards & Ceremony", src: "/Gallery/matrix/matrix.jpeg", tall: true },
  { id: 64, title: "Matrix Award", category: "Awards & Ceremony", src: "/Gallery/matrix/matrix-1.jpeg", tall: true },
  { id: 65, title: "Matrix Award", category: "Awards & Ceremony", src: "/Gallery/matrix/matrix-2.jpeg", tall: true },
  { id: 66, title: "Matrix Award", category: "Awards & Ceremony", src: "/Gallery/matrix/matrix-3.jpeg", tall: true },
  { id: 67, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc.jpg" },
  { id: 68, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc-1.jpg" },
  { id: 69, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc-2.jpeg" },
  { id: 70, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc-3.jpeg" },
  { id: 71, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc-4.jpeg" },
  { id: 72, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc-5.jpeg" },
  { id: 73, title: "NCC", category: "Academics", src: "/Gallery/ncc/ncc-6.jpeg" },
  { id: 74, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra.jpeg" },
  { id: 75, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-1.jpeg" },
  { id: 76, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-2.jpeg" },
  { id: 77, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-3.jpeg" },
  { id: 78, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-4.jpeg" },
  { id: 79, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-5.jpeg" },
  { id: 80, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-6.jpeg" },
  { id: 81, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-7.jpeg" },
  { id: 82, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-8.jpeg" },
  { id: 83, title: "Extra Activities", category: "Academics", src: "/Gallery/extra-activities/extra-9.jpeg" },
  { id: 84, title: "ICAR", category: "Tour", src: "/Gallery/tour/icar.jpg" },
  { id: 85, title: "ICAR", category: "Tour", src: "/Gallery/tour/icar-1.jpg" },
  { id: 86, title: "Indira Gandhi Planetarium", category: "Tour", src: "/Gallery/tour/indira-gandhi-planetarium.jpg", tall: true },
  { id: 87, title: "Indira Gandhi Planetarium", category: "Tour", src: "/Gallery/tour/indira-gandhi-planetarium-1.jpg", tall: true },
  { id: 88, title: "Indira Gandhi Planetarium", category: "Tour", src: "/Gallery/tour/indira-gandhi-planetarium-2.jpg", tall: true },
  { id: 89, title: "Mahabodhi Temple", category: "Tour", src: "/Gallery/tour/mahabodhi-temple.jpg", tall: true },
  { id: 90, title: "Mahabodhi Temple", category: "Tour", src: "/Gallery/tour/mahabodhi-temple-1.jpg", tall: true },
  { id: 91, title: "Mahabodhi Temple", category: "Tour", src: "/Gallery/tour/mahabodhi-temple-2.jpg", },
  { id: 92, title: "Rajgir", category: "Tour", src: "/Gallery/tour/rajgir.jpg", tall: true },
  { id: 93, title: "Rajgir", category: "Tour", src: "/Gallery/tour/rajgir-1.jpg", tall: true },
  { id: 94, title: "Business Award", category: "Awards & Ceremony", src: "/Gallery/1.jpg" },
  { id: 95, title: "Our Champions", category: "Awards & Ceremony", src: "/Gallery/2.jpg" },
  { id: 96, title: "ULLA:The Annual Fete", category: "Celebrations", src: "/Gallery/ullas-the-annual-fete.jpg" },
  { id: 97, title: "Blood Donation Camp", category: "Academics", src: "/Gallery/blood-donation-camp.jpeg" },
];

const STATS = [
  { label: "Campus Moments", value: 150, suffix: "+" },
  { label: "Events", value: 40, suffix: "+" },
  { label: "Years", value: 28, suffix: "+" },
  { label: "Happy Students", value: 5000, suffix: "+" },
];

/* -------------------------------------------------------------------------- */
/* REVEAL ON SCROLL HOOK                                                      */
/* -------------------------------------------------------------------------- */

function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

/* -------------------------------------------------------------------------- */
/* REVEAL WRAPPER COMPONENT                                                   */
/* -------------------------------------------------------------------------- */

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* ANIMATED COUNTER                                                           */
/* -------------------------------------------------------------------------- */

function Counter({ value, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal({ threshold: 0.5 });

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let frame;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* LIGHTBOX                                                                   */
/* -------------------------------------------------------------------------- */

function Lightbox({ items, activeIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  if (activeIndex === null) return null;
  const item = items[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-4 md:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-4 md:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="relative mx-4 flex max-h-[85vh] w-full max-w-4xl flex-col items-center animate-[scaleIn_0.35s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-lg font-semibold text-white md:text-xl">{item.title}</h3>
          <p className="mt-1 text-sm text-white/60">
            {item.category} &middot; {item.year}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                  */
/* -------------------------------------------------------------------------- */

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
  }, [filteredItems.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

 return (
   <>

    <Navbar />

    <main className="w-full overflow-x-hidden bg-white dark:bg-neutral-950 pt-20">
      {/* ---------------------------------------------------------------- */}
      {/* HERO SECTION                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative flex h-[80vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
        <Image
          src="/image/hero(background).png"
          alt="Radiant International School campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <span className="animate-[fadeInUp_0.8s_ease-out] text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            Campus Life
          </span>
          <h1 className="mt-5 animate-[fadeInUp_0.8s_ease-out_0.15s_both] text-5xl font-bold tracking-tight text-white md:text-7xl">
            Gallery
          </h1>
          <p className="mt-6 animate-[fadeInUp_0.8s_ease-out_0.3s_both] text-base leading-relaxed text-white/75 md:text-lg">
            Every photograph tells the story of learning, celebration and unforgettable
            memories at Radiant International School.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-[bounce_2s_infinite]">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-[scrollDot_1.6s_ease-in-out_infinite]" />
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scrollDot {
            0% { transform: translateY(0); opacity: 1; }
            70% { transform: translateY(10px); opacity: 0; }
            100% { transform: translateY(0); opacity: 0; }
          }
        `}</style>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CATEGORY FILTER                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out active:scale-95 ${
                    isActive
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-105"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:scale-105 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---------------------------------------------------------------- */}
        {/* MASONRY GALLERY                                                  */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4 lg:gap-6">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 8) * 60} className="mb-4 break-inside-avoid md:mb-5 lg:mb-6">
              <button
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-md shadow-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 dark:shadow-black/30"
              >
                <div className={`relative w-full ${item.tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* title + year on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-sm font-semibold text-white md:text-base">{item.title}</h3>
                    <p className="mt-1 text-xs text-amber-300/90">{item.year}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATISTICS SECTION                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 dark:bg-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100}>
                <div className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-4xl font-bold text-amber-500 md:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA SECTION                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 py-24">
        {/* watermark logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/school-that-cares.png"
            alt=""
            width={500}
            height={500}
            className="select-none object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Become Part of Our Story
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/90 md:text-lg">
              Experience the vibrant campus life of Radiant International School.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-amber-600 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/80 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* LIGHTBOX                                                         */}
      {/* ---------------------------------------------------------------- */}
 {lightboxIndex !== null && (
    <Lightbox
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
    />
)}
    </main>
      <Footer />
  </>
  );
}