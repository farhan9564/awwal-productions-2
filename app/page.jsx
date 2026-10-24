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
        <div aria-label="Our four services" className="marquee">
          <div className="marquee-track">
            <div className="marquee-group">
              <span>{"Web Development"}</span>
              <b>{"✳"}</b>
              <span>{"Digital Marketing"}</span>
              <b>{"✳"}</b>
              <span>{"Social Media Management"}</span>
              <b>{"✳"}</b>
              <span>{"Shopify Development"}</span>
              <b>{"✳"}</b>
            </div>
            <div aria-hidden="true" className="marquee-group">
              <span>{"Web Development"}</span>
              <b>{"✳"}</b>
              <span>{"Digital Marketing"}</span>
              <b>{"✳"}</b>
              <span>{"Social Media Management"}</span>
              <b>{"✳"}</b>
              <span>{"Shopify Development"}</span>
              <b>{"✳"}</b>
            </div>
          </div>
        </div>
        {"\n"}
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
            <div className="service-grid">
              <Link
                className="service-tile reveal"
                href="/services/web-development"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/01"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <path d="M10 9 3 18l7 9M26 9l7 9-7 9M21 5l-6 26"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Web Development"}</h3>
                <p>
                  {
                    "Custom B2B websites, corporate pages and enquiry-focused experiences that turn complex offers into clear next steps."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link>
              <Link
                className="service-tile reveal"
                href="/services/digital-marketing"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/02"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <path d="M6 15v7a3 3 0 0 0 3 3h4l4 7h4l-3-9m-9-8c8 0 13-4 20-8v22c-7-4-12-8-20-8M28 7v22"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Digital Marketing"}</h3>
                <p>
                  {
                    "Meta and Google Ads strategy, creative testing and performance reporting shaped around your business goals."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link>
              <Link
                className="service-tile reveal"
                href="/services/social-media-management"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/03"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <rect height="24" rx="7" width="24" x="6" y="6"></rect>
                      <circle cx="18" cy="18" r="6"></circle>
                      <path d="M25.5 11h.01"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Social Media Management"}</h3>
                <p>
                  {
                    "Instagram and Facebook content calendars, reels, carousels and brand communication that stays consistent."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link>
              <Link
                className="service-tile reveal"
                href="/services/shopify-development"
                prefetch={false}
              >
                <div className="tile-head">
                  <span className="tile-no">{"/04"}</span>
                  <div className="tile-graphic">
                    <svg viewBox="0 0 36 36">
                      <path d="M8 13h20l-2 18H10L8 13Zm5 2v-5a5 5 0 0 1 10 0v5"></path>
                    </svg>
                  </div>
                </div>
                <h3>{"Shopify Store Development"}</h3>
                <p>
                  {
                    "Shopify stores with clear collections, useful product pages and thoughtful mobile shopping journeys."
                  }
                </p>
                <div className="tile-footer">
                  <span>{"EXPLORE SERVICE"}</span>
                  <span aria-hidden="true">{"↗"}</span>
                </div>
              </Link>
            </div>
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
        <section className="padded-section work-section">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow dark">{"A look at our work"}</span>
                <h2 className="section-title">
                  {"Selected work."}
                  <br />
                  <span className="text-lime">{"Across industries."}</span>
                </h2>
              </div>
              <p className="lead reveal">
                {
                  "Explore selected websites for manufacturers, fashion retailers and online stores. Each project links to the original website."
                }
              </p>
            </div>
            <div className="portfolio-project-grid featured-grid">
              <article className="portfolio-project reveal" data-category="web">
                {"\n"}
                <Link
                  aria-label="Read the Al Badar Impex project page"
                  className="portfolio-art-link"
                  href="/portfolio/al-badar-impex"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#cbff36",
                      "--project-base": "#202e29",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="abisportswear.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"abisportswear.com"}
                        </span>
                        <span className="art-browser-menu">{"↗"}</span>
                      </div>
                      {"\n"}
                      <div className="art-browser-body site-preview-body">
                        {"\n"}
                        <div
                          className="site-preview-fallback"
                          aria-hidden="true"
                        >
                          <span className="site-preview-fallback-mark">
                            {"A"}
                          </span>
                          <span className="site-preview-fallback-label">
                            {"PROJECT SHOWCASE"}
                          </span>
                          <strong>{"abisportswear.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/abisportswear.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for AL BADAR IMPEX"
                        />
                        {"\n"}
                        <span
                          aria-hidden="true"
                          className="site-preview-bottom"
                        >
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
                  <span className="project-number">{"01 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"MANUFACTURING "}
                      <span>{"·"}</span>
                      {" B2B website"}
                    </div>
                    <h3>
                      <Link href="/portfolio/al-badar-impex" prefetch={false}>
                        {"Al Badar Impex"}
                      </Link>
                    </h3>
                    <p>{"B2B / Sportswear Manufacturing"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Al Badar Impex"
                    className="project-arrow"
                    href="/portfolio/al-badar-impex"
                    prefetch={false}
                  >
                    {"↗"}
                  </Link>
                </div>
                {"\n"}
              </article>
              <article className="portfolio-project reveal" data-category="web">
                {"\n"}
                <Link
                  aria-label="Read the Avatory Industries project page"
                  className="portfolio-art-link"
                  href="/portfolio/avatory-industries"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#8fc7ff",
                      "--project-base": "#1d2d45",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="avatoryindustries.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"avatoryindustries.com"}
                        </span>
                        <span className="art-browser-menu">{"↗"}</span>
                      </div>
                      {"\n"}
                      <div className="art-browser-body site-preview-body">
                        {"\n"}
                        <div
                          className="site-preview-fallback"
                          aria-hidden="true"
                        >
                          <span className="site-preview-fallback-mark">
                            {"A"}
                          </span>
                          <span className="site-preview-fallback-label">
                            {"PROJECT SHOWCASE"}
                          </span>
                          <strong>{"avatoryindustries.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/avatoryindustries.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for AVATORY INDUSTRIES"
                        />
                        {"\n"}
                        <span
                          aria-hidden="true"
                          className="site-preview-bottom"
                        >
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
                  <span className="project-number">{"02 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"B2B / SPORTSWEAR "}
                      <span>{"·"}</span>
                      {" B2B website"}
                    </div>
                    <h3>
                      <Link
                        href="/portfolio/avatory-industries"
                        prefetch={false}
                      >
                        {"Avatory Industries"}
                      </Link>
                    </h3>
                    <p>{"B2B / Sportswear Manufacturing"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Avatory Industries"
                    className="project-arrow"
                    href="/portfolio/avatory-industries"
                    prefetch={false}
                  >
                    {"↗"}
                  </Link>
                </div>
                {"\n"}
              </article>
              <article
                className="portfolio-project reveal"
                data-category="web commerce"
              >
                {"\n"}
                <Link
                  aria-label="Read the Iqra Studio project page"
                  className="portfolio-art-link"
                  href="/portfolio/iqra-studio"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#f2cde2",
                      "--project-base": "#513d4b",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="iqrastudio.online"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"iqrastudio.online"}
                        </span>
                        <span className="art-browser-menu">{"↗"}</span>
                      </div>
                      {"\n"}
                      <div className="art-browser-body site-preview-body">
                        {"\n"}
                        <div
                          className="site-preview-fallback"
                          aria-hidden="true"
                        >
                          <span className="site-preview-fallback-mark">
                            {"A"}
                          </span>
                          <span className="site-preview-fallback-label">
                            {"PROJECT SHOWCASE"}
                          </span>
                          <strong>{"iqrastudio.online"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/iqrastudio.online.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for IQRA STUDIO"
                        />
                        {"\n"}
                        <span
                          aria-hidden="true"
                          className="site-preview-bottom"
                        >
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
                  <span className="project-number">{"03 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"E-COMMERCE "}
                      <span>{"·"}</span>
                      {" E-commerce website"}
                    </div>
                    <h3>
                      <Link href="/portfolio/iqra-studio" prefetch={false}>
                        {"Iqra Studio"}
                      </Link>
                    </h3>
                    <p>{"Women's Fashion / Online Store"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Iqra Studio"
                    className="project-arrow"
                    href="/portfolio/iqra-studio"
                    prefetch={false}
                  >
                    {"↗"}
                  </Link>
                </div>
                {"\n"}
              </article>
              <article
                className="portfolio-project reveal"
                data-category="web commerce"
              >
                {"\n"}
                <Link
                  aria-label="Read the Fast Apparel project page"
                  className="portfolio-art-link"
                  href="/portfolio/fast-apparel-store"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#f8d8b6",
                      "--project-base": "#37322e",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="fastapparel.co"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"fastapparel.co"}
                        </span>
                        <span className="art-browser-menu">{"↗"}</span>
                      </div>
                      {"\n"}
                      <div className="art-browser-body site-preview-body">
                        {"\n"}
                        <div
                          className="site-preview-fallback"
                          aria-hidden="true"
                        >
                          <span className="site-preview-fallback-mark">
                            {"A"}
                          </span>
                          <span className="site-preview-fallback-label">
                            {"PROJECT SHOWCASE"}
                          </span>
                          <strong>{"fastapparel.co"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/fastapparel.co.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for FAST APPAREL"
                        />
                        {"\n"}
                        <span
                          aria-hidden="true"
                          className="site-preview-bottom"
                        >
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
                  <span className="project-number">{"04 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"E-COMMERCE "}
                      <span>{"·"}</span>
                      {" E-commerce website"}
                    </div>
                    <h3>
                      <Link
                        href="/portfolio/fast-apparel-store"
                        prefetch={false}
                      >
                        {"Fast Apparel"}
                      </Link>
                    </h3>
                    <p>{"Everyday Apparel / Online Store"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Fast Apparel"
                    className="project-arrow"
                    href="/portfolio/fast-apparel-store"
                    prefetch={false}
                  >
                    {"↗"}
                  </Link>
                </div>
                {"\n"}
              </article>
            </div>
            <div className="portfolio-home-bottom">
              <span>{"25 WEBSITE PROJECTS • META ADS COLLECTION"}</span>
              <Link className="btn btn-dark" href="/portfolio" prefetch={false}>
                {"See all our work "}
                <span aria-hidden="true" className="arr">
                  {"↗"}
                </span>
              </Link>
            </div>
          </div>
        </section>
        {"\n"}
        <section className="padded-section home-ads-cases">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow">{"Beyond development"}</span>
                <h2 className="section-title">
                  {"Campaign results."}
                  <br />
                  <span className="text-lime">{"With context."}</span>
                </h2>
              </div>
              <div className="reveal">
                <p className="lead">
                  {
                    "Two campaign case studies from our Meta Ads portfolio. Explore the strategy, source reports and results."
                  }
                </p>
                <Link
                  className="text-link"
                  href="/portfolio/meta-ads"
                  prefetch={false}
                >
                  {"Discover Meta Ads projects ↗"}
                </Link>
              </div>
            </div>
            <div className="report-grid report-grid-home">
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
          </div>
        </section>
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
                    "Explore 25 web development projects and two documented Meta Ads studies. Our project covers are branded illustrations, not screenshots of those sites."
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
