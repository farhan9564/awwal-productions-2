import Link from "next/link";

export const metadata = {
  title: "Meta Ads & Google Ads Management | Awwal Productions",
  description:
    "Digital advertising services: Meta and Google Ads strategy, creative testing, conversion tracking and reporting. See real case studies and discuss your goals.",
  alternates: { canonical: "/services/digital-marketing" },
  openGraph: {
    title: "Meta Ads & Google Ads Management | Awwal Productions",
    description:
      "Digital advertising services: Meta and Google Ads strategy, creative testing, conversion tracking and reporting. See real case studies and discuss your goals.",
    url: "/services/digital-marketing",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/services/digital-marketing#webpage", "url": "https://awwalproductions.com/services/digital-marketing", "name": "Meta Ads & Google Ads Management | Awwal Productions", "description": "Digital advertising services: Meta and Google Ads strategy, creative testing, conversion tracking and reporting. See real case studies and discuss your goals.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/services/digital-marketing#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://awwalproductions.com/services"}, {"@type": "ListItem", "position": 3, "name": "Meta Ads & Google Ads Management", "item": "https://awwalproductions.com/services/digital-marketing"}]}, {"@type": "Service", "name": "Meta Ads & Google Ads Management", "serviceType": "Digital Advertising", "provider": {"@id": "https://awwalproductions.com/#organization"}, "areaServed": "Worldwide", "url": "https://awwalproductions.com/services/digital-marketing", "description": "Digital advertising services: Meta and Google Ads strategy, creative testing, conversion tracking and reporting. See real case studies and discuss your goals."}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Meta Ads & Google Ads Management"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"Digital Marketing"}</span>
            </div>
            <span className="eyebrow">
              {"AWWAL PRODUCTIONS / Digital Marketing"}
            </span>
            <h1>
              {"Meta & Google Ads."}
              <br />
              <span className="text-lime">{"Focused on outcomes."}</span>
            </h1>
            <p>
              {
                "Paid advertising strategy, creative testing and campaign optimization for brands looking to generate qualified enquiries and e-commerce sales."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container two-columns">
            <div className="reveal">
              <span className="eyebrow">{"What we believe"}</span>
              <h2 className="section-title">
                {"Ad strategy grounded"}
                <br />
                <span className="text-lime">{"in your goals."}</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="intro-quote">
                {
                  "Successful advertising starts before the first impression. We look at the offer, audience, landing experience and tracking, then plan and test ads against a specific business objective—not vanity metrics alone."
                }
              </p>
              <Link className="text-link" href="/contact" prefetch={false}>
                {"Discuss this service ↗"}
              </Link>
            </div>
          </div>
        </section>
        <section className="padded-section services-section">
          <div className="container">
            <span className="eyebrow reveal">{"Our approach"}</span>
            <h2 className="section-title reveal">
              {"Practical details. "}
              <br />
              <span className="text-lime">{"Clear deliverables."}</span>
            </h2>
            <div className="service-features">
              <article className="feature reveal">
                <span className="feature-index">{"01 /"}</span>
                <h3>{"Strategy before spend"}</h3>
                <p>
                  {
                    "Match campaign objectives, audience intent, messaging and budget to the business goal."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Creative-led testing"}</h3>
                <p>
                  {
                    "Experiment with hooks, formats, messaging and offers to learn what resonates with real buyers."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Clear performance reporting"}</h3>
                <p>
                  {
                    "Review leads, purchase signals, cost efficiency and conversion data with attention to tracking limitations."
                  }
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="padded-section">
          <div className="container">
            <div className="two-columns">
              <div className="reveal">
                <span className="eyebrow">{"What we can do"}</span>
                <h2 className="section-title">
                  {"Designed for"}
                  <br />
                  <span className="text-lime">{"real needs."}</span>
                </h2>
                <p className="lead">
                  {
                    "We tailor the campaign scope to the product, market, budget and available tracking. Advertising spend is separate from the management scope."
                  }
                </p>
              </div>
              <div className="deliverables">
                <div className="deliverable reveal">
                  {"Meta Ads campaigns for leads, messages or purchases"}
                </div>
                <div className="deliverable reveal">
                  {"Google Ads planning for search-intent audiences"}
                </div>
                <div className="deliverable reveal">
                  {"Competitor, audience and offer research"}
                </div>
                <div className="deliverable reveal">
                  {"Ad copy, creative strategy and structured testing"}
                </div>
                <div className="deliverable reveal">
                  {"Pixel, events and conversion-tracking review"}
                </div>
                <div className="deliverable reveal">
                  {"Ongoing campaign analysis and transparent reporting"}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="audience-title"
          className="padded-section audience-section"
        >
          <div className="container">
            <span className="eyebrow">{"Where we help"}</span>
            <h2 className="section-title" id="audience-title">
              {"Built around "}
              <span className="text-lime">{"your type of business."}</span>
            </h2>
            <p className="lead audience-lead">
              {
                "Different audiences have different buying questions. We plan the experience around yours."
              }
            </p>
            <div className="service-features">
              <article className="feature reveal">
                <span className="feature-index">{"01 /"}</span>
                <h3>{"E-commerce brands"}</h3>
                <p>
                  {
                    "Test products, offers and creatives against purchase-related performance signals."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Local services"}</h3>
                <p>
                  {
                    "Generate enquiries, messages and consultations with relevant location-based targeting."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"B2B & professional services"}</h3>
                <p>
                  {
                    "Align niche targeting and landing pages with the questions of a qualified buyer."
                  }
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="padded-section services-section">
          <div className="container">
            <span className="eyebrow">{"Your questions"}</span>
            <h2 className="section-title">
              {"Worth "}
              <span className="text-lime">{"asking."}</span>
            </h2>
            <div className="faq">
              <details>
                <summary>{"Which platforms can you manage?"}</summary>
                <p>
                  {
                    "We work with Meta advertising and can scope Google Ads based on your market, offer and campaign objectives."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"What advertising budget should I start with?"}
                </summary>
                <p>
                  {
                    "A starting budget depends on your market, competition, goal and conversion economics. We assess those factors before recommending a test spend."
                  }
                </p>
              </details>
              <details>
                <summary>{"Can you guarantee sales or a target ROAS?"}</summary>
                <p>
                  {
                    "No. Outcomes depend on pricing, product-market fit, competition, landing pages, budget and attribution. We commit to disciplined testing and reporting—not guaranteed figures."
                  }
                </p>
              </details>
              <details>
                <summary>{"How are results measured?"}</summary>
                <p>
                  {
                    "We define the most relevant metrics for each campaign, such as qualified leads, cost per lead, purchases or purchase ROAS, and explain tracking limitations."
                  }
                </p>
              </details>
              <details>
                <summary>{"Do you also help with ad creatives?"}</summary>
                <p>
                  {
                    "Creative strategy, copy and testing can be included. Production needs and asset responsibilities are agreed before launch."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Can I review previous campaign performance?"}
                </summary>
                <p>
                  {
                    "Yes. Our Meta Ads portfolio includes the Digikon Solutions and MBM Sports case studies with links to the underlying reports."
                  }
                </p>
              </details>
            </div>
          </div>
        </section>
        <div className="service-case-link container reveal">
          <div>
            <span className="eyebrow">{"Work you can explore"}</span>
            <h2>{"See the portfolio in action."}</h2>
          </div>
          <Link
            className="btn btn-lime"
            href="/portfolio/meta-ads"
            prefetch={false}
          >
            {"Explore Meta Ads examples "}
            <span aria-hidden="true">{"↗"}</span>
          </Link>
        </div>
        <div className="service-case-link container reveal">
          <div>
            <span className="eyebrow">{"Campaign evidence"}</span>
            <h2>{"Explore reported Meta Ads performance."}</h2>
          </div>
          <Link
            className="btn btn-lime"
            href="/portfolio/meta-ads"
            prefetch={false}
          >
            {"View campaign case studies "}
            <span aria-hidden="true">{"↗"}</span>
          </Link>
        </div>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>{"Turn a marketing goal into a testable campaign."}</h2>
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
