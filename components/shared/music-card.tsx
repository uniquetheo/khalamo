import React from "react";
import { cn } from "@/lib/utils";

interface MusicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  cover: string;
}

export function MusicCard({ title, cover, className, ...props }: MusicCardProps) {
  return (
    <div className={cn("group cursor-pointer", className)} {...props}>
      <div className="rounded-xl overflow-hidden aspect-square glow transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,194,255,0.4)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
        />
      </div>
      <p className="mt-4 text-sm font-semibold tracking-wide text-center">{title}</p>
    </div>
  );
}
