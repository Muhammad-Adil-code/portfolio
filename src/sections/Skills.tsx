import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SkillBar from '../components/SkillBar';
import { skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <AnimatedSection
      id="skills"
      className="section-container bg-gray-50 dark:bg-gray-900"
      animation="slide-up"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle mx-auto">
          A comprehensive overview of my technical expertise and competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Figma', 'Node.js', 'Express', 'MongoDB', 'Python', 'NumPy', 'Pandas'].map((tech) => (
              <div 
                key={tech}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-300"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Key Competencies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Full-Stack Development', 'Responsive Design', 'API Development', 'Data Analysis', 'UI Design', 'AI Integration', 'Performance Optimization', 'Project Management'].map((skill) => (
              <div 
                key={skill}
                className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-12">
        {skillCategories.map((category, index) => (
          <div key={category.category} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;