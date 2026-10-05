import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-gray-300">
        <a href="#home" className="text-xl font-bold text-white">
          Aniket.dev
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Aniket New.pdf"
              download
              className="rounded-full border border-white px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="text-xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-black/90 px-6 py-6 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-5 text-center text-lg">
            {links.map((link) => (
              <li key={link.href} onClick={() => setIsOpen(false)}>
                <a href={link.href} className="text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Aniket New.pdf"
                download
                className="inline-block rounded-full border border-white px-6 py-3 text-white"
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
