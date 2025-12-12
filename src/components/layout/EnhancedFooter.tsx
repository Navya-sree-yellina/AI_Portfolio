'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  'Quick Links': [
    { name: 'Projects', href: '/projects', icon: '🚀' },
    { name: 'Publications', href: '/publications', icon: '📚' },
    { name: 'Blog', href: '/blog', icon: '✍️' },
    { name: 'About', href: '/about', icon: '👤' },
  ],
  'Expertise': [
    { name: 'Generative AI', href: '/projects?filter=gen-ai', icon: '🤖' },
    { name: 'MLOps', href: '/projects?filter=mlops', icon: '⚙️' },
    { name: 'RAG Systems', href: '/projects?filter=rag', icon: '🔍' },
    { name: 'Privacy ML', href: '/projects?filter=privacy', icon: '🔒' },
  ],
  'Connect': [
    { name: 'Email', href: 'mailto:navyasreechoudhary@gmail.com', icon: '📧' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/navyasreeyellina', icon: '💼' },
    { name: 'GitHub', href: 'https://github.com/navyasreeyellina', icon: '💻' },
    { name: 'Resume', href: '/resume.pdf', icon: '📄' },
  ],
};

export default function EnhancedFooter() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1e293b] to-[#0a0e27] text-gray-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-cyan-400/30"
              >
                <Image
                  src="/nsy-logo.png"
                  alt="Navya Sree Yellina"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </motion.div>
              <h3 className="text-white font-bold text-lg sm:text-xl gradient-text">
                Navya Sree Yellina
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Generative AI Engineer specializing in enterprise-scale solutions, MLOps, and privacy-preserving machine learning.
            </p>

            {/* Social Links with enhanced animations */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/navyasreeyellina', color: 'from-gray-500 to-gray-700' },
                { icon: Linkedin, href: 'https://linkedin.com/in/navyasreeyellina', color: 'from-blue-500 to-blue-700' },
                { icon: Mail, href: 'mailto:navyasreechoudhary@gmail.com', color: 'from-pink-500 to-red-600' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-10 h-10 glass rounded-lg flex items-center justify-center border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors relative z-10" />
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections with enhanced animations */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                {category}
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: categoryIndex * 0.5,
                  }}
                >
                  {categoryIndex === 0 ? '⚡' : categoryIndex === 1 ? '🎯' : '🌟'}
                </motion.span>
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
                      <motion.a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onHoverStart={() => setHoveredLink(link.name)}
                        onHoverEnd={() => setHoveredLink(null)}
                        whileHover={{ x: 5 }}
                        className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                      >
                        <motion.span
                          animate={{
                            scale: hoveredLink === link.name ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.icon}
                        </motion.span>
                        <span className="relative">
                          {link.name}
                          <motion.span
                            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: hoveredLink === link.name ? '100%' : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </motion.a>
                    ) : (
                      <Link
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                      >
                        <motion.span
                          animate={{
                            scale: hoveredLink === link.name ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.icon}
                        </motion.span>
                        <span className="relative">
                          {link.name}
                          <motion.span
                            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: hoveredLink === link.name ? '100%' : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-cyan-400/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center sm:text-left text-gray-400">
              © {new Date().getFullYear()} Navya Sree Yellina. All rights reserved.
            </p>
            <motion.p
              className="text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Built with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>{' '}
              using Next.js & AI
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 p-3 glass border border-cyan-400/30 text-cyan-400 rounded-full shadow-lg hover:bg-cyan-400/10 transition-all group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
}
