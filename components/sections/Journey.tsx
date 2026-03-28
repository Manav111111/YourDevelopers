"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { journeyItems } from "@/lib/data";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Journey() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate the horizontal line drawing left-to-right
    gsap.fromTo(
      ".timeline-line",
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-track",
          start: "top 70%",
        },
      }
    );

    // Staggered card reveal
    gsap.fromTo(
      ".timeline-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".timeline-track",
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-24 md:py-32 bg-cream text-dark border-t border-dark/5 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section heading */}
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-3">
              // Career Path
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              The Journey
            </h2>
          </div>
          <p className="hidden md:block text-sm text-gray-400 font-mono tracking-widest uppercase text-right">
            Scroll to explore →
          </p>
        </div>

        {/* Horizontal timeline track */}
        <div className="timeline-track relative">

          {/* Horizontal line — sits at the top of dots (20px = half of 40px dot area) */}
          <div className="timeline-line absolute left-0 right-0 top-[10px] h-[2px] bg-gradient-to-r from-accent via-accent/40 to-transparent rounded-full z-10" />

          {/* Scrollable items row */}
          <style dangerouslySetInnerHTML={{ __html: `.journey-scroll::-webkit-scrollbar{display:none}` }} />
          <div
            className="journey-scroll flex flex-row gap-6 md:gap-8 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {journeyItems.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}

            {/* End cap — faded marker */}
            <div className="shrink-0 flex flex-col items-center pt-0 w-16">
              <div className="w-4 h-4 rounded-full border-2 border-dark/20 bg-cream mt-[3px]" />
              <div className="w-[2px] h-8 bg-gradient-to-b from-dark/10 to-transparent mt-0" />
              <p className="font-mono text-[10px] text-dark/30 uppercase tracking-widest mt-2 -rotate-90 origin-top translate-y-10 translate-x-2">
                More soon
              </p>
            </div>
          </div>
        </div>

        {/* Scroll hint — mobile only */}
        <p className="mt-6 text-center text-xs text-gray-400 font-mono tracking-widest uppercase md:hidden">
          ← Swipe to explore →
        </p>

      </div>
    </section>
  );
}
