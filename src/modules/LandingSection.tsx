import React from 'react'
import styles from '../styles/Landing.module.css'
import WORD_DIR from '../shared/local/en.js'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomDivider } from 'shared/components/CustomDivider'
import { CustomButton } from 'shared/components/CustomButton'
import NavigatorSection from './NavigatorSection'
import { FONT_SIZE } from 'shared/utils/constant'
import CustomParticleContainer from 'shared/components/CustomParticleContainer'

const LandingSection = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <CustomHeading
                title={WORD_DIR.proflePrimaryTxt}
                fontSize={FONT_SIZE.xLarge}
            />
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={WORD_DIR.profileName}
                fontSize={FONT_SIZE.xxLarge}
            />
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={WORD_DIR.profileTitle}
                fontSize={FONT_SIZE.xxxLarge}
            />
            <CustomHeading
                title={WORD_DIR.profileDescription}
                fontSize={FONT_SIZE.xLarge}
            />
            <CustomButton text={WORD_DIR.resume} enableBorder={true} />
            <NavigatorSection />
            <CustomParticleContainer />
        </div>
    )
}

export default LandingSection
