import React from 'react'
import commonStyles from '../../styles/Common.module.css'
import { COLOR_THEME, FONT_WEIGHT } from 'shared/utils/constant'

interface CustomTextProps {
    title?: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string | number
    maintainCase?: boolean
    url?: string
}

export const CustomText: React.FC<CustomTextProps> = ({
    title,
    fontSize = '',
    fontColor = COLOR_THEME.white,
    fontWeight = FONT_WEIGHT.weight500,
    maintainCase = true,
    url,
}): React.ReactElement => {
    const handleClick = (): void => {
        window.open(url, '_blank')
    }

    const textClassName = url ? commonStyles.customUnderline : ''

    return (
        <div className={commonStyles.descriptionContainer}>
            <h1
                style={{
                    fontSize: fontSize,
                    color: fontColor,
                    fontWeight: fontWeight,
                }}
                className={textClassName}
                onClick={url ? handleClick : undefined}
            >
                {maintainCase ? title : title?.toUpperCase()}
            </h1>
        </div>
    )
}
