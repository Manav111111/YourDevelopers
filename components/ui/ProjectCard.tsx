import { Badge } from "./Badge";
import { ArrowUpRight, ExternalLink, Code } from "lucide-react";
import { Project, projectTechLogos } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-2xl bg-[#fdfafa] border border-dark/10 hover:border-accent/40 transition-colors duration-500 shadow-sm hover:shadow-xl">

      {/* Image Section — top on mobile, right on desktop */}
      <div className="relative w-full md:w-2/5 lg:w-1/3 flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-l border-dark/10 min-h-[200px] sm:min-h-[260px] md:min-h-auto order-1 md:order-2 overflow-hidden">
        <div className={`relative z-10 w-full h-full min-h-[140px] sm:min-h-[180px] rounded-xl overflow-hidden flex flex-col items-center justify-center group-hover:scale-[1.02] transition-all duration-500 shadow-inner ${(project.domain === 'app-dev' || project.domain === 'web-dev' || project.domain === 'ai-ml') ? 'bg-transparent border-none shadow-none' : 'bg-dark/10 border border-dark/5 gap-3'}`}>
          {project.mockupType === 'mobile' || (project.domain === 'app-dev' && project.mockupType !== 'laptop') ? (
            <div className="relative inline-flex h-full max-h-[200px] sm:max-h-[280px]">
              {project.image && !project.image.includes('project-') && (
                <div
                  className="absolute z-0 bg-cover bg-top rounded-[28px] sm:rounded-[32px] top-[14%] bottom-[2%] left-[12%] right-[8%] sm:top-[5%] sm:bottom-[5%] sm:left-[11%] sm:right-[8%]"
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
            <div className="relative inline-flex w-full mt-2 sm:mt-4 group-hover:scale-105 transition-transform duration-500">
              {project.image && !project.image.includes('project-') && (
                <div
                  className="absolute z-0 bg-cover bg-top rounded-t-sm rounded-b-none top-[12%] bottom-[18%] left-[10%] right-[9%]"
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

      {/* Text Content */}
      <div className="py-5 px-5 sm:py-7 sm:px-7 md:py-8 md:pl-8 md:pr-44 lg:pr-48 relative flex flex-col grow md:w-3/5 lg:w-2/3 order-2 md:order-1">

        {/* Desktop Vertical Tool Dock */}
        <div className="hidden md:flex absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 flex-col gap-2 z-30 items-end">
          {project.tech.map((t, i) => {
            const logoSrc = projectTechLogos[t];
            return (
              <div 
                key={i} 
                title={t} 
                className="w-32 md:w-36 h-8 md:h-9 bg-white shadow-xs border border-dark/10 rounded-full flex items-center justify-start gap-2 pl-2.5 pr-3 group-hover:-translate-x-1 group-hover:scale-105 transition-all duration-500 delay-100"
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

        <div className="hidden md:flex justify-between items-start mb-3 sm:mb-6">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge>{project.badge}</Badge>
          </div>
          <div className="font-mono text-xs tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase mt-1 shrink-0">
            &lt; View /&gt;
          </div>
        </div>

        {/* Mobile Action Links (At the start on Mobile view) */}
        <div className="flex md:hidden flex-wrap gap-2.5 mb-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark/5 text-xs font-mono uppercase tracking-widest text-dark/80 hover:text-accent transition-colors"
              title="View Source Code"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-3.5 h-3.5 object-contain" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/20 text-xs font-mono uppercase tracking-widest text-dark font-bold hover:text-accent transition-colors"
              title="View Live Demo"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-dark mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-muted leading-relaxed mb-4 text-sm sm:text-base">{project.description}</p>

        {/* Mobile Tech Pills */}
        <div className="flex md:hidden flex-wrap gap-1.5 mb-2">
          {project.tech.map((t, i) => {
            const logoSrc = projectTechLogos[t];
            return (
              <span
                key={i}
                title={t}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-dark/10 rounded-full text-[10px] font-mono font-medium tracking-wide uppercase text-dark/70"
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={t}
                    className="w-3.5 h-3.5 object-contain shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <Code size={12} className="text-dark/45 shrink-0" />
                )}
                {t}
              </span>
            );
          })}
        </div>

        {/* Desktop Action Links Bar (At the bottom on Desktop view) */}
        <div className="hidden md:flex mt-auto pt-5 border-t border-dark/5 items-center justify-between">
          <div className="flex gap-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark/5 text-xs font-mono uppercase tracking-widest text-dark/80 hover:text-accent transition-colors"
                title="View Source Code"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-3.5 h-3.5 object-contain" /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/20 text-xs font-mono uppercase tracking-widest text-dark font-bold hover:text-accent transition-colors"
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
