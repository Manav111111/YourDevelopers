import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-sm bg-accent/20 px-2 py-1 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-accent border border-accent/20 ${className}`}>
      {children}
    </span>
  );
}
