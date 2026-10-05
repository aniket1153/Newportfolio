import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaTimes,
  FaCheck,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaEnvelope,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const orbit = [
  { icon: <FaReact />, color: "text-sky-300", delay: 0 },
  { icon: <FaNodeJs />, color: "text-emerald-400", delay: -4 },
  { icon: <SiMongodb />, color: "text-green-400", delay: -8 },
];

const empty = { name: "", email: "", message: "" };

function ContactSection() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState(empty);

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  const reset = () => {
    setForm(empty);
    setStatus("idle");
  };

  const close = () => {
    setOpen(false);
    setTimeout(reset, 400);
  };

  return (
    <section className="scroll-mt-28 overflow-hidden px-6 py-28 text-white" id="contact">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 font-mono text-sm text-cyan-300">$ ping aniket --message</p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Let’s build{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">something</span>
          </h2>
          <p className="leading-relaxed text-gray-300">
            I’m open to teams and products where I can contribute across React Native, full-stack development, backend work, and the DevOps skills I’m building.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-gray-400">
            <FaMapMarkerAlt className="text-cyan-300" /> Pune, Maharashtra, India
          </p>
        </motion.div>

        <div className="relative flex min-h-[380px] items-center justify-center sm:min-h-[520px]">
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.div
                key="orb"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4, rotate: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative flex h-[290px] w-[290px] items-center justify-center sm:h-[340px] sm:w-[340px]"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20" />
                <div className="absolute inset-10 rounded-full border border-violet-400/15" />

                {orbit.map((item) => (
                  <motion.div
                    key={item.delay}
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: item.delay }}
                  >
                    <motion.span
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: item.delay }}
                      className={`absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/80 text-xl backdrop-blur ${item.color}`}
                    >
                      {item.icon}
                    </motion.span>
                  </motion.div>
                ))}

                <motion.button
                  type="button"
                  onClick={() => setOpen(true)}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="group relative flex h-44 w-44 flex-col items-center justify-center rounded-full"
                  aria-label="Open contact form"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20 [animation-duration:2.4s]" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_80px_rgba(34,211,238,0.55)] transition group-hover:shadow-[0_0_120px_rgba(34,211,238,0.8)]" />
                  <span className="absolute inset-[3px] rounded-full bg-gradient-to-br from-cyan-300/30 to-transparent" />
                  <motion.span
                    className="relative text-4xl text-white drop-shadow"
                    animate={{ rotate: [0, -12, 8, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <FaPaperPlane />
                  </motion.span>
                  <span className="relative mt-3 text-base font-semibold text-white">Let’s talk</span>
                  <span className="relative mt-0.5 font-mono text-[10px] text-white/80">click to open</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="card"
                initial={{ opacity: 0, scale: 0.5, y: 60, rotateX: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 40 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="w-full max-w-2xl [perspective:1200px]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-black/75 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

                  <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    <span className="ml-3 font-mono text-[11px] text-gray-500">new-message.js</span>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close contact form"
                      className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <div className="relative min-h-[400px] p-6 md:p-8">
                    <AnimatePresence mode="wait">
                      {status !== "sent" ? (
                        <motion.form
                          key="form"
                          onSubmit={submit}
                          exit={{ opacity: 0, y: -20 }}
                          className="grid gap-4"
                        >
                          {[
                            { field: "name", label: "const name", type: "text", placeholder: "Your name" },
                            { field: "email", label: "const email", type: "email", placeholder: "you@company.com" },
                          ].map((input, i) => (
                            <motion.label
                              key={input.field}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 + i * 0.08 }}
                              className="block"
                            >
                              <span className="mb-1.5 block font-mono text-xs text-violet-300">
                                {input.label} <span className="text-gray-500">=</span>
                              </span>
                              <input
                                required
                                type={input.type}
                                name={input.field}
                                value={form[input.field]}
                                onChange={update(input.field)}
                                placeholder={input.placeholder}
                                disabled={status === "sending"}
                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-cyan-400/[0.04] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                              />
                            </motion.label>
                          ))}

                          <motion.label
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.31 }}
                            className="block"
                          >
                            <span className="mb-1.5 block font-mono text-xs text-violet-300">
                              const message <span className="text-gray-500">= `</span>
                            </span>
                            <textarea
                              required
                              name="message"
                              rows="4"
                              value={form.message}
                              onChange={update("message")}
                              placeholder="Tell me about the role, product, or idea…"
                              disabled={status === "sending"}
                              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:bg-cyan-400/[0.04] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                            />
                          </motion.label>

                          <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={status === "idle" ? { scale: 1.02 } : undefined}
                            whileTap={status === "idle" ? { scale: 0.97 } : undefined}
                            className="relative mt-2 flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                          >
                            <AnimatePresence mode="wait">
                              {status === "idle" ? (
                                <motion.span
                                  key="label"
                                  exit={{ opacity: 0, y: -10 }}
                                  className="inline-flex items-center gap-3"
                                >
                                  sendMessage()
                                  <FaPaperPlane />
                                </motion.span>
                              ) : (
                                <motion.span
                                  key="plane"
                                  initial={{ x: -140, y: 0, rotate: 0, opacity: 1 }}
                                  animate={{ x: [-140, 0, 520], y: [0, -6, -90], rotate: [0, 0, -25], opacity: [1, 1, 0] }}
                                  transition={{ duration: 1.3, times: [0, 0.35, 1], ease: "easeIn" }}
                                  className="text-xl"
                                >
                                  <FaPaperPlane />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="sent"
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 16 }}
                          className="flex min-h-[340px] flex-col items-center justify-center text-center"
                        >
                          <div className="relative">
                            {[0, 1, 2].map((ring) => (
                              <motion.span
                                key={ring}
                                className="absolute inset-0 rounded-full border border-emerald-400/50"
                                initial={{ scale: 1, opacity: 0.8 }}
                                animate={{ scale: 2.4, opacity: 0 }}
                                transition={{ duration: 1.8, repeat: Infinity, delay: ring * 0.6 }}
                              />
                            ))}
                            <motion.span
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-3xl text-black shadow-[0_0_50px_rgba(52,211,153,0.6)]"
                            >
                              <FaCheck />
                            </motion.span>
                          </div>
                          <p className="mt-8 font-mono text-sm text-emerald-300">200 OK · message delivered</p>
                          <h3 className="mt-2 text-2xl font-semibold">
                            Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
                          </h3>
                          <p className="mt-2 max-w-sm text-gray-400">Your message is on its way. I’ll get back to you soon.</p>
                          <button
                            type="button"
                            onClick={reset}
                            className="mt-6 rounded-xl border border-white/15 px-5 py-2.5 font-mono text-sm text-gray-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
                          >
                            send another →
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { href: "https://github.com/aniket1153", icon: <FaGithub />, label: "aniket1153", hover: "hover:border-white/50" },
            { href: "https://www.linkedin.com/in/aniket-joshi-388b81207", icon: <FaLinkedin />, label: "LinkedIn", hover: "hover:border-sky-400/60 hover:text-sky-300" },
            { href: "https://www.instagram.com/aniket_joshi_1153/", icon: <FaInstagram />, label: "Instagram", hover: "hover:border-pink-400/60 hover:text-pink-300" },
            { href: "#contact", icon: <FaEnvelope />, label: "Message", hover: "hover:border-cyan-400/60 hover:text-cyan-300", onClick: () => setOpen(true) },
          ].map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={link.onClick}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              className={`inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/50 px-5 py-2.5 text-sm backdrop-blur transition ${link.hover}`}
            >
              {link.icon} {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
