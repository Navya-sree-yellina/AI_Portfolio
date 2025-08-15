'use client';

import { motion } from 'framer-motion';
import { Mail, Download, MapPin, Briefcase } from 'lucide-react';

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
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 md:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Decorative Elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="hidden sm:block absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="hidden sm:block absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Name and Title */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {data.fullName}
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-indigo-600 font-medium mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {data.title}
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.bio}
          </motion.p>

          {/* Quick Info */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500" />
              <span className="text-sm sm:text-base font-medium">{data.location}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500" />
              <span className="text-sm sm:text-base font-medium">{data.yearsExperience}+ Years Experience</span>
            </div>
          </motion.div>

          {/* Specializations */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
            {data.specializations.map((spec, index) => (
              <motion.span
                key={spec}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                {spec}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              Get In Touch
            </motion.a>

            {data.resumePdfUrl && (
              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  if (data.resumePdfUrl) {
                    const link = document.createElement('a');
                    link.href = data.resumePdfUrl;
                    link.download = 'NavyaSreeYellina_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 rounded-full font-semibold text-sm sm:text-base border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                Download Resume
              </motion.button>
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