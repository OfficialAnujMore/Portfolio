import React, { useEffect, useRef, useState } from 'react'
import { FaTimes, FaGithub, FaGlobe, FaCalendar, FaCode } from 'react-icons/fa'
import CustomText from './CustomText'
import CustomButton from './CustomButton'
import CustomImagePreview from './CustomImagePreview'
import styles from '../styles/projectModal.module.css'

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

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus()
        }
    }, [isOpen])

    // Reset media index when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentMediaIndex(0)
        }
    }, [isOpen])

    const nextMedia = () => {
        if (project?.media && currentMediaIndex < project.media.length - 1) {
            setCurrentMediaIndex(currentMediaIndex + 1)
        }
    }

    const prevMedia = () => {
        if (currentMediaIndex > 0) {
            setCurrentMediaIndex(currentMediaIndex - 1)
        }
    }

    const hasMultipleMedia = project?.media && project.media.length > 1

    if (!isOpen || !project) return null

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div 
                className={styles.modalContent} 
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-title"
                aria-describedby="project-description"
            >
                <button 
                    className={styles.closeButton} 
                    onClick={onClose}
                    aria-label="Close project details"
                >
                    <FaTimes />
                </button>
                
                <div className={styles.modalHeader}>
                    <CustomText variant="span" className={styles.category}>
                        {Array.isArray(project.category) 
                            ? project.category.join(' • ') 
                            : project.category}
                    </CustomText>
                    <CustomText variant="h2" className={styles.title} id="project-title">
                        {project.title}
                    </CustomText>
                    <div className={styles.metaInfo}>
                        <div className={styles.dateInfo}>
                            <FaCalendar className={styles.metaIcon} />
                            <CustomText variant="span" className={styles.date}>
                                {project.date}
                            </CustomText>
                        </div>
                        <div className={styles.links}>
                            {project.githubUrl && (
                                <CustomButton
                                    as="a"
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkButton}
                                >
                                    <FaGithub />
                                    <span>View Code</span>
                                </CustomButton>
                            )}
                            {project.projectUrl && (
                                <CustomButton
                                    as="a"
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkButton}
                                >
                                    <FaGlobe />
                                    <span>Live Demo</span>
                                </CustomButton>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.modalBody}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageContainer}>
                            {project.media && project.media.length > 0 ? (
                                <>
                                    {project.media[currentMediaIndex].type === 'video' ? (
                                        <video
                                            src={project.media[currentMediaIndex].url}
                                            controls
                                            className={styles.projectImage}
                                            poster={project.image}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <CustomImagePreview
                                            src={project.media[currentMediaIndex].url}
                                            alt={project.media[currentMediaIndex].alt || project.title}
                                            className={styles.projectImage}
                                        />
                                    )}
                                    
                                    {hasMultipleMedia && (
                                        <>
                                            <button
                                                className={`${styles.navButton} ${styles.prevButton}`}
                                                onClick={prevMedia}
                                                disabled={currentMediaIndex === 0}
                                                aria-label="Previous media"
                                            >
                                                ‹
                                            </button>
                                            <button
                                                className={`${styles.navButton} ${styles.nextButton}`}
                                                onClick={nextMedia}
                                                disabled={currentMediaIndex === project.media.length - 1}
                                                aria-label="Next media"
                                            >
                                                ›
                                            </button>
                                            
                                            <div className={styles.mediaIndicators}>
                                                {project.media.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`${styles.indicator} ${index === currentMediaIndex ? styles.activeIndicator : ''}`}
                                                        onClick={() => setCurrentMediaIndex(index)}
                                                        aria-label={`Go to media ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                    
                                    {project.media[currentMediaIndex].caption && (
                                        <div className={styles.mediaCaption}>
                                            <CustomText variant="p" className={styles.captionText}>
                                                {project.media[currentMediaIndex].caption}
                                            </CustomText>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <CustomImagePreview
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                            )}
                        </div>
                    </div>
                    
                    <div className={styles.contentSection}>
                        <div className={styles.descriptionSection}>
                            <CustomText variant="h3" className={styles.sectionTitle}>
                                Project Overview
                            </CustomText>
                            <div className={styles.description} id="project-description">
                                <p className={styles.descriptionParagraph}>
                                    {project.fullDescription.projectOverview}
                                </p>
                            </div>
                        </div>

                        <div className={styles.keyContributionsSection}>
                            <CustomText variant="h3" className={styles.sectionTitle}>
                                Key Contributions
                            </CustomText>
                            <div className={styles.scrollableContent}>
                                <ul className={styles.contributionList}>
                                    {project.fullDescription.keyContribution.map((contribution, index) => (
                                        <li key={index} className={styles.bulletPoint}>
                                            {contribution}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.impactSection}>
                            <CustomText variant="h3" className={styles.sectionTitle}>
                                Impact
                            </CustomText>
                            <div className={styles.scrollableContent}>
                                <ul className={styles.impactList}>
                                    {project.fullDescription.impact.map((impact, index) => (
                                        <li key={index} className={styles.bulletPoint}>
                                            {impact}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.technologiesSection}>
                            <CustomText variant="h3" className={styles.sectionTitle}>
                                <FaCode className={styles.sectionIcon} />
                                Technologies Used
                            </CustomText>
                            <div className={styles.technologiesGrid}>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
