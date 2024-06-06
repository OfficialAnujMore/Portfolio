import React from 'react'
import styles from '../styles/AboutMe.module.css'
import profileImg from '../assets/images/profileImg.png'
import emailIcon from '../assets/images/email.png'
import mobileIcon from '../assets/images/mobile.png'
import enData from '../shared/local/en.json'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomDescription } from 'shared/components/CustomDescription'

const AboutMe = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img src={profileImg} alt={enData.profileName} />
            </div>
            <div className={styles.descriptionContainer}>
                <CustomHeading
                    title={enData.aboutMe}
                    fontSize={'2rem'}
                    fontColor="#fff"
                />
                <CustomDescription description={enData.description} />
                <CustomDescription
                    description={enData.phoneNumber}
                    imgSrc={mobileIcon}
                    fontSize="1rem"
                    padding="1rem"
                />
                <CustomDescription
                    description={enData.emailAddress}
                    imgSrc={emailIcon}
                    fontSize="1rem"
                    padding="1rem"
                />
            </div>
        </div>
    )
}

export default AboutMe
