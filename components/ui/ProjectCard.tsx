import { Badge } from "./Badge";
import { ArrowUpRight, ExternalLink, Code } from "lucide-react";
import { Project, projectTechLogos } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col w-full overflow-hidden rounded-2xl bg-[#fdfafa] border border-dark/10 hover:border-accent/40 transition-colors duration-500 shadow-sm hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden bg-black/50">
        <div className="absolute inset-0 bg-muted/10 mix-blend-overlay z-0 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
        
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-dark/90 via-dark/20 to-transparent">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 text-white">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent font-mono text-xs uppercase tracking-wider">
                <ExternalLink size={16} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent font-mono text-xs uppercase tracking-wider">
                <Code size={16} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-6">
          <Badge>{project.badge}</Badge>
          <div className="font-mono text-xs tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
            &lt; View /&gt;
          </div>
        </div>
        
        <h3 className="text-3xl font-display font-bold text-dark mb-4 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-muted leading-relaxed mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => {
            const logoSrc = projectTechLogos[t];

            return (
              <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-dark/70 bg-white border border-dark/5 px-2 py-1 rounded">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt=""
                    aria-hidden
                    className="h-3.5 w-3.5 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Code size={12} aria-hidden className="text-dark/45" />
                )}
                {t}
              </span>
            );
          })}
        </div>

        <div className="mt-auto pt-6 border-t border-dark/5 flex items-center justify-between">
          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-dark/50 hover:text-accent transition-colors"
                title="View Source Code"
              >
                <Code size={14} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-dark/50 hover:text-accent transition-colors"
                title="View Live Demo"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
          <ArrowUpRight size={18} className="text-dark/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}
