import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomHeadingProps {
    text: string
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    text,
}): React.ReactElement => {
    return <div className={commonStyles.headingTxt}>{text}</div>
}
