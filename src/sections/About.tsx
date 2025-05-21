import React from 'react';
import { Trophy, BookOpen, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection
      id="about"
      className="section-container"
      animation="slide-up"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle mx-auto">
          Full-stack developer with expertise in MERN stack, focused on building responsive, user-centric web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 shadow-inner">
          <img 
            src="https://www.pcwebopaedia.com/wp-content/uploads/2020/10/how-to-convert-laptop-lcd-to-desktop-monitor-2-768x575.jpg"
            alt="Professional portrait of Muhammad Adil"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Web Developer & AI/ML Engineer
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a full-stack developer with expertise in the MERN stack, 
            skilled in building responsive, user-centric web applications. I also have a 
            strong background in Python, data analysis, and AI integrations including 
            text-to-image generation and intelligent scheduling systems.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My passion lies in creating elegant solutions to complex problems, with a strong 
            focus on performance optimization and user experience design. I enjoy working 
            on end-to-end projects that involve both technical challenges and creative opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-medium text-gray-900 dark:text-white">1+ Years</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                <p className="font-medium text-gray-900 dark:text-white">BS Computer Science</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Currently</p>
                <p className="font-medium text-gray-900 dark:text-white">VIRTUAL University</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;