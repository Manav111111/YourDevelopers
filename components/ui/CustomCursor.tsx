"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Disable custom cursor on mobile or if reduced motion is preferred
    if (isMobile || prefersReducedMotion || !cursorRef.current) return;

    const cursor = cursorRef.current;
    
    // Move cursor quickly
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      // Offset by half the cursor width/height to center it on the mouse
      xTo(e.clientX - 16);
      yTo(e.clientY - 16);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Expand on links and buttons
    const attachHoverEvents = () => {
      const interactables = document.querySelectorAll("a, button, [role='button'], .hover-target");
      
      const onEnter = () => gsap.to(cursor, { scale: 2, backgroundColor: "rgba(255, 137, 1, 0.2)", border: "1px solid #ff8901", duration: 0.3 });
      const onLeave = () => gsap.to(cursor, { scale: 1, backgroundColor: "transparent", border: "2px solid #ff8901", duration: 0.3 });

      interactables.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      return () => {
        interactables.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      };
    };

    // Attach initial events
    let cleanupHover = attachHoverEvents();

    // Setup mutation observer to attach events to newly added elements
    const observer = new MutationObserver(() => {
      cleanupHover();
      cleanupHover = attachHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cleanupHover();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent bg-transparent pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
