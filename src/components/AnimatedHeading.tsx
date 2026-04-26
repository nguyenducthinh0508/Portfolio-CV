import { useEffect, useState } from 'react';
import { cn } from './FadeIn';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export function AnimatedHeading({ text, className }: AnimatedHeadingProps) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  const charDelay = 30;
  
  // Use the length of the first line to offset subsequent lines correctly
  const firstLineLength = lines[0]?.length || 0;

  return (
    <h1 className={cn('font-normal', className)} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        return (
          <span key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              const delayMs = (lineIndex * firstLineLength * charDelay) + (charIndex * charDelay);
              const isSpace = char === ' ';
              const displayChar = isSpace ? '\u00A0' : char;

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: startAnimation ? 1 : 0,
                    transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDelay: `${delayMs}ms`,
                  }}
                >
                  {displayChar}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
