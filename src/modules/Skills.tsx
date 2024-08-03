import React from 'react'
import styles from '../styles/Skills.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomSkills } from 'shared/components/CustomSkills'
import WORD_DIR from '../shared/local/en.js'
import { SKILLS } from 'shared/utils/skillsInfo'
SKILLS
export const Skills = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <CustomHeading title={WORD_DIR.skills} maintainCase={false} />
            </div>
            <div className={styles.skillInfoContainer}>
                {SKILLS.map((item, index) => (
                    <CustomSkills
                        key={index}
                        title={item.title}
                        skills={item.skills}
                    />
                ))}
            </div>
        </div>
    )
}
