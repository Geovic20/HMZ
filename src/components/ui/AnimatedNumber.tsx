"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  format: (n: number) => string;
  duration?: number;
  className?: string;
}

/**
 * Fait défiler un nombre de sa valeur précédente vers la nouvelle.
 * Les lecteurs d'écran ne reçoivent que la valeur finale ; animation coupée si « réduire les animations ».
 */
export function AnimatedNumber({ value, format, duration = 650, className }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    fromRef.current = value;
    if (from === value) return;

    // Pas d'animation si l'utilisateur la refuse, ou si l'onglet est caché (requestAnimationFrame y est suspendu).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.hidden) {
      const id = setTimeout(() => setDisplay(value));
      return () => clearTimeout(id);
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <span className={className}>
      <span aria-hidden="true">{format(display)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}
