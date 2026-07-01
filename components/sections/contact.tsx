"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactLinks, siteConfig } from "@/lib/data/site";

export function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            label="Contact"
            title="Let's build something that works"
            description="Tell me about your project — I'll respond within 24 hours with next steps."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Whether you need a business website, an AI feature, or an
                  automation workflow — send the goal and I&apos;ll help shape
                  the best approach.
                </p>

                <div className="mt-8 space-y-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:border-primary/30 hover:bg-muted/30"
                    >
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium">{link.value}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 rounded-lg border border-dashed border-border p-4">
                  <p className="text-xs text-muted-foreground">
                    Typical response time
                  </p>
                  <p className="mt-1 text-sm font-medium">Within 24 hours</p>
                </div>
              </div>

              <form
                className="space-y-5 p-8 lg:p-10"
                action="https://formspree.io/f/mykqnbzg"
                method="post"
                encType="text/plain"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project brief</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What are you building? What's the timeline?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                  <ArrowUpRight />
                </Button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
