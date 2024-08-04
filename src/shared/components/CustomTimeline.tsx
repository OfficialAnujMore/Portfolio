import React, { useState, useRef, useEffect } from 'react'
import style from '../../styles/Experience.module.css'
import globalStyle from '../../styles/Global.module.css'
import { CustomText } from './CustomText'
import { CustomButton } from './CustomButton'
import { COLOR_THEME, FONT_SIZE, FONT_WEIGHT } from 'shared/utils/constant'
import { scrollToSection } from 'shared/utils/common'
import WORD_DIR from 'shared/local/en'
import { events } from 'shared/utils/experience'

const CustomTimeline: React.FC = () => {
    const [expandedEvents, setExpandedEvents] = useState<{
        [key: number]: boolean
    }>({})

    const toggleExpand = (index: number, id: string): void => {
        setExpandedEvents((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }))
        scrollToSection(id)
    }

    return (
        <div className={style.timelineMainContainer}>
            {events.map((event, index) => {
                const descriptionWords = event.description.split(' ')
                const shouldShowExpandButton = descriptionWords.length > 50
                const isExpanded = !!expandedEvents[index]
                const uniqueId = event.id + event.title

                return (
                    <div
                        key={index}
                        id={uniqueId}
                        className={`${style.timelineItem}`}
                    >
                        <CustomText
                            title={event.dateRange}
                            fontSize={FONT_SIZE.small}
                            fontWeight={FONT_WEIGHT.weight600}
                            fontColor={COLOR_THEME.secondaryTextColor}
                        />
                        <div
                            className={`${style.timelineContent} ${globalStyle.commonBorderDecoration} ${isExpanded ? 'expanded' : 'collapsed'}`}
                            style={{
                                cursor: shouldShowExpandButton
                                    ? 'pointer'
                                    : 'default',
                            }}
                        >
                            <CustomText
                                title={event.title}
                                fontSize={FONT_SIZE.large}
                                fontWeight={FONT_WEIGHT.weight700}
                                maintainCase={false}
                            />
                            <CustomText
                                title={event.roles}
                                fontSize={FONT_SIZE.medium}
                                fontWeight={FONT_WEIGHT.weight400}
                                fontColor={COLOR_THEME.secondaryTextColor}
                            />
                            <CustomText
                                title={event.type}
                                fontSize={FONT_SIZE.small}
                                fontWeight={FONT_WEIGHT.weight400}
                                fontColor={COLOR_THEME.secondaryTextColor}
                            />
                            <CustomText
                                title={
                                    isExpanded
                                        ? event.description
                                        : `${descriptionWords.slice(0, 50).join(' ')}...`
                                }
                                fontSize={FONT_SIZE.small}
                                fontWeight={FONT_WEIGHT.weight400}
                                fontColor={COLOR_THEME.primaryTextColor}
                            />
                            {shouldShowExpandButton && (
                                <CustomButton
                                    customComponent={
                                        <div>
                                            {isExpanded
                                                ? WORD_DIR.showLess
                                                : WORD_DIR.showMore}
                                        </div>
                                    }
                                    onClick={() =>
                                        toggleExpand(index, uniqueId)
                                    }
                                />
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CustomTimeline
