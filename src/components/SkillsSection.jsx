import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAndroid,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiVite,
  SiRedux,
  SiMui,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, level: 90 },
      { name: "React.js", icon: <FaReact className="text-sky-400" />, level: 90 },
      { name: "React Native", icon: <FaReact className="text-cyan-300" />, level: 86 },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 88 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 86 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 88 },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" />, level: 80 },
      { name: "Material UI", icon: <SiMui className="text-blue-400" />, level: 78 },
      { name: "Redux", icon: <SiRedux className="text-violet-400" />, level: 82 },
      { name: "Vite", icon: <SiVite className="text-yellow-400" />, level: 84 },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 86 },
      { name: "Express.js", icon: <SiExpress className="text-gray-200" />, level: 84 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 84 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" />, level: 76 },
      { name: "Redis", icon: <SiRedis className="text-red-500" />, level: 62, learning: true },
    ],
  },
  {
    title: "Mobile & Cloud",
    items: [
      { name: "Android", icon: <FaAndroid className="text-green-400" />, level: 80 },
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" />, level: 78 },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 86 },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" />, level: 86 },
      { name: "Docker", icon: <SiDocker className="text-sky-400" />, level: 60, learning: true },
      { name: "AWS", icon: <FaAws className="text-amber-300" />, level: 58, learning: true },
      { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: 84 },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300" />, level: 76 },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const SkillsSection = () => {
  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="skills">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Skills & Technologies</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            The stack I use to build web apps, React Native products, and the APIs behind them.
          </p>
        </div>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-sm uppercase tracking-[0.22em] text-cyan-300">{group.title}</h3>
              <motion.div
                className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/55 p-3.5 backdrop-blur transition hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] sm:p-5"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-center gap-2.5 sm:gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl shadow-[0_0_18px_rgba(59,130,246,0.15)] sm:h-12 sm:w-12 sm:text-2xl">
                        {skill.icon}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold leading-tight sm:text-base">{skill.name}</h4>
                        {skill.learning && (
                          <p className="text-[11px] uppercase tracking-wide text-cyan-300">Learning</p>
                        )}
                      </div>
                    </div>
                    <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/10 sm:mt-5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
