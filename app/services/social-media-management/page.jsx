import Link from "next/link";

export const metadata = {
  title: "Social Media Management & Content Strategy | Awwal",
  description:
    "Social media management for growing brands: Instagram and Facebook content strategy, calendars, creative production, community and reporting.",
  alternates: { canonical: "/services/social-media-management" },
  openGraph: {
    title: "Social Media Management & Content Strategy | Awwal",
    description:
      "Social media management for growing brands: Instagram and Facebook content strategy, calendars, creative production, community and reporting.",
    url: "/services/social-media-management",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/services/social-media-management#webpage", "url": "https://awwalproductions.com/services/social-media-management", "name": "Social Media Management & Content Strategy | Awwal", "description": "Social media management for growing brands: Instagram and Facebook content strategy, calendars, creative production, community and reporting.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/services/social-media-management#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://awwalproductions.com/services"}, {"@type": "ListItem", "position": 3, "name": "Social Media Management & Content Strategy", "item": "https://awwalproductions.com/services/social-media-management"}]}, {"@type": "Service", "name": "Social Media Management & Content Strategy", "serviceType": "Social Media Management", "provider": {"@id": "https://awwalproductions.com/#organization"}, "areaServed": "Worldwide", "url": "https://awwalproductions.com/services/social-media-management", "description": "Social media management for growing brands: Instagram and Facebook content strategy, calendars, creative production, community and reporting."}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Social Media Management & Content Strategy"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"Social Media Management"}</span>
            </div>
            <span className="eyebrow">
              {"AWWAL PRODUCTIONS / Social Media Management"}
            </span>
            <h1>
              {"Social media that"}
              <br />
              <span className="text-lime">{"feels like your brand."}</span>
            </h1>
            <p>
              {
                "Strategy-led Instagram and Facebook management, content planning and creative production to help your business show up consistently and communicate clearly."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container two-columns">
            <div className="reveal">
              <span className="eyebrow">{"What we believe"}</span>
              <h2 className="section-title">
                {"Content worth"}
                <br />
                <span className="text-lime">{"showing up for."}</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="intro-quote">
                {
                  "A useful social presence does more than fill a calendar. We plan content around your customers: what they want to know, what builds trust and what gives them a reason to take the next step."
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
                <h3>{"A content strategy with direction"}</h3>
                <p>
                  {
                    "Define audience, content pillars, platform formats and what each post needs to achieve."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Creative built for the feed"}</h3>
                <p>
                  {
                    "Develop reels, carousels, static posts and stories with consistent brand presentation."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Consistency with feedback"}</h3>
                <p>
                  {
                    "Use calendars and reporting to improve what you publish over time."
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
                    "Management and creative requirements vary by platform, posting cadence and the footage or assets available. We define a practical monthly scope together."
                  }
                </p>
              </div>
              <div className="deliverables">
                <div className="deliverable reveal">
                  {"Social media audit and audience positioning"}
                </div>
                <div className="deliverable reveal">
                  {"Content pillars and monthly calendars"}
                </div>
                <div className="deliverable reveal">
                  {"Instagram and Facebook reels, posts and stories"}
                </div>
                <div className="deliverable reveal">
                  {"Captions, creative briefs and publishing support"}
                </div>
                <div className="deliverable reveal">
                  {"Community management where included"}
                </div>
                <div className="deliverable reveal">
                  {"Monthly engagement and content performance reviews"}
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
                <h3>{"Online stores"}</h3>
                <p>
                  {
                    "Highlight product value, launches, customer questions and helpful buying content."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Service brands"}</h3>
                <p>
                  {
                    "Explain services, introduce the team and build trust through consistent educational content."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Manufacturers & exporters"}</h3>
                <p>
                  {
                    "Showcase categories, production capability, quality processes and B2B communication."
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
                  {"Do you provide a monthly content calendar?"}
                </summary>
                <p>
                  {
                    "Yes. A calendar can cover agreed content pillars, formats, topics, captions and publishing timing."
                  }
                </p>
              </details>
              <details>
                <summary>{"Can you create reels and posts?"}</summary>
                <p>
                  {
                    "Yes. Reels, carousels, static designs and stories can form part of the scope; video production depends on footage access and deliverables."
                  }
                </p>
              </details>
              <details>
                <summary>{"Which social networks do you manage?"}</summary>
                <p>
                  {
                    "Instagram and Facebook are common starting points. We recommend channels based on your audience and available resources."
                  }
                </p>
              </details>
              <details>
                <summary>{"Will you reply to messages and comments?"}</summary>
                <p>
                  {
                    "Community management can be added with clearly agreed response guidelines, access permissions and hours."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Do you guarantee followers or viral content?"}
                </summary>
                <p>
                  {
                    "No. We optimize for relevant communication, consistent content and useful performance signals rather than promising follower counts."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Can social media management work alongside Meta Ads?"}
                </summary>
                <p>
                  {
                    "Yes. Organic content insights can inform paid creative, and aligned messages can improve the customer journey across both channels."
                  }
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>{"Give your social presence a clearer direction."}</h2>
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
