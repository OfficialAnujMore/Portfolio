import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomHeadingProps {
    text: string
    fontSize?: string
    fontColor?: string
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    text,
    fontSize,
    fontColor,
}): React.ReactElement => {
    return (
        <div className={commonStyles.headingContainer}>
            <h1
                style={{
                    fontSize: fontSize ? fontSize : '',
                    color: fontColor ? fontColor : '#fff',
                }}
                className={commonStyles.headingTxt}
            >
                {text.toUpperCase()}
            </h1>
        </div>
    )
}
