import Link from "next/link";
import {
  socialProjects,
  socialPortfolioPath,
} from "../../../lib/social-projects.mjs";
import PortfolioNav from "../../../components/PortfolioNav";
import SocialProjectGallery from "../../../components/SocialProjectGallery";
const description =
  "Explore Awwal Productions’ social media management portfolio: JSONS Sports, Musa Palace, Legacy by Sheraton, SurgeDent and Noor e Lamhat.";
export const metadata = {
  title: "Social Media Management Portfolio | Awwal Productions",
  description,
  alternates: { canonical: socialPortfolioPath },
  openGraph: {
    title: "Social Media Portfolio | Awwal Productions",
    description,
    url: socialPortfolioPath,
    siteName: "Awwal Productions",
    images: ["/assets/awwal-full-logo.png"],
  },
};
export default function SocialMediaPortfolio() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Awwal Productions Social Media Management Portfolio",
    url: `https://awwalproductions.com${socialPortfolioPath}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: socialProjects.length,
      itemListElement: socialProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: project.url,
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
        <section className="page-hero social-portfolio-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio">Portfolio</Link>
              <span>/</span>
              <span>Social Media</span>
            </div>
            <span className="eyebrow">AWWAL / SOCIAL MEDIA MANAGEMENT</span>
            <h1>
              Every brand has a story.
              <br />
              <span className="text-lime">Make yours recognisable.</span>
            </h1>
            <p>
              Explore our social media management portfolio across cricket,
              events, dental instruments and wedding photography. Visit each
              Instagram profile to see the brand’s social presence.
            </p>
            <div className="meta-hero-links">
              <a href="#social-projects" className="btn btn-lime">
                Explore {socialProjects.length} brands ↗
              </a>
              <Link
                href="/services/social-media-management"
                className="btn btn-outline"
              >
                Our social media services ↗
              </Link>
            </div>
            <PortfolioNav active={socialPortfolioPath} />
          </div>
        </section>
        <section
          className="padded-section social-portfolio-section"
          id="social-projects"
        >
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Selected Instagram projects</span>
                <h2 className="section-title">
                  Different niches.
                  <br />
                  <span className="text-lime">Distinct identities.</span>
                </h2>
              </div>
              <p className="lead">
                Five brands, each with its own audience, visual character and
                content focus.
              </p>
            </div>
            <SocialProjectGallery />
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner">
              <div>
                <span className="eyebrow">
                  Let’s shape your social presence
                </span>
                <h2>Give your brand a clearer voice.</h2>
              </div>
              <Link href="/contact" className="btn btn-lime">
                Discuss social media management ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
