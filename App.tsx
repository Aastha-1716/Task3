import { useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
const resume = '/Aastha-resume.pdf';

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  tone: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Farmer Chatbot',
    description:
      'A multilingual, voice-enabled assistant that makes practical farming guidance easier to access in real time.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Gemini', 'LLaMA 3'],
    href: 'https://github.com/Aastha-1716/Farmer-Chatbot',
    tone: 'project-sage',
  },
  {
    number: '02',
    title: 'Fake News Detector',
    description:
      'An end-to-end machine learning pipeline that turns messy, multi-source text into more considered predictions.',
    stack: ['Python', 'Flask', 'NLP', 'Pandas', 'Scikit-learn'],
    href: 'https://github.com/Aastha-1716/Fake_News_Detector',
    tone: 'project-peach',
  },
  {
    number: '03',
    title: 'Quantum Timetable',
    description:
      'A clean scheduling system designed to make dynamic course planning feel simple, responsive, and reliable.',
    stack: ['Flask', 'Tailwind CSS', 'Python'],
    href: 'https://github.com/Aastha-1716/Quantum-Timetable',
    tone: 'project-sky',
  },
  {
    number: '04',
    title: 'Code Snippet Manager',
    description:
      'A desktop application for organizing, searching, and reusing code with a focused Java Swing experience.',
    stack: ['Java', 'Swing', 'MySQL', 'Maven'],
    href: 'https://github.com/Aastha-1716/Snippet-Manager',
    tone: 'project-lilac',
  },
];

const skills = [
  { label: 'Languages', value: 'C, Java, Python, JavaScript, SQL' },
  { label: 'Web', value: 'React, Next.js, TypeScript, HTML, CSS, Tailwind' },
  { label: 'Backend', value: 'Node.js, Express, Flask, API integration' },
  { label: 'Data', value: 'PostgreSQL, MongoDB, Firebase, MySQL' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          A<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href={resume} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Hello, I&apos;m Aastha</p>
            <h1>I build digital<br /><em>experiences</em> with<br />purpose.</h1>
            <p className="hero-intro">
              Computer Science student, aspiring software engineer, and curious builder exploring the space between thoughtful design and useful technology.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:aastha171645@gmail.com">Let&apos;s talk <span>↗</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="circle-caption">Based in<br /><strong>Bengaluru</strong></div>
            <div className="portrait-frame">
              <div className="portrait-wash" />
              <img src="/images/portrait-cutout(1) copy.png" alt="Aastha in a cream saree" />
            </div>
            <div className="hero-stamp">2023 — 2027<br /><span>B.Tech CSE</span></div>
          </div>
          <div className="scroll-note"><span className="scroll-line" /> Scroll to explore</div>
        </section>

        <section className="marquee-strip" aria-label="Areas of focus">
          <div className="marquee-track">
            <span>Full-stack development</span><i>✳</i><span>Problem solving</span><i>✳</i><span>Machine learning</span><i>✳</i><span>Human-centered ideas</span><i>✳</i><span>Full-stack development</span><i>✳</i><span>Problem solving</span>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-kicker"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <h2>Curious by nature,<br /><em>intentional</em> by design.</h2>
            <div className="about-body">
              <p className="large-copy">I&apos;m a Computer Science undergraduate at Sri Venkateshwara College of Engineering, Bengaluru, with a soft spot for turning complex problems into clear, useful products.</p>
              <p>Whether I&apos;m building a multilingual AI assistant, shaping a data pipeline, or polishing a responsive interface, I care about the details that make technology feel more human.</p>
              <div className="about-meta">
                <div><span>Currently</span><strong>Open to opportunities</strong></div>
                <div><span>Focus</span><strong>Software · Product · AI</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading">
            <div className="section-kicker"><span>02</span><span>Selected work</span></div>
            <h2>A few things<br /><em>I&apos;ve made.</em></h2>
            <p>Small experiments and ambitious builds, each one teaching me something new.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className={`project-card ${project.tone}`} href={project.href} target="_blank" rel="noreferrer" key={project.number}>
                <div className="project-top"><span>{project.number}</span><ExternalLink size={19} /></div>
                <div className="project-art"><Code2 size={42} strokeWidth={1.1} /><span>build / learn / repeat</span></div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            ))}
          </div>
          <a className="github-link" href="https://github.com/Aastha-1716/" target="_blank" rel="noreferrer"><Github size={17} /> See all projects on GitHub <ArrowUpRight size={16} /></a>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-kicker"><span>03</span><span>What I bring</span></div>
          <div className="skills-grid">
            <div><h2>Tools for<br /><em>making things real.</em></h2><p>From a blank canvas to a working prototype, I enjoy every part of the build.</p></div>
            <div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill.label}><span>0{index + 1}</span><strong>{skill.label}</strong><p>{skill.value}</p></div>)}</div>
          </div>
          <div className="skill-foot"><span><Check size={16} /> Collaborative thinker</span><span><Check size={16} /> Detail oriented</span><span><Check size={16} /> Always learning</span></div>
        </section>

        <section className="journey section-pad">
          <div className="section-kicker"><span>04</span><span>The journey so far</span></div>
          <div className="journey-grid">
            <div><h2>Learning by<br /><em>doing.</em></h2><p>Every challenge is a chance to ask better questions and build a little braver.</p></div>
            <div className="timeline">
              <div className="timeline-item"><span>2024</span><div><h3>NASA Space Apps Challenge</h3><p>Team-based solution design using open NASA datasets.</p></div></div>
              <div className="timeline-item"><span>2024</span><div><h3>TECH-TALK · Winner</h3><p>Secured 1st place in group discussion, building confidence in communication.</p></div></div>
              <div className="timeline-item"><span>Now</span><div><h3>B.Tech in Computer Science</h3><p>Sri Venkateshwara College of Engineering · 2023—2027</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-inner">
            <div className="section-kicker light"><span>05</span><span>Let&apos;s connect</span></div>
            <h2>Have an idea<br />worth <em>building?</em></h2>
            <p>I&apos;m always open to conversations about interesting products, internships, collaborations, and the next thing to learn.</p>
            <a className="button button-light" href="mailto:aastha171645@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
            <div className="contact-links"><a href="mailto:aastha171645@gmail.com"><Mail size={16} /> aastha171645@gmail.com</a><a href="https://www.linkedin.com/in/aastha-93a5b7291/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={resume} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> View resume</a></div>
          </div>
        </section>
      </main>

      <footer className="footer"><span>© 2025 Aastha</span><span>Designed & built with curiosity.</span><a href="#top">Back to top <ChevronDown size={15} /></a></footer>
    </div>
  );
}

export default App;
