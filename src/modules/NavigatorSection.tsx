import React from 'react'
import globalStyle from '../styles/Global.module.css'
import { CustomButton } from 'shared/components/CustomButton'
import downArrow from '../assets/images/down-arrow.png'
import { NAVIGATION_PATH } from 'shared/utils/constant'

const NavigatorSection = (): React.ReactElement => {
    return (
        <div className={globalStyle.navigatorContainer}>
            <CustomButton
                enableBorder={true}
                customComponent={
                    <img className={globalStyle.imgStyle} src={downArrow} />
                }
                eventListner={NAVIGATION_PATH.aboutme}
            />
        </div>
    )
}

export default NavigatorSection
