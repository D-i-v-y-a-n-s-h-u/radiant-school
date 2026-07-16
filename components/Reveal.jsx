'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Reveal
 * Lightweight, dependency-free scroll-reveal wrapper.
 * Uses IntersectionObserver — no external animation library required.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  from = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    none: '',
  }[from];

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${hiddenTransform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
