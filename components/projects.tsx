"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Taskprox",
    description:
      "TaskProX is a modern, real-time team collaboration platform that enables seamless communication, team management, and project coordination. Built with Next.js, Firebase, and Socket.IO, it offers live chat, team rooms, user roles, and a responsive interface—making teamwork efficient and engaging.",
    techStack: "Next.js 15.3.5, React 19, TypeScript, Tailwind CSS 4, Socket.IO, Firebase",
    github: "https://github.com/vinoth12345678910/Taskpro-X",
    vercel: "https://taskprox-58458.web.app/",
  },
  {
    title: "Job Board",
    description:
      "A full-stack job board application built with Node.js/Express backend and Next.js frontend, enabling recruiters to post jobs and job seekers to find and apply for opportunities.",
    techStack: "Node.js, Express.js, MongoDB, Next.js 15, TypeScript, Tailwind CSS",
    github: "https://github.com/vinoth12345678910/Job_board",
    vercel: "https://job-finder-frontend-seven.vercel.app/",
  },
  {
    title: "Vinktree",
    description:
      "A modern, beautiful link-in-bio SaaS platform built with Next.js, Tailwind CSS, and Stripe. Share all your links, grow your audience, and unlock premium features with a stunning, responsive UI.",
    techStack: "Next.js, Tailwind CSS, Stripe, Express.js, MongoDB, ShadcnUI",
    github: "https://github.com/vinoth12345678910/Vinktree",
    vercel: "https://vinktree-frontend-ydbc.vercel.app/",
  },
  {
    title: "Cloud Box",
    description:
      "CloudBox API is a file storage and sharing service designed to handle all your media with ease. Built with Node.js, Express",
    techStack: "Node.js, Express, JWT, Mongoose, Cloudinary, Multer, bcrypt",
    github: "https://github.com/vinoth12345678910/cloudBox-api",
    vercel: "https://drive-y96p.vercel.app/",
  },
  {
    title: "Ofy",
    description:
      "The Comfy store is a website where you can browse all your furniture stuffs and login it. This is built on React and state management with redux",
    techStack: "React, Redux, Tailwind CSS",
    github: "https://github.com/vinoth12345678910/Ofy",
    vercel: "https://ofy-three.vercel.app/",
  },
  {
    title: "Habify",
    description:
      "This website helps you to track your habits log in to it and store your habits preferred to your choice. This is built on React and Contextapi for state management",
    techStack: "React, Context API, Tailwind CSS",
    github: "https://github.com/vinoth12345678910/ha",
    vercel: "https://ha-vinoth12345678910s-projects.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Tech Stack:</p>
                <p className="text-xs text-gray-300">{project.techStack}</p>
              </div>
              <div className="flex space-x-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
