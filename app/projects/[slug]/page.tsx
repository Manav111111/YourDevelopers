import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/data";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Building2, 
  Clock, 
  Target, 
  Sparkles, 
  Check, 
  Rocket, 
  Code2, 
  ExternalLink 
} from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | YourDevelopers",
    };
  }

  const title = `${project.title} — Case Study | YourDevelopers`;
  const description = project.shortDescription;
  const ogImage = project.mockupImage || "/og-image.png";
  const absoluteImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `https://yourdevelopers.vercel.app${ogImage}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yourdevelopers.vercel.app/projects/${project.slug}`,
      siteName: "YourDevelopers",
      type: "article",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
      creator: "@yourdevelopers",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <main className="w-full flex flex-col relative bg-cream min-h-screen">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream z-0 pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <article className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1">
          
          {/* Back Navigation */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-dark/70 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Case Studies</span>
          </Link>

          {/* Hero Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1.5 rounded-full bg-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex items-center gap-2 text-dark/60 text-xs font-mono font-medium">
                <Building2 size={14} className="text-accent" />
                <span>{project.industry}</span>
              </div>
              <div className="flex items-center gap-2 text-dark/60 text-xs font-mono font-medium">
                <Clock size={14} className="text-accent" />
                <span>{project.timeline}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] text-dark mb-6">
              {project.title}
            </h1>

            <p className="text-dark/80 text-lg md:text-xl font-body leading-relaxed max-w-3xl font-medium mb-8">
              {project.shortDescription}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              {project.category === "mobile" || project.playStoreLink ? (
                <a
                  href={project.playStoreLink || project.demoLink || "#"}
                  target={project.playStoreLink || project.demoLink ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-dark font-display font-bold uppercase text-xs tracking-wider rounded-xl shadow-md hover:bg-white transition-all"
                >
                  <span>View on PlayStore</span>
                  <ExternalLink size={15} />
                </a>
              ) : (
                <a
                  href={project.demoLink || "#"}
                  target={project.demoLink ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-dark font-display font-bold uppercase text-xs tracking-wider rounded-xl shadow-md hover:bg-white transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/80 border border-dark/15 text-dark font-display font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-white transition-all"
                >
                  <Code2 size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Main Cover Image Display */}
          <div className="relative h-[320px] sm:h-[450px] md:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl border border-dark/10 mb-16 bg-white/60 backdrop-blur-md">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Business Results Overview Bar */}
          <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-dark/10 shadow-xl mb-16">
            <p className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-6">BUSINESS IMPACT & RESULTS DELIVERED</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.results.map((res, i) => (
                <div key={i} className="p-4 rounded-2xl bg-cream/50 border border-dark/5">
                  <div className="font-display font-black text-3xl md:text-4xl text-dark mb-1">{res.value}</div>
                  <div className="text-xs font-body font-medium text-dark/70">{res.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Challenge */}
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 w-fit mb-6">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark mb-4">The Challenge</h3>
              <p className="text-dark/75 font-body leading-relaxed text-base">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent w-fit mb-6">
                <Sparkles size={26} />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark mb-4">Our Solution</h3>
              <p className="text-dark/75 font-body leading-relaxed text-base">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Implementation Process & Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Process */}
            {project.process && (
              <div className="lg:col-span-7 p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-dark mb-6">Engineering Process</h3>
                <div className="space-y-4">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-dark font-mono text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-body text-dark/80 font-medium leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {project.techStack && (
              <div className="lg:col-span-5 p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-dark/10 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-dark mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-cream border border-dark/10 text-xs font-mono font-bold text-dark">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Testimonial (if available) */}
          {project.testimonial && (
            <div className="p-8 md:p-10 rounded-3xl bg-accent/10 border border-accent/20 shadow-lg mb-16">
              <p className="font-display font-bold text-lg md:text-2xl text-dark italic mb-6 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div>
                <span className="font-display font-bold text-dark text-base block">{project.testimonial.author}</span>
                <span className="font-mono text-xs text-dark/60">{project.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Previous / Next Case Study Navigation */}
          <div className="border-t border-dark/10 pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-dark/10 hover:bg-white transition-all flex flex-col items-start group"
            >
              <span className="text-[11px] font-mono text-dark/50 uppercase font-bold mb-1">Previous Case Study</span>
              <span className="font-display font-bold text-dark text-lg group-hover:text-accent transition-colors">
                ← {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-dark/10 hover:bg-white transition-all flex flex-col items-end text-right group"
            >
              <span className="text-[11px] font-mono text-dark/50 uppercase font-bold mb-1">Next Case Study</span>
              <span className="font-display font-bold text-dark text-lg group-hover:text-accent transition-colors">
                {nextProject.title} →
              </span>
            </Link>
          </div>

          {/* Bottom Consultation CTA Banner */}
          <div className="w-full p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-dark/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-accent text-dark font-bold shrink-0 shadow-md">
                <Rocket size={32} />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-dark">
                  Need a similar <span className="text-accent">AI solution built?</span>
                </h3>
                <p className="text-sm font-body text-dark/70 font-medium">
                  Let's schedule a strategy call and discuss your product roadmap.
                </p>
              </div>
            </div>

            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark font-display font-bold uppercase tracking-wider text-sm rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-all w-full sm:w-auto shrink-0"
            >
              BOOK FREE CONSULTATION
              <ArrowRight size={18} />
            </a>
          </div>

        </article>

        <Footer />
      </div>
    </main>
  );
}
