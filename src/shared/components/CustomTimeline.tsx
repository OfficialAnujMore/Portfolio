// src/components/Timeline.tsx
import React from 'react'
import style from '../../styles/Experience.module.css'
import globalStyle from '../../styles/Global.module.css'

interface Event {
    dateRange: string
    title: string
    roles: string
    type: string
    description: string
}

const events: Event[] = [
    {
        dateRange: 'July 2021 – May 2024',
        title: 'Sankey Solutions',
        roles: 'Solution Analyst',
        type: 'Full time - Mumbai, India',
        description:
            'Engaged in the latest technological domain of Electric Vehicle charging applications for the UKs largest forecourt operator, leveraging expertise in JavaScript, React Native, and project management. Integrated features include State of Charge (SOC) for detailed charging info, Dynamic Tariff updating based on time and events, push and in-app notifications using Google Firebase, enhanced payment options with in-app wallet, card payment, Apple/Google Pay, and combined payment, and optimized listing of over 950 stations using lazy loading techniques.',
    },
    {
        dateRange: 'Jan 2021 - Jun 2021',
        title: 'Study Monk ',
        roles: 'Mobile Application Developer - Flutter',
        type: 'Internship - Remote ',
        description:
            'Developed a cross-platform mobile application targeting the android and iOS users in the southern part of India. The apps main goal was to help users find the nearest garages in a desired radius in case of an emergency or a foreseen event.',
    },
    {
        dateRange: 'Dec 2019 - Dec 2019',
        title: 'Image Online Pvt. Ltd.',
        type: 'Internship - Remote',
        roles: 'Frontend Web Developer',
        description: '',
    },
]

const CustomTimeline: React.FC = () => {
    return (
        <div className={style.timeline}>
            {events.map((event, index) => (
                <div key={index} className={`${style.timelineItem}`}>
                    <div className={style.timelineDate}>{event.dateRange}</div>
                    <div
                        className={`${style.timelineContent} ${globalStyle.commonBorderDecoration}`}
                    >
                        <h2>{event.title}</h2>
                        <h3>{event.roles}</h3>
                        <h3>{event.type}</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CustomTimeline
