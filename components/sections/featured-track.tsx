import React from "react";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/typography";

export function FeaturedTrack() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <Card className="p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-50" />
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,194,255,0.15)] aspect-square md:aspect-[4/3] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop"
                alt="Featured Track Cover"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                Latest Release
              </p>

              <Heading className="text-4xl md:text-5xl mb-4">
                Midnight Sun
              </Heading>

              <Subheading className="text-lg opacity-80 mb-8 max-w-md">
                A short emotional description of the song goes here later. It blends raw emotion with cinematic soundscapes.
              </Subheading>

              <Button size="lg" className="rounded-full px-8 h-14 font-bold text-base shadow-[0_0_20px_rgba(0,194,255,0.3)]">
                Play Now
              </Button>
            </div>

          </div>
        </Card>
      </Container>
    </section>
  );
}
