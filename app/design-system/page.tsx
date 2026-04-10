import React from "react";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Card } from "@/components/shared/card";
import { MusicCard } from "@/components/shared/music-card";
import { Heading, Subheading } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="border-b border-border bg-card/50 backdrop-blur top-0 sticky z-50">
        <Container className="py-6 flex items-center justify-between">
          <Heading className="text-2xl md:text-3xl">Design System</Heading>
          <div className="font-mono text-sm opacity-50 uppercase tracking-widest">
            Moody Blue Identity
          </div>
        </Container>
      </div>

      {/* 1. Colors */}
      <Section className="border-b border-border/50">
        <Container>
          <Heading className="text-3xl mb-12">1. Color Tokens</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Background", var: "bg-background", class: "bg-background border border-border" },
              { name: "Foreground", var: "bg-foreground", class: "bg-foreground text-background" },
              { name: "Primary", var: "bg-primary", class: "bg-primary text-primary-foreground" },
              { name: "Secondary", var: "bg-secondary", class: "bg-secondary text-secondary-foreground" },
              { name: "Accent", var: "bg-accent", class: "bg-accent text-accent-foreground" },
              { name: "Card", var: "bg-card", class: "bg-card border border-border" },
              { name: "Muted", var: "bg-muted", class: "bg-muted border border-border" },
              { name: "Border", var: "bg-border", class: "bg-border border border-foreground/10" },
            ].map((color) => (
              <div key={color.name} className="flex flex-col gap-3">
                <div className={`h-24 rounded-xl shadow-lg ${color.class} flex items-center justify-center`}>
                  <span className="opacity-0 group-hover:opacity-100 font-bold transition-opacity">
                    Aa
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-xs font-mono text-muted-foreground">{color.var}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. Typography */}
      <Section className="border-b border-border/50">
        <Container>
          <Heading className="text-3xl mb-12">2. Typography</Heading>
          <div className="space-y-12">
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">Heading (Space Grotesk)</div>
              <Heading>The quick brown fox jumps over the lazy dog.</Heading>
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">Subheading (Inter)</div>
              <Subheading className="text-2xl">
                The quick brown fox jumps over the lazy dog.
              </Subheading>
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">Body Text (Inter)</div>
              <p className="max-w-2xl text-foreground opacity-80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Buttons */}
      <Section className="border-b border-border/50">
        <Container>
          <Heading className="text-3xl mb-12">3. Buttons</Heading>
          <div className="flex flex-wrap gap-8 items-center bg-card p-10 border border-border rounded-2xl">
            <div className="flex flex-col gap-2 items-center">
              <Button>Default / Accent</Button>
              <span className="text-xs font-mono text-muted-foreground">default</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button variant="secondary">Secondary</Button>
              <span className="text-xs font-mono text-muted-foreground">secondary</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button variant="outline">Outline</Button>
              <span className="text-xs font-mono text-muted-foreground">outline</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button variant="ghost">Ghost Button</Button>
              <span className="text-xs font-mono text-muted-foreground">ghost</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button variant="destructive">Destructive</Button>
              <span className="text-xs font-mono text-muted-foreground">destructive</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button disabled>Disabled</Button>
              <span className="text-xs font-mono text-muted-foreground">disabled</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Special Classes & Effects */}
      <Section className="border-b border-border/50">
        <Container>
          <Heading className="text-3xl mb-12">4. Visual FX</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col items-center justify-center p-12 glow">
              <div className="text-center">
                <div className="text-3xl font-bold font-heading mb-4">Glow Effect</div>
                <code className="text-xs bg-black/40 px-2 py-1 rounded">.glow</code>
              </div>
            </Card>
            
            <Card className="flex flex-col items-center justify-center p-12">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-4 gradient-text">Gradient Text</div>
                <code className="text-xs bg-black/40 px-2 py-1 rounded">.gradient-text</code>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. Components */}
      <Section>
        <Container>
          <Heading className="text-3xl mb-12">5. Pre-built Components</Heading>
          
          <div className="mb-8">
             <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">Base Card</div>
             <Card>
               <Heading className="text-2xl mb-2">Base Card Element</Heading>
               <p className="text-muted-foreground">Using bg-card, border-border, and backdrop-blur utilities.</p>
             </Card>
          </div>

          <div>
             <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">Music Card</div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <MusicCard 
                  title="Demo Track 1" 
                  cover="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" 
                />
                <MusicCard 
                  title="Demo Track 2" 
                  cover="https://images.unsplash.com/photo-1540039155733-d7696d4eb98c?q=80&w=800&auto=format&fit=crop" 
                />
             </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
