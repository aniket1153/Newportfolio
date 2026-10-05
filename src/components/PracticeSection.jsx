import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaDocker, FaSyncAlt, FaAws, FaCheck } from "react-icons/fa";

const blocks = [
  {
    title: "Version control",
    icon: <FaGitAlt />,
    status: "shipping",
    progress: 90,
    items: ["Git", "GitHub", "Branching", "Pull requests", "Merge workflows"],
    color: "text-orange-400",
  },
  {
    title: "Containers",
    icon: <FaDocker />,
    status: "learning",
    progress: 45,
    items: ["Docker", "Images", "Containers", "Docker Compose"],
    color: "text-sky-400",
  },
  {
    title: "CI/CD",
    icon: <FaSyncAlt />,
    status: "learning",
    progress: 40,
    items: ["Build pipelines", "Automated testing", "Deployment pipelines", "Environment variables", "Release workflows"],
    color: "text-violet-400",
  },
  {
    title: "Cloud",
    icon: <FaAws />,
    status: "learning",
    progress: 35,
    items: ["AWS fundamentals", "Deployment", "Storage", "Compute", "Networking basics", "Redis as a cache"],
    color: "text-amber-300",
  },
];

const apiPractices = [
  ["GET", "REST API design"],
  ["POST", "CRUD APIs"],
  ["AUTH", "JWT authentication"],
  ["AUTH", "Authorization"],
  ["MW", "Middleware"],
  ["ERR", "Error handling"],
  ["VAL", "Validation"],
  ["GET", "Pagination"],
  ["GET", "Filtering"],
  ["TEST", "API testing with Postman"],
];

const methodColor = {
  GET: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
  POST: "text-amber-300 bg-amber-400/10 border-amber-400/30",
  AUTH: "text-violet-300 bg-violet-400/10 border-violet-400/30",
  MW: "text-sky-300 bg-sky-400/10 border-sky-400/30",
  ERR: "text-rose-300 bg-rose-400/10 border-rose-400/30",
  VAL: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
  TEST: "text-orange-300 bg-orange-400/10 border-orange-400/30",
};

function PracticeSection() {
  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="devops">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-cyan-300">$ status --devops --api</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">DevOps and APIs</h2>
          <p className="text-gray-400">
            I already ship with Git, Node, and REST. Containers, pipelines, AWS, and Redis are active study — marked honestly below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {blocks.map((block, i) => {
              const shipping = block.status === "shipping";
              return (
                <motion.article
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur transition hover:border-white/25"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl ${block.color}`}>
                      {block.icon}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] ${
                        shipping
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-amber-400/30 bg-amber-400/10 text-amber-300"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${shipping ? "bg-emerald-400" : "animate-pulse bg-amber-400"}`} />
                      {block.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{block.title}</h3>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className={`h-full rounded-full ${shipping ? "bg-gradient-to-r from-emerald-400 to-cyan-400" : "bg-gradient-to-r from-amber-400 to-orange-500"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${block.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {block.items.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-black/70 backdrop-blur"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 font-mono text-[11px] text-gray-500">api-work.http</span>
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                <FaCheck className="text-[9px]" /> 200 OK
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">API work I already do</h3>
              <p className="mt-1 text-sm text-gray-400">Day-to-day backend practice, not just theory.</p>
              <ul className="mt-5 space-y-2">
                {apiPractices.map(([method, label], i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 transition hover:border-white/15"
                  >
                    <span className={`w-14 shrink-0 rounded border px-1.5 py-0.5 text-center font-mono text-[10px] font-semibold ${methodColor[method]}`}>
                      {method}
                    </span>
                    <span className="text-sm text-gray-200">{label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default PracticeSection;
