import React from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import FeatureCard from "../components/ui/FeatureCard";
import UseCaseCard from "../components/ui/UseCaseCard";
import { IconArrowRight, IconMessageChatbot, IconTrendingUp, IconClock } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse mr-2" />
            <span className="text-sm font-medium text-sky-300">The Future of Conversational Commerce</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            <span className="text-white">Automate your </span>
            <span className="text-gradient block mt-2">WhatsApp & Instagram.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            {siteConfig.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="/demo" variant="primary" size="lg" className="w-full sm:w-auto group">
              {siteConfig.ctaLabels.primary}
              <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/use-cases" variant="outline" size="lg" className="w-full sm:w-auto">
              {siteConfig.ctaLabels.secondary}
            </Button>
          </div>
        </div>

        {/* Dashboard Concept Preview */}
        <div className="relative w-full max-w-5xl mx-auto mt-24 z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl blur opacity-30" />
          <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4 px-2 border-b border-white/10 pb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Trinity Business Dashboard</div>
              <div className="w-8" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 h-64 md:h-80">
              <div className="hidden md:flex flex-col space-y-4 col-span-1 border-r border-white/5 pr-6">
                <div className="h-8 bg-white/5 rounded-lg w-full" />
                <div className="h-8 bg-sky-500/20 text-sky-400 rounded-lg w-full flex items-center px-4 text-sm">Active Chats</div>
                <div className="h-8 bg-white/5 rounded-lg w-full" />
                <div className="h-8 bg-white/5 rounded-lg w-full" />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col justify-end space-y-4">
                <div className="flex items-start max-w-[80%]">
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-zinc-300">
                    Do you have the minimalist desk in matte black?
                  </div>
                </div>
                <div className="flex items-start justify-end w-full">
                  <div className="bg-gradient-to-r from-sky-600 to-violet-600 rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white max-w-[80%] shadow-lg shadow-sky-900/50">
                    Yes! We have 14 units of the Minimalist Desk in Matte Black currently in stock. It ships within 24 hours. Would you like the link to purchase?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="w-full py-20 bg-zinc-950/50 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center mb-4 text-sky-400">
                <IconMessageChatbot stroke={1.5} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-zinc-400">Instant AI Responses</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:border-x border-white/5">
              <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
                <IconTrendingUp stroke={1.5} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">3x</h3>
              <p className="text-zinc-400">Average Conversion Increase</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <IconClock stroke={1.5} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">70%</h3>
              <p className="text-zinc-400">Reduction in Support Load</p>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="w-full py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A sales assistant that never sleeps.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {siteConfig.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/features" className="inline-flex items-center text-sky-400 font-medium hover:text-sky-300 transition-colors">
              View all features <IconArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Use Cases */}
      <section className="w-full py-24 md:py-32 bg-zinc-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for every scenario.</h2>
              <p className="text-lg text-zinc-400">
                From simple FAQs to complex lead qualification, Trinity handles it all natively within Instagram and WhatsApp.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Button href="/use-cases" variant="outline">Explore all use cases</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.useCases.slice(0, 4).map((useCase) => (
              <UseCaseCard key={useCase.id} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Preview */}
      <section className="w-full py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How Trinity works.</h2>
            <p className="text-lg text-zinc-400">Launch your AI assistant in minutes, not months.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {siteConfig.workflowSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < siteConfig.workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-sky-500/50 to-transparent" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-6 relative z-10 group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <GlassCard glow className="py-16 px-8 md:px-16 flex flex-col items-center border-sky-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to scale your conversations?</h2>
            <p className="text-lg text-zinc-300 mb-10 max-w-2xl">
              Join leading brands who are turning their DMs into automated sales channels. Schedule a personalized walkthrough today.
            </p>
            <Button href="/demo" variant="primary" size="lg" className="px-12 py-5 text-lg shadow-[0_0_30px_rgba(14,165,233,0.3)]">
              {siteConfig.ctaLabels.primary}
            </Button>
          </GlassCard>
        </div>
      </section>

    </div>
  );
}