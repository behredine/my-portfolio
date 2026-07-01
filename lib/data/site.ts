import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Behredin Eshetu",
  title: "Behredin Eshetu — Software Engineer",
  description:
    "Freelance software engineer building premium websites, AI integrations, and business automation for companies that need reliable, production-ready software.",
  url: "https://behredin.dev",
  email: "behredineshetu27@gmail.com",
  github: "https://github.com/behredine",
  telegram: "https://t.me/beetheart",
  role: "Software Engineer",
  tagline: "I build high-quality software for real businesses.",
};

export const stats = [
  { label: "Years shipping", value: "3+" },
  { label: "Projects delivered", value: "20+" },
  { label: "Focus", value: "Web · AI · Automation" },
] as const;

export const focusAreas = [
  "Web Applications",
  "AI Integration",
  "Business Automation",
  "Product UI",
  "Landing Pages",
] as const;

export const capabilities = [
  {
    title: "Production Web Development",
    description:
      "I build fast, accessible web applications with clear architecture — from marketing sites to interactive product interfaces that hold up under real traffic.",
    icon: "code" as const,
  },
  {
    title: "AI That Solves Real Tasks",
    description:
      "Not chatbot demos. I integrate assistants, search, and workflow copilots that reduce support load and help teams move faster on concrete business problems.",
    icon: "brain" as const,
  },
  {
    title: "Practical Automation",
    description:
      "Custom workflows that connect the tools you already use — reporting, notifications, data pipelines — so your team spends less time on repetitive work.",
    icon: "workflow" as const,
  },
];

export const services = [
  {
    title: "Website & Web App Development",
    description:
      "Portfolio sites, corporate websites, and landing pages engineered for performance, mobile responsiveness, and conversion — not just visual polish.",
  },
  {
    title: "AI Feature Integration",
    description:
      "Intelligent search, automated summaries, customer-facing assistants, and internal copilots built to fit your existing product and data.",
  },
  {
    title: "Business Automation",
    description:
      "End-to-end workflows for reporting, lead routing, notifications, and data sync between the platforms your business runs on.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Define the business goal, user journey, and success criteria before writing code.",
  },
  {
    step: 2,
    title: "Design & Structure",
    description:
      "Lock the information architecture, interface patterns, and content hierarchy.",
  },
  {
    step: 3,
    title: "Build & Refine",
    description:
      "Ship iteratively with performance testing, mobile QA, and accessibility checks.",
  },
  {
    step: 4,
    title: "Launch & Handoff",
    description:
      "Deploy with documentation, maintenance guidance, and a clear path for future updates.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "behredineshetu27@gmail.com",
    href: "mailto:behredineshetu27@gmail.com",
  },
  {
    label: "Telegram",
    value: "@beetheart",
    href: "https://t.me/beetheart",
  },
  {
    label: "GitHub",
    value: "behredine",
    href: "https://github.com/behredine",
  },
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
  "OpenAI",
  "Vercel",
] as const;

export const engineeringPrinciples = [
  {
    title: "Clarity over complexity",
    description:
      "Simple, maintainable code that the next developer — or client — can understand without a walkthrough.",
  },
  {
    title: "Ship what works",
    description:
      "Prioritize features that move business metrics. Every line of code should earn its place.",
  },
  {
    title: "Performance by default",
    description:
      "Fast load times, responsive layouts, and accessible interfaces are baseline requirements, not extras.",
  },
];
