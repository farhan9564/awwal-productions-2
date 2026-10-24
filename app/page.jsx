import ServiceStudioCards from "../components/ServiceStudioCards";
import WorkExplorer from "../components/WorkExplorer";
import FeaturedWebProjects from "../components/FeaturedWebProjects";
import ShopifyProjectsSection from "../components/ShopifyProjectsSection";
import SocialPortfolioTeaser from "../components/SocialPortfolioTeaser";
import FeaturedMetaCases from "../components/FeaturedMetaCases";
import Link from "next/link";

export const metadata = {
  title: "Web Development, Shopify & Digital Marketing | Awwal Productions",
  description:
    "Awwal Productions builds custom websites, Shopify stores and performance marketing campaigns for B2B, e-commerce and growing brands worldwide.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Web Development, Shopify & Digital Marketing | Awwal Productions",
    description:
      "Awwal Productions builds custom websites, Shopify stores and performance marketing campaigns for B2B, e-commerce and growing brands worldwide.",
    url: "/",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/#webpage", "url": "https://awwalproductions.com/", "name": "Web Development, Shopify & Digital Marketing | Awwal Productions", "description": "Awwal Productions builds custom websites, Shopify stores and performance marketing campaigns for B2B, e-commerce and growing brands worldwide.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}]}',
        }}
      />
      <main id="main">
        <section aria-labelledby="heroTitle" className="hero">
          <div className="hero-ambient"></div>
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                {"WEB DEVELOPMENT • SHOPIFY • DIGITAL MARKETING"}
              </span>
              <h1 className="display" id="heroTitle">
                {"Websites that "}
                <br /> <span className="text-lime">{"mean business."}</span>
              </h1>
              <p className="hero-desc">
                {
                  "We design and develop conversion-conscious websites and Shopify stores, then help brands attract customers through Meta Ads, Google Ads and strategic social content."
                }
              </p>
              <div className="hero-buttons">
                <Link
                  className="btn btn-lime"
                  href="/portfolio"
                  prefetch={false}
                >
                  {"Explore our portfolio "}
                  <span aria-hidden="true" className="arr">
                    {"↗"}
                  </span>
                </Link>
                <Link
                  aria-label="Discuss your project with Awwal Productions"
                  className="btn btn-outline"
                  href="/contact"
                  prefetch={false}
                >
                  {"Get a project quote "}
                  <span aria-hidden="true" className="arr">
                    {"↗"}
                  </span>
                </Link>
              </div>
              <div className="hero-foot">
                {"Based in Pakistan. Working with businesses worldwide."}
              </div>
            </div>
            <div
              aria-label="Animated digital studio concept"
              className="hero-art"
            >
              <div className="hero-orbit"></div>
              <div className="hero-orbit inner"></div>
              <div className="studio-window">
                <div className="studio-top">
                  <div className="browser-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <span>{"AWWAL / DIGITAL STUDIO"}</span>
                  <span style={{ color: "var(--lime)" }}>{"● LIVE"}</span>
                </div>
                <div className="studio-interior">
                  <div className="studio-overline">{"DESIGN SYSTEM / 01"}</div>
                  <div className="studio-big" id="studioHeadline">
                    {"IDEAS."}
                    <br />
                    <em>{"IN MOTION."}</em>
                  </div>
                  <div className="studio-desc" id="studioDescription">
                    {"From the first conversation to the final pixel."}
                  </div>
                  <div className="studio-chip">
                    <span>{"✳"}</span>
                    {" CREATING WHAT'S NEXT"}
                  </div>
                </div>
                <div className="studio-bottom">
                  <span id="studioPhase">{"DISCOVER / 01"}</span>
                  <b>{"BUILDING THE FUTURE ↗"}</b>
                </div>
              </div>
              <div className="floating-card one">
                <small>{"OUR MINDSET"}</small>
                <b>{"Creative × Strategic"}</b>
              </div>
              <div className="floating-card two">
                <small>{"FOUR EXPERTISES"}</small>
                <b>{"ONE CONNECTED VISION"}</b>
              </div>
              <div aria-hidden="true" className="floating-spark">
                {"✳"}
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <WorkExplorer />
        <section className="padded-section">
          <div className="container">
            <div className="intro-layout">
              <div className="reveal">
                <span className="eyebrow">{"Who we are"}</span>
                <h2 className="section-title">
                  {"Creative thinking."}
                  <br />
                  <span className="text-lime">{"Practical outcomes."}</span>
                </h2>
              </div>
              <div className="reveal delay-1">
                <p className="intro-quote">
                  {
                    "Whether you sell products online or supply businesses internationally, your website should explain your value, "
                  }
                  <b>{"earn trust and make the next step obvious."}</b>
                  {" We connect development and marketing around that goal."}
                </p>
                <Link className="text-link" href="/about" prefetch={false}>
                  {"Meet Awwal Productions "}
                  <span aria-hidden="true">{"↗"}</span>
                </Link>
              </div>
            </div>
            <div className="intro-bars reveal">
              <div>
                {"01 "}
                <small>{"Buyer-focused experiences"}</small>
              </div>
              <div>
                {"02 "}
                <small>{"Clear project scope"}</small>
              </div>
              <div>
                {"03 "}
                <small>{"Responsive by design"}</small>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="padded-section services-section">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">{"What we do"}</span>
                <h2 className="section-title">
                  {"One team."}
                  <br />
                  <span className="text-lime">{"Four core services."}</span>
                </h2>
              </div>
              <p className="lead reveal">
                {
                  "From B2B website development to Shopify stores and paid campaigns, get clear thinking, well-structured delivery and brand-consistent creative."
                }
              </p>
            </div>
            <ServiceStudioCards />
          </div>
        </section>
        {"\n"}
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
                <h3>{"B2B manufacturers & exporters"}</h3>
                <p>
                  {
                    "Present product ranges, company capabilities and enquiry paths for wholesale or international buyers."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"02 /"}</span>
                <h3>{"E-commerce & fashion brands"}</h3>
                <p>
                  {
                    "Help customers find products, choose variants and navigate to checkout with less friction."
                  }
                </p>
              </article>
              <article className="feature reveal">
                <span className="feature-index">{"03 /"}</span>
                <h3>{"Service businesses"}</h3>
                <p>
                  {
                    "Explain services, build credibility and create clear paths to consultation enquiries."
                  }
                </p>
              </article>
            </div>
          </div>
        </section>
        <FeaturedWebProjects />
        <ShopifyProjectsSection />
        <FeaturedMetaCases />
        <SocialPortfolioTeaser />
        <section className="padded-section">
          <div className="container process-layout">
            <div className="process-sticky reveal">
              <span className="eyebrow">{"How we work"}</span>
              <h2 className="section-title">
                {"A clear process."}
                <br />
                <span className="text-lime">{"From brief to launch."}</span>
              </h2>
              <p>
                {
                  "Beautiful work needs a clear process. We keep the journey collaborative, focused and straightforward."
                }
              </p>
              <Link className="text-link" href="/process" prefetch={false}>
                {"See our process "}
                <span aria-hidden="true">{"↗"}</span>
              </Link>
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
        </section>
        <section
          aria-labelledby="home-faq-heading"
          className="padded-section services-section"
        >
          <div className="container">
            <span className="eyebrow">{"Common questions"}</span>
            <h2 className="section-title" id="home-faq-heading">
              {"Planning your "}
              <span className="text-lime">{"next project?"}</span>
            </h2>
            <div className="faq">
              <details>
                <summary>
                  {"Do you work with clients outside Pakistan?"}
                </summary>
                <p>
                  {
                    "Yes. Our agency is based in Pakistan and works with brands internationally. Project communication, reviews and delivery can be coordinated remotely."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Can you develop a website and manage marketing together?"}
                </summary>
                <p>
                  {
                    "Yes. You can combine a website or Shopify build with Meta Ads, Google Ads or social media services. We agree on deliverables separately so responsibilities remain clear."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Can I see real work before requesting a quote?"}
                </summary>
                <p>
                  {
                    "Explore 21 web development projects, four Shopify store projects and 13 Meta Ads case studies. Our project covers are branded illustrations, not screenshots of those sites."
                  }
                </p>
              </details>
              <details>
                <summary>{"What happens after I contact you?"}</summary>
                <p>
                  {
                    "Tell us your business, goal, preferred timeline and budget range. We can then discuss the right scope and provide a project-specific estimate."
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
                <h2>{"Need a website, Shopify store or growth partner?"}</h2>
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
