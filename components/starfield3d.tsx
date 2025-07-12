"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import * as THREE from "three"

function AnimatedStars() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005
      starsRef.current.rotation.x += 0.0002
    }
  })

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  )
}

export default function Starfield3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.1} />
        <AnimatedStars />
      </Canvas>
    </div>
  )
} 