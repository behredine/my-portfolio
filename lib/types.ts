export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  role: string;
  technologies: string[];
  features: string[];
  liveDemoUrl: string | null;
  sourceCodeUrl: string | null;
  image: string;
  imageAlt: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: "code" | "brain" | "workflow";
}

export interface Service {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  github: string;
  telegram: string;
  role: string;
  tagline: string;
}
