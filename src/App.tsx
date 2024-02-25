import React from 'react'
import './App.css'
import CustomNavbar from 'shared/components/CustomNavbar'
import LandingSection from 'modules/LandingSection'
import { CustomDivider } from 'shared/components/CustomDivider'
import AboutMe from 'modules/AboutMe'

function App(): React.ReactElement {
    return (
        <div className="App">
            <CustomNavbar />
            <LandingSection />
            <CustomDivider />
            <AboutMe />
        </div>
    )
}

export default App
