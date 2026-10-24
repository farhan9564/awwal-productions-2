import FeaturedWebProjects from "../../../components/FeaturedWebProjects";
import Link from "next/link";

export const metadata = {
  title: "Custom Website Development for B2B & Brands | Awwal",
  description:
    "Custom, responsive web development for B2B manufacturers, service businesses and online brands. Explore portfolio projects and request a tailored website quote.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Custom Website Development for B2B & Brands | Awwal",
    description:
      "Custom, responsive web development for B2B manufacturers, service businesses and online brands. Explore portfolio projects and request a tailored website quote.",
    url: "/services/web-development",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/services/web-development#webpage", "url": "https://awwalproductions.com/services/web-development", "name": "Custom Website Development for B2B & Brands | Awwal", "description": "Custom, responsive web development for B2B manufacturers, service businesses and online brands. Explore portfolio projects and request a tailored website quote.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/services/web-development#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://awwalproductions.com/services"}, {"@type": "ListItem", "position": 3, "name": "Custom Website Development for B2B & Brands", "item": "https://awwalproductions.com/services/web-development"}]}, {"@type": "Service", "name": "Custom Website Development for B2B & Brands", "serviceType": "Website Development", "provider": {"@id": "https://awwalproductions.com/#organization"}, "areaServed": "Worldwide", "url": "https://awwalproductions.com/services/web-development", "description": "Custom, responsive web development for B2B manufacturers, service businesses and online brands. Explore portfolio projects and request a tailored website quote."}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Custom Website Development for B2B & Brands"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"Web Development"}</span>
            </div>
            <span className="eyebrow">
              {"AWWAL PRODUCTIONS / Web Development"}
            </span>
            <h1>
              {"Custom websites."}
              <br />
              <span className="text-lime">{"Built for business."}</span>
            </h1>
            <p>
              {
                "Responsive websites for B2B manufacturers, service businesses and growing brands—designed to communicate value, guide visitors and turn interest into enquiries."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container two-columns">
            <div className="reveal">
              <span className="eyebrow">{"What we believe"}</span>
              <h2 className="section-title">
                {"Websites your buyers"}
                <br />
                <span className="text-lime">{"can navigate confidently."}</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="intro-quote">
                {
                  "A strong website should answer buyer questions before the first call. We bring together brand-led design, purposeful page structure and reliable development, with the right enquiry or content-management workflow for your project."
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
                <h3>{"Built around your buyers"}</h3>
                <p>
                  {
                    "Clear navigation, focused page messaging and calls to action shaped by what visitors need to know."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Responsive by design"}</h3>
                <p>
                  {
                    "Layouts and interactions planned for phones, tablets and desktops—not simply scaled down."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Useful business functionality"}</h3>
                <p>
                  {
                    "Enquiry forms, catalogue structures, admin capabilities and integrations scoped to your workflow."
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
                    "Choose the deliverables that fit your business. We agree on pages, functionality, content responsibilities and launch requirements before development."
                  }
                </p>
              </div>
              <div className="deliverables">
                <div className="deliverable reveal">
                  {"Custom website and landing page development"}
                </div>
                <div className="deliverable reveal">
                  {"B2B manufacturer and product catalogue websites"}
                </div>
                <div className="deliverable reveal">
                  {"Mobile-responsive UX and accessible navigation"}
                </div>
                <div className="deliverable reveal">
                  {"Product enquiry, contact and lead-generation flows"}
                </div>
                <div className="deliverable reveal">
                  {"Content management or admin panel where required"}
                </div>
                <div className="deliverable reveal">
                  {"Technical SEO foundations and speed-conscious delivery"}
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
                <h3>{"Manufacturers & exporters"}</h3>
                <p>
                  {
                    "Explain production capabilities, product categories and the steps for requesting a quote."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"Service businesses"}</h3>
                <p>
                  {
                    "Turn service information into clear paths for enquiries, consultations and bookings."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Growing brands"}</h3>
                <p>
                  {
                    "Build a distinctive online presence that is easier to update and expand."
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
                  {"What information do you need before starting?"}
                </summary>
                <p>
                  {
                    "A short brief covering your audience, required pages, examples you like, important functions and approximate timeline is enough to begin scoping."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Do you develop WordPress or custom websites?"}
                </summary>
                <p>
                  {
                    "Both approaches can be considered. We recommend a stack based on your content needs, budget, integrations and long-term maintenance preferences."
                  }
                </p>
              </details>
              <details>
                <summary>{"Can you build B2B enquiry websites?"}</summary>
                <p>
                  {
                    "Yes. We can scope product catalogues, request-a-quote forms and enquiry-based purchase journeys for manufacturers and exporters."
                  }
                </p>
              </details>
              <details>
                <summary>{"Will the site be SEO-ready?"}</summary>
                <p>
                  {
                    "We build in crawlable structure, sensible headings, descriptive page content and mobile-friendly layouts. Rankings depend on competition, content, authority and ongoing optimization."
                  }
                </p>
              </details>
              <details>
                <summary>{"Can I manage products and pages myself?"}</summary>
                <p>
                  {
                    "A suitable CMS or custom admin panel can be included when agreed as part of the project."
                  }
                </p>
              </details>
              <details>
                <summary>{"How much will a website cost?"}</summary>
                <p>
                  {
                    "Pricing depends on page count, design complexity, integrations and any admin features. Share your brief for a tailored estimate."
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
        <FeaturedWebProjects />
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>{"Build a website that explains your value clearly."}</h2>
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
