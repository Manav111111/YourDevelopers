"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { journeyItems } from "@/lib/data";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Journey() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      // Create ScrollTrigger pinning and animation for glowing line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-track",
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // Staggered card reveal alternating left and right
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item: any, i) => {
        const isEven = i % 2 === 0;
        // The inner card
        const card = item.querySelector('[data-timeline-card]');
        if (card) {
          gsap.fromTo(
            card,
            { 
              y: 60, 
              opacity: 0,
              x: window.innerWidth >= 768 ? (isEven ? -40 : 40) : 0, 
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-24 md:py-32 bg-cream text-dark relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-4 relative z-10 w-full">
        
        {/* Section heading */}
        <div className="text-center mb-20 md:mb-32">
          <p className="text-[#ff8901] font-mono text-xs md:text-sm tracking-[0.2em] font-semibold mb-4 uppercase">
            Professional Evolution
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            The Journey
          </h2>
          <p className="mt-6 text-dark/50 max-w-2xl mx-auto font-sans leading-relaxed text-sm md:text-base">
            A chronological mapping of technical pivots, architectural milestones, and leadership growth across building digital experiences.
          </p>
        </div>

        {/* Vertical timeline track */}
        <div className="timeline-track relative w-full pt-4 pb-10">

          {/* Spine — desktop: centred, mobile: 18 px from left (matches dot left-[1.125rem]) */}
          <div className="absolute left-4.5 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0">
            <div className="absolute inset-0 bg-dark/5 rounded-full" />
            <div className="timeline-line absolute top-0 w-full h-full bg-linear-to-b from-[#ff8901] via-[#ff8901]/60 to-transparent shadow-[0_0_10px_rgba(255,137,1,0.5)] rounded-full origin-top" />
          </div>

          {/* Items */}
          <div className="relative z-10 w-full">
            {journeyItems.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
