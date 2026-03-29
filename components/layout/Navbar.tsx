"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "JOURNEY", href: "#journey" }
  ];

  return (
    <header 
      className="navbar-container fixed top-0 left-0 mx-35 mt-5 rounded-2xl right-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur-md border-b border-dark/5 py-4 translate-y-0 opacity-100 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="group text-2xl font-display font-bold text-dark flex items-center relative z-50">
          Mohit Aggarwal<span className="text-accent group-hover:scale-125 transition-transform">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-mono font-medium tracking-widest text-gray-600 hover:text-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center text-sm  tracking-widest text-gray-700 rounded-lg hover:text-dark transition-colors justify-center bg-accent text-dark font-display font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-white transition-colors"
        >
          Connect With Me
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out origin-top ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display font-medium text-dark hover:text-accent transition-colors"
              style={{
                transitionDelay: mobileMenuOpen ? `${0.1 * (i + 1)}s` : "0s",
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileMenuOpen ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 bg-accent text-dark font-display font-bold uppercase tracking-wider px-10 py-4 text-xl"
            style={{
              transitionDelay: mobileMenuOpen ? `${0.1 * (navLinks.length + 1)}s` : "0s",
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileMenuOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
