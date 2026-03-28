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

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Resume Screener",
    description: "Built an intelligent screener for recruiters.",
    domain: "ai-ml",
    badge: "AI/ML",
    tech: ["Python", "LangChain", "FastAPI", "React"],
    image: "/projects/project-1.jpg",
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
    featured: false,
  },
];

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

export const skills = {
  aiml: [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn",
    "Computer Vision", "NLP", "LangChain", "RAG Systems",
    "Jupyter", "Hugging Face", "OpenAI API"
  ],
  appDev: [
    "React Native", "Flutter", "Expo",
    "Firebase", "Supabase", "REST APIs",
    "iOS & Android Deployment"
  ],
  webDev: [
    "Next.js", "React", "Node.js", "TypeScript",
    "PostgreSQL", "MongoDB", "Prisma",
    "AWS", "Vercel", "Docker"
  ]
};
