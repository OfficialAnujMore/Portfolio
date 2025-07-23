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
            'Delivered insights to student organizations by building websites and analytical reports, enabling data-driven decisions.',
            'Increased student engagement by 10% by analyzing event participation, email campaign performance, and membership growth across Adobe student programs.',
            'Reduced event planning time by ~15% by creating interactive data visualizations that streamlined scheduling and logistics.',
            'Supported strategic decision-making for executive leadership by developing monthly visual dashboards and performance reports improving visibility into program impact',
        ],
        technologies: [
            'Python',
            'Power BI',
            'Pandas',
            'Numpy',
            'Statistics',
            'Matplotlib',
            'Seaborn',
            'Jupyter Notebook',
        ],
    },
    {
        company: 'Sankey Solutions',
        logo: sankeyLogo,
        role: 'Software Developer',
        period: 'Jun 2021 - June 2024',
        location: 'Mumbai, Maharashtra, India',
        description: [
            'Led the development of a cross-platform EV charging and retail mobile application used across 900+ fuel, retail, and EV sites, improving, customer engagement and increasing footfall by 15%.',
            'Architected and implemented real-time EV charging insights (SOC, kWh, tariff, session costs) using WebSocket data streams and REST APIs, increasing customer transparency and session completion rates.',
            'Built a dynamic tariff system with admin-controlled pricing via a back-office portal; integrated Azure SQL, REST APIs,React Native, ReactJS, .Net to reflect time-based promotional tariffs instantly in the mobile app.',
            'Developed a robust financial web portal used by the MFG finance team to monitor all transactions — both app-based and non-app- based — across all sites, ensuring real-time visibility into daily sales, invoice generation, and service usage.',
            'Integrated Square Up payments with support for card, wallet, Apple Pay, Google Pay, and combined payments, reducing failures by 6% and enhancing checkout flexibility.',
            'Streamlined invoice generation by normalizing database tables and optimizing query structures, reducing generation time from 45s to 15s and handling 10,000+ invoices/week with 40% faster performance.',
            'Enabled admins to control app features via the web portal, such as sending push/in-app notifications (via FCM), enabling/disabling services, or scheduling tariff updates—creating a seamless app-to-admin interaction loop.',
            'Implemented scheduled cron jobs to cache daily sales reports into Redis at midnight, reducing server load and ensuring report availability by 8 AM.',
            'Improved mobile app performance using lazy loading, virtualization, React hooks, and memoization, resulting in 4% faster load times and a smoother UI experience.',
            'Strengthened backend and infrastructure stability by integrating Azure Application Insights, Log Analytics, and autoscaling alerts, enabling proactive monitoring and 99.9% uptime during peak usage.',
        ],
        technologies: [
            'JavaScript',
            'TypeScript',
            'React.js',
            'React Native',
            '.NET',
            'SQL Optimization',
            'Redis',
            'REST APIs',
            'Azure DevOps',
            'Azure App Services',
            'Application Insights',
            'Cron Jobs',
            'CI/CD',
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
