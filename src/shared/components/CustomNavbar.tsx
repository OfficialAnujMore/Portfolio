import React from 'react'
import navbarStyles from '../../styles/Navbar.module.css'
import logo from '../../assets/images/my-logo.png'
import enData from '../local/en.json'

const CustomNavbar = (): React.ReactElement => {
    return (
        <div className={navbarStyles.mainContainer}>
            <div className={navbarStyles.logoContainer}>
                <img alt={enData.profileName} src={logo} />
            </div>
            <div className={navbarStyles.sectionContainer}>
                <div className={navbarStyles.primaryTextStyle}>
                    {enData.aboutMe}
                </div>
                <div className={navbarStyles.primaryTextStyle}>
                    {enData.skills}
                </div>
                <div className={navbarStyles.primaryTextStyle}>
                    {enData.experience}
                </div>
                <div className={navbarStyles.primaryTextStyle}>
                    {enData.education}
                </div>
                <div className={navbarStyles.primaryTextStyle}>
                    {enData.contact}
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar
