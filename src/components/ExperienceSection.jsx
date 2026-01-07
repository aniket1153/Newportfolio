import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Intern Software Developer",
    company: "DevifAI Solutions Pvt. Ltd.",
    duration: "June 2025 – Dec 2025",
    description:
      "Worked on frontend and backend development. Built REST APIs, assisted in JWT authentication, debugged issues, and improved application performance.",
    icon: <FaBriefcase />,
  },
  {
    title: "Master of Computer Applications (MCA)",
    company: "Vishwakarma University, Pune",
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
          viewport={{ once: true }}
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
        <div className="relative pl-8 md:pl-12 space-y-16">

          {/* Timeline Line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/30 to-transparent" />

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Icon */}
              <div className="absolute -left-1 md:-left-2 top-3 z-20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center border border-blue-400/40 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <span className="text-white text-lg">
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* Card Wrapper (Gradient Always Slightly Visible) */}
              <div className="relative rounded-2xl p-[1px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-400/30 opacity-60" />

                {/* Card */}
                <div className="relative bg-black/80 backdrop-blur rounded-2xl p-6 md:p-7 border border-white/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {item.company} · {item.duration}
                  </p>

                  <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
