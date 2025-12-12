'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Linkedin,
  Github,
  Calendar,
  Loader2,
  MapPin,
  MessageSquare,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { ContactSubmission } from '@/types';

export default function ContactSection() {
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
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
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e27] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-medium"
          >
            📬 Let's Connect
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Start a <span className="gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Conversation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a Gen AI expert, need consultation, or want to discuss research collaboration, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
                      placeholder="Company Name"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300">
                      Inquiry Type *
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-gray-200 appearance-none transition-all cursor-pointer"
                      >
                        <option value="general" className="bg-[#0a0e27]">General Inquiry</option>
                        <option value="recruitment" className="bg-[#0a0e27]">Recruitment</option>
                        <option value="consultation" className="bg-[#0a0e27]">Consultation</option>
                        <option value="collaboration" className="bg-[#0a0e27]">Research Collaboration</option>
                        <option value="speaking" className="bg-[#0a0e27]">Speaking Engagement</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-gray-200 placeholder-gray-500 resize-none transition-all"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
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
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                  >
                    Thank you for your message! I'll get back to you within 24 hours.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
                  >
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Get in Touch
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:navyasreechoudhary@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">navyasreechoudhary@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/navya-sree-yellina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">linkedin.com/in/navya-sree-yellina</span>
                </a>

                <a
                  href="https://github.com/Navya-sree-yellina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-lg">github.com/Navya-sree-yellina</span>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">St. Louis, MO (Open to Relocation)</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-400" />
                Availability
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-green-400 font-semibold">Available for immediate joining</span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    <strong>Visa Status:</strong> F1 OPT
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Response time: Within 24 hours</span>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Interested in:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span>Generative AI Roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>MLOps Positions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <span>Research Contributions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}