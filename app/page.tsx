import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Music } from "@/components/sections/music";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-black relative">
      <Navbar />
      <Hero />
      <Music />
      <Footer />
    </main>
  );
}
