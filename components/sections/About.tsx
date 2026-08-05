"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import { Cpu, Rocket, ShieldCheck, Handshake, TrendingUp, Award, Calendar, Headphones } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".why-graphic", {
      x: -40,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".why-content", {
      y: 40,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "expo.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".why-feature-card", {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "expo.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: ".why-feature-grid",
        start: "top 88%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".why-stat-card", {
      y: 35,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "expo.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: ".why-stat-grid",
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 relative text-dark overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 why-container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Office / Workspace Graphic Image */}
          <div className="lg:col-span-6 relative why-graphic h-[420px] sm:h-[480px] lg:h-[520px] w-full rounded-3xl overflow-hidden group shadow-xl border border-dark/10">
            <Image
              src="/why-choose-us.png"
              alt="Why Choose Us Workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Text & Features Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Tag / Category */}
            <div className="why-content flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
              <span className="h-0.5 w-6 bg-accent"></span>
              <span>WHY CHOOSE US</span>
            </div>

            {/* Headline */}
            <h2 className="why-content text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-tight tracking-tight text-dark mb-3">
              Building <span className="text-accent">Technology</span> That Drives <span className="text-accent">Business Growth.</span>
            </h2>

            {/* Paragraphs */}
            <div className="why-content space-y-2 text-dark/75 text-xs sm:text-sm font-body leading-relaxed mb-5">
              <p>
                We partner with startups and businesses to design, develop, and launch AI-powered products that solve real business problems and deliver measurable growth.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid */}
            <div className="why-feature-grid grid grid-cols-1 sm:grid-cols-2 gap-3.5">

              {/* Feature 1 */}
              <div className="why-feature-card p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-xs sm:text-sm mb-0.5">AI-First Architecture</h4>
                  <p className="text-[11px] sm:text-xs text-dark/65 font-body leading-snug">Smart automation & intelligent systems built for scale.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="why-feature-card p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-xs sm:text-sm mb-0.5">Fast MVP Delivery</h4>
                  <p className="text-[11px] sm:text-xs text-dark/65 font-body leading-snug">Launch products quickly without sacrificing quality.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="why-feature-card p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-xs sm:text-sm mb-0.5">Enterprise Security</h4>
                  <p className="text-[11px] sm:text-xs text-dark/65 font-body leading-snug">Robust code standards, 100% NDA & complete IP ownership.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="why-feature-card p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Handshake size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-xs sm:text-sm mb-0.5">Long-Term Partnership</h4>
                  <p className="text-[11px] sm:text-xs text-dark/65 font-body leading-snug">Post-launch maintenance, optimization & improvements.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Banner Stats Row */}
        <div className="why-stat-grid mt-12 sm:mt-16 w-full p-4 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">

          {/* Stat 1 */}
          <div className="why-stat-card flex flex-col sm:flex-row items-center text-center sm:text-left gap-2.5 sm:gap-4 p-3.5 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border sm:border-0 border-dark/5">
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <TrendingUp size={20} className="sm:hidden" />
              <TrendingUp size={24} className="hidden sm:block" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-3xl text-dark leading-none">50+</div>
              <div className="text-[11px] sm:text-sm font-body font-semibold text-dark/70 mt-1">Projects Delivered</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="why-stat-card flex flex-col sm:flex-row items-center text-center sm:text-left gap-2.5 sm:gap-4 p-3.5 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border sm:border-0 border-dark/5">
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Award size={20} className="sm:hidden" />
              <Award size={24} className="hidden sm:block" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-3xl text-dark leading-none">98%</div>
              <div className="text-[11px] sm:text-sm font-body font-semibold text-dark/70 mt-1">Client Satisfaction</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="why-stat-card flex flex-col sm:flex-row items-center text-center sm:text-left gap-2.5 sm:gap-4 p-3.5 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border sm:border-0 border-dark/5">
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Calendar size={20} className="sm:hidden" />
              <Calendar size={24} className="hidden sm:block" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-3xl text-dark leading-none">7 Days</div>
              <div className="text-[11px] sm:text-sm font-body font-semibold text-dark/70 mt-1">Average MVP Kickoff</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="why-stat-card flex flex-col sm:flex-row items-center text-center sm:text-left gap-2.5 sm:gap-4 p-3.5 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border sm:border-0 border-dark/5">
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Headphones size={20} className="sm:hidden" />
              <Headphones size={24} className="hidden sm:block" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-3xl text-dark leading-none">24/7</div>
              <div className="text-[11px] sm:text-sm font-body font-semibold text-dark/70 mt-1">Technical Support</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
