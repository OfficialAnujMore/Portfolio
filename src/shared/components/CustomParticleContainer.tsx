import React, { useEffect, useState, memo } from 'react'
import { Particles, initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
const CustomParticleContainer = (): React.ReactElement => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    return (
        <div>
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 100,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.1,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: '#ffffff',
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: {
                                    default: 'bounce',
                                },
                                random: false,
                                speed: 0.3,
                                straight: true,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 200,
                            },
                            opacity: {
                                value: 0.3,
                            },
                            shape: {
                                type: 'circle',
                            },
                            size: {
                                value: { min: 1, max: 4 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    )
}

const MemoizedCustomParticleContainer = memo(CustomParticleContainer)
MemoizedCustomParticleContainer.displayName = 'MemoizedCustomParticleContainer'

export default MemoizedCustomParticleContainer
