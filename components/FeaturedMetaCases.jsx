import Link from "next/link";
import { metaCases } from "../lib/meta-cases.mjs";
import MetaCaseCard from "./MetaCaseCard";
export default function FeaturedMetaCases() {
  const featured = [
    "mbm",
    "iqra-studio-ads",
    "ora-aesthetic-wellness",
    "digikon",
  ].map((slug) => metaCases.find((study) => study.slug === slug));
  return (
    <section className="padded-section home-ads-cases">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Beyond development</span>
            <h2 className="section-title">
              Campaign results.
              <br />
              <span className="text-lime">With context.</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              Explore {metaCases.length} Meta Ads case studies across
              e-commerce, clinics, property, education and service
              businesses—with strategy, metrics and campaign screenshots.
            </p>
            <Link href="/portfolio/meta-ads" className="text-link">
              Discover all Meta Ads projects ↗
            </Link>
          </div>
        </div>
        <div className="report-grid">
          {featured.map((study, index) => (
            <MetaCaseCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
