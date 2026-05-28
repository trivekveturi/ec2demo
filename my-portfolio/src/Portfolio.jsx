import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "DistroQueue — distributed job queue",
    desc: "A high-throughput message queue system handling 2M+ jobs/day with at-least-once delivery, dead-letter queues, and a real-time dashboard. Used in production at 3 companies.",
    tag: "Backend",
    tagClass: "tag-be",
    stack: ["Go", "Redis", "PostgreSQL", "Protobuf"],
    featured: true,
  },
  {
    id: 2,
    name: "FormKit UI",
    desc: "Accessible, headless form component library for React with zero-config validation.",
    tag: "Frontend",
    tagClass: "tag-fe",
    stack: ["React", "TypeScript", "Zod"],
    featured: false,
  },
  {
    id: 3,
    name: "Sentri — log anomaly detector",
    desc: "ML-powered log analysis that flags infrastructure anomalies before they become outages.",
    tag: "ML",
    tagClass: "tag-ml",
    stack: ["Python", "PyTorch", "Kafka"],
    featured: false,
  },
];

const skills = [
  { name: "TypeScript", level: "Expert", icon: "💙" },
  { name: "Go", level: "Advanced", icon: "🐹" },
  { name: "Python", level: "Advanced", icon: "🐍" },
  { name: "React", level: "Expert", icon: "⚛️" },
  { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
  { name: "AWS / GCP", level: "Intermediate", icon: "☁️" },
  { name: "Docker / K8s", level: "Advanced", icon: "🐳" },
  { name: "Node.js", level: "Expert", icon: "🟩" },
];

const experience = [
  {
    year: "2022 — now",
    role: "Senior Software Engineer",
    company: "Groww",
    desc: "Led backend architecture for real-time portfolio analytics, processing 500k+ transactions/day.",
  },
  {
    year: "2020 — 2022",
    role: "Full Stack Engineer",
    company: "Razorpay",
    desc: "Built and maintained payment gateway integrations; reduced API latency by 40% through caching strategy.",
  },
  {
    year: "2019 — 2020",
    role: "SDE Intern",
    company: "HashedIn Technologies",
    desc: "Developed microservices for a logistics platform; shipped 3 features to production within 2 months.",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0e0e0e;
    color: #f0ede6;
    font-family: 'Syne', sans-serif;
    min-height: 100vh;
  }

  .portfolio {
    max-width: 820px;
    margin: 0 auto;
    padding: 0 2rem 4rem;
  }

  /* NAV */
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 0 1.25rem;
    border-bottom: 0.5px solid rgba(255,255,255,0.08);
  }
  .nav-logo {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.06em;
  }
  .nav-links {
    display: flex;
    gap: 24px;
  }
  .nav-links a {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    letter-spacing: 0.08em;
    transition: color 0.2s;
    cursor: pointer;
  }
  .nav-links a:hover { color: #f0ede6; }

  /* HERO */
  .hero {
    padding: 3.5rem 0 3rem;
    border-bottom: 0.5px solid rgba(255,255,255,0.08);
  }
  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #1D9E75;
    background: rgba(29,158,117,0.1);
    border: 0.5px solid rgba(29,158,117,0.3);
    padding: 5px 12px;
    border-radius: 100px;
    margin-bottom: 1.5rem;
    letter-spacing: 0.06em;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1D9E75;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.25; }
  }
  .hero h1 {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
  }
  .hero h1 .accent { color: #1D9E75; }
  .hero-sub {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    line-height: 1.8;
    max-width: 520px;
    margin-bottom: 2rem;
  }
  .hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .btn-primary {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 500;
    background: #1D9E75;
    color: #fff;
    border: none;
    padding: 11px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-primary:hover { background: #17876300; transform: translateY(-1px); }
  .btn-ghost {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 500;
    background: transparent;
    color: #f0ede6;
    border: 0.5px solid rgba(255,255,255,0.2);
    padding: 11px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-ghost:hover {
    border-color: rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.04);
  }

  /* STATS */
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(255,255,255,0.07);
    border: 0.5px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 2.5rem;
  }
  .stat {
    background: #0e0e0e;
    padding: 1.25rem 1.5rem;
  }
  .stat-num {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f0ede6;
  }
  .stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    margin-top: 3px;
    letter-spacing: 0.05em;
  }

  /* SECTIONS */
  .section {
    padding: 2.75rem 0;
    border-bottom: 0.5px solid rgba(255,255,255,0.08);
  }
  .section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.75rem;
  }
  .section-title {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }
  .section-cta {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #1D9E75;
    cursor: pointer;
    text-decoration: none;
  }

  /* PROJECTS */
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .project-card {
    background: #161616;
    border: 0.5px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 1.4rem;
    cursor: pointer;
    transition: border-color 0.2s, transform 0.15s;
    position: relative;
  }
  .project-card:hover {
    border-color: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }
  .project-card.featured { grid-column: span 2; }
  .project-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .project-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.07em;
    padding: 3px 10px;
    border-radius: 100px;
  }
  .tag-be { color: #5DCAA5; background: rgba(29,158,117,0.15); }
  .tag-fe { color: #AFA9EC; background: rgba(83,74,183,0.15); }
  .tag-ml { color: #97C459; background: rgba(99,153,34,0.15); }
  .tag-sys { color: #EF9F27; background: rgba(186,117,23,0.12); }
  .project-arrow {
    font-size: 18px;
    color: rgba(255,255,255,0.2);
    transition: color 0.2s;
  }
  .project-card:hover .project-arrow { color: #1D9E75; }
  .project-name {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #f0ede6;
  }
  .project-desc {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    line-height: 1.75;
    margin-bottom: 14px;
  }
  .project-stack { display: flex; gap: 6px; flex-wrap: wrap; }
  .stack-pill {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.05);
    border: 0.5px solid rgba(255,255,255,0.08);
    padding: 3px 10px;
    border-radius: 100px;
  }

  /* SKILLS */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
  }
  .skill-item {
    background: #161616;
    border: 0.5px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: border-color 0.2s;
  }
  .skill-item:hover { border-color: rgba(255,255,255,0.18); }
  .skill-icon { font-size: 20px; line-height: 1; }
  .skill-name {
    font-size: 13px;
    font-weight: 500;
    color: #f0ede6;
  }
  .skill-level {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    margin-top: 2px;
  }

  /* TIMELINE */
  .tl-item {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 1.5rem;
    padding: 1.25rem 0;
    border-bottom: 0.5px solid rgba(255,255,255,0.06);
  }
  .tl-item:last-child { border-bottom: none; }
  .tl-year {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.25);
    padding-top: 3px;
    line-height: 1.5;
  }
  .tl-role {
    font-size: 14px;
    font-weight: 700;
    color: #f0ede6;
    margin-bottom: 3px;
  }
  .tl-company {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #1D9E75;
    margin-bottom: 6px;
  }
  .tl-desc {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.38);
    line-height: 1.7;
  }

  /* CONTACT */
  .contact-intro {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  .contact-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 0.5px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 10px 16px;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    background: transparent;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
    text-decoration: none;
  }
  .contact-btn:hover {
    border-color: rgba(255,255,255,0.3);
    color: #f0ede6;
    background: rgba(255,255,255,0.04);
  }

  /* FOOTER */
  .footer {
    padding: 1.75rem 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-copy {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.2);
  }
  .footer-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.25);
  }
  .footer-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #1D9E75;
  }

  @media (max-width: 600px) {
    .hero h1 { font-size: 36px; }
    .projects { grid-template-columns: 1fr; }
    .project-card.featured { grid-column: span 1; }
    .stats { grid-template-columns: 1fr; }
    .tl-item { grid-template-columns: 1fr; gap: 4px; }
    .nav-links { display: none; }
  }
`;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio">

        {/* NAV */}
        <nav className="nav">
          <span className="nav-logo">alex.dev</span>
          <div className="nav-links">
            {["work", "skills", "experience", "contact"].map((s) => (
              <a key={s} onClick={() => setActiveSection(s)}>
                {s}
              </a>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-tag">
            <span className="status-dot" />
            available for work
          </div>
          <h1>
            Building things<br />
            that <span className="accent">actually work.</span>
          </h1>
          <p className="hero-sub">
            Full-stack engineer with 5+ years crafting scalable systems, clean APIs,
            and interfaces people enjoy using. Currently based in Hyderabad.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">View my work →</a>
            <a href="/resume.pdf" className="btn-ghost">Download CV</a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-num">24+</div>
              <div className="stat-label">projects shipped</div>
            </div>
            <div className="stat">
              <div className="stat-num">5 yrs</div>
              <div className="stat-label">experience</div>
            </div>
            <div className="stat">
              <div className="stat-num">3</div>
              <div className="stat-label">open source libs</div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="work">
          <div className="section-header">
            <span className="section-title">Selected work</span>
            <a className="section-cta" href="#">all projects →</a>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <div
                key={p.id}
                className={`project-card${p.featured ? " featured" : ""}`}
              >
                <div className="project-top">
                  <span className={`project-tag ${p.tagClass}`}>{p.tag}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-header">
            <span className="section-title">Tech skills</span>
          </div>
          <div className="skills-grid">
            {skills.map((sk) => (
              <div key={sk.name} className="skill-item">
                <span className="skill-icon">{sk.icon}</span>
                <div>
                  <div className="skill-name">{sk.name}</div>
                  <div className="skill-level">{sk.level}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-header">
            <span className="section-title">Experience</span>
          </div>
          <div>
            {experience.map((e) => (
              <div key={e.company} className="tl-item">
                <div className="tl-year">{e.year}</div>
                <div>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company">{e.company}</div>
                  <div className="tl-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="section-header">
            <span className="section-title">Get in touch</span>
          </div>
          <p className="contact-intro">
            Open to senior / staff engineering roles, interesting contracts,
            and open-source collaborations.
          </p>
          <div className="contact-row">
            <a href="mailto:alex@example.com" className="contact-btn">
              ✉ alex@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-btn">
              ⬡ GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-btn">
              in LinkedIn
            </a>
            <a href="/resume.pdf" className="contact-btn">
              ↓ Resume
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span className="footer-copy">© 2026 Alex Dev. Built with React.</span>
          <span className="footer-badge">
            <span className="footer-dot" />
            open to work
          </span>
        </footer>

      </div>
    </>
  );
}
