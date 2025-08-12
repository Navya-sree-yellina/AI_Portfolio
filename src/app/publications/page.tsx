'use client';

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
  Sparkles
} from 'lucide-react';

const publications = [
  {
    id: '1',
    title: 'Privacy Threats in Continuous Learning: Machine Learning Security Analysis',
    type: 'Thesis',
    status: 'In Progress',
    expectedDate: 'May 2025',
    institution: 'Saint Louis University',
    description: 'My thesis explores the delicate balance between model adaptation and data privacy. This research is personal to me - I believe we can have intelligent systems without compromising user trust.',
    impact: 'Proposing novel techniques that could protect millions of users\' data in real-time ML systems',
    personalNote: 'This research combines my passion for privacy with cutting-edge ML - it\'s not just my thesis, it\'s my contribution to safer AI.',
    keywords: ['Privacy-Preserving ML', 'Continuous Learning', 'Differential Privacy', 'Machine Learning Security'],
    icon: BookOpen,
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
  },
];

const researchInterests = [
  {
    area: 'Privacy-Preserving Machine Learning',
    description: 'Developing techniques to protect sensitive data in ML systems while maintaining model performance.',
    topics: ['Differential Privacy', 'Federated Learning', 'Secure Multi-party Computation'],
  },
  {
    area: 'Continuous Learning Systems',
    description: 'Investigating security and privacy challenges in models that continuously adapt to new data.',
    topics: ['Catastrophic Forgetting', 'Data Drift', 'Adversarial Attacks'],
  },
  {
    area: 'Ethical AI Development',
    description: 'Implementing fairness, transparency, and accountability in production AI systems.',
    topics: ['Bias Mitigation', 'Model Interpretability', 'Responsible AI Governance'],
  },
  {
    area: 'Large Language Models',
    description: 'Optimizing and deploying transformer-based models for enterprise applications.',
    topics: ['RAG Systems', 'Prompt Engineering', 'Fine-tuning Strategies'],
  },
];

const achievements = [
  {
    title: 'Women Entrepreneur of the Year',
    year: '2018',
    description: 'Recognized for driving business innovation and growth through technology leadership.',
    icon: Award,
  },
  {
    title: 'Employee of the Month',
    organization: 'Oracle Cerner',
    description: 'Awarded for reducing high-risk production incidents by 30% through systematic process auditing.',
    icon: Award,
  },
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Research & Publications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contributing to the advancement of AI through research in privacy-preserving machine learning, 
              continuous learning systems, and ethical AI development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
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
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pub.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        pub.status === 'Published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {pub.status}
                      </span>
                      <span className="text-sm text-gray-500">
                        {pub.type}
                      </span>
                      {pub.date && (
                        <span className="text-sm text-gray-500">
                          {pub.date}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {pub.title}
                    </h3>
                    
                    {pub.journal && (
                      <p className="text-gray-600 mb-2">
                        <strong>{pub.journal}</strong> • {pub.volume}
                      </p>
                    )}
                    
                    {pub.institution && (
                      <p className="text-gray-600 mb-2">
                        <strong>{pub.institution}</strong> • Expected: {pub.expectedDate}
                      </p>
                    )}
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                    
                    {pub.impact && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                        <p className="text-sm font-semibold text-gray-700 flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5" />
                          Impact: <span className="font-normal">{pub.impact}</span>
                        </p>
                      </div>
                    )}
                    
                    {pub.personalNote && (
                      <div className="border-t pt-4 mb-4">
                        <p className="text-gray-600 italic flex items-start gap-2">
                          <Heart className="w-4 h-4 text-red-500 mt-1" />
                          {pub.personalNote}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.keywords.map(keyword => (
                        <span
                          key={keyword}
                          className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    {pub.link && (
                      <a
                        href={pub.link}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Paper
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
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
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {interest.area}
                </h3>
                <p className="text-gray-700 mb-4">
                  {interest.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {interest.topics.map(topic => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-blue-50 text-sm text-blue-700 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Recognition & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <achievement.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    {achievement.year && (
                      <p className="text-sm text-gray-600 mb-2">{achievement.year}</p>
                    )}
                    {achievement.organization && (
                      <p className="text-sm text-gray-600 mb-2">{achievement.organization}</p>
                    )}
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              Interested in Research Collaboration?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              I'm always excited to collaborate on research projects in privacy-preserving ML, 
              continuous learning, and ethical AI development.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}