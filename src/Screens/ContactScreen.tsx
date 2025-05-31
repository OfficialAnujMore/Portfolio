import { useState } from 'react';
import styles from '../styles/contact.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { content } from '../constants/en';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/your-username'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: content.contact.github
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/your-username'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: content.contact.leetcode
    }
  ];

  return (
    <section className={styles.contactContainer}>
      <div className={styles.content}>
        <CustomText variant="h2" className={styles.sectionTitle}>{content.contact.title}</CustomText>
        <CustomText variant="p" className={styles.sectionSubtitle}>{content.contact.subtitle}</CustomText>
        <div className={styles.contactWrapper}>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>{content.contact.nameLabel}</label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>{content.contact.emailLabel}</label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>{content.contact.messageLabel}</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <CustomButton type="submit" className={styles.submitButton}>
                {content.contact.sendButton}
              </CustomButton>
            </form>
          </div>
          <div className={styles.socialLinks}>
            <CustomText variant="h3" className={styles.socialTitle}>{content.contact.findMe}</CustomText>
            <div className={styles.socialGrid}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 