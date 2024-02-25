import React from 'react'
import './App.css'
import CustomNavbar from 'shared/components/CustomNavbar'
import LandingSection from 'modules/LandingSection'

function App(): React.ReactElement {
    return (
        <div className="App">
            <CustomNavbar />
            <LandingSection />
        </div>
    )
}

export default App
