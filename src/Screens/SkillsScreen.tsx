import React, { useEffect, useRef } from 'react';
import styles from '../styles/skills.module.css';

interface Skill {
  name: string;
}

const skillsByCategory: Record<string, Skill[]> = {
  'Frontend Development': [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'Redux' },
    { name: 'Next.js' },
    { name: 'Tailwind CSS' },
    { name: 'Material UI' },
  ],
  'Backend Development': [
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'Java' },
    { name: 'Express' },
    { name: 'FastAPI' },
    { name: 'Spring Boot' },
    { name: 'GraphQL' },
  ],
  'Database & Cloud': [
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'MySQL' },
    { name: 'AWS' },
    { name: 'Firebase' },
    { name: 'Docker' },
    { name: 'Redis' },
  ],
  'Machine Learning': [
    { name: 'TensorFlow' },
    { name: 'PyTorch' },
    { name: 'Scikit-learn' },
    { name: 'OpenCV' },
    { name: 'Pandas' },
    { name: 'NumPy' },
    { name: 'Keras' },
  ],
  'Tools & Others': [
    { name: 'Git' },
    { name: 'VS Code' },
    { name: 'Postman' },
    { name: 'Figma' },
    { name: 'Jest' },
    { name: 'Linux' },
    { name: 'Agile' },
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

  const renderSkillsGroup = (skills: Skill[]) => {
    // Create three copies for smoother infinite scroll
    const repeatedSkills = [...skills, ...skills, ...skills];
    return repeatedSkills.map((skill, index) => (
      <div 
        key={`${skill.name}-${index}`} 
        className={styles.skillCard}
      >
        <span className={styles.skillName}>{skill.name}</span>
      </div>
    ));
  };

  return (
    <section className={styles.skillsContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <p className={styles.subtitle}>Technologies I've been working with</p>
        
        <div className={styles.categories}>
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className={styles.category}
              ref={el => categoriesRef.current[categoryIndex] = el}
            >
              <h3 className={styles.categoryTitle}>{category}</h3>
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