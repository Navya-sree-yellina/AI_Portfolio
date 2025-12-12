'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

const shortcuts = [
  { key: '?', description: 'Show keyboard shortcuts' },
  { key: 'K', description: 'Open AI Assistant' },
  { key: 'Esc', description: 'Close modals' },
  { key: '/', description: 'Focus search (if available)' },
  { key: '↑↑↓↓←→←→BA', description: 'Konami code surprise!' },
];

export default function KeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show help on '?' key
      if (e.key === '?' && !e.shiftKey) {
        e.preventDefault();
        setShowHelp(prev => !prev);
      }

      // Close help on Escape
      if (e.key === 'Escape' && showHelp) {
        setShowHelp(false);
      }

      // Open AI Assistant on 'k' key (Cmd+K or Ctrl+K)
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Trigger AI Assistant button click
        const aiButton = document.querySelector('[aria-label="Open chat"]') as HTMLButtonElement;
        if (aiButton) {
          aiButton.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHelp]);

  return (
    <>
      {/* Keyboard shortcut hint */}
      <motion.button
        onClick={() => setShowHelp(!showHelp)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 p-3 glass border border-cyan-400/30 text-cyan-400 rounded-full shadow-lg hover:bg-cyan-400/10 transition-all z-40 group"
        aria-label="Keyboard shortcuts"
        title="Press ? for keyboard shortcuts"
      >
        <Command className="w-5 h-5" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      </motion.button>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHelp(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-full max-w-md"
            >
              <div className="glass-dark border border-cyan-400/30 rounded-2xl p-6 shadow-2xl mx-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Command className="w-6 h-6 text-cyan-400" />
                    Keyboard Shortcuts
                  </h3>
                  <button
                    onClick={() => setShowHelp(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  {shortcuts.map((shortcut, index) => (
                    <motion.div
                      key={shortcut.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-3 glass rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
                    >
                      <span className="text-sm text-gray-300">{shortcut.description}</span>
                      <kbd className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-md text-xs font-mono border border-cyan-400/30">
                        {shortcut.key}
                      </kbd>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-400/20"
                >
                  <p className="text-xs text-gray-400 text-center">
                    💡 <span className="text-cyan-400">Pro tip:</span> Navigate using Tab and Arrow keys for better accessibility!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
