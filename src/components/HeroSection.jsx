import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/MyImage.jpg";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaInstagram, FaMobileAlt, FaLayerGroup, FaCloud } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
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

const techIcons = [
  { icon: <FaReact className="text-blue-400" />, top: "-4", left: "6" },
  { icon: <FaNodeJs className="text-green-500" />, top: "8", right: "-2" },
  { icon: <SiMongodb className="text-green-600" />, bottom: "6", left: "0" },
  { icon: <FaGithub className="text-gray-400" />, bottom: "-2", right: "8" },
];

const pillars = [
  {
    index: "01",
    title: "Mobile",
    icon: <FaMobileAlt />,
    status: "In production",
    text: "Healthcare apps in React Native — API flows, notifications, deep links, and Android debugging.",
    stack: ["React Native", "Android", "Firebase", "REST APIs"],
    accent: "from-cyan-400/25 text-cyan-300 border-cyan-400/30",
    dot: "bg-emerald-400",
  },
  {
    index: "02",
    title: "Full Stack",
    icon: <FaLayerGroup />,
    status: "Shipping",
    text: "MERN products end to end — React interfaces, Express APIs, JWT auth, and the data layer.",
    stack: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    accent: "from-blue-400/25 text-blue-300 border-blue-400/30",
    dot: "bg-emerald-400",
  },
  {
    index: "03",
    title: "DevOps",
    icon: <FaCloud />,
    status: "Learning",
    text: "Building depth in containers, pipelines, and cloud so what I build ships reliably.",
    stack: ["Docker", "CI/CD", "AWS", "Redis"],
    accent: "from-violet-400/25 text-violet-300 border-violet-400/30",
    dot: "bg-amber-400",
  },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <motion.p
            className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.05}
          >
            Pune, Maharashtra, India
          </motion.p>

          <motion.h1
            className="mb-4 text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {name.split(" ").map((word, wordIndex) => (
              <span key={word} className="inline-block whitespace-nowrap">
                {word.split("").map((char, index) => (
                  <motion.span key={`${wordIndex}-${index}`} variants={letter} className="inline-block">
                    {char}
                  </motion.span>
                ))}
                {wordIndex < name.split(" ").length - 1 && <span className="inline-block w-4" />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mb-6 font-mono text-sm text-cyan-300 md:text-base"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
          >
            &lt;SoftwareDeveloper stack=&quot;React Native · MERN&quot; /&gt;
          </motion.p>

          <motion.div
            className="mb-8 max-w-xl overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/70 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.25}
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-xs text-gray-500">aniket.config.js</span>
            </div>
            <pre className="whitespace-pre-wrap break-words px-4 py-4 font-mono text-[12px] leading-6 text-gray-300 sm:px-5 sm:text-[13px] md:text-sm xl:whitespace-pre">
              <code>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{\n"}
                {"  "}<span className="text-gray-400">role</span>:{" "}
                <span className="text-emerald-300">&quot;React Native · Full Stack&quot;</span>,{"\n"}
                {"  "}<span className="text-gray-400">ships</span>:{" "}
                [<span className="text-emerald-300">&quot;mobile apps&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;REST APIs&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;web apps&quot;</span>],{"\n"}
                {"  "}<span className="text-gray-400">now</span>:{" "}
                <span className="text-emerald-300">&quot;healthcare @ eHealthSystem&quot;</span>,{"\n"}
                {"  "}<span className="text-gray-400">learning</span>:{" "}
                [<span className="text-amber-300">&quot;Docker&quot;</span>,{" "}
                <span className="text-amber-300">&quot;CI/CD&quot;</span>,{" "}
                <span className="text-amber-300">&quot;AWS&quot;</span>],{"\n"}
                {"};"}
              </code>
            </pre>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:shadow-[0_0_36px_rgba(34,211,238,0.55)]"
            >
              View Projects
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/Aniket New.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-3 font-mono text-sm text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              ./resume.pdf
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href="https://github.com/aniket1153"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-gray-200 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-joshi-388b81207"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-gray-200 transition hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-sky-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/aniket_joshi_1153/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-gray-200 transition hover:-translate-y-0.5 hover:border-pink-400/60 hover:text-pink-300"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={`absolute text-3xl opacity-70 ${tech.top ? `top-[${tech.top}rem]` : ""} ${tech.bottom ? `bottom-[${tech.bottom}rem]` : ""} ${tech.left ? `left-[${tech.left}rem]` : ""} ${tech.right ? `right-[${tech.right}rem]` : ""}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {tech.icon}
            </motion.div>
          ))}

          <motion.img
            src={img1}
            alt="Aniket Joshi"
            className="h-64 w-64 rounded-full border-4 border-gray-700 object-cover shadow-xl md:h-80 md:w-80"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="mx-auto mt-14 grid w-full max-w-7xl gap-4 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <motion.article
            key={pillar.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur transition hover:border-white/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${pillar.accent} to-transparent opacity-40 blur-2xl transition group-hover:opacity-80`} />

            <div className="relative flex items-start justify-between">
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-white/5 text-xl ${pillar.accent}`}>
                {pillar.icon}
              </span>
              <span className="font-mono text-3xl font-bold text-white/10 transition group-hover:text-white/20">
                {pillar.index}
              </span>
            </div>

            <h2 className="relative mt-5 text-xl font-semibold text-white">{pillar.title}</h2>
            <p className="relative mt-1 inline-flex items-center gap-2 font-mono text-xs text-gray-400">
              <span className={`h-1.5 w-1.5 rounded-full ${pillar.dot}`} />
              {pillar.status}
            </p>
            <p className="relative mt-3 text-sm leading-relaxed text-gray-300">{pillar.text}</p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {pillar.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
