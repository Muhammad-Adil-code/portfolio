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
  image: 'https://media.istockphoto.com/id/842133980/photo/e-mail-and-spam-concept.jpg?s=1024x1024&w=is&k=20&c=ezTFhPHTWLMDhd4Eou4c8CI9Ayn3eXBRGWSlYG9RQtU=',
  tags: ['TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP', 'Text Classification'],
  githubLink: 'https://github.com/Muhammad-Adil-code/sms-spam-detection-using-ML',
}, {
  title: 'Traffic Signs Recognition using CNN-Keras',
  description: 'Developed a deep learning model using Convolutional Neural Networks (CNN) and Keras to accurately recognize and classify traffic signs from images. Trained on a dataset of 4,170 images across 58 classes, the model incorporates data augmentation, multiple convolutional layers, and early stopping to achieve high accuracy. This project highlights the application of AI in autonomous vehicles and road safety by automating traffic sign recognition.',
  image: 'https://www.shutterstock.com/shutterstock/photos/1495857965/display_1500/stock-vector-sign-recognition-concept-icon-traffic-signs-detection-smart-car-on-road-sensor-technologies-for-1495857965.jpg',
  tags: ['CNN', 'Keras', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
  githubLink: 'https://github.com/Muhammad-Adil-code/Traffic-Signs-Recognition-using-CNN-Keras',
},{
  title: 'AI Job Portal',
  description: 'Built AI-Powered Job Portal using MERN Stack with ML-based job placement prediction.Integrated Flask ML model for real-time job outcome predictions',
  image: 'https://www.astuteconnect.com/uploads/posts/image%202%20(1).jpg',
  tags: ['React', 'NodeJS', 'Express.js', 'redux', 'Tailwind CSS', 'python', 'ML model', 'Cloudinary', 'MongoDB', 'Flask' ],
  githubLink: 'https://github.com/Muhammad-Adil-code/Ai-job-portal-fyp',
},
];
