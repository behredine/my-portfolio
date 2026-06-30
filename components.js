function ProjectCard({ project, index }) {
  const hasSourceCode = Boolean(project.sourceCodeUrl);

  return (
    <article className="project-card glass">
      <div className="project-preview">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className="project-body">
        <div className="project-body-top">
          <div className="project-heading-group">
            <p className="project-number">0{index + 1}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-actions">
            <a className="btn primary" href={project.liveDemoUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
            {hasSourceCode ? (
              <a className="btn ghost" href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
                Source Code
              </a>
            ) : null}
          </div>
        </div>

        <div className="project-details">
          <div className="project-block">
            <strong>Technologies</strong>
            <div className="badge-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="project-block">
            <strong>Key Features</strong>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
