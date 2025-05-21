import React from 'react';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <AnimatedSection
      id="home"
      className="section-container flex flex-col items-center justify-center min-h-screen pt-20"
      animation="fade-in"
    >
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="block">Hello, I'm</span>
          <span className="text-primary-600 dark:text-primary-400">Muhammad Adil</span>
        </h1>
        
        <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-8 h-20">
          <Typewriter
            options={{
              strings: [
                'Web Developer (MERN Stack)',
                'AI/ML Engineer',
                'Full Stack Developer',
                'Python Developer'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30
            }}
          />
        </div>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Full-stack developer with expertise in MERN stack, skilled in building responsive, 
          user-centric web applications and AI integrations.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a 
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            GitHub
          </motion.a>
          <motion.a 
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-accent flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
          <motion.a 
            href="/resume.pdf" 
            download="Muhammad_Adil_Resume.pdf"
            className="btn btn-outline flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Resume
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm font-medium mb-1">Scroll Down</span>
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Hero;