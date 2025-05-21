import React, { useRef } from 'react';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-primary-500'
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(barRef, { threshold: 0.1, once: true });

  return (
    <div className="mb-6" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transition: 'width 1s ease-out'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;