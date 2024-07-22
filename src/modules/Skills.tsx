import React from 'react'
import styles from '../styles/Skills.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomSkills } from 'shared/components/CustomSkills'
import enData from '../shared/local/en.json'
import { skillsInfo } from 'utils/skillsInfo'
export const Skills = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <CustomHeading title={enData.skills} maintainCase={false} />
                <CustomSkills title={enData.pro} />
                <CustomSkills title={enData.mid} level={1} />
            </div>
            <div className={styles.skillInfoContainer}>
                {skillsInfo.map((item, index) => (
                    <CustomSkills
                        key={index}
                        title={item.title}
                        level={item.level}
                        skills={item.skills}
                    />
                ))}
            </div>
        </div>
    )
}
