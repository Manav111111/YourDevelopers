import { Badge } from "./Badge";
import { ArrowUpRight, ExternalLink, Code } from "lucide-react";
import { Project, projectTechLogos } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col w-full overflow-hidden rounded-2xl bg-[#fdfafa] border border-dark/10 hover:border-accent/40 transition-colors duration-500 shadow-sm hover:shadow-xl">
   
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
              <span key={i} title={t} className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-dark/70 bg-white border border-dark/5 px-2 py-1 rounded">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={t}
                    className="h-4 w-4 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (sibling) sibling.style.display = "inline";
                    }}
                  />
                ) : null}
                <Code size={12} aria-hidden className="text-dark/45" style={{ display: logoSrc ? "none" : "inline" }} />
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
