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
        role: 'Software Developer / Solution Analyst',
        period: 'Jul 2021 – May 2024',
        location: 'Mumbai, Maharashtra, India',
        description: [
            'Delivered a full-stack EV charging analytics platform serving 10,000+ DAU across 900+ distributed locations, maintaining 99.9% uptime and processing 10,000–20,000 API requests per day.',
            'Built a React and TypeScript dashboard with modular component design, lazy loading, and optimized Redux state management, improving software efficiency by 30% and accelerating the development cycle.',
            'Architected an event-driven microservice for real-time EV charging status updates with Apache Kafka, reducing response latency and enabling API integrations across payment reconciliation workflows.',
            'Implemented Role-Based Access Control (RBAC) with permission-scoped authorization across roles, eliminating unauthorized access incidents.',
        ],
        technologies: [
            'JavaScript',
            'TypeScript',
            'React.js',
            'Redux',
            'Node.js',
            'Express.js',
            'Apache Kafka',
            'REST APIs',
            'RBAC',
            'AWS',
            'CI/CD',
            'PostgreSQL',
            'Agile',
        ],
    },
    {
        company: 'Study Monk',
        logo: studyMonkLogo,
        role: 'Software Developer',
        period: 'Jan 2021 – Jun 2021',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Deployed RESTful APIs using Node.js, Express.js, and MySQL on AWS supporting 1,000+ active users with optimized query indexing and JWT-based authentication.',
            'Integrated Stripe payment gateway, increasing paid conversions by 15% while ensuring reliable transaction handling.',
            'Improved Lighthouse performance score from 78 to 90 via code-splitting, lazy loading, asset compression, and memoization, reducing initial load time by 4%.',
            'Reduced feature development time by 30% by designing a reusable React component library and centralized UI kit that improved maintainability across the platform.',
        ],
        technologies: [
            'JavaScript',
            'React.js',
            'Node.js',
            'Express.js',
            'MySQL',
            'AWS',
            'JWT',
            'Stripe',
            'REST APIs',
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
