const demoHtml = window.html;
const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.innerHTML = `
    <main style="padding: 24px; max-width: 760px; margin: 0 auto; font-family: Segoe UI, sans-serif;">
      <h1 style="margin: 0 0 8px; font-size: 1.6rem;">Loading project demo...</h1>
      <p style="margin: 0 0 12px; color: #444;">If this stays visible, a runtime error stopped the demo from mounting.</p>
    </main>
  `;
}

function ProjectDemo() {
  const projectId = new URLSearchParams(window.location.search).get("project") || "luxury-hotel";
  const project = window.portfolioProjects.find((item) => item.id === projectId) || window.portfolioProjects[0];

  return demoHtml`
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
                  ${project.technologies.map((technology) => demoHtml`<span key=${technology}>${technology}</span>`)}
            </div>
          </article>
          <article className="service-card glass">
            <h3>Key Features</h3>
            <ul className="feature-list">
                  ${project.features.map((feature) => demoHtml`<li key=${feature}>${feature}</li>`)}
            </ul>
          </article>
        </div>
      </section>
    </main>
  `;
}

const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(ProjectDemo));

if (rootElement) {
  rootElement.setAttribute("data-mounted", "true");
}
