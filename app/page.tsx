import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { InvestmentPlans } from "@/components/sections/InvestmentPlans";
import { ResumeModal } from "@/components/ui/ResumeModal";

export default function Home() {
  return (
    <main className="w-full flex flex-col relative bg-cream">
      {/* Background Video (Permanent & Fixed across all sections) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 blur-[3px] opacity-40 sm:opacity-50 md:opacity-60 mix-blend-multiply"
        >
          <source src="/Create_an_elegant_seamless_.mp4" type="video/mp4" />
        </video>

        {/* Additional subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream z-0 pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <InvestmentPlans />
        <Footer />
        <ResumeModal />
      </div>
    </main>
  );
}
