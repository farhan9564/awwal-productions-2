import SocialProjectCard from "./SocialProjectCard";
import Link from "next/link";
import {
  socialProjects,
  socialPortfolioPath,
} from "../lib/social-projects.mjs";
export default function SocialPortfolioTeaser() {
  return (
    <section className="padded-section social-portfolio-teaser">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Social media management</span>
            <h2 className="section-title">
              Brands with
              <br />
              <span className="text-lime">a story to share.</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              Meet five Instagram brands in our social media portfolio.
            </p>
            <Link className="text-link" href={socialPortfolioPath}>
              Explore social media work ↗
            </Link>
          </div>
        </div>
        <div className="social-project-grid">{socialProjects.map((project, index) => <SocialProjectCard key={project.handle} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
