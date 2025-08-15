'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check initial scroll position
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
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted && (isScrolled || isMobileMenuOpen)
            ? 'bg-white backdrop-blur-md shadow-md'
            : 'bg-white md:bg-transparent'
        }`}
      >
        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo - Responsive sizing */}
              <Link href="/" className="flex items-center gap-2 group relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-blue-100 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  <Image
                    src="/nsy-logo.png"
                    alt="Navya Sree Yellina"
                    width={32}
                    height={32}
                    className="rounded w-7 h-7"
                    priority
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
                <span className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  Navya Sree
                </span>
              </Link>

              {/* Desktop Navigation - Adjusted for larger tablets */}
              <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium text-sm xl:text-base transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Resume Download Button */}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-2 xl:px-4 bg-blue-600 text-white rounded-lg font-medium text-sm xl:text-base hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>

              {/* Tablet Navigation (simplified) */}
              <div className="hidden md:flex lg:hidden items-center gap-3">
                <Link
                  href="/projects"
                  className={`font-medium text-sm transition-colors ${
                    isActive('/projects')
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/experience"
                  className={`font-medium text-sm transition-colors ${
                    isActive('/experience')
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Experience
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </a>
              </div>

              {/* Mobile/Tablet Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-10 p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all"
                aria-label="Toggle menu"
                type="button"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Full Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="lg:hidden fixed top-0 right-0 bottom-0 w-[75%] sm:w-80 md:w-96 bg-white shadow-xl z-40 overflow-y-auto"
                >
                  {/* Menu Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
                    <span className="font-bold text-lg text-gray-900">Menu</span>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="px-4 py-6 space-y-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 font-medium rounded-lg transition-all ${
                            isActive(item.href)
                              ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Mobile Resume Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navigation.length * 0.05 }}
                      className="pt-6"
                    >
                      <a
                        href="/resume.pdf"
                        download
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Resume
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}