"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial glow that follows the cursor within its parent section.
 * Purely decorative; pointer-events are disabled.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(420px circle at ${x}px ${y}px, rgba(124,92,255,0.12), transparent 70%)`;
      });
    };

    section.addEventListener("pointermove", onMove);
    return () => {
      section.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 pointer-events-none transition-[background] duration-300"
    />
  );
}
