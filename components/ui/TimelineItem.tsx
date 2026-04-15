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
    color: "bg-[#ff8901]/10 text-[#ff8901] border-[#ff8901]/30",
    dot: "border-[#ff8901]",
    glowDot: "shadow-[0_0_10px_rgba(255,137,1,0.6)]",
  },
  achievement: {
    icon: Trophy,
    label: "Achievement",
    color: "bg-[#ff8901]/10 text-[#ff8901] border-[#ff8901]/30",
    dot: "border-[#ff8901]",
    glowDot: "shadow-[0_0_10px_rgba(255,137,1,0.6)]",
  },
  education: {
    icon: GraduationCap,
    label: "Education",
    color: "bg-[#006492]/10 text-[#006492] border-[#006492]/30",
    dot: "border-[#00b2fe]",
    glowDot: "shadow-[0_0_10px_rgba(0,178,254,0.6)]",
  },
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  const config = typeConfig[item.type] ?? typeConfig.internship;
  const Icon = config.icon;

  return (
    /* Outer row — pure layout, no visual chrome */
    <div
      className={[
        "timeline-item",
        "group relative flex items-start w-full",
        "sticky transition-all duration-500 ease-in-out origin-top",
      ].join(" ")}
      style={{
        top: `calc(10rem + ${index * 0.75}rem)`,
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* ── Center dot (absolutely on the vertical spine) ── */}
      <div
        className="absolute left-6 md:left-10 top-8
                   flex items-center justify-center
                   -translate-x-1/2 z-20"
      >
        <div
          className={[
            "w-3.5 h-3.5 rounded-full border-[3px]",
            config.dot,
            config.glowDot,
            "bg-[#fdfafa]",
            "group-hover:scale-125 transition-transform duration-300",
          ].join(" ")}
        />
      </div>

      {/* ── Card container ── */}
      <div
        className={[
          "w-full pl-14 md:pl-24 pr-4 md:pr-0",
          "flex justify-center",
        ].join(" ")}
      >
        {/* Card */}
        <div
          data-timeline-card
          className={[
            "relative w-full",
            "bg-white/80 backdrop-blur-md",
            "border border-dark/6 rounded-2xl",
            "p-6 sm:p-7 sm:px-8",
            "shadow-sm hover:shadow-lg",
            "group-hover:border-[#ff8901]/25",
            "hover:-translate-y-1",
            "transition-all duration-500 ease-out",
          ].join(" ")}
        >
          {/* Badge + Date row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold
                          uppercase tracking-widest px-2.5 py-1 rounded-full border ${config.color}`}
            >
              <Icon size={10} strokeWidth={2.5} />
              {config.label}
            </span>
            <span
              className="font-mono text-[10px] font-semibold tracking-widest
                         text-[#ff8901] uppercase border border-[#ff8901]/20
                         bg-[#ff8901]/5 px-2 py-0.5 rounded"
            >
              {item.date}
            </span>
          </div>

          {/* Role */}
          <h3
            className="text-xl sm:text-2xl font-display font-semibold text-dark
                       leading-tight mb-1
                       group-hover:text-[#ff8901] transition-colors duration-300"
          >
            {item.role}
          </h3>

          {/* Org */}
          <p className="text-[11px] font-mono text-dark/40 mb-4 uppercase tracking-[0.08em]">
            {item.org}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, i) => {
              const logoSrc = projectTechLogos[tag];
              return (
                <span
                  key={i}
                  title={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1
                             rounded border border-dark/[0.06] bg-white
                             text-[9px] font-mono tracking-wider uppercase
                             text-dark/60 shadow-sm
                             hover:border-dark/20 transition-colors cursor-default"
                >
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={tag}
                      className="h-3 w-3 object-contain opacity-80"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="inline-block w-1 h-1 rounded-full bg-current opacity-40" />
                  )}
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Bottom glow bar on hover */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2
                       h-[2px] w-0 rounded-full
                       bg-linear-to-r from-transparent via-[#ff8901]/60 to-transparent
                       group-hover:w-3/4 transition-all duration-700 ease-out"
          />
        </div>
      </div>
    </div>
  );
}
