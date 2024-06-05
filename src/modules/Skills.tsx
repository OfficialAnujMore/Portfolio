import React from 'react'
import styles from '../styles/Skills.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomSkills } from 'shared/components/CustomSkills'
import enData from '../shared/local/en.json'
export const Skills = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <CustomHeading
                    title={enData.skills}
                    fontSize={'2rem'}
                    fontColor="#fff"
                />
                <CustomHeading
                    title={enData.toolsAndTechnologies}
                    fontSize={'1.5rem'}
                    fontColor="#fff"
                    fontWeight={'500'}
                />
                <CustomSkills title={enData.pro} />
            </div>
        </div>
    )
}
