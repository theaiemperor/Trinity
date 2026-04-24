import React from "react";
import GlassCard from "../../components/ui/GlassCard";
import { IconShieldLock, IconServer, IconEyeOff } from "@tabler/icons-react";

export default function Security() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Security & Trust</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          We take data privacy and platform security seriously. Here is how Trinity protects your business and your customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <GlassCard className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
            <IconShieldLock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Enterprise Grade Security</h3>
          <p className="text-zinc-400 text-sm">All data is encrypted in transit and at rest using industry standard AES-256 encryption.</p>
        </GlassCard>
        
        <GlassCard className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-6">
            <IconServer className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Isolated Knowledge Bases</h3>
          <p className="text-zinc-400 text-sm">Your product catalog and company data are siloed. They are never used to train generalized public AI models.</p>
        </GlassCard>

        <GlassCard className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center mx-auto mb-6">
            <IconEyeOff className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Data Privacy</h3>
          <p className="text-zinc-400 text-sm">We strictly adhere to GDPR and CCPA guidelines regarding customer chat history and PII.</p>
        </GlassCard>
      </div>

      <div className="prose prose-invert max-w-none prose-zinc">
        <h2 className="text-2xl font-bold text-white mb-4">Account Connections</h2>
        <p className="text-zinc-400 mb-8">
          Trinity connects to WhatsApp and Instagram through official Meta APIs. We do not require or store your social media passwords. Authorization is handled securely via OAuth, and you can revoke access at any time from your business manager.
        </p>
        
        <h2 className="text-2xl font-bold text-white mb-4">Content Moderation & Future Safety</h2>
        <p className="text-zinc-400 mb-8">
          Our AI includes an active safety layer that prevents the bot from discussing sensitive topics, competitors, or generating inappropriate responses. Business owners have full control to override bot responses and seamlessly transition to human support when necessary.
        </p>
        
        <div className="mt-12 p-6 bg-zinc-900 border border-white/10 rounded-xl">
          <h4 className="text-white font-bold mb-2">Demo Disclaimer</h4>
          <p className="text-zinc-500 text-sm">
            This website is a conceptual demonstration. The statements on this page represent the intended security architecture of the final Trinity platform and are provided for investor and partner evaluation purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
