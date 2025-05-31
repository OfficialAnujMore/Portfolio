import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import { content } from '../constants/en';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: content.navbar.home },
    { id: 'skills', label: content.navbar.skills },
    { id: 'experience', label: content.navbar.experience },
    { id: 'projects', label: content.navbar.projects },
    { id: 'recommendations', label: content.navbar.recommendations },
    { id: 'contact', label: content.navbar.contact },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <CustomText variant="span" className={styles.logoText}>{content.navbar.logo}</CustomText>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <CustomButton
              key={link.id}
              as="button"
              onClick={() => scrollToSection(link.id)}
              className={styles.navButton}
            >
              <CustomText variant="span">{link.label}</CustomText>
            </CustomButton>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 