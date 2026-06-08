"use client";

import { useEffect, useState, useRef } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-resume", handleOpen);
    window.addEventListener("close-resume", handleClose);

    return () => {
      window.removeEventListener("open-resume", handleOpen);
      window.removeEventListener("close-resume", handleClose);
    };
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const { contextSafe } = useGSAP({ scope: overlayRef });

  const closeModal = contextSafe(() => {
    // Animate out
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
      }
    });

    tl.to(containerRef.current, {
      scale: 0.95,
      opacity: 0,
      y: 15,
      duration: 0.25,
      ease: "power2.in"
    });
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in"
    }, "-=0.15");
  });

  useGSAP(() => {
    if (isOpen) {
      // Set initial state
      gsap.set(overlayRef.current, { opacity: 0, display: "flex" });
      gsap.set(containerRef.current, { scale: 0.9, opacity: 0, y: 30 });

      // Animate in
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(containerRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        delay: 0.05
      });
    }
  }, { dependencies: [isOpen] });

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#191918]/80 backdrop-blur-md p-4 md:p-6 cursor-pointer"
      onClick={closeModal}
    >
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl h-[85vh] bg-[#f1ebe6] rounded-2xl border border-[#191918]/10 shadow-2xl flex flex-col overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#191918]/10 bg-white">
          <div className="flex flex-col">
            <h3 className="font-display font-bold text-[#191918] text-lg md:text-xl uppercase tracking-wider">
              Mohit Aggarwal — Resume
            </h3>
            <span className="font-mono text-[10px] text-[#191918]/60 uppercase tracking-widest mt-0.5">
              Full Stack AI Developer
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Download Button */}
            <a 
              href="/Mohit_AI.pdf" 
              download="Mohit_Aggarwal_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff8901] text-[#191918] rounded-xl font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#191918] hover:text-white transition-colors duration-300 shadow-xs cursor-pointer"
              title="Download Resume"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Open in New Tab Button */}
            <a 
              href="/Mohit_AI.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-[#191918]/60 hover:text-[#191918] hover:bg-[#191918]/5 rounded-xl transition-colors cursor-pointer"
              title="Open in New Tab"
            >
              <ExternalLink size={18} />
            </a>

            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="inline-flex items-center justify-center p-2 text-[#191918]/60 hover:text-[#191918] hover:bg-[#191918]/5 rounded-xl transition-colors cursor-pointer"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-[#2b2b2b] p-2 md:p-4 flex items-center justify-center relative">
          <iframe 
            ref={iframeRef}
            src="/Mohit_AI.pdf#toolbar=0"
            className="w-full h-full rounded-lg bg-white border border-[#191918]/5 shadow-inner"
            title="Resume PDF Viewer"
          />
          
          {/* Mobile fallback helper */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#191918]/95 text-[#f1ebe6] border border-white/10 px-4 py-2 rounded-full text-xs font-mono tracking-wider flex items-center gap-2 shadow-lg md:hidden">
            <span>Scroll preview or use download button</span>
          </div>
        </div>
      </div>
    </div>
  );
}
