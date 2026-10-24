"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { transitionDestination } from "../lib/navigation.mjs";

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [cycle, setCycle] = useState(0);
  const currentPath = useRef(pathname);
  const minimumEnd = useRef(0);
  const navigationTimer = useRef(null);
  const releaseTimer = useRef(null);
  const safetyTimer = useRef(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const show = () => {
      clearTimeout(navigationTimer.current);
      clearTimeout(releaseTimer.current);
      clearTimeout(safetyTimer.current);
      if (reduced.current) {
        setVisible(false);
        return;
      }
      minimumEnd.current = performance.now() + 520;
      setCycle((value) => value + 1);
      setVisible(true);
      safetyTimer.current = setTimeout(() => setVisible(false), 4500);
    };
    const click = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const destination = transitionDestination(
        window.location.href,
        anchor.href,
        {
          defaultPrevented: event.defaultPrevented,
          button: event.button,
          metaKey: event.metaKey,
          ctrlKey: event.ctrlKey,
          shiftKey: event.shiftKey,
          altKey: event.altKey,
          download: anchor.hasAttribute("download"),
          target: anchor.target,
        },
      );
      if (!destination || reduced.current) return;
      event.preventDefault();
      clearTimeout(navigationTimer.current);
      show();
      navigationTimer.current = setTimeout(() => router.push(destination), 180);
    };
    // Capture internal links before Next's Link handler; same-page anchors and new tabs stay native.
    const popstate = () => {
      if (window.location.pathname !== currentPath.current) show();
    };
    show();
    document.addEventListener("click", click, true);
    window.addEventListener("popstate", popstate);
    return () => {
      document.removeEventListener("click", click, true);
      window.removeEventListener("popstate", popstate);
      clearTimeout(navigationTimer.current);
      clearTimeout(releaseTimer.current);
      clearTimeout(safetyTimer.current);
    };
  }, [router]);

  useEffect(() => {
    currentPath.current = pathname;
    clearTimeout(releaseTimer.current);
    const delay = reduced.current
      ? 0
      : Math.max(300, minimumEnd.current - performance.now());
    releaseTimer.current = setTimeout(() => {
      setVisible(false);
      clearTimeout(safetyTimer.current);
    }, delay);
    return () => clearTimeout(releaseTimer.current);
  }, [pathname]);

  return (
    <div
      className={`logo-transition${visible ? " is-visible" : ""}`}
      aria-hidden="true"
    >
      <div key={cycle} className="logo-transition-content">
        <img src="/assets/awwal-logo.svg" alt="" width="290" height="121" />
        <span className="logo-transition-line" />
      </div>
    </div>
  );
}
