import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SplitText from "./reactbits/SplitText";
import HangingIdCard from "./HangingIdCard";
import { FaGithub, FaLinkedin, FaInstagram, FaMobileAlt, FaLayerGroup, FaCloud, FaMapMarkerAlt, FaBriefcase, FaArrowRight, FaDownload } from "react-icons/fa";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const name = "Aniket Joshi";

const facts = [
  { icon: <FaBriefcase />, label: "Currently", value: "eHealthSystem" },
  { icon: <FaMobileAlt />, label: "Builds", value: "Mobile & web apps" },
  { icon: <FaCloud />, label: "Learning", value: "Docker · CI/CD · AWS" },
];

const socials = [
  { href: "https://github.com/aniket1153", label: "GitHub", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/aniket-joshi-388b81207", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://www.instagram.com/aniket_joshi_1153/", label: "Instagram", icon: <FaInstagram /> },
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
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="scroll-mt-28 relative overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.p
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-400"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.05}
          >
            <FaMapMarkerAlt className="text-cyan-300/80" />
            Pune, Maharashtra, India
          </motion.p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {reduceMotion ? (
              name
            ) : (
              <SplitText
                tag="span"
                text={name}
                splitType="chars"
                delay={60}
                duration={1}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
                rootMargin="0px"
                className="pb-1"
              />
            )}
          </h1>

          <motion.p
            className="mb-6 text-xl font-medium text-gray-200 md:text-2xl"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
          >
            Software Developer <span className="text-gray-500">—</span>{" "}
            <span className="text-cyan-300">React Native &amp; Full Stack</span>
          </motion.p>

          <motion.p
            className="mb-8 max-w-xl leading-relaxed text-gray-400 md:text-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.22}
          >
            I build mobile apps, REST APIs, and web apps — from the screens people use to the services behind them.
            Right now I'm working on healthcare products at eHealthSystem.
          </motion.p>

          <motion.dl
            className="mb-9 grid max-w-2xl grid-cols-1 gap-4 border-y border-white/10 py-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3 sm:px-5 sm:first:pl-0">
                <span className="mt-0.5 text-lg text-cyan-300/80">{fact.icon}</span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-gray-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-gray-200">{fact.value}</dd>
                </div>
              </div>
            ))}
          </motion.dl>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.38}
          >
            <a
              href="#projects"
              className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              View Projects
              <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
            </a>
            <a
              href="/Aniket New.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-gray-100 transition hover:border-white/35 hover:bg-white/5"
            >
              <FaDownload className="text-xs" />
              Download Resume
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-lg text-gray-400 transition hover:border-white/30 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <HangingIdCard />
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
