import FeaturedWebProjects from "../../components/FeaturedWebProjects";
import PortfolioNav from "../../components/PortfolioNav";
import Link from "next/link";
import ProjectGallery from "../../components/ProjectGallery";
import {
  webProjects as projects,
  projectPath,
  webNiches as niches,
} from "../../lib/projects.mjs";

const description =
  "Explore featured Fast Apparel Factory and Al Badar Impex projects, plus 21 Awwal Productions web development projects by niche, including sportswear, fashion, property, skincare, embroidery and local services.";
export const metadata = {
  title: "Featured Web Development Projects | Awwal Productions",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Featured Web Development Projects | Awwal Productions",
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
    name: "Awwal Productions Featured Web Development Projects",
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
              Featured projects.
              <br />
              <span className="text-lime">Built for different businesses.</span>
            </h1>
            <p>
              Explore our web development work by niche—from apparel
              manufacturers to property developers, skincare clinics and local
              services.
            </p>
            <PortfolioNav active="/portfolio" />
          </div>
        </section>
        <FeaturedWebProjects />
        <section className="padded-section work-section" id="all-web-projects">
          <div className="container">
            <h2 className="section-title">All web development projects.</h2>
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
              Explore actual website homepage previews. Open a project to read its
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
