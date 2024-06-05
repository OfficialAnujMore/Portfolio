import React from 'react'
import styles from '../../styles/Navbar.module.css'
import logo from '../../assets/images/my-logo.png'
import enData from '../local/en.json'

const CustomNavbar = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img alt={enData.profileName} src={logo} />
            </div>
            <div className={styles.sectionContainer}>
                <div className={styles.primaryTextStyle}>{enData.aboutMe}</div>
                <div className={styles.primaryTextStyle}>{enData.skills}</div>
                <div className={styles.primaryTextStyle}>
                    {enData.experience}
                </div>
                <div className={styles.primaryTextStyle}>
                    {enData.education}
                </div>
                <div className={styles.primaryTextStyle}>{enData.contact}</div>
            </div>
        </div>
    )
}

export default CustomNavbar
