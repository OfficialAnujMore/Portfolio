import React from 'react'
import styles from '../../styles/Navbar.module.css'
import { scrollToSection } from 'shared/utils/common'

interface CustomNavElementsProps {
    title: string
    path: string
}

export const CustomNavElements: React.FC<CustomNavElementsProps> = ({
    title,
    path,
}): React.ReactElement => {
    return (
        <div
            className={styles.primaryTextStyle}
            onClick={() => {
                scrollToSection(path)
            }}
        >
            {title}
        </div>
    )
}
