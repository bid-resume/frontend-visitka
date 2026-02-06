import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

const StarryBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ['#ffffff', '#7000FF', '#00C2FF']
        },
        links: {
          enable: false
        },
        move: {
          enable: true,
          direction: 'none',
          outModes: {
            default: 'out'
          },
          random: true,
          speed: 0.3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080
          },
          value: 150
        },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false
          }
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 0.5, max: 3 },
          animation: {
            enable: true,
            speed: 1,
            sync: false
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: {
            enable: true
          }
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      },
      detectRetina: true
    }),
    []
  )

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  )
}

export default StarryBackground