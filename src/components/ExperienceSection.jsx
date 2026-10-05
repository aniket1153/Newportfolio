import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaLaptopCode, FaCheck } from "react-icons/fa";

const roles = [
  {
    hash: "a7f3e21",
    branch: "main",
    current: true,
    icon: <FaHeartbeat />,
    title: "Software Developer — React Native",
    company: "eHealthSystem Healthcare Limited",
    duration: "Feb 2026 – Present",
    type: "Full-time · Healthcare",
    summary:
      "Building and maintaining healthcare mobile apps in React Native — plus the API, auth, and Android debugging that comes with them.",
    groups: [
      {
        label: "Build",
        points: [
          "React Native features and reusable mobile UI components",
          "REST API integration, authentication flows, and healthcare user workflows",
          "Push notifications and deep-link flows with Firebase",
        ],
      },
      {
        label: "Debug",
        points: [
          "Android build and runtime issues in Android Studio",
          "Network and API failures with Postman, proxy, and SSL inspection",
          "API security behaviour across environments",
        ],
      },
      {
        label: "Ship",
        points: [
          "Staging and production testing, APK builds, and release checks",
          "Git feature branches with backend and partner teams",
        ],
      },
    ],
    tech: ["React Native", "JavaScript", "Redux", "REST APIs", "Axios", "Firebase", "Android Studio", "Postman", "Git", "Node.js", "Express.js", "MongoDB"],
    accent: "cyan",
  },
  {
    hash: "3c91b08",
    branch: "internship",
    current: false,
    icon: <FaLaptopCode />,
    title: "Full Stack Developer Intern",
    company: "DevifAI",
    duration: "28 May 2025 – 30 Nov 2025",
    type: "Internship · MERN",
    summary:
      "Six months of shipping real MERN features — from React interfaces to Express APIs, JWT auth, and performance fixes.",
    groups: [
      {
        label: "Build",
        points: [
          "Web applications with React.js, Node.js, Express.js, and MongoDB",
          "REST APIs and JWT-based authentication",
        ],
      },
      {
        label: "Debug",
        points: [
          "Frontend and backend bugs across the full stack",
          "Application performance improvements",
        ],
      },
      {
        label: "Ship",
        points: ["API testing in Postman, features and fixes through Git and GitHub"],
      },
    ],
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Git", "GitHub", "Postman"],
    accent: "violet",
  },
];

const accents = {
  cyan: {
    ring: "border-cyan-400/50 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.45)]",
    glow: "bg-cyan-400/15",
    label: "text-cyan-300",
    hover: "hover:border-cyan-400/40",
  },
  violet: {
    ring: "border-violet-400/50 text-violet-300 shadow-[0_0_24px_rgba(167,139,250,0.4)]",
    glow: "bg-violet-500/15",
    label: "text-violet-300",
    hover: "hover:border-violet-400/40",
  },
};

const ExperienceSection = () => {
  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="experience">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm text-cyan-300">$ git log --career</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Experience</h2>
          <p className="max-w-2xl text-gray-400">
            From a MERN internship to full-time healthcare mobile development — 1+ year of building, debugging, and shipping.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-cyan-400/70 via-violet-400/40 to-transparent sm:left-6 md:left-8" />

          <div className="space-y-12">
            {roles.map((role, index) => {
              const accent = accents[role.accent];
              return (
                <motion.article
                  key={role.company}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16 md:pl-24"
                >
                  <div className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border bg-[#05070c] text-lg sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl md:left-2 ${accent.ring}`}>
                    {role.icon}
                  </div>

                  <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/65 backdrop-blur transition ${accent.hover}`}>
                    <div className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl ${accent.glow}`} />

                    <div className="relative flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-[11px] text-gray-400 sm:gap-3 sm:px-6 sm:text-xs md:px-8">
                      <span className="text-amber-300">commit {role.hash}</span>
                      <span className="rounded-md border border-white/10 px-2 py-0.5">{role.branch}</span>
                      {role.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          HEAD · current
                        </span>
                      )}
                      <span className="ml-auto">{role.duration}</span>
                    </div>

                    <div className="relative p-4 sm:p-6 md:p-8">
                      <p className={`font-mono text-xs uppercase tracking-wider ${accent.label}`}>{role.type}</p>
                      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{role.title}</h3>
                      <p className="mt-1 text-gray-400">{role.company}</p>
                      <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">{role.summary}</p>

                      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {role.groups.map((group) => (
                          <div key={group.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                            <p className={`mb-3 font-mono text-xs ${accent.label}`}>{`> ${group.label.toLowerCase()}`}</p>
                            <ul className="space-y-2.5">
                              {group.points.map((point) => (
                                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                                  <FaCheck className="mt-1 shrink-0 text-[10px] text-emerald-400" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {role.tech.map((item) => (
                          <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300 transition hover:border-white/30 hover:text-white">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
