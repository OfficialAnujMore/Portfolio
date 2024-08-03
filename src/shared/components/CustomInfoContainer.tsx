import React from 'react'
import styles from '../../styles/InfoContainer.module.css'
import { CustomText } from './CustomText'
import WORD_DIR from '../../shared/local/en.js'
import { COLOR_THEME, FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'

export const CustomInfoContainer: React.FC<{
    timespan: string
    title: string
    platform: string
    url?: string
}> = ({ timespan, title, platform, url }): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.primaryContainer}>
                <CustomText
                    title={timespan}
                    fontSize={FONT_SIZE.small}
                    fontWeight={FONT_WEIGHT.weight500}
                    fontColor={COLOR_THEME.secondaryTextColor}
                />

                <CustomText
                    title={title}
                    fontSize={FONT_SIZE.small}
                    fontWeight={FONT_WEIGHT.weight500}
                />

                <CustomText
                    title={platform}
                    fontSize={FONT_SIZE.small}
                    fontWeight={FONT_WEIGHT.weight500}
                />
            </div>
            {url && (
                <div className={styles.secondaryContainer}>
                    <CustomText
                        title={WORD_DIR.certificate}
                        fontSize={FONT_SIZE.small}
                        fontWeight={FONT_WEIGHT.weight500}
                        fontColor={COLOR_THEME.white}
                        url={url}
                    />
                </div>
            )}
        </div>
    )
}
