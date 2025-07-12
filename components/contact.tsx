"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Text } from "@react-three/drei"

function Computer3D() {
  return (
    <group>
      {/* Monitor */}
      <Box position={[0, 0, 0]} args={[3, 2, 0.1]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      {/* Screen */}
      <Box position={[0, 0, 0.06]} args={[2.8, 1.8, 0.01]}>
        <meshStandardMaterial color="#0066cc" />
      </Box>
      {/* Stand */}
      <Box position={[0, -1.2, 0]} args={[0.3, 0.4, 0.3]}>
        <meshStandardMaterial color="#333" />
      </Box>
      {/* Base */}
      <Box position={[0, -1.6, 0]} args={[1.5, 0.1, 1]}>
        <meshStandardMaterial color="#333" />
      </Box>
      {/* Keyboard */}
      <Box position={[0, -1.8, 1]} args={[2, 0.1, 0.8]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Box>
      <Text position={[0, 0, 0.07]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        {"<Code />"}
      </Text>
    </group>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xwpbgjqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center text-sm sm:text-base">
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center text-sm sm:text-base">
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 lg:order-2"
          >
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Computer3D />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
