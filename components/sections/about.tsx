"use client";

import { Brain, Code2, Workflow } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import {
  capabilities,
  engineeringPrinciples,
  techStack,
} from "@/lib/data/site";

const iconMap = {
  code: Code2,
  brain: Brain,
  workflow: Workflow,
} as const;

export function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            label="About"
            title="Engineering mindset, business outcomes"
            description="I don't write code for its own sake. Every project starts with a business problem and ends with software your team can rely on."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = iconMap[capability.icon];
            return (
              <StaggerItem key={capability.title}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/80">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn>
          <div className="mt-20">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16 rounded-xl border border-border bg-muted/20 p-8 md:p-10">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">
              How I work
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {engineeringPrinciples.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-sm font-semibold">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
