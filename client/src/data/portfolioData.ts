import type {
  AIWork,
  EducationItem,
  ExperienceSnapshotItem,
  FieldNote,
  ProcessItem,
  Project,
  RoleTimelineItem,
  SkillCategory,
  StatItem,
} from "@/types/portfolio";

const screenshot = (filename: string) => `${import.meta.env.BASE_URL}screenshots/${filename}`;

export const PERSONAL_INFO = {
  name: "Prince Yvon",
  surname: "",
  brandText: "Prince Yvon",
  initials: "Prince Yvon",
  year: "2026",
  email: "pd743@georgetown.edu",
  phone: "+974 5024 2955",
  location: "Doha, Qatar",
  academicNote: "Currently studying at Georgetown University Qatar · Class of 2027",
  heroBio:
    "International economics student, multimedia maker, and systems-minded collaborator building practical operating software and interfaces using Lovable AI and Google AI Studio.",
  heroSideNote:
    "Based in Doha. Building applied operating systems and internal tools with Lovable AI and Google AI Studio, alongside financial analysis, research, and community systems.",
};

export const PROJECTS: Record<string, Project> = {
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

export const AI_WORKS: AIWork[] = [
  {
    title: "Kigali Rentals",
    type: "AI app / internal ops",
    eyebrow: "Fleet & Bookings Ops",
    description:
      "A complete car-rental operating system for Kigali, bringing fleet availability, rental contracts, inspections, and customer records into one seamless interface.",
    href: "https://kigalirentals.lovable.app",
    status: "Institutional demo",
    access: "Open demo",
    tools: "Lovable AI · Google AI Studio",
    screenshots: [
      screenshot("rentals_01_insights.png"),
      screenshot("rentals_02_contract_detail.png"),
      screenshot("rentals_03_contracts_list.png"),
      screenshot("rentals_04_dashboard.png"),
    ],
  },
  {
    title: "Ijuru",
    type: "AI app / internal ops",
    eyebrow: "Hospitality & POS Ops",
    description:
      "An internal operating system for a restaurant and cafe, shaped around live table floor plans, PIN-authenticated staff POS, transaction logs, and kitchen reporting.",
    href: "https://ijuru.lovable.app",
    status: "Institutional demo",
    access: "Open demo",
    tools: "Lovable AI · Google AI Studio",
    screenshots: [
      screenshot("restaurant_05_transactions.png"),
      screenshot("restaurant_06_reports.png"),
      screenshot("restaurant_07_floor.png"),
      screenshot("restaurant_08_pos_pin.png"),
    ],
  },
  {
    title: "Studio Commerce",
    type: "AI app / storefront & studio",
    eyebrow: "Commerce & Catalogue",
    description:
      "A high-finish ecommerce website and studio dashboard with inventory cataloguing, dynamic product display, order tracking, and clean customer journeys.",
    href: "https://rugmosiac.lovable.app",
    status: "Live demo",
    access: "Open demo",
    tools: "Lovable AI · Google AI Studio",
    screenshots: [
      screenshot("ecommerce_09_studio_dashboard.png"),
      screenshot("ecommerce_10_studio_catalogue.png"),
      screenshot("ecommerce_11_website_homepage.png"),
      screenshot("ecommerce_12_product_page.png"),
    ],
  },
  {
    title: "EV Charging Operations",
    type: "AI app / internal ops",
    eyebrow: "Infrastructure & Grid Ops",
    description:
      "An internal station management platform for EV charging hubs, tracking live charger occupancy, arrivals queueing, kWh telemetry, and financial performance.",
    href: "https://volta10.lovable.app",
    status: "Institutional demo",
    access: "Open demo",
    tools: "Lovable AI · Google AI Studio",
    screenshots: [
      screenshot("ev_13_financial_reports.png"),
      screenshot("ev_14_arrivals_queue.png"),
      screenshot("ev_15_locations_chargers.png"),
      screenshot("ev_16_charging_sessions.png"),
    ],
  },
  {
    title: "Rugmosiac",
    type: "AI app / public experiment",
    eyebrow: "Generative Product Experiment",
    description:
      "A public experimental interface exploring generative textures, patterns, and dynamic UI states with a live accessible sandbox.",
    href: "https://rugmosiac.lovable.app",
    status: "Public experiment",
    access: "Open demo",
    tools: "Lovable AI · Google AI Studio",
    screenshots: [
      screenshot("ecommerce_11_website_homepage.png"),
      screenshot("ecommerce_12_product_page.png"),
    ],
  },
];

export const STATS: StatItem[] = [
  {
    value: "03",
    label: "Countries lived, studied, and worked across",
  },
  {
    value: "05+",
    label: "Years of hands-on experience",
  },
  {
    value: "04",
    label: "Languages and working modes",
  },
];

export const EXPERIENCE_SNAPSHOTS: ExperienceSnapshotItem[] = [
  {
    year: "2026",
    role: "IT Facilitator",
    organization: "Georgetown Law Center",
    location: "Washington, DC",
    details: "Support operations, WordPress, AV systems, mobile usability, AI tools",
  },
  {
    year: "2024—25",
    role: "Community Development Assistant",
    organization: "Qatar Foundation",
    location: "Doha",
    details: "Mentorship, workshops, conflict resolution, community programming",
  },
  {
    year: "2021—23",
    role: "Front Office Intern",
    organization: "Equity Bank Rwanda PLC",
    location: "Kigali",
    details: "Credit analysis, risk assessments, Finacle CRM workflows",
  },
];

export const PROCESS_STEPS: ProcessItem[] = [
  {
    number: "01",
    title: "Listen closely",
    description: "Find the real problem underneath the request.",
  },
  {
    number: "02",
    title: "Map the system",
    description: "Make people, tools, constraints, and opportunities visible.",
  },
  {
    number: "03",
    title: "Make a clear thing",
    description: "Build the smallest useful version, then test it with people.",
  },
  {
    number: "04",
    title: "Share the learning",
    description: "Document the result so it can travel beyond the room.",
  },
];

export const TIMELINE_ROLES: RoleTimelineItem[] = [
  {
    organization: "Georgetown Law Center",
    period: "Feb 2026 – May 2026",
    location: "Washington, DC",
    title: "IT Facilitator",
    description:
      "Triaged the support queue, maintained university WordPress sites, supported AV and telecom systems, and partnered with product managers on mobile usability and emerging AI tools.",
    tags: ["IT operations", "WordPress", "Product feedback"],
  },
  {
    organization: "Qatar Foundation",
    period: "Aug 2024 – May 2025",
    location: "Doha, Qatar",
    title: "Community Development Assistant",
    description:
      "Mentored a diverse residential community and designed workshops on leadership, problem-solving, and conflict resolution.",
    tags: ["Mentorship", "Facilitation", "Programming"],
  },
  {
    organization: "Equity Bank Rwanda PLC",
    period: "Oct 2021 – May 2023",
    location: "Kigali, Rwanda",
    title: "Front Office Intern",
    description:
      "Analyzed credit files and conducted risk assessments for a salary-advance product while using Finacle CRM for daily account workflows.",
    tags: ["Credit analysis", "Risk", "Finacle CRM"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Applied AI & software prototyping",
    skills: "Lovable AI · Google AI Studio · Prompt Architecture · Rapid Full-Stack Prototyping · System Design",
  },
  {
    title: "Multimedia & design",
    skills: "Adobe Creative Suite · Figma · Photography · Graphic design fundamentals",
  },
  {
    title: "Web & publishing",
    skills: "WordPress · Google Sites · Git · Medium · Data-driven writing",
  },
  {
    title: "Data & systems",
    skills: "R · Python · Tableau · Power BI · Odoo · Finacle CRM · Notion · Airtable",
  },
  {
    title: "Languages",
    skills: "English (fluent) · French (intermediate) · Arabic (beginner)",
  },
];

export const FIELD_NOTES: FieldNote[] = [
  {
    number: "01",
    title: "Support is a design problem.",
    description: "The best support experience starts before someone submits a ticket.",
    subject: "Support is a design problem",
    actionText: "Ask me about it ↗",
  },
  {
    number: "02",
    title: "Community needs infrastructure.",
    description: "Good intentions become participation through clear rituals, spaces, and follow-through.",
    subject: "Community needs infrastructure",
    actionText: "Start a conversation ↗",
  },
  {
    number: "03",
    title: "Make the useful visible.",
    description: "Publishing is not decoration. It is how a project keeps working after you leave.",
    subject: "Make the useful visible",
    actionText: "Share a project ↗",
  },
];

export const EDUCATION_DATA: EducationItem = {
  institution: "Georgetown University",
  period: "Aug 2023 – May 2027",
  location: "Doha, Qatar",
  degree: "Bachelor of Science in International Economics",
  gpa: "GPA 3.53",
};
