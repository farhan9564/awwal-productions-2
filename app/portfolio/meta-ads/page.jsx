import Link from "next/link";

export const metadata = {
  title: "Meta Ads Case Studies & Campaign Results | Awwal",
  description:
    "Explore reported Meta Ads results for Digikon Solutions and MBM Sports, with spend, qualified contacts, purchase value and links to source reports.",
  alternates: { canonical: "/portfolio/meta-ads" },
  openGraph: {
    title: "Meta Ads Case Studies & Campaign Results | Awwal",
    description:
      "Explore reported Meta Ads results for Digikon Solutions and MBM Sports, with spend, qualified contacts, purchase value and links to source reports.",
    url: "/portfolio/meta-ads",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/portfolio/meta-ads#webpage", "url": "https://awwalproductions.com/portfolio/meta-ads", "name": "Meta Ads Case Studies & Campaign Results | Awwal", "description": "Explore reported Meta Ads results for Digikon Solutions and MBM Sports, with spend, qualified contacts, purchase value and links to source reports.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/portfolio/meta-ads#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Meta Ads Case Studies & Campaign Results", "item": "https://awwalproductions.com/portfolio/meta-ads"}]}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Meta Ads Case Studies & Campaign Results"
          className="page-hero meta-report-hero"
        >
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
              <span>{"Meta Ads"}</span>
            </div>
            <span className="eyebrow">{"AWWAL / PERFORMANCE MARKETING"}</span>
            <h1>
              {"Meta Ads strategy. "}
              <br />
              <span className="text-lime">{"Reported campaign results."}</span>
            </h1>
            <p>
              {
                "Two advertising case studies covering lead generation and online purchases. Explore the campaign approach, reported numbers and links to source documents."
              }
            </p>
            <div className="meta-hero-links">
              <a className="btn btn-lime" href="#cases">
                {"Explore case studies "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
              <a
                className="btn btn-outline"
                href="https://drive.google.com/drive/folders/1x4CCeiI5nRZdmWJy4wgvQFw3NqjG1hXO?usp=drive_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"Campaign documents "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </div>
            <div className="meta-hero-foot">
              <span>{"CAMPAIGN WORK / 2026"}</span>
              <span>{"STRATEGY • CREATIVE • MEASUREMENT"}</span>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="padded-section report-section" id="cases">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">{"Selected campaign studies"}</span>
                <h2 className="section-title">
                  {"The work behind"}
                  <br />
                  <span className="text-lime">{"the results."}</span>
                </h2>
              </div>
              <p className="lead reveal">
                {
                  "Two documented campaign examples, with clear objectives, advertising approaches and key performance indicators."
                }
              </p>
            </div>
            <div className="report-grid">
              <article className="report-card report-digikon reveal">
                {"\n"}
                <div className="report-card-top">
                  <span>{"01 / CAMPAIGN STUDY"}</span>
                  <span>{"WEB DEVELOPMENT AGENCY"}</span>
                </div>
                {"\n"}
                <div className="report-card-head">
                  <div>
                    <h3>
                      {"Digikon Solutions"}
                      <span className="report-title-dot">{"."}</span>
                    </h3>
                    <p>
                      {
                        "Five-month growth program using iterative Meta Ads creative and audience testing."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="report-card-arrow">
                    {"↗"}
                  </span>
                </div>
                {"\n"}
                <div className="report-card-metrics">
                  <div>
                    <b>{"3,900+"}</b>
                    <span>{"Qualified contacts"}</span>
                  </div>
                  <div>
                    <b>{"PKR 352K"}</b>
                    <span>{"Total ad spend"}</span>
                  </div>
                  <div>
                    <b>{"2M+"}</b>
                    <span>{"Impressions"}</span>
                  </div>
                </div>
                {"\n"}
                <Link
                  className="report-card-link"
                  href="/portfolio/digikon"
                  prefetch={false}
                >
                  {"Explore case study "}
                  <span aria-hidden="true">{"↗"}</span>
                </Link>
                {"\n"}
              </article>
              <article className="report-card report-mbm reveal">
                {"\n"}
                <div className="report-card-top">
                  <span>{"02 / CAMPAIGN STUDY"}</span>
                  <span>{"CRICKET E-COMMERCE"}</span>
                </div>
                {"\n"}
                <div className="report-card-head">
                  <div>
                    <h3>
                      {"MBM Sports"}
                      <span className="report-title-dot">{"."}</span>
                    </h3>
                    <p>
                      {
                        "One-month purchase-focused campaigns for a new consumer cricket brand."
                      }
                    </p>
                  </div>
                  <span aria-hidden="true" className="report-card-arrow">
                    {"↗"}
                  </span>
                </div>
                {"\n"}
                <div className="report-card-metrics">
                  <div>
                    <b>{"5.46×"}</b>
                    <span>{"Purchase ROAS"}</span>
                  </div>
                  <div>
                    <b>{"63"}</b>
                    <span>{"Purchases in visible rows"}</span>
                  </div>
                  <div>
                    <b>{"PKR 47.6K"}</b>
                    <span>{"Ad spend"}</span>
                  </div>
                </div>
                {"\n"}
                <Link
                  className="report-card-link"
                  href="/portfolio/mbm"
                  prefetch={false}
                >
                  {"Explore case study "}
                  <span aria-hidden="true">{"↗"}</span>
                </Link>
                {"\n"}
              </article>
            </div>
            <p className="report-evidence-note">
              {
                "Figures are reproduced from portfolio documents supplied through Awwal Productions' Google Drive. They have not been independently audited. ROAS is platform-reported purchase return, not net profit."
              }
            </p>
          </div>
        </section>
        {"\n"}
        <section className="padded-section report-playbook">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">{"Our approach"}</span>
                <h2 className="section-title">
                  {"Creative thinking."}
                  <br />
                  <span className="text-lime">{"Accountable execution."}</span>
                </h2>
              </div>
              <p className="lead reveal">
                {
                  "We connect objectives, message, creative and measurement in a disciplined testing process."
                }
              </p>
            </div>
            <div className="report-process-grid">
              <div>
                <span>{"01 / DISCOVER"}</span>
                <h3>{"Set the goal"}</h3>
                <p>
                  {
                    "Understand the offer, conversion event and customers we want to reach."
                  }
                </p>
              </div>
              <div>
                <span>{"02 / PRODUCE"}</span>
                <h3>{"Test creative"}</h3>
                <p>
                  {"Develop and compare relevant visual and message angles."}
                </p>
              </div>
              <div>
                <span>{"03 / LEARN"}</span>
                <h3>{"Measure clearly"}</h3>
                <p>
                  {
                    "Review campaign signals, conversion tracking and cost efficiency."
                  }
                </p>
              </div>
              <div>
                <span>{"04 / IMPROVE"}</span>
                <h3>{"Iterate and scale"}</h3>
                <p>
                  {
                    "Build on stronger campaign patterns and refine where needed."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="padded-section report-docs">
          <div className="container">
            <div>
              <span className="eyebrow">{"Original source materials"}</span>
              <h2 className="section-title">
                {"Review the"}
                <br />
                <span className="text-lime">{"documentation."}</span>
              </h2>
              <p>
                {
                  "Read the original Digikon Solutions and MBM Sports case studies or browse the full Drive collection. A third, older e-commerce document has inconsistent figures, so its metrics are not published here."
                }
              </p>
              <div className="report-doc-buttons">
                <a
                  className="btn btn-outline"
                  href="https://docs.google.com/document/d/1-Vpx-zyT_J_Kg61i8VxF7G6jJkT0gL6L/edit"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Digikon report ↗"}
                </a>
                <a
                  className="btn btn-outline"
                  href="https://docs.google.com/document/d/1SOo34FwoeUrWpuA6mhzojraP9uNV1sAx/edit"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"MBM Sports report ↗"}
                </a>
                <a
                  className="btn btn-lime"
                  href="https://drive.google.com/drive/folders/1x4CCeiI5nRZdmWJy4wgvQFw3NqjG1hXO?usp=drive_link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Full Drive folder ↗"}
                </a>
              </div>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Looking for growth?"}</span>
                <h2>
                  {"Let's test your"}
                  <br />
                  {"next big idea."}
                </h2>
              </div>
              <Link className="btn btn-lime" href="/contact" prefetch={false}>
                {"Discuss Meta Ads "}
                <span aria-hidden="true">{"↗"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
