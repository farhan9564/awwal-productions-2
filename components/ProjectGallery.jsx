"use client";
import { useState } from "react";
import { niches, projects } from "../lib/projects.mjs";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery() {
  const [active, setActive] = useState("all");
  const visibleNiches = niches.filter(
    (niche) => active === "all" || active === niche.id,
  );
  return (
    <>
      <div
        className="niche-filter-list"
        role="group"
        aria-label="Filter web development projects by niche"
      >
        <button
          className={`filter${active === "all" ? " active" : ""}`}
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
        >
          All niches <span>{projects.length}</span>
        </button>
        {niches.map((niche) => (
          <button
            key={niche.id}
            className={`filter${active === niche.id ? " active" : ""}`}
            aria-pressed={active === niche.id}
            onClick={() => setActive(niche.id)}
          >
            {niche.label}{" "}
            <span>
              {projects.filter((project) => project.niche === niche.id).length}
            </span>
          </button>
        ))}
      </div>
      <p className="niche-results" aria-live="polite">
        {active === "all"
          ? `${projects.length} projects across ${niches.length} niches`
          : `${projects.filter((project) => project.niche === active).length} projects in ${niches.find((niche) => niche.id === active).label}`}
      </p>
      {visibleNiches.map((niche) => {
        const group = projects.filter((project) => project.niche === niche.id);
        return (
          <section
            key={niche.id}
            className="niche-group"
            aria-labelledby={`niche-${niche.id}`}
          >
            <div className="niche-group-heading">
              <h2 id={`niche-${niche.id}`}>{niche.label}</h2>
              <span>{String(group.length).padStart(2, "0")} PROJECTS</span>
            </div>
            <div className="portfolio-project-grid">
              {group.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  niche={niche}
                />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
