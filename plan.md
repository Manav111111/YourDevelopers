Build a professional, visually stunning personal portfolio website using Next.js 14 (App Router), 
Tailwind CSS, and GSAP for animations. The site must attract high-end clients and reflect 
deep technical expertise across AI/ML, App Development, and Web Development.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Color Palette (use as CSS variables):
  --accent:     #ff8901   ← Primary orange — use for highlights, CTAs, badges, underlines
  --cream:      #f1ebe6   ← Light background sections
  --dark:       #191918   ← Dark background sections, primary text on light
  --white:      #ffffff
  --muted:      #888888   ← Subtext, labels

Typography:
  - Display/Hero font: "Syne" or "Clash Display" (Google Fonts / Fontshare) — bold, editorial
  - Body font: "DM Sans" or "General Sans" — clean, readable
  - Monospace accents: "JetBrains Mono" for tags/labels

Design Language:
  - Inspired by editorial/magazine layout (reference: Qurifolio style)
  - Giant typographic text overlapping with portrait images (like the reference image)
  - Text layers BEHIND and IN FRONT of images using z-index
  - Sections alternate between --dark and --cream backgrounds for strong contrast rhythm
  - Orange (#ff8901) used sparingly but powerfully: decorative shapes, hover states, badges, 
    cursor accents, dividers
  - Thin horizontal rules, oversized section numbers ("01", "02"), and small ALL-CAPS labels 
    ("HELLO", "ABOUT ME") as typographic accents
  - NO gradients. NO purple. NO neon. NO glassmorphism. Clean, confident, premium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Framework: Next.js 14 (App Router, TypeScript)
- Styling: Tailwind CSS with custom CSS variables in globals.css
- Animations: GSAP + ScrollTrigger (gsap/ScrollTrigger plugin)
- Smooth Scroll: Lenis (smooth-scroll library)
- Icons: Lucide React
- Image handling: next/image with proper optimization
- SEO: Full metadata in layout.tsx

Install packages:
  npm install gsap lenis lucide-react
  npm install @types/gsap --save-dev

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📐 PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app/
  layout.tsx          → Fonts, metadata, Lenis smooth scroll init
  page.tsx            → Assembles all sections in order
  globals.css         → CSS variables, base styles, custom cursor

components/
  layout/
    Navbar.tsx        → Sticky, transparent → solid on scroll
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Journey.tsx
  ui/
    AnimatedText.tsx  → Reusable GSAP text reveal component
    Badge.tsx         → Orange pill badges
    ProjectCard.tsx
    TimelineItem.tsx

lib/
  gsap.ts             → GSAP context + ScrollTrigger registration
  data.ts             → All content data (projects, skills, journey)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧭 NAVBAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fixed top, full width
- Logo: "YourName" in Syne Bold, with orange dot/square accent
- Nav links: HOME, ABOUT, SKILLS, PROJECTS, JOURNEY, CONTACT
- CTA button: "HIRE ME" → solid orange (#ff8901), dark text, sharp corners (no border-radius)
- On scroll: background transitions from transparent to --dark with a subtle border-bottom
- Mobile: Hamburger menu with full-screen dark overlay nav, links animate in with stagger
- GSAP: Navbar slides down from top on initial page load (y: -100 → y: 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🦸 SECTION 1 — HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layout (full viewport height, --cream background):
  - MASSIVE typographic headline split across 2 lines like the reference image:
      Line 1: "I'M A FULL-STACK" 
      Line 2: "DEVELOPER"
    Each word is enormous (clamp 80px–180px), black, bold
  - A professional portrait photo is positioned in the CENTER of the text, 
    overlapping both lines — z-index layered so the image appears BETWEEN the two lines
    (Line 1 behind image, Line 2 in front of image, OR use clip-path)
  - Orange decorative shapes: a bold "+" or asterisk "*" shape behind/beside the photo
  - Below the headline: a short tagline line — "AI · App · Web · Products that scale."
  - Two CTA buttons: 
      [VIEW PROJECTS] — filled orange  
      [DOWNLOAD CV] — outlined dark, no fill
  - Bottom-right: rotating circular text element "SCROLL DOWN ↓" spinning slowly (CSS animation)
  - Small badge in corner: "Available for Work ●" with a pulsing green dot

GSAP Animations (trigger on page load, NOT scroll):
  - Each letter of the headline does a staggered clip-path reveal from bottom 
    (clipPath: "inset(100% 0 0 0)" → "inset(0% 0 0 0)") with 0.05s stagger
  - Portrait photo: scale from 0.8 → 1.0 + fade in, delayed 0.3s after text
  - Orange shapes: rotate from -20deg → 0deg + fade in
  - Tagline and CTAs: y: 30 → 0 + opacity: 0 → 1, staggered

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 SECTION 2 — ABOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: --dark (#191918), white text

Layout (2-column grid):
  Left column:
    - Small ALL-CAPS label: "HELLO" in muted orange
    - Large heading: "I'M [YOUR NAME]" in white, Syne Bold
    - 2–3 sentence bio paragraph in DM Sans:
      "I'm a developer and problem-solver passionate about building intelligent, 
       scalable digital products. I work across AI/ML, mobile, and web — 
       turning complex ideas into clean, functional experiences."
    - Three stats with orange checkmark icons (like the reference image):
        ✓  2+   Years Experience
        ✓  10+  Projects Completed  
        ✓  5+   Happy Clients
    - Each stat has the number in large Syne Bold (white) and label in muted text

  Right column:
    - Grayscale portrait photo (different pose from hero)
    - Orange decorative line/bracket element overlapping the photo corner
    - Subtle background texture: scattered small orange dots grid pattern

GSAP ScrollTrigger:
  - Left column content: each element slides in from left (x: -60 → 0) with stagger
  - Right column photo: slides in from right (x: 60 → 0) simultaneously
  - Stats counter: numbers count up from 0 when scrolled into view

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ SECTION 3 — SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: --cream (#f1ebe6)

Layout:
  - Section header: small label "03 / SKILLS", large heading "What I Work With"
  - Three domain columns with icons:

    🧠 AI / Machine Learning
       Python · TensorFlow · PyTorch · Scikit-learn
       Computer Vision · NLP · LangChain · RAG Systems
       Jupyter · Hugging Face · OpenAI API

    📱 App Development  
       React Native · Flutter · Expo
       Firebase · Supabase · REST APIs
       iOS & Android Deployment

    🌐 Web Development
       Next.js · React · Node.js · TypeScript
       PostgreSQL · MongoDB · Prisma
       AWS · Vercel · Docker

  - Each skill is a pill/tag: dark background (#191918), white text, 
    hover → orange background, smooth transition
  - Domain headings have an orange underline accent

  - Below skills: a horizontal marquee/ticker strip with infinite scroll:
    "NEXT.JS · PYTHON · REACT NATIVE · TENSORFLOW · FLUTTER · NODE.JS · PYTORCH · AWS ·"
    Dark background strip, white text, orange separator dots

GSAP:
  - Skill tags appear with staggered scale(0.8) + opacity reveal on scroll
  - Marquee: pure CSS infinite scroll animation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 SECTION 4 — PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: --dark (#191918)

Layout:
  - Section label "04 / PROJECTS", heading "Featured Work"
  - Filter tabs: [ALL] [AI/ML] [APP DEV] [WEB DEV] — orange underline on active tab
  - Project grid: 
      - Featured project: full-width card, large (like reference image)
      - Below: 2-column grid of standard cards

  Each ProjectCard contains:
    - Project screenshot / mockup image (grayscale with orange tint on hover)
    - Domain badge: orange pill — "AI Design", "Web App", "Mobile", etc.
    - Project title in Syne Bold (white)
    - 1-line description
    - Tech stack pills (small, muted)
    - Hover reveals: [View Live ↗] and [GitHub →] buttons that slide up from bottom
    - Card border: 1px solid rgba(255,255,255,0.1), hover → orange border

  Sample projects to populate (replace with real data from lib/data.ts):
    1. AI-Powered Resume Screener — AI/ML — Python, LangChain, FastAPI, React
    2. HealthTrack — Mobile App — React Native, Firebase, ML Kit
    3. EcoMarket Platform — Web — Next.js, Stripe, PostgreSQL, Prisma
    4. Sentiment Analysis Dashboard — AI/ML — BERT, Flask, Chart.js
    5. Task Manager App — Mobile — Flutter, Supabase
    6. SaaS Landing Page Builder — Web — Next.js, Tailwind, Framer

GSAP ScrollTrigger:
  - Cards animate in with staggered y: 80 → 0 + opacity reveal
  - Filter tab click: GSAP timeline fades out non-matching cards, fades in matching

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛤️ SECTION 5 — JOURNEY (Timeline)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: --cream (#f1ebe6)

Layout:
  - Section label "05 / JOURNEY", heading "My Path So Far"
  - Vertical timeline centered on page with a thin vertical line (orange, #ff8901)
  - Timeline items alternate LEFT and RIGHT of the center line

  Each TimelineItem:
    - Orange circle node on the center line (with pulse animation)
    - Date range: "Jun 2023 – Aug 2023" in monospace, muted
    - Type badge: "INTERNSHIP" / "ACHIEVEMENT" / "EDUCATION" in orange ALL-CAPS pill
    - Organization name: bold Syne
    - Role/Title: subtitle
    - 2-line description
    - Tech tags at the bottom (small pills)

  Sample journey entries (populate from lib/data.ts):
    ● [2024] Internship — AI/ML Engineer @ [Company Name]
       Built NLP pipeline for document classification, deployed on AWS
       Tags: Python, BERT, AWS, FastAPI

    ● [2024] Achievement — Winner, National Hackathon [Name]
       1st place for building an AI-based crop disease detector
       Tags: Computer Vision, TensorFlow, React Native

    ● [2023] Internship — Full-Stack Developer @ [Company Name]
       Developed REST APIs and React frontend for internal dashboard
       Tags: Node.js, PostgreSQL, React

    ● [2023] Achievement — Open Source Contribution — [Repo Name]
       Merged PR adding multilingual support to [Library]

    ● [2022] Education — B.Tech Computer Science, [Your University]
       Relevant coursework: ML, Algorithms, Cloud Computing

GSAP ScrollTrigger:
  - Vertical orange line draws itself from top to bottom as user scrolls 
    (scaleY: 0 → 1 with transformOrigin: "top")
  - Each timeline card slides in from its respective side (left or right) 
    with opacity reveal, triggered when it enters viewport
  - Orange node: scale(0) → scale(1) + glow pulse when reached

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📬 SECTION 6 — CONTACT / FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: --dark (#191918)

Layout:
  - Big centered heading: "LET'S BUILD" on line 1, "SOMETHING GREAT" on line 2
    Line 2 has orange outline text style (text-stroke, no fill)
  - Subtext: "Open to internships, freelance projects, and full-time roles."
  - CTA button: "GET IN TOUCH →" — large, orange, sharp corners
  - Below: horizontal divider

  Footer row:
    Left: Logo + "© 2025 [Your Name]. All rights reserved."
    Center: Social links — GitHub · LinkedIn · Twitter/X · Email (with hover orange)
    Right: "Built with Next.js & ❤️"

GSAP:
  - Heading words split and animate in from bottom (SplitText or manual spans)
  - CTA button: magnetic hover effect (moves slightly toward cursor)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎬 GLOBAL ANIMATION RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Initialize Lenis smooth scroll in layout.tsx with a useEffect hook:
     const lenis = new Lenis(); 
     → Connect to GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000))

2. Register GSAP plugins in a client component or lib/gsap.ts:
     gsap.registerPlugin(ScrollTrigger)

3. All GSAP animations must use useGSAP() hook (from @gsap/react) inside 
   React components for proper cleanup

4. Standard entrance animation pattern for all sections:
     gsap.from(element, {
       y: 60,
       opacity: 0,
       duration: 0.9,
       ease: "power3.out",
       stagger: 0.12,
       scrollTrigger: {
         trigger: sectionRef.current,
         start: "top 80%",
         toggleActions: "play none none none"
       }
     })

5. Custom cursor (desktop only):
   - Small dark circle + larger orange ring follower
   - Cursor ring scales up 2x on hovering links/buttons
   - Implemented in a <CustomCursor /> client component added to layout.tsx

6. Page transitions:
   - On initial load: full-screen dark overlay (#191918) with your name centered,
     slides UP and exits to reveal the page (like a curtain raise)
   - Duration: 1.2s, ease: "expo.inOut"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 lib/data.ts — Content Schema
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Export typed arrays for:

export const projects: Project[] = [
  {
    id: 1,
    title: string,
    description: string,
    domain: "ai-ml" | "app-dev" | "web-dev",
    badge: string,          // e.g. "AI/ML"
    tech: string[],         // e.g. ["Python", "LangChain"]
    image: string,          // path to /public/projects/...
    liveUrl?: string,
    githubUrl?: string,
    featured: boolean
  }
]

export const journeyItems: JourneyItem[] = [
  {
    id: number,
    type: "internship" | "achievement" | "education",
    date: string,
    org: string,
    role: string,
    description: string,
    tags: string[]
  }
]

export const skills = {
  aiml: string[],
  appDev: string[],
  webDev: string[]
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ QUALITY CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- [ ] Fully responsive: mobile (375px), tablet (768px), desktop (1440px)
- [ ] All images use next/image with alt text
- [ ] No layout shift on fonts (use next/font)
- [ ] GSAP animations respect prefers-reduced-motion media query
- [ ] Lenis smooth scroll disabled on mobile for performance
- [ ] Custom cursor hidden on touch devices
- [ ] All sections have semantic HTML (section, article, h1-h3, nav)
- [ ] SEO: title, description, og:image in metadata
- [ ] TypeScript strict mode — no `any` types
- [ ] All data is editable from lib/data.ts only (no hardcoded content in components)