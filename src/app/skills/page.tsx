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
  Heart,
  Zap,
  Cpu,
  Layers
} from 'lucide-react';
import { useEffect, useState } from 'react';

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

export default function SkillsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

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
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-500/20 blur-[100px]"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
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
            ⚡ Technical Arsenal
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Technical <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience, continuous learning,
            and a genuine love for technology.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              onHoverStart={() => setActiveCategory(categoryIndex)}
              onHoverEnd={() => setActiveCategory(null)}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-gray-400 mt-2 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.years}+ years</span>
                      </div>
                      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                          className={`absolute h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 italic text-sm flex items-start gap-2">
                    <Heart className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors">{category.personalNote}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-white">By the Numbers</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-gray-400 font-medium flex items-center justify-center gap-2">
                  <Code className="w-4 h-4" />
                  Lines of Python
                </div>
              </div>

              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-gray-400 font-medium flex items-center justify-center gap-2">
                  <Layers className="w-4 h-4" />
                  Models Trained
                </div>
              </div>

              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  ∞
                </div>
                <div className="text-gray-400 font-medium flex items-center justify-center gap-2">
                  <Brain className="w-4 h-4" />
                  Curiosity Level
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}