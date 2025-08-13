import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navya Sree Yellina - Generative AI Engineer",
  description: "Hi! I'm Navya - I build AI that understands people. From RAG systems to privacy-preserving ML, I'm passionate about making technology work for everyone.",
  keywords: "Generative AI, MLOps, Machine Learning, AI Engineer, RAG, LangChain, Privacy-Preserving ML",
  authors: [{ name: "Navya Sree Yellina" }],
  icons: {
    icon: '/nsy-logo.png',
    shortcut: '/favicon.png',
    apple: [
      { url: '/nsy-logo.png', sizes: '180x180' },
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: "Navya Sree Yellina - Generative AI Engineer",
    description: "Explore my expertise in Gen AI, MLOps, and ethical AI development",
    type: "website",
    locale: "en_US",
    siteName: "Navya Sree Yellina Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navya Sree Yellina - Generative AI Engineer",
    description: "Explore my expertise in Gen AI, MLOps, and ethical AI development",
  },
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
};

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
