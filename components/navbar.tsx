"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function Navbar() {
  const handleDownloadResume = () => {
    // Create a blob with resume content (you can replace this with actual PDF data)
    const resumeContent = `
Vinoth Anand Gani
Email: vinayvincth7@gmail.com
Phone: +91 XXXXXXXXXX

PROFILE
Aspiring Full-stack developer with a strong foundation in front-end development and a growing proficiency in back-end technologies. Skilled in creating responsive and user-friendly web interfaces using NEXT.js, React and JavaScript. Currently expanding expertise in server-side development, scalable and robust APIs and databases to build complete, scalable web applications. Passionate about building clean codes, continuous learning and impactful changes in digital world.

EDUCATION
B Tech in CSE (Jul 2024 - May 2028)
SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
Currently going to be a 2nd year student in Computer science and engineering

SKILLS
Frontend: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, ShadCN UI, Chakra UI, Material UI
Backend: Node.js, Express.js, MongoDB, Mongoose, PostgreSQL, Prisma, Redis, Socket.io
Cloud & Services: Firebase, Supabase, AWS (S3), Docker
Version Control: Git, GitHub
Deployment & DevOps: Docker, AWS, Vercel, Netlify, Railway

EMPLOYMENT
Development Team Lead - Codekrafters club, Chennai (May 2025 - Present)
Web developer Intern - Freshtronics, Chennai (Jul 2025 - Present)

PROJECTS
1. TaskProX - Real-time team collaboration platform
2. Job Board - Full-stack job application platform
3. Vinktree - Link-in-bio SaaS platform
4. Cloud Box - File storage and sharing service
5. Ofy - Furniture e-commerce website
6. Habify - Habit tracking application
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Vinoth_Anand_Gani_Resume.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          >
            Vinoth Anand
          </motion.div>

          <div className="hidden md:flex space-x-8">
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
        </div>
      </div>
    </motion.nav>
  )
}
