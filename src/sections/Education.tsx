import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <AnimatedSection
      id="education"
      className="section-container"
      animation="slide-up"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle mx-auto">
          My academic journey and qualifications
        </p>
      </div>

      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              VIRTUAL University of Pakistan
            </h3>
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              Sep 2023 - Present
            </span>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Bachelors in Computer Science
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            Studying core computer science subjects including:
          </p>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>• Object-Oriented Programming</li>
            <li>• Data Structures</li>
            <li>• Web Development</li>
            <li>• Python Programming</li>
            <li>• System Design</li>
          </ul>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Education;