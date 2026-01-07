import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/MyImage.jpg";
import { FaReact, FaNodeJs, FaAws, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const name = "Aniket Joshi";
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Floating tech icons data
const techIcons = [
  { icon: <FaReact className="text-blue-400" />, top: "-4", left: "10" },
  { icon: <FaNodeJs className="text-green-500" />, top: "10", right: "-4" },
  { icon: <SiMongodb className="text-green-600" />, top: "-4", left: "20" },
  { icon: <SiTailwindcss className="text-blue-500" />, bottom: "10", right: "10" },
  { icon: <FaGithub className="text-gray-400" />, bottom: "-4", right: "16" },
];

function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 pt-16 md:pt-7 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">

        {/* Left Content */}
        <div>
          <motion.h2
            className="text-gray-400 text-3xl md:text-lg mb-2"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-wide"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className={char === " " ? "inline-block w-4" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg leading-relaxed mb-6 max-w-xl"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
          >
            A passionate <span className="text-white font-semibold">MERN Stack Developer</span>{" "}
            focused on building high-performance, scalable, and user-friendly web applications.
            I love turning complex problems into elegant digital solutions.
          </motion.p>

          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
          >
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              View Projects →
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          {/* Floating Tech Icons */}
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={`absolute ${tech.top ? `top-[${tech.top}rem]` : ""} ${tech.bottom ? `bottom-[${tech.bottom}rem]` : ""} ${tech.left ? `left-[${tech.left}rem]` : ""} ${tech.right ? `right-[${tech.right}rem]` : ""} text-3xl opacity-70`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {tech.icon}
            </motion.div>
          ))}

          {/* Profile Image */}
          <motion.img
            src={img1}
            alt="Aniket Joshi"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-700 shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
