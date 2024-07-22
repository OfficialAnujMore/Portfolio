import React from 'react'
import styles from '../../styles/Navbar.module.css'

interface CustomNavElementsProps {
    title: string
}

export const CustomNavElements: React.FC<CustomNavElementsProps> = ({
    title,
}): React.ReactElement => {
    return <div className={styles.primaryTextStyle}>{title}</div>
}
