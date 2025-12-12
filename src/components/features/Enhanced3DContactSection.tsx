'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Calendar, Loader2, Sparkles } from 'lucide-react';
import { ContactSubmission } from '@/types';
import SimpleCharacter from '../3d/SimpleCharacter';

export default function Enhanced3DContactSection() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: '',
    technologiesOfInterest: [],
    urgency: 'planning'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [characterState, setCharacterState] = useState<'idle' | 'greeting' | 'coding' | 'celebrating'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCharacterState('coding');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setCharacterState('celebrating');
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: 'general',
          message: '',
          technologiesOfInterest: [],
          urgency: 'planning'
        });
      } else {
        setSubmitStatus('error');
        setCharacterState('idle');
      }
    } catch (error) {
      setSubmitStatus('error');
      setCharacterState('idle');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setCharacterState('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0e27] via-[#1e293b] to-[#0a0e27] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-12 h-12 text-cyan-400" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's{' '}
            <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Connect
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Interested in discussing how I can contribute to your AI initiatives? Let's explore opportunities to collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-8 border border-cyan-400/20">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setCharacterState('greeting')}
                    onBlur={() => setCharacterState('idle')}
                    className="w-full px-4 py-3 glass border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Company & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-cyan-400/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="recruitment">Recruitment</option>
                    <option value="consultation">Consultation</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="speaking">Speaking Engagement</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg shadow-lg hover-glow disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-400 text-center font-semibold"
                >
                  🎉 Message sent! I'll get back to you within 24 hours.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-400 text-center font-semibold"
                >
                  ❌ Oops! Please try again or email directly.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Character */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Character */}
            <div className="glass-dark rounded-2xl p-8 border border-cyan-400/20 flex items-center justify-center">
              <SimpleCharacter state={characterState} size={200} />
            </div>

            {/* Direct Contact */}
            <div className="glass-dark rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:navyasreechoudhary@gmail.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm">navyasreechoudhary@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/navya-sree-yellina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm">linkedin.com/in/navya-sree-yellina</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Navya-sree-yellina"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <Github className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm">github.com/Navya-sree-yellina</span>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-dark rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for immediate joining</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-white">Visa Status:</strong> F1 OPT
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Response time: Within 24 hours</span>
                </div>
              </div>

              <div className="mt-6 p-4 glass rounded-lg border border-purple-400/20">
                <p className="text-sm font-semibold text-purple-400 mb-3">Open to:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {['Full-Time Generative AI Roles', 'MLOps & AI Platform Engineering', 'Technical Leadership Positions', 'Research & Development Initiatives'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
