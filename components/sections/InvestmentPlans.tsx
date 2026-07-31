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
  Check
} from "lucide-react";
import { investmentPlans, pricingCategories, InvestmentPlan } from "@/lib/data";

export function InvestmentPlans() {
  const [activeCategory, setActiveCategory] = useState<string>("one-time");
  const containerRef = useRef<HTMLElement>(null);

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
        
        {/* Upper Header Row & Category Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          
          {/* Header Title & Copy */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              <span className="h-4 w-1 bg-accent"></span>
              <span>INVESTMENT PLANS</span>
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-dark mb-4">
              Flexible Engagement Models <br />
              For Every Stage of <span className="text-accent">Growth.</span>
            </h3>

            <p className="text-dark/75 text-base md:text-lg font-body leading-relaxed font-medium">
              Whether you're validating an idea, launching an AI-powered SaaS, or scaling an enterprise platform, we offer engagement models tailored to your business goals.
            </p>
          </div>

          {/* Toggle Switch Container */}
          <div className="p-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-dark/15 shadow-sm inline-flex items-center gap-1 shrink-0 self-start lg:self-auto">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-white text-dark shadow-md border border-dark/10"
                    : "text-dark/60 hover:text-dark bg-transparent"
                }`}
              >
                {cat.id === "one-time" ? <Briefcase size={16} className="text-accent" /> : <Repeat size={16} className="text-accent" />}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch mb-16">
          {filteredPlans.map((plan) => {
            const isDark = plan.darkCard;
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`pricing-card p-7 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between relative group ${
                  isDark
                    ? "bg-[#191918] text-white border border-white/10 shadow-2xl"
                    : isFeatured
                    ? "bg-white border-2 border-accent shadow-2xl shadow-accent/15 lg:-translate-y-2 z-20"
                    : "bg-white border border-dark/10 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                }`}
              >
                {/* Most Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-dark font-mono text-[10px] font-black uppercase tracking-widest shadow-md">
                    {plan.badge || "MOST POPULAR"}
                  </div>
                )}

                <div>
                  {/* Top Header: Icon + Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className={`text-2xl font-display font-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>
                        {plan.title}
                      </h4>
                      <p className={`text-xs font-body font-medium ${isDark ? "text-white/60" : "text-dark/60"}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                    <div className={`p-3.5 rounded-2xl ${isDark ? "bg-white/10" : "bg-accent/10"}`}>
                      {getIcon(plan.icon, !!isDark)}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-dark/10 border-white/10">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-1 ${isDark ? "text-accent" : "text-accent"}`}>
                      {plan.priceSubtext || "STARTS AT"}
                    </span>
                    <div className={`text-3xl sm:text-4xl font-display font-black tracking-tight ${isDark ? "text-white" : "text-dark"}`}>
                      {plan.price}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-mono font-medium">
                        <span className={`flex items-center justify-center w-4 h-4 rounded-full shrink-0 mt-0.5 ${
                          isDark ? "bg-accent/20 text-accent" : "bg-accent/15 text-accent"
                        }`}>
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span className={isDark ? "text-white/80" : "text-dark/80"}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Timeline & Button */}
                <div className="pt-4 border-t border-dark/5 border-white/10">
                  {plan.timeline && (
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4 ${
                      isDark ? "bg-white/10 text-white/70" : "bg-dark/5 text-dark/70"
                    }`}>
                      <Clock size={12} className="text-accent" />
                      <span>{plan.timeline}</span>
                    </div>
                  )}

                  <a
                    href={plan.buttonLink}
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-display font-bold uppercase text-xs tracking-wider transition-all shadow-md ${
                      isDark
                        ? "bg-accent text-dark hover:bg-white hover:text-dark"
                        : isFeatured
                        ? "bg-accent text-dark hover:bg-dark hover:text-white"
                        : "bg-white/90 border border-dark/15 text-dark hover:bg-accent hover:border-accent"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowUpRight size={16} />
                  </a>
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

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-lg hover:bg-white hover:text-dark transition-all w-full md:w-auto shrink-0 relative z-10"
          >
            <span>Book Free Discovery Call</span>
            <ArrowRight size={18} />
          </a>

          {/* Ambient Glow background */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
