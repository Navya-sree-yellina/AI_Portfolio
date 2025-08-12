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
  Heart
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Generative AI Engineer',
    company: 'Gemini Consulting & Services',
    location: 'Chesterfield, MO',
    duration: 'Jan 2025 - Present',
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
];

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
            Professional Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From curious student to AI engineer, my path has been driven by a passion for solving complex problems 
            and making technology accessible to everyone.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="italic">"Building AI that makes a difference, one model at a time"</span>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-4 text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mt-2 sm:mt-0">
                    {exp.type}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 italic">{exp.description}</p>

                <div className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Rocket className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700">
                    💡 Impact: <span className="font-normal">{exp.impact}</span>
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-gray-600 italic">
                    <span className="font-semibold">Personal reflection:</span> {exp.personalNote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-600" />
            Awards & Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{achievement.organization} • {achievement.year}</p>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beyond the Code</h2>
          <p className="text-gray-700 mb-4">
            When I'm not training models or optimizing algorithms, you'll find me exploring the intersection of 
            technology and creativity. I believe that the best AI solutions come from understanding not just the 
            technology, but the human needs they serve.
          </p>
          <p className="text-gray-700">
            My journey from entrepreneurship to AI engineering has taught me that innovation happens when we dare 
            to question the status quo. Every line of code I write is an opportunity to make someone's life a 
            little easier, a little better.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">4+ years coding</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-pink-600" />
              <span className="text-gray-700">10+ team projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">∞ learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}