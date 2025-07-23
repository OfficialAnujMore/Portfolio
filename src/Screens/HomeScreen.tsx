import React from 'react'
import styles from '../styles/home.module.css'
import profileImage from '../assets/profile.jpg'
import { content } from '../constants/en'
import CustomText from '../Components/CustomText'
import CustomImagePreview from '../Components/CustomImagePreview'
import CustomButton from '../Components/CustomButton'
import resumePDF from '../assets/Anuj_More_Resume.pdf'

const HomeScreen: React.FC = () => {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.content}>
                <div className={styles.imageSection}>
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <CustomImagePreview
                                    src={profileImage}
                                    alt={content.greeting.name}
                                    className={styles.profileImage}
                                />
                            </div>
                            <div className={styles.flipCardBack}>
                                <CustomText variant="span" className={styles.initials}>{content.home.initials}</CustomText>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.textSection}>
                    <CustomText variant="span" className={styles.introText}>
                        {content.greeting.intro.split('<wavingHand/>')[0]}
                        <span className={styles.wavingHand}>{content.greeting.wavingHand}</span>
                        {content.greeting.intro.split('<wavingHand/>')[1]}
                    </CustomText>
                    <CustomText variant="h1" className={styles.name}>{content.greeting.name}</CustomText>
                    <CustomText variant="p" className={styles.description}>{content.home.description}</CustomText>
                    <CustomButton as="a" href={resumePDF} target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
                      {content.home.resumeButton}
                    </CustomButton>
                </div>
            </div>
        </section>
    )
}

export default HomeScreen
