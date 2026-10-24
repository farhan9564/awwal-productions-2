export default function MetaEvidence({ images }) {
  return (
    <div className="meta-evidence-grid">
      {images.map((image) => (
        <figure key={image.src} className="meta-evidence">
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full screenshot: ${image.caption}`}
          >
            <img
              src={image.src}
              alt={image.caption}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          </a>
          <figcaption>
            <strong>{image.caption}</strong>
            {image.period && <span>{image.period}</span>}
            <span className="meta-evidence-source">
              Source: {image.sourceFile}
            </span>
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              Open full screenshot ↗
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
