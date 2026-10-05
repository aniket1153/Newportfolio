import React from "react";
import { motion } from "framer-motion";
import {
  FaIdCard,
  FaFileMedical,
  FaNotesMedical,
  FaRunning,
  FaLandmark,
  FaPills,
  FaBookMedical,
  FaBrain,
  FaUserMd,
  FaShieldVirus,
  FaBell,
  FaFolderOpen,
  FaMobileAlt,
  FaPlug,
  FaLock,
  FaLink,
  FaAndroid,
  FaCodeBranch,
  FaNetworkWired,
  FaHeartbeat,
  FaUserShield,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const modules = [
  { name: "ABHA", icon: <FaIdCard />, color: "text-cyan-300" },
  { name: "Health Records", icon: <FaFileMedical />, color: "text-sky-300" },
  { name: "Reports", icon: <FaNotesMedical />, color: "text-blue-300" },
  { name: "Fitness", icon: <FaRunning />, color: "text-emerald-300" },
  { name: "Government Schemes", icon: <FaLandmark />, color: "text-amber-300" },
  { name: "Generic Medicine", icon: <FaPills />, color: "text-pink-300" },
  { name: "Drug Directory", icon: <FaBookMedical />, color: "text-rose-300" },
  { name: "Mental Health", icon: <FaBrain />, color: "text-violet-300" },
  { name: "Doctors", icon: <FaUserMd />, color: "text-teal-300" },
  { name: "Preventive Health", icon: <FaShieldVirus />, color: "text-lime-300" },
  { name: "Notifications", icon: <FaBell />, color: "text-yellow-300" },
  { name: "Health Documents", icon: <FaFolderOpen />, color: "text-orange-300" },
];

const contribution = [
  { icon: <FaMobileAlt />, title: "Mobile features", text: "React Native feature development and mobile UI" },
  { icon: <FaPlug />, title: "API integration", text: "Wiring and debugging the APIs the app depends on" },
  { icon: <FaLock />, title: "Auth flows", text: "Authentication-related screens and flows" },
  { icon: <FaLink />, title: "Notifications & deep links", text: "Push notifications and deep-link handling" },
  { icon: <FaAndroid />, title: "Android & releases", text: "Android debugging, APK testing, and staging checks" },
  { icon: <FaCodeBranch />, title: "Git & production", text: "Branch work and production issue investigation" },
  { icon: <FaNetworkWired />, title: "Network debugging", text: "Proxy, SSL, and network-level investigation" },
  { icon: <SiFirebase />, title: "Firebase & workflows", text: "Firebase integration and healthcare workflows" },
];

const stack = ["React Native", "JavaScript", "Redux", "REST APIs", "Axios", "Firebase", "Node.js", "Git", "Android"];

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[250px]">
      <div className="absolute -inset-10 rounded-full bg-cyan-400/20 blur-3xl" />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[2.5rem] border-[6px] border-white/15 bg-[#05070c] p-3 shadow-[0_0_60px_rgba(34,211,238,0.25)]"
      >
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/15" />

        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-violet-600/30 p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-cyan-200">
              <FaHeartbeat />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Setu</p>
              <p className="text-[10px] text-cyan-100/70">Your health, in one place</p>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-cyan-300"
              animate={{ width: ["20%", "78%", "20%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {modules.slice(0, 9).map((module, i) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-2.5"
            >
              <span className={`text-base ${module.color}`}>{module.icon}</span>
              <span className="w-full truncate px-1 text-center text-[8px] text-gray-400">{module.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/5 px-3 py-2">
          <FaBell className="text-xs text-yellow-300" />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
            <div className="h-1.5 w-1/2 rounded bg-white/10" />
          </div>
        </div>

        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/20" />
      </motion.div>
      <p className="mt-6 text-center font-mono text-[11px] text-gray-500">Illustration · not a real app screen</p>
    </div>
  );
}

function SetuSection() {
  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="professional-work">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-black/65 backdrop-blur">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center gap-3 border-b border-white/10 px-6 py-3 font-mono text-xs text-gray-400 md:px-10">
            <span className="text-cyan-300">~/work/setu</span>
            <span className="rounded-md border border-white/10 px-2 py-0.5">healthtech</span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              active
            </span>
            <span className="ml-auto">eHealthSystem Healthcare Limited</span>
          </div>

          <div className="relative grid items-center gap-12 p-6 md:p-10 lg:grid-cols-[1fr_320px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-sm text-cyan-300">// professional work · featured</p>
              <h2 className="mt-3 bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                Setu
              </h2>
              <p className="mt-3 text-lg text-gray-200">Healthcare platform · Software Developer, React Native</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-gray-300">
                Setu brings records, reports, doctors, medicines, fitness, mental health, and government health schemes together in one mobile app. I help build and maintain it in React Native, from the screens through the API flows and Android releases.
              </p>

              <div className="mt-5 inline-flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-sm text-amber-100/90">
                <FaUserShield className="mt-0.5 shrink-0 text-amber-300" />
                <span>Public overview of my contribution only — no internal screens, credentials, patient data, or private architecture.</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
                {[
                  ["12", "app modules"],
                  ["Android", "platform"],
                  ["APK", "release testing"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="break-words text-sm font-bold text-white sm:text-base">{value}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <PhoneMock />
          </div>

          <div className="relative border-t border-white/10 p-6 md:p-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Areas I work around</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {modules.map((module, i) => (
                <motion.div
                  key={module.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <span className={`text-lg transition group-hover:scale-110 ${module.color}`}>{module.icon}</span>
                  <span className="text-sm text-gray-200">{module.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative border-t border-white/10 p-6 md:p-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">My contribution</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contribution.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SetuSection;
