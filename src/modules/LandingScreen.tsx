import React from 'react'
import landingStyles from '../styles/Landing.module.css'
import enData from '../shared/local/en.json'
import { CustomHeading } from 'shared/components/CustomHeading'

const LandingScreen = (): React.ReactElement => {
    return (
        <div className={landingStyles.mainContainer}>
            <CustomHeading text={enData.proflePrimaryTxt} />
        </div>
    )
}

export default LandingScreen
