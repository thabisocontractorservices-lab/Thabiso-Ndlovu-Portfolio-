// ============ SITE CONTENT — edit here to update copy ============

export const site = {
  name: "Thabiso Gift Ndlovu",
  shortName: "Thabiso Ndlovu",
  initial: "T",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://thabisondlovu.co.za",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://cal.com/thabiso-ndlovu/30min?overlayCalendar=true",
  mission:
    "Helping businesses implement practical AI and automation systems built on fundamentals — durable systems that outlast the hype.",
};

export const social = {
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/thabisogiftndlovu",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/thabisocontractorservices-lab",
};

export const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Approach", href: "#approach" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export const trustChips = [
  { iconName: "trend", label: "Workflow-first" },
  { iconName: "zap", label: "Automation systems" },
  { iconName: "clock", label: "Built to last" },
  { iconName: "check", label: "Practical implementation" },
];

export const heroChecklist = [
  "Map the workflow",
  "Identify automation points",
  "Integrate AI into operations",
  "Measure & refine",
];

export const heroHealth = [
  { label: "Workflow coverage", value: 92 },
  { label: "Automation", value: 78 },
  { label: "Manual effort saved", value: 64 },
];

export const philosophyProblems = [
  "Overwhelmed by an endless stream of new tools",
  "Adopting platforms before fixing the workflow",
  "Mistaking novelty for progress",
];

export const philosophyApproach = [
  "Map the process before choosing any tool",
  "Automation systems that compound over time",
  "AI integrated into real operations, not bolted on",
];

export type ProjectStatus = "p" | "dev" | "rd";

export const projects: {
  iconName: string;
  status: ProjectStatus;
  statusLabel: string;
  name: string;
  description: string;
  tag: string;
  url?: string;
}[] = [
  {
    iconName: "building",
    status: "p",
    statusLabel: "In progress",
    name: "kznplumbers.co.za",
    description:
      "A directory platform helping homeowners find verified plumbers in South Africa, while giving plumbers a dedicated dashboard to manage and grow their business.",
    tag: "Marketplace · Operations",
    url: "https://www.kznplumbers.co.za/",
  },
  {
    iconName: "file",
    status: "dev",
    statusLabel: "In development",
    name: "Smart83.co.za",
    description:
      "A smart Z83 government job-application assistant that simplifies filling out Z83 forms through autofill and workflow optimization — less friction, fewer errors.",
    tag: "Automation · GovTech",
  },
  {
    iconName: "atom",
    status: "rd",
    statusLabel: "R&D",
    name: "AI Systems Research",
    description:
      "Ongoing exploration and implementation of AI workflows, automation systems, agents, and operational processes for modern businesses.",
    tag: "Lab · Workflows",
  },
];
