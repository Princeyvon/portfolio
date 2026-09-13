import { useEffect, useRef, useState } from "react";

type Project = {
  eyebrow: string;
  title: string;
  description: string;
  organization: string;
  body: string;
};

type AIWork = {
  title: string;
  type: string;
  description: string;
  href?: string;
  status: string;
  access: string;
  screenshots: string[];
};

const projects: Record<string, Project> = {
  innovation: {
    eyebrow: "Systems / Support",
    title: "Making infrastructure feel human.",
    description:
      "IT facilitation, WordPress maintenance, AV support, and product feedback across university environments.",
    organization: "Georgetown Law Center",
    body: "The work sat between systems and people: triaging the ticket queue, keeping WordPress and AV systems usable, and translating product questions into concrete feedback. The lesson was simple: reliability is a creative act when it gives people confidence.",
  },
  community: {
    eyebrow: "People / Programming",
    title: "Designing rooms where people participate.",
    description:
      "Mentorship and workshops for a diverse residential community.",
    organization: "Qatar Foundation",
    body: "I worked with a residential community made up of people with different backgrounds, needs, and rhythms. Workshops were not one-way presentations; they were small systems for trust, practice, and follow-through.",
  },
  finance: {
    eyebrow: "Data / Risk",
    title: "Turning records into decisions.",
    description:
      "Credit-file analysis and operational workflows for a commercial bank.",
    organization: "Equity Bank Rwanda",
    body: "I worked with credit files, risk assessments, and daily CRM workflows. The experience taught me to respect the detail: good decisions are built from accurate inputs, clear process, and the patience to look twice.",
  },
  publishing: {
    eyebrow: "Media / Publishing",
    title: "Giving useful ideas a public shape.",
    description:
      "Writing, visual communication, and digital publishing as a second track.",
    organization: "Independent practice",
    body: "My independent practice sits at the intersection of writing, visual communication, and digital publishing. I am interested in the moment a useful idea becomes legible to someone who was not in the room when it began.",
  },
};

const aiWorks: AIWork[] = [
  {
    title: "Rugmosiac",
    type: "AI app / public demo",
    description: "A live AI-built product experiment with a public demo you can open and explore.",
    href: "https://rugmosiac.lovable.app",
    status: "Live",
    access: "Open demo",
    screenshots: [],
  },
  {
    title: "Ecommerce store",
    type: "AI app / in progress",
    description: "A commerce experience currently in development, with the product flow and operating details being shaped together.",
    status: "In progress",
    access: "Request preview",
    screenshots: ["/screenshots/ecommerce_09_studio_dashboard.jpg", "/screenshots/ecommerce_10_studio_catalogue.jpg", "/screenshots/ecommerce_11_website_homepage.jpg", "/screenshots/ecommerce_12_product_page.jpg"],
  },
  {
    title: "EV charging operations",
    type: "AI app / in progress",
    description: "An internal management system for EV charging stations, designed around operational visibility and daily workflows.",
    href: "https://volta10.lovable.app",
    status: "In progress",
    access: "Open preview",
    screenshots: ["/screenshots/ev_13_financial_reports.jpg", "/screenshots/ev_14_arrivals_queue.jpg", "/screenshots/ev_15_locations_chargers.jpg", "/screenshots/ev_16_charging_sessions.jpg"],
  },
  {
    title: "Kigali Rentals",
    type: "AI app / internal ops",
    description: "A car-rental operating system for Kigali, bringing fleet, reservations, and day-to-day coordination into one place.",
    href: "https://kigalirentals.lovable.app",
    status: "Live demo",
    access: "Open demo",
    screenshots: ["/screenshots/rentals_01_insights.jpg", "/screenshots/rentals_02_contract_detail.jpg", "/screenshots/rentals_03_contracts_list.jpg", "/screenshots/rentals_04_dashboard.jpg"],
  },
  {
    title: "Ijuru",
    type: "AI app / internal ops",
    description: "An internal operating system for a restaurant and cafe, shaped around the practical rhythm of service operations.",
    href: "https://ijuru.lovable.app",
    status: "Live demo",
    access: "Open demo",
    screenshots: ["/screenshots/restaurant_05_transactions.jpg", "/screenshots/restaurant_06_reports.jpg", "/screenshots/restaurant_07_floor.jpg", "/screenshots/restaurant_08_pos_pin.jpg"],
  },
];

function ArrowLink({ children, onClick, href }: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const content = <>{children}<span className="arrow">↗</span></>;
  if (href) return <a className="arrow-link" href={href}>{content}</a>;
  return <button className="arrow-link" type="button" onClick={onClick}>{content}</button>;
}

function Reveal({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} id={id} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [dark, setDark] = useState(() => localStorage.getItem("yvd-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<{ title: string; screenshots: string[] } | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("yvd-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSelectedProject(null);
        setSelectedGallery(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showProject = (key: string) => setSelectedProject(projects[key]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className={`site-nav ${menuOpen ? "menu-open" : ""}`} aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}>YVD / 26</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true">{menuOpen ? "×" : "Menu"}</span>
        </button>
        <div id="nav-links" className="nav-links">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#ai-work" onClick={closeMenu}>AI work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
          <span aria-hidden="true">{dark ? "☼" : "◐"}</span>
        </button>
      </nav>

      <main id="main-content">
        <header id="top" className="hero content-wrap">
          <Reveal className="hero-main">
            <span className="eyebrow">Portfolio / 2026</span>
            <h1>Prince Yvon<br /><em>Dushimirimana</em></h1>
            <p className="hero-copy">International economics student, multimedia maker, and systems-minded collaborator. I move between numbers, people, and the tools that help good ideas travel.</p>
          </Reveal>
          <Reveal className="hero-side">
            <span className="hero-index">01</span>
            <p>Based in Doha. Working across financial analysis, IT support, publishing, community programming, and applied technology.</p>
            <ArrowLink href="#work">Explore selected work</ArrowLink>
          </Reveal>
        </header>

        <div className="availability"><div className="content-wrap availability-inner"><div className="status"><span className="status-dot" /> Open to thoughtful collaborations</div><p>Currently studying at Georgetown University Qatar · Class of 2027</p></div></div>

        <Reveal className="content-wrap section" id="about">
          <div className="section-head"><span className="eyebrow">02 / Profile</span><div><h2>A hybrid by design.</h2><p>Comfortable with a spreadsheet, a camera, a support queue, or a room full of people. The common thread is making complex things clearer and more useful.</p></div></div>
          <div className="about-grid"><p>I've moved between financial analysis, IT support, and community mentorship while building a parallel practice in multimedia production, publishing, and applied technology.</p><p>That range is practical. I can troubleshoot equipment, explain it to someone using it for the first time, then turn the outcome into a story, workshop, or system other people can use.</p></div>
          <div className="stat-row"><div className="stat"><strong>03</strong><span>Countries lived, studied, and worked across</span></div><div className="stat"><strong>05+</strong><span>Years of hands-on experience</span></div><div className="stat"><strong>04</strong><span>Languages and working modes</span></div></div>
        </Reveal>

        <Reveal className="content-wrap section quick-experience" id="experience-snapshot">
          <div className="section-head"><span className="eyebrow">03 / Quick experience</span><div><h2>A short version of the CV.</h2><p>Three roles that explain how I learned to work with systems, people, and decisions.</p></div></div>
          <div className="experience-snapshot-grid"><article><span className="snapshot-year">2026</span><h3>IT Facilitator</h3><p>Georgetown Law Center · Washington, DC</p><span className="snapshot-detail">Support operations, WordPress, AV systems, mobile usability, AI tools</span></article><article><span className="snapshot-year">2024—25</span><h3>Community Development Assistant</h3><p>Qatar Foundation · Doha</p><span className="snapshot-detail">Mentorship, workshops, conflict resolution, community programming</span></article><article><span className="snapshot-year">2021—23</span><h3>Front Office Intern</h3><p>Equity Bank Rwanda PLC · Kigali</p><span className="snapshot-detail">Credit analysis, risk assessments, Finacle CRM workflows</span></article></div>
        </Reveal>

        <Reveal className="content-wrap section" id="work">
          <div className="section-head"><span className="eyebrow">04 / Selected work</span><div><h2>Work with a point of view.</h2><p>Four directions I keep returning to: making systems friendlier, translating information, building community, and giving ideas a visual form.</p></div></div>
          <div className="work-grid">
            {Object.entries(projects).map(([key, project], index) => (
              <article key={key} className={`work-card ${index === 0 ? "tall" : ""} project-${index + 1}`}>
                <span className="work-number">0{index + 1}</span>
                <div><span className="eyebrow">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.description}</p></div>
                <div className="work-meta"><span>{project.organization}</span><ArrowLink onClick={() => showProject(key)}>View story</ArrowLink></div>
                <span className="work-art" aria-hidden="true" />
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="content-wrap section ai-work-section" id="ai-work">
          <div className="section-head"><span className="eyebrow">05 / AI works</span><div><h2>Small systems, built with AI.</h2><p>Most of these are internal operations systems rather than public consumer apps. You can request access to a live workspace; screenshots and walkthroughs are available so you can see how they look and work without exposing private operations.</p></div></div>
          <div className="ai-work-list">{aiWorks.map((work, index) => <article className="ai-work-row" key={work.title}><div className="ai-work-number">0{index + 1}</div>{work.screenshots.length > 0 && <button className="ai-thumb-button" type="button" onClick={() => setSelectedGallery({ title: work.title, screenshots: work.screenshots })} aria-label={`View ${work.title} screenshots`}><img src={work.screenshots[0]} alt={`${work.title} interface preview`} /><span>+{work.screenshots.length}</span></button>}<div className="ai-work-copy"><div className="ai-work-kicker"><span className="eyebrow">{work.type}</span><span className={`ai-status ${work.status === "Live" || work.status === "Live demo" ? "live" : "progress"}`}>{work.status}</span></div><h3>{work.title}</h3><p>{work.description}</p></div><div className="ai-work-actions">{work.href ? <a className="arrow-link" href={work.href} target="_blank" rel="noreferrer">{work.access}</a> : <a className="arrow-link" href={`mailto:pd743@georgetown.edu?subject=${encodeURIComponent(`Request preview for ${work.title}`)}`}>{work.access}</a>}{work.screenshots.length > 0 ? <button className="screenshot-link" type="button" onClick={() => setSelectedGallery({ title: work.title, screenshots: work.screenshots })}>View screenshots ↗</button> : <a className="screenshot-link" href={`mailto:pd743@georgetown.edu?subject=${encodeURIComponent(`${work.title} screenshots and walkthrough`)}`}>Request screenshots ↗</a>}</div></article>)}</div>
          <div className="ai-access-note"><span className="status-dot" /><p><strong>Access note:</strong> Internal tools contain operational workflows and are shared by request. Email me for a guided walkthrough or screenshots of the interface in use.</p><a className="arrow-link" href="mailto:pd743@georgetown.edu?subject=Request%20access%20to%20AI%20operations%20systems">Request access</a></div>
        </Reveal>

        <Reveal className="content-wrap section">
          <div className="section-head"><span className="eyebrow">06 / How I work</span><div><h2>Curious first. Specific always.</h2><p>A simple process for moving from a fuzzy need to something people can understand, use, and remember.</p></div></div>
          <div className="process"><div className="process-item"><b>01</b><h3>Listen closely</h3><p>Find the real problem underneath the request.</p></div><div className="process-item"><b>02</b><h3>Map the system</h3><p>Make people, tools, constraints, and opportunities visible.</p></div><div className="process-item"><b>03</b><h3>Make a clear thing</h3><p>Build the smallest useful version, then test it with people.</p></div><div className="process-item"><b>04</b><h3>Share the learning</h3><p>Document the result so it can travel beyond the room.</p></div></div>
        </Reveal>

        <Reveal className="content-wrap section" id="experience">
          <div className="section-head"><span className="eyebrow">07 / Experience detail</span><div><h2>Different rooms, same instinct.</h2><p>Roles across technology, community, and finance have made me a calm operator in unfamiliar environments.</p></div></div>
          <div className="timeline">
            <article className="role"><div className="meta"><span className="org">Georgetown Law Center</span>Feb 2026 – May 2026<br />Washington, DC</div><div><h3>IT Facilitator</h3><p>Triaged the support queue, maintained university WordPress sites, supported AV and telecom systems, and partnered with product managers on mobile usability and emerging AI tools.</p><div className="role-tags"><span className="tag">IT operations</span><span className="tag">WordPress</span><span className="tag">Product feedback</span></div></div></article>
            <article className="role"><div className="meta"><span className="org">Qatar Foundation</span>Aug 2024 – May 2025<br />Doha, Qatar</div><div><h3>Community Development Assistant</h3><p>Mentored a diverse residential community and designed workshops on leadership, problem-solving, and conflict resolution.</p><div className="role-tags"><span className="tag">Mentorship</span><span className="tag">Facilitation</span><span className="tag">Programming</span></div></div></article>
            <article className="role"><div className="meta"><span className="org">Equity Bank Rwanda PLC</span>Oct 2021 – May 2023<br />Kigali, Rwanda</div><div><h3>Front Office Intern</h3><p>Analyzed credit files and conducted risk assessments for a salary-advance product while using Finacle CRM for daily account workflows.</p><div className="role-tags"><span className="tag">Credit analysis</span><span className="tag">Risk</span><span className="tag">Finacle CRM</span></div></div></article>
          </div>
        </Reveal>

        <Reveal className="content-wrap section">
          <div className="section-head"><span className="eyebrow">08 / Toolkit</span><div><h2>Tools are a means, not a personality.</h2><p>I choose the tool that lets the idea become clearer, faster, or more useful.</p></div></div>
          <div className="skills-grid"><div className="skill"><h3>Multimedia & design</h3><p>Adobe Creative Suite · Figma · Photography · Graphic design fundamentals</p></div><div className="skill"><h3>Web & publishing</h3><p>WordPress · Google Sites · Git · Medium · Data-driven writing</p></div><div className="skill"><h3>Data & systems</h3><p>R · Python · Tableau · Power BI · Odoo · Finacle CRM · Notion · Airtable</p></div><div className="skill"><h3>Languages</h3><p>English (fluent) · French (intermediate) · Arabic (beginner)</p></div></div>
        </Reveal>

        <Reveal className="content-wrap section">
          <div className="section-head"><span className="eyebrow">09 / Notes</span><div><h2>Things I'm thinking about.</h2><p>Small working ideas from the overlap between technology, people, and communication.</p></div></div>
          <div className="notes"><article className="note"><span className="eyebrow">Field note / 01</span><h3>Support is a design problem.</h3><p>The best support experience starts before someone submits a ticket.</p><a href="mailto:pd743@georgetown.edu?subject=Support%20is%20a%20design%20problem">Ask me about it ↗</a></article><article className="note"><span className="eyebrow">Field note / 02</span><h3>Community needs infrastructure.</h3><p>Good intentions become participation through clear rituals, spaces, and follow-through.</p><a href="mailto:pd743@georgetown.edu?subject=Community%20needs%20infrastructure">Start a conversation ↗</a></article><article className="note"><span className="eyebrow">Field note / 03</span><h3>Make the useful visible.</h3><p>Publishing is not decoration. It is how a project keeps working after you leave.</p><a href="mailto:pd743@georgetown.edu?subject=Make%20the%20useful%20visible">Share a project ↗</a></article></div>
        </Reveal>

        <Reveal className="content-wrap section">
          <div className="section-head"><span className="eyebrow">10 / Education</span><div><h2>Learning in public.</h2><p>The academic foundation behind the practical work.</p></div></div>
          <div className="role education-row"><div className="meta">Aug 2023 – May 2027<br />Doha, Qatar</div><div><h3>Georgetown University</h3><p>Bachelor of Science in International Economics · GPA 3.53</p></div></div>
        </Reveal>
      </main>

      <footer id="contact"><div className="content-wrap"><span className="eyebrow">11 / Contact</span><h2>Have a useful<br /><em>problem?</em></h2><div className="footer-row"><div className="footer-links"><a href="mailto:pd743@georgetown.edu">pd743@georgetown.edu ↗</a><a href="tel:+97450242955">+974 5024 2955 ↗</a><a href="#top">Back to top ↑</a></div><span className="copyright">© 2026 Prince Yvon Dushimirimana</span></div></div></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelectedProject(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title"><div className="dialog-top"><span className="eyebrow">Selected work / case note</span><button className="close-button" type="button" aria-label="Close project detail" onClick={() => setSelectedProject(null)}>×</button></div><h2 id="project-title">{selectedProject.title}</h2><p>{selectedProject.body}</p><a className="modal-link" href={`mailto:pd743@georgetown.edu?subject=${encodeURIComponent(selectedProject.title)}`}>Ask for the longer version ↗</a></section></div>}
      {selectedGallery && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelectedGallery(null); }}><section className="gallery-modal" role="dialog" aria-modal="true" aria-labelledby="gallery-title"><div className="dialog-top"><div><span className="eyebrow">Interface walkthrough</span><h2 id="gallery-title">{selectedGallery.title}</h2></div><button className="close-button" type="button" aria-label="Close screenshot gallery" onClick={() => setSelectedGallery(null)}>×</button></div><div className="gallery-grid">{selectedGallery.screenshots.map((src) => <img key={src} src={src} alt={`${selectedGallery.title} interface screenshot`} />)}</div><a className="modal-link" href={`mailto:pd743@georgetown.edu?subject=${encodeURIComponent(`${selectedGallery.title} access request`)}`}>Request a guided walkthrough ↗</a></section></div>}
    </div>
  );
}
