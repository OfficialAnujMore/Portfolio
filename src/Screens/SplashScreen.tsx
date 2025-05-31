import React, { useEffect, useState } from 'react';
import styles from '../styles/splash.module.css';
import { content } from '../constants/en';
import CustomText from '../components/CustomText';

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
      <CustomText variant="span" className={`${styles.animatedText} ${styles.hello}`}>
        {content.splash.greeting} <span className={styles.wavingHand}>{content.splash.wavingHand}</span>, I am
      </CustomText>
      <CustomText variant="span" className={`${styles.animatedText} ${styles.name}`}>
        {content.splash.name}
      </CustomText>
      <CustomText variant="span" className={`${styles.animatedText} ${styles.role}`}>
        {content.splash.role}
      </CustomText>
    </div>
  );
};

export default SplashScreen; 