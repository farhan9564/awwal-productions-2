import Link from "next/link";

export const metadata = {
  title:
    "Fast Apparel / Concept | Fashion Website Concept Website Project | Awwal",
  description:
    "Explore Fast Apparel / Concept in the Awwal Productions website portfolio: Fashion website concept. See the project overview and open the original website.",
  alternates: { canonical: "/portfolio/fast-apparel-concept" },
  openGraph: {
    title:
      "Fast Apparel / Concept | Fashion Website Concept Website Project | Awwal",
    description:
      "Explore Fast Apparel / Concept in the Awwal Productions website portfolio: Fashion website concept. See the project overview and open the original website.",
    url: "/portfolio/fast-apparel-concept",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/portfolio/fast-apparel-concept#webpage", "url": "https://awwalproductions.com/portfolio/fast-apparel-concept", "name": "Fast Apparel / Concept | Fashion Website Concept Website Project | Awwal", "description": "Explore Fast Apparel / Concept in the Awwal Productions website portfolio: Fashion website concept. See the project overview and open the original website.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/portfolio/fast-apparel-concept#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://awwalproductions.com/portfolio"}, {"@type": "ListItem", "position": 3, "name": "Fast Apparel / Concept", "item": "https://awwalproductions.com/portfolio/fast-apparel-concept"}]}, {"@type": "CreativeWork", "name": "Fast Apparel / Concept — Website Portfolio", "url": "https://awwalproductions.com/portfolio/fast-apparel-concept", "description": "Explore Fast Apparel / Concept in the Awwal Productions website portfolio: Fashion website concept. See the project overview and open the original website.", "publisher": {"@id": "https://awwalproductions.com/#organization"}, "about": {"@type": "WebSite", "url": "https://fast-apparel.vercel.app/"}}]}',
        }}
      />
      <main id="main">
        <section className="project-single-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <Link href="/portfolio" prefetch={false}>
                {"Portfolio"}
              </Link>
              <span>{"/"}</span>
              <span>{"Fast Apparel / Concept"}</span>
            </div>
            <div className="project-single-top">
              <span className="eyebrow">
                {"PROJECT 02 / AWWAL PRODUCTIONS"}
              </span>
              <span className="single-side-index">
                {"WEB DEVELOPMENT / APPAREL"}
              </span>
            </div>
            <h1>
              {"Fast Apparel / Concept"}
              <span className="single-title-dot">{"."}</span>
            </h1>
            <div className="single-summary-row">
              <p>
                {
                  "Fashion Website Concept website portfolio project. Explore the brand context and view the original website."
                }
              </p>
              <a
                className="btn btn-lime"
                href="https://fast-apparel.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"Visit project website "}
                <span aria-hidden="true" className="arr">
                  {"↗"}
                </span>
              </a>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="project-featured-section">
          <div className="container">
            <div className="single-preview">
              <div
                className="project-art"
                style={{
                  "--project-accent": "#e8e1cb",
                  "--project-base": "#34353c",
                }}
              >
                {"\n"}
                <div className="art-orb art-orb-a"></div>
                <div className="art-orb art-orb-b"></div>
                {"\n"}
                <div
                  className="art-browser site-preview"
                  data-preview-site="fast-apparel.vercel.app"
                >
                  {"\n"}
                  <div className="art-browser-bar">
                    <span className="art-dots" aria-hidden="true">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span className="art-browser-domain">
                      {"fast-apparel.vercel.app"}
                    </span>
                    <span className="art-browser-menu">{"↗"}</span>
                  </div>
                  {"\n"}
                  <div className="art-browser-body site-preview-body">
                    {"\n"}
                    <div className="site-preview-fallback" aria-hidden="true">
                      <span className="site-preview-fallback-mark">{"A"}</span>
                      <span className="site-preview-fallback-label">
                        {"PROJECT SHOWCASE"}
                      </span>
                      <strong>{"fast-apparel.vercel.app"}</strong>
                      <span className="site-preview-fallback-action">
                        {"VIEW PROJECT ↗"}
                      </span>
                    </div>
                    {"\n"}
                    <img
                      className="site-preview-image is-ready"
                      src="/assets/previews/fast-apparel-concept-front.webp"
                      width="1200"
                      height="780"
                      loading="lazy"
                      decoding="async"
                      alt="Awwal Productions portfolio cover for FAST APPAREL"
                    />
                    {"\n"}
                    <span aria-hidden="true" className="site-preview-bottom">
                      {"PROJECT SHOWCASE "}
                      <b>{"↗"}</b>
                    </span>
                    {"\n"}
                  </div>
                </div>
                {"\n"}
                <div aria-hidden="true" className="art-corner-label">
                  {"AWWAL / PORTFOLIO"}
                </div>
                {"\n"}
              </div>
              <div className="single-art-label">
                <span>{"PROJECT SHOWCASE"}</span>
                <span>{"VISIT THE LIVE WEBSITE ↗"}</span>
              </div>
            </div>
            <div className="single-project-data">
              <div>
                <span>{"PROJECT"}</span>
                <strong>{"Fast Apparel / Concept"}</strong>
              </div>
              <div>
                <span>{"SECTOR"}</span>
                <strong>{"Fashion & Apparel"}</strong>
              </div>
              <div>
                <span>{"CATEGORY"}</span>
                <strong>{"Web development preview"}</strong>
              </div>
              <div>
                <span>{"WEBSITE"}</span>
                <a
                  href="https://fast-apparel.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"fast-apparel.vercel.app ↗"}
                </a>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="padded-section single-story">
          <div className="container single-story-grid">
            <div className="reveal">
              <span className="eyebrow">{"The project"}</span>
              <h2 className="section-title">
                {"A closer"}
                <br />
                <span className="text-lime">{"look."}</span>
              </h2>
            </div>
            <div className="single-story-copy reveal">
              <h3>{"Fast Apparel / Concept: Fashion website concept"}</h3>
              <p>
                {
                  "A fashion site concept is an opportunity to explore product hierarchy, visual rhythm and merchandising direction before a full launch."
                }
              </p>
              <p>
                {
                  "A coherent design system helps keep the experience consistent as new categories, products and seasonal campaigns are introduced. This overview is based on the project category and supplied link; exact deliverables and results have not been independently verified."
                }
              </p>
              <div className="single-links">
                <a
                  className="btn btn-lime"
                  href="https://fast-apparel.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"View website "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
                <Link
                  className="btn btn-outline"
                  href="/portfolio"
                  prefetch={false}
                >
                  {"All projects "}
                  <span aria-hidden="true">{"←"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="single-next-project">
          <div className="container">
            <span className="eyebrow">{"Up next"}</span>
            <Link href="/portfolio/verda-apparels" prefetch={false}>
              {"Verda Apparels "}
              <span aria-hidden="true">{"↗"}</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
