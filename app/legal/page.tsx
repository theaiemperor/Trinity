import React from "react";
import { siteConfig } from "../../config/site";

export default function Legal() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Legal Information</h1>
        <p className="text-lg text-zinc-400">
          Privacy Policy, Terms of Service, and Disclaimers.
        </p>
      </div>

      <div className="prose prose-invert max-w-none prose-zinc">
        
        {/* Concept Disclaimer */}
        <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-12">
          <h3 className="text-amber-500 font-bold mt-0 mb-2">Important Disclaimer: Concept Demo</h3>
          <p className="text-amber-200/70 text-sm mb-0">
            This website and the product "Trinity" described herein is a conceptual demonstration. It does not represent an active, commercially available software service. No real user data is collected, processed, or stored by this website. Any forms submitted on this site only log data to the user's local browser console.
          </p>
        </div>

        <section id="privacy" className="mb-16">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-6">Privacy Policy</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At {siteConfig.legal.companyName}, we take your privacy seriously. This conceptual Privacy Policy outlines how we intend to collect, use, and protect your information when you use our conversational automation platform.
          </p>
          <h3 className="text-white font-bold mt-8 mb-4">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us when you create an account, connect your social media profiles, or upload your product catalogs. This includes business contact details and product data.
          </p>
          <h3 className="text-white font-bold mt-8 mb-4">2. How We Use Your Information</h3>
          <p>
            We use the information to train your isolated AI bot instance, operate the platform, and provide automated conversational responses to your customers on WhatsApp and Instagram.
          </p>
          <h3 className="text-white font-bold mt-8 mb-4">3. Data Security</h3>
          <p>
            We implement commercially reasonable security measures designed to protect your information from unauthorized access and disclosure. Your catalog data is never used to train generalized public AI models.
          </p>
        </section>

        <section id="terms" className="mb-16">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-6">Terms of Service</h2>
          <p>
            By accessing or using the Trinity platform, you agree to be bound by these conceptual Terms of Service.
          </p>
          <h3 className="text-white font-bold mt-8 mb-4">1. Account Responsibilities</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must ensure that the product data and policies you upload are accurate and compliant with local laws.
          </p>
          <h3 className="text-white font-bold mt-8 mb-4">2. Acceptable Use</h3>
          <p>
            You agree not to use the platform to distribute spam, malicious content, or engage in any activity that violates the terms of service of connected platforms (Meta, WhatsApp, Instagram).
          </p>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-6">Contact Us</h2>
          <p>
            If you have any questions about these legal policies or the Trinity platform, please contact us at:
          </p>
          <ul className="list-none pl-0">
            <li><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-sky-400 hover:underline">{siteConfig.contact.email}</a></li>
            <li><strong>Company:</strong> {siteConfig.legal.companyName}</li>
            <li><strong>Address:</strong> {siteConfig.legal.address}</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
