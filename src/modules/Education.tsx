import React from 'react'
import style from '../styles/Education.module.css'
import globalStyle from '../styles/Global.module.css'
import { CustomHeading } from 'shared/components/CustomHeading'
import WORD_DIR from '../shared/local/en.js'
import { CustomInfoContainer } from 'shared/components/CustomInfoContainer'
import { EDUCATION } from '../shared/utils/education'
import { NAVIGATION_PATH } from 'shared/utils/constant'

export const Education = (): React.ReactElement => {
    return (
        <div
            className={`${style.educationMainContainer}`}
            id={NAVIGATION_PATH.education}
        >
            <div className={style.headingContainer}>
                <CustomHeading title={WORD_DIR.education} />
            </div>
            <div className={style.contentDisplayContainer}>
                {EDUCATION.map((item, id) => {
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
