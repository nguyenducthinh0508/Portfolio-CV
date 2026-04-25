import type { ReactNode } from 'react';
import { cn } from './FadeIn';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto w-full", className)}>
      {children}
    </section>
  );
}
