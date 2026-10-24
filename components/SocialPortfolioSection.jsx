import Link from "next/link";
import {
  socialProjects,
  socialPortfolioPath,
} from "../lib/social-projects.mjs";
import SocialProjectCard from "./SocialProjectCard";
export default function SocialPortfolioSection() {
  return (
    <section className="padded-section social-portfolio-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              Social media management / Selected work
            </span>
            <h2 className="section-title">
              Distinct brands.
              <br />
              <span className="text-lime">Recognisable voices.</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              Explore five Instagram brands across cricket, celebrations, dental
              instruments and wedding photography.
            </p>
            <Link href={socialPortfolioPath} className="text-link">
              Explore social media portfolio ↗
            </Link>
          </div>
        </div>
        <div className="social-project-grid">
          {socialProjects.map((project, index) => (
            <SocialProjectCard
              key={project.handle}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
