import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/projects.module.css';
import { FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { content } from '../constants/en';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import CustomImagePreview from '../Components/CustomImagePreview';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  category?: string;
  date?: string;
}

const projects: Project[] = [
  {
    id: 'hirehour',
    title: 'HireHour – On-Demand Event Staffing Platform',
    shortDescription: 'A real-time event staffing platform connecting users with nearby service providers for events.',
    fullDescription: `HireHour is a real-time event staffing platform that connects users with nearby service providers who can work at their events. Whether it's a corporate gathering, wedding, or community event, HireHour ensures that users can quickly find and hire the right professionals.\n\nKey Contributions:\n- Developed a cross-platform mobile app using React Native & TypeScript, ensuring smooth performance on both iOS & Android.\n- Built a scalable backend with Node.js & PostgreSQL, optimizing database queries for faster response times.\n- Integrated location-based search, allowing users to find nearby service providers instantly.\n- Implemented real-time push notifications to keep users and service providers updated on job requests and confirmations.\n- Deployed and managed the application on DigitalOcean, ensuring high availability and performance.\n- Designed a secure authentication system with JWT, enhancing data privacy and user trust.\n\nImpact:\n- Reduced service booking time by enabling instant connections between users and service providers.\n- Increased job acceptance rate through automated notifications and an easy-to-use interface.\n- Enhanced platform reliability with optimized backend infrastructure and cloud deployment.`,
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=HireHour',
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'DigitalOcean', 'SendGrid', 'Push notification', 'Payment gateway integration'],
    githubUrl: 'https://github.com/OfficialAnujMore/HireHour_FE',
    projectUrl: '',
    category: 'MOBILE APP',
    date: 'Dec 2024 - Present',
  },
  {
    id: 'housing-market-analysis',
    title: 'Housing Market Analysis Dashboard',
    shortDescription: 'A web-based dashboard for real-time housing market analysis, providing insights into pricing, inventory, and demand patterns.',
    fullDescription: `Developed a web-based dashboard for real-time housing market analysis. This platform provides clear insights into pricing, inventory, and demand patterns, empowering real estate professionals and investors to make data-driven decisions. Built using the Preswald open-source platform, it offers a seamless and responsive user experience.\n\nKey Contributions:\n- Developed interactive data visualizations, enabling users to explore market trends effortlessly.\n- Integrated real-time data APIs for accurate, up-to-date insights.\n- Optimized frontend performance for smooth navigation and quick load times.\n- Implemented responsive design for enhanced accessibility across devices.\n- Focused on user-friendly interfaces to support data-driven strategies.\n\nImpact:\n- Improved data analysis efficiency for real estate stakeholders.\n- Enhanced decision-making through intuitive visual representations.\n- Increased platform engagement with responsive design and real-time insights.`,
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Housing+Market+Analysis',
    technologies: ['Data Analysis', 'Data Engineering', 'Python', 'Statistical Data Analysis'],
    githubUrl: 'https://github.com/OfficialAnujMore/housing-market-analysis',
    projectUrl: 'https://housing-analysis-397455_anuj-more-assessment.preswald.app/',
    category: 'DATA ANALYSIS',
    date: 'Apr 2025',
  },
  {
    id: 'roadside-assistance',
    title: 'Roadside Assistance App – Emergency Vehicle Support',
    shortDescription: 'A cross-platform app for instant vehicle breakdown support, featuring real-time location tracking and cloud-based notifications.',
    fullDescription: `The Roadside Assistance App is designed to provide instant support to users facing vehicle breakdowns by helping them find the nearest garage within a specified radius. The app ensures real-time location tracking and seamless communication with service providers, reducing wait times and improving roadside assistance efficiency.\n\nKey Contributions:\n- Developed a cross-platform mobile app using Flutter, ensuring smooth performance on both Android & iOS.\n- Implemented real-time location tracking via Google Maps API, enabling users to quickly locate nearby service providers.\n- Integrated Firebase for push notifications to instantly alert users and service providers about requests and status updates.\n- Built a scalable backend with Node.js, optimizing response times for fast service provider matching.\n- Designed a user-friendly UI that simplifies navigation and enhances the user experience.\n\nImpact:\n- Reduced assistance response time by efficiently connecting users with nearby garages.\n- Enhanced user experience with real-time tracking and automated notifications.\n- Improved reliability and performance by leveraging cloud-based infrastructure.`,
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Roadside+Assistance',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js', 'MYSQL'],
    githubUrl: '',
    projectUrl: '',
    category: 'MOBILE APP',
    date: 'Aug 2020 - Dec 2020',

  },
  {
    id: 'bengaluru-property-prediction',
    title: 'Property Price Prediction',
    shortDescription: 'A machine learning model to predict property prices in Bengaluru based on historical data and features.',
    fullDescription: `Developed a machine learning model using Scikit-Learn to predict property prices for homes located in Bengaluru, based on various conditions and features. This project involves analyzing historical real estate data to forecast prices with high accuracy. It highlights my expertise in data science, feature engineering, and model development, demonstrating my ability to apply machine learning techniques to real-world problems.`,
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Property+Price+Prediction',
    technologies: ['Machine Learning', 'Software developer'],
    githubUrl: '',
    projectUrl: '',
    category: 'MACHINE LEARNING',
    date: 'May 2020 - Jun 2020',
  },
  {
    id: 'campus-link',
    title: 'Campus Link - Bridging the Gap Between Parents & Institutions',
    shortDescription: 'A mobile app for seamless communication between parents and educational institutions, with real-time data and notifications.',
    fullDescription: `Developed for the IT department of KJ Somaiya Institute of Engineering and Information Technology, this mobile application serves as a centralized platform for seamless communication between parents and the college. The app provides a user-friendly interface to track students' academic progress, attendance records, and upcoming events, fostering better parental engagement.\n\nKey Contributions:\n- Designed and developed a cross-platform app using Flutter, ensuring smooth performance on Android & iOS.\n- Implemented real-time data synchronization with Firebase, allowing parents to access updated student records.\n- Developed a secure backend with Node.js and PostgreSQL to manage student data efficiently.\n- Integrated push notifications to keep parents informed about attendance, exam schedules, and important announcements.\n- Designed a responsive and intuitive UI to enhance accessibility and ease of use.\n\nImpact:\n- Enhanced parental engagement by providing instant access to academic records.\n- Improved transparency between the institution and parents, strengthening communication.\n- Streamlined event notifications to ensure parents never miss crucial college updates.`,
    image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Campus+Link',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL', 'Android Development', 'Android Studio', 'Android SDK', 'MySQL', 'PHP'],
    githubUrl: '',
    projectUrl: '',
    category: 'MOBILE APP',
    date: 'Jan 2020 - Feb 2020',
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
          <CustomImagePreview src={project.image} alt={project.title} className={styles.featuredImage} />
        </div>
        <div className={styles.featuredDetails}>
          <CustomText variant="span" className={styles.category}>{project.category}</CustomText>
          <CustomText variant="h3" className={styles.featuredTitle}>{project.title}</CustomText>
          <CustomText variant="p" className={styles.featuredDescription}>{project.shortDescription}</CustomText>
          <div className={styles.featuredMeta}>
            <CustomText variant="span" className={styles.date}>{project.date}</CustomText>
            <div className={styles.links}>
              {project.githubUrl && (
                <CustomButton as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <FaGithub />
                </CustomButton>
              )}
              {project.projectUrl && (
                <CustomButton as="a" href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <FaGlobe />
                </CustomButton>
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
        <CustomImagePreview src={project.image} alt={project.title} className={styles.regularImage} />
      </div>
      <div className={styles.regularContent}>
        <CustomText variant="span" className={styles.category}>{project.category}</CustomText>
        <CustomText variant="h3" className={styles.regularTitle}>{project.title}</CustomText>
        <CustomText variant="p" className={styles.regularDescription}>{project.shortDescription}</CustomText>
        <div className={styles.regularMeta}>
          <CustomText variant="span" className={styles.date}>{project.date}</CustomText>
          {project.projectUrl && (
            <CustomButton as="a" href={project.projectUrl} className={styles.readMore} target="_blank" rel="noopener noreferrer">
              {content.projects.viewProject} <FaArrowRight />
            </CustomButton>
          )}
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
        <CustomText variant="h2" className={styles.sectionTitle}>{content.projects.title}</CustomText>
        <CustomText variant="p" className={styles.sectionSubtitle}>{content.projects.subtitle}</CustomText>
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