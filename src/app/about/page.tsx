'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Target, Users, Code, Brain } from 'lucide-react';
import Image from 'next/image';

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
  },
  {
    year: '2021-2023',
    title: 'Systems Engineer',
    company: 'Oracle Cerner',
    description: 'Built distributed ML monitoring system for 50+ microservices, maintaining 99.9% uptime across 2.5M+ daily transactions.',
  },
  {
    year: '2021',
    title: 'Software Engineer Intern',
    company: 'Televerge Communications',
    description: 'Optimized backend systems scaling from 7K to 10K+ daily API requests with 30% throughput improvement.',
  },
  {
    year: '2023-2025',
    title: 'M.Sc. Computer Science',
    company: 'Saint Louis University',
    description: 'Thesis on Privacy Threats in Continuous Learning, focusing on Machine Learning Security.',
  },
  {
    year: '2017-2021',
    title: 'B.Sc. Computer Science',
    company: 'Koneru Lakshmaiah University',
    description: 'Minor in Artificial Intelligence, focused on Neural Networks, NLP, and Ethics in AI.',
  },
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Pushing boundaries in AI to solve complex real-world problems.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building bridges between research and practical implementation.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Creating measurable value through efficient, scalable solutions.',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Continuous growth and sharing knowledge with the community.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate AI Engineer bridging the gap between cutting-edge research and practical enterprise solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Brain className="w-20 h-20 text-white" />
                  </div>
                  <p className="text-gray-600">Navya Sree Yellina</p>
                  <p className="text-sm text-gray-500">Generative AI Engineer</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Building the Future with AI
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 4 years of experience in AI and machine learning, I specialize in developing 
                  enterprise-scale Generative AI solutions that deliver measurable business impact. My journey 
                  spans from academic research in privacy-preserving ML to implementing production systems 
                  serving millions of users.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Gemini Consulting & Services, I architected comprehensive Gen AI platforms using RAG 
                  that reduced latency by 40% while improving accuracy by 25%. My work at Oracle Cerner 
                  focused on building robust MLOps pipelines and monitoring systems that ensure reliable 
                  AI deployment at scale.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm passionate about ethical AI development and have published research on privacy threats 
                  in continuous learning systems. My goal is to create AI solutions that are not just powerful, 
                  but also responsible, transparent, and aligned with human values.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">4+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">15+</p>
                  <p className="text-sm text-gray-600">Projects Delivered</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">2</p>
                  <p className="text-sm text-gray-600">Papers Published</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-gray-600">Comprehensive skill set across the AI/ML stack</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Journey</h2>
            <p className="text-gray-600">My path in AI and machine learning</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start mb-8"
              >
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                <div className="ml-16">
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                  <p className="text-blue-600 font-medium">{item.company}</p>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-600">Principles that guide my work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-600 mb-8">
              I'm always excited to work on challenging AI projects that make a real impact
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}