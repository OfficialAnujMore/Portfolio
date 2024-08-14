import React from 'react'
import './App.css'
import CustomNavbar from 'shared/components/CustomNavbar'
import LandingSection from 'modules/LandingSection'
import AboutMe from 'modules/AboutMe'
import { Education } from 'modules/Education'
import Experience from 'modules/Experience'
import ContactForm from 'modules/ContactForm'
import './styles/variables.css'
import { Certifications } from 'modules/Certifications'

function App(): React.ReactElement {
    return (
        <div className="App">
            <CustomNavbar />
            <LandingSection />
            <AboutMe />
            <Experience />
            <Education />
            <Certifications />
            <ContactForm />
        </div>
    )
}

export default App
