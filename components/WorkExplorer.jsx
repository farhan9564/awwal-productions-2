"use client";
import { useRef, useState } from "react";
import Link from "next/link";

const collections = [
  { name: "Web development", count: "21", unit: "website projects", title: "Built for your next chapter.", description: "Explore business websites across manufacturing, fashion, wellness and more. Start with Fast Apparel Factory and ABI Sports.", href: "/portfolio", tags: ["Business websites", "B2B manufacturing", "Responsive design"], accent: "#caff2b", mark: "</>" },
  { name: "Shopify stores", count: "04", unit: "Shopify projects", title: "From first visit to checkout.", description: "Discover online stores created for Fast Apparel, IBH Apparel, JSONS Sports and Iqra Studio.", href: "/portfolio/shopify", tags: ["Store development", "Product collections", "Shopping experiences"], accent: "#b6b0ff", mark: "↗" },
  { name: "Meta Ads", count: "13", unit: "campaign case studies", title: "The strategy behind the results.", description: "Explore campaign objectives, creative strategies and source screenshots. Featuring Iqra Studio and Kuwait Electronics.", href: "/portfolio/meta-ads", tags: ["E-commerce", "Lead generation", "Source-backed results"], accent: "#8ee3d0", mark: "◎" },
  { name: "Social media", count: "05", unit: "brand portfolios", title: "A consistent voice for your brand.", description: "Browse our social media portfolio across sports, events, dental instruments and wedding photography.", href: "/portfolio/social-media", tags: ["Brand presence", "Content direction", "Social management"], accent: "#ffbb92", mark: "✳" },
];

export default function WorkExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  function onKeyDown(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % collections.length;
    if (event.key === "ArrowLeft") next = (index + collections.length - 1) % collections.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = collections.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <section className="work-explorer" aria-labelledby="explore-title">
      <div className="container">
        <div className="explorer-heading"><span className="eyebrow">Explore our expertise</span><h2 id="explore-title">Different disciplines. One creative partner.</h2></div>
        <div className="explorer-tabs" role="tablist" aria-label="Explore portfolio collections">
          {collections.map((item, index) => <button key={item.href} ref={node => { tabs.current[index] = node; }} type="button" role="tab" id={`work-tab-${index}`} aria-selected={active === index} aria-controls={`work-panel-${index}`} tabIndex={active === index ? 0 : -1} onKeyDown={event => onKeyDown(event, index)} onClick={() => setActive(index)}><span className="explorer-tab-number">0{index + 1}</span>{item.name}<span aria-hidden="true">↗</span></button>)}
        </div>
        {collections.map((item, index) => <div key={item.href} role="tabpanel" id={`work-panel-${index}`} aria-labelledby={`work-tab-${index}`} hidden={active !== index} tabIndex={0} className="explorer-panel" style={{ "--explorer-accent": item.accent }}>
          <div className="explorer-copy"><span className="explorer-kicker">SELECTED WORK / {item.name}</span><h3>{item.title}</h3><p>{item.description}</p><div className="explorer-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link className="text-link" href={item.href} prefetch={false}>Explore {item.name.toLowerCase()} <span aria-hidden="true">↗</span></Link></div>
          <div className="explorer-stat"><span className="explorer-symbol" aria-hidden="true">{item.mark}</span><strong>{item.count}</strong><span>{item.unit}</span><span className="explorer-stat-line" aria-hidden="true" /></div>
        </div>)}
      </div>
    </section>
  );
}
