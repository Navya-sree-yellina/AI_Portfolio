'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Code,
  Brain,
  Rocket,
  Heart,
  Star,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Generative AI Engineer',
    company: 'Gemini Consulting & Services',
    location: 'Chesterfield, MO',
    duration: 'Jan 2025 - Present',
    year: 2025,
    type: 'Full-time',
    description: 'Leading the charge in enterprise AI transformation',
    highlights: [
      'Architected enterprise generative AI platform using OpenAI GPT API, transformers, and deep learning models, reducing latency by 40% (2.1s → 1.26s)',
      'Implemented RAG framework achieving 25% improvement in NLP accuracy across 10,000+ production queries',
      'Deployed multi-channel AI agents increasing response throughput 30% (450→585 requests/min)',
      'Established automated MLOps pipeline accelerating deployment cycles by 35%'
    ],
    technologies: ['Python', 'PyTorch', 'LangChain', 'Docker', 'Kubernetes', 'AWS SageMaker'],
    impact: '500+ concurrent users served with 90% uptime improvement',
    personalNote: 'This role combines my passion for cutting-edge AI with real-world impact. Every day brings new challenges in scaling AI systems!'
  },
  {
    id: 2,
    role: 'Systems Engineer',
    company: 'Oracle Cerner',
    location: 'Bengaluru, India',
    duration: 'May 2021 - July 2023',
    year: 2021,
    type: 'Full-time',
    description: 'Building robust ML infrastructure for healthcare',
    highlights: [
      'Built distributed ML monitoring system for 50+ microservices, reducing incident response by 20%',
      'Developed high-performance ETL pipelines improving query performance by 25%',
      'Automated cloud infrastructure managing 200+ S3 buckets and 50+ EC2 instances',
      'Mentored 2 junior developers on software design patterns and testing frameworks'
    ],
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Terraform', 'Docker', 'AWS', 'Azure'],
    impact: 'Maintained 99.9% uptime across 2.5M+ daily transactions',
    personalNote: 'Working in healthcare tech taught me the importance of reliability and precision. Every system we built potentially impacted patient care.'
  },
  {
    id: 3,
    role: 'Software Engineer Intern',
    company: 'Televerge Communications',
    location: 'Bengaluru, India',
    duration: 'Jan 2021 - April 2021',
    year: 2021,
    type: 'Internship',
    description: 'Optimizing telecommunications infrastructure',
    highlights: [
      'Optimized backend systems scaling from 7K to 10K+ daily API requests with 30% throughput improvement',
      'Developed REST API integrations improving data delivery speed by 40% (500ms→300ms)',
      'Created reusable software libraries increasing development efficiency by 25%',
      'Processed 1M+ network events daily using distributed computing'
    ],
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'React', 'Python', 'REST APIs'],
    impact: 'Served 5,000+ active users with improved performance',
    personalNote: 'My first industry experience - where I learned that elegant code and scalability go hand in hand.'
  }
].sort((a, b) => {
  // Sort by year first (descending)
  if (b.year !== a.year) return b.year - a.year;
  // If same year, put full-time before internship
  if (a.type === 'Full-time' && b.type === 'Internship') return -1;
  if (a.type === 'Internship' && b.type === 'Full-time') return 1;
  return 0;
});

const achievements = [
  {
    title: 'Women Entrepreneur of the Year',
    year: '2018',
    organization: 'Regional Business Awards',
    description: 'Recognized for driving business innovation and growth in technology sector',
    icon: Award,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Employee of the Month',
    year: '2022',
    organization: 'Oracle Cerner',
    description: 'Reduced high-risk production incidents by 30% through systematic process auditing',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Research Publication',
    year: '2020',
    organization: 'IRJET',
    description: 'Published "Inspecting CNN and ANN Algorithms using Digit Recognition Model"',
    icon: Brain,
    color: 'from-green-500 to-emerald-500'
  }
];

export default function ExperiencePage() {
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
        {/* Header */}
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
            🚀 Career Trajectory
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Professional <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Journey</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From curious student to AI engineer, my path has been driven by a passion for solving complex problems
            and making technology accessible to everyone.
          </p>
        </motion.div>

        {/* Experience Side-by-Side Layout */}
        <div className="mb-32">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-[300px_1fr] gap-8 items-start"
              >
                {/* Left Side: Timeline & Meta Info */}
                <div className="md:text-right md:sticky md:top-24 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-3xl font-bold text-cyan-400">{exp.year}</span>
                    <div className="flex items-center gap-2 text-purple-300 font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20 mt-2">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Right Side: Content Card */}
                <div className="glass p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-purple-400 font-semibold">{exp.company}</p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg border-l-4 border-cyan-500/50 mb-6">
                      <p className="text-gray-300 italic">
                        "{exp.description}"
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <Rocket className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0 group-hover/item:text-purple-400 transition-colors" />
                          <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-500/10">
                      <p className="text-sm font-semibold text-cyan-300 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Impact: <span className="font-normal text-gray-300">{exp.impact}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-yellow-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Awards & Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl group hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  {achievement.organization}
                  <span className="text-gray-600">•</span>
                  {achievement.year}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-pink-500" />
                Beyond the Code
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  When I'm not training models or optimizing algorithms, you'll find me exploring the intersection of
                  technology and creativity. I believe that the best AI solutions come from understanding not just the
                  technology, but the human needs they serve.
                </p>
                <p>
                  My journey from entrepreneurship to AI engineering has taught me that innovation happens when we dare
                  to question the status quo. Every line of code I write is an opportunity to make someone's life a
                  little easier, a little better.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Code, label: "4+ years coding", color: "text-purple-400" },
                { icon: Users, label: "10+ team projects", color: "text-pink-400" },
                { icon: Brain, label: "∞ learning", color: "text-cyan-400" },
                { icon: Star, label: "Mentoring", color: "text-yellow-400" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-gray-200 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}