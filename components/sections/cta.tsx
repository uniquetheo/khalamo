import React from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/typography";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-card/50 border-t border-b border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl" />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Heading className="text-4xl md:text-5xl border-b-0 pb-0">
            Stay Connected
          </Heading>

          <Subheading className="text-lg md:text-xl mt-4 mb-10 opacity-80">
            Follow Khal Amo and never miss a release.
          </Subheading>

          <Button size="lg" className="rounded-full px-10 h-14 font-bold bg-white text-black hover:bg-gray-200">
            Follow on Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
}
