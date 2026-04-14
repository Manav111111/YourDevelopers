"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<"all" | "ai-ml" | "app-dev" | "web-dev">("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.domain === filter);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.from(".projects-header > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 75%",
      }
    });

    const cards = gsap.utils.toArray<HTMLElement>('.project-card-wrapper');
    
    cards.forEach((card, index) => {
      if (index === cards.length - 1) {
        // Scroll the header away synchronously with the last card coming into place
        const scrollDistance = 400; // Pixel distance over which they scroll together
        gsap.to(".projects-header", {
          y: -scrollDistance, // Moves up out of view
          opacity: 1,         // No fading
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: `top ${160 + index * 32 + scrollDistance}px`, 
            end: `top ${160 + index * 32}px`, 
            scrub: true,
          }
        });
        return;
      }

      gsap.to(card, {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top bottom",
          end: `top ${160 + (index + 1) * 32}px`,
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-16 sm:py-24 md:py-12 bg-cream text-dark ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 projects-container pb-24">

        <div className="sticky top-16 md:top-16 z-20 bg-cream py-6 sm:py-8 mb-6 sm:mb-10 flex items-center gap-6 projects-header">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest">Selected Works</h2>
          <div className="grow h-px bg-dark/10"></div>
        </div>

        <div className="flex flex-col gap-12 sm:gap-32 relative">
        
          {filteredProjects.map((project, i) => (
            <div 
              key={project.id} 
              className="project-card-wrapper sticky transition-all duration-500 ease-in-out origin-top" 
              style={{ 
                top: `calc(10rem + ${i * 0.75}rem)`, 
                animationDelay: `${i * 100}ms` 
              }}
            >
              
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
