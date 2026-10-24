import Link from "next/link";
const sections = [
  ["/portfolio", "Web Development"],
  ["/portfolio/shopify", "Shopify Stores"],
  ["/portfolio/meta-ads", "Meta Ads"],
  ["/portfolio/social-media", "Social Media"],
];
export default function PortfolioNav({ active }) {
  return (
    <nav className="portfolio-section-nav" aria-label="Portfolio categories">
      {sections.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          prefetch={false}
          aria-current={active === href ? "page" : undefined}
          className={active === href ? "current" : undefined}
        >
          {label}
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
    </nav>
  );
}
