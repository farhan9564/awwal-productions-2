"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let observer;
    // Opt into reveals only after JS is ready; content stays readable if JS fails.
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => el.classList.add("reveal-ready"));
    if (reduced || !("IntersectionObserver" in window))
      reveals.forEach((el) => el.classList.add("visible"));
    else {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.09, rootMargin: "0px 0px -25px 0px" },
      );
      reveals.forEach((el) => observer.observe(el));
    }
    const cleanups = [];
    const filters = [...document.querySelectorAll(".filter[data-filter]")];
    const cards = [
      ...document.querySelectorAll(".portfolio-project[data-category]"),
    ];
    filters.forEach((button) => {
      const filter = () => {
        filters.forEach((other) => {
          other.classList.toggle("active", other === button);
          other.setAttribute("aria-pressed", String(other === button));
        });
        cards.forEach((card) => {
          card.hidden =
            button.dataset.filter !== "all" &&
            !card.dataset.category.split(/\s+/).includes(button.dataset.filter);
        });
      };
      button.addEventListener("click", filter);
      cleanups.push(() => button.removeEventListener("click", filter));
    });
    document.querySelectorAll("img.site-preview-image").forEach((img) => {
      const fallback = () => {
        img.hidden = true;
        img.classList.remove("is-ready");
        img.closest(".site-preview")?.classList.add("preview-unavailable");
      };
      img.addEventListener("error", fallback);
      if (img.complete && img.naturalWidth === 0) fallback();
      cleanups.push(() => img.removeEventListener("error", fallback));
    });
    const big = document.getElementById("studioHeadline");
    const desc = document.getElementById("studioDescription");
    const phase = document.getElementById("studioPhase");
    let interval;
    if (big && desc && phase && !reduced) {
      const stages = [
        [
          "IDEAS.",
          "IN MOTION.",
          "From the first conversation to the final pixel.",
          "DISCOVER / 01",
        ],
        [
          "DESIGN.",
          "WITH PURPOSE.",
          "Meaningful design that makes every interaction count.",
          "DESIGN / 02",
        ],
        [
          "BUILD.",
          "TO PERFORM.",
          "A robust digital foundation for ambitious brands.",
          "DEVELOP / 03",
        ],
        [
          "GROW.",
          "WITH CLARITY.",
          "Creative thinking meets practical performance.",
          "EVOLVE / 04",
        ],
      ];
      let index = 0;
      interval = setInterval(() => {
        if (document.hidden) return;
        const [headline, emphasis, description, label] =
          stages[++index % stages.length];
        const em = document.createElement("em");
        em.textContent = emphasis;
        big.classList.remove("changing");
        void big.offsetWidth;
        big.classList.add("changing");
        big.replaceChildren(
          document.createTextNode(headline),
          document.createElement("br"),
          em,
        );
        desc.textContent = description;
        phase.textContent = label;
      }, 3200);
    }
    return () => {
      observer?.disconnect();
      clearInterval(interval);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
