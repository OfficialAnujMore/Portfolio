import React from 'react'
import styles from '../styles/Education.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import WORD_DIR from '../shared/local/en.js'
import { CustomInfoContainer } from 'shared/components/CustomInfoContainer'
import { EDUCATION } from '../shared/utils/education'

export const Education = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <CustomHeading
                    title={WORD_DIR.education}
                    maintainCase={false}
                />
            </div>
            <div className={styles.contentDisplayContainer}>
                {EDUCATION.map((item, id) => {
                    return (
                        <CustomInfoContainer
                            key={id}
                            timespan={item.timespan}
                            title={item.title}
                            platform={item.platform}
                            url={item.url}
                        />
                    )
                })}
            </div>
        </div>
    )
}
