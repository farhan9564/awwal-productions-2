import Link from "next/link";

export const metadata = {
  title: "Our Website & Marketing Project Process | Awwal Productions",
  description:
    "From discovery and strategy to launch, see how Awwal Productions plans websites, Shopify builds and digital campaigns with clear deliverables and feedback.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Website & Marketing Project Process | Awwal Productions",
    description:
      "From discovery and strategy to launch, see how Awwal Productions plans websites, Shopify builds and digital campaigns with clear deliverables and feedback.",
    url: "/process",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/process#webpage", "url": "https://awwalproductions.com/process", "name": "Our Website & Marketing Project Process | Awwal Productions", "description": "From discovery and strategy to launch, see how Awwal Productions plans websites, Shopify builds and digital campaigns with clear deliverables and feedback.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/process#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Our Website & Marketing Project Process", "item": "https://awwalproductions.com/process"}]}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Our Website & Marketing Project Process"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"OUR PROCESS"}</span>
            </div>
            <span className="eyebrow">{"AWWAL PRODUCTIONS / OUR PROCESS"}</span>
            <h1>
              {"A clear process. "}
              <br />
              <span className="text-lime">{"No guesswork."}</span>
            </h1>
            <p>
              {
                "From first discovery call to final review, our process keeps goals, deliverables and feedback visible—whether we are building a site or running a campaign."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container">
            <div className="timeline-intro">
              <div className="reveal">
                <span className="eyebrow">{"The journey"}</span>
                <h2 className="section-title">
                  {"From day one"}
                  <br />
                  <span className="text-lime">{"to go-live."}</span>
                </h2>
              </div>
              <p className="lead reveal">
                {
                  "We start by understanding the business and its buyers, then agree on project scope, deliverables and a review workflow. Clear checkpoints keep decisions moving and reduce last-minute surprises."
                }
              </p>
            </div>
            <div className="process-canvas reveal">
              <span className="floating-caption">{"AWWAL / PROCESS MAP"}</span>
              <div className="orbit-ring">
                <span className="bead"></span>
              </div>
              <img
                alt="Awwal Productions logo"
                className="center-logo"
                decoding="async"
                src="/assets/awwal-logo.svg"
              />
              <span className="floating-caption last">
                {"THINK → CREATE → IMPROVE"}
              </span>
            </div>
            <div className="process-layout" style={{ marginTop: "85px" }}>
              <div className="process-sticky reveal">
                <span className="eyebrow">{"Five clear stages"}</span>
                <h2 className="section-title">
                  {"Less friction."}
                  <br />
                  <span className="text-lime">{"More focus."}</span>
                </h2>
                <p>
                  {
                    "We keep communication clear, deliverables aligned, and decisions focused on what your brand needs most."
                  }
                </p>
              </div>
              <div className="process-steps">
                <article className="process-step reveal">
                  <span className="num">{"01"}</span>
                  <div>
                    <h3>{"Discover"}</h3>
                    <p>
                      {
                        "We learn about your brand, your audience and the business goals behind the project."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="step-symbol">
                    {"↗"}
                  </span>
                </article>
                <article className="process-step reveal">
                  <span className="num">{"02"}</span>
                  <div>
                    <h3>{"Define"}</h3>
                    <p>
                      {
                        "We align on the direction, scope, content and priorities before production begins."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="step-symbol">
                    {"↗"}
                  </span>
                </article>
                <article className="process-step reveal">
                  <span className="num">{"03"}</span>
                  <div>
                    <h3>{"Create"}</h3>
                    <p>
                      {
                        "We turn strategy into clean design, development and carefully crafted campaigns."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="step-symbol">
                    {"↗"}
                  </span>
                </article>
                <article className="process-step reveal">
                  <span className="num">{"04"}</span>
                  <div>
                    <h3>{"Refine"}</h3>
                    <p>
                      {
                        "We test, review and improve the work before launch or publication."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="step-symbol">
                    {"↗"}
                  </span>
                </article>
                <article className="process-step reveal">
                  <span className="num">{"05"}</span>
                  <div>
                    <h3>{"Launch & grow"}</h3>
                    <p>
                      {
                        "We launch with care and identify opportunities for continued improvements."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="step-symbol">
                    {"↗"}
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>
                  {"Let’s start"}
                  <br />
                  {"with your idea."}
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
