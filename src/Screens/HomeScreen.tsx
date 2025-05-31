import React from 'react'
import styles from '../styles/home.module.css'
import profileImage from '../assets/profile.jpg'
import { content } from '../constants/en'
import CustomText from '../components/CustomText'
import CustomImagePreview from '../components/CustomImagePreview'

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
                                    alt={content.home.name}
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
                        {content.home.intro.split('<wavingHand/>')[0]}
                        <span className={styles.wavingHand}>{content.home.wavingHand}</span>
                        {content.home.intro.split('<wavingHand/>')[1]}
                    </CustomText>
                    <CustomText variant="h1" className={styles.name}>{content.home.name}</CustomText>
                    <CustomText variant="p" className={styles.description}>{content.home.description}</CustomText>
                </div>
            </div>
        </section>
    )
}

export default HomeScreen
