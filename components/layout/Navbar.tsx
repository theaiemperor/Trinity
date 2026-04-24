"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../../config/site";
import Button from "../ui/Button";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Features", href: "/features" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/50" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <img src={siteConfig.logoUrl} alt={siteConfig.logoText} className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl tracking-tight text-white">{siteConfig.logoText}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button href="/demo" variant="primary" size="sm">
              {siteConfig.ctaLabels.primary}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible h-auto py-6" : "opacity-0 invisible h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 sm:px-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  isActive ? "text-white" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Button href="/demo" variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
              {siteConfig.ctaLabels.primary}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
