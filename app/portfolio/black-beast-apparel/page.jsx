import Link from "next/link";

export const metadata = {
  title:
    "Black Beast Apparel | Streetwear And Custom Apparel Website Project | Awwal",
  description:
    "Explore Black Beast Apparel in the Awwal Productions website portfolio: Streetwear and custom apparel. See the project overview and open the original website.",
  alternates: { canonical: "/portfolio/black-beast-apparel" },
  openGraph: {
    title:
      "Black Beast Apparel | Streetwear And Custom Apparel Website Project | Awwal",
    description:
      "Explore Black Beast Apparel in the Awwal Productions website portfolio: Streetwear and custom apparel. See the project overview and open the original website.",
    url: "/portfolio/black-beast-apparel",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/portfolio/black-beast-apparel#webpage", "url": "https://awwalproductions.com/portfolio/black-beast-apparel", "name": "Black Beast Apparel | Streetwear And Custom Apparel Website Project | Awwal", "description": "Explore Black Beast Apparel in the Awwal Productions website portfolio: Streetwear and custom apparel. See the project overview and open the original website.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/portfolio/black-beast-apparel#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://awwalproductions.com/portfolio"}, {"@type": "ListItem", "position": 3, "name": "Black Beast Apparel", "item": "https://awwalproductions.com/portfolio/black-beast-apparel"}]}, {"@type": "CreativeWork", "name": "Black Beast Apparel — Website Portfolio", "url": "https://awwalproductions.com/portfolio/black-beast-apparel", "description": "Explore Black Beast Apparel in the Awwal Productions website portfolio: Streetwear and custom apparel. See the project overview and open the original website.", "publisher": {"@id": "https://awwalproductions.com/#organization"}, "about": {"@type": "WebSite", "url": "https://blackbeastapparel.com/"}}]}',
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
              <span>{"Black Beast Apparel"}</span>
            </div>
            <div className="project-single-top">
              <span className="eyebrow">
                {"PROJECT 07 / AWWAL PRODUCTIONS"}
              </span>
              <span className="single-side-index">
                {"WEB DEVELOPMENT / MANUFACTURING"}
              </span>
            </div>
            <h1>
              {"Black Beast Apparel"}
              <span className="single-title-dot">{"."}</span>
            </h1>
            <div className="single-summary-row">
              <p>
                {
                  "Streetwear And Custom Apparel website portfolio project. Explore the brand context and view the original website."
                }
              </p>
              <a
                className="btn btn-lime"
                href="https://blackbeastapparel.com/"
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
                  "--project-accent": "#f3946c",
                  "--project-base": "#352229",
                }}
              >
                {"\n"}
                <div className="art-orb art-orb-a"></div>
                <div className="art-orb art-orb-b"></div>
                {"\n"}
                <div
                  className="art-browser site-preview"
                  data-preview-site="blackbeastapparel.com"
                >
                  {"\n"}
                  <div className="art-browser-bar">
                    <span className="art-dots" aria-hidden="true">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span className="art-browser-domain">
                      {"blackbeastapparel.com"}
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
                      <strong>{"blackbeastapparel.com"}</strong>
                      <span className="site-preview-fallback-action">
                        {"VIEW PROJECT ↗"}
                      </span>
                    </div>
                    {"\n"}
                    <img
                      className="site-preview-image is-ready"
                      src="/assets/previews/black-beast-apparel-front.webp"
                      width="1200"
                      height="780"
                      loading="lazy"
                      decoding="async"
                      alt="Awwal Productions portfolio cover for BLACK BEAST"
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
                <strong>{"Black Beast Apparel"}</strong>
              </div>
              <div>
                <span>{"SECTOR"}</span>
                <strong>{"Streetwear & Sportswear Manufacturing"}</strong>
              </div>
              <div>
                <span>{"CATEGORY"}</span>
                <strong>{"B2B website"}</strong>
              </div>
              <div>
                <span>{"WEBSITE"}</span>
                <a
                  href="https://blackbeastapparel.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"blackbeastapparel.com ↗"}
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
              <h3>{"Black Beast Apparel: Streetwear and custom apparel"}</h3>
              <p>
                {
                  "Streetwear and custom-apparel visitors often look for styles, customization options and evidence of production capability."
                }
              </p>
              <p>
                {
                  "Strong visuals help establish aesthetic direction, while concise details and enquiry options help communicate what a business offers. This overview is based on the project category and supplied link; exact deliverables and results have not been independently verified."
                }
              </p>
              <div className="single-links">
                <a
                  className="btn btn-lime"
                  href="https://blackbeastapparel.com/"
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
            <Link href="/portfolio/fast-apparel-02" prefetch={false}>
              {"Fast Apparel / Edition 02 "}
              <span aria-hidden="true">{"↗"}</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
