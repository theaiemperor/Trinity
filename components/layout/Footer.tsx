import React from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <img src={siteConfig.logoUrl} alt={siteConfig.logoText} className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl tracking-tight text-white">{siteConfig.logoText}</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {siteConfig.shortDescription}
            </p>
            <div className="flex items-center space-x-4">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <IconBrandTwitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <IconBrandInstagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-zinc-400 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="/use-cases" className="text-zinc-400 hover:text-white transition-colors text-sm">Use Cases</Link></li>
              <li><Link href="/how-it-works" className="text-zinc-400 hover:text-white transition-colors text-sm">How it Works</Link></li>
              <li><Link href="/demo" className="text-zinc-400 hover:text-white transition-colors text-sm">Book Demo</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-zinc-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/security" className="text-zinc-400 hover:text-white transition-colors text-sm">Security & Trust</Link></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Case Studies</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/legal" className="text-zinc-400 hover:text-white transition-colors text-sm">Legal</Link></li>
              <li><Link href="/legal#privacy" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/legal#terms" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {currentYear} {siteConfig.legal.companyName}. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs">
            Concept Demo Site - Not a Real Product
          </p>
        </div>
      </div>
    </footer>
  );
}
