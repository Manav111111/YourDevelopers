"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0,
  triggerOnScroll = true 
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const chars = containerRef.current.querySelectorAll(".char");
    
    const animation = gsap.fromTo(chars, 
      {
        yPercent: 100,
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        yPercent: 0,
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        delay: triggerOnScroll ? 0 : delay,
      }
    );

    if (triggerOnScroll) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        animation: animation,
        start: "top 85%",
        toggleActions: "play none none none"
      });
    }

    return () => {
      animation.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden flex flex-wrap ${className}`}>
      {text.split(" ").map((word, wIdx) => (
        <span key={`word-${wIdx}`} className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em]">
          {word.split("").map((char, cIdx) => (
            <span key={`char-${wIdx}-${cIdx}`} className="char inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
