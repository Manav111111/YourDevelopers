"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/data";
import { Search, ArrowRight, ArrowUpRight, Sparkles, Building2 } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "saas", label: "SaaS" },
    { id: "automation", label: "Automation" },
    { id: "mvp", label: "MVP & Strategy" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full flex flex-col relative bg-cream min-h-screen">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 blur-[3px] opacity-40 sm:opacity-50 md:opacity-60 mix-blend-multiply"
        >
          <source src="/Create_an_elegant_seamless_.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream z-0 pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              <span className="h-4 w-1 bg-accent"></span>
              <span>CASE STUDY REPOSITORY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-dark mb-4">
              All <span className="text-accent">Case Studies</span> & Projects.
            </h1>
            <p className="text-dark/75 text-base md:text-lg font-body leading-relaxed max-w-2xl font-medium">
              Explore our portfolio of AI solutions, web applications, mobile products, and automated systems engineered for high business impact.
            </p>
          </div>

          {/* Search Bar & Category Filters Row */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-accent text-dark shadow-md"
                      : "bg-white/80 text-dark/70 hover:bg-white hover:text-dark border border-dark/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search projects or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-dark/15 text-xs sm:text-sm font-body text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent transition-colors shadow-xs"
              />
              <Search size={16} className="absolute left-3.5 top-3 text-dark/40" />
            </div>

          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-md border border-dark/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Cover Thumbnail */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-dark/5 border border-dark/5">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white text-[10px] font-mono uppercase font-bold tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-2 text-dark/60 text-xs font-mono font-medium mb-2">
                      <Building2 size={13} className="text-accent" />
                      <span>{project.industry}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-body text-dark/70 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Metric Badge */}
                    {project.highlightMetric && (
                      <div className="mb-6 p-3 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-dark/70 uppercase">
                          {project.highlightMetric.title}
                        </span>
                        <span className="text-xl font-display font-black text-accent">
                          {project.highlightMetric.value}
                        </span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-dark/5 text-[10px] font-mono text-dark/70">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-dark/10">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-accent font-mono font-bold text-xs uppercase tracking-wider group-hover:text-dark transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight size={15} />
                    </Link>
                    <a
                      href={project.playStoreLink || project.demoLink || "#"}
                      target={project.playStoreLink || project.demoLink ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-dark/70 hover:text-accent font-mono font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>{project.category === "mobile" || project.playStoreLink ? "VIEW ON PLAYSTORE" : "LIVE DEMO"}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/60 backdrop-blur-md rounded-3xl border border-dark/10 p-8">
              <Sparkles size={36} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-dark mb-2">No projects found</h3>
              <p className="text-sm font-body text-dark/70 mb-6">
                Try searching for another keyword or selecting a different category.
              </p>
              <button
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="px-6 py-2.5 bg-accent text-dark font-mono font-bold text-xs uppercase tracking-wider rounded-xl shadow-md"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>

        <Footer />
      </div>
    </main>
  );
}
