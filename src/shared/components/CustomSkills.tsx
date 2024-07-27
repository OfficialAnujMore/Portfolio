import React from 'react'
import styles from '../../styles/Skills.module.css'
import { CustomText } from './CustomText'
import { FONT_SIZE } from 'shared/utils/constant'

export const CustomSkills: React.FC<{
    title: string
    level?: number
    skills?: string
    maxWidth?: string
}> = ({ title, level, skills, maxWidth }): React.ReactElement => {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.primarySkillDetails}>
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
                <CustomText
                    title={title}
                    fontSize={FONT_SIZE.medium}
                   
                    maintainCase={true}
                />
            </div>
            {skills ? (
                <div className={styles.secondarySkillDetails}>
                    <CustomText
                        title={skills}
                        fontSize={FONT_SIZE.medium}
                       
                    />
                </div>
            ) : null}
        </div>
    )
}
