import React from 'react'
import style from '../../styles/CustomHeading.module.css'
import { FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'

interface CustomHeadingProps {
    title: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
    textDecoration?: boolean
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    title,
    fontSize = FONT_SIZE.xLarge,
    fontColor,
    fontWeight = FONT_WEIGHT.bold,
    maintainCase = false,
    textDecoration = false,
}): React.ReactElement => {
    return (
        <h1
            style={{
                fontSize: fontSize,
                backgroundColor: fontColor,
                fontWeight: fontWeight,
            }}
            className={`${style.headingTxt} ${textDecoration ? style.textDecoration : null}`}
        >
            {maintainCase ? title : title.toUpperCase()}
        </h1>
    )
}
