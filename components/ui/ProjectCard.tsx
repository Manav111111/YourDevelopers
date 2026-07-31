import Link from "next/link";
import Image from "next/image";
import { Badge } from "./Badge";
import { ArrowUpRight, ExternalLink, Code, Building2 } from "lucide-react";
import { Project, projectTechLogos } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techList = project.tags || project.techStack || [];
  const description = project.shortDescription || project.challenge;
  const imageSrc = project.coverImage || "/case-study-hero.png";
  const categoryLabel = project.category ? project.category.toUpperCase() : "CASE STUDY";
  const linkHref = `/projects/${project.slug}`;

  return (
    <div className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-3xl bg-white border border-dark/10 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl">

      {/* Image Section */}
      <div className="relative w-full md:w-2/5 lg:w-5/12 flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-dark/10 min-h-[220px] sm:min-h-[260px] order-1 overflow-hidden bg-dark/5">
        <div className="relative z-10 w-full h-full min-h-[160px] rounded-2xl overflow-hidden shadow-sm group-hover:scale-[1.03] transition-all duration-500">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
            {categoryLabel}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="py-6 px-6 sm:py-8 sm:px-8 relative flex flex-col justify-between grow md:w-3/5 lg:w-7/12 order-2">

        <div>
          {/* Header Badge */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-dark/60 text-xs font-mono font-medium">
              <Building2 size={14} className="text-accent" />
              <span>{project.industry}</span>
            </div>
            {project.highlightMetric && (
              <span className="px-3 py-1 rounded-full bg-accent/15 text-accent font-display font-black text-xs">
                {project.highlightMetric.value} {project.highlightMetric.title}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark mb-3 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-dark/70 font-body leading-relaxed mb-6 text-sm sm:text-base">
            {description}
          </p>

          {/* Tags / Tech List */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techList.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-cream border border-dark/10 rounded-xl text-xs font-mono font-medium text-dark/80"
              >
                {projectTechLogos[t] ? (
                  <img src={projectTechLogos[t]} alt={t} className="w-3.5 h-3.5 object-contain" />
                ) : (
                  <Code size={12} className="text-dark/40" />
                )}
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-dark/10 flex items-center justify-between">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-2 text-accent font-mono font-bold text-xs uppercase tracking-wider group-hover:text-dark transition-colors"
          >
            <span>View Full Case Study</span>
            <ArrowUpRight size={16} />
          </Link>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-dark/50 hover:text-accent text-xs font-mono uppercase transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
