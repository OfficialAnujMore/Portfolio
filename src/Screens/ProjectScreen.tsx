import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/projects.module.css'
import global from '../styles/global.module.css'
import { FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa'
import { content } from '../constants/en'
import CustomText from '../Components/CustomText'
import CustomButton from '../Components/CustomButton'
import CustomImagePreview from '../Components/CustomImagePreview'
import ProjectModal from '../Components/ProjectModal'

interface Project {
    id: string
    title: string
    shortDescription: string
    fullDescription: {
        projectOverview: string
        keyContribution: string[]
        impact: string[]
    }
    image: string
    media?: Array<{
        type: 'image' | 'video'
        url: string
        alt?: string
        caption?: string
    }>
    technologies: string[]
    githubUrl?: string
    projectUrl?: string
    category?: string | string[] // Support both single category and multiple categories
    date?: string
}

const projects: Project[] = [
    {
        id: 'regional-sales-analysis',
        title: 'Regional Sales Data Analysis',
        shortDescription:
            'Multi-year sales data analysis (2014-2018) uncovering insights on regional performance, customer behavior, and product profitability using Python and Power BI.',
        fullDescription: {
            projectOverview:
                'This project analyzes multi-year sales data (2014–2018) to uncover insights on regional performance, customer behavior, and product profitability. It leverages real-world business data and applies data wrangling, visualization, and analysis techniques using Python and Power BI. The dataset includes detailed information about sales orders, customers, products, regions, state regions, and 2017 budgets, enabling comprehensive business intelligence analysis.',
            keyContribution: [
                'Conducted comprehensive data analysis on multi-year sales data (2014-2018) using Python and Power BI.',
                'Performed data cleaning, merging, and exploratory data analysis (EDA) using pandas, matplotlib, and seaborn.',
                'Built interactive Power BI dashboard for business stakeholders to filter by region, product, or sales channel.',
                'Analyzed budget vs actual performance for 2017, identifying underperforming products and high-value customers.',
                'Applied data wrangling techniques to combine sales data with customer, product, and regional information.',
                'Created visualizations for sales trends, profit margins, channel performance, and customer segmentation.',
                'Integrated multiple data sources including sales orders, customer data, product information, regional metadata, and budget allocations.',
                'Developed interactive dashboard enabling quick decision-making with regional and product filters.',
            ],
            impact: [
                'Identified high-performing regions and products for strategic business decisions.',
                'Uncovered products underperforming relative to their 2017 budgets for resource optimization.',
                'Enabled quick decision-making through interactive Power BI dashboard with regional and product filters.',
                'Provided insights on export and wholesale channel profitability patterns for business strategy.',
                'Demonstrated the value of data-driven decision making in regional sales optimization.',
                'Created a scalable analysis framework that can be applied to future sales data.',
            ],
        },
        image: `https://placehold.co/900x600/222831/ff8a00.png?text=Regional+Sales+Analysis`,
        technologies: [
            'Python',
            'Power BI',
            'Pandas',
            'NumPy',
            'Matplotlib',
            'Seaborn',
            'Jupyter Notebook',
            'Google Colab',
            'Excel',
        ],
        githubUrl:
            'https://github.com/OfficialAnujMore/Regional-Sales-Data-Analysis',
        projectUrl:
            'https://colab.research.google.com/drive/1yVgetcQQthyWoQe3cRYRnK4q36Qohgk4',
        category: 'DATA ANALYSIS',
        date: 'July 2025',
    },
    {
        id: 'hirehour',
        title: 'HireHour – On-Demand Event Staffing Platform',
        shortDescription:
            'A real-time event staffing platform connecting users with nearby service providers for events.',
        fullDescription: {
            projectOverview:
                "HireHour is a real-time event staffing platform that connects users with nearby service providers who can work at their events. Whether it's a corporate gathering, wedding, or community event, HireHour ensures that users can quickly find and hire the right professionals.",
            keyContribution: [
                'Developed a cross-platform mobile app using React Native & TypeScript, ensuring smooth performance on both iOS & Android.',
                'Built a scalable backend with Node.js & PostgreSQL, optimizing database queries for faster response times.',
                'Integrated location-based search, allowing users to find nearby service providers instantly.',
                'Implemented real-time push notifications to keep users and service providers updated on job requests and confirmations.',
                'Deployed and managed the application on DigitalOcean, ensuring high availability and performance.',
                'Designed a secure authentication system with JWT, enhancing data privacy and user trust.',
            ],
            impact: [
                'Reduced service booking time by enabling instant connections between users and service providers.',
                'Increased job acceptance rate through automated notifications and an easy-to-use interface.',
                'Enhanced platform reliability with optimized backend infrastructure and cloud deployment.',
            ],
        },
        image: 'https://placehold.co/900x600/222831/ff8a00.png?text=HireHour',
        // media: [
        //     {
        //         type: 'image',
        //         url: 'https://placehold.co/900x600/222831/ff8a00.png?text=HireHour+App+Screenshot+1',
        //         alt: 'HireHour App Main Screen',
        //         caption: 'Main dashboard showing available service providers'
        //     },
        //     {
        //         type: 'image',
        //         url: 'https://placehold.co/900x600/222831/ff8a00.png?text=HireHour+App+Screenshot+2',
        //         alt: 'HireHour App Booking Flow',
        //         caption: 'Streamlined booking process for event services'
        //     },
        //     {
        //         type: 'video',
        //         url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        //         alt: 'HireHour App Demo Video',
        //         caption: 'Complete walkthrough of the HireHour platform'
        //     },
        //     {
        //         type: 'video',
        //         url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        //         alt: 'HireHour App Demo Video',
        //         caption: 'Complete walkthrough of the HireHour platform'
        //     }
        // ],
        technologies: [
            'React Native',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'Prisma ORM',
            'PostgreSQL',
            'DigitalOcean',
            'SendGrid',
            'Push notification',
            'Payment gateway integration',
        ],
        githubUrl: 'https://github.com/OfficialAnujMore/HireHour_FE',
        projectUrl: '',
        category: 'MOBILE APP',
        date: 'Dec 2024 - Present',
    },
    {
        id: 'housing-market-analysis',
        title: 'Housing Market Analysis Dashboard',
        shortDescription:
            'A web-based dashboard for real-time housing market analysis, providing insights into pricing, inventory, and demand patterns.',
        fullDescription: {
            projectOverview:
                'Developed a web-based dashboard for real-time housing market analysis. This platform provides clear insights into pricing, inventory, and demand patterns, empowering real estate professionals and investors to make data-driven decisions. Built using the Preswald open-source platform, it offers a seamless and responsive user experience.',
            keyContribution: [
                'Developed interactive data visualizations, enabling users to explore market trends effortlessly.',
                'Integrated real-time data APIs for accurate, up-to-date insights.',
                'Optimized frontend performance for smooth navigation and quick load times.',
                'Implemented responsive design for enhanced accessibility across devices.',
                'Focused on user-friendly interfaces to support data-driven strategies.',
            ],
            impact: [
                'Improved data analysis efficiency for real estate stakeholders.',
                'Enhanced decision-making through intuitive visual representations.',
                'Increased platform engagement with responsive design and real-time insights.',
            ],
        },
        image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Housing+Market+Analysis',
        technologies: [
            'Data Analysis',
            'Data Engineering',
            'Python',
            'Statistical Data Analysis',
        ],
        githubUrl:
            'https://github.com/OfficialAnujMore/housing-market-analysis',
        projectUrl:
            'https://housing-analysis-397455_anuj-more-assessment.preswald.app/',
        category: ['DATA ANALYSIS', 'WEB APP'],
        date: 'Apr 2025',
    },
    {
        id: 'roadside-assistance',
        title: 'Roadside Assistance App – Emergency Vehicle Support',
        shortDescription:
            'A cross-platform app for instant vehicle breakdown support, featuring real-time location tracking and cloud-based notifications.',
        fullDescription: {
            projectOverview:
                'The Roadside Assistance App is designed to provide instant support to users facing vehicle breakdowns by helping them find the nearest garage within a specified radius. The app ensures real-time location tracking and seamless communication with service providers, reducing wait times and improving roadside assistance efficiency.',
            keyContribution: [
                'Developed a cross-platform mobile app using Flutter, ensuring smooth performance on both Android & iOS.',
                'Implemented real-time location tracking via Google Maps API, enabling users to quickly locate nearby service providers.',
                'Integrated Firebase for push notifications to instantly alert users and service providers about requests and status updates.',
                'Built a scalable backend with Node.js, optimizing response times for fast service provider matching.',
                'Designed a user-friendly UI that simplifies navigation and enhances the user experience.',
            ],
            impact: [
                'Reduced assistance response time by efficiently connecting users with nearby garages.',
                'Enhanced user experience with real-time tracking and automated notifications.',
                'Improved reliability and performance by leveraging cloud-based infrastructure.',
            ],
        },
        image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Roadside+Side+Assistance',
        technologies: [
            'Flutter',
            'Firebase',
            'Google Maps API',
            'Node.js',
            'MYSQL',
        ],
        githubUrl: '',
        projectUrl: '',
        category: 'MOBILE APP',
        date: 'Aug 2020 - Dec 2020',
    },
    {
        id: 'bengaluru-property-prediction',
        title: 'Property Price Prediction',
        shortDescription:
            'A machine learning model to predict property prices in Bengaluru based on historical data and features.',
        fullDescription: {
            projectOverview:
                'Developed a machine learning model using Scikit-Learn to predict property prices for homes located in Bengaluru, based on various conditions and features. This project involves analyzing historical real estate data to forecast prices with high accuracy. It highlights my expertise in data science, feature engineering, and model development, demonstrating my ability to apply machine learning techniques to real-world problems.',
            keyContribution: [
                'Developed a machine learning model using Scikit-Learn for property price prediction.',
                'Analyzed historical real estate data to identify key features and patterns.',
                'Implemented feature engineering techniques to improve model accuracy.',
                'Applied machine learning techniques to solve real-world real estate problems.',
            ],
            impact: [
                'Demonstrated expertise in data science and machine learning.',
                'Applied ML techniques to real-world real estate problems.',
                'Showcased ability to work with complex datasets and feature engineering.',
            ],
        },
        image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Property+Price+Prediction+Model',
        technologies: ['Machine Learning', 'Software developer'],
        githubUrl: '',
        projectUrl: '',
        category: 'MACHINE LEARNING',
        date: 'May 2020 - Jun 2020',
    },
    {
        id: 'campus-link',
        title: 'Campus Link - Bridging the Gap Between Parents & Institutions',
        shortDescription:
            'A mobile app for seamless communication between parents and educational institutions, with real-time data and notifications.',
        fullDescription: {
            projectOverview:
                "Developed for the IT department of KJ Somaiya Institute of Engineering and Information Technology, this mobile application serves as a centralized platform for seamless communication between parents and the college. The app provides a user-friendly interface to track students' academic progress, attendance records, and upcoming events, fostering better parental engagement.",
            keyContribution: [
                'Designed and developed a cross-platform app using Flutter, ensuring smooth performance on Android & iOS.',
                'Implemented real-time data synchronization with Firebase, allowing parents to access updated student records.',
                'Developed a secure backend with Node.js and PostgreSQL to manage student data efficiently.',
                'Integrated push notifications to keep parents informed about attendance, exam schedules, and important announcements.',
                'Designed a responsive and intuitive UI to enhance accessibility and ease of use.',
            ],
            impact: [
                'Enhanced parental engagement by providing instant access to academic records.',
                'Improved transparency between the institution and parents, strengthening communication.',
                'Streamlined event notifications to ensure parents never miss crucial college updates.',
            ],
        },
        image: 'https://placehold.co/900x600/222831/ff8a00.png?text=Campus+Link',
        technologies: [
            'Flutter',
            'Firebase',
            'Node.js',
            'PostgreSQL',
            'Android Development',
            'Android Studio',
            'Android SDK',
            'MySQL',
            'PHP',
        ],
        githubUrl: '',
        projectUrl: '',
        category: 'MOBILE APP',
        date: 'Jan 2020 - Feb 2020',
    },
]

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
    project,
    onClick,
}) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={cardRef}
            className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onClick()
                }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
            style={{ cursor: 'pointer' }}
        >
            <div className={styles.imageContainer}>
                <CustomImagePreview
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                />
            </div>
            <div className={styles.content}>
                <CustomText variant="span" className={styles.category}>
                    {Array.isArray(project.category)
                        ? project.category.join(' • ')
                        : project.category}
                </CustomText>
                <CustomText variant="h3" className={styles.title}>
                    {project.title}
                </CustomText>
                <CustomText variant="p" className={styles.description}>
                    {project.shortDescription}
                </CustomText>
                <div className={styles.meta}>
                    <div className={styles.metaLeft}>
                        <CustomText variant="span" className={styles.date}>
                            {project.date}
                        </CustomText>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                className={styles.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <FaGithub />
                            </a>
                        )}
                    </div>
                    {project.projectUrl && (
                        <CustomButton
                            as="a"
                            href={project.projectUrl}
                            className={styles.readMore}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {content.projects.viewProject} <FaArrowRight />
                        </CustomButton>
                    )}
                </div>
            </div>
        </div>
    )
}

const ProjectScreen: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const distinctCategories = projects
        .map((project) => {
            if (Array.isArray(project.category)) {
                return project.category[0]
            }
            return project.category
        })
        .filter((category): category is string => Boolean(category))
        .filter((category, index, arr) => arr.indexOf(category) === index)

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <section className={styles.projectsContainer}>
            <div className={global.content}>
                <CustomText variant="h2" className={global.sectionTitle}>
                    {content.projects.title}
                </CustomText>
                <CustomText variant="p" className={global.sectionSubtitle}>
                    {content.projects.subtitle}
                </CustomText>

                {/* Category Filter */}
                <div className={styles.categoryFilter}>
                    <CustomButton
                        onClick={() => setSelectedCategory('All')}
                        className={`${styles.filterButton} ${selectedCategory === 'All' ? styles.activeFilter : ''}`}
                    >
                        All
                    </CustomButton>
                    {distinctCategories.map((category) => (
                        <CustomButton
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`${styles.filterButton} ${selectedCategory === category ? styles.activeFilter : ''}`}
                        >
                            {category === 'MOBILE APP'
                                ? 'Mobile App'
                                : category === 'DATA ANALYSIS'
                                  ? 'Data Analysis'
                                  : category === 'MACHINE LEARNING'
                                    ? 'Machine Learning'
                                    : category}
                        </CustomButton>
                    ))}
                </div>

                <div className={styles.projectsGrid}>
                    {projects
                        .filter((project) => {
                            if (selectedCategory === 'All') return true
                            if (Array.isArray(project.category)) {
                                return project.category.includes(
                                    selectedCategory
                                )
                            }

                            return project.category === selectedCategory
                        })
                        .map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}

export default ProjectScreen
