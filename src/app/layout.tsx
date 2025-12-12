import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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

import EnhancedHeader from '@/components/layout/EnhancedHeader';
import EnhancedFooter from '@/components/layout/EnhancedFooter';
import AIAssistant from '@/components/features/AIAssistant';
import CustomCursor from '@/components/3d/CustomCursor';
import PageLoader from '@/components/features/PageLoader';
import SoundToggle from '@/components/features/SoundToggle';
import EasterEggs from '@/components/features/EasterEggs';
import KeyboardShortcuts from '@/components/features/KeyboardShortcuts';
import { SoundProvider } from '@/contexts/SoundContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-[#0a0e27] text-gray-100 min-h-screen`} suppressHydrationWarning>
        <SoundProvider>
          {/* Skip to main content for keyboard users */}
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>

          <PageLoader />
          <CustomCursor />
          <EnhancedHeader />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <EnhancedFooter />
          <AIAssistant />
          <SoundToggle />
          <KeyboardShortcuts />
          <EasterEggs />
        </SoundProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
