'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Download, MapPin, Briefcase, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';
import SimpleCharacter from '../3d/SimpleCharacter';
import { useSound } from '@/contexts/SoundContext';
// import CodeCompanion from '../3d/CodeCompanion'; // Temporarily disabled due to Spline import issues

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

export default function EnhancedProfileHero({ profile }: ProfileHeroProps) {
  const { playSound } = useSound();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roles] = useState([
    "Generative AI Engineer",
    "MLOps Architect",
    "LLM Solutions Developer",
    "AI Systems Designer"
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [use3DCharacter, setUse3DCharacter] = useState(false); // Toggle between Spline and Simple character (using Simple for now)
  const [characterLoaded, setCharacterLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

  // Default profile data
  const defaultProfile = {
    fullName: "Navya Sree Yellina",
    title: "Generative AI Engineer | ML Architect | Enterprise AI Solutions",
    bio: "Generative AI Engineer specializing in enterprise-scale solutions with proven impact: 40% latency reduction (2.1s→1.26s), 30% throughput increase, and 80% error reduction. Expertise in architecting RAG frameworks, deploying LLMs, and implementing privacy-preserving ML systems that serve 500+ concurrent users with 99.9% uptime.",
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

  // Generate particles only on client (fixes hydration error)
  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5
      }))
    );
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1e293b] to-[#0a0e27]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30 animate-gradient"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00d9ff 100%)',
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #00d9ff40, #7b2ff740)',
            filter: 'blur(40px)',
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-40 h-40 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #ff6b9d40, #ffd70040)',
            filter: 'blur(50px)',
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #7b2ff740, #00d9ff40)',
            filter: 'blur(60px)',
            x: mousePosition.x * 0.4,
            y: mousePosition.y * 0.4,
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles - only render on client */}
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, -200, -300],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="glass px-4 py-2 rounded-full border border-cyan-400/30">
                <span className="text-cyan-400 text-sm font-medium">
                  ✨ Available for Full-Time Opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {data.fullName.split(' ')[0]}
              </span>
            </motion.h1>

            {/* Animated Role Title */}
            <motion.div
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {data.bio}
            </motion.p>

            {/* Quick Info */}
            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">{data.location}</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                <Briefcase className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-gray-300">{data.yearsExperience}+ Years</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="/contact"
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('woosh')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-sm sm:text-base shadow-lg hover-glow overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Let's Chat
                </span>
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              {data.resumePdfUrl && (
                <motion.button
                  onClick={() => {
                    playSound('click');
                    if (data.resumePdfUrl) {
                      const link = document.createElement('a');
                      link.href = data.resumePdfUrl;
                      link.download = 'NavyaSreeYellina_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      setTimeout(() => playSound('success'), 200);
                    }
                  }}
                  onMouseEnter={() => playSound('hover')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-cyan-400/30 text-cyan-400 rounded-full font-semibold text-sm sm:text-base hover:bg-cyan-400/10 transition-all"
                >
                  <Download className="w-5 h-5" />
                  View Resume
                </motion.button>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {data.githubUrl && (
                <motion.a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-cyan-400/50 transition-all"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                </motion.a>
              )}
              {data.linkedinUrl && (
                <motion.a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-cyan-400/50 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end"
            style={{
              x: mousePosition.x * -0.5,
              y: mousePosition.y * -0.5,
            }}
          >
            {/* Character with glow effect */}
            <div className="relative">
              {/* Glow behind character */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-glow-pulse" />

              {/* Character - Simple Character (3D Spline coming soon!) */}
              <div className="relative z-10">
                <SimpleCharacter state="greeting" size={280} />
              </div>

              {/* Floating tech icons around character */}
              {['💻', '🚀', '⚡', '🎯'].map((icon, i) => (
                <motion.div
                  key={i}
                  className="absolute text-3xl"
                  style={{
                    top: `${20 + Math.sin((i * Math.PI) / 2) * 40}%`,
                    left: `${20 + Math.cos((i * Math.PI) / 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specializations Cloud - Below main content */}
        <motion.div
          className="mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {data.specializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass px-4 py-2 rounded-full border border-purple-400/20 hover:border-cyan-400/40 transition-all cursor-default"
              >
                <span className="text-sm text-gray-300 font-medium">{spec}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 glass rounded-full border-2 border-cyan-400/30 flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
