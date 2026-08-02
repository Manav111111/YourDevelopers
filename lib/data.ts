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
  playStoreLink?: string;
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
    id: "free-demo",
    featured: false,
    darkCard: false,
    type: "one-time",
    title: "Free Demo",
    subtitle: "Website & App Prototype",
    price: "₹0",
    priceSubtext: "100% FREE",
    badge: "FREE DEMO",
    timeline: "24–48 Hours",
    buttonText: "Request Free Demo",
    buttonLink: "#contact",
    icon: "sparkles",
    features: [
      "Interactive UI Demo",
      "Custom Prototype",
      "No Upfront Cost",
      "Quick 48h Turnaround",
      "Architecture Review",
      "Scope & Cost Estimate",
      "Tech Consultation",
      "100% Risk Free"
    ]
  },
  {
    id: "website-dev",
    featured: false,
    darkCard: false,
    type: "one-time",
    title: "Website Development",
    subtitle: "Business Websites & Landing Pages",
    price: "₹5,000+",
    priceSubtext: "STARTS AT",
    timeline: "1–2 Weeks",
    buttonText: "Get Website",
    buttonLink: "#contact",
    icon: "rocket",
    features: [
      "Business Website",
      "Landing Page",
      "Responsive Design",
      "SEO Friendly",
      "Admin Panel (Optional)",
      "Deployment",
      "Contact Forms",
      "Fast Performance"
    ]
  },
  {
    id: "mobile-dev",
    featured: true,
    darkCard: false,
    type: "one-time",
    title: "Mobile App Development",
    subtitle: "Android & iOS Applications",
    price: "₹10,000+",
    priceSubtext: "STARTS AT",
    badge: "MOST POPULAR",
    timeline: "2–4 Weeks",
    buttonText: "Build My App",
    buttonLink: "#contact",
    icon: "trending",
    features: [
      "Android App",
      "React Native",
      "Firebase Integration",
      "Authentication",
      "Admin Dashboard",
      "Push Notifications",
      "API Integration",
      "Play Store Ready"
    ]
  },
  {
    id: "ai-agents",
    featured: false,
    darkCard: true,
    type: "one-time",
    title: "AI Agents & Chatbots",
    subtitle: "Intelligent Business Automation",
    price: "₹15,000+",
    priceSubtext: "STARTS AT",
    timeline: "2–4 Weeks",
    buttonText: "Let's Discuss",
    buttonLink: "#contact",
    icon: "brain",
    features: [
      "Custom AI Agents",
      "AI Chatbots Integration",
      "Workflow Automation",
      "WhatsApp & CRM Sync",
      "Multi-Agent & RAG Systems",
      "Lead Gen & Knowledge Base",
      "Database Integration",
      "Ongoing Maintenance"
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
    id: "advize-platform",
    slug: "advize-creator-marketing-platform",
    featured: true,
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
    tags: ["SaaS", "Next.js", "Razorpay", "Firebase"],
    demoLink: "https://www.advize.in/"
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
    tags: ["Mobile", "React Native", "Firebase", "Android"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.trueknoc.myapp"
  },
  {
    id: "thf-partner",
    slug: "thf-partner-chef-app",
    featured: false,
    title: "THF Partner",
    category: "mobile",
    industry: "Food & Hospitality",
    shortDescription: "Mobile partner application built for professional chefs to manage orders, deliveries, and daily business operations efficiently.",
    challenge: "Restaurant partners and chefs relied on manual workflows to manage incoming orders, track deliveries, and coordinate with customers, leading to operational delays and reduced efficiency.",
    solution: "Developed a cross-platform partner application that enables chefs to receive and manage orders in real time, navigate deliveries with Google Maps, receive instant notifications, and streamline restaurant operations through an intuitive mobile interface.",
    process: [
      "Partner Dashboard & Order Management",
      "Real-time Firebase Backend Integration",
      "Google Maps & Navigation Integration",
      "Play Store Deployment & Performance Optimization"
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Google Maps",
      "Android Studio",
      "Play Store"
    ],
    results: [
      { title: "Restaurant Partners", value: "100+" },
      { title: "Order Processing", value: "Real-time" }
    ],
    timeline: "2 Months",
    coverImage: "/projects_ss/tfh.png",
    tags: [
      "Mobile App",
      "React Native",
      "Firebase",
      "FoodTech",
      "Google Maps"
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.thfpartnerv1.next.myapp"
  }, {
    id: "guide-my-route",
    slug: "guide-my-route-travel-platform",
    featured: false,
    title: "Guide My Route",
    category: "mobile",
    industry: "Travel & Tourism",
    shortDescription: "A smart travel platform enabling tourists to discover local guides, book hotels, rent vehicles, and plan seamless trips from a single mobile application.",
    challenge: "Travelers often rely on multiple platforms for booking hotels, finding local guides, renting vehicles, and planning itineraries, resulting in a fragmented travel experience.",
    solution: "Developed a cross-platform mobile application that centralizes travel planning by allowing users to book verified local guides, reserve hotels, rent vehicles, discover tourist attractions, and manage their complete travel itinerary through a single intuitive interface.",
    process: [
      "Travel Planning & Booking Flow Design",
      "Firebase Authentication & Real-time Database Integration",
      "Google Maps & Location Services Integration",
      "Hotel, Guide & Vehicle Booking System Development"
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Google Maps",
      "Android Studio",
      "Node.js"
    ],
    results: [
      { title: "Booking Categories", value: "4+" },
      { title: "Real-time Services", value: "100%" }
    ],
    timeline: "2 Months",
    coverImage: "/projects_ss/guide-my-route.jpg",
    tags: [
      "Travel",
      "Tourism",
      "React Native",
      "Firebase",
      "Google Maps",
      "Booking"
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.jatin551.guidemyroute"
  }, {
    id: "guide-my-route-partner",
    slug: "guide-my-route-hotel-partner-console",
    featured: false,
    title: "Guide My Route Partner Console",
    category: "mobile",
    industry: "Travel & Hospitality",
    shortDescription: "A hotel partner application enabling property owners to manage bookings, rooms, earnings, and daily hotel operations through a centralized mobile dashboard.",
    challenge: "Hotel owners lacked a unified platform to manage reservations, room availability, booking requests, and earnings, leading to inefficient day-to-day operations and delayed responses to customers.",
    solution: "Built a dedicated partner application for Guide My Route that allows hotel owners to manage bookings, update room inventory, monitor earnings, confirm reservations, and oversee hotel operations in real time through an intuitive mobile dashboard.",
    process: [
      "Hotel Partner Authentication & Dashboard",
      "Room & Inventory Management System",
      "Booking Confirmation & Reservation Tracking",
      "Firebase Backend & Real-time Data Synchronization"
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Node.js",
      "Android Studio",
      "Google Maps"
    ],
    results: [
      { title: "Booking Management", value: "100%" },
      { title: "Real-time Dashboard", value: "Live" }
    ],
    timeline: "2 Months",
    coverImage: "/projects_ss/gmr-partner.jpg",
    tags: [
      "Travel",
      "Hospitality",
      "React Native",
      "Firebase",
      "Hotel Management",
      "Partner App"
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.jatin551.gmrpartner"
  }, {
    id: "campus-ninja",
    slug: "campus-ninja-student-platform",
    featured: true,
    title: "Campus Ninja",
    category: "mobile",
    industry: "EdTech",
    shortDescription: "An all-in-one engineering student platform providing notes, PYQs, video lectures, marketplace services, skill development, and premium study resources through a single mobile application.",
    challenge: "Engineering students often depend on multiple websites and apps to access notes, previous year papers, video lectures, projects, and study materials, resulting in a fragmented learning experience.",
    solution: "Built a comprehensive student platform that centralizes academic resources, premium study materials, engineering products, video lectures, skill development content, and a marketplace with secure Razorpay payments, enabling students to access everything they need from one application.",
    process: [
      "UI/UX Design & Student Experience Optimization",
      "Firebase Authentication & Real-time Backend Integration",
      "Razorpay Payment Gateway Integration",
      "Marketplace, Learning Resources & Content Management"
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Razorpay",
      "Node.js",
      "Supabase",
      "Android Studio"
    ],
    results: [
      { title: "Learning Modules", value: "10+" },
      { title: "One-stop Student Platform", value: "100%" }
    ],
    timeline: "4 Months",
    coverImage: "/projects_ss/campus-ninja.jpg",
    tags: [
      "EdTech",
      "React Native",
      "Firebase",
      "Razorpay",
      "Marketplace",
      "Engineering",
      "Student Platform"
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.thfpartnerv1.next.myapp"
  }, {
    id: "ipu-counselling-hub",
    slug: "ipu-counselling-hub-predictor",
    featured: true,
    title: "IPU Counselling Hub & Predictor",
    category: "web",
    industry: "EdTech",
    shortDescription: "A comprehensive counselling platform helping GGSIPU aspirants explore colleges, analyze cutoffs, predict admissions, and receive personalized mentorship through intelligent counselling tools.",
    challenge: "Students preparing for GGSIPU admissions struggled to access reliable cutoff data, compare colleges, predict admission chances, and make informed counselling decisions.",
    solution: "Developed a centralized counselling platform featuring round-wise cutoff analysis, college comparison tools, intelligent admission prediction, mentor guidance, and premium counselling resources to simplify the admission process.",
    process: [
      "Cutoff Data Collection & Analytics",
      "College Predictor Algorithm Development",
      "Student Dashboard & Counselling Tools",
      "Premium Resources & Mentor Integration"
    ],
    techStack: [
      "Next.js",
      "React",
      "Firebase",
      "Tailwind CSS",
      "Node.js"
    ],
    results: [
      { title: "Monthly Users", value: "1,000+" },
      { title: "Students Helped", value: "100+" }
    ],
    timeline: "3 Months",
    coverImage: "/projects_ss/counselling-hub.png",
    tags: [
      "EdTech",
      "Next.js",
      "College Predictor",
      "Firebase",
      "Counselling",
      "Education"
    ],
    demoLink: "https://councelling-delta.vercel.app/"
  }, {
    id: "course-marketplace",
    slug: "course-marketplace-platform",
    featured: true,
    title: "Course Marketplace Platform",
    category: "web",
    industry: "EdTech",
    shortDescription: "A full-stack online learning marketplace enabling instructors to sell courses with secure authentication, role-based dashboards, and seamless online payments.",
    challenge: "Traditional course-selling platforms lacked customizable learning workflows, secure payments, and scalable instructor management for independent educators.",
    solution: "Built a complete learning marketplace supporting course publishing, secure Google authentication, role-based dashboards, Razorpay payments, and an intuitive learning experience for students and instructors.",
    process: [
      "Course Marketplace Architecture",
      "Firebase Authentication & User Roles",
      "Razorpay Payment Gateway Integration",
      "Admin Dashboard & Course Management"
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase Auth",
      "Razorpay"
    ],
    results: [
      { title: "Secure Payments", value: "100%" },
      { title: "Role-based Access", value: "Multi-user" }
    ],
    timeline: "2 Months",
    coverImage: "/projects_ss/course-marketplace.png",
    tags: [
      "EdTech",
      "React",
      "MongoDB",
      "Razorpay",
      "Firebase",
      "Marketplace"
    ],
    demoLink: "https://lms-4-97qt.onrender.com/"
  }, {
    id: "velocity-grocery",
    slug: "velocity-grocery-mobile-app",
    featured: false,
    title: "Velocity Grocery",
    category: "mobile",
    industry: "E-Commerce",
    shortDescription: "A modern grocery delivery application offering real-time product browsing, smart cart management, address selection, and a seamless mobile shopping experience.",
    challenge: "Customers required a fast and intuitive grocery shopping experience with real-time inventory updates, location-based delivery, and an optimized checkout flow.",
    solution: "Developed a React Native grocery application featuring product discovery, Firebase-powered real-time updates, location management, shopping cart, and streamlined ordering for everyday grocery purchases.",
    process: [
      "Mobile-first UI/UX Design",
      "Firebase Real-time Backend Integration",
      "Shopping Cart & Checkout Flow",
      "Location & Address Management"
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Node.js",
      "Google Maps",
      "Android Studio"
    ],
    results: [
      { title: "Real-time Updates", value: "100%" },
      { title: "Mobile Optimized", value: "Cross-platform" }
    ],
    timeline: "2 Months",
    coverImage: "/projects_ss/velocity.jpg",
    tags: [
      "E-Commerce",
      "React Native",
      "Firebase",
      "Grocery",
      "Delivery",
      "Mobile App"
    ],
    demoLink: "https://drive.google.com/file/d/1bl7GVgoPACLKjtlEC4qps9QuAsV-1FBD/view"
  }, {
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
    tags: ["Fintech", "RAG", "Groq", "Qdrant"],
    demoLink: "https://dual-mode-research-agent.vercel.app/"
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