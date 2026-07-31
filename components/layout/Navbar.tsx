"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { name: string; href: string; onClick?: () => void }[] = [
    { name: "SERVICES", href: "#skills" },
    { name: "WHY US", href: "#about" },
    { name: "CASE STUDIES", href: "#projects" },
    { name: "PRICING", href: "#pricing" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <header 
      className="navbar-container fixed top-0 left-0   right-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur-md border-b border-dark/5  translate-y-0 opacity-100 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="group text-xl md:text-2xl font-display font-bold text-dark flex items-center relative z-50">
          Mohit Aggarwal<span className="text-accent group-hover:scale-125 transition-transform">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-mono font-bold tracking-widest text-dark/70 hover:text-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest rounded-xl justify-center bg-accent text-dark font-display font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-white transition-all shadow-md hover:shadow-lg"
        >
          Book Free Call →
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
        className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-all duration-300 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-500"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 mt-75 bg-cream mx-auto w-full  ">
          {navLinks.map((link, i) => (
            link.onClick ? (
              <button 
                key={link.name} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  link.onClick!();
                }}
                className="text-lg font-display font-medium text-dark hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: mobileMenuOpen ? `${0.1 * (i + 1)}s` : "0s",
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.name}
              </button>
            ) : (
              <Link 
                key={link.name} 
                href={link.href!} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-medium text-dark hover:text-accent transition-colors"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: mobileMenuOpen ? `${0.1 * (i + 1)}s` : "0s",
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.name}
              </Link>
            )
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mb-4 bg-accent text-dark font-display  font-bold uppercase tracking-wider px-8 py-2 text-md sm:text-xl rounded-lg shadow-md"
            style={{
              transitionProperty: "transform, opacity",
              transitionDuration: "0.5s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: mobileMenuOpen ? `${0.1 * (navLinks.length + 1)}s` : "0s",
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            Connect With Me
          </a>
        </nav>
      </div>
    </header>
  );
}
