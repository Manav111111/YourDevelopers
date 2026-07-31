"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Cpu, Rocket, ShieldCheck, Handshake, TrendingUp, Award, Calendar, Headphones } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".why-content > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-container",
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 relative text-dark overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 why-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Office / Workspace Graphic Image */}
          <div className="lg:col-span-6 relative why-content h-[420px] sm:h-[480px] lg:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl border border-dark/10 bg-white group">
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
          <div className="lg:col-span-6 why-content flex flex-col justify-center">
            
            {/* Tag / Category */}
            <div className="flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              <span className="h-0.5 w-6 bg-accent"></span>
              <span>WHY CHOOSE US</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black leading-[1.15] tracking-tight text-dark mb-6">
              Building <span className="text-accent">Technology</span> <br />
              That Drives <br />
              <span className="text-accent">Business Growth.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-3 text-dark/75 text-base md:text-md font-body leading-relaxed mb-8">
              <p>
                We partner with startups and growing businesses to design, develop, and launch AI-powered products that solve real business problems.
              </p>
              <p>
                From strategy and UX to engineering and deployment, our team builds scalable software that delivers measurable results.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-sm sm:text-base mb-1">AI-First Development</h4>
                  <p className="text-xs text-dark/65 font-body leading-normal">Every solution is built with modern AI capabilities from day one.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-sm sm:text-base mb-1">Fast MVP Delivery</h4>
                  <p className="text-xs text-dark/65 font-body leading-normal">Launch products quickly without sacrificing quality.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-sm sm:text-base mb-1">Enterprise Quality</h4>
                  <p className="text-xs text-dark/65 font-body leading-normal">Scalable architecture built for long-term growth.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Handshake size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-sm sm:text-base mb-1">Long-Term Partnership</h4>
                  <p className="text-xs text-dark/65 font-body leading-normal">We stay after launch with maintenance, optimization, and continuous improvements.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Banner Stats Row */}
        <div className="mt-16 w-full p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-dark/10 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-dark/10">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 pt-2 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <TrendingUp size={24} />
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-dark leading-none">50+</div>
              <div className="text-xs sm:text-sm font-body font-semibold text-dark/70 mt-1">Projects Delivered</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Award size={24} />
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-dark leading-none">98%</div>
              <div className="text-xs sm:text-sm font-body font-semibold text-dark/70 mt-1">Client Satisfaction</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Calendar size={24} />
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-dark leading-none">7 Days</div>
              <div className="text-xs sm:text-sm font-body font-semibold text-dark/70 mt-1">Average MVP Kickoff</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
              <Headphones size={24} />
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-dark leading-none">24/7</div>
              <div className="text-xs sm:text-sm font-body font-semibold text-dark/70 mt-1">Technical Support</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
