"use client";

import React, { useState } from "react";
import { siteConfig } from "../../config/site";
import GlassCard from "../../components/ui/GlassCard";
import Button from "../../components/ui/Button";

export default function Demo() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Log form data to console as requested
    console.log("Demo Form Submitted:", data);

    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{siteConfig.demoFormLabels.title}</h1>
        <p className="text-lg text-zinc-400">
          {siteConfig.demoFormLabels.subtitle}
        </p>
      </div>

      <GlassCard glow className="p-8 md:p-12">
        {isSubmitted ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
            <p className="text-zinc-400 leading-relaxed">
              {siteConfig.demoFormLabels.successMessage}
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8">
              Submit another request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-zinc-300">First Name</label>
                <input required type="text" id="firstName" name="firstName" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-300">Last Name</label>
                <input required type="text" id="lastName" name="lastName" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Work Email</label>
                <input required type="email" id="email" name="email" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-zinc-300">Company Name</label>
              <input required type="text" id="company" name="company" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">How can Trinity help you?</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"></textarea>
            </div>

            <Button type="submit" variant="primary" fullWidth size="lg">
              Request Demo
            </Button>

            <p className="text-xs text-zinc-500 text-center mt-4">
              By submitting this form, you acknowledge this is a simulated demo submission.
            </p>
          </form>
        )}
      </GlassCard>
    </div>
  );
}
