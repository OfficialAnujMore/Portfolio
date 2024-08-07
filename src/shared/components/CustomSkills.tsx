import React from 'react'
import styles from '../../styles/Skills.module.css'
import { CustomText } from './CustomText'
import { FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'

export const CustomSkills: React.FC<{
    title: string
    skills?: string
    maxWidth?: string
}> = ({ title, skills }): React.ReactElement => {
    return (
        <div className={styles.skillsContainer}>
            <CustomText
                title={`${title}: ${skills}`}
                fontSize={FONT_SIZE.small}
                fontWeight={FONT_WEIGHT.weight400}
            />
        </div>
    )
}
