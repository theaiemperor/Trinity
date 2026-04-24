import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({ children, className = "", glow = false }: GlassCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
      )}
      <div className="relative h-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden">
        {/* Subtle inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
