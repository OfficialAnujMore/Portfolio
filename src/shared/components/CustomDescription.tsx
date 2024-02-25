import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomDescriptionProps {
    description: string
    fontSize?: string
    fontColor?: string
    imgSrc?: string
}

export const CustomDescription: React.FC<CustomDescriptionProps> = ({
    description,
    fontSize,
    fontColor,
    imgSrc,
}): React.ReactElement => {
    return (
        <div className={commonStyles.descriptionContainer}>
            <img src={imgSrc} />
            <p
                style={{
                    fontSize: fontSize ? fontSize : '',
                    color: fontColor ? fontColor : '#fff',
                }}
                className={commonStyles.descriptionTxt}
            >
                {description}
            </p>
        </div>
    )
}
