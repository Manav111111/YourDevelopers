"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
    
    tl.fromTo(".hero-title-top", 
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(".hero-image",
      { scale: 0.8, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(".hero-title-bottom",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1 },
      "-=1.2"
    )
    .fromTo(".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=1"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12 bg-dark text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none opacity-50 z-0"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Text */}
        <div className="overflow-hidden mix-blend-difference z-20">
          <h1 className="hero-title-top text-[14vw] md:text-[8vw] lg:text-[10rem] font-display font-black leading-none tracking-tighter uppercase text-white hover-target">
            ENGINEER
          </h1>
        </div>

        {/* Center Image */}
        <div className="hero-image relative w-[60vw] h-[50vw] md:w-[40vw] md:h-[40vh] xl:w-[450px] xl:h-[350px] my-[-10vw] md:my-[-80px] z-10 rounded-3xl md:rounded-[4rem] overflow-hidden border border-white/10 hover:border-accent/50 transition-colors duration-500 shadow-2xl bg-black">
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10"></div>
          {/* Fallback pattern/gradient if no image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-dark via-gray-900 to-[#2a1b10] flex flex-col items-center justify-center group">
             <div className="w-[120%] h-[120%] absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-out"></div>
             <span className="font-mono text-muted/30 text-sm tracking-widest relative z-20">( YOUR PORTRAIT )</span>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="overflow-hidden mix-blend-difference z-20">
          <h1 className="hero-title-bottom text-[14vw] md:text-[8vw] lg:text-[10rem] font-display font-black leading-none tracking-tighter uppercase text-white">
            <span className="text-accent italic font-light pr-2">X</span> CREATOR
          </h1>
        </div>

        {/* Subtitle */}
        <div className="hero-subtitle mt-8 md:mt-16 flex flex-col items-center gap-6 z-30">
          <p className="text-sm md:text-lg font-mono tracking-widest text-muted/80 max-w-xl text-center uppercase">
            Specialized in Artificial Intelligence, Full-Stack Web, and Cross-Platform Apps.
          </p>
          <div className="w-[2px] h-20 md:h-32 bg-gradient-to-b from-accent/80 to-transparent rounded-full animate-pulse opacity-80"></div>
        </div>
        
      </div>
    </section>
  );
}
