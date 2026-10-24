"use client";
import { useState } from "react";
import { metaCases } from "../lib/meta-cases.mjs";
import MetaCaseCard from "./MetaCaseCard";
export default function MetaCaseGallery() {
  const [active, setActive] = useState("all");
  const visible = metaCases.filter(
    (study) => active === "all" || study.group === active,
  );
  return (
    <>
      <div
        className="work-filters meta-case-filters"
        role="group"
        aria-label="Filter Meta Ads case studies"
      >
        {[
          ["all", "All case studies"],
          ["ecommerce", "E-commerce"],
          ["leads", "Lead generation"],
        ].map(([id, label]) => (
          <button
            key={id}
            className={`filter${id === active ? " active" : ""}`}
            aria-pressed={id === active}
            onClick={() => setActive(id)}
          >
            {label}{" "}
            <span>
              {id === "all"
                ? metaCases.length
                : metaCases.filter((study) => study.group === id).length}
            </span>
          </button>
        ))}
      </div>
      <p className="meta-case-result-count" aria-live="polite">
        Showing {visible.length} case studies
      </p>
      <div className="report-grid">
        {visible.map((study) => (
          <MetaCaseCard
            key={study.slug}
            study={study}
            index={metaCases.indexOf(study)}
          />
        ))}
      </div>
    </>
  );
}
