import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaReact,
  FaExchangeAlt,
  FaNodeJs,
  FaKey,
  FaBolt,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaUserCheck,
  FaUserLock,
  FaShieldAlt,
  FaMemory,
  FaTachometerAlt,
  FaBalanceScale,
  FaProjectDiagram,
  FaHdd,
  FaBell,
  FaClipboardList,
  FaSyncAlt,
  FaCloudUploadAlt,
} from "react-icons/fa";

const layers = [
  { name: "Mobile / Web client", tag: "client", icon: <FaMobileAlt />, color: "text-cyan-300 border-cyan-400/40" },
  { name: "React / React Native", tag: "ui", icon: <FaReact />, color: "text-sky-300 border-sky-400/40" },
  { name: "REST API", tag: "http", icon: <FaExchangeAlt />, color: "text-blue-300 border-blue-400/40" },
  { name: "Node.js + Express", tag: "server", icon: <FaNodeJs />, color: "text-emerald-300 border-emerald-400/40" },
  { name: "Auth / middleware", tag: "guard", icon: <FaKey />, color: "text-amber-300 border-amber-400/40" },
  { name: "Redis / caching", tag: "cache", icon: <FaBolt />, color: "text-rose-300 border-rose-400/40" },
  { name: "MongoDB / PostgreSQL", tag: "data", icon: <FaDatabase />, color: "text-green-300 border-green-400/40" },
  { name: "Cloud infrastructure", tag: "infra", icon: <FaCloud />, color: "text-violet-300 border-violet-400/40" },
  { name: "CI/CD + deployment", tag: "ship", icon: <FaRocket />, color: "text-fuchsia-300 border-fuchsia-400/40" },
];

const concepts = [
  { name: "Authentication", icon: <FaUserCheck /> },
  { name: "Authorization", icon: <FaUserLock /> },
  { name: "API security", icon: <FaShieldAlt /> },
  { name: "Caching", icon: <FaMemory /> },
  { name: "Rate limiting", icon: <FaTachometerAlt /> },
  { name: "Load balancing", icon: <FaBalanceScale /> },
  { name: "Database design", icon: <FaProjectDiagram /> },
  { name: "File storage", icon: <FaHdd /> },
  { name: "Notifications", icon: <FaBell /> },
  { name: "Logging", icon: <FaClipboardList /> },
  { name: "CI/CD", icon: <FaSyncAlt /> },
  { name: "Cloud deployment", icon: <FaCloudUploadAlt /> },
];

function ArchitectureSection() {
  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="architecture">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-cyan-300">$ trace --request /api</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How I think about a system</h2>
          <p className="text-gray-400">
            A request’s path from the screen to production. Tools live in Skills — this is the shape of the system.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]" />

          <div className="relative">
            <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-fuchsia-400/60 sm:hidden lg:left-0 lg:right-0 lg:top-[34px] lg:bottom-auto lg:block lg:h-px lg:w-auto lg:bg-gradient-to-r" />
            <motion.div
              className="absolute left-[18px] top-4 hidden h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,1)] lg:top-[30px] lg:block"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <ol className="relative grid gap-4 sm:grid-cols-3 lg:grid-cols-9 lg:gap-2">
              {layers.map((layer, index) => (
                <motion.li
                  key={layer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group flex items-center gap-4 sm:rounded-2xl sm:border sm:border-white/5 sm:bg-white/[0.02] sm:p-3 lg:flex-col lg:gap-3 lg:border-0 lg:bg-transparent lg:p-0 lg:text-center"
                >
                  <span className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-[#05070c] text-lg transition group-hover:scale-110 lg:h-[68px] lg:w-[68px] lg:rounded-2xl lg:text-2xl ${layer.color}`}>
                    {layer.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500">
                      {String(index + 1).padStart(2, "0")} · {layer.tag}
                    </p>
                    <p className="mt-0.5 text-sm font-medium leading-snug text-gray-200">{layer.name}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Concepts across the stack</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {concepts.map((concept, i) => (
              <motion.div
                key={concept.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <span className="text-cyan-300 transition group-hover:scale-110">{concept.icon}</span>
                <span className="text-sm text-gray-200">{concept.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;
