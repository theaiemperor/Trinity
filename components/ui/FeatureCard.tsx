import React from "react";
import * as TablerIcons from "@tabler/icons-react";
import GlassCard from "./GlassCard";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  // @ts-expect-error TablerIcons is a large object, dynamic access works but TS complains
  const IconComponent = TablerIcons[`Icon${icon}`] || TablerIcons.IconCircleCheck;

  return (
    <GlassCard glow className="h-full">
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 flex items-center justify-center mb-6 border border-white/5">
          <IconComponent className="w-6 h-6 text-sky-400" stroke={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 leading-relaxed flex-1">{description}</p>
      </div>
    </GlassCard>
  );
}
