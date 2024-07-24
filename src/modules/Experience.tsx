import React from 'react'
import style from '../styles/Experience.module.css'
import CustomTimeline from 'shared/components/CustomTimeline'
import { CustomHeading } from 'shared/components/CustomHeading'
import enData from '../shared/local/en.json'
const Experience = (): React.ReactElement => {
    return (
        <div className={style.mainContainer}>
            <CustomHeading title={enData.experience} fontWeight="bold" />
            <CustomTimeline />
        </div>
    )
}

export default Experience
