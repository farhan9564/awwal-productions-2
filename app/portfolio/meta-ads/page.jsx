import PortfolioNav from "../../../components/PortfolioNav";
import Link from "next/link";
import {
  metaCases,
  archiveScreenshots,
  metaCasePath,
} from "../../../lib/meta-cases.mjs";
import MetaCaseGallery from "../../../components/MetaCaseGallery";
import MetaEvidence from "../../../components/MetaEvidence";
const description =
  "Explore 13 Meta Ads case studies across e-commerce and lead generation, with campaign strategy, dashboard results and original source screenshots.";
export const metadata = {
  title: "Meta Ads Portfolio & Case Studies | Awwal Productions",
  description,
  alternates: { canonical: "/portfolio/meta-ads" },
  openGraph: {
    title: "Meta Ads Portfolio | Awwal Productions",
    description,
    url: "/portfolio/meta-ads",
    images: ["/assets/awwal-full-logo.png"],
  },
};
export default function MetaAdsPortfolio() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Awwal Productions Meta Ads Portfolio",
    url: "https://awwalproductions.com/portfolio/meta-ads",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: metaCases.length,
      itemListElement: metaCases.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: study.name,
        url: `https://awwalproductions.com${metaCasePath(study)}`,
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
        <section className="page-hero meta-report-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio">Portfolio</Link>
              <span>/</span>
              <span>Meta Ads</span>
            </div>
            <span className="eyebrow">AWWAL / PERFORMANCE MARKETING</span>
            <h1>
              Strategy in action.
              <br />
              <span className="text-lime">Results with context.</span>
            </h1>
            <p>
              Meta Ads work across online stores, clinics, property, education
              and service businesses. Explore the challenge, approach and
              campaign evidence behind each project.
            </p>
            <div className="meta-hero-links">
              <a href="#cases" className="btn btn-lime">
                Explore {metaCases.length} case studies ↗
              </a>
              <Link href="/contact" className="btn btn-outline">
                Plan your campaign ↗
              </Link>
            </div>
            <div className="meta-hero-foot">
              <span>E-COMMERCE & LEAD GENERATION</span>
              <span>STRATEGY · CREATIVE TESTING · MEASUREMENT</span>
            </div>
            <PortfolioNav active="/portfolio/meta-ads" />
          </div>
        </section>
        <section id="cases" className="padded-section report-section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The work behind the numbers</span>
                <h2 className="section-title">
                  Different goals.
                  <br />
                  Focused campaigns.
                </h2>
              </div>
              <p className="lead">
                Each case includes its reporting scope and source screenshots.
                Dashboard metrics and reported business revenue are shown
                separately.
              </p>
            </div>
            <MetaCaseGallery />
          </div>
        </section>
        <section className="padded-section report-docs">
          <div className="container">
            <span className="eyebrow">Additional campaign snapshots</span>
            <h2 className="section-title">
              More work.
              <br />
              <span className="text-lime">More campaign evidence.</span>
            </h2>
            <p className="lead">
              Additional messaging tests from the source portfolio. Client
              identities and complete campaign scopes are not established, so
              these remain separate snapshots. Overlapping periods are not added
              together.
            </p>
            <details className="meta-source-notes">
              <summary>Explore additional campaign screenshots</summary>
              <MetaEvidence images={archiveScreenshots} />
            </details>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner">
              <div>
                <span className="eyebrow">Let’s collaborate</span>
                <h2>Build a campaign around your business.</h2>
              </div>
              <Link href="/contact" className="btn btn-lime">
                Discuss your goals ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
