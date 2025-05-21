import { ProjectProps } from '../components/ProjectCard';

export const projects: ProjectProps[] = [
  {
    title: 'Text-to-Image Generation',
    description: 'Developed a text-to-image generation pipeline using Stable Diffusion v1.5 and Hugging Face Diffusers. Optimized model performance with PyTorch float16 and GPU acceleration.',
    image: 'https://th.bing.com/th/id/OIP.PBU2fdBRpf0HMr0DF-oWiwHaD_?cb=iwc2&rs=1&pid=ImgDetMain',
    tags: ['Python', 'Hugging Face', 'PyTorch', 'Stable Diffusion', 'AI'],
    githubLink: 'https://github.com/Muhammad-Adil-code/text-to-image-ml-model.git',
  },
  {
    title: 'Study Scheduler Generator',
    description: 'Created an intelligent study scheduler that generates optimized learning plans based on course load, difficulty, and time constraints. Features PDF export functionality.',
    image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['HTML','CSS', 'Javascript', 'JSPDF', 'PDF Generation'],
    githubLink: 'https://github.com/Muhammad-Adil-code/Study-Sheduler-ECC.git',
    liveLink: 'https://study-sheduler-ecc.vercel.app/',
  },
  {
    title: 'Aggregate Calculator (ECC)',
    description: 'Built a comprehensive aggregate calculator tool for academic score computation with customizable weightage for different assessment components.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'HTML', 'CSS', 'HTML5Canvas','Image Downloading'],
    githubLink: 'https://github.com/Muhammad-Adil-code/Agregate-Calculator.git',
    liveLink: 'https://agregate-calculator.vercel.app/',
  },
  {
    title: 'Snake Game',
    description: 'Developed a classic Snake game with Python, featuring score tracking, increasing difficulty levels, and customizable game speeds.',
    image: 'https://i.ytimg.com/vi/PHdZdrMCKuY/maxresdefault.jpg',
    tags: ['Python', 'Tkinter', 'OOP'],
    githubLink: 'https://github.com/Muhammad-Adil-code/Snake_Game_python.git',
  },
];