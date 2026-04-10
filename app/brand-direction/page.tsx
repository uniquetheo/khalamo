"use client";

import React, { useState } from "react";

const DIRECTIONS = [
  {
    id: "city-blue",
    name: "City Blue",
    desc: "Clean, modern, global artist positioning. Afrobeats + international appeal. A safe but premium direction with a polished branding vibe.",
    primary: "#6CABDD",
    secondary: "#1C2A39",
    accent: "#F2A900",
    bg: "#0B0F14",
    text: "#EAF4FF",
    heroImage:
      "https://images.unsplash.com/photo-1501281668745-f7f5792203bba?q=80&w=2070&auto=format&fit=crop", // Crisp, polished crowd/artist vibe
  },
  {
    id: "orange-energy",
    name: "Orange Energy",
    desc: "Energetic, bold, attention-grabbing. Performance-heavy artist with huge stage presence. Youthful, hype, and viral-ready.",
    primary: "#FF6A00",
    secondary: "#1A1A1A",
    accent: "#FFD166",
    bg: "#0F0F0F",
    text: "#F5F5F5",
    heroImage:
      "https://images.unsplash.com/photo-1540039155733-d7696d4eb98c?q=80&w=1974&auto=format&fit=crop", // High energy orange/red stage lighting
  },
  {
    id: "moody-blue",
    name: "Moody Blue",
    desc: "Emotional, cinematic, introspective. Perfect for storytelling artists. Deep night-time or late-listening aesthetic.",
    primary: "#0A1F44", // Actually let's use the given colors, wait, 0A1F44 is very dark for primary text. We'll use 00C2FF for highlights.
    secondary: "#1F3C88",
    accent: "#00C2FF",
    bg: "#05070D",
    text: "#D6E4FF",
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop", // Dark moody blue concert vibe
  },
];

type DirType = (typeof DIRECTIONS)[0];

function PaletteView({ dir }: { dir: DirType }) {
  const colors = [
    { label: "Primary", hex: dir.primary },
    { label: "Secondary", hex: dir.secondary },
    { label: "Accent", hex: dir.accent },
    { label: "Background", hex: dir.bg },
    { label: "Text", hex: dir.text },
  ];

  // Adjusting primary for moody-blue since it's very dark to read
  const headingColor = dir.id === "moody-blue" ? dir.accent : dir.primary;

  return (
    <div
      className="p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl transition-all"
      style={{ backgroundColor: dir.bg }}
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
        {colors.map((c) => (
          <div key={c.label} className="group flex flex-col">
            <div
              className="h-32 rounded-2xl w-full mb-4 shadow-lg border border-white/10 transition-transform group-hover:-translate-y-1"
              style={{ backgroundColor: c.hex }}
            />
            <div
              className="text-sm font-semibold opacity-90"
              style={{ color: dir.text }}
            >
              {c.label}
            </div>
            <div
              className="text-xs uppercase tracking-wider font-mono opacity-60"
              style={{ color: dir.text }}
            >
              {c.hex}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-white/10 pt-12 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <div
            className="opacity-50 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: dir.text }}
          >
            Typography & Vibe
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
            style={{ color: headingColor }}
          >
            KHAL AMO
          </h1>
          <h2
            className="text-2xl md:text-4xl font-bold tracking-tight"
            style={{ color: dir.text }}
          >
            The New Global Sound.
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div
            className="opacity-50 text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: dir.text }}
          >
            Brand Feel
          </div>
          <p
            className="text-lg md:text-xl leading-relaxed opacity-80"
            style={{ color: dir.text }}
          >
            {dir.desc}
          </p>
          <div className="mt-8 flex gap-4">
            <button
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{ backgroundColor: dir.accent, color: "#111" }}
            >
              Primary CTA
            </button>
            <button
              className="px-6 py-3 rounded-full font-bold text-sm border-2"
              style={{
                borderColor: dir.secondary,
                color: dir.text,
              }}
            >
              Secondary CTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniWebsite({ dir }: { dir: DirType }) {
  const headingColor = dir.id === "moody-blue" ? dir.accent : dir.primary;
  
  return (
    <div
      className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 relative"
      style={{ backgroundColor: dir.bg, color: dir.text }}
    >
      {/* Navbar Mock */}
      <div
        className="flex items-center justify-between px-6 py-5 border-b border-white/5"
        style={{ backgroundColor: dir.id === 'moody-blue' ? dir.secondary : dir.bg }}
      >
        <div
          className="text-xl md:text-2xl font-black tracking-tighter"
          style={{ color: headingColor }}
        >
          KHAL AMO
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold opacity-80 tracking-wide">
          <span className="hover:opacity-100 cursor-pointer transition-opacity text-white">Music</span>
          <span className="hover:opacity-100 cursor-pointer transition-opacity text-white">Tour</span>
          <span className="hover:opacity-100 cursor-pointer transition-opacity text-white">Merch</span>
          <span className="hover:opacity-100 cursor-pointer transition-opacity text-white">About</span>
        </div>
        <button
          className="md:hidden p-2 rounded-md"
          style={{ backgroundColor: dir.secondary }}
        >
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

      {/* Hero Mock */}
      <div className="relative h-[350px] md:h-[500px] flex items-center px-6 md:px-12 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-top opacity-50 md:opacity-60 transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${dir.heroImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${dir.bg} 10%, transparent 80%), linear-gradient(to top, ${dir.bg} 0%, transparent 40%)`,
          }}
        />

        <div className="relative z-10 max-w-xl">
          <h1
            className="text-5xl md:text-8xl font-black tracking-tighter mb-2 md:mb-4 uppercase"
            style={{ color: headingColor }}
          >
            KHAL AMO
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-medium opacity-90 text-white">
            Experience the new wave.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 rounded-full font-bold text-black transition-transform hover:scale-105 shadow-xl"
              style={{ backgroundColor: dir.accent }}
            >
              Listen Now
            </button>
            <button
              className="px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 backdrop-blur-sm border border-white/20"
              style={{ color: "#FFF", backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              Tour Dates
            </button>
          </div>
        </div>
      </div>

      {/* UI Elements / Cards Mock */}
      <div className="px-6 md:px-12 py-12 md:py-20 relative z-10">
        <div className="flex justify-between items-end mb-8">
          <h3
            className="text-2xl md:text-3xl font-bold uppercase tracking-tight"
            style={{ color: headingColor }}
          >
            Latest Releases
          </h3>
          <span className="text-sm font-semibold opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
            View All
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Lost in Lagos", year: "2026", type: "Single" },
            { title: "Midnight Sun", year: "2025", type: "EP" },
            { title: "The Arrival", year: "2025", type: "Album" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 border border-white/5 cursor-pointer shadow-lg"
              style={{ backgroundColor: dir.secondary }}
            >
              <div className="h-48 md:h-56 bg-white/5 relative group pb-0 mb-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ color: dir.accent }}
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                  <span className="mt-2 text-xs font-semibold tracking-wider uppercase opacity-50">Artwork</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div
                    className="font-bold text-xl leading-tight"
                    style={{ color: dir.text }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest px-2 py-1 rounded"
                    style={{ backgroundColor: dir.bg, color: dir.accent }}
                  >
                    {item.type}
                  </div>
                </div>
                <div className="text-sm opacity-60">{item.year}</div>
                <button
                  className="mt-6 w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: dir.id === 'orange-energy' ? dir.primary : dir.accent,
                    color: "#000",
                  }}
                >
                  Play Full Track
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Mock */}
      <div
        className="px-6 md:px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold opacity-60"
        style={{ backgroundColor: dir.bg }}
      >
        <div>© 2026 KHAL AMO. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6">
          <span>INSTAGRAM</span>
          <span>SPOTIFY</span>
          <span>YOUTUBE</span>
          <span>TIKTOK</span>
        </div>
      </div>
    </div>
  );
}

function DirectionBlock({ dir, index }: { dir: DirType; index: number }) {
  const [view, setView] = useState<"palette" | "website">("website");

  return (
    <section className="scroll-mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
        <div>
          <div className="text-white/40 font-mono text-sm mb-2 tracking-widest">DIRECTION 0{index + 1}</div>
          <h2
            className="text-3xl md:text-5xl font-black mb-3 tracking-tighter"
            style={{ color: dir.id === "moody-blue" ? dir.accent : dir.primary }}
          >
            {dir.name}
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl font-medium">
            {dir.desc.split(".")[0]}.
          </p>
        </div>
        <div className="bg-white/5 p-1.5 rounded-full flex gap-1 items-center border border-white/10 shadow-inner">
          <button
            onClick={() => setView("palette")}
            className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
              view === "palette"
                ? "bg-white text-black shadow-lg scale-100"
                : "text-white/50 hover:text-white hover:bg-white/5 scale-95"
            }`}
          >
            Color Palette
          </button>
          <button
            onClick={() => setView("website")}
            className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              view === "website"
                ? "bg-white text-black shadow-lg scale-100"
                : "text-white/50 hover:text-white hover:bg-white/5 scale-95"
            }`}
          >
            <span>Website Preview</span>
            {view !== "website" && <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: dir.id === 'moody-blue' ? dir.accent : dir.primary }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: dir.id === 'moody-blue' ? dir.accent : dir.primary }}></span>
            </span>}
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          className={`transition-all duration-500 absolute w-full ${
            view === "palette" ? "opacity-100 z-10 top-0 pointer-events-auto" : "opacity-0 -z-10 translate-y-4 pointer-events-none"
          }`}
        >
          <PaletteView dir={dir} />
        </div>
        <div
          className={`transition-all duration-500 ${
            view === "website" ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 -z-10 translate-y-4 pointer-events-none absolute w-full top-0"
          }`}
        >
          <MiniWebsite dir={dir} />
        </div>
      </div>
    </section>
  );
}

export default function BrandDirectionPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-white/20 font-sans">
      {/* Header Presentation Title */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24 border-b border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-white/20 rounded-full" />
          <span className="text-white/40 uppercase tracking-widest text-xs font-bold font-mono">
            Client Presentation
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
          Brand Direction <br />
          <span className="text-white/30 italic font-medium">for</span> Khal Amo
        </h1>
        <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-medium leading-relaxed">
          A strategic exploration of visual identity. Select between the brand
          palette breakdowns and interactive website previews below.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col gap-32 md:gap-40">
        {DIRECTIONS.map((dir, idx) => (
          <DirectionBlock key={dir.id} dir={dir} index={idx} />
        ))}
      </div>

      {/* Presentation Footer */}
      <footer className="w-full border-t border-white/5 py-12 text-center text-white/30 text-xs font-bold uppercase tracking-widest">
        End of Presentation • Prepared for Khal Amo
      </footer>
    </main>
  );
}
