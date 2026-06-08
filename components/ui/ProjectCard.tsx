import { Badge } from "./Badge";
import { ArrowUpRight, ExternalLink, Code } from "lucide-react";
import { Project, projectTechLogos } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-2xl bg-[#fdfafa] border border-dark/10 hover:border-accent/40 transition-colors duration-500 shadow-sm hover:shadow-xl">

      <div className="py-5 pl-5 pr-32 sm:py-8 sm:pl-8 sm:pr-40 md:pr-48 relative flex flex-col grow md:w-3/5 lg:w-2/3 order-2 md:order-1">
        
        {/* Vertical Tool Dock (In Text Section) */}
        <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30 items-end">
          {project.tech.map((t, i) => {
            const logoSrc = projectTechLogos[t];
            return (
              <div 
                key={i} 
                title={t} 
                className="w-28 sm:w-32 md:w-36 h-8 md:h-9 bg-white shadow-sm border border-dark/10 rounded-full flex items-center justify-start gap-2 pl-2 pr-2 md:pl-2.5 md:pr-3 group-hover:-translate-x-1 group-hover:scale-105 transition-all duration-500 delay-100"
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={t}
                    className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <Code size={16} className="text-dark/45 shrink-0" />
                )}
                <span className="text-[9px] md:text-[10px] font-mono font-medium tracking-widest uppercase text-dark/70 truncate">
                  {t}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-start mb-6">
          <Badge>{project.badge}</Badge>
          <div className="font-mono text-xs tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
            &lt; View /&gt;
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>

        <div className="mt-auto pt-4 sm:pt-6 border-t border-dark/5 flex items-center justify-between">
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
      

      {/* Image Placeholder Area */}
      <div className="relative w-full md:w-2/5 lg:w-1/3  flex items-center justify-center p-6 border-b md:border-b-0 md:border-l border-dark/10 min-h-[220px] sm:min-h-[280px] md:min-h-auto order-1 md:order-2 overflow-hidden">
        <div className={`relative z-10 w-full h-full min-h-[160px] rounded-xl overflow-hidden flex flex-col items-center justify-center group-hover:scale-[1.02] transition-all duration-500 shadow-inner ${(project.domain === 'app-dev' || project.domain === 'web-dev' || project.domain === 'ai-ml') ? 'bg-transparent border-none shadow-none' : 'bg-dark/10 border border-dark/5 gap-3'}`}>
          {project.mockupType === 'mobile' || (project.domain === 'app-dev' && project.mockupType !== 'laptop') ? (
            <div className="relative inline-flex h-full max-h-[240px] sm:max-h-[300px]">
              {project.image && !project.image.includes('project-') && (
                <div 
                  className="absolute z-0 bg-cover bg-top rounded-[32px] md:rounded-3xl max-md:top-[14%] max-md:bottom-[2%] max-md:left-[10%] max-md:right-[9%] md:top-[5%] md:bottom-[5%] md:left-[11%] md:right-[8%]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}
              <img 
                src="/1776162644715.png" 
                alt={`${project.title} Preview`} 
                className="relative z-10 w-auto h-full object-contain drop-shadow-md transition-transform duration-500" 
              />
            </div>
          ) : project.mockupType === 'laptop' || project.domain === 'web-dev' || project.domain === 'ai-ml' ? (
            <div className="relative inline-flex w-full mt-4 group-hover:scale-105 transition-transform duration-500">
              {project.image && !project.image.includes('project-') && (
                <div 
                  className="absolute z-0 bg-cover bg-top rounded-t-sm rounded-b-none max-md:top-[12%] max-md:bottom-[18%] max-md:left-[10%] max-md:right-[10%] md:top-[12%] md:bottom-[20%] md:left-[10%] md:right-[10%]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}
              <img 
                src="/1776163734836.png" 
                alt={`${project.title} Preview`} 
                className="relative z-10 w-full h-auto object-contain drop-shadow-md mix-blend-multiply" 
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2 opacity-30 group-hover:opacity-50 transition-opacity">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-dark"></div>
                ))}
              </div>
              <span className="text-dark/50 font-mono text-[10px] tracking-widest uppercase mt-2 opacity-60 group-hover:opacity-100 transition-opacity">Project Preview</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
