import React from 'react'
import globalStyle from '../../styles/Global.module.css'

export const CustomDivider: React.FC<{
    customWdith?: string
}> = ({ customWdith }): React.ReactElement => {
    return (
        <hr
            style={{ width: customWdith }}
            className={globalStyle.dividerMainContainer}
        />
    )
}
