"use client";

import { JourneyItem, projectTechLogos } from "@/lib/data";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  item: JourneyItem;
  index: number;
}

const typeConfig = {
  internship: {
    icon: Briefcase,
    label: "Internship",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    dot: "border-blue-500",
    dotBg: "bg-blue-500",
  },
  achievement: {
    icon: Trophy,
    label: "Achievement",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    dot: "border-amber-500",
    dotBg: "bg-amber-500",
  },
  education: {
    icon: GraduationCap,
    label: "Education",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    dot: "border-emerald-500",
    dotBg: "bg-emerald-500",
  },
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <div className="timeline-item group relative shrink-0 w-[300px] md:w-[360px] snap-start flex flex-col">

      {/* Dot & connector stem */}
      <div className="flex flex-col items-center mb-0">
        {/* Dot on the line */}
        <div
          className={`relative z-20 w-5 h-5 rounded-full border-[3px] ${config.dot} bg-cream
            group-hover:${config.dotBg} group-hover:scale-125 transition-all duration-300 shadow-sm`}
        >
          {/* pulse ring on hover */}
          <span
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-[2.5] ${config.dotBg} transition-all duration-500`}
          />
        </div>

        {/* Vertical stem from dot to card */}
        <div className="w-[2px] h-8 bg-gradient-to-b from-dark/20 to-transparent" />
      </div>

      {/* Card */}
      <div
        className={`
          relative flex flex-col grow
          bg-white border border-dark/8 rounded-2xl p-6
          shadow-sm hover:shadow-xl
          group-hover:border-accent/25 group-hover:-translate-y-1
          transition-all duration-500 ease-out
        `}
      >
        {/* Type badge */}
        <span
          className={`self-start mb-4 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${config.color}`}
        >
          <Icon size={11} strokeWidth={2.5} />
          {config.label}
        </span>

        {/* Date */}
        <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase mb-1">
          {item.date}
        </span>

        {/* Org */}
        <p className="text-sm text-dark/55 font-body mb-3">{item.org}</p>

        {/* Role */}
        <h3 className="text-lg font-display font-bold text-dark mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
          {item.role}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5 grow">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => {
            const logoSrc = projectTechLogos[tag];
            return (
              <span
                key={i}
                title={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-dark/5 text-[10px] font-mono tracking-wider uppercase text-gray-500 border border-dark/5"
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={tag}
                    className="h-3.5 w-3.5 object-contain shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0" />
                )}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Index number — decorative */}
        <span className="absolute top-4 right-5 font-display font-black text-5xl text-dark/[0.04] select-none leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
