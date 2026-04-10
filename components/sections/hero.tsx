import React from "react";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image / Vibe */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <Heading className="text-6xl md:text-8xl tracking-tighter uppercase glow">
          Khal Amo
        </Heading>

        <Subheading className="text-xl md:text-2xl mt-6 opacity-80 max-w-2xl">
          Cinematic. Emotional. Timeless.
        </Subheading>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:shadow-[0_0_50px_rgba(0,194,255,0.5)] transition-all">
            Listen Now
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold bg-transparent border-white/20 hover:bg-white/10 text-white">
            Tour Dates
          </Button>
        </div>
      </div>
    </section>
  );
}
