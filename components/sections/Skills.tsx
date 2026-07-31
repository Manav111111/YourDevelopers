"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Bot, 
  Code2, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Users 
} from "lucide-react";

export function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax scrolling for marquee
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.from(".service-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  const servicesData = [
    {
      id: "ai-dev",
      title: "AI Development",
      icon: Bot,
      description: "Custom AI solutions tailored to automate tasks, generate insights, and deliver business value.",
      bullets: ["Custom AI Agents", "LLM Integration", "Chatbots", "RAG Systems", "Automation"]
    },
    {
      id: "web-dev",
      title: "Web Development",
      icon: Code2,
      description: "Modern, scalable web platforms built for speed, security, and high conversion.",
      bullets: ["Custom Web Apps", "SaaS Platforms", "Admin Dashboards", "API Development", "Modern UI"]
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      icon: Smartphone,
      description: "High-performance cross-platform mobile apps for iOS and Android.",
      bullets: ["Android", "iOS", "React Native", "Flutter", "Cross-platform Apps"]
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Robust cloud architecture, deployment pipelines, and infrastructure scaling.",
      bullets: ["AWS", "Azure", "CI/CD", "Docker", "Infrastructure"]
    },
    {
      id: "automation",
      title: "Automation Solutions",
      icon: Sparkles,
      description: "Streamline operations with end-to-end automated workflows and smart integrations.",
      bullets: ["Business Automation", "Workflow Automation", "CRM Integration", "Internal Tools", "AI Workflows"]
    },
    {
      id: "mvp-strategy",
      title: "MVP & Product Strategy",
      icon: Rocket,
      description: "Rapidly validate concepts, architect MVPs, and launch products faster.",
      bullets: ["Product Discovery", "Wireframes", "Architecture", "Rapid MVP", "Launch Strategy"]
    }
  ];

  return (
    <section id="skills" ref={containerRef} className="skills-section py-16 md:py-24 text-dark overflow-hidden relative z-10 bg-transparent">

      {/* Section Header Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-6 mb-24">
        <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-dark">Our <span className="text-accent">Services</span></h2>
        <div className="grow h-px bg-dark/10"></div>
      </div>

      {/* Background Marquee Horizontal Bar (Kept EXACTLY as original) */}
      <div className="absolute top-30 sm:top-28 left-0 w-[120vw] -ml-[10vw] mb-20 -rotate-3 bg-accent py-4 sm:py-6 overflow-hidden shadow-xl z-0 pointer-events-none">
        <div className="marquee-inner flex whitespace-nowrap w-[200%]">
          {Array(8).fill(
            <span className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase tracking-widest text-[#111] px-6 sm:px-10">
              AI/ML <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> WEB DEV <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> APP DEV <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span> TOOLS <span className="text-white/40 px-3 sm:px-6 font-mono text-xl sm:text-2xl font-light">{'//'}</span>
            </span>
          ).map((item, i) => (
            <div key={i} className="inline-flex items-center">{item}</div>
          ))}
        </div>
      </div>

      {/* Main Services Container */}
      <div className="pb-12 max-w-7xl mx-auto px-6 md:px-12 relative z-20 mt-[10vh] sm:mt-[14vh] md:mt-[20vh]">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              <span className="h-4 w-1 bg-accent"></span>
              <span>OUR SERVICES</span>
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-dark mb-4">
              Solutions We Build <br />
              For <span className="text-accent">Modern Businesses.</span>
            </h3>

            <p className="text-dark/75 text-base md:text-lg font-body leading-relaxed font-medium">
              We design, engineer, and deploy end-to-end AI applications, custom web platforms, and automated systems tailored for fast-growing companies.
            </p>
          </div>

          {/* Compact Graphic Preview */}
          <div className="hidden lg:flex relative w-64 h-36 rounded-2xl overflow-hidden shadow-lg border border-dark/10 shrink-0 bg-white/70 backdrop-blur-md">
            <Image
              src="/services-graphic.png"
              alt="Services Preview Graphic"
              fill
              sizes="256px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* 3x2 Service Cards Grid (PRIMARY FOCUS) */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card p-7 sm:p-8 rounded-3xl bg-white border border-dark/10 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon */}
                <div className="p-4 rounded-2xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-dark transition-colors duration-300 shadow-sm">
                  <service.icon size={30} />
                </div>

                {/* Title & Description */}
                <h4 className="text-2xl font-display font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm font-body text-dark/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2.5 mb-8 border-t border-dark/5 pt-5">
                  {service.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-mono font-medium text-dark/80">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-accent/15 text-accent shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-accent font-mono font-bold text-xs uppercase tracking-wider hover:gap-3 transition-all pt-4 border-t border-dark/5"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Horizontal Trust Strip */}
        <div className="w-full p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-dark/10">
          
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">AI-First Development</div>
              <div className="text-xs font-body text-dark/65">Intelligent solutions built from the ground up.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">Agile Delivery</div>
              <div className="text-xs font-body text-dark/65">Rapid development with agile methodology.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">Enterprise Quality</div>
              <div className="text-xs font-body text-dark/65">Secure, scalable & built for performance.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
              <Users size={22} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">Long-Term Partnership</div>
              <div className="text-xs font-body text-dark/65">We grow with you beyond launch.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
