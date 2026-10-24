import MotionCard from "./MotionCard";
export default function SocialProjectCard({ project, index }) {
  return (
    <MotionCard
      className="social-project-card"
      style={{ "--social-accent": project.accent }}
    >
      <div className="social-card-top">
        <span>INSTAGRAM / {String(index + 1).padStart(2, "0")}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div className="social-card-brand">
        <span className="social-brand-initials" aria-hidden="true">
          {project.initials}
        </span>
        <span className="social-niche">{project.niche}</span>
        <h3>{project.name}</h3>
        <a
          className="social-handle"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{project.handle}
        </a>
      </div>
      <p>{project.description}</p>
      <div className="social-content-focus">
        <span>CONTENT FOCUS</span>
        <strong>{project.focus}</strong>
      </div>
      <a
        className="social-profile-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on Instagram`}
      >
        View Instagram profile <span aria-hidden="true">↗</span>
      </a>
    </MotionCard>
  );
}
