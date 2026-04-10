import React from "react";
import { Container } from "@/components/shared/container";

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 border-b border-white/5 bg-secondary/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-5">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-accent">
            KHAL AMO
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold opacity-80 tracking-wide">
            <span className="hover:opacity-100 hover:text-white cursor-pointer transition-colors text-foreground">Music</span>
            <span className="hover:opacity-100 hover:text-white cursor-pointer transition-colors text-foreground">Tour</span>
            <span className="hover:opacity-100 hover:text-white cursor-pointer transition-colors text-foreground">Merch</span>
            <span className="hover:opacity-100 hover:text-white cursor-pointer transition-colors text-foreground">About</span>
          </div>
          <button className="md:hidden p-2 rounded-md bg-secondary text-foreground">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </Container>
    </div>
  );
}
