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

export const projectTechLogos: Record<string, string> = {
  // Languages
  "Python":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "TypeScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  // AI / ML
  "LangChain":    "https://cdn.simpleicons.org/langchain/000000",
  "BERT":         "/hugging-face-svgrepo-com.svg",
  "TensorFlow":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "PyTorch":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "OpenAI":       "/openai-svgrepo-com.svg",
  "Hugging Face": "/hugging-face-svgrepo-com.svg",
  "ML Kit":       "https://www.gstatic.com/devrel-devsite/prod/vb794fa47da5b73ba8b76d3bace2e1aba14ad59bb8da3e9f40e5e696f4fdadee2/firebase/images/favicon.png",

  // Backend Frameworks
  "FastAPI":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Flask":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Node.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Django":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",

  // Frontend
  "React":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Framer":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
  "Chart.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",

  // Mobile
  "Flutter":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Expo":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  "Android":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",

  // Databases / Backend-as-a-Service
  "Firebase":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Supabase":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "PostgreSQL":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Prisma":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  "Redis":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  // Payments / Services
  "Stripe":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",

  // DevOps / Cloud
  "Docker":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Vercel":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Git":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
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
    title: "Code Veda",
    description: "Code Veda is an AI-powered platform that helps students and professionals learn coding more effectively. It provides personalized learning paths, real-time feedback, and a comprehensive library of coding resources.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["Python", "LangChain", "FastAPI", "React"],
    image: "/projects/project-1.jpg",
    liveUrl: "https://code-veda-mu.vercel.app/",
    githubUrl: "https://github.com/Mohit776/Code-Veda",
    featured: true,
  },
  {
    id: 2,
    title: "TrueKnoc",
    description: "Mobile app for tracking daily fitness and calories.",
    domain: "app-dev",
    badge: "Mobile App",
    tech: ["React Native", "Firebase", "ML Kit"],
    image: "/projects/project-2.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/Mohit776/Knoc",
    featured: false,
  },
  {
    id: 3,
    title: "HomeQuickes",
    description: "A specialized e-commerce platform for sustainable goods.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    image: "/projects/project-3.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Mohit776/Quickhomies-1",
    featured: false,
  },
  {
    id: 4,
    title: "Quant Agent",
    description: "Real-time Twitter sentiment visualizer.",
    domain: "ai-ml",
    badge: "Machine Learning",
    tech: ["BERT", "Flask", "Chart.js"],
    image: "/projects/project-4.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Mohit776/DualModeResearchAgent",
    featured: false,
  },
  {
    id: 5,
    title: "Soul Chef AI",
    description: "Cross-platform to-do list with real-time sync.",
    domain: "app-dev",
    badge: "Mobile App",
    tech: ["Flutter", "Supabase"],
    image: "/projects/project-5.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Mohit776/SoulChef-AI",
    featured: false,
  },
  {
    id: 6,
    title: "WoodenStories",
    description: "No-code editor for fast campaign pages.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["Next.js", "Tailwind", "Framer"],
    image: "/projects/project-6.jpg",
    liveUrl: "https://the-wooden-stories.vercel.app",
    githubUrl: "https://github.com/Mohit776/The-Wooden-Stories",
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
    date: "Oct 2025 – Jan 2026",
    org: "Lakshmi Information Technology Private Limited",
    role: "Full Stack Developer Intern",
    description: "Built NLP pipeline for document classification, deployed on AWS.",
    tags: ["Android Development", "React Native", "React", "Node.js","Express.js"],
  },
  {
    id: 2,
    type: "achievement",
    date: "",
    org: "National Level Hackathons",
    role: "Winner & Runner Up",
    description: "8 Times National Hackathon",
    tags: ["AI/ML", "Web Development", "App Development"],
  },
  {
    id: 3,
    type: "internship",
    date: "May 2023 – Aug 2023",
    org: "The famous Halwai Private Limited",
    role: "Android Developer Intern",
    description: "Developed REST APIs and React frontend for internal dashboard.",
    tags: ["Android", "React Native", "Firebase"],
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