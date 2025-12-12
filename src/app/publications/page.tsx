'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ExternalLink,
  Award,
  BookOpen,
  Users,
  Mail,
  Quote,
  Lightbulb,
  Heart,
  TrendingUp,
  Sparkles,
  Microscope,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const publications = [
  {
    id: '1',
    title: 'Privacy Threats in Continuous Learning: Machine Learning Security Analysis',
    type: 'Thesis',
    status: 'Completed',
    date: 'May 2025',
    institution: 'Saint Louis University',
    description: 'My thesis explores the delicate balance between model adaptation and data privacy. This research is personal to me - I believe we can have intelligent systems without compromising user trust.',
    impact: 'Proposing novel techniques that could protect millions of users\' data in real-time ML systems',
    personalNote: 'This research combines my passion for privacy with cutting-edge ML - it\'s not just my thesis, it\'s my contribution to safer AI.',
    keywords: ['Privacy-Preserving ML', 'Continuous Learning', 'Differential Privacy', 'Machine Learning Security'],
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '2',
    title: 'Inspecting CNN and ANN Algorithms using Digit Recognition Model',
    type: 'Journal Article',
    status: 'Published',
    journal: 'International Research Journal of Engineering and Technology (IRJET)',
    date: 'June 2020',
    volume: 'Volume 7, Issue 6',
    description: 'My first publication! This research optimized CNN and ANN algorithms for digit recognition, achieving 99.2% accuracy on MNIST. It taught me the importance of systematic experimentation and clear scientific communication.',
    impact: 'Contributed novel architectural insights that improved training efficiency by 30%',
    personalNote: 'This paper represents my entry into the research world - proof that curiosity and persistence can lead to meaningful contributions.',
    keywords: ['CNN', 'ANN', 'Deep Learning', 'Digit Recognition', 'Computer Vision'],
    link: '#',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500'
  },
];

const researchInterests = [
  {
    area: 'Privacy-Preserving Machine Learning',
    description: 'Developing techniques to protect sensitive data in ML systems while maintaining model performance.',
    topics: ['Differential Privacy', 'Federated Learning', 'Secure Multi-party Computation'],
    icon: Users,
    color: 'from-green-400 to-emerald-500'
  },
  {
    area: 'Continuous Learning Systems',
    description: 'Investigating security and privacy challenges in models that continuously adapt to new data.',
    topics: ['Catastrophic Forgetting', 'Data Drift', 'Adversarial Attacks'],
    icon: TrendingUp,
    color: 'from-orange-400 to-red-500'
  },
  {
    area: 'Ethical AI Development',
    description: 'Implementing fairness, transparency, and accountability in production AI systems.',
    topics: ['Bias Mitigation', 'Model Interpretability', 'Responsible AI Governance'],
    icon: Heart,
    color: 'from-pink-400 to-rose-500'
  },
  {
    area: 'Large Language Models',
    description: 'Optimizing and deploying transformer-based models for enterprise applications.',
    topics: ['RAG Systems', 'Prompt Engineering', 'Fine-tuning Strategies'],
    icon: Sparkles,
    color: 'from-purple-400 to-indigo-500'
  },
];

export default function PublicationsPage() {
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
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-medium"
          >
            📚 Academic Contributions
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Research & <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Publications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Contributing to the advancement of AI through research in privacy-preserving machine learning,
            continuous learning systems, and ethical AI development.
          </p>
        </motion.div>

        {/* Publications Section */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <BookOpen className="w-8 h-8 text-cyan-400" />
            Publications & Thesis
          </motion.h2>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pub.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <pub.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${pub.status === 'Published'
                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        }`}>
                        {pub.status}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-500" />
                        {pub.type}
                      </span>
                      {pub.date && (
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-500" />
                          {pub.date}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {pub.title}
                    </h3>

                    {pub.journal && (
                      <p className="text-gray-400 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span className="font-medium text-gray-300">{pub.journal}</span>
                        <span className="text-gray-500">•</span>
                        <span>{pub.volume}</span>
                      </p>
                    )}

                    {pub.institution && (
                      <p className="text-gray-400 mb-2 flex items-center gap-2">
                        <Building2Icon className="w-4 h-4 text-purple-400" />
                        <span className="font-medium text-gray-300">{pub.institution}</span>
                        {(pub as any).expectedDate && (
                          <>
                            <span className="text-gray-500">•</span>
                            <span>Expected: {(pub as any).expectedDate}</span>
                          </>
                        )}
                      </p>
                    )}

                    <p className="text-gray-300 mb-6 leading-relaxed border-l-2 border-white/10 pl-4 mt-4">
                      {pub.description}
                    </p>

                    {pub.impact && (
                      <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/5">
                        <p className="text-sm font-semibold text-cyan-300 flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 mt-0.5" />
                          Impact: <span className="font-normal text-gray-300">{pub.impact}</span>
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pub.keywords.map(keyword => (
                        <span
                          key={keyword}
                          className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-400 rounded-lg border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      {pub.personalNote && (
                        <p className="text-gray-500 italic text-sm flex items-start gap-2 max-w-2xl">
                          <Heart className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                          <span className="group-hover:text-gray-400 transition-colors">{pub.personalNote}</span>
                        </p>
                      )}

                      {pub.link && (
                        <a
                          href={pub.link}
                          className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors ml-4 whitespace-nowrap"
                        >
                          <Download className="w-4 h-4" />
                          Download Paper
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Interests Section */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <Microscope className="w-8 h-8 text-purple-400" />
            Current Research Interests
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${interest.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {interest.area}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {interest.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {interest.topics.map(topic => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-300 rounded-lg border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
              <Users className="w-10 h-10 text-cyan-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in Research Collaboration?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              I'm always excited to collaborate on research projects in privacy-preserving ML,
              continuous learning, and ethical AI development.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Building2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}