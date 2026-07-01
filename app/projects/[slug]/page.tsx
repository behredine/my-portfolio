import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects, getProjectById } from "@/lib/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const isExternalDemo = project.liveDemoUrl?.startsWith("http") ?? false;

  return (
    <article className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container-narrow">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8 max-w-3xl">
          <Badge variant="outline" className="mb-4">
            {project.category}
          </Badge>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveDemoUrl && (
              isExternalDemo ? (
                <Button asChild>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                    <ExternalLink />
                  </a>
                </Button>
              ) : (
                <Button asChild>
                  <Link href={project.liveDemoUrl}>View demo</Link>
                </Button>
              )
            )}
            {project.sourceCodeUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                  Source code
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted/30">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Problem
            </h2>
            <p className="mt-3 text-base leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              My role
            </h2>
            <p className="mt-3 text-base leading-relaxed">{project.role}</p>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Features
            </h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-border bg-muted/20 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Interested in a similar project?
          </p>
          <Button asChild className="mt-4">
            <Link href="/#contact">Start a conversation</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
