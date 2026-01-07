import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-300">

        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          Aniket.dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>

          {/* Resume Button */}
          <li>
            <a
              href="/Aniket New.pdf"
              download
              className="border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 py-6">
          <ul className="flex flex-col gap-6 text-center text-lg">

            <li onClick={() => setIsOpen(false)}>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>

            <li onClick={() => setIsOpen(false)}>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>

            <li onClick={() => setIsOpen(false)}>
              <Link to="/projects" className="text-white">
                Projects
              </Link>
            </li>

            <li onClick={() => setIsOpen(false)}>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>

            {/* Resume Button Mobile */}
            <li>
              <a
                href="/Aniket New.pdf"
                download
                className="inline-block border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
