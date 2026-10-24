import MotionCard from "../../components/MotionCard";
import Link from "next/link";

export const metadata = {
  title: "Website, Shopify & Digital Marketing Services | Awwal",
  description:
    "Explore website development, Shopify store design, Meta and Google Ads, and social media management for B2B, retail and international brands.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Website, Shopify & Digital Marketing Services | Awwal",
    description:
      "Explore website development, Shopify store design, Meta and Google Ads, and social media management for B2B, retail and international brands.",
    url: "/services",
    siteName: "Awwal Productions",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/awwal-full-logo.png", alt: "Awwal Productions" }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/services#webpage", "url": "https://awwalproductions.com/services", "name": "Website, Shopify & Digital Marketing Services | Awwal", "description": "Explore website development, Shopify store design, Meta and Google Ads, and social media management for B2B, retail and international brands.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/services#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Website, Shopify & Digital Marketing Services", "item": "https://awwalproductions.com/services"}]}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Website, Shopify & Digital Marketing Services"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"SERVICES"}</span>
            </div>
            <span className="eyebrow">{"AWWAL PRODUCTIONS / SERVICES"}</span>
            <h1>
              {"Services that "}
              <br />
              <span className="text-lime">{"work together."}</span>
            </h1>
            <p>
              {
                "Awwal Productions helps brands launch, improve and promote their digital presence through custom web development, Shopify, paid advertising and social media management."
              }
            </p>
          </div>
        </section>
        <section className="padded-section services-section">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">{"Our expertise"}</span>
                <h2 className="section-title">
                  {"What can we"}
                  <br />
                  {"build for "}
                  <span className="text-lime">{"you?"}</span>
                </h2>
              </div>
              <p className="lead">
                {
                  "Choose one service or bring your website, content and campaigns into a coordinated project. We define the scope before delivery starts."
                }
              </p>
            </div>
            <div className="service-grid">
              <MotionCard className="service-motion-card"><Link
                className="service-tile reveal"
                href="/services/web-development"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/01"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <path d="M10 9 3 18l7 9M26 9l7 9-7 9M21 5l-6 26"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Web Development"}</h3>
                <p>
                  {
                    "Business websites, B2B product catalogues, responsive landing pages and enquiry experiences built for your audience."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link></MotionCard>
              <MotionCard className="service-motion-card"><Link
                className="service-tile reveal"
                href="/services/digital-marketing"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/02"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <path d="M6 15v7a3 3 0 0 0 3 3h4l4 7h4l-3-9m-9-8c8 0 13-4 20-8v22c-7-4-12-8-20-8M28 7v22"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Digital Marketing"}</h3>
                <p>
                  {
                    "Meta and Google advertising with structured testing, audience research, measurement and practical reporting."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link></MotionCard>
              <MotionCard className="service-motion-card"><Link
                className="service-tile reveal"
                href="/services/social-media-management"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/03"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <rect height="24" rx="7" width="24" x="6" y="6"></rect>
                      <circle cx="18" cy="18" r="6"></circle>
                      <path d="M25.5 11h.01"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Social Media Management"}</h3>
                <p>
                  {
                    "Content strategy, calendar planning, reels, posts and stories tailored to your brand and target customers."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link></MotionCard>
              <MotionCard className="service-motion-card"><Link
                className="service-tile reveal"
                href="/services/shopify-development"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/04"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <path d="M8 13h20l-2 18H10L8 13Zm5 2v-5a5 5 0 0 1 10 0v5"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Shopify Store Development"}</h3>
                <p>
                  {
                    "Theme customization, store design, product collections and mobile shopping journeys for growing retailers."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link></MotionCard>
            </div>
          </div>
        </section>
        <section className="padded-section">
          <div className="container two-columns">
            <div className="reveal">
              <span className="eyebrow">{"Better together"}</span>
              <h2 className="section-title">
                {"One strategy."}
                <br />
                <span className="text-lime">{"Every touchpoint."}</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="intro-quote">
                {
                  "A good website attracts interest. Great content earns attention. Effective marketing turns interest into action. Together, these disciplines help create a more consistent customer experience."
                }
              </p>
              <Link className="text-link" href="/contact" prefetch={false}>
                {"Talk to us about your goals ↗"}
              </Link>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>
                  {"Have something"}
                  <br />
                  {"great in mind?"}
                </h2>
              </div>
              <Link
                aria-label="Discuss your project with Awwal Productions"
                className="btn btn-lime"
                href="/contact"
                prefetch={false}
              >
                {"Get a project quote "}
                <span aria-hidden="true" className="arr">
                  {"↗"}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
