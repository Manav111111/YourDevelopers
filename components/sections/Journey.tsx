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

      // Staggered card reveal
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item, index) => {
        // The inner card
        const card = item.querySelector('[data-timeline-card]');
        if (card) {
          gsap.fromTo(
            card,
            { 
              y: 60, 
              opacity: 0,
              x: window.innerWidth >= 768 ? 40 : 0, 
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

        if (index === items.length - 1) {
          const scrollDistance = 400;
          gsap.to(".journey-header", {
            y: -scrollDistance,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: `top ${160 + index * 32 + scrollDistance}px`, 
              end: `top ${160 + index * 32}px`, 
              scrub: true,
            }
          });
          return;
        }

        gsap.to(item, {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: items[index + 1],
            start: "top bottom",
            end: `top ${160 + (index + 1) * 32}px`,
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-24 md:py-32 bg-cream text-dark relative"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-4 relative z-10 w-full">
        
        {/* Section heading */}
        <div className="sticky top-16 md:top-16 z-20 bg-cream py-6 sm:py-8 mb-6 sm:mb-10 flex items-center gap-6 journey-header">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest">The Journey</h2>
          <div className="grow h-px bg-dark/10"></div>
        </div>
        {/* Vertical timeline track */}
        <div className="timeline-track mx-auto max-w-2xl relative pt-4 pb-10">

          {/* Spine */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0">
            <div className="absolute inset-0 bg-dark/5 rounded-full" />
            <div className="timeline-line absolute top-0 w-full h-full bg-linear-to-b from-[#ff8901] via-[#ff8901]/60 to-transparent shadow-[0_0_10px_rgba(255,137,1,0.5)] rounded-full origin-top" />
          </div>

          {/* Items */}
          <div className="relative z-10 w-full flex flex-col gap-16 sm:gap-32 md:gap-40 pb-24">
            {journeyItems.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
