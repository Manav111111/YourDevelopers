"use client";

import { useState } from "react";
import { journeyItems, JourneyItem, projectTechLogos } from "@/lib/data";
import { Briefcase, Trophy, Sparkles, Code2, Rocket, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

type FilterType = "all" | "experience" | "internship" | "achievement";

const typeBadges = {
  experience: {
    label: "Experience",
    icon: Rocket,
    color: "bg-[#ff8901]/10 text-[#ff8901] border-[#ff8901]/30",
  },
  internship: {
    label: "Internship",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  },
  achievement: {
    label: "Achievement",
    icon: Trophy,
    color: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  },
  education: {
    label: "Education",
    icon: Award,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  },
};

export function Journey() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredItems = activeFilter === "all"
    ? journeyItems
    : journeyItems.filter((item) => item.type === activeFilter);

  const stats = [
    { label: "Projects Shipped", value: "10+", icon: Rocket },
    { label: "Internships & Roles", value: "5+", icon: Briefcase },
    { label: "Hackathon Wins", value: "8x", icon: Trophy },
    { label: "Open Source Mentor", value: "SSOC'26", icon: Sparkles },
  ];

  return (
    <section
      id="journey"
      className="relative bg-cream text-dark py-20 md:py-28 overflow-hidden"
    >
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#ff8901]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading & Subtitle */}
      

         <div className="flex items-center gap-6 mb-8">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest"> Experience & <span className="text-accent">Impact</span></h2>
          <div className="grow h-px bg-dark/10"></div>
        </div>

        {/* Impact Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md border border-dark/6 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#ff8901]/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-dark group-hover:text-[#ff8901] transition-colors">
                    {stat.value}
                  </span>
                  <div className="p-2 rounded-xl bg-[#ff8901]/10 text-[#ff8901]">
                    <Icon size={18} />
                  </div>
                </div>
                <p className="text-xs font-mono text-dark/50 uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-dark/10">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: "all", label: "All Items", count: journeyItems.length },
                {
                  id: "experience",
                  label: "Roles & Leadership",
                  count: journeyItems.filter((i) => i.type === "experience").length,
                },
                {
                  id: "internship",
                  label: "Internships",
                  count: journeyItems.filter((i) => i.type === "internship").length,
                },
                {
                  id: "achievement",
                  label: "Achievements",
                  count: journeyItems.filter((i) => i.type === "achievement").length,
                },
              ] as const
            ).map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as FilterType)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-dark text-white shadow-md shadow-dark/20 scale-105"
                      : "bg-white/80 text-dark/70 hover:bg-dark/5 border border-dark/10"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? "bg-[#ff8901] text-dark font-extrabold" : "bg-dark/10 text-dark/60"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-dark/40 hidden md:block">
            Click any card to expand details
          </div>
        </div>

        {/* Experience Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => {
            const config = typeBadges[item.type] ?? typeBadges.internship;
            const Icon = config.icon;
            const isPresent = item.date.toLowerCase().includes("present");
            const isExpanded = expandedId === item.id;
            const isFeatured = item.type === "experience" || isPresent;

            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-pointer border ${
                  isFeatured
                    ? "bg-gradient-to-br from-white via-white to-[#ff8901]/5 border-[#ff8901]/30 shadow-md hover:shadow-xl hover:border-[#ff8901]"
                    : "bg-white/80 backdrop-blur-md border-dark/8 shadow-sm hover:shadow-md hover:border-dark/20"
                } ${isFeatured && index === 0 ? "md:col-span-2" : ""}`}
              >

                <div>
                  {/* Top Row: Type Badge + Date */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${config.color}`}
                    >
                      <Icon size={12} strokeWidth={2.5} />
                      {config.label}
                    </span>

                    {item.date && (
                      <span className="font-mono text-[10px] font-bold tracking-widest text-[#ff8901] uppercase border border-[#ff8901]/20 bg-[#ff8901]/5 px-2.5 py-1 rounded-md">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Role Title & Org */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-dark group-hover:text-[#ff8901] transition-colors duration-300 leading-snug">
                        {item.role}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-dark/30 group-hover:text-[#ff8901] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-2"
                      />
                    </div>
                    <p className="text-xs font-mono text-dark/50 uppercase tracking-widest font-semibold mt-1">
                      {item.org}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack / Skill Tags */}
                <div className="pt-4 border-t border-dark/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => {
                      const logoSrc = projectTechLogos[tag];
                      return (
                        <span
                          key={i}
                          title={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-dark/[0.08] bg-cream/50 text-[10px] font-mono tracking-wider uppercase text-dark/75 shadow-2xs group-hover:border-dark/20 transition-colors"
                        >
                          {logoSrc ? (
                            <img
                              src={logoSrc}
                              alt={tag}
                              className="h-3.5 w-3.5 object-contain opacity-85"
                              loading="lazy"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <CheckCircle2 size={10} className="text-[#ff8901]" />
                          )}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Accent Bar on Hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-transparent via-[#ff8901] to-transparent rounded-full group-hover:w-2/3 transition-all duration-500 ease-out" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-dark/10 shadow-sm text-xs font-mono text-dark/70">
            <span className="w-2 h-2 rounded-full bg-[#ff8901] animate-ping" />
            <span>Looking for custom software development, mobile app architecture, or technical leadership?</span>
            <a
              href="#contact"
              className="font-bold text-[#ff8901] hover:underline flex items-center gap-0.5 ml-1"
            >
              Let's connect <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
