import React, { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold, once: true });

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className} ${
        isVisible 
          ? `animate-${animation} ${delay > 0 ? `delay-${delay}` : ''}`
          : 'opacity-0'
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;