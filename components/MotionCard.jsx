"use client";
import { useEffect, useRef } from "react";

// A progressive enhancement: native links and content work without motion or JS.
export default function MotionCard({ children, className = "", ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame;
    function reset() {
      cancelAnimationFrame(frame);
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
      element.classList.remove("is-pointed");
    }
    function move(event) {
      if (!preference.matches || event.pointerType === "touch") return;
      const bounds = element.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
        element.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
        element.style.setProperty("--pointer-x", `${x * 100}%`);
        element.style.setProperty("--pointer-y", `${y * 100}%`);
        element.classList.add("is-pointed");
      });
    }
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    preference.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      preference.removeEventListener("change", reset);
    };
  }, []);
  return <article ref={ref} className={`motion-card ${className}`} {...props}>{children}</article>;
}
