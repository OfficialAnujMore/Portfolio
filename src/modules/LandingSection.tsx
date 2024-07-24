import React from 'react'
import styles from '../styles/Landing.module.css'
import enData from '../shared/local/en.json'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomDivider } from 'shared/components/CustomDivider'
import { CustomButton } from 'shared/components/CustomButton'
import NavigatorSection from './NavigatorSection'
import globalFontSize from '../shared/constants/globalFontSize.js'
// import CustomParticleContainer from 'shared/components/CustomParticleContainer'

const LandingSection = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <CustomHeading
                title={enData.proflePrimaryTxt}
                fontSize={globalFontSize.xLarge}
            />
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={enData.profileName}
                fontSize={globalFontSize.xxLarge}
            />
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={enData.profileTitle}
                fontSize={globalFontSize.xxxLarge}
            />
            <CustomHeading
                title={enData.profileDescription}
                fontSize={globalFontSize.xLarge}
            />
            <CustomButton text={enData.resume} />
            <NavigatorSection />
            {/* <CustomParticleContainer /> */}
        </div>
    )
}

export default LandingSection
