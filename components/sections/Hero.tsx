"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Star, ArrowRight, ArrowUpRight, Sparkles, Zap, Layers, Globe, Smartphone, Rocket, Scissors } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

    tl.fromTo(".hero-image-wrap",
      { scale: 0.8, opacity: 0, rotation: -5 },
      { scale: 1, opacity: 1, rotation: 0, duration: 2 }
    )
      .fromTo(".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1.5"
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
      .fromTo(".hero-quote",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=1.5"
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

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 flex-1">
        
        {/* Left Content Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-0">
          
          {/* Agency Badge */}
          <div className="hero-badge flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
            <span className="text-accent font-bold">✕</span>
            <span>AI Development Agency</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-display font-black leading-[1.05] tracking-tight text-dark mb-6">
            Building <span className="text-accent">AI Products</span> <br className="hidden sm:block"/>
            That Scale Businesses<span className="text-accent">.</span>
          </h1>

          {/* MOBILE Image Section (Preserving exact portfolio image component) */}
          <div className="lg:hidden w-full max-w-[260px] sm:max-w-xs relative mb-8 mt-2">
            <div className="hero-image-wrap relative aspect-4/5 w-full rounded-t-3xl overflow-hidden z-10 group shadow-xl border border-dark/10 bg-white">
              <Image
                src="/profile.png"
                alt="Mohit Aggarwal"
                width={600}
                height={800}
                className="object-cover top-[-75px] bottom-[-75px] h-[calc(100%+150px)] object-top absolute transition-all duration-600"
                priority
                unoptimized
              />
            </div>
            <div className="w-full h-10 bg-accent rounded-b-3xl flex justify-center items-center mt-[-8px] relative z-20 shadow-md">
              <p className="hero-quote text-[10px] sm:text-[12px] font-mono font-bold uppercase tracking-widest text-dark/90 px-4 text-center italic">
                "The best way to predict the future is to invent it."
              </p>
            </div>
          </div>

          {/* Agency Description */}
          <p className="hero-desc text-dark/70 text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-body font-medium">
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
          <div className="hero-stats flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 border-t border-dark/10 pt-8 w-full">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
              </div>
              <span className="font-display font-bold text-dark text-sm">5.0 Client Rating</span>
              <span className="text-dark/60 text-xs font-mono">Trusted by Startups</span>
            </div>
            
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-display font-black text-2xl text-dark leading-none mb-1">20+</span>
              <span className="font-display font-bold text-dark text-sm">Projects Delivered</span>
              <span className="text-dark/60 text-xs font-mono">Successful Launches</span>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <span className="font-display font-black text-2xl text-dark leading-none mb-1">10+</span>
              <span className="font-display font-bold text-dark text-sm">Happy Clients</span>
              <span className="text-dark/60 text-xs font-mono">Across the Globe</span>
            </div>
            
            <div className="flex flex-col items-center lg:items-start hidden sm:flex">
              <Globe size={22} className="text-dark mb-1" />
              <span className="font-display font-bold text-dark text-sm">Global Delivery</span>
              <span className="text-dark/60 text-xs font-mono">Worldwide Support</span>
            </div>
          </div>

        </div>

        {/* Right Content Column - DESKTOP Image Section (Preserving exact portfolio image component) */}
        <div className="hidden lg:flex flex-1 justify-end w-full max-w-[380px] relative mt-4 pointer-events-auto">
          <div className="flex flex-col w-full max-w-[320px]">
            <div className="hero-image-wrap relative aspect-4/5 w-full rounded-t-3xl overflow-hidden z-10 group shadow-2xl border border-dark/10 bg-white">
              <Image
                src="/profile.png"
                alt="Mohit Aggarwal"
                width={500}
                height={625}
                className="object-cover object-top absolute top-[-75px] bottom-[-75px] left-0 w-full h-[calc(100%+150px)] z-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
                unoptimized
              />
              <Image
                src="/profile-bg.png"
                alt="Mohit Aggarwal Background"
                width={500}
                height={625}
                className="object-cover object-top absolute top-[-75px] bottom-[-75px] left-0 w-full h-[calc(100%+150px)] z-10 transition-all duration-700"
                priority
                unoptimized
              />
            </div>
            <div className="w-full h-12 bg-accent rounded-b-3xl flex justify-center items-center mt-[-10px] relative z-20 shadow-lg">
              <p className="hero-quote text-[12px] font-mono font-bold uppercase tracking-widest text-dark/90 px-4 text-center italic">
                "The best way to predict the future is to invent it."
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Trusted By Companies Strip */}
      <div className="hero-trusted w-full max-w-7xl mx-auto px-6 mt-16 relative z-10 flex flex-col items-center">
        <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-dark/50 mb-6">Trusted By Innovative Companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-display font-black text-xl tracking-tight text-dark">startupgrind</span>
          <span className="font-display font-bold text-xl italic flex items-center gap-1 text-dark"><Rocket size={20}/> Shiprocket</span>
          <span className="font-display font-bold text-xl text-dark">techstars_</span>
          <span className="font-display font-medium text-lg text-dark">Google for Startups</span>
          <span className="font-display font-bold text-xl flex items-center gap-1 text-dark"><Layers size={20}/> Microsoft</span>
          <span className="font-display font-black text-xl text-dark">aws</span>
          <span className="font-display font-bold text-xl flex items-center gap-1 text-dark"><Globe size={20}/> DigitalOcean</span>
          <span className="font-display font-black text-xl flex items-center gap-1 text-dark"><Zap size={20}/> Vercel</span>
        </div>
      </div>
    </section>
  );
}
