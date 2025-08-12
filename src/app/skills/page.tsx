'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Cloud, 
  Database, 
  Globe,
  Shield,
  Sparkles,
  TrendingUp,
  BookOpen,
  Heart
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Generative AI & Deep Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'My core expertise - where innovation meets implementation',
    skills: [
      { name: 'Transformers (GPT, BERT, T5)', level: 95, years: 3 },
      { name: 'Large Language Models', level: 92, years: 2 },
      { name: 'OpenAI API', level: 90, years: 2 },
      { name: 'LangChain', level: 88, years: 2 },
      { name: 'RAG Frameworks', level: 85, years: 2 },
      { name: 'Prompt Engineering', level: 90, years: 2 },
      { name: 'Model Fine-tuning', level: 85, years: 3 },
      { name: 'Weights & Biases', level: 80, years: 2 }
    ],
    personalNote: 'I love how transformers have revolutionized NLP. Every project teaches me something new about their capabilities!'
  },
  {
    title: 'Machine Learning Frameworks',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    description: 'The tools that bring ideas to life',
    skills: [
      { name: 'PyTorch', level: 92, years: 4 },
      { name: 'TensorFlow', level: 88, years: 4 },
      { name: 'Hugging Face Transformers', level: 90, years: 2 },
      { name: 'scikit-learn', level: 85, years: 4 },
      { name: 'Keras', level: 82, years: 3 },
      { name: 'MLflow', level: 78, years: 2 },
      { name: 'Computer Vision', level: 80, years: 3 },
      { name: 'NLP', level: 90, years: 3 }
    ],
    personalNote: 'PyTorch is my go-to for research, while TensorFlow shines in production. Best of both worlds!'
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    description: 'Scaling AI from laptop to enterprise',
    skills: [
      { name: 'AWS (SageMaker, Lambda, EC2, S3)', level: 85, years: 3 },
      { name: 'Azure ML Studio', level: 80, years: 2 },
      { name: 'GCP AI Platform', level: 75, years: 2 },
      { name: 'Docker', level: 88, years: 3 },
      { name: 'Kubernetes', level: 82, years: 2 },
      { name: 'CI/CD Pipelines', level: 85, years: 3 },
      { name: 'GitHub Actions', level: 87, years: 2 },
      { name: 'Terraform', level: 75, years: 2 }
    ],
    personalNote: 'MLOps is where engineering meets science. I enjoy automating the mundane so we can focus on innovation.'
  },
  {
    title: 'Programming & Development',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    description: 'The languages I speak fluently',
    skills: [
      { name: 'Python', level: 95, years: 4 },
      { name: 'SQL', level: 88, years: 4 },
      { name: 'JavaScript', level: 82, years: 3 },
      { name: 'Java', level: 78, years: 3 },
      { name: 'Git', level: 90, years: 4 },
      { name: 'FastAPI', level: 85, years: 2 },
      { name: 'Flask', level: 80, years: 3 },
      { name: 'React', level: 75, years: 2 }
    ],
    personalNote: 'Python feels like home, but I enjoy the challenge of polyglot programming!'
  },
  {
    title: 'Data & Infrastructure',
    icon: Database,
    color: 'from-indigo-500 to-purple-500',
    description: 'The foundation of intelligent systems',
    skills: [
      { name: 'PostgreSQL', level: 85, years: 4 },
      { name: 'MongoDB', level: 80, years: 3 },
      { name: 'ETL Pipelines', level: 88, years: 3 },
      { name: 'Pandas', level: 92, years: 4 },
      { name: 'NumPy', level: 90, years: 4 },
      { name: 'Data Privacy Compliance', level: 85, years: 2 },
      { name: 'Distributed Systems', level: 78, years: 2 },
      { name: 'Vector Databases', level: 82, years: 2 }
    ],
    personalNote: 'Clean data is happy data! I\'ve learned that 80% of AI success comes from solid data engineering.'
  },
  {
    title: 'Research & Ethics',
    icon: Shield,
    color: 'from-teal-500 to-green-500',
    description: 'Building responsible AI for everyone',
    skills: [
      { name: 'Ethical AI Development', level: 90, years: 3 },
      { name: 'Model Interpretability', level: 85, years: 2 },
      { name: 'Privacy-Preserving ML', level: 88, years: 2 },
      { name: 'Research Publications', level: 82, years: 3 },
      { name: 'Computer Science Theory', level: 85, years: 4 },
      { name: 'Differential Privacy', level: 80, years: 2 },
      { name: 'Federated Learning', level: 78, years: 1 },
      { name: 'Bias Detection', level: 82, years: 2 }
    ],
    personalNote: 'Technology should empower, not exclude. I\'m passionate about building AI that\'s fair and accessible.'
  }
];

const certifications = [
  { name: 'Deep Learning Specialization', issuer: 'Coursera', year: '2023' },
  { name: 'AWS Certified ML Specialist', issuer: 'Amazon', year: '2023' },
  { name: 'Ethics in AI', issuer: 'MIT', year: '2024' }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience, continuous learning, 
            and a genuine love for technology.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-500 italic">"Skills are just tools - passion makes the difference"</span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.years}+ years</span>
                    </div>
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`absolute h-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-600 italic flex items-start gap-2">
                  <Heart className="w-4 h-4 text-red-500 mt-1" />
                  {category.personalNote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6" />
            Certifications & Continuous Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 italic">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice." 
            - Currently exploring quantum computing and its intersection with ML!
          </p>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Lines of Python</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Models Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.5M+</div>
              <div className="text-gray-600">Daily Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-gray-600">Curiosity Level</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}