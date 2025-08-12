import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { name: 'Projects', href: '/projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ],
  'Expertise': [
    { name: 'Generative AI', href: '/projects?filter=gen-ai' },
    { name: 'MLOps', href: '/projects?filter=mlops' },
    { name: 'RAG Systems', href: '/projects?filter=rag' },
    { name: 'Privacy ML', href: '/projects?filter=privacy' },
  ],
  'Connect': [
    { name: 'Email', href: 'mailto:navyasreechoudhary@gmail.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/navyasreeyellina' },
    { name: 'GitHub', href: 'https://github.com/navyasreeyellina' },
    { name: 'Resume', href: '/resume.pdf' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                <Image
                  src="/nsy-logo.png"
                  alt="Navya Sree Yellina"
                  width={30}
                  height={30}
                  className="rounded"
                  style={{ backgroundColor: 'transparent', filter: 'brightness(0.95)' }}
                />
              </div>
              <h3 className="text-white font-bold text-xl">Navya Sree Yellina</h3>
            </div>
            <p className="text-sm">
              Generative AI Engineer specializing in enterprise-scale solutions, MLOps, and privacy-preserving machine learning.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/navyasreeyellina"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/navyasreeyellina"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:navyasreechoudhary@gmail.com"
                className="hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Navya Sree Yellina. All rights reserved.
            </p>
            <p className="text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}