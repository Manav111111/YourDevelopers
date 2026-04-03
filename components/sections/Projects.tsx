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

        <div className="flex items-center gap-6  mb-10 sm:mb-16 projects-header">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest">Selected Works</h2>
          <div className="grow h-px bg-dark/10"></div>
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
