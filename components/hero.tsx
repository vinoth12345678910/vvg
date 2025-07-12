"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-30">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg">Hi</h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light tracking-wide drop-shadow-md"
          >
            Welcome to my portfolio
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white drop-shadow-lg">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Vinoth Anand Gani
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Full-stack developer passionate about creating beautiful, functional web experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/vinoth-anand-304126325/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-lg text-white">LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://github.com/vinoth12345678910"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-lg text-white">GitHub</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-1 h-3 bg-gray-300 rounded-full mt-2"
              />
            </div>
          </motion.div>
          <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}
