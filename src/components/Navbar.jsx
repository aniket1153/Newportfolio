import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || isOpen ? "border-b border-white/10 bg-[#05070c]/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">AJ</span>
          <span className="text-base font-semibold text-white">Aniket Joshi</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-cyan-300 transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li className="ml-3">
            <a
              href="/Aniket New.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <FaDownload className="text-xs" />
              Resume
            </a>
          </li>
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-lg text-white hover:bg-white/5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block border-b border-white/5 py-3.5 text-base ${
                    active === link.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Aniket New.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 text-sm font-medium text-white"
          >
            <FaDownload className="text-xs" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
