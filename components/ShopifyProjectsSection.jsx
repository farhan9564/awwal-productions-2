import Link from "next/link";
import {
  shopifyProjects,
  shopifyPortfolioPath,
  niches,
} from "../lib/projects.mjs";
import ProjectCard from "./ProjectCard";
export default function ShopifyProjectsSection() {
  return (
    <section className="padded-section work-section shopify-project-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow dark">Shopify Store Development</span>
            <h2 className="section-title">
              Stores built
              <br />
              <span className="shopify-section-accent">for your products.</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              Explore four Shopify store development projects across fashion,
              activewear and cricket equipment.
            </p>
            <Link className="text-link light" href={shopifyPortfolioPath}>
              View Shopify portfolio ↗
            </Link>
          </div>
        </div>
        <div className="portfolio-project-grid">
          {shopifyProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              niche={niches.find((niche) => niche.id === project.niche)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
