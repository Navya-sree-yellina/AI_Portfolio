'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Download, Home, Briefcase, Code,
  FolderOpen, BookOpen, FileText, User, Mail
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Publications', href: '/publications', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'About', href: '/about', icon: User },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? 'glass-dark border-b border-cyan-400/20 shadow-lg'
            : 'bg-[#0a0e27]/95 backdrop-blur-md'
        }`}
      >
        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center p-0.5 shadow-lg"
                >
                  <div className="w-full h-full bg-[#0a0e27] rounded-lg flex items-center justify-center">
                    <Image
                      src="/nsy-logo.png"
                      alt="Navya Sree Yellina"
                      width={32}
                      height={32}
                      className="rounded w-7 h-7"
                      priority
                    />
                  </div>
                </motion.div>
                <span className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-400 transition-colors">
                  Navya Sree
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 xl:px-4 font-medium text-sm xl:text-base rounded-lg transition-all ${
                        isActive(item.href)
                          ? 'text-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 glass border border-cyan-400/30 rounded-lg"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Resume Download Button */}
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-2 px-4 py-2 xl:px-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-sm xl:text-base shadow-lg hover-glow overflow-hidden ml-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Resume
                  </span>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </div>

              {/* Tablet Navigation */}
              <div className="hidden md:flex lg:hidden items-center gap-3">
                <Link
                  href="/projects"
                  className={`font-medium text-sm transition-colors ${
                    isActive('/projects')
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/experience"
                  className={`font-medium text-sm transition-colors ${
                    isActive('/experience')
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  Experience
                </Link>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-sm shadow-lg"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden relative z-10 p-2 rounded-lg glass border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all"
                aria-label="Toggle menu"
                type="button"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-[#0a0e27] via-[#1e293b] to-[#0a0e27] shadow-2xl z-[70] overflow-y-auto border-l border-cyan-400/20"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.div
                  className="absolute top-20 right-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </div>

              {/* Menu Header */}
              <div className="relative sticky top-0 bg-gradient-to-r from-cyan-600 to-purple-600 text-white p-4 border-b border-cyan-400/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-bold text-lg">Navigation</h2>
                    <p className="text-xs opacity-90">Explore my portfolio</p>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Menu Content */}
              <div className="relative p-4">
                {/* Main Navigation */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main Menu</p>
                  <div className="space-y-2">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                              isActive(item.href)
                                ? 'glass border-l-4 border-cyan-400 text-cyan-400 bg-cyan-400/10'
                                : 'text-gray-300 hover:bg-white/5'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Resume Download */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-cyan-400/20"
                >
                  <a
                    href="/resume.pdf"
                    download
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover-glow"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </motion.div>

                {/* Quick Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 glass rounded-lg border border-cyan-400/20"
                >
                  <p className="text-sm font-semibold text-cyan-400 mb-3">Quick Contact</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:navyasreechoudhary@gmail.com"
                      className="text-xs text-gray-300 hover:text-cyan-400 block transition-colors"
                    >
                      📧 navyasreechoudhary@gmail.com
                    </a>
                    <a
                      href="https://linkedin.com/in/navyasreeyellina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-300 hover:text-cyan-400 block transition-colors"
                    >
                      💼 LinkedIn Profile
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
