import React, { useEffect, useState, memo } from 'react'
import { Particles, initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { COLOR_THEME } from 'shared/utils/constant'
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
                            resize: {
                                delay: 1,
                                enable: true,
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: COLOR_THEME.white,
                        },
                        links: {
                            color: COLOR_THEME.white,
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 0.2,
                            straight: true,
                        },
                        number: {
                            density: {
                                enable: true,
                                height: 700,
                                width: 700,
                            },
                            value: 60,
                        },
                        opacity: {
                            value: 0.5,
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
        </div>
    )
}

const MemoizedCustomParticleContainer = memo(CustomParticleContainer)
MemoizedCustomParticleContainer.displayName = 'MemoizedCustomParticleContainer'

export default MemoizedCustomParticleContainer
