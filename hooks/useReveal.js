"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to a container ref and toggles the
 * `.is-visible` class on any descendant carrying a `data-reveal` attribute
 * once it enters the viewport. Pure CSS handles the actual transition
 * (see [data-reveal] rules in globals.css) — no animation libraries used.
 *
 * @param {Object} options
 * @param {number} options.threshold - visibility ratio required to trigger
 * @param {string} options.rootMargin - shrink/grow the trigger box
 */
export default function useReveal({ threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.hasAttribute("data-reveal")
      ? [root, ...root.querySelectorAll("[data-reveal]")]
      : Array.from(root.querySelectorAll("[data-reveal]"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children slightly based on their index for a cascade effect
            const delay = entry.target.dataset.revealDelay || 0;
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return containerRef;
}
