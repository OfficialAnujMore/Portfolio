import React from 'react'
import styles from '../styles/Landing.module.css'
import WORD_DIR from '../shared/local/en.js'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomDivider } from 'shared/components/CustomDivider'
import { CustomButton } from 'shared/components/CustomButton'
import NavigatorSection from './NavigatorSection'
import { FONT_SIZE, NAVIGATION_PATH } from 'shared/utils/constant'
import resume from '../assets/Resume - Anuj More.pdf'
import MemoizedCustomParticleContainer from 'shared/components/CustomParticleContainer'

const LandingSection = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer} id={NAVIGATION_PATH.home}>
            <CustomHeading
                title={WORD_DIR.proflePrimaryTxt}
                fontSize={FONT_SIZE.xLarge}
            />
            <CustomDivider customWdith="50%" />
            <CustomHeading
                title={WORD_DIR.profileName}
                fontSize={FONT_SIZE.xxLarge}
            />
            <CustomDivider customWdith="50%" />
            <CustomHeading
                title={WORD_DIR.profileTitle}
                fontSize={FONT_SIZE.xxLarge}
            />
            <CustomDivider customWdith="50%" />
            <CustomHeading
                title={WORD_DIR.profileDescription}
                fontSize={FONT_SIZE.xLarge}
            />
            <CustomButton
                text={WORD_DIR.resume}
                enableBorder={true}
                actionItem={resume}
                // eventListner={() => {
                //     console.log('Clicked')
                // }}
            />
            <NavigatorSection />
            <MemoizedCustomParticleContainer />
        </div>
    )
}

export default LandingSection
