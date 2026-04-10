import React from "react";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MusicCard } from "@/components/shared/music-card";
import { Heading, Subheading } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Section>
        <Container>
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-5xl">Latest Releases</Heading>
            <Subheading>The evolution of global sound.</Subheading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <MusicCard 
              title="Midnight Sun (Single)" 
              cover="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" 
            />
            <MusicCard 
              title="Lost in Lagos" 
              cover="https://images.unsplash.com/photo-1540039155733-d7696d4eb98c?q=80&w=1974&auto=format&fit=crop" 
            />
            <MusicCard 
              title="The Arrival (Album)" 
              cover="https://images.unsplash.com/photo-1501281668745-f7f5792203bba?q=80&w=2070&auto=format&fit=crop" 
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
