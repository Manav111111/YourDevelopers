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
  "BERT": "/hugging-face-svgrepo-com.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "OpenAI": "/openai-svgrepo-com.svg",
  "Hugging Face": "/hugging-face-svgrepo-com.svg",
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
  "Play Store": "/google-play-store-logo-svgrepo-com.svg",

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
  "Google Maps": " /google-maps-svgrepo-com.svg",
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
  {
    id: 4,
    title: "Quant Agent",
    description: "An advanced AI powered financial analytics platform designed for detailed stock analysis, deep peer comparisons, and comprehensive risk assessment to empower smarter investment decision making.",
    domain: "ai-ml",
    mockupType: "laptop",
    badge: "AI Agent",
    tech: ["LangChain", "OpenAI", "Hugging Face", "Next.js", "FastAPI"],
    image: "/projects_ss/quant.png",
    liveUrl: "https://dual-mode-research-agent.vercel.app/",
    githubUrl: "https://github.com/Mohit776/DualModeResearchAgent",
    featured: false,
  },
  {
    id: 6,
    title: "WoodenStories",
    description: "A fully responsive ecommerce web application designed to sell custom handcrafted wooden products, featuring seamless user authentication, secure payment gateway integration, and interactive product catalogs.",
    domain: "web-dev",
    badge: "Web App",
    tech: ["React", "Express", "NodeJS", "MongoDB", "Razorpay"],
    image: "/projects_ss/wooden2.png",
    liveUrl: "https://the-wooden-stories.vercel.app",
    githubUrl: "https://github.com/Mohit776/The-Wooden-Stories",
    featured: false,
  },
  {
    id: 5,
    title: "Soul Chef AI",
    description: "An advanced AI powered culinary assistant designed to revolutionize your cooking experience through intelligent recipe generation, personalized meal planning, and AI-driven dietary recommendations.",
    domain: "ai-ml",
    mockupType: "mobile",
    badge: "AI Powered Mobile App",
    tech: ["React Native", "Firebase", "OpenAI", "Google Colab"],
    image: "/projects/project-5.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Mohit776/SoulChef-AI",
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
    tags: ["Android Development", "React Native", "React", "Node.js", "Express.js"],
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
    date: "Summer 2026",
    org: "Social Summer of Code Season 5",
    role: "Mentor",
    description: "Guided and mentored contributors on open-source projects, reviewed pull requests, and helped developers resolve technical issues.",
    tags: ["Mentorship", "Open Source", "Git"],
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
    { name: "Google Colab", icon: "googlecolab/googlecolab-original.svg" }

  ],
  appDev: [
    { name: "React Native", icon: "react/react-original.svg" },
    { name: "Expo", icon: "expo/expo-original.svg" },
    { name: "Firebase", icon: "firebase/firebase-plain.svg" },
    { name: "Supabase", icon: "supabase/supabase-original.svg" },
    { name: "REST APIs", icon: null },
    { name: "Android Studio", icon: "androidstudio/androidstudio-original.svg" },
    { name: "Play Store", icon: "/google-play-store-logo-svgrepo-com.svg" },
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