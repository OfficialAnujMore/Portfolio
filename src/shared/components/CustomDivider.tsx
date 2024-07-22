import React from 'react'
import commonStyles from '../../styles/Common.module.css'

export const CustomDivider: React.FC<{
    customWdith?: string
}> = ({ customWdith }): React.ReactElement => {
    return (
        <hr
            style={{ width: customWdith }}
            className={commonStyles.dividerContainer}
        ></hr>
    )
}
