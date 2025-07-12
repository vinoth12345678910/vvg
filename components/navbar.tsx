"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function Navbar() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Vinoth-Resume.pdf"
    link.download = "Vinoth-Anand-Gani-Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          >
            Vinoth Anand Gani
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {["About", "Projects"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Mobile Resume Button */}
          <div className="md:hidden">
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 text-sm bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-full text-white shadow-md"
            >
              <Download size={14} />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
