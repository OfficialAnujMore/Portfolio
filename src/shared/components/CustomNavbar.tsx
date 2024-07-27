import React from 'react'
import styles from '../../styles/Navbar.module.css'
import logo from '../../assets/images/my-logo.png'
import WORD_DIR from '../../shared/local/en.js'
import { NAVBAR } from 'shared/utils/navbar'
import { CustomNavElements } from './CustomNavElements'

const CustomNavbar = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img alt={WORD_DIR.profileName} src={logo} />
            </div>
            <div className={styles.sectionContainer}>
                {NAVBAR.map((item, key) => {
                    return <CustomNavElements key={key} title={item.title} />
                })}
            </div>
        </div>
    )
}

export default CustomNavbar
