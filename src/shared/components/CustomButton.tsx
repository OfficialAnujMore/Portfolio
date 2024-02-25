import React from 'react'
import commonStyles from '../../styles/Common.module.css'

export const CustomButton: React.FC<{
    text?: string
    imgPath?: string
}> = ({ text, imgPath }): React.ReactElement => {
    return (
        <div className={commonStyles.buttonContainer}>
            {text ? (
                <p className={commonStyles.buttonTxt}>{text.toUpperCase()}</p>
            ) : (
                <img className={commonStyles.imgStyle} src={imgPath} />
            )}
        </div>
    )
}
