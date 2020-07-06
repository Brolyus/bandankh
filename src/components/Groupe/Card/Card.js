import React, { useState } from 'react'
import { useSpring, animated} from 'react-spring'
import './Card.css'

function Card({name, nickname, role, description, image}) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className="member" onClick={() => set(state => !state)}>
        <animated.div class={`c back ${nickname.toLowerCase().replace(/\s/g, "")}`} style={{ opacity: opacity.interpolate(o => 1 - o), transform, backgroundImage: `url(${image})`}} />
        <animated.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
            <h2>{name} - {nickname}</h2>
            <h3>{role}</h3>
            <p>{description}</p>
        </animated.div>
    </div>
  )
}

export default Card;