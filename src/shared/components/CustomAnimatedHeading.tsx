import React, { useState, useEffect } from 'react'
import style from '../../styles/CustomHeading.module.css'
import { FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'
// Define the props interface for the Typewriter component
interface CustomAnimatedHeadingProps {
    title: string
    delay: number
    infinite?: boolean // Made optional because not all use cases may require infinite looping
    fontSize?: string
    fontColor?: string
    fontWeight?: string
    maintainCase?: boolean
}

const CustomAnimatedHeading: React.FC<CustomAnimatedHeadingProps> = ({
    title: text,
    delay,
    infinite = false,
    fontSize = FONT_SIZE.xLarge,
    fontColor,
    fontWeight = FONT_WEIGHT.bold,
    maintainCase = false,
}) => {
    const [currentText, setCurrentText] = useState<string>('')
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex])
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, delay)
        } else if (infinite) {
            // Reset the index and text if infinite is true
            setCurrentIndex(0)
            setCurrentText('')
        }

        return () => clearTimeout(timeout)
    }, [currentIndex, delay, infinite, text])

    return (
        <h1
            style={{
                fontSize: fontSize,
                backgroundColor: fontColor,
                fontWeight: fontWeight,
            }}
            className={style.headingTxt}
        >
            {maintainCase ? currentText : currentText.toUpperCase()}
        </h1>
    )
}

export default CustomAnimatedHeading
