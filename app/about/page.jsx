import Link from "next/link";

export const metadata = {
  title: "About Awwal Productions | Web & Marketing Agency",
  description:
    "Meet Awwal Productions: a Pakistan-based creative and technology team delivering web development, Shopify, social media and paid advertising internationally.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Awwal Productions | Web & Marketing Agency",
    description:
      "Meet Awwal Productions: a Pakistan-based creative and technology team delivering web development, Shopify, social media and paid advertising internationally.",
    url: "/about",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/about#webpage", "url": "https://awwalproductions.com/about", "name": "About Awwal Productions | Web & Marketing Agency", "description": "Meet Awwal Productions: a Pakistan-based creative and technology team delivering web development, Shopify, social media and paid advertising internationally.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/about#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "About Awwal Productions", "item": "https://awwalproductions.com/about"}]}]}',
        }}
      />
      <main id="main">
        <section aria-label="About Awwal Productions" className="page-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"ABOUT"}</span>
            </div>
            <span className="eyebrow">{"AWWAL PRODUCTIONS / ABOUT"}</span>
            <h1>
              {"A digital partner. "}
              <br />
              <span className="text-lime">{"Built around your goals."}</span>
            </h1>
            <p>
              {
                "Awwal Productions brings web development, Shopify, paid advertising and social media expertise into one clear, collaborative process for brands worldwide."
              }
            </p>
          </div>
        </section>
        <section className="padded-section">
          <div className="container two-columns">
            <div className="reveal">
              <span className="eyebrow">{"Our story"}</span>
              <h2 className="section-title">
                {"We don't just"}
                <br />
                {"make things "}
                <span className="text-lime">{"look good."}</span>
              </h2>
              <p className="lead">
                {
                  "We help brands communicate clearly, connect with the right audience and establish a stronger presence online. Our work brings web development, e-commerce and marketing together under one creative direction."
                }
              </p>
              <p className="lead">
                {
                  "Our team is based in Pakistan, with projects and communication designed for clients in the UK, UAE, US and other international markets. We focus on clarity, realistic scope and work that suits your business."
                }
              </p>
              <Link className="text-link" href="/services" prefetch={false}>
                {"Explore what we do "}
                <span aria-hidden="true">{"↗"}</span>
              </Link>
            </div>
            <div className="about-visual reveal delay-1">
              <img
                alt="Awwal Productions logo"
                decoding="async"
                src="/assets/awwal-logo.svg"
              />
              <span className="badge-left">{"OUR MARK / OUR MINDSET"}</span>
            </div>
          </div>
        </section>
        <section className="padded-section services-section">
          <div className="container">
            <span className="eyebrow reveal">{"What drives us"}</span>
            <h2 className="section-title reveal">
              {"The work matters."}
              <br />
              <span className="text-lime">{"So does the way."}</span>
            </h2>
            <div className="value-grid">
              <div className="value reveal">
                <span className="value-num">{"01 /"}</span>
                <h3>{"Think first."}</h3>
                <p>
                  {
                    "Understand the business and its customers before opening a design file or launching a campaign."
                  }
                </p>
              </div>
              <div className="value reveal delay-1">
                <span className="value-num">{"02 /"}</span>
                <h3>{"Make it matter."}</h3>
                <p>
                  {
                    "Create digital experiences that earn attention, make sense and support real business objectives."
                  }
                </p>
              </div>
              <div className="value reveal delay-2">
                <span className="value-num">{"03 /"}</span>
                <h3>{"Keep improving."}</h3>
                <p>
                  {
                    "Good work is built through collaboration, testing and a willingness to refine the details."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="padded-section">
          <div className="container">
            <div className="intro-layout">
              <div className="reveal">
                <span className="eyebrow">{"Our perspective"}</span>
                <h2 className="section-title">
                  {"Independent"}
                  <br />
                  {"thinking."}
                  <br />
                  <span className="text-lime">{"Global ambition."}</span>
                </h2>
              </div>
              <div className="reveal">
                <p className="intro-quote">
                  {
                    "We work at the intersection of brand communication and technology. Our role is to help businesses explain what they offer, build useful digital experiences and reach the people most likely to need them."
                  }
                </p>
                <Link className="text-link" href="/contact" prefetch={false}>
                  {"Let's get to know your brand "}
                  <span aria-hidden="true">{"↗"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>{"Tell us about the business you want to build."}</h2>
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
