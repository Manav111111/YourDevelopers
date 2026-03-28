"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Reveal animation
    gsap.from(".about-content > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 70%",
      }
    });

    // Stat counter animation
    if (counterRef.current) {
      gsap.to(counterRef.current, {
        innerHTML: 15,
        duration: 2,
        ease: "power1.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 80%",
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-0 md:min-h-[110vh] flex items-center bg-cream text-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 about-container">
        
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest">About</h2>
          <div className="grow h-px bg-dark/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 about-content flex flex-col gap-8">
            <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight">
              Bridging the gap between <span className="font-bold text-accent">intelligence</span> <br className="hidden md:block" />and <span className="font-bold text-accent">interaction</span>.
            </h3>
            
            <p className="text-lg md:text-xl font-body leading-relaxed text-dark/80">
              I am a multidisciplinary engineer who writes clean code and builds scalable systems. With a strong foundation in Artificial Intelligence and Machine Learning, I create products that are not just highly functional, but also visually striking and intuitive.
            </p>
            
            <p className="text-lg md:text-xl font-body leading-relaxed text-dark/80">
              Whether it's training a robust ML model, developing a cross-platform mobile application, or crafting a buttery-smooth web experience, I bring a product-first mindset to every line of code.
            </p>

            {/* Stats */}
            <div className="about-stats pt-8 flex gap-12 border-t border-dark/10 mt-4">
              <div>
                <div className="flex items-baseline gap-1 font-display font-black text-5xl md:text-6xl text-dark">
                  <span ref={counterRef}>0</span><span className="text-accent">+</span>
                </div>
                <div className="font-mono text-sm font-bold tracking-widest uppercase mt-4 text-dark/60">Projects Delivered</div>
              </div>
              <div className="pl-12 border-l border-dark/10">
                <div className="flex items-baseline gap-1 font-display font-black text-5xl md:text-6xl text-dark">
                  <span>3</span>
                </div>
                <div className="font-mono text-sm font-bold tracking-widest uppercase mt-4 text-dark/60">Core Domains</div>
              </div>
            </div>
          </div>

          {/* Right: Abstract/Portrait */}
          <div className="lg:col-span-5 relative about-content h-[40vh] lg:h-[70vh] w-full rounded-3xl overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-white group-hover:scale-105 transition-transform duration-1000 ease-out flex items-center justify-center border border-dark/5">
               <span className="text-dark/5 font-display font-black text-8xl -rotate-90 scale-150 uppercase tracking-tighter">Code</span>
            </div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            
            {/* Decorative Element */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-xl border border-dark/10 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
               <p className="font-mono text-sm text-dark uppercase tracking-wider">"Design is how it works."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
