import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ConsultationModalProvider } from "@/components/modals/ConsultationModalContext";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { Toaster } from "sonner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://yourdevelopers.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "YourDevelopers | AI & Full Stack Development",
    template: "%s | YourDevelopers",
  },

  description:
    "YourDevelopers — building modern AI-powered, full-stack web and mobile applications.",

  keywords: [
    "YourDevelopers",
    "AI Development Agency",
    "Full Stack Development",
    "Website Development",
    "Web Development Company",
    "Mobile App Development",
    "AI Chatbot Development",
    "AI Agent Development",
    "SaaS Development",
    "Automation Solutions",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "MERN Stack",
    "Custom Software Development",
    "Startup MVP Development",
    "Business Automation",
    "Artificial Intelligence",
    "LLM Integration",
    "OpenAI Integration",
    "LangChain Development",
    "India Software Agency"
  ],

  authors: [
    {
      name: "YourDevelopers",
      url: SITE_URL,
    },
  ],

  creator: "YourDevelopers",
  publisher: "YourDevelopers",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://yourdevelopers.vercel.app/",
  },

  category: "Technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdevelopers.vercel.app/",
    siteName: "YourDevelopers",

    title: "YourDevelopers | AI & Full Stack Development",

    description:
      "YourDevelopers — building modern AI-powered, full-stack web and mobile applications.",

    images: [
      {
        url: "https://yourdevelopers.vercel.app/og/yourdevelopers-og-v2.png",
        width: 1200,
        height: 630,
        alt: "YourDevelopers | AI & Full Stack Development",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "YourDevelopers | AI & Full Stack Development",

    description:
      "YourDevelopers — building modern AI-powered, full-stack web and mobile applications.",

    images: ["https://yourdevelopers.vercel.app/og/yourdevelopers-og-v2.png"],

    creator: "@yourdevelopers",
  },

  icons: {
    icon: [
      {
        url: "/yourdevlogo-Photoroom.png",
        type: "image/png",
      },
    ],

    shortcut: "/yourdevlogo.png",

    apple: "/yourdevlogo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "YourDevelopers",

  url: SITE_URL,

  logo: `${SITE_URL}/yourdevlogo-Photoroom.png`,

  image: `${SITE_URL}/og/yourdevelopers-og-v2.png`,

  description:
    "YourDevelopers — building modern AI-powered, full-stack web and mobile applications.",

  email: "yourdevelopers0@gmail.com",

  sameAs: [
    "https://github.com/yourdevelopers",
    "https://linkedin.com/company/yourdevelopers",
    "https://instagram.com/yourdevelopers",
    "https://x.com/yourdevelopers"
  ],

  foundingLocation: {
    "@type": "Place",
    name: "India"
  },

  knowsAbout: [
    "Artificial Intelligence",
    "AI Agents",
    "AI Chatbots",
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "OpenAI",
    "LangChain",
    "Automation",
    "LLMs",
    "Cloud Deployment"
  ],

  areaServed: "Worldwide",

  slogan: "Building AI Products That Scale Businesses."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
        <ConsultationModalProvider>
          <LenisProvider>
            {children}
          </LenisProvider>

          <ConsultationModal />

          <Toaster
            richColors
            theme="dark"
            position="top-right"
          />
        </ConsultationModalProvider>

        <Analytics />
      </body>
    </html>
  );
}