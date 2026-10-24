import MotionCard from "./MotionCard";
import Link from "next/link";
import { metaCasePath } from "../lib/meta-cases.mjs";

export default function MetaCaseCard({ study, index = 0 }) {
  return (
    <MotionCard
      className={`report-card meta-case-card${study.group === "ecommerce" ? " report-mbm" : " report-digikon"}`}
    >
      <div className="report-card-top">
        <span>{String(index + 1).padStart(2, "0")} / CASE STUDY</span>
        <span>
          {study.group === "ecommerce" ? "E-COMMERCE" : "LEAD GENERATION"}
        </span>
      </div>
      <div className="report-card-head">
        <div>
          <span className="meta-case-niche">{study.niche}</span>
          <h3>
            <Link href={metaCasePath(study)} prefetch={false}>
              {study.name}
              <span className="report-title-dot">.</span>
            </Link>
          </h3>
          <p>{study.summary}</p>
        </div>
      </div>
      <dl className="report-card-metrics">
        {study.metrics.slice(0, 3).map((metric) => (
          <div key={metric.label}>
            <dt>
              {metric.label}
              {metric.origin === "calculated" && <small>Calculated</small>}
            </dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
      <Link
        className="report-card-link"
        href={metaCasePath(study)}
        prefetch={false}
      >
        Read strategy & results <span aria-hidden="true">↗</span>
      </Link>
    </MotionCard>
  );
}
