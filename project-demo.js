const html = window.html;

function ProjectDemo() {
  const projectId = new URLSearchParams(window.location.search).get("project") || "luxury-hotel";
  const project = window.portfolioProjects.find((item) => item.id === projectId) || window.portfolioProjects[0];

  return html`
    <main>
      <header className="site-header">
        <a className="brand" href="index.html#projects">
          <span>BE</span>
          <strong>Behredin Eshetu</strong>
        </a>
        <nav>
          <a href="index.html#projects">Back to Portfolio</a>
          <a href="index.html#contact">Contact</a>
        </nav>
      </header>

      <section className="section hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Live Demo</p>
            <h1>${project.title}</h1>
            <p className="hero-subtitle">${project.description}</p>
            <div className="hero-actions">
              <a className="btn primary" href="index.html#projects">Back to Projects</a>
              <a className="btn secondary" href=${project.liveDemoUrl}>Open Demo Route</a>
            </div>
          </div>
          <div className="project-preview demo-preview">
            <img src=${project.image} alt=${project.imageAlt} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Project Details</p>
          <h2>What this build covers</h2>
        </div>
        <div className="service-grid">
          <article className="service-card glass">
            <h3>Technologies</h3>
            <div className="badge-list">
              ${project.technologies.map((technology) => html`<span key=${technology}>${technology}</span>`)}
            </div>
          </article>
          <article className="service-card glass">
            <h3>Key Features</h3>
            <ul className="feature-list">
              ${project.features.map((feature) => html`<li key=${feature}>${feature}</li>`)}
            </ul>
          </article>
        </div>
      </section>
    </main>
  `;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(ProjectDemo));
