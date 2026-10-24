import Link from "next/link";
import { featuredMetaCases } from "../lib/meta-cases.mjs";
import MetaCaseCard from "./MetaCaseCard";
export default function FeaturedMetaCases() {
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
              Featured Meta Ads work for Iqra Studio and Kuwait Electronics,
              with strategy, results and source screenshots.
            </p>
            <Link href="/portfolio/meta-ads" className="text-link">
              Discover all Meta Ads projects ↗
            </Link>
          </div>
        </div>
        <div className="report-grid">
          {featuredMetaCases.map((study, index) => (
            <MetaCaseCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
