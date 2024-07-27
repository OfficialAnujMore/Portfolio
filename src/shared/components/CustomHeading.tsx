import React from 'react'
import commonStyles from '../../styles/Common.module.css'
import { FONT_SIZE } from 'shared/utils/constant'

interface CustomHeadingProps {
    title: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    title,
    fontSize = FONT_SIZE.xLarge,
    fontColor,
    fontWeight = 'bold',
    maintainCase = true,
}): React.ReactElement => {
    return (
        <div className={commonStyles.headingContainer}>
            <h1
                style={{
                    fontSize: fontSize ? fontSize : '',
                    backgroundColor: fontColor,
                    fontWeight: fontWeight ? fontWeight : 'bold',
                }}
                className={commonStyles.headingTxt}
            >
                {maintainCase ? title : title.toUpperCase()}
            </h1>
        </div>
    )
}
