interface Event {
    id: string
    dateRange: string
    title: string
    roles: string
    type: string
    description: string
}
export const events: Event[] = [
    {
        id: '1',
        dateRange: 'July 2021 – May 2024 . 3yrs',
        title: 'Sankey Solutions',
        roles: 'Solution Analyst',
        type: 'Full time - Mumbai, India',
        description:
            '1. Mobile app developer - Team Lead\nI was engaged in the latest technological domain of Electric Vehicle charging applications for the UK\'s largest forecourt operator, leveraging my expertise in Javascript, React Native, and project management.\n\nIntegrated the following features:\na. State of Charge (SOC) - This feature enhances the user experience by providing information on the charging percentage, kilowatt-hours (kWH) consumed, assigned tariff, and total charging amount.\n\nb. Dynamic Tariff - This feature updates the charging tariff based on the day, time, or specific dates and events such as Christmas and New Year.\n\nc. Notifications - Push and In-App notifications using Google Firebase to inform users about promotions and loyalty features available in the app.\n\nd. Payment integration - The existing payment module has been updated with 5 new features: in-app wallet integration, card payment, Apple/Google Pay, and combined payment (using wallet and other sources).\n\ne. Optimization - Utilized lazy loading and list optimization techniques to map and list over 950 forecourt and EV charging stations in the UK region.\n\n2. Web app developer\nDeveloped a back-office web app for the finance and operation team to track the overall sales for the business and have an in-house centralized invoice generation system for multiple businesses spread across the UK region and implemented the business logic.\n\nThe project helped me gain significant exposure in the field of software development leveraging my skills in React JS, Redux, Rest API, and database operations.\n\nRecognized as "Sankey Spotlight" for collaborative teamwork and optimizing performance.',
    },
    {
        id: '2',
        dateRange: 'Jan 2021 - Jun 2021 . 6 months',
        title: 'Study Monk ',
        roles: 'Mobile Application Developer - Flutter',
        type: 'Internship - Remote ',
        description:
            'Developed a cross-platform mobile application targeting the android and iOS users in the southern part of India. The apps main goal was to help users find the nearest garages in a desired radius in case of an emergency or a foreseen event.',
    },
    {
        id: '3',
        dateRange: 'Dec 2019 - Dec 2019 . 1 month',
        title: 'Image Online Pvt. Ltd.',
        type: 'Internship - Remote',
        roles: 'Frontend Web Developer',
        description: '',
    },
]
