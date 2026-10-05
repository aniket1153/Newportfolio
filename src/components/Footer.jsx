import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Aniket Joshi</h2>
          <p className="mt-1 text-sm">Software Developer · React Native · MERN · DevOps</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-5 text-sm">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
          <li><a href="/Aniket New.pdf" download className="hover:text-white">Resume</a></li>
        </ul>

        <div className="flex gap-5 text-xl">
          <a href="https://github.com/aniket1153" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aniket-joshi-388b81207" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/aniket_joshi_1153/" target="_blank" rel="noreferrer" className="hover:text-pink-300" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-sm">© {new Date().getFullYear()} Aniket Joshi.</p>
    </footer>
  );
};

export default Footer;
