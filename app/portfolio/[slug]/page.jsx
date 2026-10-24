import Link from "next/link";
import { notFound } from "next/navigation";
import { newProjects, niches, projectPath } from "../../../lib/projects.mjs";
import ProjectCard from "../../../components/ProjectCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return newProjects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = newProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Web Development Project | Awwal Productions`,
    description: project.description,
    alternates: { canonical: projectPath(project) },
    openGraph: {
      title: `${project.name} | Awwal Productions`,
      description: project.description,
      url: projectPath(project),
      images: ["/assets/awwal-full-logo.png"],
    },
  };
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = newProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const niche = niches.find((item) => item.id === project.niche);
  return (
    <main id="main">
      <section className="project-single-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span>/</span>
            <span>{project.name}</span>
          </div>
          <div className="project-single-top">
            <span className="eyebrow">{niche.label}</span>
            <span className="single-side-index">AWWAL / WEB DEVELOPMENT</span>
          </div>
          <h1>
            {project.name}
            <span className="single-title-dot">.</span>
          </h1>
          <div className="single-summary-row">
            <p>{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime"
            >
              Visit website ↗
            </a>
          </div>
        </div>
      </section>
      <section className="project-featured-section">
        <div className="container">
          <div className="new-project-showcase">
            <ProjectCard project={project} niche={niche} />
          </div>
          <div className="single-project-data">
            <div>
              <span>PROJECT</span>
              <strong>{project.name}</strong>
            </div>
            <div>
              <span>NICHE</span>
              <strong>{niche.label}</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>{project.specialty}</strong>
            </div>
            <div>
              <span>WEBSITE</span>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {new URL(project.url).hostname} ↗
              </a>
            </div>
          </div>
          <div className="single-links">
            <Link href="/portfolio" className="btn btn-outline">
              Back to all projects
            </Link>
            <Link href="/contact" className="btn btn-lime">
              Discuss a similar project ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
