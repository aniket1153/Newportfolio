import React from "react";
import { motion } from "framer-motion";
import {
  FaUserAstronaut,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

const facts = [
  { icon: <FaMapMarkerAlt />, label: "Based in", value: "Pune, India" },
  { icon: <FaBriefcase />, label: "Now", value: "eHealthSystem Healthcare" },
  { icon: <FaGraduationCap />, label: "Education", value: "MCA, Vishwakarma University" },
  { icon: <FaCode />, label: "Focus", value: "Mobile · Full Stack · DevOps" },
];

const values = [
  "Understand the whole system, not just the screen",
  "Debug from the network up",
  "Build things that hold up in production",
];

function AboutSection() {
  return (
    <section className="scroll-mt-28 overflow-x-clip px-6 py-24 text-white" id="about">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[340px_1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/60 p-6 backdrop-blur lg:sticky lg:top-28"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ margin: "-10px" }}
              />
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-[3px] shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#05070c] text-5xl text-cyan-300">
                  <FaUserAstronaut />
                </div>
              </div>
              <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#05070c]">
                <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">Aniket Joshi</h3>
            <p className="mt-1 font-mono text-xs text-cyan-300">@aniket1153</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              Open to opportunities
            </p>
          </div>

          <ul className="relative mt-6 space-y-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                <span className="text-cyan-300">{fact.icon}</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">{fact.label}</p>
                  <p className="text-sm text-gray-200">{fact.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-mono text-sm text-cyan-300">// about.me</p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Me</h2>

          <div className="space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
            <p>
              I’m Aniket Joshi, a software developer based in Pune. I build web and mobile applications with React Native, React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              My journey started with full-stack development and kept widening — into mobile apps, backend APIs, authentication, caching, and how software actually ships. I like understanding a product from the interface through the API, the database, and the production environment.
            </p>
            <p>
              Today I work on healthcare applications at <span className="text-white">eHealthSystem Healthcare Limited</span>, mostly in React Native and the backend integrations behind it. Before that, my internship at <span className="text-white">DevifAI</span> was where I learned to ship MERN features, wire up JWT authentication, and chase down bugs across the frontend and backend.
            </p>
            <p>
              I’m going deeper on DevOps and cloud — Docker, CI/CD, AWS, Redis, system design — and on practical AI that can sit inside real web and mobile products. Outside of shipping code, I’ve published research on cybersecurity for AI systems and served as my MCA class representative and placement coordinator.
            </p>
            <p>
              What I care about most is building reliable products that solve real problems, and getting a little better as a full-stack and mobile developer every week.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map((value, index) => (
              <div key={value} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-xs text-cyan-300">0{index + 1}</p>
                <p className="mt-2 text-sm text-gray-200">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
