import Link from "next/link";
import { niches, shopifyPortfolioPath, projectPath } from "../lib/projects.mjs";
import ProjectCard from "./ProjectCard";
export function shopifyMetadata(project) {
  const title = `${project.name} Shopify Store Development | Awwal Productions`;
  return {
    title,
    description: project.description,
    alternates: { canonical: projectPath(project) },
    openGraph: {
      title,
      description: project.description,
      url: projectPath(project),
      images: ["/assets/awwal-full-logo.png"],
    },
  };
}
export default function ShopifyProjectPage({ project }) {
  const niche = niches.find((niche) => niche.id === project.niche);
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.name} Shopify Store Development`,
    url: `https://awwalproductions.com${projectPath(project)}`,
    description: project.description,
    genre: "Shopify Store Development",
    about: { "@type": "WebSite", url: project.url },
    creator: { "@type": "Organization", name: "Awwal Productions" },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <section className="project-single-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={shopifyPortfolioPath}>Shopify Portfolio</Link>
              <span>/</span>
              <span>{project.name}</span>
            </div>
            <div className="project-single-top">
              <span className="eyebrow">Shopify Store Development</span>
              <span className="single-side-index">{niche.label}</span>
            </div>
            <h1>
              {project.name}
              <span className="single-title-dot">.</span>
            </h1>
            <div className="single-summary-row">
              <p>{project.description}</p>
              <a
                className="btn btn-lime"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Shopify store ↗
              </a>
            </div>
          </div>
        </section>
        <section className="project-featured-section">
          <div className="container">
            <div className="new-project-showcase">
              <ProjectCard project={project} niche={niche} />
            </div>
            <div className="single-project-data">
              <div>
                <span>PLATFORM</span>
                <strong>Shopify</strong>
              </div>
              <div>
                <span>PROJECT TYPE</span>
                <strong>Shopify Store Development</strong>
              </div>
              <div>
                <span>NICHE</span>
                <strong>{niche.label}</strong>
              </div>
              <div>
                <span>LIVE STORE</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {new URL(project.url).hostname} ↗
                </a>
              </div>
            </div>
            <div className="single-links">
              <Link className="btn btn-outline" href={shopifyPortfolioPath}>
                Back to Shopify projects
              </Link>
              <Link className="btn btn-lime" href="/contact">
                Discuss your Shopify store ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
