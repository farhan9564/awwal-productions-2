import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link aria-label="Awwal Productions home" href="/" prefetch={false}>
              <img
                alt="Awwal Productions"
                className="footer-logo"
                decoding="async"
                height="82"
                loading="lazy"
                src="/assets/awwal-logo.svg"
                width="177"
              />
            </Link>
            <p className="footer-about">
              {
                "Awwal Productions creates custom websites, Shopify stores, paid advertising and social media content for brands in Pakistan and around the world."
              }
            </p>
          </div>
          <div>
            <h3 className="footer-heading">{"Explore"}</h3>
            <nav aria-label="Footer navigation" className="footer-nav">
              <Link href="/" prefetch={false}>
                {"Home"}
              </Link>
              <Link href="/about" prefetch={false}>
                {"About us"}
              </Link>
              <Link href="/services" prefetch={false}>
                {"Services"}
              </Link>
              <Link href="/portfolio" prefetch={false}>
                {"Our work"}
              </Link>
              <Link href="/portfolio/shopify" prefetch={false}>
                Shopify portfolio
              </Link>
              <Link href="/portfolio/meta-ads" prefetch={false}>
                {"Meta Ads portfolio"}
              </Link>
              <Link href="/portfolio/social-media" prefetch={false}>
                Social media portfolio
              </Link>
              <Link href="/process" prefetch={false}>
                {"Our process"}
              </Link>
              <Link href="/contact" prefetch={false}>
                {"Contact"}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="footer-heading">{"Services"}</h3>
            <nav aria-label="Service navigation" className="footer-nav">
              <Link href="/services/web-development" prefetch={false}>
                {"Web Development"}
              </Link>
              <Link href="/services/digital-marketing" prefetch={false}>
                {"Digital Marketing"}
              </Link>
              <Link href="/services/social-media-management" prefetch={false}>
                {"Social Media"}
              </Link>
              <Link href="/services/shopify-development" prefetch={false}>
                {"Shopify Stores"}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="footer-heading">{"Let's connect"}</h3>
            <nav className="footer-nav">
              <a href="mailto:info@awwalproductions.com">
                {"info@awwalproductions.com"}
              </a>
              <a href="tel:+923034045884">{"+92 303 4045884"}</a>
              <a
                href="https://wa.me/923034045884"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"WhatsApp ↗"}
              </a>
              <span className="text-muted" style={{ fontSize: "12px" }}>
                {"Pakistan based. Working worldwide."}
              </span>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            {"© "}
            <span>{new Date().getFullYear()}</span>
            {" Awwal Productions. All rights reserved."}
          </span>
          <span>{"DESIGN   ·   BUILD   ·   GROW"}</span>
        </div>
      </div>
    </footer>
  );
}
