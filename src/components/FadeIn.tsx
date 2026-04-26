import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FadeInProps {
  children: ReactNode;
  delayMs?: number;
  durationMs?: number;
  className?: string;
}

export function FadeIn({
  children,
  delayMs = 0,
  durationMs = 1000,
  className,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return (
    <div
      className={cn('transition-opacity ease-out', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
