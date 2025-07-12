"use client"

import { useEffect, useRef } from "react"

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Array<{
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      twinklePhase: number
    }> = []

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Update twinkle
        star.twinklePhase += star.twinkleSpeed
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()

        // Add some blue tint to random stars
        if (Math.random() > 0.95) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(96, 165, 250, ${star.opacity * twinkle * 0.3})`
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 30%, #0f0f0f 70%)",
        opacity: 0.8,
      }}
    />
  )
}
