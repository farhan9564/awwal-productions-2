import Link from "next/link";
import { featuredWebProjects, webProjects, niches } from "../lib/projects.mjs";
import ProjectCard from "./ProjectCard";
export default function FeaturedWebProjects() {
  return (
    <section className="padded-section work-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow dark">Web Development</span>
            <h2 className="section-title">
              Featured projects.
              <br />
              <span className="shopify-section-accent">Across industries.</span>
            </h2>
          </div>
          <p className="lead">
            Selected website projects for manufacturers, property developers and
            service businesses.
          </p>
        </div>
        <div className="portfolio-project-grid">
          {featuredWebProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              niche={niches.find((niche) => niche.id === project.niche)}
            />
          ))}
        </div>
        <div className="portfolio-home-bottom">
          <span>{webProjects.length} FEATURED WEB DEVELOPMENT PROJECTS</span>
          <Link className="btn btn-dark" href="/portfolio">
            Explore featured projects ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
