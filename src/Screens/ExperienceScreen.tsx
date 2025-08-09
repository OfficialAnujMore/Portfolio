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
        company: 'Adobe@Fullerton',
        logo: adobeLogo,
        role: 'Data Analyst',
        period: 'May 2025 - Present',
        location: 'Fullerton, California, USA',
        description: [
            'Configured role based access controls & automated moderation on Discord server, enhancing security & streamlining user management for 250+ members, while decreasing administrative overhead by 10 hours weekly.',
            'Presented actionable insights on user engagement trends to 15+ student board members, derived from analyzing Discord & Adobe analytics, enabling data driven event planning & increased participation by 10%.',
            'Analyzed student event participation & email campaign performance to identify key engagement drivers, resulting in a 20% increase in student involvement within one semester by creating visual dashboards & performance reports.',
        ],
        technologies: [
            'Python',
            'MS Excel',
            'Data Analysis',
            'Data Visualization',
            'Pandas',
            'Numpy',
            'Statistics',
            'Matplotlib',
            'Seaborn',
            'Jupyter Notebook',
            'Power BI',
            'Discord',
            'Communication'
        ],
    },
    {
        company: 'Sankey Solutions',
        logo: sankeyLogo,
        role: 'Solution Analyst',
        period: 'Jun 2021 - June 2024',
        location: 'Mumbai, Maharashtra, India',
        description: [
            'Delivered a cross platform EV charging & retail mobile app deployed across 900+ fuel, retail & EV sites, boosting customer engagement & increasing footfall by 15%.',
            'Integrated WebSocket streams & REST APIs to deliver real time EV charging insights, leading to a 10% decrease in customer support inquiries related to charging status & pricing confusion.',
            'Implemented admin control system leveraging Azure SQL, REST APIs, ReactJS, & Django, facilitated instant tariff updates, minimizing pricing discrepancies across 900+ EV charging sites.',
            'Optimized invoice generation & reporting workflows, normalizing databases, implementing Redis caching, & scheduling cron jobs cutting invoice time from 45s to 15s & handling 10,000+ invoices/week.',
            'Enhanced app performance & UX using lazy loading, virtualization, React Hooks & memoization, reducing load times by 4%.',
        ],
        technologies: [
            'JavaScript',
            'TypeScript',
            'ReactJS',
            'React Native',
            'Django',
            'Redis',
            'REST APIs',
            'Microsoft Azure ',
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
            'Delivered a production ready mobile application using React Native that enabled over 1,000 users to efficiently locate nearby garages within a specified radius based on real-time GPS tracking.',
            'Maintained backend infrastructure using Node.js & Express.js which enhanced data retrieval speeds by 30%, enhancing user experience.',
            'Implemented secure authentication via Firebase Authentication for over 500 active users, ensuring data security & trust in the platform.',
            'Designed RESTful APIs that managed garage listings & reviews while handling up to 10 requests per second without downtime.',
            'Integrated push notifications through Firebase Cloud Messaging leading to a 25% increase in user engagement with service offers.',
        ],
        technologies: [
            'JavaScript',
            'React Native',
            'React Hooks',
            'Redux',
            'MongoDB',
            'Node.js',
            'Firebase Authentication',
            'Firebase Cloud Messaging',
            'RESTful APIs',
            'Geofencing',
            'Mobile Application Development',
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
