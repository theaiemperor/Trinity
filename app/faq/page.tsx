import React from "react";
import { siteConfig } from "../../config/site";
import Accordion from "../../components/ui/Accordion";
import Button from "../../components/ui/Button";

export default function FAQ() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-zinc-400">
          Everything you need to know about Trinity.
        </p>
      </div>

      <div className="mb-16">
        <Accordion items={siteConfig.faqs} />
      </div>
      
      <div className="text-center bg-zinc-900 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
        <p className="text-zinc-400 mb-8">
          We're here to help you understand how Trinity can automate your conversational commerce.
        </p>
        <Button href="/demo" variant="primary">Schedule a Demo Call</Button>
      </div>
    </div>
  );
}
