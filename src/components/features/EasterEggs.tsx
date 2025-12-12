'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useSound } from '@/contexts/SoundContext';

export default function EasterEggs() {
  const { playSound } = useSound();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [doubleClickCount, setDoubleClickCount] = useState(0);
  const [showTimeMessage, setShowTimeMessage] = useState(false);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === konamiCode[konamiProgress]?.toLowerCase()) {
        playSound('click');
        setKonamiProgress(prev => prev + 1);

        if (konamiProgress === konamiCode.length - 1) {
          // Konami code completed!
          playSound('success');
          setShowConfetti(true);
          setShowSecret(true);
          setKonamiProgress(0);

          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  // Double-click logo easter egg
  useEffect(() => {
    const handleLogoClick = () => {
      playSound('click');
      setDoubleClickCount(prev => prev + 1);

      if (doubleClickCount >= 4) {
        playSound('success');
        setShowSecret(true);
        setShowConfetti(true);
        setDoubleClickCount(0);

        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      }

      setTimeout(() => setDoubleClickCount(0), 2000);
    };

    const logos = document.querySelectorAll('img[alt="Navya Sree Yellina"]');
    logos.forEach(logo => {
      logo.addEventListener('click', handleLogoClick);
    });

    return () => {
      logos.forEach(logo => {
        logo.removeEventListener('click', handleLogoClick);
      });
    };
  }, [doubleClickCount]);

  // Time-based message
  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();

      // Show special message at specific times
      if (hour === 0 || hour === 12) {
        setShowTimeMessage(true);
        setTimeout(() => setShowTimeMessage(false), 5000);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          colors={['#00d9ff', '#ff6b9d', '#ffd700', '#7b2ff7']}
        />
      )}

      {/* Secret Message */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ type: 'spring', damping: 15 }}
            className="fixed bottom-40 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none"
          >
            <div className="glass-dark border-2 border-cyan-400 rounded-2xl p-6 shadow-2xl max-w-md">
              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: 3,
                  }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 gradient-text">
                  You Found It!
                </h3>
                <p className="text-gray-300 text-sm">
                  You've discovered a secret! Thanks for exploring my portfolio with such enthusiasm! 🚀
                </p>
                <p className="text-cyan-400 text-xs mt-3">
                  Pro tip: Try the Konami code for more surprises! ↑↑↓↓←→←→BA
                </p>
                <motion.button
                  onClick={() => setShowSecret(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-sm pointer-events-auto"
                >
                  Awesome!
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Time-based Message */}
      <AnimatePresence>
        {showTimeMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-50 glass-dark border border-cyan-400/30 rounded-xl p-4 shadow-xl max-w-xs"
          >
            <p className="text-sm text-cyan-400">
              ⏰ Perfect timing! It's {new Date().getHours() === 0 ? 'midnight' : 'noon'}!
              The best time to build amazing AI projects! 🌟
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami Progress Indicator (for debugging) */}
      {konamiProgress > 0 && konamiProgress < konamiCode.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-24 left-6 z-50 glass-dark border border-cyan-400/30 rounded-lg p-3 shadow-xl"
        >
          <p className="text-xs text-cyan-400">
            Konami Code: {konamiProgress}/{konamiCode.length}
          </p>
          <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${(konamiProgress / konamiCode.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
