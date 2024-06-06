import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomDescriptionProps {
    description: string | undefined
    fontSize?: string
    fontColor?: string
    imgSrc?: string
    padding?: string
}

export const CustomDescription: React.FC<CustomDescriptionProps> = ({
    description,
    fontSize,
    fontColor,
    imgSrc,
    padding,
}): React.ReactElement => {
    return (
        <div className={commonStyles.descriptionContainer}>
            <img src={imgSrc} />
            <p
                style={{
                    fontSize: fontSize ? fontSize : '',
                    color: fontColor ? fontColor : '#fff',
                    padding,
                }}
                className={commonStyles.descriptionTxt}
            >
                {description}
            </p>
        </div>
    )
}
