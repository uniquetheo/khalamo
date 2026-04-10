import React from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function Music() {
  const releases = [
    { title: "Lost in Lagos", year: "2026", type: "Single" },
    { title: "Midnight Sun", year: "2025", type: "EP" },
    { title: "The Arrival", year: "2025", type: "Album" },
  ];

  return (
    <section className="py-20 md:py-32 relative z-10">
      <Container>
        <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-4">
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-accent">
            Latest Releases
          </h3>
          <span className="text-sm font-semibold opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
            View All
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {releases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 border border-white/5 cursor-pointer shadow-lg bg-secondary"
            >
              <div className="h-56 md:h-64 bg-white/5 relative group pb-0 mb-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                  <span className="mt-4 text-sm font-semibold tracking-wider uppercase opacity-80 text-white">Artwork</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-2xl leading-tight text-foreground">
                    {item.title}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-background text-accent">
                    {item.type}
                  </div>
                </div>
                <div className="text-base font-medium opacity-60 mt-1">{item.year}</div>
                <Button
                  className="mt-8 w-full h-12 rounded-xl text-base font-bold transition-all hover:opacity-90 bg-accent text-black"
                >
                  Play Full Track
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
