import Link from "next/link";
import ProjectGallery from "../../components/ProjectGallery";
import { projects, projectPath, niches } from "../../lib/projects.mjs";

const description =
  "Explore 25 Awwal Productions web development projects by niche, including sportswear, fashion, property, skincare, embroidery and local services.";
export const metadata = {
  title: "Web Development Portfolio by Niche | Awwal Productions",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Web Development Portfolio by Niche | Awwal Productions",
    description,
    url: "/portfolio",
    siteName: "Awwal Productions",
    images: ["/assets/awwal-full-logo.png"],
  },
};

export default function PortfolioPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Awwal Productions Web Development Portfolio",
    url: "https://awwalproductions.com/portfolio",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: `https://awwalproductions.com${projectPath(project)}`,
      })),
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>PORTFOLIO</span>
            </div>
            <span className="eyebrow">AWWAL PRODUCTIONS / WEB DEVELOPMENT</span>
            <h1>
              Different industries.
              <br />
              <span className="text-lime">One creative partner.</span>
            </h1>
            <p>
              Explore our web development work by niche—from apparel
              manufacturers and online stores to property developers, skincare
              clinics and local services.
            </p>
          </div>
        </section>
        <section className="padded-section work-section">
          <div className="container">
            <div className="portfolio-count-row">
              <span>
                <strong>{projects.length}</strong> web development projects
              </span>
              <span>
                <strong>{String(niches.length).padStart(2, "0")}</strong>{" "}
                industry niches
              </span>
              <Link href="/portfolio/meta-ads" className="text-link light">
                Explore Meta Ads work ↗
              </Link>
            </div>
            <ProjectGallery />
            <p className="portfolio-note">
              Project covers are showcase graphics. Open a project to read its
              overview or visit its website.
            </p>
            <div className="portfolio-bottom-banner">
              <div>
                <span>STRATEGY BEYOND THE WEBSITE</span>
                <h3>Explore our Meta Ads work.</h3>
              </div>
              <Link href="/portfolio/meta-ads" className="btn btn-lime">
                View campaign studies ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner">
              <div>
                <span className="eyebrow">Let’s create your next chapter</span>
                <h2>Have a project in mind?</h2>
              </div>
              <Link href="/contact" className="btn btn-lime">
                Get a project quote ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
