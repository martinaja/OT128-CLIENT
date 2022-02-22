import React, { useState, useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import './styles.css'


const items = ['Gracias', 'por', 'su', 'colaboración']
const config = { mass: 5, tension: 2000, friction: 200 }

export default function Thankyou() {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 120 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  useEffect(() => {
    const toggle = () => {
      setTimeout(() => {
        set(false)
      }, 0)
      setTimeout(() => {
        set(true)
      }, 500)
      setTimeout(() => {
        set(false)
      }, 750)
      setTimeout(() => {
        set(true)
      }, 1500)
    }

    setInterval(() => {
      toggle()
    }, 3000)
  }, [])

  return (
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}


