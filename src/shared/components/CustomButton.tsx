import React from 'react'
import commonStyles from '../../styles/Common.module.css'
import { COLOR_THEME, FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'

interface CustomButtonProps {
    text?: string
    customComponent?: React.ReactNode
    actionItem?: string
    enableBorder?: boolean
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    customComponent,
    actionItem,
    enableBorder,
}): React.ReactElement => {
    return (
        <div
            className={commonStyles.buttonContainer}
            style={{
                border: enableBorder
                    ? `1px solid ${COLOR_THEME.secondaryTextColor}`
                    : undefined,
                marginRight: customComponent ? FONT_SIZE.small : undefined,
            }}
            onClick={() => {
                // window.open(actionItem, '_blank')
            }}
        >
            {customComponent ? (
                customComponent
            ) : (
                <p className={commonStyles.buttonTxt}>{text?.toUpperCase()}</p>
            )}
        </div>
    )
}

// : (
//     <img className={commonStyles.imgStyle} src={imgPath} />
// )
