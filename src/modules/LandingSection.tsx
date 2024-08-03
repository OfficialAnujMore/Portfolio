import React from 'react'
import resume from '../assets/Resume - Anuj More.pdf'
import WORD_DIR from '../shared/local/en.js'
import { CustomButton } from 'shared/components/CustomButton'
import { CustomDivider } from 'shared/components/CustomDivider'
import { CustomHeading } from 'shared/components/CustomHeading'
import MemoizedCustomParticleContainer from 'shared/components/CustomParticleContainer'
import { FONT_SIZE, NAVIGATION_PATH } from 'shared/utils/constant'
import NavigatorSection from './NavigatorSection'
import styles from '../styles/Landing.module.css'
import CustomAnimatedHeading from 'shared/components/CustomAnimatedHeading'

const LandingSection = (): React.ReactElement => {
    return (
        <div className={styles.landingMainContainer} id={NAVIGATION_PATH.home}>
            <CustomHeading
                title={WORD_DIR.proflePrimaryTxt}
                fontSize={FONT_SIZE.xLarge}
                maintainCase={true}
            />
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={WORD_DIR.profileName}
                fontSize={FONT_SIZE.xxLarge}
                maintainCase={true}
            />
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={WORD_DIR.profileTitle}
                fontSize={FONT_SIZE.xxLarge}
                maintainCase={true}
            />
            {/* <CustomAnimatedHeading
                title={WORD_DIR.profileTitle}
                delay={100}
                infinite={true}
                fontSize={FONT_SIZE.xxLarge}
                maintainCase={true}
            /> */}
            <CustomDivider customWdith="20%" />
            <CustomHeading
                title={WORD_DIR.profileDescription}
                fontSize={FONT_SIZE.xLarge}
                maintainCase={true}
            />
            <CustomButton
                text={WORD_DIR.resume}
                enableBorder={true}
                actionItem={resume}
            />
            <NavigatorSection />
            <MemoizedCustomParticleContainer />
        </div>
    )
}

export default LandingSection
