"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Starfield from "@/components/starfield"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleScroll)
    return () => document.removeEventListener("click", handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-white">
      <Starfield />
      <div className="relative z-20 bg-transparent">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
