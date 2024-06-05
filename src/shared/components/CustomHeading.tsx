import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomHeadingProps {
    title: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    title,
    fontSize,
    fontColor,
    fontWeight,
}): React.ReactElement => {
    return (
        <div className={commonStyles.headingContainer}>
            <h1
                style={{
                    fontSize: fontSize ? fontSize : '',
                    // color: fontColor ? fontColor : 'red',
                    fontWeight: fontWeight ? fontWeight : 'bold',
                }}
                className={commonStyles.headingTxt}
            >
                {title.toUpperCase()}
            </h1>
        </div>
    )
}
