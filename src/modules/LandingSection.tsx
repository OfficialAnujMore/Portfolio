import React from 'react'
import styles from '../styles/Landing.module.css'
import enData from '../shared/local/en.json'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomDivider } from 'shared/components/CustomDivider'
import { CustomButton } from 'shared/components/CustomButton'
import NavigatorSection from './NavigatorSection'
// import CustomParticleContainer from 'shared/components/CustomParticleContainer'

const LandingSection = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <CustomHeading title={enData.proflePrimaryTxt} fontSize={'2rem'} />
            <CustomDivider customWdith="20%" />
            <CustomHeading title={enData.profileName} fontSize={'2.5rem'} />
            <CustomDivider customWdith="20%" />
            <CustomHeading title={enData.profileTitle} fontSize={'3rem'} />
            <CustomHeading
                title={enData.profileDescription}
                fontSize={'1.5rem'}
            />
            <CustomButton text={enData.resume} />
            <NavigatorSection />
            {/* <CustomParticleContainer /> */}
        </div>
    )
}

export default LandingSection
