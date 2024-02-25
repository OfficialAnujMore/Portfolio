import React from 'react'
import commonStyles from '../styles/Common.module.css'
// import enData from '../shared/local/en.json'
import { CustomButton } from 'shared/components/CustomButton'
import downArrow from '../assets/images/down-arrow.png'

const NavigatorSection = (): React.ReactElement => {
    return (
        <div className={commonStyles.navigatorContainer}>
            <CustomButton imgPath={downArrow} />
        </div>
    )
}

export default NavigatorSection
