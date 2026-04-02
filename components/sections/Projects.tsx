"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<"all" | "ai-ml" | "app-dev" | "web-dev">("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.domain === filter);

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
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-16 sm:py-24 md:py-12 bg-cream text-dark ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 projects-container">

        <div className="flex items-center gap-6  projects-header">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest">Selected Works</h2>
          <div className="grow h-px bg-dark/10"></div>
        </div>

        <div className="flex gap-2 sm:gap-3 mb-10 sm:mb-16 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide projects-header">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai-ml", label: "AI/ML" },
            { id: "app-dev", label: "Mobile Apps" },
            { id: "web-dev", label: "Web Scale" }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === btn.id
                ? "bg-accent text-dark shadow-[0_8px_16px_rgba(255,137,1,0.3)]"
                : "bg-dark/5 text-dark/60 hover:bg-dark/10 hover:text-dark"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProjects.map((project, i) => (
            <div key={project.id} className="project-card-wrapper transition-all duration-500 ease-in-out" style={{ animationDelay: `${i * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
