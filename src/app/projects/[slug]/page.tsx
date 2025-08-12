'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Building2, 
  Calendar, 
  Code2, 
  TrendingUp,
  CheckCircle,
  Target,
  Layers,
  GitBranch,
  Users,
  Award,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { Project } from '@/types';

// Full project data with extended details
const projectsData: Record<string, Project> = {
  'ai-code-reviewer': {
    id: '1',
    title: 'AI-Powered Code Review Assistant',
    slug: 'ai-code-reviewer',
    company: 'Personal Project',
    role: 'Creator',
    duration: { startDate: '2024-09', endDate: '2024-11', ongoing: false },
    summary: 'Built an AI assistant that performs intelligent code reviews, suggests optimizations, and detects security vulnerabilities using LLMs.',
    detailedDescription: `Developed an intelligent code review system that leverages Large Language Models to provide comprehensive code analysis. The tool goes beyond traditional linting by understanding code context, suggesting architectural improvements, identifying potential bugs, and detecting security vulnerabilities. It integrates seamlessly with GitHub and provides actionable feedback with code examples.`,
    technologies: ['Python', 'OpenAI API', 'LangChain', 'GitHub API', 'FastAPI', 'Docker', 'PostgreSQL', 'React', 'TypeScript'],
    results: [
      { metric: 'Review Time', value: '-70%', impact: 'Faster feedback cycles' },
      { metric: 'Bug Detection', value: '85%', impact: 'Accuracy rate' },
      { metric: 'Code Quality', value: '+40%', impact: 'Improvement in metrics' },
      { metric: 'GitHub Stars', value: '250+', impact: 'Community adoption' }
    ],
    challenges: [
      'Understanding context across multiple files',
      'Minimizing false positives in security detection',
      'Supporting multiple programming languages',
      'Managing API rate limits and costs'
    ],
    solutions: [
      'Implemented AST parsing for deep code understanding',
      'Fine-tuned models on security vulnerability datasets',
      'Created language-specific analysis modules',
      'Built intelligent caching and request batching'
    ],
    teamSize: 'Solo project',
    myContributions: [
      'Full project architecture and implementation',
      'Prompt engineering for accurate code analysis',
      'Integration with GitHub Actions',
      'Documentation and community support',
      'Open-source release and maintenance'
    ],
    lessonsLearned: [
      'Importance of iterative development with continuous user feedback',
      'Value of comprehensive monitoring and observability in AI systems',
      'Need for balance between model complexity and inference speed'
    ],
    featured: true
  },
  'privacy-guard-ml': {
    id: '2',
    title: 'PrivacyGuard - Differential Privacy Toolkit',
    slug: 'privacy-guard-ml',
    company: 'Personal Research Project',
    role: 'Creator',
    duration: { startDate: '2024-06', endDate: '2024-10', ongoing: false },
    summary: 'Open-source toolkit for implementing differential privacy in machine learning pipelines, ensuring data privacy without sacrificing model accuracy.',
    detailedDescription: `Created a comprehensive Python library that makes differential privacy accessible to ML practitioners. The toolkit provides easy-to-use APIs for adding privacy guarantees to common ML workflows, including training, inference, and data preprocessing. It includes implementations of state-of-the-art privacy mechanisms and automated privacy budget management.`,
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Differential Privacy', 'GitHub Actions', 'Sphinx Docs', 'pytest'],
    results: [
      { metric: 'Accuracy Retention', value: '98%', impact: 'With privacy guarantees' },
      { metric: 'PyPI Downloads', value: '5K+/month', impact: 'Active usage' },
      { metric: 'Privacy Budget', value: 'ε=1.0', impact: 'Strong privacy' },
      { metric: 'Performance Overhead', value: '<5%', impact: 'Minimal impact' }
    ],
    challenges: [
      'Balancing privacy guarantees with model utility',
      'Making complex math accessible to practitioners',
      'Supporting diverse ML frameworks',
      'Providing clear privacy budget visualization'
    ],
    solutions: [
      'Implemented adaptive noise calibration algorithms',
      'Created intuitive high-level APIs',
      'Built framework-agnostic core with specific adapters',
      'Developed interactive privacy budget dashboard'
    ],
    teamSize: 'Solo project with community contributors',
    myContributions: [
      'Core algorithm implementation',
      'API design and documentation',
      'Comprehensive test suite',
      'Tutorial notebooks and examples',
      'Conference presentation at PrivacyML 2024'
    ],
    lessonsLearned: [
      'Automation is key to scaling ML operations',
      'Importance of standardization in ML workflows',
      'Value of comprehensive monitoring and alerting'
    ],
    featured: true
  },
  'llm-fine-tuner': {
    id: '3',
    title: 'AutoTune - Automated LLM Fine-tuning Platform',
    slug: 'llm-fine-tuner',
    company: 'Personal Project',
    role: 'Creator',
    duration: { startDate: '2024-07', endDate: '2024-09', ongoing: false },
    summary: 'Built a platform that automates the fine-tuning process for Large Language Models with custom datasets and automatic hyperparameter optimization.',
    detailedDescription: `Developed an end-to-end platform that simplifies the complex process of fine-tuning Large Language Models. The system automatically handles data preprocessing, hyperparameter tuning, training optimization, and deployment. It supports multiple model architectures and provides an intuitive web interface for non-technical users to create specialized AI models for their specific use cases.`,
    technologies: ['Python', 'Transformers', 'Hugging Face', 'PyTorch', 'FastAPI', 'React', 'PostgreSQL', 'Weights & Biases', 'Docker'],
    results: [
      { metric: 'Privacy Score', value: '95%', impact: 'GDPR compliant' },
      { metric: 'Publications', value: '2', impact: 'Peer-reviewed papers' },
      { metric: 'Accuracy Retention', value: '98%', impact: 'Minimal performance loss' },
      { metric: 'Industry Adoption', value: '3', impact: 'Companies using framework' }
    ],
    challenges: [
      'Balancing privacy guarantees with model utility',
      'Scaling federated learning to thousands of clients',
      'Implementing efficient homomorphic operations',
      'Proving theoretical privacy bounds'
    ],
    solutions: [
      'Developed adaptive noise injection techniques',
      'Implemented hierarchical aggregation for scalability',
      'Created optimized cryptographic protocols',
      'Established formal privacy proofs using differential privacy'
    ],
    teamSize: '5 researchers, 2 PhD students',
    myContributions: [
      'Played key role in research direction and hypothesis formulation',
      'Developed core privacy-preserving algorithms',
      'Conducted extensive experimental validation',
      'Authored research papers and presentations',
      'Collaborated with industry partners for real-world validation'
    ],
    lessonsLearned: [
      'Research requires patience and systematic experimentation',
      'Importance of bridging theory and practice',
      'Value of interdisciplinary collaboration'
    ],
    links: [
      { label: 'Research Paper', url: '#' },
      { label: 'GitHub Repository', url: '#' }
    ],
    featured: true
  },
  'voice-assistant-rag': {
    id: '4',
    title: 'VoiceRAG - Conversational AI Assistant',
    slug: 'voice-assistant-rag',
    company: 'Personal Project',
    role: 'Creator',
    duration: { startDate: '2024-05', endDate: '2024-07', ongoing: false },
    summary: 'Developed a voice-enabled RAG system that allows natural conversation with documents using speech recognition and synthesis.',
    detailedDescription: `Created an innovative voice-first interface for Retrieval-Augmented Generation that enables users to have natural conversations with their documents. The system combines speech recognition, RAG technology, and text-to-speech to create an accessible AI assistant. It supports multiple languages and can handle complex multi-turn conversations while maintaining context across the entire document corpus.`,
    technologies: ['Python', 'Whisper API', 'LangChain', 'Pinecone', 'FastAPI', 'WebSockets', 'React', 'OpenAI TTS', 'Redis'],
    results: [
      { metric: 'Response Latency', value: '<1.5s', impact: 'Real-time conversation' },
      { metric: 'Languages', value: '10+', impact: 'Multi-lingual support' },
      { metric: 'Accuracy', value: '94%', impact: 'Speech recognition' },
      { metric: 'User Sessions', value: '1K+/week', impact: 'Active usage' }
    ],
    challenges: [
      'Managing conversation context across voice interactions',
      'Minimizing latency for real-time speech processing',
      'Handling background noise and accents',
      'Synchronizing audio streams with RAG responses'
    ],
    solutions: [
      'Implemented conversation memory with context window management',
      'Used streaming APIs and parallel processing',
      'Applied noise cancellation and accent adaptation',
      'Created WebSocket-based real-time communication'
    ],
    teamSize: 'Solo project',
    myContributions: [
      'Full system architecture and implementation',
      'Voice interface design and UX',
      'RAG pipeline optimization for voice',
      'Multi-language support implementation',
      'Performance optimization for real-time processing'
    ],
    lessonsLearned: [
      'Observability is crucial for ML systems in production',
      'Importance of actionable alerts over noise',
      'Value of automated remediation where possible'
    ],
    featured: false
  },
  'ml-model-marketplace': {
    id: '5',
    title: 'ModelHub - ML Model Marketplace',
    slug: 'ml-model-marketplace',
    company: 'Personal Project',
    role: 'Creator',
    duration: { startDate: '2024-03', endDate: '2024-06', ongoing: false },
    summary: 'Created a marketplace platform where developers can share, discover, and deploy pre-trained ML models with one-click deployment.',
    detailedDescription: `Built a comprehensive platform that democratizes access to machine learning models. The marketplace allows developers to upload their trained models with documentation, benchmarks, and example usage. Users can browse models by category, test them with sample data, and deploy directly to their infrastructure. The platform includes model versioning, automated testing, and performance benchmarking.`,
    technologies: ['Apache Spark', 'Python', 'SQL', 'AWS S3', 'Airflow', 'Delta Lake', 'Databricks', 'PostgreSQL', 'Data Vault 2.0'],
    results: [
      { metric: 'Data Processing', value: '10TB/day', impact: 'Scale achieved' },
      { metric: 'Processing Time', value: '-50%', impact: 'Efficiency gain' },
      { metric: 'Data Quality', value: '99.9%', impact: 'Accuracy improvement' },
      { metric: 'Cost Reduction', value: '40%', impact: 'Infrastructure optimization' }
    ],
    challenges: [
      'Handling diverse healthcare data formats (HL7, FHIR, etc.)',
      'Ensuring HIPAA compliance throughout the pipeline',
      'Managing large-scale data processing efficiently',
      'Implementing complex business rules and transformations'
    ],
    solutions: [
      'Created parsers for multiple healthcare data standards',
      'Implemented end-to-end encryption and audit logging',
      'Optimized Spark jobs with partitioning and caching',
      'Built rule engine for configurable transformations'
    ],
    teamSize: '7 data engineers, 2 data architects',
    myContributions: [
      'Developed core ETL framework and utilities',
      'Implemented data quality validation checks',
      'Optimized Spark job performance',
      'Created data lineage tracking system',
      'Ensured HIPAA compliance requirements'
    ],
    lessonsLearned: [
      'Importance of data quality in healthcare',
      'Value of incremental processing for large datasets',
      'Need for comprehensive error handling and recovery'
    ],
    featured: false
  },
  'ai-study-buddy': {
    id: '6',
    title: 'StudyBuddy - AI Learning Companion',
    slug: 'ai-study-buddy',
    company: 'Personal Project',
    role: 'Creator',
    duration: { startDate: '2024-01', endDate: '2024-03', ongoing: false },
    summary: 'Built an AI-powered study assistant that creates personalized learning paths, quizzes, and explanations from any educational content.',
    detailedDescription: `Developed an intelligent tutoring system that transforms any educational material into an interactive learning experience. The platform uses LLMs to generate personalized study guides, practice questions, and detailed explanations. It adapts to individual learning styles and tracks progress over time, providing insights into knowledge gaps and suggesting targeted review materials.`,
    technologies: ['BERT', 'Transformers', 'PyTorch', 'FastAPI', 'Redis', 'Hugging Face', 'ONNX', 'Docker', 'PostgreSQL'],
    results: [
      { metric: 'Classification Accuracy', value: '92%', impact: 'High precision' },
      { metric: 'Response Time', value: '<100ms', impact: 'Real-time processing' },
      { metric: 'Languages Supported', value: '5', impact: 'Multi-lingual capability' },
      { metric: 'Cost per Query', value: '-70%', impact: 'Reduced operational costs' }
    ],
    challenges: [
      'Handling ambiguous and context-dependent queries',
      'Achieving low latency for real-time classification',
      'Supporting multiple languages efficiently',
      'Maintaining model performance with evolving intents'
    ],
    solutions: [
      'Implemented context-aware classification with conversation history',
      'Optimized models using ONNX and quantization',
      'Created language-specific fine-tuning pipelines',
      'Built continuous learning system with feedback loops'
    ],
    teamSize: '5 engineers, 2 NLP specialists',
    myContributions: [
      'Designed intent classification architecture',
      'Fine-tuned BERT models for specific domains',
      'Implemented model serving infrastructure',
      'Created evaluation and testing frameworks',
      'Developed multi-language support'
    ],
    lessonsLearned: [
      'Importance of continuous model improvement',
      'Value of domain-specific fine-tuning',
      'Need for robust evaluation metrics'
    ],
    featured: false
  },
  'digit-recognition-research': {
    id: '7',
    title: 'Advanced Digit Recognition with CNN/ANN',
    slug: 'digit-recognition-research',
    company: 'Academic Research',
    role: 'Lead Researcher',
    duration: { startDate: '2020-03', endDate: '2020-06', ongoing: false },
    summary: 'Published research on optimizing CNN and ANN algorithms for digit recognition, achieving 99.2% accuracy on MNIST dataset.',
    detailedDescription: `Conducted comprehensive research comparing and optimizing Convolutional Neural Networks (CNN) and Artificial Neural Networks (ANN) for digit recognition tasks. The project involved implementing novel architectural modifications, exploring various optimization techniques, and conducting extensive ablation studies. The research resulted in a peer-reviewed publication and contributed new insights to the computer vision community.`,
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'React', 'Python', 'REST APIs', 'Network Protocols', 'Git'],
    results: [
      { metric: 'API Throughput', value: '+43%', impact: 'From 7K to 10K+ requests' },
      { metric: 'Memory Usage', value: '-15%', impact: 'Optimized performance' },
      { metric: 'Events Processed', value: '1M+/day', impact: 'Scale achieved' },
      { metric: 'Response Time', value: '-40%', impact: 'From 500ms to 300ms' }
    ],
    challenges: [
      'Parsing diverse network protocol formats',
      'Handling high-volume streaming data',
      'Ensuring real-time processing requirements',
      'Optimizing memory usage for large datasets'
    ],
    solutions: [
      'Implemented efficient parsing algorithms',
      'Used streaming processing techniques',
      'Created multi-threaded processing pipeline',
      'Applied memory pooling and caching strategies'
    ],
    teamSize: '5 engineers',
    myContributions: [
      'Developed core protocol parsing engine',
      'Optimized backend API performance',
      'Created reusable software libraries',
      'Implemented REST API integrations',
      'Improved data delivery mechanisms'
    ],
    lessonsLearned: [
      'Importance of efficient algorithms for high-volume data',
      'Value of profiling and optimization',
      'Benefits of modular, reusable code design'
    ],
    featured: false
  },
  'personal-portfolio-website': {
    id: '8',
    title: 'Personal Portfolio & AI Platform',
    slug: 'personal-portfolio-website',
    company: 'Personal Project',
    role: 'Full Stack Developer',
    duration: { startDate: '2024-11', endDate: '2024-12', ongoing: true },
    summary: 'Built a modern portfolio website with integrated AI capabilities, showcasing projects, publications, and professional experience with real-time AI assistant features.',
    detailedDescription: `Developed a comprehensive personal portfolio platform that goes beyond traditional static websites by integrating advanced AI capabilities. The platform serves as both a professional showcase and a demonstration of technical expertise, featuring real-time AI interactions, dynamic content generation, and seamless user experience.`,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Supabase', 'Vercel', 'Framer Motion', 'React Hook Form'],
    results: [
      { metric: 'Performance Score', value: '98/100', impact: 'Lighthouse rating' },
      { metric: 'Load Time', value: '<2s', impact: 'Optimized user experience' },
      { metric: 'SEO Score', value: '100%', impact: 'Full search optimization' },
      { metric: 'Accessibility', value: 'WCAG AA', impact: 'Inclusive design' }
    ],
    challenges: [
      'Integrating AI features without compromising performance',
      'Creating responsive design for all device types',
      'Implementing SEO best practices for portfolio visibility',
      'Managing API rate limits and costs'
    ],
    solutions: [
      'Implemented smart caching and request optimization',
      'Used responsive design patterns with Tailwind CSS',
      'Applied Next.js SEO optimizations and metadata',
      'Created efficient API usage with request batching'
    ],
    teamSize: 'Solo project',
    myContributions: [
      'Full stack development from concept to deployment',
      'UI/UX design and implementation',
      'AI integration and prompt engineering',
      'Performance optimization and testing',
      'Continuous deployment setup with Vercel'
    ],
    lessonsLearned: [
      'Importance of performance optimization in modern web apps',
      'Value of AI integration for enhanced user experience',
      'Benefits of using modern frameworks and tools'
    ],
    links: [
      { label: 'Live Website', url: '#' },
      { label: 'GitHub Repository', url: '#' }
    ],
    featured: true
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (slug && projectsData[slug]) {
      setProject(projectsData[slug]);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <Link href="/projects" className="text-blue-600 hover:text-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {project.featured && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
              Featured Project
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              {project.company}
            </span>
            <span className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              {project.role}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {project.duration?.startDate} - {project.duration?.ongoing ? 'Present' : project.duration?.endDate}
            </span>
            {project.teamSize && (
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {project.teamSize}
              </span>
            )}
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {project.summary}
          </p>
        </motion.div>

        {/* Key Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Key Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results?.map((result, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <p className="text-3xl font-bold text-blue-600 mb-2">{result.value}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">{result.metric}</p>
                <p className="text-xs text-gray-600">{result.impact}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Project Overview */}
        {project.detailedDescription && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-600" />
              Project Overview
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>
          </motion.section>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && project.solutions && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Challenges & Solutions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Challenges Faced</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Solutions Implemented</h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-600" />
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* My Contributions */}
        {project.myContributions && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              My Contributions
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <ul className="space-y-3">
                {project.myContributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* Lessons Learned */}
        {project.lessonsLearned && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <ul className="space-y-3">
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* External Links */}
        {project.links && project.links.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-between items-center pt-8 border-t border-gray-200"
        >
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let's Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}