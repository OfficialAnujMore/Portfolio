import React, { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaQuoteLeft } from 'react-icons/fa';
import styles from '../styles/recommendations.module.css';
import { Recommendation } from '../types/Recommendation';

const recommendations: Recommendation[] = [
  {
    id: '1',
    recommenderName: 'Nitesh Kumar',
    recommenderTitle: 'Solution lead',
    recommenderCompany: 'Sankey Solutions',
    recommenderImage: 'https://placehold.co/400x400/222831/ff8a00.png?text=NK&font=montserrat',
    relationship: 'Directly managed Anuj',
    recommendationText: "Working with Anuj has been a real pleasure. He's got this incredible ability to take ownership and lead with confidence. When it came to tackling complex solutions, I really was taken by how fast he mastered new technologies and frameworks. What really stands out is how he stays consistently motivated and focused. Anuj's unique mix of ownership, leadership, and problem-solving skills makes him an invaluable asset of any team.",
    date: 'October 31, 2024',
    linkedinProfileUrl: 'https://linkedin.com/in/nitesh-kumar'
  },
  {
    id: '2',
    recommenderName: 'Shrutik Shashikant Kurekar',
    recommenderTitle: 'Master in Science',
    recommenderCompany: 'California State University, Fullerton',
    recommenderImage: 'https://placehold.co/400x400/222831/ff8a00.png?text=SK&font=montserrat',
    relationship: 'Worked together at CSU Fullerton',
    recommendationText: 'I am fortunate to have studied alongside Anuj here at California State University, Fullerton. Anuj is a driven and talented student with a strong passion for software development. His expertise in JavaScript, React JS, and React Native, coupled with his commitment to continuous learning, makes him an exceptional candidate for any software development role.',
    date: 'September 15, 2024',
    linkedinProfileUrl: 'https://linkedin.com/in/shrutik-kurekar'
  },
  {
    id: '3',
    recommenderName: 'Kejal Chavda',
    recommenderTitle: 'Software Developer',
    recommenderCompany: 'Architect Solutions',
    recommenderImage: 'https://placehold.co/400x400/222831/ff8a00.png?text=KC&font=montserrat',
    relationship: 'Directly managed Anuj',
    recommendationText: 'Working with Anuj has been a rewarding experience, particularly because of his remarkable intellectual curiosity and technical acumen. He demonstrated a relentless drive to explore emerging technologies, consistently seeking innovative ways to approach and solve complex challenges. His ability to not only master the intricacies of current systems but also anticipate future trends distinguishes him from rest.',
    date: 'September 10, 2024',
    linkedinProfileUrl: 'https://linkedin.com/in/kejal-chavda'
  },
  {
    id: '4',
    recommenderName: 'Tony Eloy',
    recommenderTitle: 'IT Product Analyst',
    recommenderCompany: 'Motor Fuel Group',
    recommenderImage: 'https://placehold.co/400x400/222831/ff8a00.png?text=TE&font=montserrat',
    relationship: 'Worked directly with Anuj',
    recommendationText: 'Anuj is thoughtful and supportive. His knowledge of software development is impressive. He managed to raise the queries and suggestions at the right time which helped us a lot in multiple activities.',
    date: 'September 5, 2024',
    linkedinProfileUrl: 'https://linkedin.com/in/tony-eloy'
  },
  {
    id: '5',
    recommenderName: 'Hardik Tamone',
    recommenderTitle: 'Full Stack Developer',
    recommenderCompany: 'Sankey Solutions',
    recommenderImage: 'https://placehold.co/400x400/222831/ff8a00.png?text=HT&font=montserrat',
    relationship: 'Worked together on the same team',
    recommendationText: "I have worked with Anuj for few years and I must say he's a real problem solver. He is exceptionally good in development and creating solution. Apart from technical aspect he is really good at managing team and is a real team player.",
    date: 'August 25, 2024',
    linkedinProfileUrl: 'https://linkedin.com/in/hardik-tamone'
  }
];

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
        <p className={styles.recommendationText}>{recommendation.recommendationText}</p>
        <div className={styles.recommenderInfo}>
          <div className={styles.recommenderImage}>
            <img src={recommendation.recommenderImage} alt={recommendation.recommenderName} />
          </div>
          <div className={styles.recommenderDetails}>
            <h4 className={styles.recommenderName}>{recommendation.recommenderName}</h4>
            <p className={styles.recommenderTitle}>
              {recommendation.recommenderTitle} at {recommendation.recommenderCompany}
            </p>
            <p className={styles.relationship}>{recommendation.relationship}</p>
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
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Recommendations</h2>
        <p className={styles.sectionSubtitle}>What people say about my work</p>
        
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