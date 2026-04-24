import React from "react";
import { siteConfig } from "../../config/site";
import FeatureCard from "../../components/ui/FeatureCard";

export default function Features() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Platform Features</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Everything you need to automate your conversational sales and support, built into one powerful platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.features.map(feature => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
}
