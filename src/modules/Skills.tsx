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
                <CustomHeading
                    title={enData.skills}
                    fontSize={'2rem'}
                    fontColor="#fff"
                    maintainCase={false}
                />
                <CustomHeading
                    title={enData.toolsAndTechnologies}
                    fontSize={'1.2rem'}
                    fontColor="#fff"
                    fontWeight={'500'}
                    maintainCase={true}
                />
                <CustomSkills title={enData.pro} maxWidth={'10rem'} />
                <CustomSkills title={enData.mid} level={1} maxWidth={'10rem'} />
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
