import React from 'react'
import './App.css'
import CustomNavbar from 'shared/components/CustomNavbar'
import LandingScreen from 'modules/LandingScreen'

function App(): React.ReactElement {
    return (
        <div className="App">
            <CustomNavbar />
            <LandingScreen />
        </div>
    )
}

export default App
