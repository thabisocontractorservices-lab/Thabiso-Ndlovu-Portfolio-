// ============ DATA — UPDATE PLACEHOLDERS WITH REAL VALUES ============
// All copy and data for the site lives here. Edit freely — the components
// will pick up your changes automatically.

export const site = {
  name: "Thabiso Gift Ndlovu",
  shortName: "Thabiso",
  initial: "T",
  role: "Marketer · AI Builder · SaaS Founder",
  location: "Johannesburg, South Africa",
  availability: "Available for select projects · Johannesburg → Worldwide",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "{{ your-email@domain.co.za }}",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  mission:
    "Building digital products and AI systems for the next generation of African businesses — practical, ambitious, and made for here.",
};

export const social = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
  x: process.env.NEXT_PUBLIC_X_URL || "#",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
};

// ============ HERO MOCKUP CARDS ============
export const heroMockups = [
  {
    label: "Smart Z83 · Live",
    title: "Application submitted",
    meta: "Auto-filled · 8 fields · 12s",
    position: "mockup-1",
  },
  {
    label: "Plumbers.co.za",
    title: "14 new leads today",
    meta: "Cape Town · Johannesburg · Durban",
    position: "mockup-2",
  },
  {
    label: "AI Agent",
    title: "1.2k tasks completed",
    meta: "Marketing · Automation · Live",
    position: "mockup-3",
  },
];

// ============ ABOUT STATS ============
export const aboutStats = [
  { value: 4, label: "Products in pipeline", suffix: "+" },
  { value: 3, label: "Industries served" },
  { value: 1200, label: "Automated tasks shipped", suffix: "+" },
  { value: 100, label: "South Africa first", suffix: "%" },
];

// ============ PROJECTS ============
export type ProjectStatus = "live" | "progress" | "beta" | "rd";

export const projects: {
  icon: string;
  status: ProjectStatus;
  statusLabel: string;
  category: string;
  title: string;
  description: string;
  progress: number;
  progressLabel: string;
  progressValue: string;
  cta: string;
  ctaHref: string;
}[] = [
  {
    icon: "G",
    status: "progress",
    statusLabel: "In progress",
    category: "SaaS · Digital Product",
    title: "GKZ",
    description:
      "A digital product / startup project currently in development — building a new category of tool for the African market. Stealth-mode details revealing soon.",
    progress: 62,
    progressLabel: "Build progress",
    progressValue: "62%",
    cta: "Get early access",
    ctaHref: "#booking",
  },
  {
    icon: "P",
    status: "beta",
    statusLabel: "Beta",
    category: "Marketplace · Lead Gen",
    title: "Plumbers.co.za",
    description:
      "A plumber marketplace and lead generation platform connecting South African customers with verified plumbers — fast quotes, geo-targeted leads, modern booking flow.",
    progress: 84,
    progressLabel: "Build progress",
    progressValue: "84%",
    cta: "Visit platform",
    ctaHref: "#",
  },
  {
    icon: "Z",
    status: "live",
    statusLabel: "Live",
    category: "AI · GovTech",
    title: "Smart Z83",
    description:
      "An AI-assisted Z83 government form filler helping South Africans complete employment applications faster, with fewer errors, and in less time than the manual process.",
    progress: 96,
    progressLabel: "Build progress",
    progressValue: "96%",
    cta: "Try Smart Z83",
    ctaHref: "#",
  },
  {
    icon: "AI",
    status: "rd",
    statusLabel: "R&D",
    category: "Lab · Experiments",
    title: "AI + Automation Experiments",
    description:
      "Ongoing experiments with AI systems, agents, automations, and workflows — a public lab notebook of what's working, what's broken, and what's worth scaling next.",
    progress: 40,
    progressLabel: "Active threads",
    progressValue: "11",
    cta: "Read the lab notes",
    ctaHref: "#insights",
  },
];

export const projectFilters: { label: string; filter: ProjectStatus | "all" }[] = [
  { label: "All", filter: "all" },
  { label: "Live", filter: "live" },
  { label: "In progress", filter: "progress" },
  { label: "Beta", filter: "beta" },
  { label: "R&D", filter: "rd" },
];

// ============ SERVICES ============
export const services = [
  {
    iconName: "ai",
    title: "AI Consulting",
    description:
      "Translate AI hype into deployable systems — strategy, architecture, vendor selection, and the practical roadmap for your team.",
  },
  {
    iconName: "chart",
    title: "Marketing Strategy",
    description:
      "Positioning, channels, narrative, and measurement — built around the South African market, not imported from elsewhere.",
  },
  {
    iconName: "zap",
    title: "Automation Systems",
    description:
      "End-to-end workflow automations across CRMs, lead capture, content ops, and reporting — designed for compounding leverage.",
  },
  {
    iconName: "box",
    title: "SaaS Product Strategy",
    description:
      "From concept to market fit — product narrative, pricing architecture, onboarding, and the roadmap that gets you to retention.",
  },
  {
    iconName: "target",
    title: "Lead Generation Systems",
    description:
      "Predictable lead pipelines — landing pages, paid funnels, organic channels, and the qualification logic underneath them.",
  },
  {
    iconName: "pen",
    title: "Content & Digital Branding",
    description:
      "A distinct voice, a coherent visual system, and content that performs — for founders building category-defining brands.",
  },
] as const;

// ============ NOW SECTION ============
export const nowTimeline = [
  {
    date: "May 2026 · This week",
    title: "Shipping Plumbers.co.za to beta in Cape Town",
    description:
      "Final QA on the lead-routing engine, onboarding the first batch of verified plumbers, and instrumenting analytics for the lead-to-job conversion funnel.",
  },
  {
    date: "May 2026 · Ongoing",
    title: "Studying AI & data analytics",
    description:
      "Working through advanced data analytics coursework and applying it directly to the marketing models inside my own products.",
  },
  {
    date: "Q2 2026",
    title: "Researching AI agents and orchestration",
    description:
      "Prototyping multi-agent workflows for marketing operations — content drafting, lead enrichment, follow-up sequencing, and reporting.",
  },
  {
    date: "2026",
    title: "Growing digital businesses in South Africa",
    description:
      "Building the connective tissue between marketing, AI, and product so that small operators in SA can compete with global tooling — without global budgets.",
  },
  {
    date: "Ongoing",
    title: "Building GKZ",
    description:
      "Quiet phase — design, architecture, and early user interviews. Public reveal coming when the product earns it.",
  },
];

export const nowWeekly = [
  { task: "Smart Z83 — performance audit", tag: "Ship", done: true },
  { task: "Plumbers lead-routing v2", tag: "Build", done: true },
  { task: "GKZ user interviews · batch 3", tag: "Research", done: false },
  { task: "AI agent prototype — lead enrichment", tag: "Lab", done: false },
  { task: "Q3 marketing roadmap draft", tag: "Strategy", done: false },
  { task: "Write — insight piece on African SaaS", tag: "Content", done: false },
];

// ============ INSIGHTS ============
export const insights = [
  {
    category: "AI",
    readTime: "10 min read",
    title:
      "Why AI for African problems looks different from AI for Silicon Valley problems.",
    excerpt:
      "Bandwidth, languages, payments, regulation, trust. Five constraints that quietly reshape every AI product built for South Africa.",
    href: "#",
  },
  {
    category: "Marketing",
    readTime: "7 min read",
    title: "The South African marketing stack — what actually compounds.",
    excerpt:
      "A practitioner's view on the channels, tools, and content systems that work for SA-first founders — and the ones that don't.",
    href: "#",
  },
  {
    category: "SaaS",
    readTime: "12 min read",
    title: "Building marketplaces in markets with trust deficits.",
    excerpt:
      "Lessons from Plumbers.co.za on verification, escrow, reputation, and the unsexy mechanics that make a marketplace actually work.",
    href: "#",
  },
];

// ============ TESTIMONIALS ============
export const testimonials = [
  {
    quote:
      "Thabiso doesn't ship slideware — he ships systems. We had a working automation in days, not quarters.",
    name: "Placeholder name",
    role: "Founder · Placeholder Co.",
    initials: "NM",
  },
  {
    quote:
      "Rare combination — marketer's instincts, builder's hands. The kind of operator who closes the loop himself.",
    name: "Placeholder name",
    role: "CEO · Placeholder Group",
    initials: "SK",
  },
  {
    quote:
      "He understands the South African market like a local, and the technology like someone who's been building globally for years.",
    name: "Placeholder name",
    role: "Partner · Placeholder Ventures",
    initials: "LD",
  },
];

// ============ NAV ============
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Now", href: "#now" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const mobileNavLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Now", href: "#now" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];
