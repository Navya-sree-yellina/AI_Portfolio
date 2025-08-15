'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Building2, Code2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types';

// Real projects from resume with images
const mockProjects: Partial<Project>[] = [
  {
    id: '1',
    title: 'Enterprise Generative AI Platform',
    slug: 'enterprise-gen-ai-platform',
    company: 'Gemini Consulting & Services',
    role: 'Generative AI Engineer',
    summary: 'Architected enterprise generative AI platform using OpenAI GPT API, transformers, and deep learning models with PyTorch and TensorFlow, reducing information retrieval latency by 40% (2.1s → 1.26s) while supporting 500+ concurrent users.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI GPT API', 'LangChain', 'FastAPI', 'Docker', 'Kubernetes'],
    results: [
      { metric: 'Latency Reduction', value: '40%', impact: '2.1s → 1.26s response time' },
      { metric: 'Concurrent Users', value: '500+', impact: '90% system uptime improvement' },
      { metric: 'NLP Accuracy', value: '25%', impact: 'Across 10,000+ production queries' }
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
    summary: 'Deployed multi-channel AI agents using Python, Azure APIs, and MLOps best practices for contact center operations, increasing response throughput 30% (450→585 requests/min) with focus on ethical AI principles.',
    technologies: ['Python', 'Azure APIs', 'MLOps', 'Docker', 'Kubernetes', 'AWS SageMaker', 'Git', 'GitHub Actions'],
    results: [
      { metric: 'Throughput Increase', value: '30%', impact: '450→585 requests/min' },
      { metric: 'Deployment Speed', value: '35%', impact: 'Faster model deployment cycles' },
      { metric: 'Error Reduction', value: '80%', impact: 'Manual errors: 15% → 3%' }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'ML Monitoring System for Microservices',
    slug: 'ml-monitoring-system',
    company: 'Oracle Cerner',
    role: 'Systems Engineer',
    summary: 'Built distributed machine learning monitoring system using Python and deep learning frameworks for 50+ microservices, reducing incident response time by 20% while maintaining 99.9% uptime across 2.5M+ daily transactions.',
    technologies: ['Python', 'TensorFlow', 'Zabbix', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'PostgreSQL'],
    results: [
      { metric: 'Response Time', value: '-20%', impact: '45→36 minutes incident response' },
      { metric: 'System Uptime', value: '99.9%', impact: 'Across 2.5M+ daily transactions' },
      { metric: 'Cost Savings', value: '$50K', impact: 'Annual hosting cost reduction' }
    ],
    featured: true
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Showcasing enterprise-scale AI solutions with measurable impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {mockProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {project.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="w-4 h-4" />
                      {project.role}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Key Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Key Results
                  </h4>
                  <div className="space-y-3">
                    {project.results?.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{result.metric}</span>
                        <span className="text-lg font-bold text-blue-600">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}