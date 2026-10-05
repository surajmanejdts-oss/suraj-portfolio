import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2,
  Database, Download, ExternalLink, Github, GraduationCap, Layers3,
  Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, Send, Server,
  Sparkles, X, Zap
} from 'lucide-react';
import { portfolio as p } from './data/portfolio';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });

  useEffect(() => {
    const reveal = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending your message…' });
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      setForm({ name: '', email: '', message: '' });
      setStatus({ type: 'success', text: 'Message sent successfully. Thank you!' });
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Unable to send message.' });
    }
  };

  return (
    <div className="app-shell">
      <div className="noise" />
      <nav className="navbar">
        <button className="brand" onClick={() => scrollTo('home')}>
          <span className="brand-mark">SM</span>
          <span>Suraj<span className="brand-dot">.</span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['about', 'experience', 'projects', 'contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          <button className="nav-cta" onClick={() => scrollTo('contact')}>
            Let's talk <ArrowUpRight size={15} />
          </button>
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="status-pill">
                <span className="status-dot" /> {p.availability}
              </div>
              <p className="hero-kicker">FULL STACK DEVELOPER · 2026</p>
              <h1>Building digital products that <span>move ideas forward.</span></h1>
              <p className="hero-description">{p.summary}</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo('projects')}>
                  View my work <ArrowUpRight size={18} />
                </button>
                <button className="secondary-btn" onClick={() => scrollTo('contact')}>
                  Contact me <MessageCircle size={18} />
                </button>
              </div>
              <div className="quick-info">
                <span><MapPin size={15} /> {p.location}</span>
                <span><Code2 size={15} /> React · Node · MongoDB</span>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-card">
                <div className="card-top">
                  <span className="mini-label">CURRENT FOCUS</span>
                  <Sparkles size={18} />
                </div>
                <div className="terminal">
                  <div className="terminal-bar"><i /><i /><i /></div>
                  <div className="terminal-body">
                    <p><span className="purple">const</span> developer = {'{'}</p>
                    <p>&nbsp;&nbsp;name: <span className="green">'Suraj Mane'</span>,</p>
                    <p>&nbsp;&nbsp;stack: <span className="green">'MERN + RN'</span>,</p>
                    <p>&nbsp;&nbsp;mindset: <span className="green">'build + learn'</span>,</p>
                    <p>&nbsp;&nbsp;location: <span className="green">'India'</span></p>
                    <p>{'}'};</p>
                    <p className="cursor-line">▌</p>
                  </div>
                </div>
              </div>
              <div className="floating-badge badge-react"><Code2 size={18} /> React</div>
              <div className="floating-badge badge-db"><Database size={18} /> MongoDB</div>
              <div className="floating-badge badge-node"><Server size={18} /> Node.js</div>
            </div>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE <ChevronRight size={15} /></div>
        </section>

        <section id="about" className="section about-section">
          <SectionTitle
            eyebrow="01 / ABOUT"
            title="A developer who likes the whole picture."
            text="From database design to polished interfaces, I enjoy understanding how every layer of a product connects."
          />
          <div className="about-grid">
            <div className="about-panel reveal">
              <div className="big-number">01</div>
              <h3>Full-stack thinking</h3>
              <p>I work across frontend, backend and databases, with a focus on practical APIs, clean CRUD flows and maintainable application architecture.</p>
            </div>
            <div className="skills-panel reveal">
              <div className="skill-group">
                <span>LANGUAGES</span>
                <div>{p.skills.languages.map(s => <b key={s}>{s}</b>)}</div>
              </div>
              <div className="skill-group">
                <span>FRAMEWORKS & TOOLS</span>
                <div>{p.skills.frameworks.map(s => <b key={s}>{s}</b>)}</div>
              </div>
              <div className="skill-group">
                <span>CORE CONCEPTS</span>
                <div>{p.skills.concepts.map(s => <b key={s}>{s}</b>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle eyebrow="02 / EXPERIENCE" title="Where I've built real things." />
          <div className="timeline">
            {p.experience.map((job, index) => (
              <article className="timeline-item reveal" key={job.company}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-line"><span /></div>
                <div className="timeline-content">
                  <div className="job-meta">{job.period}</div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionTitle
            eyebrow="03 / PROJECTS"
            title="Selected work."
            text="A few projects that show how I approach product logic, APIs and user-facing experiences."
          />
          <div className="project-grid">
            {p.projects.map(project => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : <ExternalLink size={20} />}
                </div>
                <div className="project-visual">
                  <div className="project-window">
                    <div className="window-head"><i /><i /><i /></div>
                    <div className="window-lines">
                      <span /><span /><span className="short" />
                    </div>
                    <div className="window-chart"><i /><i /><i /><i /><i /></div>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                  <ul>{project.features.map(f => <li key={f}><Check size={15} />{f}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="education-card reveal">
            <div className="edu-icon"><GraduationCap /></div>
            <div>
              <span className="eyebrow">04 / EDUCATION</span>
              <h2>{p.education.degree}</h2>
              <h3>{p.education.college}</h3>
              <p>{p.education.period} · {p.education.location}</p>
              <strong>{p.education.academics}</strong>
            </div>
            <div className="certs">
              <span className="eyebrow">CERTIFICATIONS</span>
              {p.certifications.map(c => <div key={c}><Check size={15} />{c}</div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-wrap reveal">
            <div className="contact-copy">
              <span className="eyebrow">05 / CONTACT</span>
              <h2>Have an idea?<br /><span>Let's build it.</span></h2>
              <p>I'm open to full-stack opportunities, interesting products and conversations around software development.</p>
              <div className="contact-links">
                <a href={`mailto:${p.email}`}><Mail size={17} /> {p.email}</a>
                <a href={`tel:${p.phone}`}><Phone size={17} /> {p.phone}</a>
                <span><MapPin size={17} /> {p.location}</span>
              </div>
              <div className="socials">
                <a href="#" aria-label="GitHub"><Github /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Doe" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@example.com" /></label>
              <label>Message<textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me a little about your idea…" /></label>
              <button className="primary-btn submit-btn" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? 'Sending…' : 'Send message'} <Send size={17} />
              </button>
              {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 {p.name}</span>
        <span>Designed & built with React</span>
        <button onClick={() => scrollTo('home')}>Back to top ↑</button>
      </footer>
    </div>
  );
}

export default App;
