import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

// Skills Data
const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 80 },
  { name: "AWS", icon: <FaAws className="text-yellow-400" />, level: 70 },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" />, level: 85 },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-300" />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" />, level: 85 },
  { name: "SQL / MySQL", icon: <FaDatabase className="text-gray-400" />, level: 75 },
];

// Counters Data
const counters = [
  { title: "Projects", value: 3 },
  { title: "Experience (Months)", value: 6 },
  { title: "Technologies", value: skills.length },
];

// Currently Learning
const learning = ["TypeScript", "Docker", "Next.js", "GraphQL"];

// Framer Motion Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6" id="skills">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A strong technical skillset focused on building scalable, high-performance, and user-centric web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              data-aos="zoom-in"
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:shadow-lg hover:border-white/30 transition relative overflow-hidden"
            >
              {/* Icon + Skill Name */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Neon Hover Glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400/10 opacity-0 group-hover:opacity-30 transition duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {counters.map((counter, i) => (
            <motion.div key={i} variants={item} data-aos="fade-up">
              <p className="text-4xl md:text-5xl font-bold text-blue-400">
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: counter.value }}
                  transition={{ duration: 1 }}
                >
                  {counter.value}
                </motion.span>
              </p>
              <p className="text-gray-400 mt-2">{counter.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
          <div className="flex flex-wrap gap-4">
            {learning.map((tech, i) => (
              <motion.span
                key={i}
                variants={item}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white transition cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
