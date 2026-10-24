import Link from "next/link";
import { projectPath } from "../lib/projects.mjs";

export default function ProjectCard({ project, niche }) {
  const domain = new URL(project.url).hostname;
  return (
    <article
      className="portfolio-project niche-project"
      data-niche={project.niche}
    >
      <Link
        className="portfolio-art-link"
        href={projectPath(project)}
        prefetch={false}
        aria-label={`View ${project.name} project`}
      >
        <div
          className="niche-project-art"
          style={{ "--niche-accent": niche.color }}
        >
          <div className="niche-browser-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>{domain}</span>
            <span aria-hidden="true">↗</span>
          </div>
          {project.image ? (
            <img
              className="niche-cover"
              src={project.image}
              width="1200"
              height="780"
              loading="lazy"
              alt={`${project.name} project showcase graphic`}
            />
          ) : (
            <div className="niche-type-cover">
              <span className="niche-cover-label">WEB DEVELOPMENT / AWWAL</span>
              <strong>{project.name}</strong>
              <p>{project.specialty}</p>
              <span className="niche-cover-cta">
                EXPLORE PROJECT <span aria-hidden="true">↗</span>
              </span>
            </div>
          )}
          <span className="niche-cover-caption">PROJECT SHOWCASE</span>
        </div>
      </Link>
      <div className="project-caption">
        <div className="project-caption-left">
          <div className="project-type">{niche.label}</div>
          <h3>
            <Link href={projectPath(project)} prefetch={false}>
              {project.name}
            </Link>
          </h3>
          <p>{project.specialty}</p>
        </div>
        <a
          className="project-arrow"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} website`}
        >
          ↗
        </a>
      </div>
    </article>
  );
}
