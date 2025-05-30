import React, { useEffect, useState } from 'react';
import styles from '../styles/splash.module.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // After all animations complete (3s animations + 1s buffer)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={styles.splashContainer}>
      <div className={`${styles.animatedText} ${styles.hello}`}>
        Hi <span className={styles.wavingHand}>👋</span>, I am
      </div>
      <div className={`${styles.animatedText} ${styles.name}`}>
        Anuj More
      </div>
      <div className={`${styles.animatedText} ${styles.role}`}>
        Software Developer based in California
      </div>
    </div>
  );
};

export default SplashScreen; 