import React, { useEffect, useRef } from 'react'
import styles from '../styles/experience.module.css'
// import { experiences } from '../constants/experiences';
import CustomText from '../Components/CustomText'
import CustomImagePreview from '../Components/CustomImagePreview'
import adobeLogo from '../assets/adobe_logo.jpeg'
import sankeyLogo from '../assets/sankey_solutions_logo.jpeg'
import studyMonkLogo from '../assets/study_monk_logo.jpeg'
import { Experience } from 'interfaces/Experience'

const experiences: Experience[] = [
    {
        company: 'Adobe',
        logo: adobeLogo,
        role: 'Data Analyst @CSU Fullerton',
        period: 'May 2025 - Present',
        location: 'Fullerton, California, USA',
        description: [],
        technologies: [],
    },
    {
        company: 'Sankey Solutions',
        logo: sankeyLogo,
        role: 'Software Developer',
        period: 'Jun 2021 - June 2024',
        location: 'Mumbai, Maharashtra, India',
        description: [
            "Led end-to-end development of EV charging platform for MFG (UK's largest forecourt operator)",
            'Designed and implemented real-time charging metrics, dynamic pricing system and payment integrations',
            'Built WebSocket-based State of Charge tracking showing live charging data and costs',
            'Integrated Firebase Cloud Messaging for push notifications and promotional updates',
            'Enhanced SquareUp payment module supporting multiple payment methods including digital wallets',
            'Optimized performance for 950+ EV stations using lazy loading and virtualization',
            'Managed Azure cloud infrastructure including App Services, Blob Storage and SQL databases',
            'Established GitLab CI/CD pipelines and disaster recovery processes for reliable deployments',
        ],
        technologies: [
            'Javascript',
            'Typescript',
            'ReactJS',
            'React Native',
            'Azure Devops',
            'SQL',
            'Firebase',
            'Push notifications',
            'Azure App Service',
        ],
    },
    {
        company: 'StudyMonk',
        logo: studyMonkLogo,
        role: 'Mobile Application Developer – React Native',
        period: 'Jan 2021 to Jun 2021 · 6 mos',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Delivered a production-ready mobile application using React Native, enabling users to locate nearby garages, compare service prices, and read customer reviews within a specified radius based on real-time GPS location.',
            'Built and maintained backend infrastructure using Node.js, Express.js, and deployed services via Firebase Cloud Functions and Firebase Realtime Database.',
            'Real-time GPS tracking and geofencing to detect and notify users of garages in proximity.',
            'Secure user authentication implemented using Firebase Authentication.',
            'Push notifications delivered via Firebase Cloud Messaging (FCM) for offers and updates.',
            'RESTful API development using Node.js and Express.js to handle garage listings, reviews, pricing data, and user management.',
            'Database design and management using MongoDB for structured, scalable data storage.',
            'Integrated rating and review systems, enabling users to make informed decisions based on community feedback.',
        ],
        technologies: [
            'JavaScript',
            'Mobile Application Development',
            'React Native',
            'React Hooks',
            'MongoDB',
            'Node.js',
            'Firebase Realtime Database',
            'Firebase Authentication',
            'Firebase Cloud Messaging',
            'RESTful APIs',
            'Geofencing',
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
            <div className={styles.content}>
                <CustomText variant="h2" className={styles.title}>
                    Experience
                </CustomText>
                <CustomText variant="p" className={styles.subtitle}>
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
