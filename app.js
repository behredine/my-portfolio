const appHtml = window.html;
const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.innerHTML = `
    <main style="padding: 24px; max-width: 760px; margin: 0 auto; font-family: Segoe UI, sans-serif;">
      <h1 style="margin: 0 0 8px; font-size: 1.6rem;">Loading portfolio...</h1>
      <p style="margin: 0 0 12px; color: #444;">If this stays visible, a runtime error stopped the app from mounting.</p>
    </main>
  `;
}

const highlights = [
  { label: "Years shipping", value: "3+" },
  { label: "Projects delivered", value: "20+" },
  { label: "Focus areas", value: "Web, AI, Automation" },
];

const capabilities = [
  {
    title: "Web Development",
    text: "Fast, polished, mobile-ready websites with clear structure, strong copy, and conversion-focused interactions.",
  },
  {
    title: "AI Integration",
    text: "Practical assistant experiences, knowledge search, and workflow copilots that fit real business needs.",
  },
  {
    title: "Automation Systems",
    text: "Lightweight business automations that remove repetitive work and connect the tools your team already uses.",
  },
];

const services = [
  {
    title: "Website Development",
    text: "Portfolio sites, service sites, and landing pages that look credible, load fast, and feel intentional.",
  },
  {
    title: "AI Integration",
    text: "Chat interfaces, automated summaries, intelligent search, and AI features that solve a concrete task.",
  },
  {
    title: "Business Automation",
    text: "Custom workflows for reporting, notifications, data movement, and repetitive operations.",
  },
];

const processSteps = [
  "Discover the goal and define the user journey.",
  "Design the interface and lock the core content structure.",
  "Build, test on mobile, and refine performance and polish.",
  "Launch with the handoff assets and simple maintenance guidance.",
];

const focusAreas = ["Portfolio websites", "AI features", "Automation", "Landing pages", "Product UI"];

const contactLinks = [
  { label: "Email", value: "hello@behredin.dev", href: "mailto:hello@behredin.dev" },
  { label: "Telegram", value: "@behredin", href: "https://t.me/behredin" },
  { label: "GitHub", value: "BehredinEshetu", href: "https://github.com/BehredinEshetu" },
];

function App() {
  return appHtml`
    <main>
      <header className="site-header">
        <a className="brand" href="#top">
          <span>BE</span>
          <strong>Behredin Eshetu</strong>
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer & AI Developer</p>
            <h1>Premium freelance websites for clients who want to look established from day one.</h1>
            <p className="hero-subtitle">
              I design and build high-end websites, AI-powered experiences, and practical automation systems for hotels, brands, and learning products.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn secondary" href="#contact">Hire Me</a>
              <a className="btn ghost" href="https://github.com/BehredinEshetu" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className="trust-strip">
                  ${focusAreas.map((item) => appHtml`<span key=${item}>${item}</span>`)}
            </div>
          </div>
          <div className="hero-visual glass">
            <div className="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="metric-row">
                  ${highlights.map((item) => appHtml`
                <div className="metric" key=${item.label}>
                  <span>${item.label}</span>
                  <strong>${item.value}</strong>
                </div>
              `)}
            </div>
            <div className="dashboard-grid">
              <div className="dashboard-panel tall">
                <p>Current focus</p>
                <strong>Freelance websites, AI tools, and polished client-ready interfaces.</strong>
                <div className="mini-bars" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="dashboard-panel">
                <p>Strength</p>
                <strong>Clear UI structure</strong>
              </div>
              <div className="dashboard-panel">
                <p>Delivery</p>
                <strong>Responsive and fast</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section--projects">
        <div className="section-intro section-intro--featured">
          <p className="eyebrow">Featured Projects</p>
          <h2>Three premium freelance case studies built to win trust and convert visitors.</h2>
          <p>
            These projects are data-driven and easy to extend, so new work can be added without rewriting the layout.
          </p>
        </div>
        <div className="project-stack">
              ${window.portfolioProjects.map((project, index) => appHtml`<${ProjectCard} key=${project.id} project=${project} index=${index} />`)}
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-intro">
          <p className="eyebrow">About</p>
          <h2>Engineering that turns business goals into clear, reliable digital systems.</h2>
        </div>
        <div className="about-grid">
          ${capabilities.map((item) => html`
            <article className="capability glass" key=${item.title}>
              <span className="capability-icon" aria-hidden="true"></span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `)}
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-intro">
          <p className="eyebrow">Services</p>
          <h2>What I build for clients who need a site or system that feels finished.</h2>
        </div>
        <div className="service-grid">
          ${services.map((item) => html`
            <article className="service-card glass" key=${item.title}>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `)}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Process</p>
          <h2>A simple delivery process that keeps the work focused and predictable.</h2>
        </div>
        <div className="timeline glass">
          ${processSteps.map((step, index) => html`
            <div className="timeline-item" key=${step}>
              <span>0${index + 1}</span>
              <strong>${step}</strong>
            </div>
          `)}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-intro">
          <p className="eyebrow">Contact</p>
          <h2>Ready to build something clean, useful, and on-brand?</h2>
        </div>
        <div className="contact-shell glass">
          <div className="contact-grid">
            <div>
              <p className="hero-subtitle">
                If you need a portfolio site, business website, AI feature, or automation workflow, send the goal and I will help shape the best version of it.
              </p>
              <div className="contact-links">
                ${contactLinks.map((item) => html`
                  <a href=${item.href} key=${item.label} target=${item.href.startsWith("http") ? "_blank" : undefined} rel=${item.href.startsWith("http") ? "noreferrer" : undefined}>
                    <strong>${item.label}</strong>
                    <span>${item.value}</span>
                  </a>
                `)}
              </div>
            </div>
            <form className="contact-form" action="mailto:hello@behredin.dev" method="post" encType="text/plain">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="behredineshetu27@gmail.com" />
              </label>
              <label>
                Project brief
                <textarea name="message" rows="5" placeholder="Tell me what you want to build"></textarea>
              </label>
              <button className="btn primary" type="submit">Start a conversation</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
}

const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));

if (rootElement) {
  rootElement.setAttribute("data-mounted", "true");
}
