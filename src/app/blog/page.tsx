'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

export default function BlogPage() {
  useEffect(() => {
    // Redirect to Blogger after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'https://navyasreeyellina.blogspot.com/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mb-6"
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
          My Blog & Insights
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          I share my thoughts, experiences, and insights about AI, Machine Learning, and technology on my personal blog.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">Redirecting to my blog...</span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
          
          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-indigo-600 to-blue-600"
              />
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            You'll be automatically redirected to my Blogger site in a few seconds...
          </p>

          <a
            href="https://navyasreeyellina.blogspot.com/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-200 group"
          >
            Visit My Blog Now
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Not redirecting? Click the button above to visit my blog.</p>
        </div>
      </motion.div>
    </div>
  );
}