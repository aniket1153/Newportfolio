import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-xl font-bold">Aniket.dev</h2>
            <p className="text-sm mt-1">
              MERN Stack Developer · Building scalable web apps
            </p>
          </div>

          {/* Links */}
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>

            {/* Resume */}
            <li>
              <a
                href="/Aniket New.pdf"
                download
                className="hover:text-white transition"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl">
            <a href="https://github.com/" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="mailto:aniket@example.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Aniket Joshi. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
