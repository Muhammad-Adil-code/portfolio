import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <AnimatedSection
      id="projects"
      className="section-container"
      animation="slide-up"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle mx-auto">
          A showcase of my recent work spanning web development and AI/ML applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={project.title} className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline inline-flex items-center gap-2"
        >
          View More Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Projects;