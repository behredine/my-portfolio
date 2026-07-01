"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { processSteps } from "@/lib/data/site";

export function Process() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            label="Process"
            title="Predictable delivery, no surprises"
            description="A structured approach that keeps projects focused and on track from kickoff to launch."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-3xl font-semibold tracking-tight text-muted-foreground/40">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
