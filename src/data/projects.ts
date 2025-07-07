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
  title: 'SMS Spam Detection using ML',
  description: 'Built an SMS Spam Detection system using Machine Learning and Deep Learning techniques in TensorFlow. The project compares multiple models—including Naive Bayes, custom text embeddings, Bidirectional LSTM, and Transfer Learning with Universal Sentence Encoder—to classify SMS messages as spam or legitimate with high accuracy. Achieved over 97% accuracy with robust F1-scores through thorough evaluation and analysis.',
  image: 'https://th.bing.com/th/id/OIP.vQ243Pw8VL_YLQbtVmSu2QHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7',
  tags: ['TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP', 'Text Classification'],
  githubLink: 'https://github.com/Muhammad-Adil-code/sms-spam-detection-using-ML',
}, {
  title: 'Traffic Signs Recognition using CNN-Keras',
  description: 'Developed a deep learning model using Convolutional Neural Networks (CNN) and Keras to accurately recognize and classify traffic signs from images. Trained on a dataset of 4,170 images across 58 classes, the model incorporates data augmentation, multiple convolutional layers, and early stopping to achieve high accuracy. This project highlights the application of AI in autonomous vehicles and road safety by automating traffic sign recognition.',
  image: 'https://drive.google.com/file/d/1noFHs_8eoBpezTG-G-jWARLz5is9cn_7/view',
  tags: ['CNN', 'Keras', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
  githubLink: 'https://github.com/Muhammad-Adil-code/Traffic-Signs-Recognition-using-CNN-Keras',
},
];
