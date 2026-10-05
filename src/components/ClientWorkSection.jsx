import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaImages,
  FaThLarge,
  FaSearch,
  FaFileInvoice,
  FaMobileAlt,
  FaBoxOpen,
  FaLock,
  FaHandshake,
} from "react-icons/fa";
import desktopShot from "../assets/client-sunirman-desktop.jpg";
import mobileShot from "../assets/client-sunirman-mobile.jpg";

const SITE = "https://www.sunirmangraphics.com/";

const features = [
  { icon: <FaImages />, title: "Hero carousel", text: "Rotating banners with Get a Quote calls to action." },
  { icon: <FaThLarge />, title: "Category catalog", text: "Nine print categories, from business essentials to packaging." },
  { icon: <FaBoxOpen />, title: "Product showcase", text: "Trending products and a creations gallery with details." },
  { icon: <FaFileInvoice />, title: "Enquiry flow", text: "Enquire Now on every product, wired to a backend API." },
  { icon: <FaSearch />, title: "Product search", text: "Search across the catalog straight from the navbar." },
  { icon: <FaMobileAlt />, title: "Mobile first", text: "Responsive layout with a mobile menu for on-the-go clients." },
];

const stack = ["React", "React Router", "Axios", "REST API", "Vercel"];

const steps = ["Requirements", "Design", "Build", "Deploy", "Handover"];

function ClientWorkSection() {
  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="client-work">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/20 bg-black/65 backdrop-blur">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center gap-3 border-b border-white/10 px-6 py-3 font-mono text-xs text-gray-400 md:px-10">
            <span className="text-orange-300">~/freelance/sunirman-graphics</span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-amber-300">
              <FaHandshake /> first client
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              live
            </span>
            <span className="ml-auto">printing · packaging · design</span>
          </div>

          <div className="relative grid items-center gap-12 p-6 md:p-10 lg:grid-cols-[1fr_1.1fr]">
            <motion.div
              className="min-w-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-sm text-orange-300">// client work · freelance</p>
              <h2 className="mt-3 bg-gradient-to-r from-amber-200 via-orange-300 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                Sunirman Graphics
              </h2>
              <p className="mt-3 text-lg text-gray-200">Business website · designed, built, and deployed end to end</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-gray-300">
                My first client project: a complete website for a creative printing and packaging studio. It presents their
                product catalog, services, and past creations, and turns visitors into enquiries — from the first
                conversation about requirements to the live domain.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={SITE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(249,115,22,0.55)]"
                >
                  Visit live site <FaExternalLinkAlt className="text-xs" />
                </a>
                <span className="font-mono text-xs text-gray-500">sunirmangraphics.com</span>
              </div>
            </motion.div>

            <motion.div
              className="relative min-w-0 pb-10 pr-6 sm:pb-12 sm:pr-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <a
                href={SITE}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Sunirman Graphics website"
                className="group block overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0f] shadow-[0_0_60px_rgba(249,115,22,0.18)]"
              >
                <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-gray-400">
                    <FaLock className="shrink-0 text-[9px] text-emerald-400" />
                    sunirmangraphics.com
                  </span>
                </div>
                <div
                  className="site-scroll aspect-[16/10] w-full bg-white"
                  style={{ backgroundImage: `url(${desktopShot})`, animationDuration: "28s" }}
                />
              </a>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[30%] min-w-[110px] max-w-[170px]"
              >
                <div className="rounded-[1.6rem] border-[5px] border-white/20 bg-[#05070c] p-1 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
                  <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-white/20" />
                  <div
                    className="site-scroll aspect-[9/19] w-full overflow-hidden rounded-[1.1rem] bg-white"
                    style={{ backgroundImage: `url(${mobileShot})`, animationDuration: "45s" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative grid gap-4 border-t border-white/10 p-6 sm:grid-cols-2 md:p-10 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-orange-400/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400/20 to-pink-500/20 text-orange-300">
                  {feature.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex flex-wrap items-center gap-2 border-t border-white/10 px-6 py-5 font-mono text-xs md:px-10">
            <span className="mr-2 text-gray-500">$ delivery</span>
            {steps.map((step, i) => (
              <React.Fragment key={step}>
                <span className="rounded-md border border-emerald-400/25 bg-emerald-400/5 px-2.5 py-1 text-emerald-300">
                  ✓ {step}
                </span>
                {i < steps.length - 1 && <span className="text-gray-600">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientWorkSection;
