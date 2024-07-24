import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomButtonProps {
    text?: string
    imgPath?: string
    customComponent?: React.ReactNode
    actionItem?: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    imgPath,
    customComponent,
    actionItem,
}): React.ReactElement => {
    return (
        <div
            className={commonStyles.buttonContainer}
            onClick={() => window.open(actionItem, '_blank')}
        >
            {customComponent ? (
                customComponent
            ) : text ? (
                <p className={commonStyles.buttonTxt}>{text.toUpperCase()}</p>
            ) : (
                <img className={commonStyles.imgStyle} src={imgPath} />
            )}
        </div>
    )
}
