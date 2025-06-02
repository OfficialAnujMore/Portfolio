import React, { useState, useEffect } from 'react'
import SplashScreen from './Screens/SplashScreen'
import HomeScreen from './Screens/HomeScreen'
import SkillsScreen from './Screens/SkillsScreen'
import ExperienceScreen from './Screens/ExperienceScreen'
import ProjectScreen from './Screens/ProjectScreen'
import RecommendationScreen from './Screens/RecommendationScreen'
import ContactScreen from './Screens/ContactScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { cssVariables } from './constants/colors'
import './styles/globals.css'
import './App.css'

function App() {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        // Inject CSS variables
        const style = document.createElement('style')
        style.innerHTML = cssVariables
        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [])

    const handleSplashComplete = () => {
        setShowSplash(false)
    }

    return (
        <div className="App">
            {showSplash ? (
                <SplashScreen onComplete={handleSplashComplete} />
            ) : (
                    <main>
                        <Navbar />
                        <section id="home">
                            <HomeScreen />
                        </section>
                        <section id="skills">
                            <SkillsScreen />
                        </section>
                        <section id="experience">
                            <ExperienceScreen />
                        </section>
                        <section id="projects">
                            <ProjectScreen />
                        </section>
                        <section id="recommendations">
                            <RecommendationScreen />
                        </section>
                        <section id="contact">
                            <ContactScreen />
                        </section>
                        <Footer />
                    </main>
            )}
        </div>
    )
}

export default App
