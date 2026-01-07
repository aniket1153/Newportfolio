import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import img1 from "../assets/Project1.png";
import img2 from "../assets/Project2.gif";
import img3 from "../assets/Project3.jpeg";

const allProjects = [
  {
    title: "Outfit E-commerce",
    description:
      "Full-stack MERN project with shopping cart, payment gateway, and JWT authentication.",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe API"],
    image: img1,
    github: "https://github.com/aniket1153/outfit-frontend.git",
    live: "https://outfit-frontend-six.vercel.app",
    category: "Full Stack",
  },
  {
    title: "Blinkit Clone",
    description:
      "Real-time grocery delivery platform using MERN stack with Socket.IO.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
    image: img2,
    github: "https://github.com/aniket/blinkit-clone",
    live: "https://quickpick-frontend.vercel.app",
    category: "Full Stack",
  },
  {
    title: "Basic Food Delivery App",
    description:
      "Android mobile app showcasing core UI, navigation, and backend integration.",
    tech: ["React Native", "Firebase"],
    image: img3,
    github: "https://github.com/aniket/women-safety",
    live: "#",
    category: "Mobile",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const techIcons = {
  "React.js": <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  "React Native": <FaMobileAlt />,
  "Tailwind CSS": <SiTailwindcss />,
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "Mobile"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="bg-black text-white py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Carefully crafted projects demonstrating real-world development
            skills and production-level thinking.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -10 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur overflow-hidden group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
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
