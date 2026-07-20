"use client";

/**
 * InstitutionNetwork.jsx
 * ---------------------------------------------------------------------------
 * "Our Educational Ecosystem" — replaces the CTA band above the footer.
 *
 * Shows Radiant International School as one campus inside the wider
 * Indirapuram Group of Institutions network: a city selector, animated
 * institution cards, a live map, animated stats, a founding timeline and
 * an achievement strip.
 *
 * Stack notes
 * - Tailwind utility classes only, plus a small <style jsx> block for the
 *   handful of keyframes Tailwind doesn't ship (line-draw, float, shimmer).
 * - No animation libraries — all motion is CSS transitions/keyframes driven
 *   by React state and IntersectionObserver.
 * - Respects prefers-reduced-motion throughout (motion-reduce: variants +
 *   a JS check for the count-up / line-draw effects).
 * - Colors are expressed with Tailwind's amber/neutral scales so they pick
 *   up the site's existing light/dark theme automatically via `dark:`.
 *   Swap the `amber-*` classes for your exact brand tokens if you use a
 *   custom Tailwind color name (e.g. `brand-` ) instead.
 *
 * Usage
 * -------------------------------------------------------------------------
 *   import InstitutionNetwork from "@/components/InstitutionNetwork";
 *   ...
 *   <InstitutionNetwork />
 * -------------------------------------------------------------------------
 */

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------------ */
/*  Data — swap in real copy / phone numbers / links here                    */
/* ------------------------------------------------------------------------ */

const CITIES = [
  { id: "patna", name: "Patna", count: 4 },
  { id: "delhi-ncr", name: "Delhi NCR", count: 3 },
  { id: "ayodhya", name: "Ayodhya", count: 1 },
  { id: "noida", name: "Noida", count: 1 },
];

const INSTITUTIONS = [
  {
    id: "ris-patna",
    cityId: "patna",
    flagship: true,
    name: "Radiant International School, Patna",
    address: "Radiant International School Khagual, Saguna Khagaul Rd, Mustafapur, Patna, Bihar 801105, India",
    phone: "+91-7281977779 / 9334488601",
  },
  {
    id: "rps-rajendranagar",
    cityId: "patna",
    name: "Tapindu Institute of Higher Studies, Patna",
    address: "Khagual, Saguna Khagaul Rd, Mustafapur, Patna, Bihar 801105, India",
    phone: "+91-9693204648 / 7488048777",
  },
  {
    id: "rga-boringroad",
    cityId: "patna",
    name: "Indirapuram Public School Girls, Patna",
    address: "Danapur - Khagaul Rd, Urja Nagar, Ram Krishna Puram, Danapur Nizamat, Patna, Bihar 801503",
    phone: "+91-7280999276 / 7280999277",
  },
  {
    id: "rkp-kankarbagh",
    cityId: "patna",
    name: "M.S. Institute of Education, Patna",
    address: "Plot no 658, Cantt Road, Mustafapur, Khagaul, Danapur, Patna, Bihar 801105",
    phone: "+91-9798247636 / 7519949080",
  },
  {
    id: "ips-indirapuram",
    cityId: "delhi-ncr",
    name: "Indirapuram Public School, Pratap Vihar",
    address: "C-Block, Sector 12, Mirzapur, Pratap Vihar, Ghaziabad, Uttar Pradesh 201009",
    phone: "0120-2840031 / 9560994650",
  },
  {
    id: "ris-vaishali",
    cityId: "delhi-ncr",
    name: "Indirapuram Institute of Higher Studies",
    address: "Vishisht Shiksha Bhookhand, Nyay Khand-1, Indirapuram, Ghaziabad (UP)-201014",
    phone: "0120-2607101 / 9560994642",
  },
  {
    id: "rcs-indirapuram",
    cityId: "delhi-ncr",
    name: "Indirapuram Public School, Indirapuram",
    address: "6, Road No. 5, Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
    phone: "0120-2607103 / 9560994644",
  },
  {
    id: "ris-ayodhya",
    cityId: "ayodhya",
    name: "Indirapuram Public School, Ayodhya",
    address: "Turkauli, Ballipur, Nagwa, Uttar Pradesh 271303",
    phone: "+91-9838202487 / 9838202488",
  },
  {
    id: "rgs-noida",
    cityId: "noida",
    name: "Indirapuram Public School, Crossings Republik",
    address: "Plot No. EF-7 & 8B, Vill. Dundahera, Crossings Republik, NH-24, Ghaziabad (U.P.)",
    phone: "+91-9560994654 / 9560994651",
  },
];

const STATS = [
  { id: "institutions", value: 9, suffix: "+", label: "Institutions" },
  { id: "cities", value: 4, suffix: "", label: "Cities" },
  { id: "years", value: 30, suffix: "+", label: "Years of Excellence" },
  { id: "students", value: 12000, suffix: "+", label: "Students" },
];

const TIMELINE = [
  { year: 2002, label: "Founded" },
  { year: 2005, label: "Expansion" },
  { year: 2014, label: "New Campus" },
  { year: 2020, label: "International Programs" },
  { year: 2026, label: "Digital Classroom Learning" },
];

const ACHIEVEMENTS = [
  { icon: "trophy", text: "30+ Years" },
  { icon: "cap", text: "12,000+ Alumni" },
  { icon: "star", text: "CBSE Affiliated" },
  { icon: "globe", text: "Global Learning" },
];

/* ------------------------------------------------------------------------ */
/*  Small inline icon set (no external icon dependency)                      */
/* ------------------------------------------------------------------------ */

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

const Icon = {
  Pin: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...iconProps} {...p}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...iconProps} {...p}>
      <path d="M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 6.5 6.5l1.5-2L20 16v3a2 2 0 0 1-2 2C10.8 21 3 13.2 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  Globe: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...iconProps} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...iconProps} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Trophy: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" {...iconProps} {...p}>
      <path d="M7 4h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
      <path d="M7 5H4a3 3 0 0 0 3 4M17 5h3a3 3 0 0 1-3 4" />
      <path d="M12 13v3M9 20h6M10 17h4v3h-4z" />
    </svg>
  ),
  Cap: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" {...iconProps} {...p}>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" {...iconProps} {...p}>
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L12 3Z" />
    </svg>
  ),
};

const AchievementIcon = { trophy: Icon.Trophy, cap: Icon.Cap, star: Icon.Star, globe: Icon.Globe };

/* ------------------------------------------------------------------------ */
/*  Hooks                                                                     */
/* ------------------------------------------------------------------------ */

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]);
  return inView;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

function useCountUp(end, inView, reduced, duration = 1600) {
  const [value, setValue] = useState(reduced ? end : 0);
  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(end);
      return;
    }
    let raf;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration, reduced]);
  return value;
}

/* ------------------------------------------------------------------------ */
/*  Reveal-on-scroll wrapper                                                  */
/* ------------------------------------------------------------------------ */

function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.15);
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------------ */
/*  Institution card                                                         */
/* ------------------------------------------------------------------------ */

function InstitutionCard({ institution, index, onFocusMap, isMapFocus }) {
  const initials = institution.name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("") || institution.name[0];

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    institution.address
  )}`;

  return (
    <li
      key={institution.id}
      className="card-enter list-none"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div
        className={`group relative h-full rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 ease-out
        border-neutral-200/70 bg-white/70 shadow-sm
        hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-15px_rgba(217,119,6,0.35)]
        dark:border-white/10 dark:bg-white/[0.04]
        motion-reduce:transition-none motion-reduce:hover:translate-y-0
        ${isMapFocus ? "ring-1 ring-amber-400/70 border-amber-400/60" : ""}`}
      >
        {/* amber glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120px 80px at 20% 0%, rgba(245,158,11,0.16), transparent 70%)",
          }}
        />

        {institution.flagship && (
          <span className="absolute -top-2.5 right-5 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
            Flagship
          </span>
        )}

        <div className="relative flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-sm font-bold text-white shadow-md transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
            aria-hidden="true"
          >
            {initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold leading-snug text-neutral-900 dark:text-white">
              {institution.name}
            </h3>
          </div>
        </div>

        <div className="relative mt-4 space-y-2 overflow-hidden">
          <p className="flex gap-2 text-sm text-neutral-500 transition-transform duration-500 ease-out group-hover:translate-x-1 dark:text-neutral-400">
            <Icon.Pin className="mt-0.5 shrink-0 text-amber-500" />
            <span>{institution.address}</span>
          </p>
          <a
            href={`tel:${institution.phone.replace(/\s+/g, "")}`}
            className="flex w-fit items-center gap-2 rounded-md text-sm text-neutral-500 transition-colors hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:text-neutral-400 dark:hover:text-amber-400"
          >
            <Icon.Phone className="text-amber-500" />
            {institution.phone}
          </a>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2">
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => onFocusMap(institution.id)}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:text-amber-400"
          >
            <Icon.Pin />
            View on Map
          </a>
          {institution.website && (
            <a
              href={institution.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Icon.Globe />
              Visit Website
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => onFocusMap(institution.id)}
          className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label={`Show ${institution.name} on the map below`}
        />
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------------ */
/*  Main section                                                             */
/* ------------------------------------------------------------------------ */

export default function InstitutionNetwork() {
  const [activeCity, setActiveCity] = useState(CITIES[0].id);
  const [mapFocusId, setMapFocusId] = useState(
    INSTITUTIONS.find((i) => i.cityId === CITIES[0].id).id
  );
  const reduced = usePrefersReducedMotion();

  const filtered = useMemo(
    () => INSTITUTIONS.filter((i) => i.cityId === activeCity),
    [activeCity]
  );

  // keep map focus in sync with the active city
  useEffect(() => {
    if (!filtered.some((i) => i.id === mapFocusId)) {
      setMapFocusId(filtered[0]?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCity]);

  const mapInstitution =
    INSTITUTIONS.find((i) => i.id === mapFocusId) || filtered[0];

  /* --- desktop tab indicator (signature "network rail" element) --- */
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });

  useLayoutEffect(() => {
    const idx = CITIES.findIndex((c) => c.id === activeCity);
    const el = tabRefs.current[idx];
    if (el) setIndicator({ top: el.offsetTop, height: el.offsetHeight });
  }, [activeCity]);

  function handleTabKeyDown(e, idx) {
    let next = null;
    if (e.key === "ArrowDown") next = (idx + 1) % CITIES.length;
    if (e.key === "ArrowUp") next = (idx - 1 + CITIES.length) % CITIES.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = CITIES.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActiveCity(CITIES[next].id);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <section
      id="our-network"
      aria-labelledby="our-network-heading"
      className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white py-24 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950 sm:py-32"
    >
      {/* ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(217,119,6,0.25) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------------------------------------------------------- header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            <span className="h-px w-6 bg-amber-500" />
            Our Network
            <span className="h-px w-6 bg-amber-500" />
          </span>
<h2
  id="our-network-heading"
  className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-neutral-900 dark:text-white"
>
            Part of the Indirapuram Group of Institutions
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
            Empowering learners through a network of prestigious educational
            institutions across multiple cities.
          </p>
        </Reveal>

        {/* ---------------------------------------------------------- body */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* ---- desktop vertical tabs ---- */}
          <Reveal delay={100} className="hidden lg:block">
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Select a city"
              className="relative border-l border-neutral-200 pl-0 dark:border-white/10"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 w-[3px] rounded-full bg-amber-500 transition-all duration-500 ease-out motion-reduce:transition-none"
                style={{ top: indicator.top, height: indicator.height }}
              />
              {CITIES.map((city, idx) => {
                const active = city.id === activeCity;
                return (
                  <button
                    key={city.id}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    role="tab"
                    id={`city-tab-${city.id}`}
                    aria-selected={active}
                    aria-controls={`city-panel-${city.id}`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setActiveCity(city.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                    className={`group flex w-full items-center justify-between rounded-r-xl px-6 py-4 text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950
                    ${
                      active
                        ? "bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-neutral-100"
                    }`}
                  >
                    <span className="text-[15px] font-medium">{city.name}</span>
                    <span
                      className={`ml-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-semibold transition-colors duration-300 ${
                        active
                          ? "bg-amber-500 text-white"
                          : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-400"
                      }`}
                    >
                      {String(city.count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* ---- mobile accordion ---- */}
          <Reveal delay={100} className="lg:hidden">
            <div className="space-y-3">
              {CITIES.map((city) => (
                <details
                  key={city.id}
                  open={city.id === activeCity}
                  onToggle={(e) => {
                    if (e.target.open) setActiveCity(city.id);
                  }}
                  className="group overflow-hidden rounded-xl border border-neutral-200 bg-white/70 transition-colors dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 marker:content-none">
                    <span className="flex items-center gap-3 text-[15px] font-medium text-neutral-800 dark:text-neutral-100">
                      {city.name}
                      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-500/15 px-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                        {String(city.count).padStart(2, "0")}
                      </span>
                    </span>
                    <Icon.Chevron className="text-neutral-400 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  {city.id === activeCity && (
                    <div className="border-t border-neutral-200 px-4 pb-4 pt-4 dark:border-white/10">
                      <ul className="grid grid-cols-1 gap-4">
                        {filtered.map((inst, i) => (
                          <InstitutionCard
                            key={inst.id}
                            institution={inst}
                            index={i}
                            onFocusMap={setMapFocusId}
                            isMapFocus={inst.id === mapFocusId}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </details>
              ))}
            </div>
          </Reveal>

          {/* ---- institution grid (desktop) + live map ---- */}
          <div className="hidden lg:block">
            <p aria-live="polite" className="sr-only">
              Showing {filtered.length} institutions in{" "}
              {CITIES.find((c) => c.id === activeCity)?.name}
            </p>
            <ul
              key={activeCity}
              className="grid grid-cols-2 gap-6"
              id={`city-panel-${activeCity}`}
              role="tabpanel"
              aria-labelledby={`city-tab-${activeCity}`}
            >
              {filtered.map((inst, i) => (
                <InstitutionCard
                  key={inst.id}
                  institution={inst}
                  index={i}
                  onFocusMap={setMapFocusId}
                  isMapFocus={inst.id === mapFocusId}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------------- live map */}
        {mapInstitution && (
          <Reveal delay={150} className="mt-10 lg:ml-[348px]">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-white/10">
              <div className="flex items-center justify-between gap-3 bg-white px-5 py-3 dark:bg-neutral-900">
                <p className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  </span>
                  {mapInstitution.name}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    mapInstitution.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-amber-600 hover:underline dark:text-amber-400"
                >
                  Open in Google Maps
                </a>
              </div>
              <div key={mapInstitution.id} className="map-fade h-[320px] w-full sm:h-[380px]">
                <iframe
                  title={`Map showing ${mapInstitution.name}`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    mapInstitution.address
                  )}&output=embed`}
                />
              </div>
            </div>
          </Reveal>
        )}

        {/* ---------------------------------------------------------- stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-y border-neutral-200 py-12 sm:grid-cols-4 dark:border-white/10">
          {STATS.map((stat, i) => (
            <StatCounter key={stat.id} stat={stat} delay={i * 100} reduced={reduced} />
          ))}
        </div>

        {/* ---------------------------------------------------------- timeline */}
        <Reveal delay={100} className="mt-24">
          <h3 className="text-center font-display text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
            Two decades of growth
          </h3>
          <Timeline reduced={reduced} />
        </Reveal>

        {/* ---------------------------------------------------------- achievement strip */}
        <Reveal delay={150} className="mt-20">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 px-8 py-8 dark:bg-amber-400/[0.06]">
            {ACHIEVEMENTS.map((item, i) => {
              const AIcon = AchievementIcon[item.icon];
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-neutral-800 dark:text-neutral-100"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 float-icon dark:text-amber-400"
                    style={{ animationDelay: `${i * 300}ms` }}
                  >
                    <AIcon />
                  </span>
                  <span className="text-sm font-semibold tracking-wide sm:text-base">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.card-enter) {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 0.84, 0.44, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.card-enter) {
            animation: none;
          }
        }

        @keyframes mapFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        :global(.map-fade) {
          animation: mapFade 0.5s ease-out both;
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        :global(.float-icon) {
          animation: floatY 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.float-icon) {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/*  Stat counter                                                             */
/* ------------------------------------------------------------------------ */

function StatCounter({ stat, delay, reduced }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.4);
  const value = useCountUp(stat.value, inView, reduced);

  return (
    <div ref={ref} className="text-center" style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-display text-4xl sm:text-5xl font-black tabular-nums text-neutral-900 dark:text-white">
        {value.toLocaleString("en-IN")}
        <span className="text-amber-500">{stat.suffix}</span>
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:text-sm dark:text-neutral-400">
        {stat.label}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/*  Timeline                                                                 */
/* ------------------------------------------------------------------------ */

function Timeline({ reduced }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.3);

  return (
    <div ref={ref} className="mt-10 overflow-x-auto pb-2">
      <ol className="relative mx-auto flex min-w-[640px] max-w-4xl items-start justify-between px-4">
        <span
          aria-hidden="true"
          className="absolute left-4 right-4 top-[7px] h-px bg-neutral-200 dark:bg-white/10"
        />
        <span
          aria-hidden="true"
          className="absolute left-4 top-[7px] h-px origin-left bg-amber-500 transition-transform duration-[1400ms] ease-out motion-reduce:transition-none"
          style={{
            right: "1rem",
            transform: inView || reduced ? "scaleX(1)" : "scaleX(0)",
          }}
        />
        {TIMELINE.map((item) => (
          <li key={item.year} className="relative z-10 flex flex-col items-center px-2 text-center">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-amber-500 bg-white dark:bg-neutral-950" />
            <span className="mt-3 text-sm font-semibold text-neutral-900 dark:text-white">
              {item.year}
            </span>
            <span className="mt-0.5 max-w-[9rem] text-xs text-neutral-500 dark:text-neutral-400">
              {item.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
