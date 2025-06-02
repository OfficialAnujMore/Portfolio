import React, { useEffect, useRef } from 'react';
import styles from '../styles/skills.module.css';
import { content } from '../constants/en';
import CustomText from '../components/CustomText';

const skillsByCategory: Record<string, string[]> = {
  [content.skills.categories.frontend]: [
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'React Native',
    'React Hooks',
    'React Router',
    'HTML5',
    'CSS3',
    'Redux',
    'Push Notification',
  ],
  [content.skills.categories.backend]: [
    'Python',
    'Java',
    'Node.js',
    'Express.js',
    'Rest API',
    'OAuth',
    'JWT',
    'Socket.io',
    'WebSockets',
  ],
  [content.skills.categories.database]: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Amazon Web Services',
    'Firebase Cloud Functions',
    'Firebase Auth',
    'Firebase Cloud Messaging',
    'Docker',
  ],
  [content.skills.categories.tools]: [
    'Git',
    'VS Code',
    'Postman',
    'Figma',
    'XCode',
    'Android Studio',
  ],
};

const SkillsScreen: React.FC = () => {
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target as HTMLDivElement;
          category.classList.add(styles.categoryVisible);
          
          const title = category.querySelector(`.${styles.categoryTitle}`);
          if (title) {
            title.classList.add(styles.titleVisible);
          }

          const cards = category.querySelectorAll(`.${styles.skillCard}`);
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add(styles.cardVisible);
            }, index * 50);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    categoriesRef.current.forEach((category) => {
      if (category) {
        observer.observe(category);
      }
    });

    return () => observer.disconnect();
  }, []);

  const renderSkillsGroup = (skills: string[]) => {
    // Create three copies for smoother infinite scroll
    const repeatedSkills = [...skills, ...skills, ...skills];
    return repeatedSkills.map((skill, index) => (
      <div 
        key={`${skill}-${index}`} 
        className={styles.skillCard}
      >
        <CustomText variant="span" className={styles.skillName}>{skill}</CustomText>
      </div>
    ));
  };

  return (
    <section className={styles.skillsContainer}>
      <div className={styles.content}>
        <CustomText variant="h2" className={styles.title}>{content.skills.title}</CustomText>
        <CustomText variant="p" className={styles.subtitle}>{content.skills.subtitle}</CustomText>
        <div className={styles.categories}>
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className={styles.category}
              ref={el => categoriesRef.current[categoryIndex] = el}
            >
              <CustomText variant="h3" className={styles.categoryTitle}>{category}</CustomText>
              <div className={styles.skillsTrack}>
                <div className={styles.skillsSlider}>
                  {renderSkillsGroup(skills)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsScreen; 