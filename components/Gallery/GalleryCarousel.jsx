// components/Gallery/GalleryCarousel.jsx
"use client";

import { useEffect, useRef, useCallback } from "react";
import GalleryCard from "./GalleryCard";

// Pixels moved per animation frame at ~60fps. Kept low for a premium, unhurried feel.
const SPEED = 0.55;
// How long (ms) to keep the carousel paused after a manual drag/swipe ends.
const RESUME_DELAY = 900;

/**
 * Continuous right-to-left auto-scrolling carousel.
 *
 * - Renders `items` twice back-to-back to create a seamless loop.
 * - Movement is driven entirely by requestAnimationFrame + a single
 *   translateX applied via a ref (no re-renders per frame).
 * - Desktop: hover pauses, mouse drag scrubs the track.
 * - Touch: finger swipe scrubs the track, auto-scroll resumes after release.
 *
 * Props:
 * - items: Array<{ id, image, title }>
 * - onImageClick: (index: number) => void  (index into the original items array)
 */
export default function GalleryCarousel({ items, onImageClick }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  // Mutable animation state that must NOT trigger re-renders.
  const state = useRef({
    translateX: 0,
    singleSetWidth: 0,
    rafId: null,
    isHovered: false,
    isDragging: false,
    dragStartX: 0,
    dragStartTranslate: 0,
    resumeAt: 0,
    lastDragX: 0,
    lastDragTime: 0,
    dragVelocity: 0,
  });

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${-state.current.translateX}px, 0, 0)`;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // Track holds two copies of the item list, so half its scrollWidth is one set.
    state.current.singleSetWidth = track.scrollWidth / 2;
  }, []);

  const wrapTranslate = useCallback(() => {
    const width = state.current.singleSetWidth;
    if (width <= 0) return;
    // Keep translateX within [0, width) so the duplicated set lines up seamlessly.
    while (state.current.translateX >= width) state.current.translateX -= width;
    while (state.current.translateX < 0) state.current.translateX += width;
  }, []);

  // Main animation loop.
  useEffect(() => {
    measure();

    const onResize = () => measure();
    const resizeObserver = new ResizeObserver(onResize);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    window.addEventListener("resize", onResize);

    const tick = () => {
      const s = state.current;
      const now = performance.now();
      const manuallyPaused = s.isDragging || s.isHovered || now < s.resumeAt;

      if (!manuallyPaused && s.singleSetWidth > 0) {
        s.translateX += SPEED;
        wrapTranslate();
        applyTransform();
      }

      s.rafId = requestAnimationFrame(tick);
    };

    state.current.rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(state.current.rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [measure, wrapTranslate, applyTransform]);

  // --- Hover (desktop only, pointer:fine) ---
  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: fine)").matches) {
      state.current.isHovered = true;
    }
  };
  const handleMouseLeave = () => {
    state.current.isHovered = false;
  };

  // --- Pointer drag / swipe (works for mouse, touch, pen) ---
  const handlePointerDown = (e) => {
    const s = state.current;
    s.isDragging = true;
    s.dragStartX = e.clientX;
    s.dragStartTranslate = s.translateX;
    s.lastDragX = e.clientX;
    s.lastDragTime = performance.now();
    s.dragVelocity = 0;
    viewportRef.current?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    const s = state.current;
    if (!s.isDragging) return;

    const delta = e.clientX - s.dragStartX;
    s.translateX = s.dragStartTranslate - delta;
    wrapTranslate();
    applyTransform();

    const now = performance.now();
    const dt = now - s.lastDragTime;
    if (dt > 0) {
      s.dragVelocity = (e.clientX - s.lastDragX) / dt;
      s.lastDragX = e.clientX;
      s.lastDragTime = now;
    }
  };

  const endDrag = (e) => {
    const s = state.current;
    if (!s.isDragging) return;
    s.isDragging = false;
    s.resumeAt = performance.now() + RESUME_DELAY;
    viewportRef.current?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge fade for a premium, bleed-off-screen look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />

      <div
        ref={viewportRef}
        className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-4 sm:gap-6 will-change-transform"
        >
          {[...items, ...items].map((item, i) => (
            <GalleryCard
              key={`${item.id}-${i}`}
              item={item}
              onClick={() => onImageClick(i % items.length)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
