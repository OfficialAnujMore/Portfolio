import React, { useEffect, useRef } from 'react';
import styles from '../styles/experience.module.css';

interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: 'Company Name',
    logo: '/company1-logo.png',
    role: 'Senior Software Engineer',
    period: 'Jan 2023 - Present',
    description: [
      'Led development of microservices architecture using Node.js and TypeScript',
      'Improved system performance by 40% through optimization and caching strategies',
      'Mentored junior developers and conducted code reviews for team of 5',
    ],
    technologies: ['Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
  },
  {
    company: 'Previous Company',
    logo: '/company2-logo.png',
    role: 'Software Engineer',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Developed and maintained full-stack applications using React and Python',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with product team to deliver features for 100k+ users',
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'Jenkins', 'Redis'],
  },
  {
    company: 'First Company',
    logo: '/company3-logo.png',
    role: 'Software Developer',
    period: 'Jan 2020 - May 2021',
    description: [
      'Built responsive web applications using React and Node.js',
      'Integrated third-party APIs and implemented authentication systems',
      'Participated in agile development processes and sprint planning',
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'REST APIs'],
  },
];

const ExperienceScreen: React.FC = () => {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLDivElement;
          element.classList.add(styles.visible);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    experienceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.experienceContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>Where I've worked</p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className={`${styles.experienceCard} ${index % 2 === 0 ? styles.right : styles.left}`}
              ref={(el) => (experienceRefs.current[index] = el)}
            >
              <div className={styles.header}>
                <div className={styles.companyInfo}>
                  <div className={styles.logoContainer}>
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className={styles.companyLogo}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className={styles.companyDetails}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className={styles.description}>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className={styles.technologies}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceScreen; 