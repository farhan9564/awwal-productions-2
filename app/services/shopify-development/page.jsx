import Link from "next/link";

export const metadata = {
  title: "Shopify Store Design & Development | Awwal Productions",
  description:
    "Shopify development for fashion, retail and growing e-commerce brands. Storefront design, collection structure, product pages and conversion-focused UX.",
  alternates: { canonical: "/services/shopify-development" },
  openGraph: {
    title: "Shopify Store Design & Development | Awwal Productions",
    description:
      "Shopify development for fashion, retail and growing e-commerce brands. Storefront design, collection structure, product pages and conversion-focused UX.",
    url: "/services/shopify-development",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/services/shopify-development#webpage", "url": "https://awwalproductions.com/services/shopify-development", "name": "Shopify Store Design & Development | Awwal Productions", "description": "Shopify development for fashion, retail and growing e-commerce brands. Storefront design, collection structure, product pages and conversion-focused UX.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/services/shopify-development#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://awwalproductions.com/services"}, {"@type": "ListItem", "position": 3, "name": "Shopify Store Design & Development", "item": "https://awwalproductions.com/services/shopify-development"}]}, {"@type": "Service", "name": "Shopify Store Design & Development", "serviceType": "Shopify Development", "provider": {"@id": "https://awwalproductions.com/#organization"}, "areaServed": "Worldwide", "url": "https://awwalproductions.com/services/shopify-development", "description": "Shopify development for fashion, retail and growing e-commerce brands. Storefront design, collection structure, product pages and conversion-focused UX."}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Shopify Store Design & Development"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"Shopify Store Development"}</span>
            </div>
            <span className="eyebrow">
              {"AWWAL PRODUCTIONS / Shopify Store Development"}
            </span>
            <h1>
              {"Shopify stores."}
              <br />
              <span className="text-lime">{"Made to sell clearly."}</span>
            </h1>
            <p>
              {
                "Shopify store design and development for clothing, lifestyle and e-commerce brands—focused on product discovery, mobile shopping and an easier buying journey."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container two-columns">
            <div className="reveal">
              <span className="eyebrow">{"What we believe"}</span>
              <h2 className="section-title">
                {"An easier path"}
                <br />
                <span className="text-lime">{"from browsing to buying."}</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="intro-quote">
                {
                  "A good-looking store is only the beginning. Buyers need to find the right product, understand options and check out with confidence. We structure storefronts around navigation, collection clarity and usable product information."
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
                <h3>{"Brand-led storefront design"}</h3>
                <p>
                  {
                    "Create a consistent visual language across your homepage, collections and product pages."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Product discovery first"}</h3>
                <p>
                  {
                    "Organize categories, variants, information and navigation so customers can find what fits."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Conversion-conscious UX"}</h3>
                <p>
                  {
                    "Review mobile layouts, purchase paths and trust-building content without promising sales outcomes."
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
                    "Every store has different catalog, product, payment and integration requirements. We scope the Shopify setup or redesign around your priorities."
                  }
                </p>
              </div>
              <div className="deliverables">
                <div className="deliverable reveal">
                  {"Shopify theme setup and storefront customization"}
                </div>
                <div className="deliverable reveal">
                  {"Homepage, collection and product page design"}
                </div>
                <div className="deliverable reveal">
                  {"Product catalog, variants and navigation structure"}
                </div>
                <div className="deliverable reveal">
                  {"Mobile shopping and cart experience review"}
                </div>
                <div className="deliverable reveal">
                  {"Store policies, essential integrations and content setup"}
                </div>
                <div className="deliverable reveal">
                  {"On-page store SEO and handover guidance"}
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
                <h3>{"Fashion & apparel"}</h3>
                <p>
                  {
                    "Present sizes, colors, collections and product details with a consistent shopping experience."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Lifestyle & accessories"}</h3>
                <p>
                  {
                    "Help customers compare options and move smoothly from discovery to checkout."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Established stores"}</h3>
                <p>
                  {
                    "Refresh an existing storefront with clearer navigation, merchandising and mobile usability."
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
                <summary>
                  {"Can you redesign my existing Shopify store?"}
                </summary>
                <p>
                  {
                    "Yes. We can work with an existing Shopify theme and scope changes to sections, layouts, collections and product pages."
                  }
                </p>
              </details>
              <details>
                <summary>{"Can you move an online store to Shopify?"}</summary>
                <p>
                  {
                    "Migration can be planned after checking products, customers, content, domains and which information can be moved safely."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Do you set up product variants and collections?"}
                </summary>
                <p>
                  {
                    "Yes, when included in the scope. We can organize sizes, colors, collections and product information from the supplied catalogue."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Does Shopify support international selling?"}
                </summary>
                <p>
                  {
                    "Shopify provides international commerce features, but availability of payments, markets, shipping and currencies depends on your account and region."
                  }
                </p>
              </details>
              <details>
                <summary>{"Can you improve conversion rate?"}</summary>
                <p>
                  {
                    "We can improve user experience and remove avoidable friction, but actual conversion changes depend on traffic quality, offer and other business factors."
                  }
                </p>
              </details>
              <details>
                <summary>{"What will you need from me?"}</summary>
                <p>
                  {
                    "Brand assets, product information, photography, store access through approved permissions and your preferred checkout and shipping requirements."
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
          <Link className="btn btn-lime" href="/portfolio" prefetch={false}>
            {"Explore our web projects "}
            <span aria-hidden="true">{"↗"}</span>
          </Link>
        </div>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>{"Create a Shopify experience buyers can navigate."}</h2>
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
