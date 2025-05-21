interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Technologies',
    skills: [
      { name: 'HTML & CSS', percentage: 95, color: 'bg-primary-500' },
      { name: 'JavaScript (ES6+)', percentage: 90, color: 'bg-primary-600' },
      { name: 'React.js', percentage: 88, color: 'bg-primary-500' },
      { name: 'Material UI', percentage: 85, color: 'bg-primary-600' },
      { name: 'TypeScript', percentage: 80, color: 'bg-primary-500' },
      { name: 'Tailwind CSS', percentage: 92, color: 'bg-primary-600' },
    ],
  },
  {
    category: 'Backend Technologies',
    skills: [
      { name: 'Node.js', percentage: 88, color: 'bg-secondary-500' },
      { name: 'Express.js', percentage: 85, color: 'bg-secondary-600' },
      { name: 'MongoDB', percentage: 82, color: 'bg-secondary-500' },
      { name: 'REST API Design', percentage: 90, color: 'bg-secondary-600' },
      { name: 'Python', percentage: 75, color: 'bg-secondary-500' },
    ],
  },
  {
    category: 'AI/ML Technologies',
    skills: [
      { name: 'NumPy', percentage: 85, color: 'bg-accent-500' },
      { name: 'Pandas', percentage: 82, color: 'bg-accent-600' },
      { name: 'TensorFlow', percentage: 70, color: 'bg-accent-500' },
      { name: 'Streamlit', percentage: 75, color: 'bg-accent-600' },
      { name: 'Data Analysis', percentage: 80, color: 'bg-accent-500' },
    ],
  },
];