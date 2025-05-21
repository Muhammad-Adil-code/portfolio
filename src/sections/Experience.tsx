import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <AnimatedSection
      id="experience"
      className="section-container bg-gray-50 dark:bg-gray-900"
      animation="slide-up"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mx-auto">
          My professional journey and achievements
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Website Development Leader
            </h3>
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              Jan 2025 – Present
            </span>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            ECC
          </h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Built educational tools including Study Scheduler and Aggregate Calculator</li>
            <li>• Developed Student Test Platform for classes 9-12</li>
            <li>• Enhanced student engagement through custom web solutions</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              AI/ML Internship
            </h3>
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              May 2025 – Present
            </span>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            CREOVATA
          </h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Designed and trained ML models</li>
            <li>• Applied advanced feature engineering techniques</li>
            <li>• Supported deployment of AI solutions for media innovation</li>
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;