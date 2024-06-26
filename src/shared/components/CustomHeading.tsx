import React from 'react'
import commonStyles from '../../styles/Common.module.css'

interface CustomHeadingProps {
    title: string
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
    url?: string
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
    title,
    fontSize,
    fontColor,
    fontWeight,
    maintainCase,

    url,
}): React.ReactElement => {
    const handleClick = (): void => {
        window.open(url, '_blank')
    }
    return (
        <div className={commonStyles.headingContainer}>
            <h1
                style={{
                    fontSize: fontSize ? fontSize : '',
                    backgroundColor: fontColor,
                    fontWeight: fontWeight ? fontWeight : 'bold',
                }}
                className={commonStyles.headingTxt}
                // onClick={url ? handleClick : undefined}
            >
                {maintainCase ? title : title.toUpperCase()}
            </h1>
        </div>
    )
}
