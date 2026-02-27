import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import postImg from "../assets/Post1.png";

const LinkedInPostsSection = () => {
  return (
    <section
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
      id="linkedin"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Knowledge Sharing on{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              LinkedIn
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I share deep frontend concepts, JavaScript architecture thinking,
            and real-world engineering insights.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center gap-16">

          {/* FEATURED CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="group relative z-10 max-w-xl w-full"
          >
            <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.15)] transition duration-500">

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              {/* Image */}
              <img
                src={postImg}
                alt="LinkedIn Post"
                className="w-full h-52 md:h-60 object-cover opacity-90 group-hover:scale-105 transition duration-700"
              />

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 text-blue-400 mb-4">
                  <FaLinkedin className="text-lg" />
                  <span className="font-medium text-sm tracking-wide">
                    Featured Post
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 leading-snug">
                  Stop Writing Static HTML — Master the DOM Instead
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  A deep dive into how the DOM bridges HTML & JavaScript —
                  enabling dynamic rendering, UI control, and scalable frontend architecture.
                </p>

                <a
                  href="https://www.linkedin.com/posts/aniket-joshi-388b81207_javascript-webdevelopment-frontend-activity-7414553865183813632-Y4Yz"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-full font-medium text-black hover:opacity-90 transition"
                >
                  View Post →
                </a>
              </div>
            </div>
          </motion.div>

          {/* SIDE FLOATING CARDS */}
          <div className="relative w-full lg:w-[420px] h-[300px] hidden lg:block">

            {/* Mini Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 left-0 bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 p-6 rounded-2xl w-72 backdrop-blur-lg shadow-[0_0_35px_rgba(250,204,21,0.2)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <SiJavascript className="text-yellow-400 text-xl" />
                <span className="text-xs text-yellow-400 uppercase tracking-widest">
                  JavaScript
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                JavaScript doesn’t magically work on HTML —
                the DOM makes interaction possible.
              </p>
            </motion.div>

            {/* Mini Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-0 right-0 bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 p-6 rounded-2xl w-72 backdrop-blur-lg shadow-[0_0_35px_rgba(34,211,238,0.2)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaReact className="text-cyan-400 text-xl animate-spin-slow" />
                <span className="text-xs text-cyan-400 uppercase tracking-widest">
                  Frontend
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Learning frontend deeply —
                architecture, patterns, and performance.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsSection;