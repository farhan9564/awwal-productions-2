import Link from "next/link";
import { featuredWebProjects, projectPath } from "../lib/projects.mjs";
import MotionCard from "./MotionCard";
const previews = {
  "fast-apparel-02": "/assets/previews/fast-factory-live.webp",
  "al-badar-impex": "/assets/previews/abi-sports-live.webp",
};
export default function FeaturedWebProjects() {
  return (
    <section className="padded-section work-section floating-work" aria-label="Featured web development projects">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow dark">Selected work / Web Development</span><h2 className="section-title">Built with purpose.<br /><span className="shopify-section-accent">Made to stand out.</span></h2></div>
          <p className="lead">Fast Apparel Factory and Al Badar Impex (ABI Sports)—two featured manufacturing website projects.</p>
        </div>
        <div className="floating-work-stage">
          <div className="work-stage-orbit" aria-hidden="true" />
          <span className="work-stage-word" aria-hidden="true">SELECTED<br />WORK.</span>
          {featuredWebProjects.map((project, index) => <div className={`floating-work-slot slot-${index + 1}`} key={project.slug}>
            <MotionCard className="featured-browser-card">
              <Link href={projectPath(project)} prefetch={false} className="featured-browser-link" aria-label={`View ${project.name} project`}>
                <div className="featured-browser-chrome"><span className="featured-browser-dots" aria-hidden="true">● ● ●</span><span>{new URL(project.url).hostname}</span><span aria-hidden="true">↗</span></div>
                <div className="featured-browser-viewport"><img src={previews[project.slug]} width="1353" height="930" loading="lazy" alt={`${project.name} live website homepage preview`} /><span className="featured-open-project">Explore project <span aria-hidden="true">↗</span></span></div>
              </Link>
              <div className="featured-browser-caption"><div><span>0{index + 1} / MANUFACTURING & EXPORT</span><h3><Link href={projectPath(project)} prefetch={false}>{project.name}</Link></h3></div><a href={project.url} target="_blank" rel="noopener noreferrer" className="project-arrow" aria-label={`Visit ${project.name} website`}>↗</a></div>
            </MotionCard>
          </div>)}
          <div className="work-stage-note"><span aria-hidden="true">✳</span><span>Thoughtful design.<br />Real websites.</span></div>
        </div>
        <div className="portfolio-home-bottom"><span>{featuredWebProjects.length} FEATURED WEB DEVELOPMENT PROJECTS</span><Link className="btn btn-dark" href="/portfolio">View all web development projects ↗</Link></div>
      </div>
    </section>
  );
}
