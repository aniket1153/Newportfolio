import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaShoppingBag, FaBolt, FaClipboardList, FaCheck } from "react-icons/fa";
import img1 from "../assets/Project1.png";
import img2 from "../assets/Project2.gif";

const allProjects = [
  {
    id: "outfithub",
    title: "OutfitHub",
    type: "E-commerce platform",
    icon: <FaShoppingBag />,
    role: "Full Stack Developer",
    description: "Online shopping with product browsing, product management, and backend API integration.",
    features: ["MERN architecture", "Product management", "Cloudinary image handling", "Responsive frontend"],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    image: img1,
    url: "outfit-frontend-six.vercel.app",
    github: "https://github.com/aniket1153/outfit-frontend",
    live: "https://outfit-frontend-six.vercel.app",
    category: "Full Stack",
    accent: "cyan",
  },
  {
    id: "quickpick",
    title: "QuickPick",
    type: "Quick-commerce application",
    icon: <FaBolt />,
    role: "Full Stack Developer",
    description: "A Blinkit-style shopping flow for browsing products by category and checking out through a backend.",
    features: ["Category-based products", "Shopping workflow", "REST API integration", "MongoDB data model"],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: img2,
    url: "quickpick-frontend.vercel.app",
    live: "https://quickpick-frontend.vercel.app",
    category: "Full Stack",
    accent: "emerald",
  },
  {
    id: "safety",
    title: "Women Safety Application",
    type: "Android application",
    icon: <FaShieldAlt />,
    role: "Android Developer",
    description: "An Android app built around safety-oriented flows for women.",
    features: ["Java Android UI", "Android components", "Safety-oriented workflows"],
    tech: ["Java", "Android"],
    mock: "phone",
    category: "Mobile",
    accent: "rose",
  },
  {
    id: "complaints",
    title: "Complaint Management System",
    type: "Full stack web application",
    icon: <FaClipboardList />,
    role: "Full Stack Developer",
    description: "Create and manage complaints through a MERN interface and REST services.",
    features: ["Complaint creation", "Complaint management", "REST APIs", "MongoDB storage"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    mock: "dashboard",
    url: "localhost:3000/complaints",
    category: "Full Stack",
    accent: "violet",
  },
];

const accents = {
  cyan: { text: "text-cyan-300", border: "hover:border-cyan-400/50", glow: "hover:shadow-[0_0_50px_rgba(34,211,238,0.18)]", bg: "from-cyan-500/30" },
  emerald: { text: "text-emerald-300", border: "hover:border-emerald-400/50", glow: "hover:shadow-[0_0_50px_rgba(52,211,153,0.18)]", bg: "from-emerald-500/30" },
  rose: { text: "text-rose-300", border: "hover:border-rose-400/50", glow: "hover:shadow-[0_0_50px_rgba(251,113,133,0.18)]", bg: "from-rose-500/30" },
  violet: { text: "text-violet-300", border: "hover:border-violet-400/50", glow: "hover:shadow-[0_0_50px_rgba(167,139,250,0.18)]", bg: "from-violet-500/30" },
};

const categories = ["All", "Full Stack", "Mobile"];

function PhoneMock({ accent }) {
  return (
    <div className={`flex h-full items-center justify-center bg-gradient-to-br ${accent.bg} via-black to-black`}>
      <div className="h-48 w-24 rounded-[1.4rem] border-2 border-white/20 bg-black/80 p-2 shadow-2xl transition duration-700 group-hover:-translate-y-2 group-hover:rotate-[-4deg]">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/20" />
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/80 text-xs font-bold text-white shadow-[0_0_24px_rgba(244,63,94,0.7)]">
          SOS
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 rounded bg-white/15" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function DashboardMock({ accent }) {
  const rows = [
    ["#1042", "Open", "bg-amber-400"],
    ["#1041", "In progress", "bg-sky-400"],
    ["#1040", "Resolved", "bg-emerald-400"],
    ["#1039", "Resolved", "bg-emerald-400"],
  ];
  return (
    <div className={`flex h-full gap-3 bg-gradient-to-br ${accent.bg} via-black to-black p-4`}>
      <div className="w-14 space-y-2 rounded-lg bg-white/5 p-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-2 rounded ${i === 0 ? "bg-violet-400/70" : "bg-white/15"}`} />
        ))}
      </div>
      <div className="flex-1 space-y-2 transition duration-700 group-hover:translate-x-1">
        <div className="grid grid-cols-3 gap-2">
          {["24", "9", "15"].map((n) => (
            <div key={n} className="rounded-lg bg-white/5 p-2">
              <p className="font-mono text-sm font-bold text-white">{n}</p>
              <div className="mt-1 h-1 rounded bg-white/15" />
            </div>
          ))}
        </div>
        {rows.map(([id, status, dot]) => (
          <div key={id} className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 font-mono text-[10px] text-gray-300">
            <span>{id}</span>
            <span className="inline-flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Preview({ project, accent }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
      />
    );
  }
  if (project.mock === "phone") return <PhoneMock accent={accent} />;
  return <DashboardMock accent={accent} />;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProjects : allProjects.filter((project) => project.category === filter);

  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm text-cyan-300">$ ls ./projects</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="text-gray-400">
              Things I’ve built on my own — e-commerce, quick-commerce, Android, and full-stack tools. My healthcare work is in the next section.
            </p>
          </div>

          <div className="flex rounded-xl border border-white/10 bg-black/60 p-1 font-mono text-sm backdrop-blur">
            {categories.map((category) => {
              const count = category === "All" ? allProjects.length : allProjects.filter((p) => p.category === category).length;
              const active = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`relative rounded-lg px-4 py-2 transition ${active ? "text-black" : "text-gray-400 hover:text-white"}`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">
                    {category.toLowerCase().replace(" ", "-")}
                    <span className={`ml-1.5 text-xs ${active ? "text-black/60" : "text-gray-600"}`}>{count}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid gap-8 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const accent = accents[project.accent];
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/65 backdrop-blur transition duration-500 ${accent.border} ${accent.glow}`}
                >
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    <span className="ml-3 truncate rounded-md bg-black/50 px-3 py-0.5 font-mono text-[11px] text-gray-500">
                      {project.mock === "phone" ? "android · apk" : project.url}
                    </span>
                  </div>

                  <div className="relative h-56 overflow-hidden">
                    <Preview project={project} accent={accent} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-md border border-white/15 bg-black/60 px-2 py-1 font-mono text-[11px] text-gray-300 backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start gap-3">
                      <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${accent.text}`}>
                        {project.icon}
                      </span>
                      <div>
                        <p className={`font-mono text-xs uppercase tracking-wider ${accent.text}`}>{project.type}</p>
                        <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-gray-300">{project.description}</p>
                    <p className="mt-3 font-mono text-xs text-gray-500">
                      role: <span className="text-gray-300">{project.role}</span>
                    </p>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                          <FaCheck className="shrink-0 text-[10px] text-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>

                    {(project.github || project.live) && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-6">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] transition hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                          >
                            Live Demo <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-white/40 hover:text-white"
                          >
                            <FaGithub /> Source
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
