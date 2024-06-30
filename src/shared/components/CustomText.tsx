import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomTextProps {
    title: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
    url?: string
}

export const CustomText: React.FC<CustomTextProps> = ({
    title,
    fontSize = '',
    fontColor,
    fontWeight = 'bold',
    maintainCase,

    url,
}): React.ReactElement => {
    const handleClick = (): void => {
        window.open(url, '_blank')
    }
    return (
        <div>
            <h1
                style={{
                    fontSize: fontSize,
                    color: fontColor,
                    fontWeight: fontWeight,
                }}
                // onClick={url ? handleClick : undefined}
            >
                {maintainCase ? title : title.toUpperCase()}
            </h1>
        </div>
    )
}
