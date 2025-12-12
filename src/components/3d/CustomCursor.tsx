'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation for cursor
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Create particle trail
      if (Math.random() > 0.7) { // 30% chance to create particle
        const colors = ['#00d9ff', '#ff6b9d', '#ffd700', '#7b2ff7'];
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setParticles((prev) => [...prev.slice(-20), newParticle]); // Keep last 20 particles
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup particles
    const cleanupInterval = setInterval(() => {
      setParticles((prev) => prev.slice(-10));
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(cleanupInterval);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = 'auto';
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Particle Trail */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Main cursor dot */}
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: isHovering ? 0.5 : 1,
            }}
          />

          {/* Ring around cursor */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white rounded-full"
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.5 : 0.3,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Ripple effect on hover */}
          {isHovering && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white rounded-full"
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
