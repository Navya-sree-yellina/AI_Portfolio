'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Privacy Threats in Continuous Learning: My Thesis Research',
    slug: 'privacy-threats-continuous-learning',
    excerpt: 'Exploring the critical security challenges in machine learning systems that continuously learn from data streams, and developing privacy-preserving techniques to mitigate these threats.',
    category: 'Research',
    tags: ['Privacy', 'Machine Learning', 'Security', 'Continuous Learning'],
    readingTime: 8,
    publishedAt: '2024-11-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Building Enterprise RAG Systems: Lessons from Production',
    slug: 'building-enterprise-rag-systems',
    excerpt: 'Deep dive into implementing Retrieval-Augmented Generation at scale, achieving 40% latency reduction and 25% accuracy improvement in production environments.',
    category: 'Technical',
    tags: ['RAG', 'LangChain', 'OpenAI', 'Production'],
    readingTime: 12,
    publishedAt: '2024-10-28',
    featured: true,
  },
  {
    id: '3',
    title: 'MLOps Best Practices: Automating the ML Lifecycle',
    slug: 'mlops-best-practices',
    excerpt: 'How we reduced deployment cycles by 35% and eliminated 80% of manual errors through comprehensive MLOps automation using Docker, Kubernetes, and AWS SageMaker.',
    category: 'MLOps',
    tags: ['MLOps', 'Docker', 'Kubernetes', 'CI/CD'],
    readingTime: 10,
    publishedAt: '2024-09-20',
    featured: false,
  },
  {
    id: '4',
    title: 'Transformers in Production: Scaling LLMs for 500+ Users',
    slug: 'transformers-production-scaling',
    excerpt: 'Technical insights on deploying and scaling transformer models to handle 500+ concurrent users with 90% uptime improvement.',
    category: 'AI Engineering',
    tags: ['Transformers', 'LLMs', 'Scaling', 'Performance'],
    readingTime: 15,
    publishedAt: '2024-08-10',
    featured: false,
  },
  {
    id: '5',
    title: 'Ethical AI Development: Privacy and Fairness in ML Systems',
    slug: 'ethical-ai-development',
    excerpt: 'Implementing ethical AI principles in production systems, focusing on data privacy compliance and bias mitigation strategies.',
    category: 'Ethics',
    tags: ['Ethics', 'Privacy', 'Fairness', 'Responsible AI'],
    readingTime: 7,
    publishedAt: '2024-07-05',
    featured: false,
  },
  {
    id: '6',
    title: 'From Research to Production: CNN and ANN Algorithm Optimization',
    slug: 'cnn-ann-optimization',
    excerpt: 'Insights from my published research on inspecting and optimizing CNN and ANN algorithms for digit recognition and beyond.',
    category: 'Research',
    tags: ['CNN', 'ANN', 'Deep Learning', 'Optimization'],
    readingTime: 9,
    publishedAt: '2024-06-18',
    featured: false,
  },
];

const categories = ['All', 'Research', 'Technical', 'MLOps', 'AI Engineering', 'Ethics'];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge on Generative AI, MLOps, privacy-preserving ML, and lessons from production deployments
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readingTime} min read
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 text-xs text-gray-600 rounded"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group whitespace-nowrap"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 opacity-90">
            Get insights on AI, MLOps, and privacy-preserving ML delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}