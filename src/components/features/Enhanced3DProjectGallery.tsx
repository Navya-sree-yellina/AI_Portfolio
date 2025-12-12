'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Code2, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Project } from '@/types';

// Real projects from resume
const projects: Partial<Project>[] = [
  {
    id: '1',
    title: 'Enterprise Generative AI Platform',
    slug: 'enterprise-gen-ai-platform',
    company: 'Gemini Consulting & Services',
    role: 'Generative AI Engineer',
    summary: 'Architected enterprise generative AI platform using OpenAI GPT API, transformers, and deep learning models.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI GPT', 'LangChain', 'FastAPI', 'Docker', 'Kubernetes'],
    results: [
      { metric: 'Latency Reduction', value: '40%', impact: '2.1s → 1.26s' },
      { metric: 'Concurrent Users', value: '500+', impact: '90% uptime' },
      { metric: 'NLP Accuracy', value: '+25%', impact: '10K+ queries' }
    ],
    featured: true,
    imageUrl: '/images/gen-ai-platform.svg'
  },
  {
    id: '2',
    title: 'Multi-Channel AI Contact Center',
    slug: 'ai-contact-center',
    company: 'Gemini Consulting & Services',
    role: 'Generative AI Engineer',
    summary: 'Deployed multi-channel AI agents using Python, Azure APIs, and MLOps best practices for contact center operations.',
    technologies: ['Python', 'Azure APIs', 'MLOps', 'Docker', 'Kubernetes', 'AWS SageMaker'],
    results: [
      { metric: 'Throughput', value: '+30%', impact: '450→585 req/min' },
      { metric: 'Deployment', value: '+35%', impact: 'Faster cycles' },
      { metric: 'Errors', value: '-80%', impact: '15% → 3%' }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'ML Monitoring System',
    slug: 'ml-monitoring-system',
    company: 'Oracle Cerner',
    role: 'Systems Engineer',
    summary: 'Built distributed ML monitoring system for 50+ microservices with deep learning frameworks.',
    technologies: ['Python', 'TensorFlow', 'Zabbix', 'Docker', 'Kubernetes', 'PostgreSQL'],
    results: [
      { metric: 'Response Time', value: '-20%', impact: '45→36 min' },
      { metric: 'Uptime', value: '99.9%', impact: '2.5M+ txns/day' },
      { metric: 'Cost Savings', value: '$50K', impact: 'Annual hosting' }
    ],
    featured: true
  }
];

interface FlipCardProps {
  project: Partial<Project>;
  index: number;
}

function FlipCard({ project, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="perspective-2000 h-[500px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          rotateX: mousePosition.y * 10,
          rotateZ: mousePosition.x * 5,
        }}
        transition={{
          rotateY: { duration: 0.6, ease: 'easeInOut' },
          rotateX: { duration: 0.3 },
          rotateZ: { duration: 0.3 },
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full glass-dark border border-cyan-400/20 rounded-2xl p-8 flex flex-col overflow-hidden group hover:border-cyan-400/40 transition-all">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    {project.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-pink-400" />
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {project.summary}
              </p>

              {/* Key Results Preview */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-4">
                  {project.results?.slice(0, 3).map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Click to flip indicator */}
              <div className="mt-auto pt-4 border-t border-cyan-400/20">
                <p className="text-sm text-cyan-400 text-center flex items-center justify-center gap-2">
                  <span className="animate-pulse">🔄</span>
                  Click to flip for details
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className="w-full h-full bg-gradient-to-br from-cyan-900/90 to-purple-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 flex flex-col overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Impact & Technologies
                </h3>
              </div>

              {/* Detailed Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  Key Results
                </h4>
                <div className="space-y-3">
                  {project.results?.map((result, idx) => (
                    <div key={idx} className="glass px-4 py-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300">{result.metric}</span>
                        <span className="text-lg font-bold text-cyan-400">{result.value}</span>
                      </div>
                      <p className="text-xs text-gray-400">{result.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/10 text-xs font-medium text-gray-200 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-purple-600 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Case Study
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                  className="px-4 py-3 glass border border-cyan-400/30 text-cyan-400 rounded-lg font-semibold text-sm hover:bg-cyan-400/10 transition-all"
                >
                  🔄
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Enhanced3DProjectGallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0e27] via-[#1e293b] to-[#0a0e27] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-4xl">🚀</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise AI solutions delivering measurable business impact
            <br />
            <span className="text-sm text-cyan-400">↓ Explore quantified results and technical implementations</span>
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <FlipCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover-glow overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
