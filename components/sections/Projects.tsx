"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Target, 
  Sparkles, 
  Clock, 
  Building2, 
  Star, 
  Stethoscope, 
  Users, 
  ShoppingBag, 
  Rocket 
} from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".case-study-header > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: ".case-studies-container",
        start: "top 75%",
      }
    });

    gsap.from(".case-study-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: ".case-studies-grid",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  // Get main project dynamically from projects data (Advize or first featured)
  const featuredProjects = projects.filter(p => p.featured);
  const mainProject = featuredProjects[0] || projects[0];
  // Ensure minimum 3 secondary projects are shown below
  const secondaryProjects = projects.filter(p => p.id !== mainProject.id).slice(0, 3);

  return (
    <section id="projects" ref={containerRef} className="py-24 text-dark overflow-hidden relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 case-studies-container">
        
        {/* Header Section */}
        <div className="case-study-header mb-12 flex flex-col items-start">
          <div className="flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            <span className="h-4 w-1 bg-accent"></span>
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-dark mb-4">
            Real <span className="text-accent">Business Results,</span> <br className="hidden sm:block"/>
            Powered by <span className="text-accent">AI.</span>
          </h2>
          <p className="text-dark/75 text-base md:text-lg font-body leading-relaxed max-w-2xl font-medium">
            We build AI-powered products that automate operations, improve efficiency, and help businesses scale faster.
          </p>
        </div>

        {/* Main Featured Case Study Hero Card */}
        {mainProject && (
          <div className="case-study-header p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-dark/10 shadow-2xl mb-8 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                <div>
                  <span className="px-3.5 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-mono font-bold uppercase tracking-wider inline-block mb-4">
                    FEATURED CASE STUDY
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark mb-2">
                    {mainProject.title}
                  </h3>
                  <div className="flex items-center gap-2 text-dark/60 text-xs font-mono font-medium mb-6">
                    <Building2 size={14} className="text-accent" />
                    <span>Industry: {mainProject.industry}</span>
                  </div>
                </div>

                {/* Challenge / Solution / Timeline */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0 mt-0.5">
                      <Target size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-dark uppercase tracking-wider">THE CHALLENGE</h4>
                      <p className="text-xs sm:text-sm font-body text-dark/70">{mainProject.challenge}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-dark uppercase tracking-wider">OUR SOLUTION</h4>
                      <p className="text-xs sm:text-sm font-body text-dark/70">{mainProject.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-orange-600/10 text-orange-600 shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-dark uppercase tracking-wider">TIMELINE</h4>
                      <p className="text-xs sm:text-sm font-body text-dark/70 font-semibold">{mainProject.timeline}</p>
                    </div>
                  </div>
                </div>

                {/* Results Metrics Bar */}
                <div className="p-4 rounded-2xl bg-white/60 border border-dark/5 shadow-xs mb-8">
                  <p className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase mb-3">RESULTS DELIVERED</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {mainProject.results.map((res, i) => (
                      <div key={i}>
                        <div className="font-display font-black text-2xl text-dark">{res.value}</div>
                        <div className="text-[11px] font-body text-dark/65">{res.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link 
                    href={`/projects/${mainProject.slug}`}
                    className="flex items-center gap-2 px-6 py-3.5 bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg hover:bg-white transition-all"
                  >
                    VIEW CASE STUDY
                    <ArrowUpRight size={16} />
                  </Link>
                  <a 
                    href={mainProject.playStoreLink || mainProject.demoLink || "#"} 
                    target={mainProject.playStoreLink || mainProject.demoLink ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl border border-dark/15 shadow-xs hover:border-dark hover:bg-white transition-all"
                  >
                    {mainProject.category === "mobile" || mainProject.playStoreLink ? "OPEN ON PLAYSTORE" : "VIEW LIVE DEMO"}
                    <ArrowUpRight size={16} className="text-dark/50" />
                  </a>
                </div>

              </div>

              {/* Right Graphic Mockup */}
              <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] lg:h-[450px] w-full rounded-3xl overflow-hidden bg-white/40 border border-dark/5 shadow-inner flex items-center justify-center p-4">
                <Image
                  src={mainProject.coverImage}
                  alt={mainProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2"
                  priority
                />

                {/* Floating Metric Badge */}
                {mainProject.highlightMetric && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-dark/10 flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold uppercase text-dark/60">{mainProject.highlightMetric.title}</span>
                    <span className="text-2xl font-display font-black text-dark">{mainProject.highlightMetric.value}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-dark/10 flex items-center gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-dark/60 block">CUSTOMER SATISFACTION</span>
                    <div className="flex gap-1 my-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-500 text-amber-500" />)}
                    </div>
                    <span className="text-xs font-display font-bold text-dark">4.8 / 5.0</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3 Secondary Case Study Cards Grid */}
        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {secondaryProjects.map((project, idx) => {
            const icons = [Stethoscope, Users, ShoppingBag];
            const IconComp = icons[idx % icons.length];
            const externalLink = project.playStoreLink || project.demoLink;
            const isMobileApp = project.category === "mobile" || !!project.playStoreLink;

            return (
              <div 
                key={project.id} 
                className="case-study-card p-6 sm:p-7 rounded-3xl bg-white border border-dark/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
                      <IconComp size={24} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-dark/50 uppercase block">{project.industry}</span>
                      <h4 className="text-lg font-display font-bold text-dark leading-tight">{project.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-dark/70 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                  {project.highlightMetric && (
                    <div className="mb-6">
                      <span className="text-2xl font-display font-black text-accent">{project.highlightMetric.value}</span>
                      <span className="text-xs font-body font-semibold text-dark/70 ml-2">{project.highlightMetric.title}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-dark/5">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="inline-flex items-center gap-1.5 text-accent font-mono font-bold text-xs uppercase tracking-wider hover:gap-2.5 transition-all"
                  >
                    READ CASE STUDY <ArrowRight size={14} />
                  </Link>
                  <a 
                    href={externalLink || "#"} 
                    target={externalLink ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-dark/70 hover:text-accent font-mono font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    {isMobileApp ? "PLAY STORE" : "LIVE DEMO"} <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-md text-dark border border-dark/15 font-display font-bold uppercase tracking-wider text-sm rounded-xl shadow-md hover:shadow-lg hover:bg-accent hover:border-accent transition-all"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Bottom Call-to-Action Full-Width Banner */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Rocket size={28} />
            </div>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-dark">
                Ready to Build <span className="text-accent">Your Next AI Product?</span>
              </h3>
              <p className="text-xs sm:text-sm font-body text-dark/70 font-medium">
                Let's discuss your idea and turn it into a scalable AI-powered solution.
              </p>
            </div>
          </div>

          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 px-7 py-4 bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-all w-full sm:w-auto shrink-0"
          >
            BOOK FREE CONSULTATION
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
