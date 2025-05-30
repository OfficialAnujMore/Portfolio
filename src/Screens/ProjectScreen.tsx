import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/projects.module.css';
import { FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  features: string[];
  category?: string;
  date?: string;
}

const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Service Chatbot',
    shortDescription: 'An intelligent chatbot that leverages OpenAI GPT-4 to provide automated customer support with natural language understanding.',
    fullDescription: 'Built a scalable customer service solution that reduced response time by 75% and handled over 1000 daily inquiries. Implemented context-aware conversations and seamless handoff to human agents when needed.',
    image: 'https://placehold.co/1600x900/222831/ff8a00.png?text=AI-Powered%0ACustomer+Service%0AChatbot&font=montserrat',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/username/ai-chatbot',
    projectUrl: 'https://ai-chatbot-demo.com',
    category: 'ARTIFICIAL INTELLIGENCE',
    date: 'December 2023',
    features: [
      'Real-time conversation with typing indicators and message status',
      'Context-aware responses using conversation history',
      'Automatic language detection and translation support',
      'Integration with popular CRM platforms',
      'Analytics dashboard for conversation insights'
    ]
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation Platform',
    shortDescription: 'A comprehensive IoT platform for managing and automating smart home devices with voice control and energy monitoring.',
    fullDescription: 'Developed a full-stack IoT solution that connects and controls various smart home devices. Features include real-time energy monitoring, automated schedules, and voice control integration with Alexa and Google Home.',
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Smart+Home%0AAutomation&font=montserrat',
    technologies: ['React Native', 'TypeScript', 'AWS IoT', 'GraphQL', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/username/smart-home',
    projectUrl: 'https://smart-home-demo.com',
    category: 'IOT',
    date: 'January 2024',
    features: [
      'Cross-platform mobile app with real-time device status',
      'Energy consumption analytics and optimization suggestions',
      'Custom automation rules with conditional logic',
      'Multi-user access with role-based permissions',
      'End-to-end encrypted device communication'
    ]
  },
  {
    id: 'ml-recommendation',
    title: 'ML-Based Product Recommendation Engine',
    shortDescription: 'A sophisticated recommendation system using machine learning to provide personalized product suggestions for e-commerce.',
    fullDescription: 'Created a scalable recommendation engine that increased average order value by 23% through personalized product suggestions. Implemented collaborative filtering and content-based recommendation algorithms.',
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=ML+Product%0ARecommendation&font=montserrat',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/username/ml-recommendation',
    projectUrl: 'https://ml-recommendation-demo.com',
    category: 'MACHINE LEARNING',
    date: 'February 2024',
    features: [
      'Hybrid recommendation system combining multiple algorithms',
      'Real-time user behavior analysis and adaptation',
      'A/B testing framework for algorithm optimization',
      'Scalable architecture handling millions of products',
      'Detailed analytics on recommendation performance'
    ]
  },
  {
    id: 'blockchain-marketplace',
    title: 'Decentralized NFT Marketplace',
    shortDescription: 'A blockchain-based marketplace for creating, buying, and selling NFTs with support for multiple cryptocurrencies.',
    fullDescription: 'Built a decentralized marketplace that processes over $100K in monthly transaction volume. Implemented smart contracts for secure transactions and royalty management.',
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=NFT%0AMarketplace&font=montserrat',
    technologies: ['Solidity', 'React', 'Web3.js', 'IPFS', 'Hardhat', 'TypeScript'],
    githubUrl: 'https://github.com/username/nft-marketplace',
    projectUrl: 'https://nft-marketplace-demo.com',
    category: 'BLOCKCHAIN',
    date: 'March 2024',
    features: [
      'Multi-chain support for Ethereum and Polygon',
      'Gasless transactions with meta-transactions',
      'Automated royalty distribution system',
      'Advanced search with metadata filtering',
      'Real-time price feeds and analytics'
    ]
  },
  {
    id: 'video-platform',
    title: 'AI-Enhanced Video Learning Platform',
    shortDescription: 'An educational platform featuring AI-powered video processing, automatic captioning, and interactive learning tools.',
    fullDescription: 'Developed a comprehensive video learning platform used by over 50,000 students. Features include AI-generated summaries, interactive quizzes, and personalized learning paths.',
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=AI+Video%0ALearning&font=montserrat',
    technologies: ['Next.js', 'Python', 'FFmpeg', 'AWS', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/video-platform',
    projectUrl: 'https://video-platform-demo.com',
    category: 'EDUCATION',
    date: 'April 2024',
    features: [
      'Automatic video transcription and translation',
      'AI-generated chapter markers and summaries',
      'Interactive timestamps with note-taking',
      'Real-time collaboration features',
      'Advanced analytics for learning progress'
    ]
  },
  {
    id: 'saas-platform',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'A comprehensive analytics and reporting platform for SaaS businesses with real-time metrics and customizable dashboards.',
    fullDescription: 'Created a scalable analytics platform that processes over 1M events daily. Provides real-time insights into key business metrics, customer behavior, and revenue patterns.',
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=SaaS%0AAnalytics&font=montserrat',
    technologies: ['Vue.js', 'Node.js', 'ClickHouse', 'Kafka', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/username/saas-analytics',
    projectUrl: 'https://saas-analytics-demo.com',
    category: 'ANALYTICS',
    date: 'May 2024',
    features: [
      'Real-time data processing and visualization',
      'Custom metric creation and tracking',
      'Automated report generation and scheduling',
      'Integration with popular SaaS tools',
      'Advanced user segmentation and cohort analysis'
    ]
  }
];

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.featuredCard} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.featuredContent}>
        <div className={styles.featuredImageContainer}>
          <img src={project.image} alt={project.title} className={styles.featuredImage} />
        </div>
        <div className={styles.featuredDetails}>
          <span className={styles.category}>{project.category}</span>
          <h3 className={styles.featuredTitle}>{project.title}</h3>
          <p className={styles.featuredDescription}>{project.shortDescription}</p>
          <div className={styles.featuredMeta}>
            <span className={styles.date}>{project.date}</span>
            <div className={styles.links}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <FaGithub />
                </a>
              )}
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegularProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.regularCard} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.regularImageContainer}>
        <img src={project.image} alt={project.title} className={styles.regularImage} />
      </div>
      <div className={styles.regularContent}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.regularTitle}>{project.title}</h3>
        <p className={styles.regularDescription}>{project.shortDescription}</p>
        <div className={styles.regularMeta}>
          <span className={styles.date}>{project.date}</span>
          <a href={project.projectUrl} className={styles.readMore}>
            View Project <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectScreen: React.FC = () => {
  const featuredProject = projects[0];
  const regularProjects = projects.slice(1);

  return (
    <section className={styles.projectsContainer}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>Some things I've built</p>
        
        <FeaturedProjectCard project={featuredProject} />
        
        <div className={styles.projectsGrid}>
          {regularProjects.map((project) => (
            <RegularProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectScreen; 