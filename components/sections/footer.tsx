import React from "react";
import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold opacity-60 tracking-wider">
          <div>© {new Date().getFullYear()} KHAL AMO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <span className="hover:text-accent cursor-pointer transition-colors">INSTAGRAM</span>
            <span className="hover:text-accent cursor-pointer transition-colors">SPOTIFY</span>
            <span className="hover:text-accent cursor-pointer transition-colors">YOUTUBE</span>
            <span className="hover:text-accent cursor-pointer transition-colors">TIKTOK</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
