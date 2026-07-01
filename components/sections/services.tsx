"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { services } from "@/lib/data/site";

export function Services() {
  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            label="Services"
            title="What I build for clients"
            description="Focused offerings for teams that need a finished product — not a proof of concept."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
