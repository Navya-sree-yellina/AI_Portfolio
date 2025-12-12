'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  Code,
  Brain,
  Heart,
  Sparkles,
  Coffee,
  Globe,
  Zap,
  Cpu,
  Smile
} from 'lucide-react';
import SimpleCharacter from '@/components/3d/SimpleCharacter';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java'],
  'AI/ML Frameworks': ['PyTorch', 'TensorFlow', 'Transformers', 'LangChain', 'OpenAI API'],
  'MLOps & Cloud': ['Docker', 'Kubernetes', 'AWS SageMaker', 'Azure ML', 'GitHub Actions'],
  'Data & Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Databases', 'Apache Spark'],
  'Web Technologies': ['React', 'Next.js', 'FastAPI', 'Node.js', 'REST APIs'],
};

const timeline = [
  {
    year: '2025-Present',
    title: 'Generative AI Engineer',
    company: 'Gemini Consulting & Services',
    description: 'Architected enterprise AI platform using transformers & RAG, reducing latency 40% while supporting 500+ concurrent users.',
    icon: Brain,
    color: 'bg-purple-500'
  },
  {
    year: '2021-2023',
    title: 'Systems Engineer',
    company: 'Oracle Cerner',
    description: 'Built distributed ML monitoring system for 50+ microservices, maintaining 99.9% uptime across 2.5M+ daily transactions.',
    icon: Cpu,
    color: 'bg-blue-500'
  },
  {
    year: '2021',
    title: 'Software Engineer Intern',
    company: 'Televerge Communications',
    description: 'Optimized backend systems scaling from 7K to 10K+ daily API requests with 30% throughput improvement.',
    icon: Code,
    color: 'bg-green-500'
  },
  {
    year: '2023-2025',
    title: 'M.Sc. Computer Science',
    company: 'Saint Louis University',
    description: 'Thesis on Privacy Threats in Continuous Learning, focusing on Machine Learning Security.',
    icon: GraduationCap,
    color: 'bg-yellow-500'
  },
  {
    year: '2017-2021',
    title: 'B.Sc. Computer Science',
    company: 'Koneru Lakshmaiah University',
    description: 'Minor in Artificial Intelligence, focused on Neural Networks, NLP, and Ethics in AI.',
    icon: BookOpen,
    color: 'bg-pink-500'
  },
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Pushing boundaries in AI to solve complex real-world problems.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building bridges between research and practical implementation.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Creating measurable value through efficient, scalable solutions.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Continuous growth and sharing knowledge with the community.',
    color: 'from-orange-500 to-red-500'
  },
];

const funFacts = [
  { icon: Coffee, text: "Powered by chai & curiosity" },
  { icon: Globe, text: "Speak 3 languages (human & machine)" },
  { icon: Smile, text: "Optimist by nature, Engineer by trade" },
];

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-gray-100 overflow-hidden relative selection:bg-cyan-500/30">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1e293b] to-[#0a0e27]">
          <div className="absolute inset-0 opacity-20 animate-gradient"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00d9ff 100%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/20 blur-[100px]"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-medium"
            >
              👋 Hello World!
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              I'm <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Navya Sree</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Passionate AI Engineer bridging the gap between cutting-edge research and practical enterprise solutions.
              I build intelligent systems that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  <fact.icon className="w-4 h-4 text-cyan-400" />
                  {fact.text}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
              >
                Let's Connect
              </a>
              <a
                href="/projects"
                className="px-8 py-3 glass border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                View Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* 3D Character Container */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <SimpleCharacter state="floating" size={400} />

              {/* Floating Elements */}
              {[Brain, Code, Sparkles, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute p-3 glass rounded-xl border border-white/20 text-cyan-400"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                My Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  With over 4 years of experience in AI and machine learning, I specialize in developing
                  enterprise-scale Generative AI solutions that deliver measurable business impact. My journey
                  spans from academic research in privacy-preserving ML to implementing production systems
                  serving millions of users.
                </p>
                <p>
                  At Gemini Consulting & Services, I architected comprehensive Gen AI platforms using RAG
                  that reduced latency by 40% while improving accuracy by 25%. My work at Oracle Cerner
                  focused on building robust MLOps pipelines and monitoring systems that ensure reliable
                  AI deployment at scale.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-pink-500" />
                Mission & Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-3`}>
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-1">{value.title}</h3>
                    <p className="text-xs text-gray-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Professional Journey</h2>
            <p className="text-gray-400">My path in AI and machine learning</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0e27] border-2 border-cyan-500 rounded-full z-10">
                  <div className="w-full h-full bg-cyan-400 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className={`glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}>
                      <span className="text-sm font-mono text-cyan-400">{item.year}</span>
                      <div className={`h-px flex-1 bg-white/10 group-hover:bg-cyan-500/30 transition-colors`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm mb-3">{item.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty Space for layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}