import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Heading({ children, className, ...props }: TypographyProps) {
  return (
    <h1 
      className={cn("text-4xl md:text-6xl font-bold tracking-tight font-heading text-white", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function Subheading({ children, className, ...props }: TypographyProps) {
  return (
    <p 
      className={cn("text-lg text-muted-foreground mt-2 font-sans", className)}
      {...props}
    >
      {children}
    </p>
  );
}
