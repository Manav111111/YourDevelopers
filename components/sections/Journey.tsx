"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { journeyItems } from "@/lib/data";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Journey() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Reveal central line
    gsap.fromTo(".timeline-line", 
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1
        }
      }
    );

    // Reveal items
    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
    
    items.forEach((item, i) => {
      // Determine direction based on index (even = right side, odd = left side on desktop)
      const isEven = i % 2 === 0;
      const xOffset = window.innerWidth >= 768 ? (isEven ? 50 : -50) : 50;

      gsap.fromTo(item, 
        { x: xOffset, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="journey" ref={containerRef} className="py-24 md:py-32 bg-dark text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Visual embellishments */}
      <div className="absolute -top-[20vw] -right-[20vw] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 timeline-container relative z-10">
        
        <div className="flex flex-col items-center gap-4 mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-center">The Journey</h2>
          <p className="text-muted font-mono tracking-widest text-sm uppercase">Experiences & Milestones</p>
        </div>

        <div className="relative">
          {/* Desktop Central Line */}
          <div className="timeline-line absolute left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent transform -translate-x-1/2 rounded-full hidden md:block" />
          
          {/* Mobile Left Line */}
          <div className="timeline-line absolute left-[22px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent transform rounded-full md:hidden" />
          
          <div className="relative flex flex-col items-center w-full">
            {journeyItems.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
