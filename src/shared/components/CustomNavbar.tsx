import React from 'react'
import styles from '../../styles/Navbar.module.css'
import logo from '../../assets/images/my-logo.png'
import enData from '../local/en.json'
import { navInfo } from 'utils/navInfo'
import { CustomNavElements } from './CustomNavElements'

const CustomNavbar = (): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img alt={enData.profileName} src={logo} />
            </div>
            <div className={styles.sectionContainer}>
                {navInfo.map((item, key) => {
                    return <CustomNavElements key={key} title={item.title} />
                })}
            </div>
        </div>
    )
}

export default CustomNavbar
