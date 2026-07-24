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
      )
      .fromTo(".hero-quote",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=1.5"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-12 text-dark overflow-hidden">

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pointer-events-none">


        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0 pointer-events-auto">
          {/* <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark/10 bg-white/50 backdrop-blur-md mb-4 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Available for work</span>
          </div> */}
          <h2 className="hero-role self-start text-left text-lg sm:text-xl md:text-3xl lg:text-4xl font-mono font-medium tracking-tight text-gray-700 mb-5 border-l-4 border-accent pl-3 sm:pl-4 py-1">
            AI Engineer
          </h2>
          <h1 className="hero-name self-start text-left flex flex-col text-[11vw] sm:text-[10vw] md:text-[6vw] lg:text-[5rem] font-display font-black leading-[0.9] tracking-tighter uppercase text-dark mb-4 drop-shadow-sm">
            Mohit <br />
            <span className="text-accent italic font-bold drop-shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] ml-20 sm:ml-2 md:ml-50 mt-2">Aggarwal</span>
          </h1>

          {/* MOBILE Image Section */}
          <div className="lg:hidden w-full max-w-[260px] sm:max-w-xs relative mb-6 mt-2">

            <div className="hero-image-wrap relative  aspect-4/5 w-full rounded-t-3xl overflow-hidden z-10 group shadow-xl border border-dark/10">
              <Image
                src="/profile.png"
                alt="Mohit Aggarwal"
                width={600}
                height={800}
                className="object-cover top-[-75px] bottom-[-75px] h-[calc(100%+150px)] object-top absolute aspect-4/5 transition-all duration-600"
                priority
                unoptimized
              />
            </div>
            <div className="w-full h-10 bg-accent rounded-b-3xl flex justify-center items-center mt-[-8px] relative z-20 shadow-md">
              <p className="hero-quote text-[10px] sm:text-[12px] font-mono font-bold uppercase tracking-widest text-dark/80 px-4 text-center italic">
                "The best way to predict the future is to invent it."
              </p>
            </div>
          </div>

          <div className="hero-desc mt-3">
            <p className="text-base md:text-md text-gray-600 max-w-xl mb-6 leading-relaxed">
              I build intelligent applications that blend cutting-edge Artificial Intelligence with elegant, high-performance web and mobile experiences. <br />Turning complex problems into seamless digital products.
            </p>

            {/* Tech Tags / Capabilities */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 mb-5 w-full max-w-xl">
              {['Web Apps', 'Mobile', 'AI Models', 'Backend', 'LLMs'].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-sm border border-dark/10 bg-dark/5 backdrop-blur-md text-[10px] md:text-xs font-mono tracking-widest uppercase text-dark/70 hover:text-accent transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
            <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-accent text-dark font-display font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <span className="relative z-10 transition-colors group-hover:text-white">View Work</span>
              <div className="absolute inset-0 bg-dark transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </a>
            <button
              onClick={() => window.dispatchEvent(new Event("open-resume"))}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-dark font-display font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl border border-dark/20 hover:border-dark hover:bg-dark/5 transition-colors cursor-pointer"
            >
              Show Resume
            </button>
            <a href="#contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-dark/60 font-display font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl hover:text-dark hover:bg-dark/5 transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        {/* DESKTOP Image Section */}
        <div className="hidden lg:block flex-1 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[350px] relative mt-4 lg:mt-0 pointer-events-auto">

          <div className="hero-image-wrap relative aspect-4/5 w-full rounded-t-3xl overflow-hidden z-10 group shadow-2xl border border-dark/10">
            {/* Back Image: profile.png — shifted up 75px, height extended to fill box */}
            <Image
              src="/profile.png"
              alt="Mohit Aggarwal"
              width={500}
              height={625}
              className="object-cover object-top absolute top-[-75px] bottom-[-75px] left-0 w-full h-[calc(100%+150px)] z-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              priority
              unoptimized
            />
            {/* Front Image: profile-bg.png — same crop */}
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
          <div className="w-full h-12 bg-accent rounded-b-3xl flex justify-center items-center mt-[-10px] relative z-20 shadow-md">
            <p className="hero-quote text-[13px] font-mono font-bold uppercase tracking-widest text-dark/80 px-4 text-center italic">
              "The best way to predict the future is to invent it."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

