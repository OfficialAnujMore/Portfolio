import React from 'react'
import style from '../styles/Experience.module.css'
import CustomTimeline from 'shared/components/CustomTimeline'
import { CustomHeading } from 'shared/components/CustomHeading'
import WORD_DIR from '../shared/local/en.js'
import { NAVIGATION_PATH } from 'shared/utils/constant'
const Experience = (): React.ReactElement => {
    return (
        <div className={style.mainContainer} id={NAVIGATION_PATH.experience}>
            <CustomHeading title={WORD_DIR.experience} />
            <CustomTimeline />
        </div>
    )
}

export default Experience
