'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
    </div>
  ),
});

// Character animation states
export type CharacterState =
  | 'idle'
  | 'greeting'
  | 'thinking'
  | 'coding'
  | 'celebrating'
  | 'pointing'
  | 'sleeping';

interface CodeCompanionProps {
  state?: CharacterState;
  scale?: number;
  className?: string;
  splineUrl?: string; // URL to your Spline scene
  onLoad?: () => void;
}

/**
 * CodeCompanion - Your 3D Character Mascot
 *
 * This component renders a 3D character using Spline.
 * The character can have different animation states and responds to user interactions.
 *
 * @example
 * <CodeCompanion state="greeting" scale={1.2} />
 */
export default function CodeCompanion({
  state = 'idle',
  scale = 1,
  className = '',
  splineUrl = 'https://prod.spline.design/fzFbZHOKQByi62ueLM0IbJgI/scene.splinecode',
  onLoad,
}: CodeCompanionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentState, setCurrentState] = useState<CharacterState>(state);

  // Update character state when prop changes
  useEffect(() => {
    setCurrentState(state);
  }, [state]);

  const handleLoad = (splineApp: any) => {
    setIsLoaded(true);
    onLoad?.();

    // You can control Spline animations here
    // Example: splineApp.emitEvent('mouseHover', 'Character');
    console.log('Spline character loaded successfully!', splineApp);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ transform: `scale(${scale})` }}
    >
      {/* 3D Character Container */}
      <div className="w-full h-full relative">
        <Suspense fallback={<CharacterLoadingState />}>
          <Spline
            scene={splineUrl}
            onLoad={handleLoad}
            className="w-full h-full"
          />
        </Suspense>

        {/* Optional overlay for interactions */}
        {!isLoaded && <CharacterLoadingState />}
      </div>

      {/* State indicator (for debugging - remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          State: {currentState}
        </div>
      )}
    </motion.div>
  );
}

// Loading state component
function CharacterLoadingState() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg backdrop-blur-sm">
      <div className="text-center">
        <div className="animate-bounce mb-2">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">👾</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Loading character...
        </p>
      </div>
    </div>
  );
}

// Hook for managing character states
export function useCharacterState(initialState: CharacterState = 'idle') {
  const [state, setState] = useState<CharacterState>(initialState);

  const greet = () => setState('greeting');
  const think = () => setState('thinking');
  const code = () => setState('coding');
  const celebrate = () => setState('celebrating');
  const point = () => setState('pointing');
  const sleep = () => setState('sleeping');
  const reset = () => setState('idle');

  return {
    state,
    setState,
    greet,
    think,
    code,
    celebrate,
    point,
    sleep,
    reset,
  };
}
