"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Star, ArrowRight, ArrowUpRight, Sparkles, Zap, Layers, Globe, Smartphone, Rocket } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

    tl.fromTo(".hero-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(".hero-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=1.3"
      )
      .fromTo(".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1.1"
      )
      .fromTo(".hero-tags",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1.0"
      )
      .fromTo(".hero-actions",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.9"
      )
      .fromTo(".hero-stats",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.8"
      )
      .fromTo(".hero-trusted",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col pt-28 pb-16 text-dark overflow-hidden bg-transparent">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 flex-1">

        {/* Left Content Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-2">


          {/* Headline */}
          <h1 className="hero-title text-4xl sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] font-display font-black leading-[1.05] tracking-tight text-dark mb-6">
          Building <span className="text-accent">AI Products</span> <br className="hidden sm:block" />
          That Scale Businesses<span className="text-accent">.</span>
        </h1>

        {/* Agency Description */}
        <p className="hero-desc text-dark/75 text-base md:text-xl max-w-2xl mb-8 leading-relaxed font-body font-medium">
          We design and build AI-powered web platforms, mobile applications, SaaS products, and intelligent automation solutions that help startups launch faster and companies grow smarter.
        </p>

        {/* Agency Capabilities / Tags Grid */}
        <div className="hero-tags flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 mb-10 w-full max-w-2xl">
          {[
            { text: 'AI Agents', icon: Sparkles, color: 'text-amber-500' },
            { text: 'Automation', icon: Zap, color: 'text-accent' },
            { text: 'SaaS Development', icon: Layers, color: 'text-orange-600' },
            { text: 'Web Platforms', icon: Globe, color: 'text-amber-600' },
            { text: 'Mobile Apps', icon: Smartphone, color: 'text-accent' },
            { text: 'MVP Development', icon: Rocket, color: 'text-orange-500' }
          ].map((tag, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-dark/5 text-xs sm:text-sm font-semibold text-dark hover:shadow-md transition-all duration-300">
              <tag.icon size={16} className={tag.color} />
              <span>{tag.text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hero-actions flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-14 w-full">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-7 py-4 bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-all w-full sm:w-auto"
          >
            Book Free Strategy Call
            <ArrowRight size={18} />
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-7 py-4 bg-white/80 backdrop-blur-md text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl border border-dark/15 shadow-xs hover:border-dark hover:bg-white transition-all w-full sm:w-auto"
          >
            View Case Studies
            <ArrowUpRight size={18} className="text-dark/50" />
          </a>
        </div>

        {/* Stats & Credibility Row */}
        <div className="hero-stats grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 border-t border-dark/10 pt-8 w-full">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-accent text-accent" />)}
            </div>
            <span className="font-display font-bold text-dark text-xs sm:text-sm">5.0 Client Rating</span>
            <span className="text-dark/60 text-[10px] sm:text-xs font-mono">Trusted by Startups</span>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <span className="font-display font-black text-xl sm:text-2xl text-dark leading-none mb-1">20+</span>
            <span className="font-display font-bold text-dark text-xs sm:text-sm">Projects Delivered</span>
            <span className="text-dark/60 text-[10px] sm:text-xs font-mono">Successful Launches</span>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <span className="font-display font-black text-xl sm:text-2xl text-dark leading-none mb-1">10+</span>
            <span className="font-display font-bold text-dark text-xs sm:text-sm">Happy Clients</span>
            <span className="text-dark/60 text-xs sm:text-sm font-mono">Across the Globe</span>
          </div>

          <div className="flex flex-col items-center lg:items-start hidden sm:flex">
            <Globe size={20} className="text-dark mb-1" />
            <span className="font-display font-bold text-dark text-xs sm:text-sm">Global Delivery</span>
            <span className="text-dark/60 text-[10px] sm:text-xs font-mono">Worldwide Support</span>
          </div>
        </div>

      </div>

      {/* Right Side: Plain Favicon Image beside existing content (3x size) */}
      <div className="flex items-center justify-center shrink-0 pointer-events-none -translate-y-16 lg:-translate-y-36">
        <Image
          src="/favicon.ico"
          alt="Favicon"
          width={700}
          height={700}
          className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
          priority
          unoptimized
        />
      </div>

    </div>

      {/* Trusted By Companies Strip */ }
  <div className="hero-trusted w-full max-w-7xl mx-auto px-6 mt-16 relative z-10 flex flex-col items-center">
    <p className="text-xs font-mono font-black tracking-[0.25em] uppercase text-dark mb-6">Startup/Companies We Help To Build</p>
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
      <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-tight text-dark whitespace-nowrap">Advize</span>
      <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg italic flex items-center gap-1 text-dark whitespace-nowrap"><Rocket size={16} /> Trueknoc</span>
      <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg text-dark whitespace-nowrap">The Famous Halwai</span>
      <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg text-dark whitespace-nowrap">Guide My route</span>
      <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-1 text-dark whitespace-nowrap"><Layers size={16} /> CampusNinja</span>
    </div>
  </div>
    </section >
  );
}
