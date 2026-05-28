"use client";

import { journeyItems } from "@/lib/data";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Journey() {
  // Pair items into rows of 2
  const pairs: (typeof journeyItems)[] = [];
  for (let i = 0; i < journeyItems.length; i += 2) {
    pairs.push(journeyItems.slice(i, i + 2));
  }

  return (
    <section
      id="journey"
      className="relative bg-cream text-dark py-16 md:py-24"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">

        {/* Section heading */}
        <div className="flex items-center gap-6 mb-14">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest shrink-0">
            The Journey
          </h2>
          <div className="grow h-px bg-dark/10" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical center spine */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] pointer-events-none z-0">
            {/* track */}
            <div className="absolute inset-0 bg-dark/8 rounded-full" />
            {/* glow fill */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff8901] via-[#ff8901]/50 to-transparent rounded-full shadow-[0_0_10px_rgba(255,137,1,0.4)]" />
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-10">
            {pairs.map((pair, rowIdx) => (
              <div key={rowIdx} className="relative grid grid-cols-2 gap-0">

                {/* Center dot for this row */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#ff8901] bg-cream shadow-[0_0_12px_rgba(255,137,1,0.6)] transition-transform duration-300 hover:scale-125" />
                </div>

                {/* Left card */}
                <div className="pr-8 md:pr-12 flex justify-end">
                  {pair[0] && (
                    <div className="w-full max-w-sm">
                      <TimelineItem item={pair[0]} index={rowIdx * 2} />
                    </div>
                  )}
                </div>

                {/* Right card */}
                <div className="pl-8 md:pl-12 flex justify-start">
                  {pair[1] && (
                    <div className="w-full max-w-sm">
                      <TimelineItem item={pair[1]} index={rowIdx * 2 + 1} />
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
