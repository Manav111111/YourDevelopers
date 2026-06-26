import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import Script from "next/script";

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

const SITE_URL = "https://www.mohitcodes.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohit Aggarwal | AI Engineer & Full Stack Developer",
    template: "%s | Mohit Aggarwal",
  },
  description:
    "Mohit Aggarwal is an AI Engineer and Full Stack Developer specializing in intelligent web and mobile applications, LLMs, and scalable backend systems. Explore projects, skills, and experience.",
  keywords: [
    "Mohit Aggarwal",
    "Mohit Aggarwal AI Engineer",
    "Mohit Aggarwal Developer",
    "Mohit Aggarwal Portfolio",
    "AI Engineer",
    "Full Stack Developer",
    "React Native Developer",
    "Next.js Developer",
    "LangChain",
    "OpenAI Integration",
    "Machine Learning Engineer",
    "Web Developer India",
    "Mobile App Developer",
  ],
  authors: [{ name: "Mohit Aggarwal", url: SITE_URL }],
  creator: "Mohit Aggarwal",
  publisher: "Mohit Aggarwal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mohit Aggarwal Portfolio",
    title: "Mohit Aggarwal | AI Engineer & Full Stack Developer",
    description:
      "Mohit Aggarwal is an AI Engineer and Full Stack Developer specializing in intelligent web and mobile applications, LLMs, and scalable backend systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohit Aggarwal — AI Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Aggarwal | AI Engineer & Full Stack Developer",
    description:
      "Mohit Aggarwal — AI Engineer building intelligent web & mobile apps, LLMs, and scalable backends.",
    images: ["/og-image.png"],
    creator: "@MohitAggarwal",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification=jAWuhnx6s53HmWU2lPvozIXRtN_saYKFe42xkO-qg_c",   // Add your Google Search Console verification token here
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohit Aggarwal",
  url: "https://www.mohitcodes.dev",
  image: "https://www.mohitcodes.dev/1775243053202.png",
  jobTitle: "AI Engineer & Full Stack Developer",
  description:
    "Mohit Aggarwal is an AI Engineer and Full Stack Developer specializing in intelligent web and mobile applications, LLMs, and scalable backend systems.",
  sameAs: [
    "https://github.com/Mohit776",
    "https://linkedin.com/in/mohitaggarwal",
    "https://www.mohitcodes.dev",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development",
    "React Native",
    "Next.js",
    "LangChain",
    "OpenAI",
    "Python",
    "TypeScript",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Lakshmi Information Technology Private Limited",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-accent selection:text-dark">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
