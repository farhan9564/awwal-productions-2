import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="padded-section" style={{ paddingTop: "180px" }}>
      <div className="container">
        <span className="eyebrow">404 / Page not found</span>
        <h1 className="section-title">
          Let’s get you <span className="text-lime">back on track.</span>
        </h1>
        <p className="lead">The page you requested could not be found.</p>
        <Link href="/" className="btn btn-lime">
          Back to home ↗
        </Link>
      </div>
    </main>
  );
}
