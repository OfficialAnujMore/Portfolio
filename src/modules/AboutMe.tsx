import React from 'react'
import styles from '../styles/AboutMe.module.css'
import profileImg from '../assets/images/profileImg.png'
import emailIcon from '../assets/images/email.png'
import mobileIcon from '../assets/images/mobile.png'
import enData from '../shared/local/en.json'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomText } from 'shared/components/CustomText'

const AboutMe = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img src={profileImg} alt={enData.profileName} />
            </div>
            <div className={styles.descriptionContainer}>
                <CustomHeading title={enData.aboutMe} />
                <CustomText
                    title={enData.descriptionOne}
                    fontSize="1.2rem"
                    fontColor="#fff"
                    fontWeight="500"
                />
                <CustomText
                    title={enData.descriptionTwo}
                    fontSize="1.2rem"
                    fontColor="#fff"
                    fontWeight="500"
                />
                <CustomText
                    title={enData.descriptionThree}
                    fontSize="1.2rem"
                    fontColor="#fff"
                    fontWeight="500"
                />
                <CustomText
                    title={enData.phoneNumber}
                    imgSrc={mobileIcon}
                    fontSize="1rem"
                    maintainCase={false}
                    fontColor="#fff"
                />
                <CustomText
                    title={enData.emailAddress}
                    imgSrc={emailIcon}
                    fontSize="1rem"
                    fontColor="#fff"
                />
            </div>
        </div>
    )
}

export default AboutMe
