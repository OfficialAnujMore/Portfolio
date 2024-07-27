import React from 'react'
import styles from '../../styles/InfoContainer.module.css'
import { CustomText } from './CustomText'
import WORD_DIR from '../../shared/local/en.js'
import { FONT_SIZE } from 'shared/utils/constant'

export const CustomInfoContainer: React.FC<{
    timespan: string
    title: string
    platform: string
    // description: string
    url?: string
}> = ({ timespan, title, platform, url }): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.primaryContainer}>
                {/* <div
                    className={styles.customText}
                    dangerouslySetInnerHTML={{
                        __html: title.replace('\n', '<br/>'),
                    }}
                /> */}
                <CustomText
                    title={timespan}
                    fontSize={FONT_SIZE.medium}
                   
                    fontWeight={'600'}
                    maintainCase={true}
                />

                <CustomText
                    title={title}
                    fontSize={FONT_SIZE.medium}
                   
                    fontWeight={'600'}
                    maintainCase={true}
                />

                <CustomText
                    title={platform}
                    fontSize={FONT_SIZE.medium}
                   
                    fontWeight={'600'}
                    maintainCase={true}
                />
                {/* <CustomText
                    title={description}
                    fontSize={FONT_SIZE.medium}
                   
                    maintainCase={true}
                /> */}
            </div>
            {url && (
                <div className={styles.secondaryContainer}>
                    <CustomText
                        title={WORD_DIR.certificate}
                        fontSize={FONT_SIZE.medium}
                        fontColor={'white'}
                        maintainCase={true}
                        url={url}
                    />
                </div>
            )}
        </div>
    )
}
