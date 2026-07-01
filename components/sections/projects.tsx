"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isExternal =
    project.liveDemoUrl?.startsWith("http") ?? false;
  const demoHref = project.liveDemoUrl ?? `/projects/${project.id}`;

  return (
    <FadeIn delay={index * 0.08}>
      <article className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-border/80 hover:bg-card/80">
        <Link
          href={`/projects/${project.id}`}
          className="block overflow-hidden"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
              priority={index === 0}
            />
          </div>
        </Link>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              <Link href={`/projects/${project.id}`}>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {project.title}
                </h3>
              </Link>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.description}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Problem solved
              </p>
              <p className="text-sm leading-relaxed text-foreground/90">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                My role
              </p>
              <p className="text-sm leading-relaxed text-foreground/90">
                {project.role}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {isExternal ? (
              <Button asChild size="sm">
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                  <ExternalLink />
                </a>
              </Button>
            ) : (
              <Button asChild size="sm">
                <Link href={demoHref}>
                  View project
                  <ArrowUpRight />
                </Link>
              </Button>
            )}
            <Button asChild variant="outline" size="sm">
              <Link href={`/projects/${project.id}`}>Case study</Link>
            </Button>
            {project.sourceCodeUrl && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            label="Selected Work"
            title="Software built for real business outcomes"
            description="Each project solves a specific client problem — from brand presence to learning platforms. Click through for the full case study."
          />
        </FadeIn>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
