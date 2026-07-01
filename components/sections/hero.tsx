"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig, stats, focusAreas } from "@/lib/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />
      </div>

      <div className="container-narrow">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <FadeIn>
              <Badge variant="outline" className="mb-6 font-mono text-xs">
                {siteConfig.role} · Available for freelance
              </Badge>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                {siteConfig.tagline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                I design and build production-ready websites, AI integrations,
                and automation systems for hotels, brands, and product teams
                who need software that works — not prototypes.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="#contact">
                    Start a project
                    <ArrowRight className="ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#projects">View work</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                    GitHub
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} direction="up">
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  portfolio — overview
                </span>
              </div>

              <div className="grid grid-cols-3 gap-px bg-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card p-5">
                    <p className="font-mono text-2xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Current focus
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Freelance websites, AI-powered tools, and polished
                    client-ready interfaces.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border p-3">
                    <p className="text-xs text-muted-foreground">Approach</p>
                    <p className="mt-1 text-sm font-medium">Ship what works</p>
                  </div>
                  <div className="rounded-lg border border-border p-3">
                    <p className="text-xs text-muted-foreground">Standard</p>
                    <p className="mt-1 text-sm font-medium">
                      Fast & accessible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
