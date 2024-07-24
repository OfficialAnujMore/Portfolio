import React from 'react'
import './App.css'
import CustomNavbar from 'shared/components/CustomNavbar'
import LandingSection from 'modules/LandingSection'
import { CustomDivider } from 'shared/components/CustomDivider'
import AboutMe from 'modules/AboutMe'
import { Skills } from 'modules/Skills'
import { Education } from 'modules/Education'
import Experience from 'modules/Experience'
import ContactForm from 'modules/ContactForm'

function App(): React.ReactElement {
    return (
        <div className="App">
            {/* <CustomNavbar /> */}
            <LandingSection />
            <CustomDivider />
            <AboutMe />
            <Skills />
            <CustomDivider />
            <Experience />
            <CustomDivider />
            <Education />
            <CustomDivider />
            <ContactForm />
        </div>
    )
}

export default App
