import React, { useEffect, useRef } from 'react'
import styles from '../styles/experience.module.css'
import global from '../styles/global.module.css'
// import { experiences } from '../constants/experiences';
import CustomText from '../Components/CustomText'
import CustomImagePreview from '../Components/CustomImagePreview'
import adobeLogo from '../assets/adobe_logo.jpeg'
import sankeyLogo from '../assets/sankey_solutions_logo.jpeg'
import studyMonkLogo from '../assets/study_monk_logo.jpeg'
import { Experience } from 'interfaces/Experience'

const experiences: Experience[] = [
    {
        company: 'Sankey Solutions',
        logo: sankeyLogo,
        role: 'Solution Analyst',
        period: 'Jun 2021 - June 2024',
        location: 'Mumbai, Maharashtra, India',
        description: [
            'Delivered a secure EV charging analytics dashboard for Motor Fuel Group (MFG) using React & Typescript implementing modular component design, lazy loading & optimized state management using Redux, improving efficiency by 30%.',
            'Built scalable charging management tools supporting 900+ distributed locations across United Kingdoms, enabling real-time performance monitoring, payment reconciliation workflows, and seamless third-party EV API integrations.',
            'Collaborated with UI/UX designers to translate Figma prototypes into production-ready, responsive React components aligned with business requirements.',
            'Applied React memoization techniques like useMemo, useCallback to identify rendering bottlenecks, reducing unnecessary re-renders and improving UI responsiveness.',
            'Implemented Role-Based Access Control (RBAC) with permission-scoped authorization to enforce secure access across admin, technical, finance, and customer service teams.'
        ],
        technologies: [
            'JavaScript',
            'TypeScript',
            'React.js',
            'React Native',
            'Django',
            'Redis',
            'REST APIs',
            'Azure',
            'Cron Jobs',
            'CI/CD',
            'SQL Optimization',
            'Database Design',
            'Performance Tuning',
            'Software Deployment',
            'Agile Methodologies',
            'SQL',
            'Firebase',
            'Push notifications',
        ],
    },
    {
        company: 'StudyMonk',
        logo: studyMonkLogo,
        role: 'Mobile Application Developer – React Native',
        period: 'Jan 2021 to Jun 2021 · 6 mos',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Engineered a scalable ed-tech web platform using React and TypeScript, designing reusable component architecture and a centralized UI kit that reduced feature development time by 30%.',
            'Improved frontend performance by implementing code-splitting, lazy loading, asset compression, and memoization, increasing Lighthouse performance score from 78 to 90 and reducing initial load time by 4%.',
            'Designed and deployed secure RESTful APIs using Node.js, Express, and MySQL on AWS, supporting 1,000+ active users with optimized query indexing and JWT-based authentication.',
            'Integrated Stripe payment gateway supporting Apple Pay, Google Pay and Card Payment, increasing paid conversions by 15% while ensuring transactional reliability.'
        ],
        technologies: [
            'JavaScript',
            'React',
            'React Hooks',
            'Redux',
            'Node.js',
            'Firebase Authentication',
            'Firebase Cloud Messaging',
            'RESTful APIs',
            'Push Notifications',
        ],
    },
]

const ExperienceScreen: React.FC = () => {
    const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        }

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target as HTMLDivElement
                    element.classList.add(styles.visible)
                }
            })
        }

        const observer = new IntersectionObserver(
            handleIntersect,
            observerOptions
        )

        experienceRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref)
            }
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.experienceContainer}>
            <div className={global.content}>
                <CustomText variant="h2" className={global.sectionTitle}>
                    Experience
                </CustomText>
                <CustomText variant="p" className={global.sectionSubtitle}>
                    Where I've worked
                </CustomText>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div
                            key={`${exp.company}-${index}`}
                            className={styles.experienceCard}
                            ref={(el) => (experienceRefs.current[index] = el)}
                        >
                            <div className={styles.header}>
                                <div className={styles.companyInfo}>
                                    <div className={styles.logoContainer}>
                                        <CustomImagePreview
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className={styles.companyLogo}
                                            onError={(e) => {
                                                const target =
                                                    e.target as HTMLImageElement
                                                target.style.display = 'none'
                                            }}
                                        />
                                    </div>
                                    <div className={styles.companyDetails}>
                                        <CustomText
                                            variant="h3"
                                            className={styles.role}
                                        >
                                            {exp.role}
                                        </CustomText>
                                        <CustomText
                                            variant="span"
                                            className={styles.company}
                                        >
                                            {exp.company}
                                        </CustomText>
                                        <CustomText
                                            variant="span"
                                            className={styles.period}
                                        >
                                            {exp.period}
                                        </CustomText>
                                        <CustomText
                                            variant="span"
                                            className={styles.location}
                                        >
                                            {exp.location}
                                        </CustomText>
                                    </div>
                                </div>
                            </div>

                            <ul className={styles.description}>
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            <div className={styles.technologies}>
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className={styles.tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceScreen
