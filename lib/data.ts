export type Project = {
  id: number;
  title: string;
  description: string;
  domain: "ai-ml" | "app-dev" | "web-dev";
  mockupType?: "laptop" | "mobile";
  badge: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projectTechLogos: Record<string, string> = {
  // Languages
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  // AI / ML
  "LangChain": "https://cdn.simpleicons.org/langchain/000000",
  "LangGraph": "https://cdn.simpleicons.org/langchain/000000",
  "FastMCP": "https://cdn.simpleicons.org/fastapi/009688",
  "Groq": "/logos/openai-svgrepo-com.svg",
  "Qdrant": "https://cdn.simpleicons.org/qdrant/DC2626",
  "Gemini": "https://cdn.simpleicons.org/googlegemini/8E75B2",
  "BERT": "/logos/hugging-face-svgrepo-com.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "OpenAI": "/logos/openai-svgrepo-com.svg",
  "Hugging Face": "/logos/hugging-face-svgrepo-com.svg",
  "ML Kit": "https://www.gstatic.com/devrel-devsite/prod/vb794fa47da5b73ba8b76d3bace2e1aba14ad59bb8da3e9f40e5e696f4fdadee2/firebase/images/favicon.png",
  "Google Colab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg",

  // Backend Frameworks
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "NodeJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",

  // Frontend
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Framer": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
  "Chart.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",

  // Mobile
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Expo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  "Android": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "Play Store": "/logos/google-play-store-logo-svgrepo-com.svg",

  // Databases / Backend-as-a-Service
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  // Payments / Services
  "Stripe": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",

  // DevOps / Cloud
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Google Maps": "/logos/google-maps-svgrepo-com.svg",
};

export type JourneyItem = {
  id: number;
  type: "internship" | "achievement" | "education" | "experience";
  date: string;
  org: string;
  role: string;
  description: string;
  tags: string[];
};

// =========================================================
//                  Projects Sections
// =========================================================


export const projects: Project[] = [
  {
    id: 1,
    title: "DevOps Agent",
    description: "Built a self-healing DevOps agent using LangGraph and FastMCP for autonomous dockerized service remediation, multi-stage pipeline for automated root-cause analysis, Human-in-Loop risk governance, chaos engineering, and Pydantic Logfire distributed tracing.",
    domain: "ai-ml",
    mockupType: "laptop",
    badge: "Autonomous AI Agent",
    tech: ["LangGraph", "FastMCP", "Docker", "GPT-OSS", "Pydantic Logfire", "Chaos Engineering"],
    image: "/projects_ss/quant.png",
    liveUrl: "https://github.com/Mohit776",
    githubUrl: "https://github.com/Mohit776/DevOps-Agent",
    featured: true,
  },
  {
    id: 4,
    title: "Quant Agent",
    description: "Architected an enterprise-grade financial RAG system using LangGraph agentic AI workflows and routing, integrated reranking models & Qdrant vector semantic search across dense 10-K filings, and mitigated LLM hallucinations via reflection loops.",
    domain: "ai-ml",
    mockupType: "laptop",
    badge: "AI-Powered Equity Research Agent",
    tech: ["LangGraph", "Groq", "Qdrant", "Gemini", "RAG", "FastAPI"],
    image: "/projects_ss/quant.png",
    liveUrl: "https://dual-mode-research-agent.vercel.app/",
    githubUrl: "https://github.com/Mohit776/DualModeResearchAgent",
    featured: false,
  },
    {
    id: 6,
    title: "Advize",
    description: "A high-impact web application used by 1000+ active users that seamlessly connects brands and creators to streamline influencer collaborations, campaign management, and partnerships.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["NextJS", "Firebase", "NodeJS", "Razorpay"],
    image: "/projects_ss/advize.png",
    liveUrl: "https://www.advize.in/",
    githubUrl: "https://github.com/Mohit776/",
    featured: false,
  },
  {
    id: 2,
    title: "TrueKnoc",
    description: "An innovative QR code based smart doorbell replacement application designed to seamlessly notify residents of visitors, enhancing home security and convenience without requiring expensive installations.",
    domain: "app-dev",
    badge: "Mobile App",
    tech: ["React Native", "Firebase", "Play Store", "Android Studio"],
    image: "/projects_ss/koc.jpeg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.trueknoc.myapp",
    githubUrl: "https://github.com/Mohit776/Knoc",
    featured: false,
  },
  {
    id: 3,
    title: "THF Partner",
    description: "A specialized partner application designed exclusively for professional chefs to streamline their operations, manage orders efficiently, track inventory, and connect seamlessly with their culinary network.",
    domain: "app-dev",
    badge: "Mobile App",
    tech: ["React Native", "Google Maps", "Play Store", "Firebase", "Android Studio"],
    image: "/projects_ss/tfh.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.thfpartnerv1.next.myapp",
    githubUrl: "https://github.com/Mohit776/Quickhomies-1",
    featured: false,
  },

];

// ====================================================
//                  Journey Sections
// ====================================================

export const journeyItems: JourneyItem[] = [
  {
    id: 1,
    type: "experience",
    date: "Jan 2026 – Present",
    org: "Advize Technology",
    role: "Co-Founder & CTO",
    description: "Leading technical strategy, system architecture, and scalable software development across web and mobile ecosystems.",
    tags: ["Leadership", "Next.js", "React Native", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    type: "experience",
    date: "Dec 2025 – Present",
    org: "Self-Employed",
    role: "Freelance Developer",
    description: "Shipped more than 10+ projects including mobile apps, full-stack websites, and intelligent AI agents.",
    tags: ["AI Agents", "Next.js", "React Native", "FastAPI", "Full Stack"],
  },
  {
    id: 3,
    type: "internship",
    date: "Oct 2025 – Jan 2026",
    org: "Lakshmi Information Technology Private Limited",
    role: "Full Stack Developer Intern",
    description: "Built NLP pipeline for document classification, deployed on AWS.",
    tags: ["Android Development", "React Native", "React", "Node.js", "Express.js"],
  },
  {
    id: 4,
    type: "internship",
    date: "March – May",
    org: "Kavya Lavanya Lekhwar's Pvt Ltd",
    role: "Android Developer Intern",
    description: "Developed and optimized Android application components, integrating core features and improving UI performance.",
    tags: ["Android", "React Native", "Firebase", "REST APIs"],
  },
  {
    id: 6,
    type: "achievement",
    date: "Summer 2026",
    org: "Social Summer of Code Season 5",
    role: "Mentor",
    description: "Guided and mentored contributors on open-source projects, reviewed pull requests, and helped developers resolve technical issues.",
    tags: ["Mentorship", "Open Source", "Git"],
  },
  {
    id: 7,
    type: "achievement",
    date: "",
    org: "National Level Hackathons",
    role: "Winner & Runner Up",
    description: "8 Times National Hackathon",
    tags: ["AI/ML", "Web Development", "App Development"],
  },
];

// ====================================================
//                  Skills Sections
// ====================================================

export const skills = {
  aiml: [
    { name: "Python", icon: "python/python-original.svg" },
    { name: "TensorFlow", icon: "tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", icon: "scikitlearn/scikitlearn-original.svg" },
    { name: "Computer Vision", icon: null },
    { name: "NLP", icon: null },
    { name: "LangChain", icon: null },
    { name: "RAG Systems", icon: null },
    { name: "Jupyter", icon: "jupyter/jupyter-original.svg" },
    { name: "Hugging Face", icon: "/logos/hugging-face-svgrepo-com.svg" },
    { name: "OpenAI ", icon: "/logos/openai-svgrepo-com.svg" },
    { name: "Google Colab", icon: "googlecolab/googlecolab-original.svg" }

  ],
  appDev: [
    { name: "React Native", icon: "react/react-original.svg" },
    { name: "Expo", icon: "expo/expo-original.svg" },
    { name: "Firebase", icon: "firebase/firebase-plain.svg" },
    { name: "Supabase", icon: "supabase/supabase-original.svg" },
    { name: "REST APIs", icon: null },
    { name: "Android Studio", icon: "androidstudio/androidstudio-original.svg" },
    { name: "Play Store", icon: "/logos/google-play-store-logo-svgrepo-com.svg" },
    { name: "App Store", icon: "apple/apple-original.svg" }
  ],
  webDev: [
    { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { name: "Express", icon: "express/express-original.svg" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg" },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
    { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Vercel", icon: "vercel/vercel-original.svg" },
    { name: "Docker", icon: "docker/docker-original.svg" },
    { name: "Git", icon: "git/git-original.svg" },
    { name: "GitHub", icon: "github/github-original.svg" },
  ],
}