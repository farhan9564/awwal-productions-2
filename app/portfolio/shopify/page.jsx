import Link from "next/link";
import PortfolioNav from "../../../components/PortfolioNav";
import ProjectCard from "../../../components/ProjectCard";
import {
  shopifyProjects,
  shopifyPortfolioPath,
  niches,
  projectPath,
} from "../../../lib/projects.mjs";
const description =
  "Explore Shopify store development projects by Awwal Productions: Fast Apparel, IBH Apparel, JSONS Sports and Iqra Studio.";
export const metadata = {
  title: "Shopify Store Development Portfolio | Awwal Productions",
  description,
  alternates: { canonical: shopifyPortfolioPath },
  openGraph: {
    title: "Shopify Store Development Portfolio",
    description,
    url: shopifyPortfolioPath,
    images: ["/assets/awwal-full-logo.png"],
  },
};
export default function ShopifyPortfolio() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Awwal Productions Shopify Store Development Portfolio",
    url: `https://awwalproductions.com${shopifyPortfolioPath}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: shopifyProjects.length,
      itemListElement: shopifyProjects.map((project, index) => ({
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
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio">Portfolio</Link>
              <span>/</span>
              <span>Shopify Stores</span>
            </div>
            <span className="eyebrow">AWWAL / SHOPIFY STORE DEVELOPMENT</span>
            <h1>
              Made for your brand.
              <br />
              <span className="text-lime">Built on Shopify.</span>
            </h1>
            <p>
              Explore our Shopify store development projects across apparel,
              fashion and cricket equipment.
            </p>
            <PortfolioNav active={shopifyPortfolioPath} />
          </div>
        </section>
        <section className="padded-section work-section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow dark">Shopify Store Development</span>
                <h2 className="section-title">
                  Four stores.
                  <br />
                  <span className="shopify-section-accent">
                    Four brand experiences.
                  </span>
                </h2>
              </div>
              <p className="lead">
                Fast Apparel, IBH Apparel, JSONS Sports and Iqra Studio—each
                with its own products, audience and identity.
              </p>
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
            <p className="portfolio-note">
              Project covers are showcase graphics. Open a project overview or
              visit the live store.
            </p>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner">
              <div>
                <span className="eyebrow">Your next store</span>
                <h2>Bring your products to Shopify.</h2>
              </div>
              <Link className="btn btn-lime" href="/contact">
                Discuss your store ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
