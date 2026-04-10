import React from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-[500px] md:h-[700px] flex items-center overflow-hidden group pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-top opacity-50 md:opacity-60 transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop')` }}
      />
      {/* Dynamic Gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgb(var(--background)) 10%, transparent 80%), linear-gradient(to top, rgb(var(--background)) 0%, transparent 40%)`,
        }}
        className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"
      />
      
      {/* Using the CSS variables directly in tailwind to simulate the exact gradient from the mock */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, hsl(225 44% 4%) 10%, transparent 80%), linear-gradient(to top, hsl(225 44% 4%) 0%, transparent 40%)' }}
      />

      <Container className="relative z-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-2 md:mb-4 uppercase text-accent">
            KHAL AMO
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-medium opacity-90 text-white">
            Experience the new wave.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="px-8 py-6 md:h-14 rounded-full font-bold text-black transition-transform hover:scale-105 shadow-xl bg-accent text-base"
            >
              Listen Now
            </Button>
            <Button
              className="px-8 py-6 md:h-14 rounded-full font-bold transition-transform hover:scale-105 backdrop-blur-sm border-white/20 text-base"
              style={{ color: "#FFF", backgroundColor: "rgba(255,255,255,0.05)" }}
              variant="outline"
            >
              Tour Dates
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
