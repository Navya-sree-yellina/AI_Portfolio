'use client';

import Link from 'next/link';
import { useSound } from '@/contexts/SoundContext';
import { ComponentProps } from 'react';

interface SoundLinkProps extends ComponentProps<typeof Link> {
  soundOnClick?: 'click' | 'woosh';
  soundOnHover?: boolean;
}

export default function SoundLink({
  soundOnClick = 'woosh',
  soundOnHover = true,
  children,
  ...props
}: SoundLinkProps) {
  const { playSound } = useSound();

  return (
    <Link
      {...props}
      onClick={(e) => {
        playSound(soundOnClick);
        props.onClick?.(e);
      }}
      onMouseEnter={(e) => {
        if (soundOnHover) {
          playSound('hover');
        }
        props.onMouseEnter?.(e);
      }}
    >
      {children}
    </Link>
  );
}
