import React from "react";
import GlassCard from "./GlassCard";
import { IconArrowRight } from "@tabler/icons-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  category: string;
}

export default function UseCaseCard({ title, description, category }: UseCaseCardProps) {
  return (
    <GlassCard className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full uppercase">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 leading-relaxed flex-1">{description}</p>
        
        <div className="mt-6 flex items-center text-sm font-medium text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more <IconArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </GlassCard>
  );
}
