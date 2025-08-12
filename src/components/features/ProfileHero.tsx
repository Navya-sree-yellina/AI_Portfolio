'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin, Briefcase } from 'lucide-react';
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
    title: "Generative AI Engineer",
    bio: "Hey there! 👋 I'm an AI engineer who believes technology should feel human. Whether I'm building RAG systems that actually understand context or creating privacy-first ML solutions, I'm driven by one question: How can AI make life better? With 4+ years turning complex problems into elegant solutions, I've helped 500+ users experience the magic of well-crafted AI. Let's build something amazing together!",
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
    linkedinUrl: "https://linkedin.com/in/navya-sree-yellina",
    githubUrl: "https://github.com/navyasreeyellina",
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
                href="#contact"
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
                <a
                  href={data.resumePdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </motion.div>
            )}

            {/* Social Links */}
            <div className="flex gap-3">
              {data.linkedinUrl && (
                <motion.a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white text-gray-700 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              )}
              
              {data.githubUrl && (
                <motion.a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white text-gray-700 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
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