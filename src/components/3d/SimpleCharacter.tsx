'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SimpleCharacterProps {
  state?: 'idle' | 'greeting' | 'thinking' | 'coding' | 'celebrating';
  size?: number;
  className?: string;
}

/**
 * SimpleCharacter - A CSS/SVG-based character for immediate use
 *
 * This is a lightweight alternative while you create your Spline 3D character.
 * It uses pure CSS animations and can be easily replaced later.
 */
export default function SimpleCharacter({
  state = 'idle',
  size = 200,
  className = '',
}: SimpleCharacterProps) {
  const [currentEmoji, setCurrentEmoji] = useState('👋');

  useEffect(() => {
    const emojiMap = {
      idle: '🤖',
      greeting: '👋',
      thinking: '🤔',
      coding: '💻',
      celebrating: '🎉',
    };
    setCurrentEmoji(emojiMap[state] || '🤖');
  }, [state]);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Character container with 3D effect */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {/* Main character circle */}
        <motion.div
          className="relative w-32 h-32 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {/* Character emoji/icon */}
          <motion.span
            className="text-6xl"
            animate={{
              rotate: state === 'thinking' ? [0, 10, -10, 0] : 0,
              scale: state === 'celebrating' ? [1, 1.3, 1] : 1,
            }}
            transition={{
              duration: state === 'celebrating' ? 0.5 : 1.5,
              repeat: state === 'thinking' || state === 'celebrating' ? Infinity : 0,
            }}
          >
            {currentEmoji}
          </motion.span>

          {/* Animated particles around character */}
          {state === 'celebrating' && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI) / 4) * 60,
                    y: Math.sin((i * Math.PI) / 4) * 60,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              ))}
            </>
          )}

          {/* Thinking symbols */}
          {state === 'thinking' && (
            <motion.div
              className="absolute -top-8 right-0 text-2xl"
              animate={{
                y: [-5, -15, -5],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              💭
            </motion.div>
          )}

          {/* Coding symbols */}
          {state === 'coding' && (
            <motion.div
              className="absolute -right-10 top-1/2 transform -translate-y-1/2"
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <span className="text-cyan-400 font-mono text-sm">{'</>'}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Orbiting elements */}
        {state === 'idle' && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  offsetPath: 'circle(50%)',
                  offsetRotate: '0deg',
                }}
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </>
        )}
      </motion.div>

      {/* Shadow */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black/20 rounded-full blur-md"
        animate={{
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
