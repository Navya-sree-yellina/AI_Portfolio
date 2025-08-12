'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Filter, Building2, Calendar, Code2, TrendingUp } from 'lucide-react';
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of enterprise AI solutions, research projects, and technical implementations
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Filter:</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                {/* Project Header */}
                <div className="mb-6">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {project.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="w-4 h-4" />
                      {project.role}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.duration?.startDate} - {project.duration?.endDate || 'Present'}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Key Results */}
                {project.results && project.results.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">{result.value}</p>
                          <p className="text-xs text-gray-600 mt-1">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-500 rounded-full">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
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

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}