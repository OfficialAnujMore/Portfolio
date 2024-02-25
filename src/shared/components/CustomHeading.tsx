import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomHeadingProps {
    text: string
    fontSize?: string
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    text,
    fontSize,
}): React.ReactElement => {
    return (
        <div className={commonStyles.headingContainer}>
            <h1
                style={{ fontSize: fontSize ? fontSize : '' }}
                className={commonStyles.headingTxt}
            >
                {text.toUpperCase()}
            </h1>
        </div>
    )
}
