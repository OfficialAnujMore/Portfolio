import React from 'react'
import styles from '../../styles/InfoContainer.module.css'
import { CustomText } from './CustomText'
import enData from '../../shared/local/en.json'
export const CustomInfoContainer: React.FC<{
    timespan: string
    title: string
    platform: string
    description: string
    url?: string
}> = ({ timespan, title, platform, description, url }): React.ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.primaryContainer}>
                <CustomText
                    title={timespan}
                    fontSize="1rem"
                    fontColor="#fff"
                    maintainCase={true}
                />
                <CustomText
                    title={title}
                    fontSize="1rem"
                    fontColor="#fff"
                    maintainCase={true}
                />
                <CustomText
                    title={platform}
                    fontSize="1rem"
                    fontColor="#fff"
                    maintainCase={true}
                />
                <CustomText
                    title={description}
                    fontSize="1rem"
                    fontColor="#fff"
                    maintainCase={true}
                />
            </div>
            {url && (
                <div className={styles.secondaryContainer}>
                    <CustomText
                        title={enData.certificate}
                        fontSize={'1rem'}
                        fontColor={'white'}
                        maintainCase={true}
                        url={url}
                    />
                </div>
            )}
        </div>
    )
}
