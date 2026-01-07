import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

// Counters data
const counters = [
  { title: "Projects", value: 3 },
  { title: "Experience (Months)", value: 6 },
  { title: "Technologies", value: 10 },
];

// Timeline data
const timeline = [
  {
    title: "Master of Computer Applications (MCA)",
    subtitle: "University Name - 2023",
    icon: <FaGraduationCap />,
    description: "Specialized in software development, cloud computing, and web technologies.",
  },
  {
    title: "Internship at DevifAI Solutions Pvt. Ltd.",
    subtitle: "June 2025 - Dec 2025",
    icon: <FaBriefcase />,
    description: "Worked on backend and frontend tasks using MERN stack, AWS, and RESTful APIs.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-6" id="about">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About & Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A brief overview of my journey, experience, and key milestones.
          </p>
        </div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {counters.map((counter, i) => (
            <motion.div key={i} variants={item}>
              <p className="text-4xl md:text-5xl font-bold text-blue-400">{counter.value}</p>
              <p className="text-gray-400 mt-2">{counter.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="border-l-2 border-gray-700 absolute h-full left-6 md:left-1/2 -translate-x-1/2"></div>
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              className="mb-12 flex flex-col md:flex-row items-start md:items-center relative"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon */}
              <div className="absolute -left-6 md:left-1/2 md:-translate-x-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                {event.icon}
              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:w-1/2 ml-12 md:ml-0 md:pl-12 group hover:shadow-lg hover:border-white/30 transition">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 italic mb-2">{event.subtitle}</p>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
