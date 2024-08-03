import React from 'react'
import commonStyles from '../../styles/Common.module.css'
import { FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'

interface CustomHeadingProps {
    title: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    title,
    fontSize = FONT_SIZE.xLarge,
    fontColor,
    fontWeight = FONT_WEIGHT.bold,
    maintainCase = false,
}): React.ReactElement => {
    return (
        <h1
            style={{
                fontSize: fontSize,
                backgroundColor: fontColor,
                fontWeight: fontWeight,
            }}
            className={commonStyles.headingTxt}
        >
            {maintainCase ? title : title.toUpperCase()}
        </h1>
    )
}
