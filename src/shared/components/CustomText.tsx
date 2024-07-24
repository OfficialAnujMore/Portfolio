import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomTextProps {
    title?: string
    imgSrc?: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
    url?: string
}

export const CustomText: React.FC<CustomTextProps> = ({
    title,
    imgSrc,
    fontSize = '',
    fontColor,
    fontWeight,
    maintainCase = true,
    url,
}): React.ReactElement => {
    const handleClick = (): void => {
        window.open(url, '_blank')
    }

    // Determine class names
    const textClassName = url ? commonStyles.customUnderline : ''

    return (
        <div className={commonStyles.descriptionContainer}>
            {imgSrc && <img src={imgSrc} alt="" />}
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
