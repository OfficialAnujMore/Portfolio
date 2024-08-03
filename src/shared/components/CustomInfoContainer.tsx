import React from 'react'
import styles from '../../styles/InfoContainer.module.css'
import { CustomText } from './CustomText'
import WORD_DIR from '../../shared/local/en.js'
import { COLOR_THEME, FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'

export const CustomInfoContainer: React.FC<{
    timespan: string
    title: string
    platform: string
    displayUrl?: string
    url?: string
    imagePath?: string
}> = ({
    timespan,
    title,
    platform,
    displayUrl,
    url,
    imagePath,
}): React.ReactElement => {
    return (
        <div className={styles.infoMainContainer}>
            <div>
                <div className={styles.logoContainer}>
                    <img src={imagePath} alt="Logo" />
                </div>
                <div className={styles.dateContainer}>
                    <CustomText
                        title={timespan}
                        fontSize={FONT_SIZE.small}
                        fontWeight={FONT_WEIGHT.weight400}
                        fontColor={COLOR_THEME.secondaryTextColor}
                    />
                </div>
                <div className={styles.infoContainer}>
                    <CustomText
                        title={title}
                        fontSize={FONT_SIZE.small}
                        fontWeight={FONT_WEIGHT.weight600}
                        maintainCase={false}
                    />
                    <CustomText
                        title={platform}
                        fontSize={FONT_SIZE.small}
                        fontWeight={FONT_WEIGHT.weight400}
                        maintainCase={false}
                    />
                </div>
            </div>
            <div className={styles.urlContainer}>
                {displayUrl && (
                    <div className={styles.secondaryContainer}>
                        <CustomText
                            title={WORD_DIR.view}
                            fontSize={FONT_SIZE.small}
                            fontWeight={FONT_WEIGHT.weight400}
                            fontColor={COLOR_THEME.secondaryTextColor}
                            url={displayUrl}
                        />
                    </div>
                )}
                {url && (
                    <div className={styles.secondaryContainer}>
                        <CustomText
                            title={WORD_DIR.certificate}
                            fontSize={FONT_SIZE.small}
                            fontWeight={FONT_WEIGHT.weight400}
                            fontColor={COLOR_THEME.secondaryTextColor}
                            url={url}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
