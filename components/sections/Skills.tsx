"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { skills } from "@/lib/data";

export function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax scrolling for marquee
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.from(".skill-category", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="skills-section py-24 md:py-32 bg-dark text-white overflow-hidden border-t border-white/5 relative z-10">
      
      {/* Background Marquee */}
      <div className="absolute top-40 left-0 w-[120vw] -ml-[10vw] mb-20 -rotate-3 bg-accent/90 py-6 overflow-hidden shadow-2xl z-0 pointer-events-none mix-blend-difference">
        <div className="marquee-inner flex whitespace-nowrap w-[200%]">
          {/* Repeating text block */}
          {Array(8).fill(
            <span className="text-3xl md:text-5xl font-display font-black uppercase tracking-widest text-[#111] px-10">
              AI/ML <span className="text-white/40 px-6 font-mono text-2xl font-light">{'//'}</span> APP DEV <span className="text-white/40 px-6 font-mono text-2xl font-light">{'//'}</span> WEB DEV <span className="text-white/40 px-6 font-mono text-2xl font-light">{'//'}</span>
            </span>
          ).map((item, i) => (
            <div key={i} className="inline-flex items-center">{item}</div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 mt-[20vh] md:mt-[30vh]">
        
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white/90">Capabilities</h2>
          <div className="flex-grow h-[1px] bg-white/10"></div>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="skill-category bg-[#1a1a19]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-accent mb-8 uppercase tracking-widest">
              {'//'} Intelligence
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.aiml.map((skill, i) => (
                <span key={i} className="px-4 py-2.5 bg-dark border border-white/10 rounded-full text-sm font-body font-medium hover:border-accent hover:text-accent transition-colors duration-300 hover-target cursor-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category bg-[#1a1a19]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-accent mb-8 uppercase tracking-widest">
              {'//'} Mobile & Systems
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.appDev.map((skill, i) => (
                <span key={i} className="px-4 py-2.5 bg-dark border border-white/10 rounded-full text-sm font-body font-medium hover:border-accent hover:text-accent transition-colors duration-300 hover-target cursor-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category bg-[#1a1a19]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-accent mb-8 uppercase tracking-widest">
              {'//'} Web Scale
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.webDev.map((skill, i) => (
                <span key={i} className="px-4 py-2.5 bg-dark border border-white/10 rounded-full text-sm font-body font-medium hover:border-accent hover:text-accent transition-colors duration-300 hover-target cursor-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
