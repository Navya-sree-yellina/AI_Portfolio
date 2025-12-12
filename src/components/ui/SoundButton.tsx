'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { useSound } from '@/contexts/SoundContext';
import { forwardRef } from 'react';

interface SoundButtonProps extends Omit<HTMLMotionProps<'button'>, 'onMouseEnter' | 'onClick'> {
  soundOnClick?: 'click' | 'success' | 'woosh';
  soundOnHover?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SoundButton = forwardRef<HTMLButtonElement, SoundButtonProps>(
  ({ soundOnClick = 'click', soundOnHover = true, onClick, children, ...props }, ref) => {
    const { playSound } = useSound();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playSound(soundOnClick);
      onClick?.(e);
    };

    const handleHover = () => {
      if (soundOnHover) {
        playSound('hover');
      }
    };

    return (
      <motion.button
        ref={ref}
        onClick={handleClick}
        onMouseEnter={handleHover}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

SoundButton.displayName = 'SoundButton';

export default SoundButton;
