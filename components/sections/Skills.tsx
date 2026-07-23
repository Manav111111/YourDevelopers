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
        trigger: containerRef.current,
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
      {/* Background Marquee Horizontal Bar */}
      <div className="absolute top-30 sm:top-28 left-0 w-[120vw] -ml-[10vw] mb-20 -rotate-3 bg-accent py-4 sm:py-6 overflow-hidden shadow-xl z-0 pointer-events-none">
        <div className="marquee-inner flex whitespace-nowrap w-[200%]">
          {/* Repeating text block */}
          {Array(8).fill(
            <span className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-widest text-[#111] px-6 sm:px-10">
              AI/ML <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> WEB DEV <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> APP DEV <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> TOOLS <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span>
            </span>
          ).map((item, i) => (
            <div key={i} className="inline-flex items-center">{item}</div>
          ))}
        </div>
      </div>

      <div className="pb-12 max-w-7xl mx-auto px-6 md:px-12 relative z-20 mt-[15vh] sm:mt-[20vh] md:mt-[30vh]">

        {/* Decorative Horizontal Accent Line */}
        <div className="w-full h-1 bg-linear-to-r from-accent via-dark/20 to-transparent rounded-full mb-12 shadow-xs"></div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* AI/ML */}
          <div className="skill-category bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-dark/5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                  {'</'}AI/ML{'>'}
                </h3>
                <span className="text-[10px] font-mono text-gray-400">01</span>
              </div>
              <div className="w-10 h-1 bg-accent rounded-full mb-6"></div>
              <div className="flex flex-wrap gap-3">
                {skills.aiml.map((skill, i) => (
                  <span key={i} className="flex items-center gap-2 px-3.5 py-2.5 bg-white border border-dark/10 rounded-xl text-xs sm:text-sm font-body font-medium text-dark hover:border-accent hover:text-accent transition-colors duration-300">
                    {skill.icon && (
                      <img
                        src={skill.icon.startsWith('/') || skill.icon.startsWith('http') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="skill-category bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-dark/5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                  {'</'}Mobile App Development{'>'}
                </h3>
                <span className="text-[10px] font-mono text-gray-400">02</span>
              </div>
              <div className="w-10 h-1 bg-accent rounded-full mb-6"></div>
              <div className="flex flex-wrap gap-3">
                {skills.appDev.map((skill, i) => (
                  <span key={i} className="flex items-center gap-2 px-3.5 py-2.5 bg-white border border-dark/10 rounded-xl text-xs sm:text-sm font-body font-medium text-dark hover:border-accent hover:text-accent transition-colors duration-300">
                    {skill.icon && (
                      <img
                        src={skill.icon.startsWith('/') || skill.icon.startsWith('http') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="skill-category bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-dark/5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                  {'</'}Web Development{'>'}
                </h3>
                <span className="text-[10px] font-mono text-gray-400">03</span>
              </div>
              <div className="w-10 h-1 bg-accent rounded-full mb-6"></div>
              <div className="flex flex-wrap gap-3">
                {skills.webDev.map((skill, i) => (
                  <span key={i} className="flex items-center gap-2 px-3.5 py-2.5 bg-white border border-dark/10 rounded-xl text-xs sm:text-sm font-body font-medium text-dark hover:border-accent hover:text-accent transition-colors duration-300">
                    {skill.icon && (
                      <img
                        src={skill.icon.startsWith('/') || skill.icon.startsWith('http') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Horizontal Tools & Ecosystem Bar */}
        <div className="skill-category bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-dark/5 shadow-xl mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-dark/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-6 bg-accent rounded-full"></div>
              <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                {'</'}Tools & Developer Ecosystem{'>'}
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
              Workflows • Cloud • Environments
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {(skills.tools || []).map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-dark/10 rounded-2xl text-xs sm:text-sm font-body font-medium text-dark hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {skill.icon && (
                  <img
                    src={skill.icon.startsWith('/') || skill.icon.startsWith('http') ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
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
    </section>
  );
}
