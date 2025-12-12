'use client';

import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/contexts/SoundContext';

export default function SoundToggle() {
  const { soundEnabled, toggleSound, playSound } = useSound();

  return (
    <motion.button
      onClick={() => {
        toggleSound();
        playSound('click');
      }}
      onMouseEnter={() => playSound('hover')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 p-3 glass border border-cyan-400/30 text-cyan-400 rounded-full shadow-lg hover:bg-cyan-400/10 transition-all z-40 group"
      aria-label={soundEnabled ? 'Disable sound effects' : 'Enable sound effects'}
      title={soundEnabled ? 'Click to disable sounds' : 'Click to enable sounds'}
    >
      <motion.div
        animate={{
          rotate: soundEnabled ? [0, -10, 10, -10, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          repeat: soundEnabled ? Infinity : 0,
          repeatDelay: 2,
        }}
      >
        {soundEnabled ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </motion.div>

      {/* Visual feedback when enabled */}
      {soundEnabled && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 right-full mr-1 w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [-5, -10, -15],
                opacity: [1, 0.5, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
}
