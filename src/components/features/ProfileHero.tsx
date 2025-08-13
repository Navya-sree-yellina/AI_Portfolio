'use client';

import { motion } from 'framer-motion';
import { Mail, Download, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface ProfileHeroProps {
  profile?: {
    fullName: string;
    title: string;
    bio: string;
    location: string;
    yearsExperience: number;
    specializations: string[];
    linkedinUrl?: string;
    githubUrl?: string;
    email: string;
    resumePdfUrl?: string;
  };
}

export default function ProfileHero({ profile }: ProfileHeroProps) {
  // Default profile data for initial development
  const defaultProfile = {
    fullName: "Navya Sree Yellina",
    title: "Generative AI Engineer | ML Architect | Innovation Catalyst",
    bio: "🚀 Turning AI dreams into reality, one algorithm at a time. I don't just build AI systems—I craft intelligent experiences that understand, adapt, and amaze. From architecting RAG frameworks that boosted accuracy by 25% to reducing latency from a coffee break (2.1s) to a heartbeat (1.26s), I transform data into decisions and complexity into clarity. Fresh M.Sc. graduate (May 2025) with a thesis on Privacy Threats in Continuous Learning, now bringing cutting-edge AI solutions to life at Gemini Consulting. Ready to revolutionize how your business thinks? Let's chat!",
    location: "Saint Louis, MO",
    yearsExperience: 4,
    specializations: [
      "Generative AI & LLMs",
      "Transformers (GPT, BERT, T5)",
      "RAG Frameworks",
      "MLOps & CI/CD",
      "Privacy-Preserving ML",
      "Deep Learning & PyTorch"
    ],
    linkedinUrl: "https://www.linkedin.com/in/navya-sree-yellina/",
    githubUrl: "https://github.com/Navya-sree-yellina",
    email: "navyasreechoudhary@gmail.com",
    resumePdfUrl: "/resume.pdf"
  };

  const data = profile || defaultProfile;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Name and Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            {data.fullName}
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-semibold mb-6">
            {data.title}
          </h2>

          {/* Bio */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            {data.bio}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>{data.yearsExperience}+ Years Experience</span>
            </div>
          </div>

          {/* Specializations */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {data.specializations.map((spec, index) => (
              <motion.span
                key={spec}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
              >
                {spec}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
            </motion.div>

            {data.resumePdfUrl && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = data.resumePdfUrl;
                    link.download = 'NavyaSreeYellina_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}