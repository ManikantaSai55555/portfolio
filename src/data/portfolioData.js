import { Home, User, Code, Folder, Briefcase, Mail, Trophy, Award } from 'lucide-react';
import Photo from '../resources/PhotoForPortfolio.jpeg';
import Resume from '../resources/Kaspa_Manikanta_Sai_Resume.pdf';

// SVG Icons for Skills - Import as URLs
import JavaIcon from '../icons/java.svg';
import SpringIcon from '../icons/Spring.svg';
import QuarkusIcon from '../icons/Quarkus.svg';
import ReactIcon from '../icons/React.svg';
import AngularIcon from '../icons/Angular.svg';
import PostgresIcon from '../icons/Postgres.svg';
import AWSIcon from '../icons/AWS.svg';
import DockerIcon from '../icons/Docker.svg';

export const PERSONAL_INFO = {
  name: 'Kaspa Manikanta Sai',
  title: 'Software Engineer',
  tagline: 'Crafting scalable backend solutions with modern microservices architecture',
  email: 'manikaspa.18@gmail.com',
  github: 'https://github.com/ManikantaSai55555',
  linkedin: 'https://www.linkedin.com/in/kaspa-manikanta-sai-3713721b0/',
  photo: Photo,
  resume: Resume
};

export const NAV_ITEMS = [
  { icon: Home, label: 'Home', id: 'hero' },
  { icon: User, label: 'About', id: 'about' },
  { icon: Code, label: 'Skills', id: 'skills' },
  { icon: Folder, label: 'Projects', id: 'projects' },
  { icon: Briefcase, label: 'Experience', id: 'experience' },
  { icon: Mail, label: 'Contact', id: 'contact' }
];

// export const SKILLS = [
//   { icon: '☕', name: 'Java' },
//   { icon: '🍃', name: 'Spring Boot' },
//   { icon: '📦', name: 'Quarkus' },
//   { icon: '⚛️', name: 'React' },
//   { icon: '🅰️', name: 'Angular' },
//   { icon: '🗄️', name: 'PostgreSQL' },
//   { icon: '☁️', name: 'AWS' },
//   { icon: '🐳', name: 'Docker' }
// ];

export const SKILLS = [
  { icon: JavaIcon, name: 'Java' },
  { icon: SpringIcon, name: 'Spring Boot' },
  { icon: QuarkusIcon, name: 'Quarkus' },
  { icon: ReactIcon, name: 'React' },
  { icon: AngularIcon, name: 'Angular' },
  { icon: PostgresIcon, name: 'PostgreSQL' },
  { icon: AWSIcon, name: 'AWS' },
  { icon: DockerIcon, name: 'Docker' }
];

export const PROJECTS = [
  {
    title: 'AI Podcast Summarizer',
    description: 'Built an AI-powered web application that transcribes podcast audio and generates structured summaries using OpenAI Whisper and Google Gemini 2.0 Flash with Streamlit. Integrated YouTube API to extract and process audio content automatically.',
    tech: ['Streamlit', 'Python', 'FastAPI', 'AI', 'Gemini API', 'Whisper', 'LangChain', 'Audio Processing'],
    liveLink: 'https://huggingface.co/spaces/Manikanta1572/AIPodcastSummarizer',
    githubLink: 'https://github.com/ManikantaSai55555/AIPodcastSummarizer'
  },
  {
    title: 'ResuMatch',
    description: 'ResuMatch is an AI-powered resume analyzer that compares resumes with job descriptions using Google\'s Gemini API. It highlights matching skills, identifies gaps, and provides personalized suggestions. Built with FastAPI (backend) and React + Vite (frontend), it\'s fully containerized with Docker.',
    tech: ['React', 'Python', 'FastAPI', 'Docker', 'AI', 'Gemini API'],
    liveLink: 'https://resumatchai.vercel.app',
    githubLink: 'https://github.com/ManikantaSai55555/ResuMatch'
  },
  {
    title: 'Grievance Management Chatbot',
    description: 'AI-powered web application that automates employee grievance handling. Built with FastAPI, PostgreSQL, and React, it classifies grievances using GPT models and assigns tickets to the right teams for faster resolution.',
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AI', 'GPT API'],
    githubLink: 'https://github.com/ShivasaiPothuganti/credence'
  },
  {
    title: 'Credence',
    description: 'A comprehensive financial management tool built with modern technologies, offering expense tracking, budget planning, and financial analytics. It provides a clean, user-friendly interface and actionable insights to help users make smarter financial decisions.',
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    githubLink: 'https://github.com/ShivasaiPothuganti/credence'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with user authentication, product catalog, shopping cart, and order management system built using enterprise Java technologies.',
    tech: ['JSP', 'Servlets', 'MVC', 'MySQL', 'Java'],
    githubLink: 'https://github.com/ManikantaSai55555/OnlineStore'
  }
];

export const EXPERIENCES = [
  {
    title: 'Associate Software Engineer',
    company: 'Xebia',
    date: 'July 2023 - Present',
    description: 'Led modernization of legacy Java applications, successfully migrating to microservices architecture using Quarkus. Implemented SQS-based asynchronous synchronization and developed robust backend services for mobile applications. Gained extensive hands-on experience with AWS services, Python automation, and cloud deployment strategies.'
  },
  {
    title: 'Engineer Trainee',
    company: 'Xebia',
    date: 'August 2022 - June 2023',
    description: 'Implemented Keycloak for secure authentication systems, developed RESTful APIs using Spring Boot with PostgreSQL integration. Successfully containerized applications using Docker and deployed through Azure CI/CD pipelines. Explored and implemented Spring Cloud microservices patterns.'
  }
];

export const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: 'Xebia Techathon Finalist',
    description: 'Designed and developed an innovative internal AI bot for employee grievance management, showcasing problem-solving skills and technical innovation.'
  },
  {
    icon: Award,
    title: 'TCS CodeVita Global Rank 2010',
    description: 'Achieved global rank of 2010 in TCS CodeVita Season 10, demonstrating strong algorithmic thinking and competitive programming skills among around 1 Lakh of participants worldwide.'
  }
];

export const ABOUT_TEXT = [
  'Software Engineer with <strong>3 years of experience</strong> in backend development, microservices architecture, and cloud deployment. I specialize in <strong>Java</strong>, <strong>Quarkus</strong>, and <strong>Spring Boot</strong>, with proven success in modernizing legacy applications and developing scalable, high-performance distributed systems.',
  'My expertise extends to <strong>AWS services</strong> (Lambda, S3, EC2, SQS, Cassandra), <strong>Docker containerization</strong>, and <strong>Azure CI/CD pipelines</strong>. I\'m passionate about delivering secure, reliable, and maintainable solutions in agile environments.',
  'Currently, I am expanding my expertise in <strong>Artificial Intelligence</strong>, actively learning and working with cutting-edge AI technologies including <strong>Google Gemini API</strong>, <strong>OpenAI Whisper</strong> for audio transcription, <strong>LangChain</strong> for building AI applications, and <strong>OpenAI GPT models</strong>. I am applying these skills to build innovative solutions that combine traditional software engineering with intelligent automation.'
];
