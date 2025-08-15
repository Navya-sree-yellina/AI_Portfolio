'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { AIMessage } from '@/types';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Navya's personal assistant. I can help you learn about her experience, projects, and expertise in Generative AI and MLOps. Feel free to ask anything - even single words like 'skills', 'contact', or 'projects'!",
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: AIMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: AIMessage = {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date().toISOString(),
          metadata: data.metadata
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        // Fallback response for development
        const assistantMessage: AIMessage = {
          id: Date.now().toString(),
          role: 'assistant',
          content: "I'm currently in development mode. Please check back soon for full AI capabilities. In the meantime, feel free to explore the portfolio or use the contact form!",
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      // Fallback for development
      const assistantMessage: AIMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I'm currently in development mode. Please check back soon for full AI capabilities. In the meantime, feel free to explore the portfolio or use the contact form!",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Suggested questions - include single-word examples
  const suggestions = [
    "Experience",
    "Skills",
    "Projects",
    "Available?"
  ];

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-colors z-40"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px] bg-white sm:rounded-xl shadow-2xl flex flex-col z-[45] safe-top safe-bottom"
            style={{ 
              maxHeight: '100vh',
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)'
            }}
          >
            {/* Header - Always visible on mobile */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-blue-600 text-white sm:rounded-t-xl flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Navya's Assistant</h3>
                  <p className="text-xs opacity-90 sm:block">Ask about my experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages - Scrollable area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 sm:gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions - Show more options */}
            {messages.length === 1 && !isLoading && (
              <div className="px-3 sm:px-4 pb-2 flex-shrink-0">
                <p className="text-xs text-gray-500 mb-2">Try these quick queries:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestion(suggestion)}
                      className="text-xs px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2 hidden sm:block">Tip: You can use single words like "experience", "skills", "education"</p>
              </div>
            )}

            {/* Input - Fixed height on mobile */}
            <div className="p-3 sm:p-4 border-t bg-white flex-shrink-0">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my experience..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-0"
                  style={{ fontSize: '16px' }} // Prevents zoom on iOS
                  disabled={isLoading}
                  autoComplete="off"
                  autoCorrect="off"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}