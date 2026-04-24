import React from "react";
import { siteConfig } from "../../config/site";
import UseCaseCard from "../../components/ui/UseCaseCard";

export default function UseCases() {
  // Group use cases by category
  const categories = Array.from(new Set(siteConfig.useCases.map(uc => uc.category)));

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Use Cases</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          See how Trinity transforms conversational commerce across different business functions.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center">
            <span className="w-3 h-3 rounded-full bg-sky-500 mr-3" />
            {category} Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.useCases
              .filter(uc => uc.category === category)
              .map(uc => (
                <UseCaseCard key={uc.id} {...uc} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
