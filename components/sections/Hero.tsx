"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
        { y: 1, opacity: 1 },
        "-=1.5"
      )
      .fromTo(".hero-name",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=1.3"
      )
      .fromTo(".hero-role",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=1.2"
      )
      .fromTo(".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1.1"
      )
      .fromTo(".hero-actions",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-12 bg-cream text-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[60vw] md:h-[60vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none opacity-50 z-0"></div>

      {/* Additional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cream/50 to-cream z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start text-left pt-10 md:pt-0 order-2 lg:order-1">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark/10 bg-white/50 backdrop-blur-md mb-8 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Available for work</span>
          </div>
          <h2 className="hero-role text-lg sm:text-xl md:text-3xl lg:text-4xl font-mono font-medium tracking-tight text-gray-700 mb-5 border-l-4 border-accent pl-3 sm:pl-4 py-1">
            Full Stack AI Developer
          </h2>
          <h1 className="hero-name flex flex-col text-[11vw] sm:text-[10vw] md:text-[6vw] lg:text-[5rem] font-display font-black leading-[0.9] tracking-tighter uppercase text-dark mb-4 drop-shadow-sm">
            Mohit <br />
            <span className="text-accent italic font-bold drop-shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] ml-1 sm:ml-2 md:ml-50 mt-2">Aggarwal</span>
          </h1>



          <div className="hero-desc mt-3">
            <p className="text-base md:text-md text-gray-600 max-w-xl mb-6 leading-relaxed">
              I build intelligent applications that blend cutting-edge Artificial Intelligence with elegant, high-performance web and mobile experiences. <br />Turning complex problems into seamless digital products.
            </p>

            {/* Tech Tags / Capabilities */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-5 w-full max-w-xl">
              {['Web Apps', 'Mobile', 'AI Models', 'Backend', 'LLMs'].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-sm border border-dark/10 bg-dark/5 backdrop-blur-md text-[10px] md:text-xs font-mono tracking-widest uppercase text-dark/70 hover:text-accent transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-accent text-dark font-display font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <span className="relative z-10 transition-colors group-hover:text-white">View Work</span>
              <div className="absolute inset-0 bg-dark transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </a>
            <a href="#contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-dark font-display font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl border border-dark/20 hover:border-dark hover:bg-dark/5 transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-[280px] sm:max-w-xs lg:max-w-sm order-1 lg:order-2 relative mt-8 lg:mt-0">
          <div className="hero-image-wrap relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-gray-200 border-2 border-white/50 shadow-2xl z-10 group">
            {/* Using a professional Unsplash portrait placeholder. Can be replaced with personal photo later. */}
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
              alt="Mohit Aggarwal"
              width={400}
              height={400}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              priority
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent pointer-events-none opacity-80"></div>
          </div>

          {/* Decorative elements around image */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/40 rounded-full blur-2xl z-0 animate-pulse"></div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
        </div>

      </div>
    </section>
  );
}

