import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaRobot,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaUsers,
  FaCheck,
  FaClipboardList,
  FaDraftingCompass,
  FaPencilRuler,
  FaCode,
  FaPlug,
  FaVial,
  FaBug,
  FaCodeBranch,
  FaCube,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const offers = [
  {
    title: "Web applications",
    icon: <FaGlobe />,
    color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
    items: ["React applications", "Admin dashboards", "E-commerce", "Management systems", "SaaS interfaces"],
  },
  {
    title: "Mobile applications",
    icon: <FaMobileAlt />,
    color: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    items: ["React Native on Android", "API-integrated apps", "Authentication flows", "Push notifications", "Deep linking"],
  },
  {
    title: "Backend systems",
    icon: <FaServer />,
    color: "text-violet-300 border-violet-400/30 bg-violet-400/10",
    items: ["REST APIs", "Authentication", "CRUD applications", "MongoDB-backed apps", "API integrations"],
  },
  {
    title: "Developer infrastructure",
    icon: <FaTools />,
    color: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    items: ["Docker", "CI/CD pipelines", "Cloud deployment", "Redis caching"],
    growing: true,
  },
];

const topics = [
  "Generative AI",
  "AI APIs",
  "AI agents",
  "LLM fundamentals",
  "Prompt engineering",
  "AI-powered applications",
  "AI in web apps",
  "AI in mobile apps",
  "AI-assisted development",
];

const schools = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "Vishwakarma University, Pune",
    detail: "Completed 2025",
    icon: <FaGraduationCap />,
    areas: ["Software development", "Web development", "Database systems", "Computer networks", "Software engineering", "Project development"],
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "H.V. Desai College, SPPU",
    detail: "CGPA 8.10",
    icon: <FaUniversity />,
    areas: [],
  },
];

const steps = [
  { name: "Requirement", icon: <FaClipboardList /> },
  { name: "Planning", icon: <FaDraftingCompass /> },
  { name: "UI / architecture", icon: <FaPencilRuler /> },
  { name: "Development", icon: <FaCode /> },
  { name: "API integration", icon: <FaPlug /> },
  { name: "Testing", icon: <FaVial /> },
  { name: "Debugging", icon: <FaBug /> },
  { name: "Git / review", icon: <FaCodeBranch /> },
  { name: "Build", icon: <FaCube /> },
  { name: "Deployment", icon: <FaRocket /> },
  { name: "Monitoring", icon: <FaChartLine /> },
];

function SectionHead({ command, title, text }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-cyan-300">{command}</p>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="text-gray-400">{text}</p>}
    </div>
  );
}

function ProfileDetails() {
  return (
    <>
      <section className="scroll-mt-28 px-6 py-24 text-white" id="build">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            command="$ ./build --list"
            title="What I can build"
            text="Web, mobile, and backend work I already ship — plus the infrastructure I’m growing into."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offers.map((group, i) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border bg-black/60 p-6 backdrop-blur transition ${
                  group.growing ? "border-dashed border-amber-400/30" : "border-white/10 hover:border-white/25"
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition group-hover:scale-110 ${group.color}`}>
                  {group.icon}
                </span>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-semibold">{group.title}</h3>
                  {group.growing && (
                    <span className="rounded border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">
                      growing
                    </span>
                  )}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <FaCheck className={`shrink-0 text-[10px] ${group.growing ? "text-amber-400" : "text-emerald-400"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 px-6 pb-24 text-white" id="ai">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.3fr_1fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-violet-400/25 bg-black/65 p-7 backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-xl text-violet-300"
                >
                  <FaRobot />
                </motion.span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-violet-400/30 bg-violet-400/10 px-2 py-0.5 font-mono text-[11px] text-violet-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  exploring
                </span>
              </div>
              <h2 className="mt-5 bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-3xl font-bold text-transparent">
                AI and GenAI
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
                Not an AI-engineer claim. This is study and early integration: models, prompts, and where AI can genuinely help a web or mobile product.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-sm text-violet-100 transition hover:border-violet-300/50 hover:bg-violet-400/15"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            id="research"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/65 backdrop-blur"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[11px] text-gray-500">
              <FaFileAlt className="text-cyan-300" />
              research/paper.pdf
              <span className="ml-auto text-cyan-300">published</span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Research</p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">Cyber Security for AI Systems: A Survey</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                A survey of cybersecurity challenges and considerations around artificial intelligence systems.
              </p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-gray-300">IRJMETS</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-gray-300">2024</span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="scroll-mt-28 px-6 pb-24 text-white" id="education">
        <div className="mx-auto max-w-7xl">
          <SectionHead command="$ cat education.md" title="Education" />
          <div className="grid gap-5 lg:grid-cols-3">
            {schools.map((school, i) => (
              <motion.article
                key={school.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur transition hover:border-cyan-400/30"
              >
                <span className="pointer-events-none absolute -bottom-3 right-3 font-mono text-7xl font-bold text-white/[0.04]">
                  {school.short}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-xl text-cyan-300">
                  {school.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{school.degree}</h3>
                <p className="mt-1 text-gray-300">{school.school}</p>
                <span className="mt-3 inline-block rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-xs text-emerald-300">
                  {school.detail}
                </span>
                {school.areas.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {school.areas.map((area) => (
                      <span key={area} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-gray-400">
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur transition hover:border-violet-400/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-xl text-violet-300">
                <FaUsers />
              </span>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-violet-300">Leadership</p>
              <h3 className="mt-1 text-xl font-semibold">MCA CR & Placement Coordinator</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Coordinated between students and the college placement team, and supported placement and academic activities with students and faculty.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 px-6 pb-24 text-white" id="workflow">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            command="$ pipeline run --workflow"
            title="How I work"
            text="Every feature goes through the same pipeline — from requirement to monitoring."
          />

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[11px] text-gray-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-300">
                <FaCheck className="text-[9px]" /> pipeline passed
              </span>
              <span>· 11 stages</span>
              <span className="ml-auto">workflow.yml</span>
            </div>

            <div className="p-6 md:p-8">
              <ol className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-11">
                {steps.map((step, index) => (
                  <motion.li
                    key={step.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {index < steps.length - 1 && (
                      <span className="absolute left-[calc(50%+26px)] top-[22px] hidden h-px w-[calc(100%-40px)] bg-gradient-to-r from-emerald-400/60 to-emerald-400/10 lg:block" />
                    )}
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-[#05070c] text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.2)] transition group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.5)]">
                      {step.icon}
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[8px] text-black">
                        <FaCheck />
                      </span>
                    </span>
                    <span className="mt-3 font-mono text-[10px] text-gray-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="mt-0.5 text-xs leading-snug text-gray-200">{step.name}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileDetails;
