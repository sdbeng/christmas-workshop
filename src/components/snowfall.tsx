'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
}

export default function Snowfall() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 2 + 1,
    })

    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake)
    setSnowflakes(initialSnowflakes)

    const interval = setInterval(() => {
      setSnowflakes((prevSnowflakes) =>
        prevSnowflakes.map((flake) => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.01) * 2,
        })).filter((flake) => flake.y < window.innerHeight)
         .concat(Array.from({ length: 5 }, createSnowflake))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
        />
      ))}
    </div>
  )

}