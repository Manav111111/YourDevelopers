import { AnimatedText } from "@/components/ui/AnimatedText";

export function Footer() {
  return (
    <footer id="contact" className="bg-dark border-t border-white/5 pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="mb-24 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tighter hover-target">
            Let's build something <br className="hidden md:block"/>
            <span className="text-accent italic font-light pr-4">extraordinary</span> together.
          </h2>
          <p className="text-xl text-muted font-body max-w-2xl mb-12">
            Currently available for freelance projects and exciting full-time opportunities in AI/ML, Apps, and Web Development.
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-block text-2xl md:text-5xl font-mono text-accent hover-target relative after:content-[''] after:absolute after:-bottom-2 after:-right-4 after:-left-4 after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left hover:text-white transition-colors duration-300"
          >
            hello@example.com
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-12 gap-6">
          <p className="text-muted font-mono text-sm">
            © {new Date().getFullYear()} YourName. All rights reserved. Built with Next.js & GSAP.
          </p>
          
          <div className="flex gap-8">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-accent font-mono text-sm uppercase tracking-wider transition-colors hover-target relative overflow-hidden group">
              <span className="relative z-10">Twitter</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-accent font-mono text-sm uppercase tracking-wider transition-colors hover-target relative overflow-hidden group">
              <span className="relative z-10">LinkedIn</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-accent font-mono text-sm uppercase tracking-wider transition-colors hover-target relative overflow-hidden group">
              <span className="relative z-10">GitHub</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
