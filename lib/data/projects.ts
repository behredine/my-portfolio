import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "luxury-hotel",
    title: "Luxury Hotel Website",
    category: "Hospitality",
    description:
      "A premium hotel website designed to communicate five-star quality from the first visit — with room showcases, booking flows, and an AI guest assistant.",
    problem:
      "The hotel needed a digital presence that matched its physical experience. Generic templates failed to convey luxury, and guests had no way to get quick answers outside business hours.",
    role: "Full-stack developer — architecture, UI design, booking flow, and AI assistant integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Assistant",
      "Responsive UI",
    ],
    features: [
      "Premium brand presentation with room showcase",
      "Reservation and contact flow",
      "AI-powered guest support assistant",
      "Mobile-first responsive layout",
    ],
    liveDemoUrl: "/projects/luxury-hotel",
    sourceCodeUrl: null,
    image: "/assets/luxury-hotel-picture.jpg",
    imageAlt: "Luxury hotel website preview showing elegant room showcase",
  },
  {
    id: "textile-company",
    title: "Textile Company Website",
    category: "Corporate / Manufacturing",
    description:
      "A corporate website for a textile manufacturer — structured to build B2B trust with a clear company profile, product catalog, and professional brand presentation.",
    problem:
      "The company lacked a credible online presence for international buyers. They needed a site that communicated manufacturing capability and product quality without overwhelming visitors.",
    role: "Frontend developer — corporate UI, product showcase architecture, and responsive implementation.",
    technologies: [
      "React",
      "Responsive Design",
      "Corporate UI",
      "Brand Storytelling",
    ],
    features: [
      "Company profile and history section",
      "Structured product showcase",
      "Professional B2B layout",
      "Fully responsive across devices",
    ],
    liveDemoUrl: "/projects/textile-company",
    sourceCodeUrl:
      "https://github.com/behredine/kombolcha_textile_factory_web",
    image: "/assets/textile-company-preview.jpg",
    imageAlt: "Textile company website preview with product showcase",
  },
  {
    id: "educational-learning-platform",
    title: "Educational Learning Platform",
    category: "Education",
    description:
      "A chapter-based learning platform combining written content, audio lectures, and embedded video — designed for students who learn through multiple formats.",
    problem:
      "Students needed a single place to access course material across text, audio, and video formats. Scattered resources across platforms made structured study difficult.",
    role: "Full-stack developer — content architecture, media integration, and learning UX.",
    technologies: [
      "React",
      "Content Architecture",
      "Media Embeds",
      "Learning UX",
    ],
    features: [
      "Chapter-based navigation and progress",
      "Written explanations with rich formatting",
      "Integrated audio lecture playback",
      "Embedded YouTube video lessons",
    ],
    liveDemoUrl: "https://behredine.github.io/nafais-al-muhadirat/",
    sourceCodeUrl: "https://github.com/behredine/nafais-al-muhadirat",
    image: "/assets/educational-learning-preview.jpg",
    imageAlt: "Educational learning platform preview with chapter navigation",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
