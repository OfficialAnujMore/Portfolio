import React from 'react'
import style from '../styles/Education.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import WORD_DIR from '../shared/local/en.js'
import { CustomInfoContainer } from 'shared/components/CustomInfoContainer'
import { CERTIFICATIONS } from '../shared/utils/certifications'
import { NAVIGATION_PATH } from 'shared/utils/constant'

export const Certifications = (): React.ReactElement => {
    return (
        <div
            className={`${style.educationMainContainer}`}
            id={NAVIGATION_PATH.certification}
        >
            <div className={style.headingContainer}>
                <CustomHeading title={WORD_DIR.certification} />
            </div>
            <div className={style.contentDisplayContainer}>
                {CERTIFICATIONS.map((item, id) => {
                    return (
                        <CustomInfoContainer
                            key={id}
                            timespan={item.timespan}
                            title={item.title}
                            platform={item.platform}
                            url={item.url}
                            imagePath={item.imagePath}
                        />
                    )
                })}
            </div>
        </div>
    )
}
