import { Badge } from "./Badge";
import { ArrowUpRight, Code } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col w-full overflow-hidden rounded-2xl bg-[#1f1f1d] border border-white/5 hover:border-accent/30 transition-colors duration-500">
      <div className="relative aspect-video w-full overflow-hidden bg-black/50">
        <div className="absolute inset-0 bg-muted/10 mix-blend-overlay z-0 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
        
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-dark/90 via-dark/20 to-transparent">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 text-white">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent font-mono text-xs uppercase tracking-wider hover-target">
                <ArrowUpRight size={16} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent font-mono text-xs uppercase tracking-wider hover-target">
                <Code size={16} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <Badge>{project.badge}</Badge>
          <div className="font-mono text-xs tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
            &lt; View /&gt;
          </div>
        </div>
        
        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-muted leading-relaxed mb-8 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[11px] font-mono tracking-widest uppercase text-muted/60 bg-white/5 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
