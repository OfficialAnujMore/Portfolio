import React from 'react'
import commonStyles from '../../styles/Common.module.css'
import { COLOR_THEME, FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'
import { scrollToSection } from 'shared/utils/common'

interface CustomButtonProps {
    text?: string
    customComponent?: React.ReactNode
    actionItem?: string
    eventListner?: string
    enableBorder?: boolean
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    customComponent,
    actionItem,
    eventListner,
    enableBorder,
}): React.ReactElement => {
    return (
        <div
            className={commonStyles.buttonContainer}
            style={{
                border: enableBorder
                    ? `1px solid ${COLOR_THEME.secondaryTextColor}`
                    : undefined,
                marginRight: customComponent ? FONT_SIZE.extraSmall : undefined,
            }}
            onClick={() => {
                if (actionItem) {
                    window.open(actionItem, '_blank')
                } else if (eventListner) {
                    scrollToSection(eventListner)
                }
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
