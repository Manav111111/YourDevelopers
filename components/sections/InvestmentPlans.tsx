"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Rocket, 
  TrendingUp, 
  Brain, 
  Building2, 
  User, 
  Users, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Globe, 
  Briefcase, 
  Repeat,
  Check,
  Sparkles
} from "lucide-react";
import { investmentPlans, pricingCategories, InvestmentPlan } from "@/lib/data";
import { useConsultationModal } from "../modals/ConsultationModalContext";

export function InvestmentPlans() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<"one-time" | "subscription">("one-time");
  const { openModal } = useConsultationModal();

  useGSAP(() => {
    gsap.from(".pricing-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: ".pricing-grid",
        start: "top 80%",
      }
    });
  }, { scope: containerRef, dependencies: [activeCategory] });

  const filteredPlans = investmentPlans.filter(
    (plan) => plan.type === activeCategory
  );

  const getIcon = (iconName: string, isDark: boolean) => {
    const size = 24;
    switch (iconName) {
      case "sparkles":
        return <Sparkles size={size} className="text-accent" />;
      case "rocket":
        return <Rocket size={size} className={isDark ? "text-accent" : "text-accent"} />;
      case "trending":
        return <TrendingUp size={size} className="text-accent" />;
      case "brain":
        return <Brain size={size} className="text-accent" />;
      case "building":
        return <Building2 size={size} className="text-accent" />;
      case "user":
        return <User size={size} className="text-accent" />;
      case "users":
        return <Users size={size} className="text-accent" />;
      default:
        return <Rocket size={size} className="text-accent" />;
    }
  };

  const includedFeatures = [
    "Dedicated Project Manager",
    "Weekly Progress Reports",
    "Source Code Ownership",
    "Deployment Included",
    "Documentation & Guides",
    "NDA Available",
    "Post-Launch Support",
    "Cloud Setup"
  ];

  return (
    <section id="pricing" ref={containerRef} className="py-20 md:py-28 text-dark overflow-hidden relative z-10 bg-transparent">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-6 mb-16">
        <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-dark">
          Investment <span className="text-accent">Plans</span>
        </h2>
        <div className="grow h-px bg-dark/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper Header Row */}
        <div className="mb-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              <span className="h-4 w-1 bg-accent"></span>
              <span>INVESTMENT PLANS</span>
              <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-mono font-bold normal-case tracking-normal border border-accent/20">
                🎁 A small demo for your website/app is FREE!
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black leading-tight tracking-tight text-dark mb-4">
              Simple Pricing For Every <span className="text-accent">Digital Solution.</span>
            </h3>

            <p className="text-dark/75 text-base md:text-lg font-body leading-relaxed font-medium">
              We build modern websites, mobile applications, AI chatbots, and intelligent AI agents tailored to your business goals. Choose the service that best fits your requirements.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5 items-stretch mb-16">
          {filteredPlans.map((plan) => {
            const isDark = plan.darkCard;
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`pricing-card p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between relative group ${
                  isDark
                    ? "bg-[#191918] text-white border border-white/10 shadow-2xl"
                    : isFeatured
                    ? "bg-white border-2 border-accent shadow-2xl shadow-accent/15 z-20"
                    : "bg-white border border-dark/10 shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Most Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-dark font-mono text-[9px] font-black uppercase tracking-widest shadow-md">
                    {plan.badge || "MOST POPULAR"}
                  </div>
                )}

                <div>
                  {/* Top Header: Icon + Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-display font-bold mb-0.5 ${isDark ? "text-white" : "text-dark"}`}>
                        {plan.title}
                      </h4>
                      <p className={`text-[11px] font-body font-medium ${isDark ? "text-white/60" : "text-dark/60"}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                    <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/10" : "bg-accent/10"}`}>
                      {getIcon(plan.icon, !!isDark)}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5 pb-4 border-b border-dark/10 border-white/10">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-widest block mb-0.5 ${isDark ? "text-accent" : "text-accent"}`}>
                      {plan.priceSubtext || "STARTS AT"}
                    </span>
                    <div className={`text-2xl sm:text-3xl font-display font-black tracking-tight ${isDark ? "text-white" : "text-dark"}`}>
                      {plan.price}
                    </div>
                  </div>

                  {/* Features List (2-column layout to cut card height in half) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] font-mono font-medium">
                        <span className={`flex items-center justify-center w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 ${
                          isDark ? "bg-accent/20 text-accent" : "bg-accent/15 text-accent"
                        }`}>
                          <Check size={8} strokeWidth={3} />
                        </span>
                        <span className={`leading-tight ${isDark ? "text-white/80" : "text-dark/80"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Timeline & Button */}
                <div className="pt-3 border-t border-dark/5 border-white/10">
                  {plan.timeline && (
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold mb-3 ${
                      isDark ? "bg-white/10 text-white/70" : "bg-dark/5 text-dark/70"
                    }`}>
                      <Clock size={10} className="text-accent" />
                      <span>{plan.timeline}</span>
                    </div>
                  )}

                  <button
                    onClick={() => openModal(plan.title)}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold uppercase text-[11px] tracking-wider transition-all shadow-md cursor-pointer ${
                      isDark
                        ? "bg-accent text-dark hover:bg-white hover:text-dark"
                        : isFeatured
                        ? "bg-accent text-dark hover:bg-dark hover:text-white"
                        : "bg-white/90 border border-dark/15 text-dark hover:bg-accent hover:border-accent"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* What's Included Banner */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-white border border-dark/10 shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <h4 className="text-lg font-display font-black text-dark">
                What's <span className="text-accent">Included</span>
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full">
              {includedFeatures.map((feat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent mb-2">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[11px] font-body font-semibold text-dark/80 leading-tight">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-dark/10 shadow-lg flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">No Hidden Fees</div>
              <div className="text-xs font-body text-dark/65">Transparent pricing. Always.</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-dark/10 shadow-lg flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">100% NDA Friendly</div>
              <div className="text-xs font-body text-dark/65">Your ideas are safe with us.</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-dark/10 shadow-lg flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
              <CreditCard size={24} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">Flexible Payments</div>
              <div className="text-xs font-body text-dark/65">Milestone-based & monthly.</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-dark/10 shadow-lg flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
              <Globe size={24} />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">Global Delivery</div>
              <div className="text-xs font-body text-dark/65">Work across all timezones.</div>
            </div>
          </div>
        </div>

        {/* Bottom Custom Project CTA Banner (Dark Theme) */}
        <div className="w-full p-8 md:p-10 rounded-3xl bg-[#191918] text-white border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex items-center gap-5 relative z-10">
            <div className="p-4 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-lg">
              <Rocket size={32} />
            </div>
            <div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                Need Something <span className="text-accent">Completely Custom?</span>
              </h3>
              <p className="text-xs sm:text-sm font-body text-white/70 font-medium mt-1">
                Every business is different. Let's discuss your requirements and build the perfect solution.
              </p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-lg hover:bg-white hover:text-dark transition-all w-full md:w-auto shrink-0 relative z-10 cursor-pointer"
          >
            <span>Book Free Discovery Call</span>
            <ArrowRight size={18} />
          </button>

          {/* Ambient Glow background */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
