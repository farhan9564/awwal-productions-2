import Link from "next/link";
import { metaCasePath } from "../lib/meta-cases.mjs";
import MetaEvidence from "./MetaEvidence";

export function caseMetadata(study) {
  return {
    title: `${study.name} Meta Ads Case Study | Awwal Productions`,
    description: study.summary,
    alternates: { canonical: metaCasePath(study) },
    openGraph: {
      title: `${study.name} Meta Ads Case Study`,
      description: study.summary,
      url: metaCasePath(study),
      images: ["/assets/awwal-full-logo.png"],
    },
  };
}
export default function MetaCaseStudy({ study }) {
  const structured = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.name} Meta Ads Case Study`,
    description: study.summary,
    url: `https://awwalproductions.com${metaCasePath(study)}`,
    author: { "@type": "Person", name: "Farhan Nadeem" },
    publisher: {
      "@type": "Organization",
      name: "Awwal Productions",
      url: "https://awwalproductions.com",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <section className="report-detail-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio/meta-ads">Meta Ads</Link>
              <span>/</span>
              <span>{study.name}</span>
            </div>
            <div className="report-detail-header">
              <span className="eyebrow">{study.niche}</span>
              <span>META ADS / CASE STUDY</span>
            </div>
            <h1>
              {study.name}
              <span className="report-title-dot">.</span>
            </h1>
            <div className="report-hero-description">
              <p>{study.summary}</p>
              <a className="btn btn-lime" href="#evidence">
                View campaign evidence ↗
              </a>
            </div>
            <p className="meta-report-period">
              <strong>Reporting scope</strong> {study.period}
            </p>
          </div>
        </section>
        <section className="report-detail-main">
          <div className="container">
            <span className="eyebrow">Campaign snapshot</span>
            <h2 className="sub-title">The results behind the work.</h2>
            <dl className="meta-dashboard-metrics">
              {study.metrics.map((metric) => (
                <div className="report-metric" key={metric.label}>
                  <dd>{metric.value}</dd>
                  <dt>{metric.label}</dt>
                  <small>
                    {metric.origin === "calculated"
                      ? "Calculated from dashboard figures"
                      : "Source: supplied dashboard screenshot"}
                    {metric.note && <> · {metric.note}</>}
                  </small>
                </div>
              ))}
            </dl>
            <p className="report-data-caption">
              Result types retain their dashboard labels. Messages, leads,
              orders created and purchases measure different actions.
            </p>
            <div className="report-case-context">
              <div>
                <span className="eyebrow">The objective</span>
                <h2 className="section-title">
                  A clear goal.
                  <br />
                  <span className="text-lime">A focused approach.</span>
                </h2>
                <p className="lead">{study.objective}</p>
                {study.challenge && (
                  <p className="lead">
                    <strong>The challenge:</strong> {study.challenge}
                  </p>
                )}
              </div>
              <div>
                <h3>Strategy & execution</h3>
                <ol className="meta-strategy-list">
                  {study.strategy.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
            {study.reported.length > 0 && (
              <section
                className="meta-business-outcomes"
                aria-labelledby="business-outcomes"
              >
                <span className="eyebrow">Beyond the dashboard</span>
                <h2 className="sub-title" id="business-outcomes">
                  Reported business outcomes
                </h2>
                <p className="lead">
                  These outcomes come from the case-study narrative. They are
                  separate from the platform metrics shown above.
                </p>
                <dl className="meta-dashboard-metrics">
                  {study.reported.map((metric) => (
                    <div className="report-metric" key={metric.label}>
                      <dd>{metric.value}</dd>
                      <dt>{metric.label}</dt>
                      <small>
                        {metric.origin === "calculated"
                          ? "Calculated ratio using reported revenue"
                          : "Source: project narrative"}
                        {metric.note && <> · {metric.note}</>}
                      </small>
                    </div>
                  ))}
                </dl>
              </section>
            )}
            <details className="meta-source-notes">
              <summary>Reporting scope & source notes</summary>
              <ul>
                {study.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </details>
          </div>
        </section>
        <section className="padded-section report-docs" id="evidence">
          <div className="container">
            <span className="eyebrow">Original campaign evidence</span>
            <h2 className="section-title">
              See the <span className="text-lime">source results.</span>
            </h2>
            <p className="lead">
              Screenshots extracted from the supplied case-study documents. Open
              an image to inspect its rows, totals and reporting window.
            </p>
            <MetaEvidence images={study.images} />
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <div className="cta-inner">
              <div>
                <span className="eyebrow">Let’s discuss your goals</span>
                <h2>Ready to plan your next campaign?</h2>
              </div>
              <Link className="btn btn-lime" href="/contact">
                Discuss Meta Ads ↗
              </Link>
            </div>
            <div className="single-links">
              <Link href="/portfolio/meta-ads" className="text-link">
                Back to all Meta Ads case studies ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
