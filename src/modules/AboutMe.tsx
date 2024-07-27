import React from 'react'
import styles from '../styles/AboutMe.module.css'
import profileImg from '../assets/images/profileImg.png'
import WORD_DIR from '../shared/local/en.js'
import { CustomHeading } from 'shared/components/CustomHeading'
import { CustomText } from 'shared/components/CustomText'
import { COLOR_THEME, FONT_SIZE, SOCIAL_URL } from 'shared/utils/constant'
import { CustomButton } from 'shared/components/CustomButton'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa'

const AboutMe = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img src={profileImg} alt={WORD_DIR.profileName} />
            </div>
            <div className={styles.descriptionContainer}>
                <CustomHeading title={WORD_DIR.aboutMe} />
                <CustomText
                    title={WORD_DIR.descriptionOne}
                    fontSize={FONT_SIZE.large}
                    fontWeight="500"
                />
                <CustomText
                    title={WORD_DIR.descriptionTwo}
                    fontSize={FONT_SIZE.large}
                    fontWeight="500"
                />
                <CustomText
                    title={WORD_DIR.descriptionThree}
                    fontSize={FONT_SIZE.large}
                    fontWeight="500"
                />
                <div className={styles.contactInfoContainer}>
                    <CustomButton
                        customComponent={
                            <FaPhone
                                size={FONT_SIZE.large}
                                title={WORD_DIR.email}
                                color={COLOR_THEME.white}
                            />
                        }
                        actionItem={SOCIAL_URL.tel}
                    />
                    <CustomText
                        title={WORD_DIR.phoneNumber}
                        fontSize={FONT_SIZE.medium}
                        maintainCase={false}
                    />
                </div>
                <div className={styles.contactInfoContainer}>
                    <CustomButton
                        customComponent={
                            <AiTwotoneMail
                                size={FONT_SIZE.large}
                                title={WORD_DIR.email}
                                color={COLOR_THEME.white}
                            />
                        }
                        actionItem={SOCIAL_URL.email}
                    />
                    <CustomText
                        title={WORD_DIR.emailAddress}
                        fontSize={FONT_SIZE.medium}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
