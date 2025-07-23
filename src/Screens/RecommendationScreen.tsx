import React, { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaQuoteLeft } from 'react-icons/fa';
import styles from '../styles/recommendations.module.css';
import { recommendations } from '../constants/recommendations';
import { content } from '../constants/en';
import CustomText from '../Components/CustomText';
import CustomImagePreview from '../Components/CustomImagePreview';
import { Recommendation } from '../interfaces/Recommendation';
import global from '../styles/global.module.css';

const RecommendationCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => {
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
      className={`${styles.recommendationCard} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.quoteIcon}>
        <FaQuoteLeft />
      </div>
      <div className={styles.recommendationContent}>
        <CustomText variant="p" className={styles.recommendationText}>{recommendation.recommendationText}</CustomText>
        <div className={styles.recommenderInfo}>
          <div className={styles.recommenderImage}>
            <CustomImagePreview src={recommendation.recommenderImage} alt={recommendation.recommenderName} />
          </div>
          <div className={styles.recommenderDetails}>
            <CustomText variant="h4" className={styles.recommenderName}>{recommendation.recommenderName}</CustomText>
            <CustomText variant="p" className={styles.recommenderTitle}>
              {recommendation.recommenderTitle} at {recommendation.recommenderCompany}
            </CustomText>
            <CustomText variant="p" className={styles.relationship}>{recommendation.relationship}</CustomText>
          </div>
          {recommendation.linkedinProfileUrl && (
            <a
              href={recommendation.linkedinProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="View LinkedIn Profile"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const RecommendationScreen: React.FC = () => {
  return (
    <section className={styles.recommendationsContainer}>
      <div className={global.content}>
        <CustomText variant="h2" className={global.sectionTitle}>{content.recommendations.title}</CustomText>
        <CustomText variant="p" className={global.sectionSubtitle}>{content.recommendations.subtitle}</CustomText>
        <div className={styles.recommendationsGrid}>
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationScreen; 