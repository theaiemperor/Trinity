import React from "react";
import { siteConfig } from "../../config/site";
import GlassCard from "../../components/ui/GlassCard";
import Button from "../../components/ui/Button";

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">How Trinity Works</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          A seamless integration process that takes you from connecting accounts to automated sales in minutes.
        </p>
      </div>

      <div className="space-y-12 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[2rem] w-0.5 bg-gradient-to-b from-sky-500/50 via-violet-500/50 to-transparent" />

        {siteConfig.workflowSteps.map((step, index) => (
          <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-zinc-950 border-2 border-sky-500 flex-items-center justify-center relative z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
              <span className="text-xl font-bold text-white flex items-center justify-center h-full">{step.step}</span>
            </div>
            
            <GlassCard className="flex-1 w-full" glow={index === 2}>
              <div className="md:hidden w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 text-lg font-bold">
                {step.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">{step.description}</p>
              
              {/* Dummy visual blocks to represent the steps */}
              {index === 0 && (
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm text-zinc-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2" /> WhatsApp Business Connected
                  </div>
                  <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm text-zinc-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2" /> Instagram Professional Connected
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 font-mono text-xs text-sky-300 overflow-hidden">
                  <p>{">"} Processing catalog.csv...</p>
                  <p>{">"} Learning product names, pricing, availability...</p>
                  <p className="text-green-400">{">"} Knowledge Base synced successfully.</p>
                </div>
              )}
              {index === 2 && (
                <div className="bg-gradient-to-r from-sky-900/40 to-violet-900/40 border border-sky-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-zinc-400">Incoming DM</span>
                    <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">AI Handled</span>
                  </div>
                  <p className="text-sm text-white font-medium">"Do you ship to London?"</p>
                  <p className="text-sm text-sky-200 mt-2">"Yes! We offer 2-day express shipping to London for £15. Would you like to proceed to checkout?"</p>
                </div>
              )}
            </GlassCard>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <Button href="/demo" variant="primary" size="lg">Ready to start? Book a Demo</Button>
      </div>
    </div>
  );
}
