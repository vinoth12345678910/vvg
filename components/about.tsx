"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techStack = {
  "Front-End": [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "ShadCN UI", icon: "🎯" },
    { name: "Chakra UI", icon: "⚡" },
    { name: "Material UI", icon: "📱" },
  ],
  "Back-End": [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🦫" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Prisma", icon: "🔺" },
    { name: "Redis", icon: "🔴" },
    { name: "Socket.io", icon: "🔌" },
  ],
  "Cloud & Services": [
    { name: "Firebase", icon: "🔥" },
    { name: "Supabase", icon: "⚡" },
    { name: "AWS (S3)", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
  ],
  "Version Control": [
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
  ],
  "Deployment & DevOps": [
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Netlify", icon: "🌐" },
    { name: "Railway", icon: "🚂" },
  ],
  Other: [
    { name: "RESTful APIs", icon: "🔗" },
    { name: "Authentication", icon: "🔐" },
    { name: "Code Refactoring", icon: "🔧" },
    { name: "Performance Optimization", icon: "⚡" },
    { name: "Real-time Communication", icon: "💬" },
  ],
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400">
              <Image src="/profile.jpg" alt="Vinoth Anand Gani" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Aspiring Full-stack developer with a strong foundation in front-end development and a growing proficiency
              in back-end technologies. Skilled in creating responsive and user-friendly web interfaces using NEXTjs.
              React and javascript Currently expanding expertise in server-side development, scalable and robust APIs
              and databases to build complete, scalable web applications. Passionate about building clean codes,
              continuous learning and impactful changes in digital world.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Tech Stack</h3>

          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-400">{category}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
