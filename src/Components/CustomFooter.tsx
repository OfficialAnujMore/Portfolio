import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span>@{new Date().getFullYear()} Developed by Anuj More</span>
  </footer>
);

export default Footer; 