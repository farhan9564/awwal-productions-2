import Link from "next/link";

export const metadata = {
  title: "Website & E-commerce Portfolio | Awwal Productions",
  description:
    "Explore 13 Awwal Productions website portfolio projects, including B2B manufacturers, fashion e-commerce brands, Shopify stores and Meta Ads case studies.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Website & E-commerce Portfolio | Awwal Productions",
    description:
      "Explore 13 Awwal Productions website portfolio projects, including B2B manufacturers, fashion e-commerce brands, Shopify stores and Meta Ads case studies.",
    url: "/portfolio",
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
            '{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://awwalproductions.com/#organization", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "logo": "https://awwalproductions.com/assets/awwal-full-logo.png", "email": "info@awwalproductions.com", "telephone": "+923034045884", "description": "Website development, Shopify store development, digital advertising and social media management for international brands.", "address": {"@type": "PostalAddress", "addressCountry": "PK"}, "contactPoint": {"@type": "ContactPoint", "contactType": "sales", "email": "info@awwalproductions.com", "telephone": "+923034045884", "availableLanguage": ["English", "Urdu"]}}, {"@type": "WebSite", "@id": "https://awwalproductions.com/#website", "name": "Awwal Productions", "url": "https://awwalproductions.com/", "publisher": {"@id": "https://awwalproductions.com/#organization"}}, {"@type": "WebPage", "@id": "https://awwalproductions.com/portfolio#webpage", "url": "https://awwalproductions.com/portfolio", "name": "Website & E-commerce Portfolio | Awwal Productions", "description": "Explore 13 Awwal Productions website portfolio projects, including B2B manufacturers, fashion e-commerce brands, Shopify stores and Meta Ads case studies.", "isPartOf": {"@id": "https://awwalproductions.com/#website"}, "inLanguage": "en"}, {"@type": "BreadcrumbList", "@id": "https://awwalproductions.com/portfolio#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://awwalproductions.com/"}, {"@type": "ListItem", "position": 2, "name": "Website & E-commerce Portfolio", "item": "https://awwalproductions.com/portfolio"}]}]}',
        }}
      />
      <main id="main">
        <section
          aria-label="Website & E-commerce Portfolio"
          className="page-hero"
        >
          <div className="container">
            <div className="crumbs">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <span>{"/"}</span>
              <span>{"PORTFOLIO"}</span>
            </div>
            <span className="eyebrow">{"AWWAL PRODUCTIONS / PORTFOLIO"}</span>
            <h1>
              {"Websites, stores "}
              <br />
              <span className="text-lime">{"& campaign work."}</span>
            </h1>
            <p>
              {
                "Explore 13 websites across B2B manufacturing, fashion, retail and cricket e-commerce, plus documented Meta Ads work for lead generation and purchases."
              }
            </p>
          </div>
        </section>
        <section className="padded-section work-section">
          <div className="container">
            <div className="section-head">
              <div className="reveal">
                <span className="eyebrow dark">
                  {"Selected client & development projects"}
                </span>
                <h2 className="section-title">
                  {"Real brands."}
                  <br />
                  <span style={{ color: "#526d1a" }}>{"Real projects."}</span>
                </h2>
              </div>
              <p className="lead reveal">
                {
                  "Browse our website portfolio by category, open individual project overviews and visit each live link. For advertising, explore campaign objectives, reported performance and the original source records."
                }
              </p>
            </div>
            {"\n"}
            <div className="portfolio-count-row">
              <span>
                <strong>{"13"}</strong>
                {" web development projects"}
              </span>
              <span>
                <strong>{"01"}</strong>
                {" Meta Ads collection"}
              </span>
              <span>{"INTERNATIONAL-READY DIGITAL WORK ↗"}</span>
            </div>
            {"\n"}
            <div
              aria-label="Filter portfolio projects"
              className="work-filters"
              role="group"
            >
              <button
                aria-pressed="true"
                className="filter active"
                data-filter="all"
                type="button"
              >
                {"All work "}
                <span>{"14"}</span>
              </button>
              <button
                aria-pressed="false"
                className="filter"
                data-filter="web"
                type="button"
              >
                {"Web Development "}
                <span>{"13"}</span>
              </button>
              <button
                aria-pressed="false"
                className="filter"
                data-filter="commerce"
                type="button"
              >
                {"Online Stores "}
                <span>{"4"}</span>
              </button>
              <button
                aria-pressed="false"
                className="filter"
                data-filter="ads"
                type="button"
              >
                {"Meta Ads "}
                <span>{"1"}</span>
              </button>
            </div>
            {"\n"}
            <div className="portfolio-project-grid">
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
                  aria-label="Read the Fast Apparel / Concept project page"
                  className="portfolio-art-link"
                  href="/portfolio/fast-apparel-concept"
                  prefetch={false}
                >
                  {"\n"}
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
                          <strong>{"fast-apparel.vercel.app"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/fast-apparel.vercel.app.webp"
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
                  <span className="project-number">{"02 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"WEB PREVIEW "}
                      <span>{"·"}</span>
                      {" Web development preview"}
                    </div>
                    <h3>
                      <Link
                        href="/portfolio/fast-apparel-concept"
                        prefetch={false}
                      >
                        {"Fast Apparel / Concept"}
                      </Link>
                    </h3>
                    <p>{"Fashion & Apparel"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Fast Apparel / Concept"
                    className="project-arrow"
                    href="/portfolio/fast-apparel-concept"
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
                  aria-label="Read the Verda Apparels project page"
                  className="portfolio-art-link"
                  href="/portfolio/verda-apparels"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#b6d2a3",
                      "--project-base": "#2d3937",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="verdaapparels.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"verdaapparels.com"}
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
                          <strong>{"verdaapparels.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/verdaapparels.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for VERDA APPARELS"
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
                      {"B2B / APPAREL "}
                      <span>{"·"}</span>
                      {" Business website"}
                    </div>
                    <h3>
                      <Link href="/portfolio/verda-apparels" prefetch={false}>
                        {"Verda Apparels"}
                      </Link>
                    </h3>
                    <p>{"Apparel & Manufacturing"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Verda Apparels"
                    className="project-arrow"
                    href="/portfolio/verda-apparels"
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
                  <span className="project-number">{"04 / AWWAL WORK"}</span>
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
              <article className="portfolio-project reveal" data-category="web">
                {"\n"}
                <Link
                  aria-label="Read the Safe & Sound Industries project page"
                  className="portfolio-art-link"
                  href="/portfolio/safe-and-sound-industries"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#ceec9a",
                      "--project-base": "#303c32",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="safeandsoundindustries.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"safeandsoundindustries.com"}
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
                          <strong>{"safeandsoundindustries.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/safeandsoundindustries.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for SAFE & SOUND"
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
                  <span className="project-number">{"05 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"B2B / INDUSTRIES "}
                      <span>{"·"}</span>
                      {" Business website"}
                    </div>
                    <h3>
                      <Link
                        href="/portfolio/safe-and-sound-industries"
                        prefetch={false}
                      >
                        {"Safe & Sound Industries"}
                      </Link>
                    </h3>
                    <p>{"Industrial & Manufacturing"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Safe & Sound Industries"
                    className="project-arrow"
                    href="/portfolio/safe-and-sound-industries"
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
                  aria-label="Read the HBR Industries project page"
                  className="portfolio-art-link"
                  href="/portfolio/hbr-industries"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#f6c681",
                      "--project-base": "#3b2c2d",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="hbrindustries.co"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"hbrindustries.co"}
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
                          <strong>{"hbrindustries.co"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/hbrindustries.co.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for HBR INDUSTRIES"
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
                  <span className="project-number">{"06 / AWWAL WORK"}</span>
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
                      <Link href="/portfolio/hbr-industries" prefetch={false}>
                        {"HBR Industries"}
                      </Link>
                    </h3>
                    <p>{"B2B / Custom Sportswear"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for HBR Industries"
                    className="project-arrow"
                    href="/portfolio/hbr-industries"
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
                  aria-label="Read the Black Beast Apparel project page"
                  className="portfolio-art-link"
                  href="/portfolio/black-beast-apparel"
                  prefetch={false}
                >
                  {"\n"}
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
                          <strong>{"blackbeastapparel.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/blackbeastapparel.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for BLACK BEAST"
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
                  <span className="project-number">{"07 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"B2B / STREETWEAR "}
                      <span>{"·"}</span>
                      {" B2B website"}
                    </div>
                    <h3>
                      <Link
                        href="/portfolio/black-beast-apparel"
                        prefetch={false}
                      >
                        {"Black Beast Apparel"}
                      </Link>
                    </h3>
                    <p>{"Streetwear & Sportswear Manufacturing"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Black Beast Apparel"
                    className="project-arrow"
                    href="/portfolio/black-beast-apparel"
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
                  aria-label="Read the Fast Apparel / Edition 02 project page"
                  className="portfolio-art-link"
                  href="/portfolio/fast-apparel-02"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#e3c4fb",
                      "--project-base": "#302b48",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="fast-apparel-02.vercel.app"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"fast-apparel-02.vercel.app"}
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
                          <strong>{"fast-apparel-02.vercel.app"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/fast-apparel-02.vercel.app.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for FAST APPAREL 02"
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
                  <span className="project-number">{"08 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"WEB PREVIEW "}
                      <span>{"·"}</span>
                      {" Web development preview"}
                    </div>
                    <h3>
                      <Link href="/portfolio/fast-apparel-02" prefetch={false}>
                        {"Fast Apparel / Edition 02"}
                      </Link>
                    </h3>
                    <p>{"Fashion & Apparel"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Fast Apparel / Edition 02"
                    className="project-arrow"
                    href="/portfolio/fast-apparel-02"
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
                  aria-label="Read the Lionel Industries project page"
                  className="portfolio-art-link"
                  href="/portfolio/lionel-industries"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#c0dde2",
                      "--project-base": "#293c42",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="lionelindustries.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"lionelindustries.com"}
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
                          <strong>{"lionelindustries.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/lionelindustries.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for LIONEL INDUSTRIES"
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
                  <span className="project-number">{"09 / AWWAL WORK"}</span>
                  {"\n"}
                </Link>
                {"\n"}
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"CORPORATE "}
                      <span>{"·"}</span>
                      {" Business website"}
                    </div>
                    <h3>
                      <Link
                        href="/portfolio/lionel-industries"
                        prefetch={false}
                      >
                        {"Lionel Industries"}
                      </Link>
                    </h3>
                    <p>{"Industries & Manufacturing"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for Lionel Industries"
                    className="project-arrow"
                    href="/portfolio/lionel-industries"
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
                  <span className="project-number">{"10 / AWWAL WORK"}</span>
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
                  aria-label="Read the IBH Apparel project page"
                  className="portfolio-art-link"
                  href="/portfolio/ibh-apparel"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#d4dfff",
                      "--project-base": "#243452",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="ibhapparel.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"ibhapparel.com"}
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
                          <strong>{"ibhapparel.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/ibhapparel.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for IBH APPAREL"
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
                  <span className="project-number">{"11 / AWWAL WORK"}</span>
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
                      <Link href="/portfolio/ibh-apparel" prefetch={false}>
                        {"IBH Apparel"}
                      </Link>
                    </h3>
                    <p>{"Fashion / Online Store"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for IBH Apparel"
                    className="project-arrow"
                    href="/portfolio/ibh-apparel"
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
                  <span className="project-number">{"12 / AWWAL WORK"}</span>
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
              <article
                className="portfolio-project reveal"
                data-category="web commerce"
              >
                {"\n"}
                <Link
                  aria-label="Read the JSONS Sports project page"
                  className="portfolio-art-link"
                  href="/portfolio/jsons-sports"
                  prefetch={false}
                >
                  {"\n"}
                  <div
                    className="project-art"
                    style={{
                      "--project-accent": "#c6f78c",
                      "--project-base": "#304335",
                    }}
                  >
                    {"\n"}
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    {"\n"}
                    <div
                      className="art-browser site-preview"
                      data-preview-site="jsonssports.com"
                    >
                      {"\n"}
                      <div className="art-browser-bar">
                        <span className="art-dots" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                        <span className="art-browser-domain">
                          {"jsonssports.com"}
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
                          <strong>{"jsonssports.com"}</strong>
                          <span className="site-preview-fallback-action">
                            {"VIEW PROJECT ↗"}
                          </span>
                        </div>
                        {"\n"}
                        <img
                          className="site-preview-image is-ready"
                          src="/assets/previews/jsonssports.com.webp"
                          width="1200"
                          height="780"
                          loading="lazy"
                          decoding="async"
                          alt="Awwal Productions portfolio cover for JSONS SPORTS"
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
                  <span className="project-number">{"13 / AWWAL WORK"}</span>
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
                      <Link href="/portfolio/jsons-sports" prefetch={false}>
                        {"JSONS Sports"}
                      </Link>
                    </h3>
                    <p>{"Cricket Equipment / Online Store"}</p>
                  </div>
                  <Link
                    aria-label="Open project details for JSONS Sports"
                    className="project-arrow"
                    href="/portfolio/jsons-sports"
                    prefetch={false}
                  >
                    {"↗"}
                  </Link>
                </div>
                {"\n"}
              </article>
              <article className="portfolio-project reveal" data-category="ads">
                <Link
                  aria-label="Explore Meta Ads case studies"
                  className="portfolio-art-link"
                  href="/portfolio/meta-ads"
                  prefetch={false}
                >
                  <div
                    className="project-art art-marketing"
                    style={{
                      "--project-accent": "#ccff30",
                      "--project-base": "#262041",
                    }}
                  >
                    <div className="art-orb art-orb-a"></div>
                    <div className="art-orb art-orb-b"></div>
                    <div className="meta-art-body">
                      <div className="meta-art-label">
                        {"AWWAL / PERFORMANCE MARKETING"}
                      </div>
                      <div className="meta-art-main">
                        {"BETTER"}
                        <br />
                        <em>{"CAMPAIGNS."}</em>
                      </div>
                      <div className="meta-art-bars">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <div className="meta-art-foot">
                        <span>{"CREATIVE × TESTING × LEARNING"}</span>
                        <b>{"↗"}</b>
                      </div>
                    </div>
                  </div>
                  <span className="project-number">{"14 / AWWAL WORK"}</span>
                </Link>
                <div className="project-caption">
                  <div className="project-caption-left">
                    <div className="project-type">
                      {"PAID MEDIA "}
                      <span>{"·"}</span>
                      {" META ADS"}
                    </div>
                    <h3>
                      <Link href="/portfolio/meta-ads" prefetch={false}>
                        {"Meta Ads Portfolio"}
                      </Link>
                    </h3>
                    <p>{"Two campaign case studies and supporting reports"}</p>
                  </div>
                  <Link
                    aria-label="Explore Meta Ads portfolio"
                    className="project-arrow"
                    href="/portfolio/meta-ads"
                    prefetch={false}
                  >
                    {"↗"}
                  </Link>
                </div>
              </article>
            </div>
            {"\n"}
            <p className="portfolio-note">
              {
                "Portfolio cover artwork is illustrative and is not a screenshot. Website links and project names are supplied by Awwal Productions; campaign numbers are reported figures, not independently audited."
              }
            </p>
            {"\n"}
            <div className="portfolio-bottom-banner reveal">
              <div>
                <span>{"NEED A PROJECT LIKE THESE?"}</span>
                <h3>{"Let's build yours next."}</h3>
              </div>
              <Link className="btn btn-lime" href="/contact" prefetch={false}>
                {"Get a project quote "}
                <span aria-hidden="true">{"↗"}</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner reveal">
              <div>
                <span className="eyebrow">{"Let's collaborate"}</span>
                <h2>
                  {"Let’s create"}
                  <br />
                  {"the next standout."}
                </h2>
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
