import React from "react";
import { Container } from "@/components/shared/container";
import { Heading, Subheading } from "@/components/ui/typography";

export function About() {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center md:text-left border-l-0 md:border-l-4 md:border-accent md:pl-10">
          <Heading className="text-3xl md:text-5xl mb-6">
            About Khal Amo
          </Heading>

          <Subheading className="text-xl leading-relaxed opacity-80">
            Khal Amo is an emerging artist crafting immersive soundscapes
            that blend emotion, rhythm, and storytelling. Operating globally, creating timeless energy.
          </Subheading>
        </div>
      </Container>
    </section>
  );
}
