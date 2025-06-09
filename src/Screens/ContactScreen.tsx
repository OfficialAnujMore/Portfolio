import { useState } from 'react';
import styles from '../styles/contact.module.css';
import { FaLinkedin, FaGithub, FaInstagram, FaCalendarAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { content } from '../constants/en';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import resumePDF from '../assets/Anuj_More_Resume.pdf';
import { sendContactEmail } from '../utils/emailjsApi';

const maxCharCount = content.contact.validation.maxCharCount;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errors.name = content.contact.validation.required;
    } else if (formData.name.trim().length < 2) {
      errors.name = content.contact.validation.nameMin;
    }
    if (!formData.email.trim()) {
      errors.email = content.contact.validation.required;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errors.email = content.contact.validation.emailInvalid;
    }
    if (!formData.message.trim()) {
      errors.message = content.contact.validation.required;
    } else {
      const wordCount = formData.message.trim().split(/\s+/).length;
      if (wordCount < 5) {
        errors.message = content.contact.validation.messageMinWords;
      } else if (formData.message.length > maxCharCount) {
        errors.message = content.contact.validation.messageMaxChars;
      }
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setLoading(true);
    setSuccess(null);
    setError(null);
    console.log(formData);
    
    try {
      await sendContactEmail(formData.name, formData.email, formData.message);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFieldErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: content.contact.linkedin
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: content.contact.github
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: content.contact.leetcode
    },
    {
      name: 'Calendly',
      icon: <FaCalendarAlt />,
      url: content.contact.calendly
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: content.contact.instagram
    }
   
  ];

  return (
    <section className={styles.contactContainer}>
      <div className={styles.content}>
        <CustomText variant="h2" className={styles.sectionTitle}>{content.contact.title}</CustomText>
        <CustomText variant="p" className={styles.sectionSubtitle}>{content.contact.subtitle}</CustomText>
        <div className={styles.contactWrapperSingle}>
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
                {fieldErrors.name && <CustomText variant="span" className={styles.errorMsg}>{fieldErrors.name}</CustomText>}
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
                {fieldErrors.email && <CustomText variant="span" className={styles.errorMsg}>{fieldErrors.email}</CustomText>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>{content.contact.messageLabel}</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={maxCharCount}
                  required
                />
                <div className={styles.charCountWrapper}>
                  <CustomText variant="span" className={styles.charCount}>
                    {formData.message.length}/{maxCharCount}
                  </CustomText>
                </div>
                {fieldErrors.message && <CustomText variant="span" className={styles.errorMsg}>{fieldErrors.message}</CustomText>}
              </div>
              <CustomButton type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Sending...' : content.contact.sendButton}
              </CustomButton>
              {success && <div className={styles.successMsg}>{success}</div>}
              {error && <div className={styles.errorMsg}>{error}</div>}
              <div className={styles.linksRow}>
               
                <div className={styles.socialRow}>
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
                    </a>
                  ))}
                </div>
                <CustomButton as="a" href={resumePDF} download className={styles.resumeButton}>
                  {content.contact.resumeButton}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 