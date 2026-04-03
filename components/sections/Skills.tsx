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
    <section id="skills" ref={containerRef} className="skills-section py-10 md:py-10  bg-cream text-dark overflow-hidden  relative z-10">



      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-6 mb-40">
        <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-dark">Capabilities</h2>
        <div className="grow h-px bg-dark/10"></div>
      </div>
      {/* Background Marquee */}
      <div className="absolute top-30 sm:top-28 left-0 w-[120vw] -ml-[10vw] mb-20 -rotate-3 bg-accent py-4 sm:py-6 overflow-hidden shadow-xl z-0 pointer-events-none">
        <div className="marquee-inner flex whitespace-nowrap w-[200%]">
          {/* Repeating text block */}
          {Array(8).fill(
            <span className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-widest text-[#111] px-6 sm:px-10">
              AI/ML <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> WEB DEV <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> APP DEV <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span>
            </span>
          ).map((item, i) => (
            <div key={i} className="inline-flex items-center">{item}</div>
          ))}
        </div>
      </div>

      <div className="pb-12 max-w-7xl mx-auto px-6 md:px-12 relative z-20 mt-[15vh] sm:mt-[20vh] md:mt-[30vh]">



        <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          <div className="skill-category bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-3xl border border-dark/5 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-accent mb-8 uppercase tracking-widest">
              {'</'}AI/ML{'>'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.aiml.map((skill, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-dark/10 rounded-xl text-sm font-body font-medium text-dark hover:border-accent hover:text-accent transition-colors duration-300">
                  {skill.icon && (
                    <img
                      src={skill.icon.startsWith('/') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-3xl border border-dark/5 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-accent mb-8 uppercase tracking-widest">
              {'</'}Mobile App Development{'>'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.appDev.map((skill, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-dark/10 rounded-xl text-sm font-body font-medium text-dark hover:border-accent hover:text-accent transition-colors duration-300">
                  {skill.icon && (
                    <img
                      src={skill.icon.startsWith('/') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-3xl border border-dark/5 shadow-xl">
            <h3 className="text-sm font-mono font-bold text-accent mb-8 uppercase tracking-widest">
              {'</'}Web Development{'>'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.webDev.map((skill, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-dark/10 rounded-xl text-sm font-body font-medium text-dark hover:border-accent hover:text-accent transition-colors duration-300">
                  {skill.icon && (
                    <img
                      src={skill.icon.startsWith('/') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
