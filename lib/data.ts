export type CaseStudyResult = {
  title: string;
  value: string;
};

export type Project = {
  id: string | number;
  slug: string;
  featured: boolean;
  title: string;
  category: "ai" | "web" | "mobile" | "saas" | "automation" | "mvp";
  industry: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  process?: string[];
  techStack?: string[];
  results: CaseStudyResult[];
  timeline: string;
  coverImage: string;
  mobileImage?: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  caseStudyLink?: string;
  featuredCardImage?: string;
  highlightMetric?: { title: string; value: string };
  testimonial?: { quote: string; author: string; role: string };
};

export type InvestmentPlan = {
  id: string;
  featured?: boolean;
  darkCard?: boolean;
  type: "one-time" | "subscription";
  title: string;
  subtitle: string;
  price: string;
  priceSubtext?: string;
  badge?: string;
  timeline?: string;
  buttonText: string;
  buttonLink: string;
  icon: string;
  features: string[];
};

export const pricingCategories = [
  { id: "one-time", label: "One-Time Project" },
  { id: "subscription", label: "Monthly Subscription" }
];

export const investmentPlans: InvestmentPlan[] = [
  {
    id: "starter",
    featured: false,
    darkCard: false,
    type: "one-time",
    title: "Starter",
    subtitle: "Perfect for Startups",
    price: "$999+",
    priceSubtext: "STARTS AT",
    timeline: "2 Weeks",
    buttonText: "Get Started",
    buttonLink: "#contact",
    icon: "rocket",
    features: [
      "Landing Pages",
      "Business Websites",
      "Responsive Design",
      "Basic CMS",
      "SEO Setup",
      "Deployment"
    ]
  },
  {
    id: "growth",
    featured: true,
    darkCard: false,
    type: "one-time",
    title: "Growth",
    subtitle: "AI SaaS MVP",
    price: "$7,500+",
    priceSubtext: "STARTS AT",
    badge: "MOST POPULAR",
    timeline: "6-8 Weeks",
    buttonText: "Book Consultation",
    buttonLink: "#contact",
    icon: "trending",
    features: [
      "AI SaaS MVP",
      "Authentication",
      "Dashboard",
      "Payments Integration",
      "Database & Backend",
      "Admin Panel",
      "Deployment",
      "AI Integration"
    ]
  },
  {
    id: "professional",
    featured: false,
    darkCard: false,
    type: "one-time",
    title: "Professional",
    subtitle: "Custom AI Products",
    price: "$15,000+",
    priceSubtext: "STARTS AT",
    timeline: "8-12 Weeks",
    buttonText: "Let's Talk",
    buttonLink: "#contact",
    icon: "brain",
    features: [
      "AI Agents Development",
      "Custom LLM Development",
      "RAG Systems",
      "Automation Workflows",
      "Mobile Apps",
      "Advanced Analytics",
      "Cloud Infrastructure",
      "CI/CD Pipeline"
    ]
  },
  {
    id: "enterprise",
    featured: false,
    darkCard: true,
    type: "one-time",
    title: "Enterprise",
    subtitle: "For Large Organizations",
    price: "Let's Talk",
    priceSubtext: "CUSTOM QUOTE",
    buttonText: "Contact Sales",
    buttonLink: "#contact",
    icon: "building",
    features: [
      "Dedicated Development Team",
      "AI Strategy & Consulting",
      "Enterprise Architecture",
      "Unlimited Scalability",
      "24/7 Priority Support",
      "Maintenance & Updates",
      "SLA & Security",
      "Training & Knowledge Transfer"
    ]
  },
  {
    id: "sub-starter",
    featured: false,
    darkCard: false,
    type: "subscription",
    title: "Dedicated Developer",
    subtitle: "Full-Time Development",
    price: "$3,500",
    priceSubtext: "PER MONTH",
    timeline: "Ongoing",
    buttonText: "Hire Developer",
    buttonLink: "#contact",
    icon: "user",
    features: [
      "Dedicated Full-Stack/AI Engineer",
      "160 Hours / Month",
      "Direct Slack/Teams Communication",
      "Daily Standups & Demos",
      "Source Code Ownership",
      "Pause or Cancel Anytime"
    ]
  },
  {
    id: "sub-growth",
    featured: true,
    darkCard: false,
    type: "subscription",
    title: "Agency On Retainer",
    subtitle: "Dedicated Team & AI Engineering",
    price: "$6,500",
    priceSubtext: "PER MONTH",
    badge: "MOST POPULAR",
    timeline: "Ongoing",
    buttonText: "Book Retainer",
    buttonLink: "#contact",
    icon: "users",
    features: [
      "Full Team (PM, Lead Dev, AI Architect, UI Designer)",
      "Unlimited Work Requests",
      "48-Hour Turnaround Time",
      "Weekly Sprint Releases",
      "AI Agent Maintenance",
      "Priority 24/7 Support"
    ]
  }
];

export const projectTechLogos: Record<string, string> = {
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "LangChain": "https://cdn.simpleicons.org/langchain/000000",
  "LangGraph": "https://cdn.simpleicons.org/langchain/000000",
  "FastMCP": "https://cdn.simpleicons.org/fastapi/009688",
  "Groq": "/logos/openai-svgrepo-com.svg",
  "Qdrant": "https://cdn.simpleicons.org/qdrant/DC2626",
  "Gemini": "/logos/gemini-color.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "OpenAI": "/logos/openai-svgrepo-com.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
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
//            CMS Projects & Case Studies Master Data
// =========================================================

export const projects: Project[] = [
  {
    id: "ai-customer-support",
    slug: "ai-customer-support-platform",
    featured: true,
    title: "AI Customer Support Platform",
    category: "ai",
    industry: "SaaS & Enterprise",
    shortDescription: "Autonomous AI customer support agent integrated into omnichannel support workflows to answer 85% of customer queries instantly.",
    challenge: "Support team was overwhelmed handling over 5,000 monthly customer inquiries, leading to delayed response times and high operational overhead.",
    solution: "Developed a specialized RAG-powered AI customer service agent capable of understanding complex user inquiries, resolving tickets autonomously, and escalating edge cases seamlessly.",
    process: [
      "Discovery & Data Structuring: Scraped knowledge bases, FAQs, and ticket logs",
      "Model & RAG Architecture: Implemented hybrid vector search with Qdrant and LLM intent routing",
      "Integration & Automation: Connected support channels via Webhooks, Slack, and Zendesk APIs",
      "Continuous Evaluation: Deployed reflection loops to eliminate hallucinations"
    ],
    techStack: ["LangGraph", "FastAPI", "Qdrant", "Next.js", "TypeScript", "Tailwind"],
    results: [
      { title: "Tickets Automated", value: "85%" },
      { title: "Support Cost Reduced", value: "65%" },
      { title: "Faster Response Time", value: "3x" },
      { title: "Development Timeline", value: "2 Months" }
    ],
    timeline: "2 Months (Development & Deployment)",
    coverImage: "/case-study-hero.png",
    tags: ["AI Agent", "RAG", "LangGraph", "FastAPI", "SaaS"],
    demoLink: "https://dual-mode-research-agent.vercel.app/",
    githubLink: "https://github.com/Mohit776",
    highlightMetric: { title: "Tickets Automated", value: "85%" },
    testimonial: {
      quote: "The AI agent transformed our customer support operations overnight, saving hundreds of hours weekly.",
      author: "Alex Morgan",
      role: "VP of Operations, SaaS Scaleup"
    }
  },
  {
    id: "medical-report-analysis",
    slug: "healthcare-ai-medical-report-analysis",
    featured: true,
    title: "Medical Report Analysis",
    category: "ai",
    industry: "Healthcare",
    shortDescription: "AI-powered analysis system that helps doctors detect radiological anomalies and generate diagnostic insights faster.",
    challenge: "Radiologists faced diagnostic backlogs reviewing thousands of complex medical imaging reports daily.",
    solution: "Engineered a vision-language AI model that flags critical anomalies in medical scans and drafts diagnostic summaries automatically.",
    process: [
      "Dataset Annotation & Safety Validation",
      "Vision Transformer Model Fine-tuning",
      "HIPAA-Compliant Cloud Infrastructure Setup",
      "Clinical Interface Integration"
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "FastAPI", "React", "Docker"],
    results: [
      { title: "Faster Diagnosis", value: "40%" },
      { title: "Diagnostic Accuracy", value: "99.2%" },
      { title: "Processing Speed", value: "< 2 Sec" }
    ],
    timeline: "3 Months",
    coverImage: "/why-choose-us.png",
    tags: ["Healthcare", "Vision AI", "PyTorch", "FastAPI"],
    highlightMetric: { title: "Faster Diagnosis", value: "40%" }
  },
  {
    id: "resume-screening-platform",
    slug: "ai-recruitment-resume-screening",
    featured: true,
    title: "Resume Screening Platform",
    category: "ai",
    industry: "HR Tech",
    shortDescription: "Automated candidate ranking and resume screening platform using semantic embeddings to accelerate talent acquisition.",
    challenge: "Recruiters spent over 30 hours per role manually parsing non-standard resume formats.",
    solution: "Built an AI-driven parser and scoring engine that matches candidates based on semantic skill alignment rather than keyword matching.",
    process: [
      "Document Parsing & Extraction Engine",
      "Semantic Vector Matching Engine",
      "Recruiter Dashboard & Ranking Analytics",
      "Automated Interview Scheduling Integration"
    ],
    techStack: ["LangChain", "OpenAI", "Next.js", "Node.js", "PostgreSQL"],
    results: [
      { title: "Time Saved", value: "75%" },
      { title: "Qualified Candidates Placed", value: "2.4x" },
      { title: "Screening Latency", value: "< 1 Sec" }
    ],
    timeline: "6 Weeks",
    coverImage: "/services-graphic.png",
    tags: ["HR Tech", "Semantic Search", "LLM", "Next.js"],
    highlightMetric: { title: "Time Saved", value: "75%" }
  },
  {
    id: "inventory-intelligence",
    slug: "ecommerce-automation-inventory-intelligence",
    featured: true,
    title: "Inventory Intelligence",
    category: "automation",
    industry: "E-commerce",
    shortDescription: "Predictive inventory forecasting and automated reordering engine for high-volume e-commerce brands.",
    challenge: "Frequent stockouts and overstocking tied up working capital across multiple warehouses.",
    solution: "Deployed time-series ML models to forecast SKU-level demand and trigger automated purchase orders based on lead times.",
    process: [
      "Multi-channel ERP & Shopify Data Pipeline Setup",
      "Time-Series Forecasting Model Training",
      "Automated Reordering Logic & Vendor Workflows",
      "Real-time Inventory Dashboard"
    ],
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "AWS"],
    results: [
      { title: "Revenue Growth", value: "30%" },
      { title: "Stockout Reduction", value: "85%" },
      { title: "Capital Efficiency", value: "+45%" }
    ],
    timeline: "2 Months",
    coverImage: "/services-graphic.png",
    tags: ["E-commerce", "Forecasting", "Automation", "AWS"],
    highlightMetric: { title: "Revenue Growth", value: "30%" }
  },
  {
    id: "devops-agent",
    slug: "devops-autonomous-agent",
    featured: false,
    title: "Autonomous DevOps Agent",
    category: "automation",
    industry: "Developer Tools",
    shortDescription: "Self-healing AI agent for autonomous containerized service remediation and root-cause analysis.",
    challenge: "Microservice outages required manual engineer intervention during off-hours.",
    solution: "Constructed an autonomous agent using LangGraph and FastMCP to detect log anomalies, execute diagnostic commands, and apply patches automatically.",
    process: [
      "Logfire Distributed Tracing Integration",
      "LangGraph State Graph & Diagnostic Tools Definition",
      "Human-in-the-Loop Approval Safeguards",
      "Chaos Testing & Failure Recovery Verification"
    ],
    techStack: ["LangGraph", "FastMCP", "Docker", "Python", "Pydantic"],
    results: [
      { title: "MTTR Reduction", value: "90%" },
      { title: "Automated Fixes", value: "80%" }
    ],
    timeline: "1 Month",
    coverImage: "/projects_ss/quant.png",
    tags: ["DevOps", "AI Agent", "Docker", "LangGraph"]
  },
  {
    id: "quant-agent",
    slug: "quant-financial-research-agent",
    featured: false,
    title: "Quant Financial Research Agent",
    category: "ai",
    industry: "Fintech",
    shortDescription: "Enterprise financial RAG system analyzing SEC 10-K filings with reflection loops.",
    challenge: "Financial analysts spent days reading 200-page SEC filings to compute valuation metrics.",
    solution: "Architected a dual-mode research agent that extracts structured financial metrics, calculates ratios, and cross-references source citations.",
    process: [
      "10-K PDF Chunking & Qdrant Ingestion",
      "Reflective RAG & Verification Agent Construction",
      "Financial Formula Calculation Engine",
      "Web Interface Deployment"
    ],
    techStack: ["LangGraph", "Groq", "Qdrant", "Gemini", "FastAPI"],
    results: [
      { title: "Analysis Speedup", value: "10x" },
      { title: "Citation Accuracy", value: "100%" }
    ],
    timeline: "6 Weeks",
    coverImage: "/projects_ss/quant.png",
    tags: ["Fintech", "RAG", "Groq", "Qdrant"]
  },
  {
    id: "advize-platform",
    slug: "advize-creator-marketing-platform",
    featured: false,
    title: "Advize Creator Marketing Platform",
    category: "web",
    industry: "Influencer Marketing",
    shortDescription: "Full-stack creator marketplace connecting top brands with influencers for automated campaigns.",
    challenge: "Manual campaign negotiations caused delays and payment friction between brands and creators.",
    solution: "Designed and built an end-to-end platform with automated campaign tracking, Razorpay payment escrow, and real-time analytics.",
    process: [
      "Marketplace UX/UI Design",
      "Next.js App Router Architecture",
      "Escrow Payment Gateway Integration",
      "Analytics Dashboard Development"
    ],
    techStack: ["Next.js", "Firebase", "Node.js", "Razorpay", "Tailwind"],
    results: [
      { title: "Active Users", value: "1000+" },
      { title: "Campaigns Managed", value: "500+" }
    ],
    timeline: "3 Months",
    coverImage: "/projects_ss/advize.png",
    tags: ["SaaS", "Next.js", "Razorpay", "Firebase"]
  },
  {
    id: "trueknoc-app",
    slug: "trueknoc-smart-doorbell-app",
    featured: false,
    title: "TrueKnoc Smart Doorbell App",
    category: "mobile",
    industry: "Smart Home",
    shortDescription: "QR-code smart doorbell mobile app notifying residents instantly without hardware installation.",
    challenge: "Traditional smart doorbells require expensive hardware and complex wiring.",
    solution: "Created a mobile application using QR-code scanning to trigger instant VoIP calls and push notifications to homeowners.",
    process: [
      "Cross-Platform Mobile App Development",
      "Real-time Notification & WebRTC Integration",
      "Firebase Cloud Messaging Architecture",
      "Play Store Publishing"
    ],
    techStack: ["React Native", "Firebase", "Android Studio", "WebRTC"],
    results: [
      { title: "Play Store Downloads", value: "5000+" },
      { title: "Notification Latency", value: "< 500ms" }
    ],
    timeline: "2 Months",
    coverImage: "/projects_ss/koc.jpeg",
    tags: ["Mobile", "React Native", "Firebase", "Android"]
  }
];

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
    role: "Freelance AI & Software Engineer",
    description: "Shipped more than 10+ projects including mobile apps, full-stack websites, and intelligent AI agents for global clients.",
    tags: ["AI Agents", "Next.js", "React Native", "FastAPI", "Full Stack"],
  }
];

export const skills = {
  aiml: [
    { name: "Python", icon: "python/python-original.svg" },
    { name: "TensorFlow", icon: "tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "pytorch/pytorch-original.svg" },
    { name: "OpenAI", icon: "/logos/openai-svgrepo-com.svg" },
    { name: "LangGraph", icon: "https://cdn.simpleicons.org/langchain/000000" }
  ],
  appDev: [
    { name: "React Native", icon: "react/react-original.svg" },
    { name: "Expo", icon: "expo/expo-original.svg" },
    { name: "Firebase", icon: "firebase/firebase-plain.svg" }
  ],
  webDev: [
    { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg" }
  ],
  tools: [
    { name: "Docker", icon: "docker/docker-original.svg" },
    { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Vercel", icon: "vercel/vercel-original.svg" }
  ]
};