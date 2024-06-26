import React from 'react'
import styles from '../styles/EducationAndCertification.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import enData from '../shared/local/en.json'
import { CustomInfoContainer } from 'shared/components/CustomInfoContainer'
import { edInfo } from '../utils/edInfo.js'

export const EducationAndCertification = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <CustomHeading
                    title={enData.education}
                    fontSize={'2rem'}
                    fontColor="#fff"
                    maintainCase={false}
                />
            </div>
            <div className={styles.contentDisplayContainer}>
                {edInfo.map((item, id) => {
                    return (
                        <CustomInfoContainer
                            key={id}
                            timespan={item.timespan}
                            title={item.title}
                            platform={item.platform}
                            description={item.description}
                            url={item.url}
                        />
                    )
                })}
            </div>
        </div>
    )
}
