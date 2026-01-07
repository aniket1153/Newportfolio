import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import postImg from "../assets/Post1.png";

const LinkedInPostsSection = () => {
  return (
    <section className="bg-black text-white py-28 px-6" id="linkedin">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LinkedIn Knowledge Sharing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I actively share frontend concepts, JavaScript insights, and real-world learnings on LinkedIn.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center gap-14">

          {/* FEATURED CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-w-lg w-full backdrop-blur shadow-[0_0_40px_rgba(59,130,246,0.12)]"
          >
            {/* Image */}
            <img
              src={postImg}
              alt="LinkedIn Post"
              className="w-full h-44 md:h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-blue-400 mb-3">
                <FaLinkedin />
                <span className="font-semibold text-sm">Featured LinkedIn Post</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Stop Writing Static HTML — Start Mastering the DOM!
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Explained how the DOM acts as a bridge between HTML and JavaScript,
                enabling dynamic content, real-time styling, and interactive UI behavior.
              </p>

              <a
                href="https://www.linkedin.com/posts/aniket-joshi-388b81207_javascript-webdevelopment-frontend-activity-7414553865183813632-Y4Yz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-400 hover:text-black transition"
              >
                View on LinkedIn →
              </a>
            </div>
          </motion.div>

          {/* SIDE MINI CARDS */}
          <div className="relative w-full lg:w-[420px] h-[260px] hidden lg:block">

            {/* Mini Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 left-0 bg-white/5 border border-yellow-400/20 p-5 rounded-xl w-64 rotate-[-6deg] shadow-[0_0_25px_rgba(250,204,21,0.25)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <SiJavascript className="text-yellow-400 text-lg" />
                <span className="text-xs text-yellow-400">JavaScript</span>
              </div>
              <p className="text-sm text-gray-300">
                JavaScript just doesn’t “work” on HTML — the DOM makes it possible 🌳
              </p>
            </motion.div>

            {/* Mini Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute bottom-0 right-0 bg-white/5 border border-cyan-400/20 p-5 rounded-xl w-64 rotate-[6deg] shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaReact className="text-cyan-400 text-lg animate-spin-slow" />
                <span className="text-xs text-cyan-400">Frontend</span>
              </div>
              <p className="text-sm text-gray-300">
                Learning frontend deeply, not just frameworks 🚀
              </p>
            </motion.div>

            {/* Decorative Triangle */}
            <div
              className="absolute -top-6 right-20 w-0 h-0 
              border-l-[36px] border-l-transparent 
              border-r-[36px] border-r-transparent 
              border-b-[52px] border-b-blue-500/20 rotate-12"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsSection;
