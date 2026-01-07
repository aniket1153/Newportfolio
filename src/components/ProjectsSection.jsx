import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const allProjects = [
  {
    title: "E-Commerce Website",
    description: "Full-stack MERN project with shopping cart, payment gateway, and JWT authentication.",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe API"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/aniket/ecommerce",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "Blinkit Clone",
    description: "Real-time grocery delivery platform using MERN stack with Socket.IO.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
    image: "/projects/blinkit.jpg",
    github: "https://github.com/aniket/blinkit-clone",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "Women Safety App",
    description: "Android mobile app to enhance women safety with real-time alerts and location tracking.",
    tech: ["React Native", "Firebase", "Expo"],
    image: "/projects/women-safety.jpg",
    github: "https://github.com/aniket/women-safety",
    live: "#",
    category: "Mobile",
  },
];

// Framer Motion Variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Tech icons mapping
const techIcons = {
  "React.js": <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "React Native": <FaMobileAlt className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-blue-500" />,
};

function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  const categories = ["All", "Full Stack", "Mobile"];

  return (
    <section className="bg-black text-white py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in MERN stack, mobile apps, and full-stack development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group relative hover:shadow-lg hover:border-white/30 transition"
              variants={cardVariant}
            >
              {/* Tech Icons Floating */}
              {project.tech.map((t, index) => (
                <motion.div
                  key={index}
                  className={`absolute text-2xl opacity-60`}
                  style={{
                    top: `${index * 5 + 1}rem`,
                    right: `${index * 5 + 1}rem`,
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {techIcons[t]}
                </motion.div>
              ))}

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded-full text-gray-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectsSection;
