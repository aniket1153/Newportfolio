import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Trainee Software Engineer",
    company: "REGO Digital Solutions Pvt Ltd",
    duration: "Feb 2024 – Nov 2024",
    description:
      "Worked on frontend and backend development. Built REST APIs, assisted in JWT authentication, debugged issues, and improved application performance.",
    icon: <FaBriefcase />,
  },
  {
    title: "Master of Computer Applications (MCA)",
    company: "University / Institute",
    duration: "2023 – 2025",
    description:
      "Focused on MERN stack development, Cloud Computing, AWS, AI & ML fundamentals, and software engineering concepts.",
    icon: <FaGraduationCap />,
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A snapshot of my professional experience and academic journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-8 space-y-16">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Icon */}
              <div className="absolute -left-4 top-1 bg-black border border-white/30 rounded-full p-2 text-white">
                {item.icon}
              </div>

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.company} · {item.duration}
                </p>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
