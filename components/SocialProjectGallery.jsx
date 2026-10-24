"use client";
import { useState } from "react";
import { socialProjects } from "../lib/social-projects.mjs";
import SocialProjectCard from "./SocialProjectCard";
export default function SocialProjectGallery() {
  const [filter, setFilter] = useState("all");
  const visible = socialProjects.filter(
    (project) => filter === "all" || filter === project.group,
  );
  return (
    <>
      <div
        className="social-project-filters"
        role="group"
        aria-label="Filter social media projects"
      >
        {[
          ["all", "All brands"],
          ["products", "Products & Retail"],
          ["events", "Weddings & Events"],
          ["photography", "Photography & Films"],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            className={filter === id ? "active" : undefined}
            onClick={() => setFilter(id)}
          >
            {label}
            <span>
              {id === "all"
                ? socialProjects.length
                : socialProjects.filter((project) => project.group === id)
                    .length}
            </span>
          </button>
        ))}
      </div>
      <p className="social-project-count" aria-live="polite">
        Showing {visible.length} Instagram{" "}
        {visible.length === 1 ? "brand" : "brands"}
      </p>
      <div className="social-project-grid">
        {visible.map((project) => (
          <SocialProjectCard
            key={project.handle}
            project={project}
            index={socialProjects.indexOf(project)}
          />
        ))}
      </div>
    </>
  );
}
