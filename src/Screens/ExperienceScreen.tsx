import React, { useEffect, useRef } from 'react';
import styles from '../styles/experience.module.css';
import { experiences } from '../constants/experiences';
import CustomText from '../components/CustomText';
import CustomImagePreview from '../components/CustomImagePreview';

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
        <CustomText variant="h2" className={styles.title}>Experience</CustomText>
        <CustomText variant="p" className={styles.subtitle}>Where I've worked</CustomText>

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
                    <CustomImagePreview
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
                    <CustomText variant="h3" className={styles.role}>{exp.role}</CustomText>
                    <CustomText variant="span" className={styles.company}>{exp.company}</CustomText>
                    <CustomText variant="span" className={styles.period}>{exp.period}</CustomText>
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