export type Project = {
  id: number;
  title: string;
  description: string;
  domain: "ai-ml" | "app-dev" | "web-dev";
  badge: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export type JourneyItem = {
  id: number;
  type: "internship" | "achievement" | "education";
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
    title: "AI-Powered Resume Screener",
    description: "Built an intelligent screener for recruiters.",
    domain: "ai-ml",
    badge: "AI/ML",
    tech: ["Python", "LangChain", "FastAPI", "React"],
    image: "/projects/project-1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://button.github.com",
    featured: true,
  },
  {
    id: 2,
    title: "HealthTrack",
    description: "Mobile app for tracking daily fitness and calories.",
    domain: "app-dev",
    badge: "Mobile App",
    tech: ["React Native", "Firebase", "ML Kit"],
    image: "/projects/project-2.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 3,
    title: "EcoMarket Platform",
    description: "A specialized e-commerce platform for sustainable goods.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    image: "/projects/project-3.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Sentiment Analysis Dashboard",
    description: "Real-time Twitter sentiment visualizer.",
    domain: "ai-ml",
    badge: "Machine Learning",
    tech: ["BERT", "Flask", "Chart.js"],
    image: "/projects/project-4.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Task Manager App",
    description: "Cross-platform to-do list with real-time sync.",
    domain: "app-dev",
    badge: "Mobile App",
    tech: ["Flutter", "Supabase"],
    image: "/projects/project-5.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "SaaS Landing Page Builder",
    description: "No-code editor for fast campaign pages.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["Next.js", "Tailwind", "Framer"],
    image: "/projects/project-6.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

// ====================================================
//                  Journey Sections
// ====================================================

export const journeyItems: JourneyItem[] = [
  {
    id: 1,
    type: "internship",
    date: "Jun 2024 – Aug 2024",
    org: "Tech Innovations Inc.",
    role: "AI/ML Engineer Intern",
    description: "Built NLP pipeline for document classification, deployed on AWS.",
    tags: ["Python", "BERT", "AWS", "FastAPI"],
  },
  {
    id: 2,
    type: "achievement",
    date: "Feb 2024",
    org: "National Hackathon",
    role: "1st Place Winner",
    description: "1st place for building an AI-based crop disease detector.",
    tags: ["Computer Vision", "TensorFlow", "React Native"],
  },
  {
    id: 3,
    type: "internship",
    date: "May 2023 – Aug 2023",
    org: "Digital Solutions LLC",
    role: "Full-Stack Developer Intern",
    description: "Developed REST APIs and React frontend for internal dashboard.",
    tags: ["Node.js", "PostgreSQL", "React"],
  },
  {
    id: 4,
    type: "achievement",
    date: "Jan 2023",
    org: "Open Source Platform",
    role: "Core Contributor",
    description: "Merged PR adding multilingual support to a popular UI library.",
    tags: ["React", "i18n", "TypeScript"],
  },
  {
    id: 5,
    type: "education",
    date: "Aug 2021 – May 2025",
    org: "State University",
    role: "B.Tech Computer Science",
    description: "Relevant coursework: ML, Algorithms, Cloud Computing.",
    tags: ["C++", "Python", "Data Structures"],
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
    { name: "Hugging Face", icon: "/hugging-face-svgrepo-com.svg" },
    { name: "OpenAI ", icon: "/openai-svgrepo-com.svg" },
    { name: "Google Colab", icon: "googlecolab/googlecolab-original.svg"}

  ],
  appDev: [
    { name: "React Native", icon: "react/react-original.svg" },
    { name: "Expo", icon: "expo/expo-original.svg" },
    { name: "Firebase", icon: "firebase/firebase-plain.svg" },
    { name: "Supabase", icon: "supabase/supabase-original.svg" },
    { name: "REST APIs", icon: null },
    { name: "Android Studio", icon: "androidstudio/androidstudio-original.svg" },
    {name : "Play Store", icon : "/google-play-store-logo-svgrepo-com.svg"},
    {name : "App Store", icon : "apple/apple-original.svg"}
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
],}