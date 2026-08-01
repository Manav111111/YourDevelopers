import {
  Bot,
  Code2,
  Smartphone,
  Cloud,
  Sparkles,
  Rocket
} from "lucide-react";

export const servicesData = [
  {
    id: "ai-dev",
    title: "AI Development",
    icon: Bot,
    description: "Custom AI solutions tailored to automate tasks, generate insights, and deliver business value.",
    bullets: ["Custom AI Agents", "LLM Integration", "Chatbots", "RAG Systems", "Automation"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Code2,
    description: "Modern, scalable web platforms built for speed, security, and high conversion.",
    bullets: ["Custom Web Apps", "SaaS Platforms", "Admin Dashboards", "API Development", "Modern UI"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "High-performance cross-platform mobile apps for iOS and Android.",
    bullets: ["Android", "iOS", "React Native", "Flutter", "Cross-platform Apps"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Robust cloud architecture, deployment pipelines, and infrastructure scaling.",
    bullets: ["AWS", "Azure", "CI/CD", "Docker", "Infrastructure"]
  },
  {
    id: "automation",
    title: "Automation Solutions",
    icon: Sparkles,
    description: "Streamline operations with end-to-end automated workflows and smart integrations.",
    bullets: ["Business Automation", "Workflow Automation", "CRM Integration", "Internal Tools", "AI Workflows"]
  },
  {
    id: "mvp-strategy",
    title: "MVP & Product Strategy",
    icon: Rocket,
    description: "Rapidly validate concepts, architect MVPs, and launch products faster.",
    bullets: ["Product Discovery", "Wireframes", "Architecture", "Rapid MVP", "Launch Strategy"]
  }
];
