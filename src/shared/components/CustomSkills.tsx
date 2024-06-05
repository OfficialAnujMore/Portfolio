import React from 'react'
import styles from '../../styles/Skills.module.css'
import enData from '../local/en.json'
import { CustomHeading } from './CustomHeading'

export const CustomSkills: React.FC<{
    title: string
    level?: number
    skills?: string
    maxWidth?: number
}> = ({ title, level, skills, maxWidth }): React.ReactElement => {
    return (
        <div className={styles.skillsContainer} style={{ width: maxWidth }}>
            <div className={styles.skillLevel} />
            <div className={styles.skillLevel} />
            <CustomHeading
                title={enData.pro}
                fontSize="1rem"
                fontColor="#fff"
            />
        </div>
    )
}
