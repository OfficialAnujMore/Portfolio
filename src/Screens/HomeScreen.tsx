import React from 'react'
import styles from '../styles/home.module.css'
import profileImage from '../assets/profile.jpg'

const HomeScreen: React.FC = () => {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.content}>
                <div className={styles.imageSection}>
                    <img
                        src={profileImage}
                        alt="Anuj More"
                        className={styles.profileImage}
                    />
                </div>
                <div className={styles.textSection}>
                    <div className={styles.introText}>
                        Hi <span className={styles.wavingHand}>👋</span>, I am
                    </div>
                    <h1 className={styles.name}>Anuj More</h1>
                    <p className={styles.description}>
                        A curious computer engineer passionate about solving
                        real-world problems using technology.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomeScreen
