'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    console.log('Menu toggled:', !isMobileMenuOpen); // Debug log
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              {/* Logo */}
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

              {/* Desktop Navigation */}
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

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden relative z-10 p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all"
                aria-label="Toggle menu"
                type="button"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Simple and Reliable */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-[70] overflow-y-auto">
            {/* Menu Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-lg">Navigation</h2>
                  <p className="text-xs opacity-90">Explore my portfolio</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              {/* Main Navigation */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Menu</p>
                <div className="space-y-2">
                  {navigation.slice(0, 4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive(item.href)
                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Additional Pages */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">More</p>
                <div className="space-y-2">
                  {navigation.slice(4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive(item.href)
                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Quick Contact</p>
                <div className="space-y-2">
                  <a href="mailto:navyasreechoudhary@gmail.com" className="text-xs text-gray-600 hover:text-blue-600 block">
                    📧 navyasreechoudhary@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/navyasreeyellina" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 block">
                    💼 LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}