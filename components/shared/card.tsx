import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div 
      className={cn("bg-card border border-border rounded-2xl p-6 backdrop-blur shadow-2xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
