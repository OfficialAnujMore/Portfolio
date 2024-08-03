import React, { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import logo from '../../assets/images/my-logo.png'
import WORD_DIR from '../../shared/local/en.js'
import { NAVBAR } from 'shared/utils/navbar'
import { CustomNavElements } from './CustomNavElements'
import { RxCross1 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa6'
import { FONT_SIZE } from 'shared/utils/constant'

const CustomNavbar = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = (): void => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.logoContainer}>
                    <img alt={WORD_DIR.profileName} src={logo} />
                </div>
                <div className={styles.hamburgerContainer} onClick={toggleMenu}>
                    {isOpen ? (
                        <RxCross1 size={FONT_SIZE.xLarge} />
                    ) : (
                        <FaBars size={FONT_SIZE.xLarge} />
                    )}
                </div>
            </div>

            <div
                className={`${styles.sectionContainer} ${isOpen ? styles.open : ''}`}
            >
                {NAVBAR.map((item, key) => (
                    <CustomNavElements
                        key={key}
                        title={item.title}
                        path={item.navigationPath}
                    />
                ))}
            </div>
        </div>
    )
}

export default CustomNavbar
