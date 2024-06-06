import React from 'react'
import styles from '../../styles/Skills.module.css'
import { CustomHeading } from './CustomHeading'
import { CustomDescription } from './CustomDescription'

export const CustomSkills: React.FC<{
    title: string
    level?: number
    skills?: string
    maxWidth?: string
}> = ({ title, level, skills, maxWidth }): React.ReactElement => {
    return (
        <div className={styles.skillsContainer}>
            <div
                className={styles.primarySkillDetails}
                style={{ width: maxWidth ? maxWidth : '25rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div
                        className={styles.skillLevel}
                        style={{ marginRight: '0.3rem' }}
                    />
                    <div
                        className={styles.skillLevel}
                        style={{
                            marginRight: '0.3rem',
                            opacity: level == 1 ? '0.5' : '1',
                        }}
                    />
                </div>
                <CustomHeading
                    title={title}
                    fontSize="1rem"
                    fontColor="#fff"
                    maintainCase={true}
                />
            </div>
            <div className={styles.secondarySkillDetails}>
                <CustomDescription description={skills} fontSize="1rem" />
            </div>
        </div>
    )
}
