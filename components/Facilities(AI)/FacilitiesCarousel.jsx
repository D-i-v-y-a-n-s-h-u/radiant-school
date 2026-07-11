"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import FacilityCard from "./FacilityCard";
import facilities from "./facilitiesData";

// ---- Tunables -------------------------------------------------------
const SPEED = 50; // auto-scroll speed in pixels / second
const RESUME_DELAY = 2500; // ms to wait after touch/drag ends before resuming
// ----------------------------------------------------------------------

export default function FacilitiesCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Continuous scroll offset (not React state — mutated every frame for
  // performance, and written straight to the DOM via style.transform).
  const offsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);

  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastTimeRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const rafRef = useRef(null);

  // Only used to keep isPausedRef and any paused-styling in sync with React.
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Render the list three times so there is always a full set of cards
  // off-screen in either direction — this is what makes the loop and the
  // drag-in-either-direction feel seamless instead of "jumping".
  const loopItems = [...facilities, ...facilities, ...facilities];

  const measure = useCallback(() => {
    if (trackRef.current) {
      singleSetWidthRef.current = trackRef.current.scrollWidth / 3;
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Main animation loop — one requestAnimationFrame subscription for the
  // component's lifetime, so pausing never restarts or resets it.
  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const width = singleSetWidthRef.current;

      if (!isPausedRef.current && !isDraggingRef.current && width > 0) {
        offsetRef.current -= (SPEED * delta) / 1000;
      }

      // Wrap the offset so it always stays within one "set" of cards.
      // Because the content is duplicated, wrapping is invisible.
      if (width > 0) {
        if (offsetRef.current <= -width * 2) offsetRef.current += width;
        if (offsetRef.current >= 0) offsetRef.current -= width;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start roughly centered in the middle copy of the list.
    requestAnimationFrame(() => {
      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 3;
        singleSetWidthRef.current = width;
        offsetRef.current = -width;
      }
    });

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, []);

  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const scheduleResume = () => {
    clearResumeTimeout();
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  };

  // ---- Desktop hover: pause instantly, resume instantly ----
  const handleMouseEnter = () => {
    if (isDraggingRef.current) return;
    clearResumeTimeout();
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) return;
    setIsPaused(false);
  };

  // ---- Pointer events cover both mouse-drag and touch-swipe ----
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    clearResumeTimeout();
    setIsPaused(true);
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + delta;
  };

  const endDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Resume auto-scroll automatically after RESUME_DELAY.
    scheduleResume();
  };

  useEffect(() => () => clearResumeTimeout(), []);

  return (
    <section className="w-full py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 md:mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Our Facilities
        </h2>
        <p className="mt-3 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Explore the world-class amenities designed for your comfort and
          convenience.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {loopItems.map((facility, index) => (
            <FacilityCard key={`${facility.id}-${index}`} facility={facility} />
          ))}
        </div>

        {/* Edge fade masks so cards don't feel like they're cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 bg-gradient-to-r from-gray-50 md:from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 bg-gradient-to-l from-gray-50 md:from-white to-transparent" />
      </div>
    </section>
  );
}
