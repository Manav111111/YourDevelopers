"use client";

import { Mail, Phone, FileText, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#191918] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-accent/40 to-transparent" />
      
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main CTA Section */}
        <div className="mb-2 md:mb-10">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent/30" />
            Let's Collaborate
          </p>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter mb-12 leading-[0.9]">
            Let&apos;s build something <br />
            <span className="text-accent italic font-light">extraordinary</span> together.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">CONTACT DIRECT</h4>
                <div className="space-y-4">
                  <a href="mailto:mohitaggarwal551@gmail.com" className="group flex items-center gap-4 text-xl md:text-xl font-body transition-colors hover:text-accent">
                    <span className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                      <Mail size={20} className="text-accent" />
                    </span>
                    mohitaggarwal551@gmail.com
                  </a>
                  <a href="tel:+919205394233" className="group flex items-center gap-4 text-xl md:text-xl font-body transition-colors hover:text-accent">
                    <span className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                      <Phone size={20} className="text-accent" />
                    </span>
                    +91 9205394233
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">RESOURCES</h4>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-dark font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
                >
                  <FileText size={16} /> Download Resume
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold">SOCIALS / NETWORK</h4>
              <div className="flex flex-col gap-4">
                {[
                  { 
                    label: "LinkedIn", 
                    href: "https://linkedin.com/in/mohitaggarwal551", 
                    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  },
                  { 
                    label: "GitHub", 
                    href: "https://github.com/Mohit776", 
                    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-4.51-2-7-2"/></svg>
                  },
                
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-accent/40 transition-colors"
                  >
                    <span className="text-lg font-body group-hover:translate-x-2 transition-transform duration-300">
                      {social.label}
                    </span>
                    <span className="text-white/20 group-hover:text-accent transition-colors">
                      {social.svg}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location / Status */}
            <div className="hidden lg:block space-y-8">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">LOCATION</h4>
                <p className="text-lg font-body text-white/60">
                  New Delhi, India <br />
                  Working Globally
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Current Status</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-body">
                  Available for collaborations and new opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} • DESIGNED & BUILT BY Mohit Aggarwal
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
              Back to top
            </span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-white/5 hover:bg-accent/20 transition-colors group"
            >
              <ArrowUpRight size={20} className="text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}


