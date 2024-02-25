import React from 'react'
import landingStyles from '../styles/Landing.module.css'
import enData from '../shared/local/en.json'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomDivider } from 'shared/components/CustomDivider'
import { CustomButton } from 'shared/components/CustomButton'
import NavigatorSection from './NavigatorSection'

const LandingSection = (): React.ReactElement => {
    return (
        <div className={landingStyles.mainContainer}>
            <CustomHeading text={enData.proflePrimaryTxt} />
            <CustomDivider customWdith="20%" />
            <CustomHeading text={enData.profileName} fontSize={'3rem'} />
            <CustomDivider customWdith="20%" />
            <CustomHeading text={enData.profileTitle} fontSize={'3.5rem'} />
            <CustomButton text={enData.resume} />
            <NavigatorSection />
        </div>
    )
}

export default LandingSection
