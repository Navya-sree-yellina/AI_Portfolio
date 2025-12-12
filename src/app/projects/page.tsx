'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Filter,
  Building2,
  Calendar,
  Code2,
  TrendingUp,
  Search,
  Zap,
  Star,
  Layers
} from 'lucide-react';
import { Project } from '@/types';

// Extended mock data for all projects
const allProjects: Partial<Project>[] = [
  {
    id: '1',
    title: 'Enterprise Gen AI Platform',
    slug: 'enterprise-gen-ai-platform',
    company: 'Gemini Consulting & Services',
    role: 'Lead AI Engineer',
    duration: { startDate: '2023-01', endDate: '2024-06', ongoing: false },
    summary: 'Architected a comprehensive Generative AI platform using RAG that reduced latency by 40% and improved NLP accuracy by 25%.',
    technologies: ['Python', 'PyTorch', 'OpenAI GPT', 'LangChain', 'FastAPI', 'Docker'],
    results: [
      { metric: 'Latency Reduction', value: '40%', impact: 'Improved user experience' },
      { metric: 'NLP Accuracy', value: '25%', impact: 'Better response quality' },
      { metric: 'Cost Savings', value: '30%', impact: 'Optimized resources' }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'MLOps Pipeline Automation',
    slug: 'mlops-pipeline-automation',
    company: 'Oracle Cerner',
    role: 'ML Engineer',
    duration: { startDate: '2022-06', endDate: '2023-01', ongoing: false },
    summary: 'Established automated CI/CD pipelines for ML models, reducing deployment cycles by 35% and eliminating 80% of manual errors.',
    technologies: ['Python', 'Kubernetes', 'Docker', 'AWS SageMaker', 'GitHub Actions'],
    results: [
      { metric: 'Deployment Speed', value: '35%', impact: 'Faster time to market' },
      { metric: 'Error Reduction', value: '80%', impact: 'Improved reliability' }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Privacy-Preserving ML System',
    slug: 'privacy-preserving-ml',
    company: 'Academic Research',
    role: 'Research Lead',
    duration: { startDate: '2023-06', endDate: '2024-01', ongoing: false },
    summary: 'Developed novel techniques for privacy-preserving continuous learning, addressing critical security concerns in ML systems.',
    technologies: ['Python', 'TensorFlow', 'Differential Privacy', 'Federated Learning'],
    results: [
      { metric: 'Privacy Score', value: '95%', impact: 'GDPR compliant' },
      { metric: 'Publications', value: '2', impact: 'Peer-reviewed papers' }
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Real-time ML Monitoring System',
    slug: 'ml-monitoring-system',
    company: 'Oracle Cerner',
    role: 'Systems Engineer',
    duration: { startDate: '2021-09', endDate: '2022-06', ongoing: false },
    summary: 'Built comprehensive monitoring for 15+ production ML models with automated anomaly detection and alerting.',
    technologies: ['Python', 'Prometheus', 'Grafana', 'PostgreSQL', 'Redis'],
    results: [
      { metric: 'False Positives', value: '-30%', impact: 'Reduced alert fatigue' },
      { metric: 'Uptime', value: '99.9%', impact: 'System reliability' }
    ],
    featured: false
  },
  {
    id: '5',
    title: 'Healthcare Data ETL Pipeline',
    slug: 'healthcare-etl-pipeline',
    company: 'Oracle Cerner',
    role: 'Data Engineer',
    duration: { startDate: '2021-03', endDate: '2021-09', ongoing: false },
    summary: 'Developed scalable ETL pipelines processing 10TB+ of healthcare data daily with HIPAA compliance.',
    technologies: ['Apache Spark', 'Python', 'SQL', 'AWS S3', 'Airflow'],
    results: [
      { metric: 'Data Processing', value: '10TB/day', impact: 'Scale achieved' },
      { metric: 'Processing Time', value: '-50%', impact: 'Efficiency gain' }
    ],
    featured: false
  },
  {
    id: '6',
    title: 'NLP Intent Classification System',
    slug: 'nlp-intent-classification',
    company: 'Gemini Consulting',
    role: 'AI Engineer',
    duration: { startDate: '2023-03', endDate: '2023-09', ongoing: false },
    summary: 'Developed multi-class intent classification system for customer service automation with 92% accuracy.',
    technologies: ['BERT', 'Transformers', 'PyTorch', 'FastAPI', 'Redis'],
    results: [
      { metric: 'Classification Accuracy', value: '92%', impact: 'High precision' },
      { metric: 'Response Time', value: '<100ms', impact: 'Real-time processing' }
    ],
    featured: false
  },
  {
    id: '7',
    title: 'Personal Portfolio & AI Platform',
    slug: 'personal-portfolio-website',
    company: 'Personal Project',
    role: 'Full Stack Developer',
    duration: { startDate: '2024-11', endDate: '2024-12', ongoing: true },
    summary: 'Built a modern portfolio website with integrated AI capabilities, showcasing projects, publications, and professional experience with real-time AI assistant features.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Supabase', 'Vercel'],
    results: [
      { metric: 'Performance Score', value: '98/100', impact: 'Lighthouse rating' },
      { metric: 'Load Time', value: '<2s', impact: 'Optimized user experience' },
      { metric: 'SEO Score', value: '100%', impact: 'Full search optimization' }
    ],
    featured: true
  }
];

const categories = ['All', 'Gen AI', 'MLOps', 'Research', 'Data Engineering'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' ||
      (selectedCategory === 'Gen AI' && project.title?.toLowerCase().includes('ai')) ||
      (selectedCategory === 'MLOps' && project.title?.toLowerCase().includes('mlops')) ||
      (selectedCategory === 'Research' && project.company?.includes('Research')) ||
      (selectedCategory === 'Data Engineering' && project.title?.toLowerCase().includes('etl'));

    const matchesSearch = searchTerm === '' ||
      project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

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
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-medium"
          >
            🚀 Innovation Portfolio
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Featured <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of enterprise AI solutions, research projects, and technical implementations
            that drive real business value.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass p-4 rounded-2xl border border-white/5">
            {/* Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-4">
                        {project.featured && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/20">
                            <Star className="w-3 h-3 fill-yellow-400" />
                            Featured
                          </span>
                        )}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-colors ml-auto"
                        >
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </Link>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-purple-400" />
                          {project.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Code2 className="w-4 h-4 text-cyan-400" />
                          {project.role}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-pink-400" />
                          {project.duration?.startDate} - {project.duration?.endDate || 'Present'}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4 mb-6">
                        {project.summary}
                      </p>
                    </div>

                    {/* Key Results */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-6 bg-white/5 rounded-xl p-4 border border-white/5">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <TrendingUp className="w-3 h-3" />
                          Key Impact
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.results.slice(0, 2).map((result, idx) => (
                            <div key={idx}>
                              <p className="text-xl font-bold text-cyan-400">{result.value}</p>
                              <p className="text-xs text-gray-500 mt-1">{result.metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-300 rounded-lg border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies && project.technologies.length > 5 && (
                          <span className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-500 rounded-lg border border-white/10">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glass rounded-2xl border border-white/5"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="px-6 py-2 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}